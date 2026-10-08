# Datos de verbos de COQ

La fuente actual de producción del frontend es `data/verbs/local-database.js`, generado por `scripts/build-local-verb-database.js`.

No debe editarse manualmente ni sustituirse por una extracción parcial de `data/verbs/verbs.js`.

Objetivo de migración:

```
data/verbs/local-database.js
        |
        v
backend/data/verbs/verbs.json
        |
        v
Python / FastAPI
```

El JSON será un artefacto de datos: no contendrá JavaScript, funciones, acceso a `window` ni lógica de interfaz.


## Auditoría del contrato de ejercicios

Antes de integrar el frontend con `/api/exercises/generate`, CI ejecuta:

`backend/tests/test_contract_integrity.py`

La auditoría utiliza los cuatro JSON generados por `scripts/migrate-verb-data-to-json.js` y comprueba:

- presencia de los 7.116 verbos y los 11 tiempos;
- balance 1/2/3 cuando se solicitan los tres grupos;
- propiedades obligatorias no nulas/vacías: `verb_id`, `pronoun`, `correct_answer`;
- los 11 tiempos individualmente;
- cada combinación verbo/tiempo que dispone de una forma legacy;
- elisión de pronombres reflexivos (`m'`, `t'`, `s'`);
- equivalencia del contrato entre un verbo canónico (`parler`) y uno legacy (`abaisser`);
- metadatos de auxiliares de todos los tiempos compuestos.

Si existe una discrepancia, el script genera:

`backend/tests/contract-integrity-report.md`

Ese reporte se conserva como artefacto de GitHub Actions para identificar exactamente el verbo, tiempo o regla que debe corregirse antes de crear el `conjugation_adapter.js`.

El catálogo generado sigue siendo un artefacto de CI; no se edita manualmente ni se incorpora como una segunda fuente de verdad.
