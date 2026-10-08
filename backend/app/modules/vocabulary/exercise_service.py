from __future__ import annotations

import random
from typing import Any

from app.modules.vocabulary.repository import VocabularyRepository


class VocabularyExerciseService:
    """Generates vocabulary exercises from the canonical repository."""

    SUPPORTED_TYPES = frozenset({"multiple_choice", "write_word"})

    def __init__(self, repository: VocabularyRepository):
        self.repository = repository

    def generate_vocabulary_exercise(
        self,
        category_id: str,
        subcategory_id: str,
        type: str,
        limit: int = 10,
    ) -> list[dict[str, Any]]:
        if type not in self.SUPPORTED_TYPES:
            raise ValueError(
                f"Tipo de ejercicio no soportado: {type}. "
                f"Valores permitidos: {sorted(self.SUPPORTED_TYPES)}."
            )

        if limit < 1:
            raise ValueError("limit debe ser mayor o igual a 1.")

        items = self.repository.get_items_by_subcategory(
            category_id,
            subcategory_id,
        )

        if limit > len(items):
            raise ValueError(
                f"La subcategoría '{category_id}/{subcategory_id}' solo contiene "
                f"{len(items)} ítems; no se pueden generar {limit} preguntas "
                "sin repetir."
            )

        selected_items = random.sample(items, k=limit)

        if type == "multiple_choice":
            return [
                self._build_multiple_choice_question(
                    item=item,
                    pool=items,
                    category_id=category_id,
                    subcategory_id=subcategory_id,
                )
                for item in selected_items
            ]

        return [
            {
                "item_id": item.id,
                "category_id": category_id,
                "subcategory_id": subcategory_id,
                "type": "write_word",
                "prompt": item.spanish,
                "correct_answer": item.french,
            }
            for item in selected_items
        ]

    def _build_multiple_choice_question(
        self,
        *,
        item,
        pool,
        category_id: str,
        subcategory_id: str,
    ) -> dict[str, Any]:
        distractor_pool = [candidate for candidate in pool if candidate.id != item.id]

        if len(distractor_pool) < 3:
            raise ValueError(
                "Un ejercicio multiple_choice necesita al menos 4 ítems "
                "distintos en la misma subcategoría."
            )

        distractors = random.sample(distractor_pool, k=3)

        options = [item.french, *(candidate.french for candidate in distractors)]
        random.shuffle(options)

        return {
            "item_id": item.id,
            "category_id": category_id,
            "subcategory_id": subcategory_id,
            "type": "multiple_choice",
            "prompt": item.spanish,
            "options": options,
            "correct_answer": item.french,
        }
