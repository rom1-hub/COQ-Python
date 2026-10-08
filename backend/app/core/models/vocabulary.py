from __future__ import annotations

from pydantic import BaseModel, ConfigDict, Field, field_validator


class VocabularyItem(BaseModel):
    """One canonical vocabulary entry."""

    model_config = ConfigDict(extra="forbid")

    id: str
    french: str
    spanish: str
    article_french: str | None = None
    article_spanish: str | None = None
    emoji: str | None = None

    @field_validator("id", "french", "spanish")
    @classmethod
    def validate_non_empty(cls, value: str) -> str:
        if not value.strip():
            raise ValueError("El valor no puede estar vacío.")
        return value.strip()


class SubCategory(BaseModel):
    """Vocabulary subcategory containing its items."""

    model_config = ConfigDict(extra="forbid")

    id: str
    name: str
    items: list[VocabularyItem] = Field(default_factory=list)

    @field_validator("id", "name")
    @classmethod
    def validate_non_empty(cls, value: str) -> str:
        if not value.strip():
            raise ValueError("El valor no puede estar vacío.")
        return value.strip()


class VocabularyCategory(BaseModel):
    """Top-level vocabulary category."""

    model_config = ConfigDict(extra="forbid")

    id: str
    name: str
    subcategories: list[SubCategory] = Field(default_factory=list)

    @field_validator("id", "name")
    @classmethod
    def validate_non_empty(cls, value: str) -> str:
        if not value.strip():
            raise ValueError("El valor no puede estar vacío.")
        return value.strip()


__all__ = [
    "VocabularyItem",
    "SubCategory",
    "VocabularyCategory",
]
