from __future__ import annotations

from typing import Any

from app.core.morphology import (
    agree_past_participle,
    compose_compound_entry,
    extract_conjugated_form,
)
from app.database.models import Family, Pattern, TenseRule, Verb
from app.core.subjects import Subject
from app.modules.conjugation.repository import ConjugationRepository


PRONOUNS: tuple[str, ...] = (
    "je",
    "tu",
    "il/elle",
    "nous",
    "vous",
    "ils/elles",
)


class ConjugationEngine:
    """Regression-first conjugation engine with native compound-tense resolution."""

    def __init__(self, repository: ConjugationRepository):
        self.repository = repository

    def conjugate_verb(
        self,
        verb_id: str,
        tense_id: str,
        auxiliary: str | None = None,
    ) -> dict[str, Any]:
        verb = self.repository.get_verb(verb_id)
        tense_rule = self.repository.get_tense_rule(tense_id)

        if verb.familyId is None:
            legacy_forms = self._resolve_legacy(
                verb=verb,
                tense_rule=tense_rule,
                auxiliary=auxiliary,
            )
            return {
                "verb": verb,
                "family": None,
                "pattern": None,
                "tense_rule": tense_rule,
                "legacy_forms": legacy_forms,
                "source": "legacy",
            }

        family = self.repository.get_family(verb.familyId)
        pattern = self.repository.get_pattern(verb.patternId)
        legacy_forms = self._resolve_legacy(
            verb=verb,
            tense_rule=tense_rule,
            auxiliary=auxiliary,
        )

        return {
            "verb": verb,
            "family": family,
            "pattern": pattern,
            "tense_rule": tense_rule,
            "legacy_forms": legacy_forms,
            "source": "legacy" if legacy_forms is not None else "python",
        }

    def _resolve_legacy(
        self,
        *,
        verb: Verb,
        tense_rule: TenseRule,
        auxiliary: str | None = None,
    ) -> dict[str, Any] | list[Any]:
        if not verb.legacy_formes:
            raise ValueError(
                f"El verbo '{verb.id}' no contiene '_legacy_formes'."
            )

        if tense_rule.type == "composé":
            return self._resolve_compound_legacy(
                verb=verb,
                tense_rule=tense_rule,
                auxiliary=auxiliary,
            )

        forms = verb.legacy_formes.get(tense_rule.id)
        if forms is None:
            raise ValueError(
                f"No existe una forma legacy para '{verb.id}' / "
                f"'{tense_rule.id}'."
            )

        if isinstance(forms, (dict, list)):
            return forms

        raise ValueError(
            f"Formato inválido en _legacy_formes para "
            f"'{verb.id}' / '{tense_rule.id}'."
        )

    def _resolve_compound_legacy(
        self,
        *,
        verb: Verb,
        tense_rule: TenseRule,
        auxiliary: str | None,
    ) -> list[list[str]]:
        if not tense_rule.auxiliaireTemps:
            raise ValueError(
                f"El tiempo compuesto '{tense_rule.id}' no define "
                "'auxiliaireTemps'."
            )

        participle = verb.participePasse
        if not isinstance(participle, str) or not participle.strip():
            raise ValueError(
                f"El verbo '{verb.id}' no tiene 'participePasse' válido."
            )

        available_auxiliaries = list(
            dict.fromkeys(
                verb.auxiliaires
                or ([verb.auxiliaire] if verb.auxiliaire else [])
            )
        )
        if not available_auxiliaries:
            raise ValueError(
                f"El verbo '{verb.id}' no define ningún auxiliar."
            )

        selected_auxiliary = auxiliary or verb.auxiliaire
        if selected_auxiliary not in available_auxiliaries:
            raise ValueError(
                f"El verbo '{verb.id}' no admite el auxiliar "
                f"'{selected_auxiliary}'."
            )

        auxiliary_verb = self.repository.get_verb(selected_auxiliary)
        auxiliary_forms = auxiliary_verb.legacy_formes
        if not auxiliary_forms:
            raise ValueError(
                f"El auxiliar '{selected_auxiliary}' no contiene "
                "'_legacy_formes'."
            )

        simple_forms = auxiliary_forms.get(tense_rule.auxiliaireTemps)
        if simple_forms is None:
            raise ValueError(
                f"El auxiliar '{selected_auxiliary}' no tiene la forma "
                f"'{tense_rule.auxiliaireTemps}'."
            )

        if not isinstance(simple_forms, list) or len(simple_forms) < len(PRONOUNS):
            raise ValueError(
                f"Las formas del auxiliar '{selected_auxiliary}' para "
                f"'{tense_rule.auxiliaireTemps}' no contienen los seis sujetos."
            )

        result: list[list[str]] = []
        for index, entry in enumerate(simple_forms[: len(PRONOUNS)]):
            default_subject = PRONOUNS[index]
            result.append(
                compose_compound_entry(
                    auxiliary_entry=entry,
                    participle=participle,
                    default_subject=default_subject,
                )
            )

        return result

    def conjugate_subject(
        self,
        *,
        verb_id: str,
        tense_id: str,
        subject: Subject,
        auxiliary: str | None = None,
    ) -> str:
        """Resolve one exercise subject without changing the verb data contract."""
        result = self.conjugate_verb(
            verb_id=verb_id,
            tense_id=tense_id,
            auxiliary=auxiliary,
        )
        tense_rule = result["tense_rule"]
        verb = result["verb"]
        forms = result["legacy_forms"]

        form_index = self._form_index_for_subject(
            tense_id=tense_id,
            subject=subject,
        )

        if tense_rule.type != "composé":
            value = forms[form_index]
            return self.extract_answer_form(value)

        selected_auxiliary = auxiliary or verb.auxiliaire
        value = forms[form_index]
        compound_form = self.extract_answer_form(value)

        if selected_auxiliary != "être":
            return compound_form

        if not isinstance(verb.participePasse, str) or not verb.participePasse.strip():
            raise ValueError(
                f"El verbo '{verb.id}' no tiene 'participePasse' válido."
            )

        auxiliary_verb = self.repository.get_verb(selected_auxiliary)
        auxiliary_forms = auxiliary_verb.legacy_formes or {}
        simple_forms = auxiliary_forms.get(tense_rule.auxiliaireTemps or "")
        if not isinstance(simple_forms, list) or form_index >= len(simple_forms):
            raise ValueError(
                f"No existe la forma del auxiliar '{selected_auxiliary}' "
                f"para el sujeto '{subject.pronoun}'."
            )

        auxiliary_form = self.extract_answer_form(
            simple_forms[form_index]
        )
        participle = agree_past_participle(
            verb.participePasse,
            gender=subject.gender,
            number=subject.number,
        )
        return f"{auxiliary_form} {participle}"

    @staticmethod
    def _form_index_for_subject(*, tense_id: str, subject: Subject) -> int:
        """Map pedagogical subjects to the legacy form index for a tense."""
        if tense_id == "impératif présent":
            mapping = {"tu": 0, "nous": 1, "vous": 2}
            try:
                return mapping[subject.pronoun]
            except KeyError as exc:
                raise ValueError(
                    f"El pronombre '{subject.pronoun}' no tiene forma propia "
                    "en impératif présent."
                ) from exc
        return subject.legacy_index

    @staticmethod
    def extract_answer_form(value: Any) -> str:
        return extract_conjugated_form(value)

    def resolve_relationships(
        self,
        verb: Verb,
    ) -> tuple[Family, Pattern]:
        if verb.familyId is None or verb.patternId is None:
            raise ValueError(
                f"El verbo '{verb.id}' no tiene relaciones canónicas."
            )

        family = self.repository.get_family(verb.familyId)
        pattern = self.repository.get_pattern(verb.patternId)
        return family, pattern
