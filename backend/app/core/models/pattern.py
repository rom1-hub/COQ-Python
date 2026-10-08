from pydantic import BaseModel, ConfigDict, Field


class Pattern(BaseModel):
    """Pattern catalog entry.

    This model identifies a pattern; it does not implement its algorithm.
    """

    model_config = ConfigDict(extra="forbid")

    id: str
    groupe: int = Field(..., ge=1, le=3)
    description: str | None = None
