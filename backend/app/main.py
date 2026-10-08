from __future__ import annotations

from pathlib import Path

from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware

from app.core.conjugation_engine import ConjugationEngine
from app.modules.conjugation.exercise_service import ExerciseService
from app.modules.conjugation.repository import ConjugationRepository
from app.modules.vocabulary.exercise_service import VocabularyExerciseService
from app.modules.vocabulary.repository import VocabularyRepository


BACKEND_DIR = Path(__file__).resolve().parents[1]
VERB_DATA_DIR = BACKEND_DIR / "data" / "verbs"
VOCABULARY_DATA_FILE = BACKEND_DIR / "data" / "vocabulary" / "vocabulary.json"


def create_app() -> FastAPI:
    app = FastAPI(
        title="COQ Backend",
        version="0.1.0",
    )

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=False,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    repository = ConjugationRepository(VERB_DATA_DIR)
    repository.load()
    engine = ConjugationEngine(repository)
    exercise_service = ExerciseService(repository)

    vocabulary_repository = VocabularyRepository(VOCABULARY_DATA_FILE)
    vocabulary_repository.load()
    vocabulary_exercise_service = VocabularyExerciseService(
        vocabulary_repository
    )

    @app.get("/api/verbs/test/{verb_id}")
    def test_verb(verb_id: str, tense_id: str):
        try:
            result = engine.conjugate_verb(
                verb_id=verb_id,
                tense_id=tense_id,
            )
        except (KeyError, ValueError) as exc:
            raise HTTPException(
                status_code=404,
                detail=str(exc),
            ) from exc

        return {
            "verb": result["verb"].model_dump(
                by_alias=True,
                exclude={"legacy_formes"},
            ),
            "family": (
                result["family"].model_dump()
                if result["family"] is not None
                else None
            ),
            "pattern": (
                result["pattern"].model_dump()
                if result["pattern"] is not None
                else None
            ),
            "tense_rule": result["tense_rule"].model_dump(),
            "legacy_forms": result["legacy_forms"],
            "source": result["source"],
        }

    @app.get("/api/exercises/generate")
    def generate_exercise(
        groups: str = Query(
            ...,
            description='Grupos verbales separados por coma, por ejemplo "1,3" o "all".',
        ),
        family_id: str | None = Query(
            default=None,
            description="ID de familia verbal opcional.",
        ),
        tense_id: str | None = Query(
            default=None,
            description="ID de un tiempo verbal. Se mantiene por compatibilidad.",
        ),
        tense_ids: str | None = Query(
            default=None,
            description="IDs de varios tiempos verbales separados por comas.",
        ),
        verb_id: str | None = Query(
            default=None,
            description="ID de un verbo concreto.",
        ),
        pronominal: bool | None = Query(
            default=None,
            description="Filtra verbos pronominales (true) o no pronominales (false).",
        ),
        auxiliary: str | None = Query(
            default=None,
            description="Filtra por verbo auxiliar.",
        ),
        limit: int = Query(
            default=10,
            ge=1,
            description="Número de preguntas solicitadas.",
        ),
    ):
        try:
            parsed_groups = _parse_groups(groups)
            parsed_tenses = _parse_tense_ids(
                tense_id=tense_id,
                tense_ids=tense_ids,
            )
            questions = exercise_service.generate_exercise_set(
                groups=parsed_groups,
                family_id=family_id,
                tense_ids=parsed_tenses,
                verb_id=verb_id,
                pronominal=pronominal,
                auxiliary=auxiliary,
                limit=limit,
            )
        except (KeyError, ValueError) as exc:
            raise HTTPException(
                status_code=400,
                detail=str(exc),
            ) from exc

        return {
            "questions": questions,
            "count": len(questions),
            "groups": parsed_groups,
            "family_id": family_id,
            "verb_id": verb_id,
            "tense_ids": parsed_tenses,
            "pronominal": pronominal,
            "auxiliary": auxiliary,
            "limit": limit,
        }

    @app.get("/api/vocabulary/exercises")
    def generate_vocabulary_exercises(
        category_id: str = Query(..., description="ID de la categoría."),
        subcategory_id: str = Query(..., description="ID de la subcategoría."),
        type: str = Query(..., description="Tipo de ejercicio."),
        limit: int = Query(
            default=10,
            ge=1,
            description="Número de preguntas sin repetir ítems.",
        ),
    ):
        try:
            questions = vocabulary_exercise_service.generate_vocabulary_exercise(
                category_id=category_id,
                subcategory_id=subcategory_id,
                type=type,
                limit=limit,
            )
        except KeyError as exc:
            raise HTTPException(
                status_code=404,
                detail=str(exc),
            ) from exc
        except ValueError as exc:
            raise HTTPException(
                status_code=400,
                detail=str(exc),
            ) from exc

        return {
            "questions": questions,
            "count": len(questions),
            "category_id": category_id,
            "subcategory_id": subcategory_id,
            "type": type,
            "limit": limit,
        }

    return app


def _parse_groups(value: str) -> list[int]:
    normalized = value.strip().lower()

    if normalized == "all":
        return [1, 2, 3]

    if not normalized:
        raise ValueError("Debe indicarse al menos un grupo verbal.")

    try:
        groups = [int(item.strip()) for item in value.split(",")]
    except ValueError as exc:
        raise ValueError(
            'El parámetro "groups" debe contener números separados por comas '
            'o el valor "all".'
        ) from exc

    if not groups:
        raise ValueError("Debe indicarse al menos un grupo verbal.")

    return groups


def _parse_tense_ids(
    *,
    tense_id: str | None,
    tense_ids: str | None,
) -> list[str]:
    values: list[str] = []

    for raw_value in (tense_ids, tense_id):
        if not raw_value:
            continue
        values.extend(
            item.strip()
            for item in raw_value.split(",")
            if item.strip()
        )

    parsed = list(dict.fromkeys(values))
    if not parsed:
        raise ValueError(
            'Debe indicarse "tense_id" o "tense_ids" con al menos un tiempo verbal.'
        )

    return parsed


app = create_app()
