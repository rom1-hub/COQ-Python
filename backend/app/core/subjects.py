from __future__ import annotations

from dataclasses import dataclass
from typing import Literal


Gender = Literal["masculin", "féminin"]
Number = Literal["singulier", "pluriel"]


@dataclass(frozen=True)
class Subject:
    """Pedagogical subject used to generate one exercise question."""

    id: str
    pronoun: str
    gender: Gender
    number: Number
    display: str

    @property
    def legacy_index(self) -> int:
        return LEGACY_INDEX_BY_PRONOUN[self.pronoun]


SIMPLE_SUBJECTS: tuple[Subject, ...] = (
    Subject("je", "je", "masculin", "singulier", "je"),
    Subject("tu", "tu", "masculin", "singulier", "tu"),
    Subject("il-elle", "il/elle", "masculin", "singulier", "il/elle"),
    Subject("nous", "nous", "masculin", "pluriel", "nous"),
    Subject("vous", "vous", "masculin", "pluriel", "vous"),
    Subject("ils-elles", "ils/elles", "masculin", "pluriel", "ils/elles"),
)

COMPOUND_SUBJECTS: tuple[Subject, ...] = (
    Subject("je-masculin-singulier", "je", "masculin", "singulier", "je (masculin singulier)"),
    Subject("je-feminin-singulier", "je", "féminin", "singulier", "je (féminin singulier)"),
    Subject("tu-masculin-singulier", "tu", "masculin", "singulier", "tu (masculin singulier)"),
    Subject("tu-feminin-singulier", "tu", "féminin", "singulier", "tu (féminin singulier)"),
    Subject("il", "il", "masculin", "singulier", "il"),
    Subject("elle", "elle", "féminin", "singulier", "elle"),
    Subject("on-masculin-singulier", "on", "masculin", "singulier", "on (masculin singulier)"),
    Subject("on-masculin-pluriel", "on", "masculin", "pluriel", "on (masculin pluriel)"),
    Subject("on-feminin-pluriel", "on", "féminin", "pluriel", "on (féminin pluriel)"),
    Subject("nous-masculin-pluriel", "nous", "masculin", "pluriel", "nous (masculin pluriel)"),
    Subject("nous-feminin-pluriel", "nous", "féminin", "pluriel", "nous (féminin pluriel)"),
    Subject("vous-masculin-singulier", "vous", "masculin", "singulier", "vous (masculin singulier)"),
    Subject("vous-feminin-singulier", "vous", "féminin", "singulier", "vous (féminin singulier)"),
    Subject("vous-masculin-pluriel", "vous", "masculin", "pluriel", "vous (masculin pluriel)"),
    Subject("vous-feminin-pluriel", "vous", "féminin", "pluriel", "vous (féminin pluriel)"),
    Subject("ils", "ils", "masculin", "pluriel", "ils"),
    Subject("elles", "elles", "féminin", "pluriel", "elles"),
)

LEGACY_INDEX_BY_PRONOUN: dict[str, int] = {
    "je": 0,
    "tu": 1,
    "il": 2,
    "elle": 2,
    "il/elle": 2,
    "on": 2,
    "nous": 3,
    "vous": 4,
    "ils": 5,
    "elles": 5,
    "ils/elles": 5,
}

ALL_SUBJECT_PRONOUNS: frozenset[str] = frozenset(
    subject.pronoun for subject in (*SIMPLE_SUBJECTS, *COMPOUND_SUBJECTS)
)

IMPERATIVE_SUBJECTS: tuple[Subject, ...] = tuple(
    subject for subject in SIMPLE_SUBJECTS if subject.pronoun in {"tu", "nous", "vous"}
)


def subjects_for_tense(tense_type: str, tense_id: str) -> tuple[Subject, ...]:
    if tense_id == "impératif présent":
        return IMPERATIVE_SUBJECTS
    if tense_type == "composé":
        return COMPOUND_SUBJECTS
    return SIMPLE_SUBJECTS


__all__ = [
    "Subject",
    "SIMPLE_SUBJECTS",
    "COMPOUND_SUBJECTS",
    "IMPERATIVE_SUBJECTS",
    "LEGACY_INDEX_BY_PRONOUN",
    "subjects_for_tense",
]

