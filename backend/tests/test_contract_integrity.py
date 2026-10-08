from __future__ import annotations

"""Contract-level integrity audit for /api/exercises/generate.

The CI workflow generates backend/data/verbs/*.json immediately before this
script, so the audit always runs against the complete 7,116-verb catalog.

This test intentionally exercises ExerciseService directly: the HTTP route is
a thin parameter/exception adapter, while the service owns the exercise
contract that the frontend will consume.
"""

from collections import Counter
from pathlib import Path
from typing import Any

from app.core.conjugation_engine import ConjugationEngine
from app.modules.conjugation.exercise_service import (
    ELISION_INITIALS,
    PRONOUNS,
    REFLEXIVE_PRONOUNS,
    ExerciseService,
)
from app.modules.conjugation.repository import ConjugationRepository
from app.core.subjects import ALL_SUBJECT_PRONOUNS


BACKEND_DIR = Path(__file__).resolve().parents[1]
DATA_DIR = BACKEND_DIR / "data" / "verbs"
REPORT_PATH = Path(__file__).resolve().parent / "contract-integrity-report.md"

TENSES = (
    "présent de l'indicatif",
    "impératif présent",
    "passé composé",
    "imparfait",
    "futur simple",
    "conditionnel présent",
    "plus-que-parfait",
    "conditionnel passé",
    "futur antérieur",
    "subjonctif présent",
    "subjonctif passé",
)

CONTRACT_KEYS = (
    "verb_id",
    "infinitif",
    "group",
    "family_id",
    "pattern_id",
    "pronominal",
    "auxiliary",
    "tense_id",
    "pronoun_index",
    "pronoun",
    "subject_id",
    "subject_pronoun",
    "gender",
    "number",
    "correct_answer",
)


def _load_service() -> tuple[ConjugationRepository, ExerciseService]:
    repository = ConjugationRepository(DATA_DIR)
    repository.load()
    return repository, ExerciseService(repository)


def _is_non_empty(value: Any) -> bool:
    return value is not None and (
        not isinstance(value, str) or bool(value.strip())
    )


def _assert_contract(question: dict[str, Any]) -> None:
    missing = [key for key in CONTRACT_KEYS if key not in question]
    assert not missing, f"Propiedades ausentes: {missing}"

    for key in ("verb_id", "pronoun", "correct_answer"):
        assert _is_non_empty(question[key]), (
            f"Propiedad vacía o nula: {key}={question[key]!r}"
        )

    assert question["subject_pronoun"] in ALL_SUBJECT_PRONOUNS
    assert question["gender"] in ("masculin", "féminin")
    assert question["number"] in ("singulier", "pluriel")
    assert question["group"] in (1, 2, 3)
    assert question["tense_id"] in TENSES
    assert isinstance(question["correct_answer"], str)
    assert question["correct_answer"].strip()


def _supports(
    service: ExerciseService,
    verb: Any,
    tense_id: str,
) -> bool:
    return service._supports_tenses(
        verb=verb,
        tense_ids=[tense_id],
        auxiliary=None,
    )


def _audit_subject_model(
    repository: ConjugationRepository,
    service: ExerciseService,
) -> None:
    simple_subjects = service._valid_subjects("présent de l'indicatif")
    assert [subject.display for subject in simple_subjects] == [
        "je", "tu", "il/elle", "nous", "vous", "ils/elles"
    ]

    compound_subjects = service._valid_subjects("plus-que-parfait")
    assert len(compound_subjects) == 17

    on_subjects = [
        subject.display
        for subject in compound_subjects
        if subject.pronoun == "on"
    ]
    assert on_subjects == [
        "on (masculin singulier)",
        "on (masculin pluriel)",
        "on (féminin pluriel)",
    ]

    implicit_subjects = {
        subject.display: (subject.gender, subject.number)
        for subject in compound_subjects
        if subject.pronoun in {"il", "elle", "ils", "elles"}
    }
    assert implicit_subjects == {
        "il": ("masculin", "singulier"),
        "elle": ("féminin", "singulier"),
        "ils": ("masculin", "pluriel"),
        "elles": ("féminin", "pluriel"),
    }


def _audit_all_tenses(
    service: ExerciseService,
    failures: list[str],
) -> dict[str, Any]:
    results: dict[str, Any] = {}

    for tense_id in TENSES:
        try:
            questions = service.generate_exercise_set(
                groups=[1, 2, 3],
                family_id=None,
                tense_ids=[tense_id],
                limit=30,
            )

            counts = Counter(question["group"] for question in questions)
            assert len(questions) == 30
            assert counts == {1: 10, 2: 10, 3: 10}, dict(counts)

            for question in questions:
                _assert_contract(question)

            results[tense_id] = {
                "status": "PASS",
                "questions": len(questions),
                "groups": dict(counts),
            }
        except Exception as exc:
            failures.append(
                f"[TENSE] {tense_id}: {type(exc).__name__}: {exc}"
            )
            results[tense_id] = {
                "status": "FAIL",
                "error": f"{type(exc).__name__}: {exc}",
            }

    return results


def _audit_massive_catalog(
    repository: ConjugationRepository,
    service: ExerciseService,
    failures: list[str],
) -> dict[str, Any]:
    """Exercise every catalog verb for every supported legacy tense."""
    tested = 0
    skipped = 0
    errors = 0
    by_tense = Counter()

    for verb in repository.list_verbs():
        for tense_id in TENSES:
            if not _supports(service, verb, tense_id):
                skipped += 1
                continue

            tested += 1
            try:
                questions = service.generate_exercise_set(
                    groups=[verb.groupe],
                    family_id=verb.familyId,
                    tense_ids=[tense_id],
                    verb_id=verb.id,
                    pronominal=verb.pronominal,
                    auxiliary=None,
                    limit=1,
                )
                assert len(questions) == 1
                _assert_contract(questions[0])
                assert questions[0]["verb_id"] == verb.id
                assert questions[0]["tense_id"] == tense_id
                by_tense[tense_id] += 1
            except Exception as exc:
                errors += 1
                failures.append(
                    f"[VERB] {verb.id} / {tense_id}: "
                    f"{type(exc).__name__}: {exc}"
                )

    return {
        "tested": tested,
        "skipped": skipped,
        "errors": errors,
        "successful_by_tense": dict(by_tense),
    }


def _find_elision_cases(
    repository: ConjugationRepository,
    service: ExerciseService,
) -> list[dict[str, str]]:
    engine = ConjugationEngine(repository)
    cases: list[dict[str, str]] = []

    for verb in repository.list_verbs():
        if not verb.pronominal:
            continue

        for tense_id in TENSES:
            if not _supports(service, verb, tense_id):
                continue

            result = service.generate_exercise_set(
                groups=[verb.groupe],
                family_id=verb.familyId,
                tense_ids=[tense_id],
                verb_id=verb.id,
                pronominal=True,
                limit=6,
            )

            raw = engine.conjugate_verb(
                verb_id=verb.id,
                tense_id=tense_id,
            )

            for question in result:
                if tense_id == "impératif présent":
                    continue

                pronoun = question["subject_pronoun"]
                reflexive = REFLEXIVE_PRONOUNS.get(pronoun)
                if reflexive not in ("me", "te", "se"):
                    continue

                raw_forms = service._extract_forms_from_engine_result(raw)
                raw_form = service._resolve_form(
                    raw_forms,
                    question["pronoun_index"],
                )
                if not raw_form or raw_form[0].lower() not in ELISION_INITIALS:
                    continue

                expected_prefix = {
                    "me": "m'",
                    "te": "t'",
                    "se": "s'",
                }[reflexive]
                assert question["correct_answer"].startswith(expected_prefix), (
                    f"{verb.id}/{tense_id}/{pronoun}: "
                    f"se esperaba el prefijo {expected_prefix!r}, "
                    f"obtenido={question['correct_answer']!r}"
                )

                cases.append(
                    {
                        "verb_id": verb.id,
                        "tense_id": tense_id,
                        "pronoun": pronoun,
                        "answer": question["correct_answer"],
                        "expected_prefix": expected_prefix,
                    }
                )

    if not cases:
        raise AssertionError(
            "No se encontró ningún caso pronominal con elisión para validar."
        )

    return cases


def _audit_compound_subject_agreement(
    service: ExerciseService,
) -> None:
    aller_questions = service.generate_exercise_set(
        groups=[3],
        family_id="aller-type",
        tense_ids=["plus-que-parfait"],
        verb_id="aller",
        auxiliary="être",
        limit=18,
    )

    expected = {
        "je (masculin singulier)": "étais allé",
        "je (féminin singulier)": "étais allée",
        "tu (masculin singulier)": "étais allé",
        "tu (féminin singulier)": "étais allée",
        "il": "était allé",
        "elle": "était allée",
        "on (masculin singulier)": "était allé",
        "on (masculin pluriel)": "était allés",
        "on (féminin pluriel)": "était allées",
        "nous (masculin pluriel)": "étions allés",
        "nous (féminin pluriel)": "étions allées",
        "vous (masculin singulier)": "étiez allé",
        "vous (féminin singulier)": "étiez allée",
        "vous (masculin pluriel)": "étiez allés",
        "vous (féminin pluriel)": "étiez allées",
        "ils": "étaient allés",
        "elles": "étaient allées",
    }

    actual = {
        question["pronoun"]: question["correct_answer"]
        for question in aller_questions
    }
    assert actual == expected

    avoir_questions = service.generate_exercise_set(
        groups=[1],
        family_id="er-regular",
        tense_ids=["passé composé"],
        verb_id="parler",
        auxiliary="avoir",
        limit=18,
    )
    assert {
        question["correct_answer"]
        for question in avoir_questions
    } == {"ai parlé", "as parlé", "a parlé", "avons parlé", "avez parlé", "ont parlé"}


def _audit_canonical_vs_legacy(
    repository: ConjugationRepository,
    service: ExerciseService,
) -> dict[str, Any]:
    canonical = repository.get_verb("parler")
    legacy = repository.get_verb("abaisser")

    assert canonical.familyId is not None
    assert canonical.patternId is not None
    assert legacy.familyId is None
    assert legacy.patternId is None

    samples: dict[str, Any] = {}
    for verb in (canonical, legacy):
        questions = service.generate_exercise_set(
            groups=[verb.groupe],
            family_id=verb.familyId,
            tense_ids=["présent de l'indicatif"],
            verb_id=verb.id,
            pronominal=verb.pronominal,
            limit=1,
        )
        question = questions[0]
        _assert_contract(question)

        samples[verb.id] = {
            "keys": sorted(question.keys()),
            "group": question["group"],
            "tense_id": question["tense_id"],
            "family_id": question["family_id"],
            "pattern_id": question["pattern_id"],
            "correct_answer_non_empty": bool(
                question["correct_answer"].strip()
            ),
        }

    assert samples["parler"]["keys"] == samples["abaisser"]["keys"]
    return samples


def _audit_compound_auxiliary_metadata(
    repository: ConjugationRepository,
    failures: list[str],
) -> dict[str, Any]:
    compound_tenses = [
        tense
        for tense in repository.tense_rules.values()
        if tense.type == "composé"
    ]
    result: dict[str, Any] = {}

    for tense in compound_tenses:
        issues: list[str] = []
        if not tense.auxiliaireTemps:
            issues.append("auxiliaireTemps ausente")
        if not tense.participe:
            issues.append("participe ausente")

        result[tense.id] = {
            "status": "PASS" if not issues else "FAIL",
            "auxiliaireTemps": tense.auxiliaireTemps,
            "participe": tense.participe,
            "issues": issues,
        }

        for issue in issues:
            failures.append(f"[AUXILIARY] {tense.id}: {issue}")

    return result


def _write_report(
    *,
    failures: list[str],
    repository: ConjugationRepository,
    tense_results: dict[str, Any],
    mass_results: dict[str, Any],
    elision_cases: list[dict[str, str]] | None,
    contract_results: dict[str, Any] | None,
    auxiliary_results: dict[str, Any],
) -> None:
    status = "PASS" if not failures else "FAIL"

    lines = [
        "# Contract Integrity Audit",
        "",
        f"**Status:** {status}",
        "",
        "## Catalog",
        "",
        f"- Verbos cargados: {len(repository.verbs)}",
        f"- Familias: {len(repository.families)}",
        f"- Patrones: {len(repository.patterns)}",
        f"- Tiempos: {len(repository.tense_rules)}",
        "",
        "## 11 tiempos",
        "",
    ]

    for tense_id, result in tense_results.items():
        lines.append(
            f"- {tense_id}: **{result['status']}**"
            + (
                f" — {result['questions']} preguntas; "
                f"grupos={result['groups']}"
                if result["status"] == "PASS"
                else f" — {result['error']}"
            )
        )

    lines.extend(
        [
            "",
            "## Auditoría masiva",
            "",
            f"- Casos verbo/tiempo probados: {mass_results['tested']}",
            f"- Casos sin forma disponible: {mass_results['skipped']}",
            f"- Errores: {mass_results['errors']}",
            "",
            "## Elisión pronominal",
            "",
        ]
    )

    if elision_cases:
        lines.append(
            f"- Casos de elisión verificados: {len(elision_cases)}"
        )
        for case in elision_cases[:20]:
            lines.append(
                f"- {case['verb_id']} / {case['tense_id']} / "
                f"{case['pronoun']} → {case['answer']}"
            )
    else:
        lines.append("- No certificado.")

    lines.extend(["", "## Canonical vs legacy", ""])
    if contract_results:
        lines.extend(
            [
                "- parler: contrato válido.",
                "- abaisser: contrato válido.",
                "- Las claves de salida son idénticas.",
            ]
        )
    else:
        lines.append("- No certificado.")

    lines.extend(["", "## Tiempos compuestos / auxiliares", ""])
    for tense_id, result in auxiliary_results.items():
        lines.append(
            f"- {tense_id}: **{result['status']}** — "
            f"auxiliaireTemps={result['auxiliaireTemps']!r}, "
            f"participe={result['participe']!r}"
        )

    lines.extend(["", "## Discrepancias", ""])
    if failures:
        lines.extend(f"- {failure}" for failure in failures)
    else:
        lines.extend(
            [
                "- Ninguna discrepancia detectada.",
                "- El contrato queda certificado para la fase de adapter frontend.",
            ]
        )

    REPORT_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> None:
    repository, service = _load_service()
    failures: list[str] = []
    _audit_subject_model(repository, service)

    assert len(repository.verbs) == 7116, (
        f"Se esperaban 7116 verbos; encontrados: {len(repository.verbs)}"
    )
    assert len(repository.tense_rules) == 11, (
        f"Se esperaban 11 tiempos; encontrados: {len(repository.tense_rules)}"
    )

    tense_results = _audit_all_tenses(service, failures)
    mass_results = _audit_massive_catalog(repository, service, failures)

    try:
        elision_cases = _find_elision_cases(repository, service)
    except Exception as exc:
        failures.append(f"[ELISION] {type(exc).__name__}: {exc}")
        elision_cases = None

    try:
        contract_results = _audit_canonical_vs_legacy(repository, service)
    except Exception as exc:
        failures.append(f"[CONTRACT] {type(exc).__name__}: {exc}")
        contract_results = None

    auxiliary_results = _audit_compound_auxiliary_metadata(
        repository,
        failures,
    )

    _write_report(
        failures=failures,
        repository=repository,
        tense_results=tense_results,
        mass_results=mass_results,
        elision_cases=elision_cases,
        contract_results=contract_results,
        auxiliary_results=auxiliary_results,
    )

    print(f"Contract integrity report: {REPORT_PATH}")
    print(f"Status: {'PASS' if not failures else 'FAIL'}")

    if failures:
        raise SystemExit(
            f"Contract integrity audit failed with {len(failures)} discrepancy(ies)."
        )


if __name__ == "__main__":
    main()


