from pathlib import Path

path = Path(r".\app\modules\conjugation\exercise_service.py")
text = path.read_text(encoding="utf-8")


OLD_SIMPLE_MARKER = """      # ================================================================
      # TIEMPOS SIMPLES
      # ================================================================

      def _build_simple_question("""
NEW_SIMPLE_MARKER = """      # ================================================================
      # METADATOS DE LA PREGUNTA
      # ================================================================

      def _question_metadata(
          self,
          verb: Verb,
          tense_id: str,
          subject: Subject,
          auxiliary: str | None = None,
      ) -> dict[str, Any]:
          return {
              "verb_id": verb.id,
              "infinitif": verb.infinitif,
              "group": verb.groupe,
              "family_id": verb.familyId,
              "pattern_id": verb.patternId,
              "pronominal": verb.pronominal,
              "auxiliary": auxiliary,
              "tense_id": tense_id,
              "pronoun_index": subject.legacy_index,
              "pronoun": subject.pronoun,
              "subject_id": subject.id,
              "subject_pronoun": subject.pronoun,
              "gender": subject.gender,
              "number": subject.number,
          }

      # ================================================================
      # TIEMPOS SIMPLES
      # ================================================================

      def _build_simple_question("""
OLD_SIMPLE_RETURN = """          return {
              "verb_id": verb.id,
              "verb": verb.infinitif,
              "tense_id": tense_id,
              "tense": tense_id,
              "subject": subject.display,
              "subject_id": subject.id,
              "gender": subject.gender,
              "number": subject.number,
              "correct_answer": answer,
              "type": tense_type or "simple",
          }
"""
NEW_SIMPLE_RETURN = """          return {
              **self._question_metadata(
                  verb=verb,
                  tense_id=tense_id,
                  subject=subject,
                  auxiliary=None,
              ),
              "verb": verb.infinitif,
              "tense": tense_id,
              "subject": subject.display,
              "correct_answer": answer,
              "type": tense_type or "simple",
          }
"""
OLD_COMPOUND_RETURN = """          return {
              "verb_id": verb.id,
              "verb": verb.infinitif,
              "tense_id": tense_id,
              "tense": tense_id,
              "subject": subject.display,
              "subject_id": subject.id,
              "gender": subject.gender,
              "number": subject.number,
              "correct_answer": answer,
              "type": "composé",
              "auxiliary": auxiliary,
              "participe_passe": participe,
          }
"""
NEW_COMPOUND_RETURN = """          return {
              **self._question_metadata(
                  verb=verb,
                  tense_id=tense_id,
                  subject=subject,
                  auxiliary=auxiliary,
              ),
              "verb": verb.infinitif,
              "tense": tense_id,
              "subject": subject.display,
              "correct_answer": answer,
              "type": "composé",
              "participe_passe": participe,
          }
"""


def replace_once(source: str, old: str, new: str, label: str) -> str:
    count = source.count(old)

    if count != 1:
        raise RuntimeError(
            f"{label}: se esperaban 1 coincidencia, encontradas {count}"
        )

    return source.replace(old, new, 1)


text = replace_once(
    text,
    OLD_SIMPLE_MARKER,
    NEW_SIMPLE_MARKER,
    "Marcador de metadatos",
)

text = replace_once(
    text,
    OLD_SIMPLE_RETURN,
    NEW_SIMPLE_RETURN,
    "Builder simple",
)

text = replace_once(
    text,
    OLD_COMPOUND_RETURN,
    NEW_COMPOUND_RETURN,
    "Builder compuesto",
)

path.write_text(text, encoding="utf-8")

print("OK: contrato de metadatos actualizado")