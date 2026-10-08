from __future__ import annotations

from typing import Any

from pydantic import BaseModel, ConfigDict, Field, field_validator


class Verb(BaseModel):
    """Canonical representation of one verb.

    Validation only. Conjugation behavior belongs to the domain engine.
    """

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

    # Transitional safety net. The canonical JSON key remains "_legacy_formes".
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
