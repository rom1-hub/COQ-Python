/*
 * COQ — Adaptador de preguntas de vocabulario
 *
 * El backend mantiene el contrato de datos. Este módulo traduce ese contrato
 * al modelo mínimo que necesita la interfaz de práctica.
 */
(function () {
  'use strict';

  function adaptarPreguntaVocabulario(question) {
    if (!question || typeof question !== 'object') {
      throw new Error('Pregunta de vocabulario inválida.');
    }

    if (!question.item_id || !question.type || !question.prompt) {
      throw new Error('La pregunta de vocabulario no cumple el contrato esperado.');
    }

    if (!Array.isArray(question.options) || question.options.length === 0) {
      throw new Error('La pregunta de vocabulario no contiene opciones válidas.');
    }

    if (!question.correct_answer) {
      throw new Error('La pregunta de vocabulario no contiene una respuesta correcta.');
    }

    return Object.freeze({
      id: String(question.item_id),
      type: String(question.type),
      prompt: String(question.prompt),
      options: question.options.map((option) => String(option)),
      correctAnswer: String(question.correct_answer)
    });
  }

  window.COQ_VOCABULARY_ADAPTER = Object.freeze({
    adaptarPreguntaVocabulario
  });
})();
