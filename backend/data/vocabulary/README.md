# Vocabulary data contract

The canonical vocabulary catalog is stored in `vocabulary.json`.

Root structure:

```json
[
  {
    "id": "animales",
    "name": "Animales",
    "subcategories": [
      {
        "id": "animales-domesticos",
        "name": "Animales domésticos",
        "items": [
          {
            "id": "chien",
            "french": "chien",
            "spanish": "perro",
            "article_french": "un",
            "article_spanish": "un",
            "emoji": "🐕"
          }
        ]
      }
    ]
  }
]
```

The current `vocabulary.json` is intentionally empty until the canonical
vocabulary dataset is supplied. No vocabulary content is invented by the backend.
