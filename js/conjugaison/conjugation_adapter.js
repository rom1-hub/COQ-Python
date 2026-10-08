/* COQ — Adaptador de preguntas de conjugación
 *
 * El backend mantiene el contrato de datos. Este módulo traduce ese contrato
 * al modelo mínimo que necesita la interfaz de práctica.
 */
(function () {
  'use strict';

  function adaptarPreguntaConjugation(question) {
    if (!question || typeof question !== 'object') {
      throw new Error('Pregunta de conjugación inválida.');
    }

    const answer = String(question.correct_answer ?? '').trim();

    if (!question.verb_id || !question.tense_id || !question.pronoun || !answer) {
      throw new Error(
        'La pregunta de conjugación no cumple el contrato esperado.'
      );
    }

    return Object.freeze({
      verb: String(question.verb_id),
      infinitif: String(question.infinitif ?? question.verb_id),
      translation: question.translation ?? null,
      tense: String(question.tense_id),
      group: question.group ?? null,
      familyId: question.family_id ?? null,
      patternId: question.pattern_id ?? null,
      pronominal: question.pronominal === true,
      auxiliary: question.auxiliary ?? null,
      subject: String(question.pronoun),
      pronounIndex: question.pronoun_index,
      answer,
      displayAnswer: answer,
      acceptedAnswers: [answer]
    });
  }

  function adaptarPreguntasConjugation(questions) {
    if (!Array.isArray(questions)) {
      throw new TypeError(
        'El servidor no devolvió una lista de preguntas de conjugación.'
      );
    }

    return questions.map(adaptarPreguntaConjugation);
  }

  window.COQ_CONJUGATION_ADAPTER = Object.freeze({
    adaptarPreguntaConjugation,
    adaptarPreguntasConjugation
  });
})();
