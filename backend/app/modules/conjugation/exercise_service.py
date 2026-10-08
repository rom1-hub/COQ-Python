from __future__ import annotations

import random
from collections import Counter, defaultdict
from typing import Any

from app.core.conjugation_engine import ConjugationEngine

from app.core.subjects import (
    SIMPLE_SUBJECTS,
    Subject,
    subjects_for_tense,
)

from app.database.models import DefectiveGroup, DefectiveVerbRule, Verb
from app.modules.conjugation.repository import ConjugationRepository

from app.core.morphology import (
    ELISION_INITIALS,
    add_reflexive_pronoun,
    starts_with_elision_sound,
)


PRONOUNS: tuple[str, ...] = tuple(
    subject.pronoun for subject in SIMPLE_SUBJECTS
)


REFLEXIVE_PRONOUNS: dict[str, str] = {
    "je": "me",
    "tu": "te",
    "il": "se",
    "elle": "se",
    "on": "se",
    "nous": "nous",
    "vous": "vous",
    "ils": "se",
    "elles": "se",
}

class ExerciseService:
    """
    Generador de ejercicios de conjugación de COQ.

    Responsabilidades:
    - Filtrar verbos.
    - Filtrar tiempos.
    - Respetar auxiliares.
    - Respetar verbos pronominales.
    - Respetar restricciones de verbos defectivos.
    - Generar preguntas simples y compuestas.
    """

    def __init__(
        self,
        repository: ConjugationRepository,
    ) -> None:
        self.repository = repository
        self.engine = ConjugationEngine(repository)

    # ================================================================
    # VERBOS DEFECTIVOS
    # ================================================================

    def _get_defective_rule(
        self,
        verb: Verb,
    ) -> DefectiveGroup | DefectiveVerbRule | None:
        """
        Devuelve la regla defectiva aplicable al verbo.

        Primero se busca una regla individual.
        Después se buscan reglas de grupo.
        """

        individual_rule = self.repository.defective_verbs.get(
            verb.id
        )

        if individual_rule is not None:
            return individual_rule

        for group_rule in self.repository.defective_groups.values():
            if verb.id in group_rule.verbs:
                return group_rule

        return None

    # ================================================================
    # TIEMPOS
    # ================================================================

    def _tense_exists(
        self,
        tense_id: str,
    ) -> bool:
        return tense_id in self.repository.tense_rules

    def _supports_tenses(
    self,
    verb: Verb,
    tense_ids: list[str],
    auxiliary: str | None = None,
) -> bool:
        """
        Comprueba si el verbo puede utilizarse para TODOS
        los tiempos recibidos.
        """

        if not tense_ids:
            return False

        defective_rule = self._get_defective_rule(verb)

        # ------------------------------------------------------------
        # Restricciones de verbo defectivo
        # ------------------------------------------------------------

        if defective_rule is not None:

            # Infinitivo-only:
            # está en el catálogo pero no puede utilizarse
            # para ejercicios.
            if not defective_rule.exercise:
                return False

            allowed_tenses = getattr(
                defective_rule,
                "allowed_tenses",
                None,
            )

            if allowed_tenses:
                if any(
                    tense_id not in allowed_tenses
                    for tense_id in tense_ids
                ):
                    return False

            excluded_tenses = getattr(
                defective_rule,
                "excluded_tenses",
                None,
            )

            if excluded_tenses:
                if any(
                    tense_id in excluded_tenses
                    for tense_id in tense_ids
                ):
                    return False

        # ------------------------------------------------------------
        # Tiempos existentes
        # ------------------------------------------------------------

        for tense_id in tense_ids:

            if not self._tense_exists(tense_id):
                return False

            if not self._verb_supports_tense(
                verb,
                tense_id,
            ):
                return False

            if not self._valid_subjects(
                tense_id=tense_id,
                verb=verb,
            ):
                return False

        return True

    def _verb_supports_tense(
        self,
        verb: Verb,
        tense_id: str,
    ) -> bool:
        """
        Comprueba si existen formas utilizables para un tiempo.

        Para tiempos compuestos se comprueba el tiempo del auxiliar.
        """

        tense_rule = self.repository.tense_rules.get(
            tense_id
        )

        if tense_rule is None:
            return False

        auxiliary_tense_id = getattr(
            tense_rule,
            "auxiliaireTemps",
            None,
        )

        if auxiliary_tense_id:
            return self._has_usable_forms(
                verb,
                auxiliary_tense_id,
            )

        return self._has_usable_forms(
            verb,
            tense_id,
        )

    def _has_usable_forms(
        self,
        verb: Verb,
        tense_id: str,
    ) -> bool:
        """
        Comprueba si existen formas utilizables.

        Primero intenta el motor moderno.
        Después utiliza legacy_formes como fallback.
        """

        try:
            result = self.engine.conjugate_verb(
                verb_id=verb.id,
                tense_id=tense_id,
            )
        except (KeyError, ValueError):
            result = None

        if result:
            forms = self._extract_forms_from_engine_result(
                result
            )

            if forms and any(
                self._is_usable_form(form)
                for form in forms
            ):
                return True

        legacy_forms = getattr(
            verb,
            "legacy_formes",
            None,
        )

        if not legacy_forms:
            return False

        raw_forms = legacy_forms.get(
            tense_id
        )

        if not raw_forms:
            return False

        return any(
            self._is_usable_form(form)
            for form in raw_forms
        )

    @staticmethod
    def _extract_forms_from_engine_result(
        result: Any,
    ) -> Any:
        """
        Extrae las formas del resultado del motor.

        El motor puede devolver directamente las formas o un
        objeto de resultado que contenga las formas.
        """

        if result is None:
            return None

        if isinstance(result, dict):

            for key in (
                "forms",
                "formes",
                "conjugations",
                "conjugaisons",
                "legacy_forms",
            ):
                if key in result:
                    return result[key]

            return None

        return result

    @staticmethod
    def _is_usable_form(
        form: Any,
    ) -> bool:
        if form is None:
            return False

        if isinstance(form, str):
            return bool(form.strip())

        if isinstance(form, (list, tuple)):

            if len(form) < 2:
                return False

            value = form[-1]

            return (
                isinstance(value, str)
                and bool(value.strip())
            )

        if isinstance(form, dict):

            for key in (
                "forme",
                "form",
                "value",
                "conjugaison",
            ):
                value = form.get(key)

                if (
                    isinstance(value, str)
                    and value.strip()
                ):
                    return True

        return False

    # ================================================================
    # SUJETOS
    # ================================================================

    def _valid_subjects(
        self,
        tense_id: str,
        verb: Verb | None = None,
    ) -> tuple[Subject, ...]:
        """
        Devuelve los sujetos válidos para el tiempo y verbo.

        Los verbos impersonales utilizan únicamente "il".

        En SIMPLE_SUBJECTS la tercera persona se representa como
        "il/elle", por lo que "il" también debe aceptar esa entrada.

        En tiempos compuestos existen "il" y "elle" como sujetos
        independientes.
        """

        tense_rule = self.repository.tense_rules.get(
            tense_id
        )

        if tense_rule is None:
            return ()

        tense_type = getattr(
            tense_rule,
            "type",
            None,
        )

        subjects = subjects_for_tense(
            tense_type,
            tense_id,
        )

        if verb is None:
            return subjects

        defective_rule = self._get_defective_rule(
            verb
        )

        if defective_rule is None:
            return subjects

        allowed_subjects = getattr(
            defective_rule,
            "allowed_subjects",
            None,
        )

        if not allowed_subjects:
            return subjects

        allowed = set(
            allowed_subjects
        )

        filtered: list[Subject] = []

        for subject in subjects:
            if subject.pronoun in allowed:
                filtered.append(subject)
                continue

            # SIMPLE_SUBJECTS uses ``il/elle`` as the generic third
            # person. Impersonal verbs must expose only ``il``.
            if subject.pronoun == "il/elle" and "il" in allowed:
                filtered.append(
                    Subject(
                        id="il",
                        pronoun="il",
                        gender="masculin",
                        number="singulier",
                        display="il",
                    )
                )

        return tuple(filtered)

    # ================================================================
    # FILTROS DE VERBOS
    # ================================================================

    def _candidate_verbs(
        self,
        groups: list[int] | None = None,
        family_id: str | None = None,
        verb_id: str | None = None,
    ) -> list[Verb]:

        verbs = list(
            self.repository.verbs.values()
        )

        if verb_id is not None:
            verbs = [
                verb
                for verb in verbs
                if verb.id == verb_id
            ]

        if groups:
            group_set = set(groups)

            verbs = [
                verb
                for verb in verbs
                if verb.groupe in group_set
            ]

        if family_id is not None:
            verbs = [
                verb
                for verb in verbs
                if verb.familyId == family_id
            ]

        return verbs

    def _matches_auxiliary(
        self,
        verb: Verb,
        auxiliary: str,
    ) -> bool:
        """
        COQ utiliza un único auxiliar principal por verbo.
        """

        normalized = auxiliary.strip().lower()

        verb_auxiliary = (
            getattr(
                verb,
                "auxiliaire",
                None,
            )
            or ""
        ).strip().lower()

        if verb_auxiliary:
            return (
                verb_auxiliary == normalized
            )

        auxiliaries = getattr(
            verb,
            "auxiliaires",
            [],
        )

        return any(
            str(item).strip().lower()
            == normalized
            for item in auxiliaries
        )

    # ================================================================
    # GENERACIÓN PRINCIPAL
    # ================================================================

    def generate_exercise_set(
        self,
        groups: list[int] | None = None,
        family_id: str | None = None,
        tense_id: str | None = None,
        tense_ids: list[str] | None = None,
        verb_id: str | None = None,
        pronominal: bool | None = None,
        auxiliary: str | None = None,
        limit: int = 10,
    ) -> list[dict[str, Any]]:

        if limit < 1:
            raise ValueError(
                "El número de preguntas debe ser mayor que cero."
            )

        # ------------------------------------------------------------
        # Tiempos solicitados
        # ------------------------------------------------------------

        if tense_ids:
            requested_tenses = list(
                dict.fromkeys(tense_ids)
            )

        elif tense_id:
            requested_tenses = [
                tense_id
            ]

        else:
            raise ValueError(
                "Debe indicarse al menos un tiempo verbal."
            )

        # ------------------------------------------------------------
        # Validación de tiempos
        # ------------------------------------------------------------

        for current_tense in requested_tenses:

            if not self._tense_exists(
                current_tense
            ):
                raise ValueError(
                    f"Tiempo verbal desconocido: "
                    f"{current_tense}"
                )

        # ------------------------------------------------------------
        # Verbo específico
        # ------------------------------------------------------------

        if verb_id is not None:

            return self._generate_for_specific_verb(
                verb_id=verb_id,
                requested_tenses=requested_tenses,
                pronominal=pronominal,
                auxiliary=auxiliary,
                limit=limit,
            )

        # ------------------------------------------------------------
        # Candidatos
        # ------------------------------------------------------------

        candidates = self._candidate_verbs(
            groups=groups,
            family_id=family_id,
        )

        if pronominal is not None:

            candidates = [
                verb
                for verb in candidates
                if verb.pronominal == pronominal
            ]

        if auxiliary:

            candidates = [
                verb
                for verb in candidates
                if self._matches_auxiliary(
                    verb,
                    auxiliary,
                )
            ]

        # ------------------------------------------------------------
        # Organizar por tiempo compatible
        # ------------------------------------------------------------

        compatible: dict[
            str,
            list[Verb]
        ] = defaultdict(list)

        for verb in candidates:

            for current_tense in requested_tenses:

                if self._supports_tenses(
                    verb,
                    [current_tense],
                ):
                    compatible[
                        current_tense
                    ].append(verb)

        available_tenses = [
            tense
            for tense in requested_tenses
            if compatible.get(tense)
        ]

        if not available_tenses:

            raise ValueError(
                "No hay suficientes preguntas disponibles "
                "para los criterios seleccionados."
            )

        # ------------------------------------------------------------
        # Generación equilibrada
        # ------------------------------------------------------------

        questions: list[
            dict[str, Any]
        ] = []

        tense_index = 0
        group_counts = Counter()
        requested_groups = list(dict.fromkeys(groups or []))

        attempts = 0

        max_attempts = max(
            limit * 20,
            100,
        )

        while (
            len(questions) < limit
            and attempts < max_attempts
        ):

            attempts += 1

            current_tense = (
                available_tenses[
                    tense_index
                    % len(available_tenses)
                ]
            )

            tense_index += 1

            possible_verbs = compatible.get(
                current_tense,
                [],
            )

            if not possible_verbs:
                continue

            if requested_groups:
                # Keep the requested groups balanced. Among groups that
                # still have compatible candidates, always select one of
                # the least represented groups.
                candidates_by_group = {
                    group: [
                        verb
                        for verb in possible_verbs
                        if verb.groupe == group
                    ]
                    for group in requested_groups
                }
                viable_groups = [
                    group
                    for group in requested_groups
                    if candidates_by_group[group]
                ]
                if not viable_groups:
                    continue

                target_group = min(
                    viable_groups,
                    key=lambda group: (
                        group_counts[group],
                        requested_groups.index(group),
                    ),
                )
                possible_verbs = candidates_by_group[target_group]

            verb = random.choice(possible_verbs)

            question = self._build_question(
                verb=verb,
                tense_id=current_tense,
            )

            if question is None:
                continue

            questions.append(question)
            group_counts[verb.groupe] += 1

        if not questions:

            raise ValueError(
                "No se pudieron generar preguntas "
                "para los criterios seleccionados."
            )

        return questions

    # ================================================================
    # VERBO ESPECÍFICO
    # ================================================================

    def _generate_for_specific_verb(
        self,
        verb_id: str,
        requested_tenses: list[str],
        pronominal: bool | None,
        auxiliary: str | None,
        limit: int,
    ) -> list[dict[str, Any]]:

        verb = self.repository.verbs.get(
            verb_id
        )

        if verb is None:
            raise KeyError(
                f"Verbo no encontrado: {verb_id}"
            )

        if (
            pronominal is not None
            and verb.pronominal != pronominal
        ):
            raise ValueError(
                "El verbo seleccionado no coincide "
                "con el filtro pronominal."
            )

        if (
            auxiliary
            and not self._matches_auxiliary(
                verb,
                auxiliary,
            )
        ):
            raise ValueError(
                "El verbo seleccionado no coincide "
                "con el auxiliar solicitado."
            )

        supported_tenses = [
            current_tense
            for current_tense in requested_tenses
            if self._supports_tenses(
                verb,
                [current_tense],
            )
        ]

        if not supported_tenses:

            raise ValueError(
                f"El verbo '{verb.infinitif}' "
                "no dispone de formas utilizables "
                "para los tiempos seleccionados."
            )

        questions: list[
            dict[str, Any]
        ] = []

        tense_index = 0

        attempts = 0

        max_attempts = max(
            limit * 20,
            100,
        )

        while (
            len(questions) < limit
            and attempts < max_attempts
        ):

            attempts += 1

            current_tense = (
                supported_tenses[
                    tense_index
                    % len(supported_tenses)
                ]
            )

            tense_index += 1

            question = self._build_question(
                verb=verb,
                tense_id=current_tense,
            )

            if question is None:
                continue

            questions.append(
                question
            )

        if not questions:

            raise ValueError(
                f"No se pudieron generar ejercicios "
                f"para '{verb.infinitif}'."
            )

        return questions

    # ================================================================
    # CONSTRUCCIÓN DE PREGUNTA
    # ================================================================

    def _build_question(
        self,
        verb: Verb,
        tense_id: str,
    ) -> dict[str, Any] | None:

        tense_rule = self.repository.tense_rules.get(
            tense_id
        )

        if tense_rule is None:
            return None

        tense_type = getattr(
            tense_rule,
            "type",
            None,
        )

        subjects = self._valid_subjects(
            tense_id=tense_id,
            verb=verb,
        )

        if not subjects:
            return None

        subject = random.choice(
            subjects
        )

        auxiliary_tense_id = getattr(
            tense_rule,
            "auxiliaireTemps",
            None,
        )

        if auxiliary_tense_id:

            return self._build_compound_question(
                verb=verb,
                tense_id=tense_id,
                auxiliary_tense_id=auxiliary_tense_id,
                subject=subject,
            )

        return self._build_simple_question(
            verb=verb,
            tense_id=tense_id,
            subject=subject,
            tense_type=tense_type,
        )

    # ================================================================
    # TIEMPOS SIMPLES
    # ================================================================

    def _build_simple_question(
        self,
        verb: Verb,
        tense_id: str,
        subject: Subject,
        tense_type: str | None,
    ) -> dict[str, Any] | None:

        forms = self._get_forms(
            verb=verb,
            tense_id=tense_id,
        )

        if not forms:
            return None

        answer = self._resolve_form(
            forms,
            subject.legacy_index,
        )

        if not answer:
            return None

        if verb.pronominal:
            answer = add_reflexive_pronoun(
                conjugated_form=answer,
                pronoun=subject.pronoun,
                tense_id=tense_id,
            )

        return {
            "verb_id": verb.id,
            "verb": verb.infinitif,
            "infinitif": verb.infinitif,
            "group": verb.groupe,
            "family_id": verb.familyId,
            "pattern_id": verb.patternId,
            "pronominal": verb.pronominal,
            "auxiliary": getattr(verb, "auxiliaire", None),
            "tense_id": tense_id,
            "tense": tense_id,
            "pronoun_index": subject.legacy_index,
            "pronoun": subject.pronoun,
            "subject": subject.display,
            "subject_id": subject.id,
            "subject_pronoun": subject.pronoun,
            "gender": subject.gender,
            "number": subject.number,
            "correct_answer": answer,
            "type": tense_type or "simple",
        }

    # ================================================================
    # TIEMPOS COMPUESTOS
    # ================================================================

    def _build_compound_question(
        self,
        verb: Verb,
        tense_id: str,
        auxiliary_tense_id: str,
        subject: Subject,
    ) -> dict[str, Any] | None:

        participe = getattr(
            verb,
            "participePasse",
            None,
        )

        if not participe:
            return None

        auxiliary = (
            getattr(
                verb,
                "auxiliaire",
                None,
            )
            or "avoir"
        ).lower()

        auxiliary_verb = self.repository.verbs.get(
            auxiliary
        )

        if auxiliary_verb is None:
            return None

        auxiliary_forms = self._get_forms(
            verb=auxiliary_verb,
            tense_id=auxiliary_tense_id,
        )

        if not auxiliary_forms:
            return None

        auxiliary_form = self._resolve_form(
            auxiliary_forms,
            subject.legacy_index,
        )

        if not auxiliary_form:
            return None

        participle = participe

        if auxiliary == "être":

            participle = (
                self._apply_participle_agreement(
                    participe,
                    subject,
                )
            )

        answer = (
            f"{auxiliary_form} {participle}"
        )

        if verb.pronominal:
            answer = add_reflexive_pronoun(
                conjugated_form=answer,
                pronoun=subject.pronoun,
                tense_id=tense_id,
            )

        return {
            "verb_id": verb.id,
            "verb": verb.infinitif,
            "infinitif": verb.infinitif,
            "group": verb.groupe,
            "family_id": verb.familyId,
            "pattern_id": verb.patternId,
            "pronominal": verb.pronominal,
            "auxiliary": auxiliary,
            "tense_id": tense_id,
            "tense": tense_id,
            "pronoun_index": subject.legacy_index,
            "pronoun": subject.pronoun,
            "subject": subject.display,
            "subject_id": subject.id,
            "subject_pronoun": subject.pronoun,
            "gender": subject.gender,
            "number": subject.number,
            "correct_answer": answer,
            "type": "composé",
            "participe_passe": participe,
        }

    # ================================================================
    # FORMAS
    # ================================================================

    def _get_forms(
        self,
        verb: Verb,
        tense_id: str,
    ) -> Any:

        try:

            result = self.engine.conjugate_verb(
                verb_id=verb.id,
                tense_id=tense_id,
            )

            forms = (
                self._extract_forms_from_engine_result(
                    result
                )
            )

            if forms:
                return forms

        except (KeyError, ValueError):
            pass

        legacy_forms = getattr(
            verb,
            "legacy_formes",
            None,
        )

        if not legacy_forms:
            return None

        return legacy_forms.get(
            tense_id
        )

    @staticmethod
    def _resolve_form(
        forms: Any,
        index: int,
    ) -> str | None:

        if forms is None:
            return None

        if isinstance(forms, dict):

            values = list(
                forms.values()
            )

            if index >= len(values):
                return None

            value = values[index]

        elif isinstance(
            forms,
            (list, tuple),
        ):

            if index >= len(forms):
                return None

            value = forms[index]

        else:
            return None

        if isinstance(value, str):
            return (
                value.strip()
                or None
            )

        if isinstance(
            value,
            (list, tuple),
        ):

            if len(value) >= 2:

                candidate = value[-1]

                if (
                    isinstance(
                        candidate,
                        str,
                    )
                    and candidate.strip()
                ):
                    return candidate.strip()

        if isinstance(
            value,
            dict,
        ):

            for key in (
                "forme",
                "form",
                "value",
                "conjugaison",
            ):

                candidate = value.get(
                    key
                )

                if (
                    isinstance(
                        candidate,
                        str,
                    )
                    and candidate.strip()
                ):
                    return candidate.strip()

        return None

    # ================================================================
    # CONCORDANCIA
    # ================================================================

    @staticmethod
    def _apply_participle_agreement(
        participe: str,
        subject: Subject,
    ) -> str:

        base = participe.rstrip()

        if subject.gender == "féminin":

            if subject.number == "pluriel":
                return base + "es"

            return base + "e"

        if subject.number == "pluriel":
            return base + "s"

        return base

    # ================================================================
    # UTILIDAD
    # ================================================================

    def available_tenses_for_verb(
        self,
        verb_id: str,
    ) -> list[str]:

        verb = self.repository.verbs.get(
            verb_id
        )

        if verb is None:
            return []

        return [
            tense_id
            for tense_id in self.repository.tense_rules
            if self._supports_tenses(
                verb,
                [tense_id],
            )
        ]