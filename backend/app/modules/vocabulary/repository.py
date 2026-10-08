from __future__ import annotations

import json
from pathlib import Path

from app.core.models.vocabulary import (
    SubCategory,
    VocabularyCategory,
    VocabularyItem,
)


class VocabularyRepository:
    """Loads and exposes the canonical vocabulary catalog."""

    def __init__(self, data_file: Path):
        self.data_file = data_file
        self.categories: dict[str, VocabularyCategory] = {}
        self._subcategories: dict[tuple[str, str], SubCategory] = {}

    def load(self) -> None:
        if not self.data_file.is_file():
            raise FileNotFoundError(
                f"No existe el catálogo de vocabulario requerido: {self.data_file}"
            )

        with self.data_file.open("r", encoding="utf-8") as file:
            raw = json.load(file)

        if not isinstance(raw, list):
            raise ValueError(
                "vocabulary.json debe contener una lista de categorías."
            )

        categories = [
            VocabularyCategory.model_validate(item)
            for item in raw
        ]

        self.categories = {}
        self._subcategories = {}

        for category in categories:
            if category.id in self.categories:
                raise ValueError(
                    f"ID de categoría duplicado: {category.id}"
                )

            self.categories[category.id] = category

            for subcategory in category.subcategories:
                key = (category.id, subcategory.id)
                if key in self._subcategories:
                    raise ValueError(
                        "ID de subcategoría duplicado dentro de la categoría "
                        f"'{category.id}': {subcategory.id}"
                    )

                item_ids: set[str] = set()
                for item in subcategory.items:
                    if item.id in item_ids:
                        raise ValueError(
                            "ID de ítem duplicado en la subcategoría "
                            f"'{category.id}/{subcategory.id}': {item.id}"
                        )
                    item_ids.add(item.id)

                self._subcategories[key] = subcategory

    def get_category(self, category_id: str) -> VocabularyCategory:
        try:
            return self.categories[category_id]
        except KeyError as exc:
            raise KeyError(
                f"Categoría de vocabulario no encontrada: {category_id}"
            ) from exc

    def get_subcategory(
        self,
        category_id: str,
        subcategory_id: str,
    ) -> SubCategory:
        self.get_category(category_id)

        try:
            return self._subcategories[(category_id, subcategory_id)]
        except KeyError as exc:
            raise KeyError(
                "Subcategoría de vocabulario no encontrada: "
                f"{category_id}/{subcategory_id}"
            ) from exc

    def get_items_by_subcategory(
        self,
        category_id: str,
        subcategory_id: str,
    ) -> list[VocabularyItem]:
        """Return a copy so callers cannot mutate repository state."""
        return list(
            self.get_subcategory(
                category_id,
                subcategory_id,
            ).items
        )

    def list_categories(self) -> list[VocabularyCategory]:
        return list(self.categories.values())
