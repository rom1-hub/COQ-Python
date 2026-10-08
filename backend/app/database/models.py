from __future__ import annotations

from typing import Any, Literal

from pydantic import BaseModel, ConfigDict, Field, field_validator


class Verb(BaseModel):
    """Canonical validation model for one verb."""

    model_config = ConfigDict(
        extra="forbid",
        populate_by_name=True,
    )

    id: str
    infinitif: str
    infinitif_base: str
    groupe: int = Field(..., ge=1, le=3)

    # Optional during the legacy-regression migration path.
    familyId: str | None = None
    patternId: str | None = None

    sub_category: str | None = None

    auxiliaire: str | None = None
    auxiliaires: list[str] = Field(default_factory=list)

    pronominal: bool = False
    construction: str | None = None

    participePasse: str | None = None

    verbeBase: str | None = None
    formePronominale: str | None = None
    formeNonPronominale: str | None = None

    variantes: Any = None
    exceptions: Any = None

    source: dict[str, Any] | None = None

    # Transitional regression safety net.
    # JSON key remains exactly "_legacy_formes".
    legacy_formes: dict[str, Any] | None = Field(
        default=None,
        alias="_legacy_formes",
    )

    @field_validator("id", "infinitif", "infinitif_base")
    @classmethod
    def validate_non_empty(cls, value: str) -> str:
        if not value.strip():
            raise ValueError("El valor no puede estar vacío.")
        return value


class Family(BaseModel):
    """Canonical family-to-pattern relationship."""

    model_config = ConfigDict(extra="forbid")

    id: str
    patternId: str
    groupe: int = Field(..., ge=1, le=3)


class Pattern(BaseModel):
    """Canonical pattern catalog entry."""

    model_config = ConfigDict(extra="forbid")

    id: str
    groupe: int = Field(..., ge=1, le=3)
    description: str | None = None


class TenseRule(BaseModel):
    """Declarative structure of a tense."""

    model_config = ConfigDict(extra="forbid")

    id: str
    type: Literal["simple", "composé"]
    mode: str | None = None
    auxiliaireTemps: str | None = None
    participe: str | None = None
    order: int = Field(..., ge=0)

class DefectiveGroup(BaseModel):
    """Reglas compartidas por un grupo de verbos defectivos."""

    model_config = ConfigDict(extra="forbid")

    exercise: bool
    verbs: list[str]
    allowed_subjects: list[str] | None = None


class DefectiveVerbRule(BaseModel):
    """Restricciones específicas de un verbo defectivo."""

    model_config = ConfigDict(extra="forbid")

    exercise: bool
    allowed_tenses: list[str] | None = None
    excluded_tenses: list[str] | None = None

__all__ = [
    "Verb",
    "Family",
    "Pattern",
    "TenseRule",
    "DefectiveGroup",
    "DefectiveVerbRule",
]
