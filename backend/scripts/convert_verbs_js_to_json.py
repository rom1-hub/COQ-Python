"""Build canonical JSON catalogs for COQ.

Sources:
- data/verbs/local-database.js -> verbs.json
- data/verbs/family-catalog.js -> families.json
- data/verbs/patterns.js -> patterns.json
- data/verbs/tense-rules.js -> tense-rules.json

Non-destructive migration. Existing JS sources are never modified.
Conjugated forms are retained as _legacy_formes until the Python engine
has been validated against all irregular verbs.
"""

from __future__ import annotations

import argparse
import ast
import json
import re
from pathlib import Path
from typing import Any

DEFAULT_ROOT = Path(__file__).resolve().parents[2]

REQUIRED_VERB_FIELDS = {
    "id", "infinitif", "infinitif_base", "groupe", "familyId",
    "patternId", "auxiliaire", "pronominal", "construction",
    "participePasse",
}

JS_FREEZE = re.compile(r"Object\.freeze\s*\(")


def extract_assignment_object(source: str, marker: str) -> str:
    start = source.find(marker)
    if start < 0:
        raise ValueError(f"No se encontró {marker}.")

    equals = source.find("=", start + len(marker))
    if equals < 0:
        raise ValueError(f"No se encontró '=' después de {marker}.")

    i = equals + 1
    while i < len(source) and source[i].isspace():
        i += 1

    while source.startswith("Object.freeze", i):
        open_paren = source.find("(", i)
        if open_paren < 0:
            break
        i = open_paren + 1
        while i < len(source) and source[i].isspace():
            i += 1

    if i >= len(source) or source[i] != "{":
        raise ValueError(f"{marker} no contiene un objeto JS.")

    depth = 0
    quote = None
    escaped = False

    for pos in range(i, len(source)):
        ch = source[pos]

        if quote:
            if escaped:
                escaped = False
            elif ch == "\\":
                escaped = True
            elif ch == quote:
                quote = None
            continue

        if ch in ("'", '"'):
            quote = ch
        elif ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return source[i : pos + 1]

    raise ValueError(f"No se pudo cerrar el objeto de {marker}.")


def parse_js_literal(object_text: str) -> Any:
    cleaned = JS_FREEZE.sub("(", object_text)
    candidate = cleaned

    while candidate.endswith(")"):
        try:
            return ast.literal_eval(candidate)
        except (ValueError, SyntaxError):
            candidate = candidate[:-1]

    try:
        return ast.literal_eval(candidate)
    except (ValueError, SyntaxError) as exc:
        raise ValueError(
            "Catálogo JS no compatible con el parser declarativo."
        ) from exc


def load_verb_database(path: Path) -> dict[str, Any]:
    source = path.read_text(encoding="utf-8")
    marker = "window.COQ_VERBS"
    start = source.find(marker)
    if start < 0:
        raise ValueError(f"No se encontró {marker} en {path}.")

    equals = source.find("=", start + len(marker))
    if equals < 0:
        raise ValueError("Asignación COQ_VERBS inválida.")

    payload = source[equals + 1 :].lstrip()
    decoder = json.JSONDecoder()

    try:
        data, _ = decoder.raw_decode(payload)
    except json.JSONDecodeError as exc:
        raise ValueError(
            "local-database.js no contiene un COQ_VERBS JSON válido."
        ) from exc

    if not isinstance(data, dict):
        raise ValueError("COQ_VERBS debe ser un objeto.")

    return data


def build_verbs(raw: dict[str, Any], families: dict[str, Any]) -> dict[str, Any]:
    family_by_verb: dict[str, dict[str, str]] = {}

    for family_id, family in families.items():
        for verb_id in family.get("verbs", []):
            if verb_id in family_by_verb:
                previous = family_by_verb[verb_id]["familyId"]
                raise ValueError(
                    f"Verbo {verb_id!r} pertenece a dos familias: "
                    f"{previous!r} y {family_id!r}."
                )
            family_by_verb[verb_id] = {
                "familyId": family_id,
                "patternId": family["patternId"],
            }

    result = {}

    for key, record in raw.items():
        if not isinstance(record, dict):
            raise ValueError(f"{key}: registro de verbo inválido.")

        family_id = record.get("familyId") or family_by_verb.get(key, {}).get("familyId")
        pattern_id = record.get("patternId") or family_by_verb.get(key, {}).get("patternId")

        if not family_id or not pattern_id:
            raise ValueError(f"{key}: no se pudo resolver familyId/patternId.")

        canonical = {
            "id": record.get("id", key),
            "infinitif": record.get("infinitif", key),
            "infinitif_base": record.get("infinitif_base", key),
            "groupe": record.get("groupe"),
            "familyId": family_id,
            "patternId": pattern_id,
            "sub_category": record.get("sub_category"),
            "auxiliaire": record.get("auxiliaire"),
            "auxiliaires": record.get("auxiliaires")
                or ([record["auxiliaire"]] if record.get("auxiliaire") else []),
            "pronominal": record.get("pronominal") is True,
            "construction": record.get("construction", "non-pronomiale"),
            "participePasse": record.get("participePasse"),
            "verbeBase": record.get("verbeBase"),
            "formePronominale": record.get("formePronominale"),
            "formeNonPronominale": record.get("formeNonPronominale"),
            "variantes": record.get("variantes"),
            "exceptions": record.get("exceptions"),
            "source": record.get("source"),
        }

        if record.get("formes"):
            canonical["_legacy_formes"] = record["formes"]

        result[key] = canonical

    return dict(sorted(result.items(), key=lambda item: item[0].casefold()))


def normalize_families(raw: dict[str, Any]) -> dict[str, Any]:
    result = {}

    for key, family in raw.items():
        result[key] = {
            "id": family["id"],
            "patternId": family["patternId"],
            "groupe": family["groupe"],
        }

    return dict(sorted(result.items(), key=lambda item: item[0].casefold()))


def normalize_patterns(raw: dict[str, Any]) -> dict[str, Any]:
    result = {}

    for key, pattern in raw.items():
        result[key] = {
            "id": key,
            "groupe": pattern["groupe"],
            "description": pattern.get("description"),
        }

    return dict(sorted(result.items(), key=lambda item: item[0].casefold()))


def normalize_tenses(raw: dict[str, Any]) -> dict[str, Any]:
    result = {}

    for key, rule in raw.items():
        result[key] = {"id": key, **rule}

    return dict(sorted(result.items(), key=lambda item: item[0]))


def validate(verbs, families, patterns, tenses) -> None:
    errors = []

    for verb_id, verb in verbs.items():
        missing = REQUIRED_VERB_FIELDS - set(verb)

        if missing:
            errors.append(f"verb {verb_id}: faltan {sorted(missing)}")

        if verb["id"] != verb_id:
            errors.append(f"verb {verb_id}: id inconsistente")

        if verb["groupe"] not in (1, 2, 3):
            errors.append(f"verb {verb_id}: groupe inválido")

        family = families.get(verb["familyId"])

        if family is None:
            errors.append(f"verb {verb_id}: familyId inexistente")
        else:
            if family["patternId"] != verb["patternId"]:
                errors.append(
                    f"verb {verb_id}: patternId no coincide con su familia"
                )


        pattern = patterns.get(verb["patternId"])

        if pattern is None:
            errors.append(f"verb {verb_id}: patternId inexistente")
        elif pattern["groupe"] != verb["groupe"]:
            errors.append(f"verb {verb_id}: groupe distinto al del pattern")

    for family_id, family in families.items():
        if family["patternId"] not in patterns:
            errors.append(f"family {family_id}: patternId inexistente")

    for tense_id, rule in tenses.items():
        if rule["id"] != tense_id:
            errors.append(f"tense {tense_id}: id inconsistente")

    if errors:
        preview = "\n".join(f"- {e}" for e in errors[:50])
        suffix = f"\n... y {len(errors) - 50} errores más." if len(errors) > 50 else ""
        raise ValueError(
            f"Contrato inválido: {len(errors)} errores.\n{preview}{suffix}"
        )


def write_json(path: Path, value: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(
        json.dumps(value, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--root", type=Path, default=DEFAULT_ROOT)
    args = parser.parse_args()
    root = args.root.resolve()

    source_verbs = root / "data/verbs/local-database.js"
    source_families = root / "data/verbs/family-catalog.js"
    source_patterns = root / "data/verbs/patterns.js"
    source_tenses = root / "data/verbs/tense-rules.js"
    output = root / "backend/data/verbs"

    raw_verbs = load_verb_database(source_verbs)

    families_text = source_families.read_text(encoding="utf-8")
    patterns_text = source_patterns.read_text(encoding="utf-8")
    tenses_text = source_tenses.read_text(encoding="utf-8")

    families = parse_js_literal(
        extract_assignment_object(families_text, "const families")
    )
    patterns = parse_js_literal(
        extract_assignment_object(patterns_text, "window.COQ_VERB_PATTERNS")
    )
    tenses = parse_js_literal(
        extract_assignment_object(tenses_text, "window.COQ_TENSE_RULES")
    )

    source_families = families
    families = normalize_families(source_families)
    patterns = normalize_patterns(patterns)
    tenses = normalize_tenses(tenses)
    verbs = build_verbs(raw_verbs, source_families)

    validate(verbs, families, patterns, tenses)

    write_json(output / "verbs.json", verbs)
    write_json(output / "families.json", families)
    write_json(output / "patterns.json", patterns)
    write_json(output / "tense-rules.json", tenses)

    print(f"OK: {len(verbs)} verbos")
    print(f"OK: {len(families)} familias")
    print(f"OK: {len(patterns)} patrones")
    print(f"OK: {len(tenses)} tiempos")
    print(f"Destino: {output}")


if __name__ == "__main__":
    main()
