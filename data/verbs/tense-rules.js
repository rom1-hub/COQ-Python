// COQ — reglas declarativas de tiempos verbales.
// Fuente única para tipo, modo, orden y relación de tiempos compuestos.
window.COQ_TENSE_RULES = Object.freeze({
  "présent de l'indicatif":Object.freeze({"type":"simple","mode":"indicatif","order":10}),
  "impératif présent":Object.freeze({"type":"simple","mode":"impératif","order":20}),
  "passé composé":Object.freeze({"type":"composé","auxiliaireTemps":"présent de l'indicatif","participe":"participePasse","order":30}),
  "imparfait":Object.freeze({"type":"simple","mode":"indicatif","order":40}),
  "futur simple":Object.freeze({"type":"simple","mode":"indicatif","order":50}),
  "conditionnel présent":Object.freeze({"type":"simple","mode":"conditionnel","order":60}),
  "plus-que-parfait":Object.freeze({"type":"composé","auxiliaireTemps":"imparfait","participe":"participePasse","order":70}),
  "conditionnel passé":Object.freeze({"type":"composé","auxiliaireTemps":"conditionnel présent","participe":"participePasse","order":80}),
  "futur antérieur":Object.freeze({"type":"composé","auxiliaireTemps":"futur simple","participe":"participePasse","order":90}),
  "subjonctif présent":Object.freeze({"type":"simple","mode":"subjonctif","order":100}),
  "subjonctif passé":Object.freeze({"type":"composé","auxiliaireTemps":"subjonctif présent","participe":"participePasse","order":110})
});

/*
 * La generación de las formas compuestas pertenece al motor de conjugación.
 * Este archivo solo declara las reglas; no contiene lógica de conjugación.
 */
