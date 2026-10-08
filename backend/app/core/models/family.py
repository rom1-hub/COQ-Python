from pydantic import BaseModel, ConfigDict, Field


class Family(BaseModel):
    """Reusable family-to-pattern relationship."""

    model_config = ConfigDict(extra="forbid")

    id: str
    patternId: str
    groupe: int = Field(..., ge=1, le=3)
