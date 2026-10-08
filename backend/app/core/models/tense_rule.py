from pydantic import BaseModel, ConfigDict, Field
from typing import Literal


class TenseRule(BaseModel):
    """Declarative structure of one tense.

    The canonical JSON contract uses "order" for pedagogical ordering.
    """

    model_config = ConfigDict(extra="forbid")

    id: str
    type: Literal["simple", "composé"]
    mode: str
    auxiliaireTemps: str | None = None
    participe: str | None = None
    order: int = Field(..., ge=0)
