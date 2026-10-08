from __future__ import annotations

from typing import Any


ELISION_INITIALS = frozenset(
    "aeiouyhàâäéèêëîïôöùûüÿœæ"
)


def starts_with_elision_sound(form: str) -> bool:
    first = form.lstrip().lower()[:1]
    return bool(first and first in ELISION_INITIALS)


def elide_subject(subject: str, following_form: str) -> str:
    """Apply French subject elision when the following form starts with an elidable sound."""
    normalized_subject = subject.strip()
    normalized_form = following_form.strip()

    if not normalized_subject or not normalized_form:
        raise ValueError("Le sujet et la forme conjuguée ne peuvent pas être vides.")

    if not starts_with_elision_sound(normalized_form):
        return normalized_subject

    replacements = {
        "je": "j'",
        "que je": "que j'",
        "il": "il",
        "elle": "elle",
        "que il": "qu'il",
        "que elle": "qu'elle",
    }

    return replacements.get(normalized_subject.lower(), normalized_subject)


def agree_past_participle(
    participle: str,
    *,
    gender: str,
    number: str,
) -> str:
    """Agree a masculine-singular past participle with the exercise subject."""
    result = participle.strip()
    if not result:
        raise ValueError("Le participe passé ne peut pas être vide.")
    if gender == "féminin" and not result.endswith("e"):
        result += "e"
    if number == "pluriel" and not result.endswith("s"):
        result += "s"
    return result


def extract_conjugated_form(value: Any) -> str:
    """Normalize legacy entries to their conjugated predicate."""
    if isinstance(value, str):
        result = value.strip()
        if result:
            return result

    if isinstance(value, list) and len(value) >= 2:
        candidate = value[1]
        if isinstance(candidate, str) and candidate.strip():
            return candidate.strip()

    if isinstance(value, dict):
        for key in ("forme", "form", "value", "conjugaison", "conjugation"):
            candidate = value.get(key)
            if isinstance(candidate, str) and candidate.strip():
                return candidate.strip()

    raise ValueError(f"Formato de conjugación no soportado: {value!r}")


def extract_subject(value: Any, default_subject: str) -> str:
    """Return the source subject label, applying no linguistic inference."""
    if isinstance(value, list) and value:
        subject = value[0]
        if isinstance(subject, str) and subject.strip():
            return subject.strip()
    return default_subject


def compose_compound_entry(
    *,
    auxiliary_entry: Any,
    participle: str,
    default_subject: str,
) -> list[str]:
    """Compose one compound-tense legacy entry from auxiliary + past participle."""
    auxiliary_form = extract_conjugated_form(auxiliary_entry)
    subject = extract_subject(auxiliary_entry, default_subject)
    subject = elide_subject(subject, auxiliary_form)
    return [subject, f"{auxiliary_form} {participle.strip()}"]


REFLEXIVE_PRONOUNS = {
    "je": "me",
    "tu": "te",
    "il": "se",
    "elle": "se",
    "on": "se",
    "il/elle": "se",
    "nous": "nous",
    "vous": "vous",
    "ils": "se",
    "elles": "se",
    "ils/elles": "se",
}


def add_reflexive_pronoun(
    *,
    conjugated_form: str,
    pronoun: str,
    tense_id: str | None = None,
) -> str:
    """Build a pronominal form using French proclitic/elision rules."""
    form = conjugated_form.strip()
    if not form:
        raise ValueError("La forma conjugada no puede estar vacía.")

    reflexive = REFLEXIVE_PRONOUNS.get(pronoun)
    if reflexive is None:
        raise ValueError(f"No existe pronombre reflexivo para '{pronoun}'.")

    # Algunas fuentes legacy incluyen el pronombre reflexivo, pero con una
    # forma clítica dependiente del índice de la fuente (`m'évanouis`,
    # `t'évanouis`, `s'évanouit`, `n'évanouissons`, etc.). El sujeto
    # del ejercicio es la autoridad: eliminamos el clítico legacy y
    # reconstruimos el pronombre correcto para ese sujeto.
    reflexive_prefixes = (
        "m'", "t'", "s'", "n'", "v'",
        "me ", "te ", "se ", "nous ", "vous ",
    )
    normalized_form = form.lower()
    for prefix in reflexive_prefixes:
        if normalized_form.startswith(prefix):
            form = form[len(prefix):].lstrip()
            break


    if tense_id == "impératif présent":
        suffix = {
            "tu": "toi",
            "nous": "nous",
            "vous": "vous",
        }.get(pronoun)
        if suffix is None:
            raise ValueError(
                f"El pronombre '{pronoun}' no tiene forma propia en impératif présent."
            )
        return f"{form}-{suffix}"

    if reflexive in {"me", "te", "se"} and starts_with_elision_sound(form):
        elided = {"me": "m'", "te": "t'", "se": "s'"}[reflexive]
        return f"{elided}{form}"

    return f"{reflexive} {form}"
