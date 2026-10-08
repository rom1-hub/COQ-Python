from __future__ import annotations

import json
from pathlib import Path
from typing import TypeVar

from pydantic import BaseModel

from app.database.models import (
    DefectiveGroup,
    DefectiveVerbRule,
    Family,
    Pattern,
    TenseRule,
    Verb,
)


ModelT = TypeVar("ModelT", bound=BaseModel)


class ConjugationRepository:
    """Loads the four canonical conjugation catalogs."""

    def __init__(self, data_dir: Path):
        self.data_dir = data_dir
        self.verbs: dict[str, Verb] = {}
        self.families: dict[str, Family] = {}
        self.patterns: dict[str, Pattern] = {}
        self.tense_rules: dict[str, TenseRule] = {}
        self.defective_groups: dict[str, DefectiveGroup] = {}
        self.defective_verbs: dict[str, DefectiveVerbRule] = {}

    def load(self) -> None:
        self.verbs = self._load_collection("verbs.json", Verb)
        self.families = self._load_collection("families.json", Family)
        self.patterns = self._load_collection("patterns.json", Pattern)
        self.tense_rules = self._load_collection(
            "tense-rules.json",
            TenseRule,
        )

        defective_catalog = self._load_defective_catalog(
            "defective-verbs.json"
        )
        self.defective_groups = defective_catalog["groups"]
        self.defective_verbs = defective_catalog["verbs"]

        self._validate_relationships()

    def _load_collection(
        self,
        filename: str,
        model: type[ModelT],
    ) -> dict[str, ModelT]:
        path = self.data_dir / filename
        if not path.is_file():
            raise FileNotFoundError(
                f"No existe el catálogo requerido: {path}"
            )

        with path.open("r", encoding="utf-8") as file:
            raw = json.load(file)

        if not isinstance(raw, dict):
            raise ValueError(
                f"{filename} debe contener un objeto JSON indexado por ID."
            )

        return {
            item_id: model.model_validate(item)
            for item_id, item in raw.items()
        }

    def _load_defective_catalog(
        self,
        filename: str,
    ) -> dict[str, dict]:
        path = self.data_dir / filename

        if not path.is_file():
            raise FileNotFoundError(
                f"No existe el catálogo requerido: {path}"
            )

        with path.open("r", encoding="utf-8") as file:
            raw = json.load(file)

        if not isinstance(raw, dict):
            raise ValueError(
                f"{filename} debe contener un objeto JSON."
            )

        raw_groups = raw.get("groups", {})
        raw_verbs = raw.get("verbs", {})

        if not isinstance(raw_groups, dict):
            raise ValueError(
                f"{filename}: 'groups' debe ser un objeto."
            )

        if not isinstance(raw_verbs, dict):
            raise ValueError(
                f"{filename}: 'verbs' debe ser un objeto."
            )

        groups = {
            group_id: DefectiveGroup.model_validate(group)
            for group_id, group in raw_groups.items()
        }

        verbs = {
            verb_id: DefectiveVerbRule.model_validate(rule)
            for verb_id, rule in raw_verbs.items()
        }

        return {
            "groups": groups,
            "verbs": verbs,
        }

    def _validate_relationships(self) -> None:
        for verb in self.verbs.values():
            # Legacy-regression path: a verb without canonical family/pattern
            # ownership is valid only when its legacy conjugation block exists.
            if verb.familyId is None or verb.patternId is None:
                if verb.legacy_formes is None:
                    raise ValueError(
                        f"El verbo '{verb.id}' no tiene familia/patrón canónicos "
                        "y tampoco contiene '_legacy_formes'."
                    )
                continue

            family = self.families.get(verb.familyId)
            if family is None:
                raise ValueError(
                    f"El verbo '{verb.id}' referencia la familia "
                    f"inexistente '{verb.familyId}'."
                )

            if family.patternId != verb.patternId:
                raise ValueError(
                    f"Inconsistencia en '{verb.id}': la familia "
                    f"'{verb.familyId}' apunta al patrón "
                    f"'{family.patternId}', pero el verbo declara "
                    f"'{verb.patternId}'."
                )

            pattern = self.patterns.get(verb.patternId)
            if pattern is None:
                raise ValueError(
                    f"El verbo '{verb.id}' referencia el patrón "
                    f"inexistente '{verb.patternId}'."
                )

            if pattern.groupe != verb.groupe:
                raise ValueError(
                    f"Inconsistencia de grupo en '{verb.id}': "
                    f"verbo={verb.groupe}, patrón={pattern.groupe}."
                )

        for family in self.families.values():
            if family.patternId not in self.patterns:
                raise ValueError(
                    f"La familia '{family.id}' referencia el patrón "
                    f"inexistente '{family.patternId}'."
                )

        for tense in self.tense_rules.values():
            if tense.type == "composé":
                if not tense.auxiliaireTemps:
                    raise ValueError(
                        f"El tiempo compuesto '{tense.id}' no declara "
                        "auxiliaireTemps."
                    )
                if not tense.participe:
                    raise ValueError(
                        f"El tiempo compuesto '{tense.id}' no declara "
                        "participe."
                    )

    def get_verb(self, verb_id: str) -> Verb:
        try:
            return self.verbs[verb_id]
        except KeyError as exc:
            raise KeyError(f"Verbo no encontrado: {verb_id}") from exc

    def list_verbs(self) -> list[Verb]:
        """Return all loaded verbs without exposing the backing dictionary."""
        return list(self.verbs.values())

    def get_family(self, family_id: str) -> Family:
        try:
            return self.families[family_id]
        except KeyError as exc:
            raise KeyError(f"Familia no encontrada: {family_id}") from exc

    def get_pattern(self, pattern_id: str) -> Pattern:
        try:
            return self.patterns[pattern_id]
        except KeyError as exc:
            raise KeyError(f"Patrón no encontrado: {pattern_id}") from exc

    def get_tense_rule(self, tense_id: str) -> TenseRule:
        try:
            return self.tense_rules[tense_id]
        except KeyError as exc:
            raise KeyError(f"Tiempo no encontrado: {tense_id}") from exc