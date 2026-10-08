/* COQ — Cliente API para ejercicios */
(function () {
  'use strict';

  const API_BASE_URL = 'http://localhost:8000';

  async function generarEjercicioDesdeBackend({
    grupos,
    tenseIds,
    tense_ids = null,
    tenseId = null,
    limite = 10,
    familyId = null,
    verbId = null,
    verb_id = null,
    pronominal = null,
    auxiliary = null
  } = {}) {
    const normalizedGroups = Array.isArray(grupos) ? grupos : [grupos];
    const requestedTenses = tenseIds ?? tense_ids;
    const normalizedTenses = Array.isArray(requestedTenses)
      ? requestedTenses
      : (requestedTenses ? [requestedTenses] : (tenseId ? [tenseId] : []));
    const normalizedVerbId = verbId ?? verb_id;

    if (!normalizedGroups.length) {
      throw new Error('Debes indicar al menos un grupo verbal.');
    }

    if (!normalizedTenses.length) {
      throw new Error('Debes indicar al menos un tiempo verbal.');
    }

    const params = new URLSearchParams();
    params.set('groups', normalizedGroups.join(','));
    params.set('tense_ids', normalizedTenses.join(','));
    params.set('limit', String(limite));

    if (familyId) {
      params.set('family_id', familyId);
    }

    if (normalizedVerbId) {
      params.set('verb_id', normalizedVerbId);
    }

    if (typeof pronominal === 'boolean') {
      params.set('pronominal', String(pronominal));
    }

    if (auxiliary) {
      params.set('auxiliary', auxiliary);
    }

    let response;

    try {
      response = await fetch(
        `${API_BASE_URL}/api/exercises/generate?${params.toString()}`,
        {
          method: 'GET',
          headers: { Accept: 'application/json' }
        }
      );
    } catch (error) {
      console.error('[COQ API] Backend no disponible:', error);
      throw new Error(
        'No se puede conectar con el servidor de ejercicios. ' +
        'Comprueba que el backend de COQ esté iniciado.'
      );
    }

    let data;

    try {
      data = await response.json();
    } catch (error) {
      console.error('[COQ API] Respuesta JSON inválida:', error);
      throw new Error(
        'El servidor devolvió una respuesta que no se puede interpretar.'
      );
    }

    if (!response.ok) {
      const message =
        data?.detail ||
        `El servidor rechazó la solicitud (${response.status}).`;
      console.error('[COQ API]', response.status, message);
      throw new Error(message);
    }

    if (!Array.isArray(data?.questions)) {
      console.error('[COQ API] Contrato inesperado:', data);
      throw new Error(
        'El servidor no devolvió un conjunto de preguntas válido.'
      );
    }

    return data;
  }

  async function generarEjercicioVocabularioDesdeBackend({
    categoryId,
    subcategoryId,
    type,
    limite = 10
  } = {}) {
    if (!categoryId || !subcategoryId || !type) {
      throw new Error(
        'Debes indicar categoría, subcategoría y tipo de ejercicio.'
      );
    }

    const params = new URLSearchParams();
    params.set('category_id', String(categoryId));
    params.set('subcategory_id', String(subcategoryId));
    params.set('type', String(type));
    params.set('limit', String(limite));

    let response;

    try {
      response = await fetch(
        `${API_BASE_URL}/api/vocabulary/exercises?${params.toString()}`,
        {
          method: 'GET',
          headers: { Accept: 'application/json' }
        }
      );
    } catch (error) {
      console.error('[COQ API] Backend de vocabulario no disponible:', error);
      throw new Error(
        'No se puede conectar con el servidor de vocabulario. ' +
        'Comprueba que el backend de COQ esté iniciado.'
      );
    }

    let data;

    try {
      data = await response.json();
    } catch (error) {
      console.error('[COQ API] Respuesta de vocabulario inválida:', error);
      throw new Error(
        'El servidor de vocabulario devolvió una respuesta no válida.'
      );
    }

    if (!response.ok) {
      const message =
        data?.detail ||
        `El servidor rechazó la solicitud de vocabulario (${response.status}).`;
      console.error('[COQ API]', response.status, message);
      throw new Error(message);
    }

    if (!Array.isArray(data?.questions)) {
      console.error('[COQ API] Contrato de vocabulario inesperado:', data);
      throw new Error(
        'El servidor no devolvió un conjunto de preguntas de vocabulario válido.'
      );
    }

    return data.questions;
  }

  window.COQ_API = Object.freeze({
    generarEjercicioDesdeBackend,
    generarEjercicioVocabularioDesdeBackend
  });
})();
