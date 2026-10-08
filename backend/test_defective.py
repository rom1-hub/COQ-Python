from pathlib import Path

from app.modules.conjugation.repository import ConjugationRepository
from app.modules.conjugation.exercise_service import ExerciseService


ROOT = Path(__file__).resolve().parent
repository = ConjugationRepository(ROOT / "data/verbs")
repository.load()
service = ExerciseService(repository)


def assert_true(condition: bool, message: str) -> None:
    if not condition:
        raise AssertionError(message)


# `infinitive_only` intentionally contains lexical entries that are not
# conjugation records. They are allowed to be absent from verbs.json.
infinitive_only = repository.defective_groups["infinitive_only"]
assert_true(not infinitive_only.exercise, "infinitive_only must have exercise=false")
for verb_id in infinitive_only.verbs:
    verb = repository.verbs.get(verb_id)
    if verb is not None:
        assert_true(
            not service._supports_tenses(verb, ["présent de l'indicatif"]),
            f"Infinitive-only verb entered exercise generation: {verb_id}",
        )


# Every executable defective entry must correspond to a real verb.
for verb_id in repository.defective_groups["impersonal"].verbs:
    assert_true(
        verb_id in repository.verbs,
        f"Impersonal verb missing from verbs.json: {verb_id}",
    )
for verb_id in repository.defective_verbs:
    assert_true(
        verb_id in repository.verbs,
        f"Individual defective verb missing from verbs.json: {verb_id}",
    )


# Impersonal verbs expose only `il`, including compound tenses.
impersonal = repository.defective_groups["impersonal"]
assert_true(impersonal.allowed_subjects == ["il"], "Impersonal rule must allow only il")
for verb_id in impersonal.verbs:
    verb = repository.get_verb(verb_id)
    for tense_id in repository.tense_rules:
        subjects = service._valid_subjects(tense_id, verb)
        for subject in subjects:
            assert_true(
                subject.pronoun == "il",
                f"{verb_id} allows {subject.pronoun} in {tense_id}",
            )


# Individual restrictions.
gesir = repository.get_verb("gésir")
assert_true(
    service._supports_tenses(gesir, ["présent de l'indicatif"]),
    "gésir should allow present indicative",
)
assert_true(
    service._supports_tenses(gesir, ["imparfait"]),
    "gésir should allow imperfect",
)
for tense_id in repository.tense_rules:
    if tense_id not in {"présent de l'indicatif", "imparfait"}:
        assert_true(
            not service._supports_tenses(gesir, [tense_id]),
            f"gésir incorrectly allows {tense_id}",
        )

for verb_id in ("paître", "braire"):
    verb = repository.get_verb(verb_id)
    assert_true(
        not service._supports_tenses(verb, ["impératif présent"]),
        f"{verb_id} must not allow imperative",
    )


# No executable defective verb may have zero valid subjects for a supported tense.
for group_id, rule in repository.defective_groups.items():
    if not rule.exercise:
        continue
    for verb_id in rule.verbs:
        verb = repository.get_verb(verb_id)
        for tense_id in repository.tense_rules:
            if not service._supports_tenses(verb, [tense_id]):
                continue
            assert_true(
                service._valid_subjects(tense_id, verb),
                f"No valid subjects for {verb_id} in {tense_id}",
            )

print("Defective verbs audit: PASS")
