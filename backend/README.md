# COQ Backend

Backend desacoplado de COQ basado en FastAPI.

## Arquitectura

- `app/core/`: configuración e infraestructura transversal.
- `app/api/`: entrada HTTP y routers.
- `app/modules/conjugation/`: dominio de conjugación y generación de ejercicios.
- `app/modules/vocabulary/`: futuro módulo de vocabulario.
- `app/modules/grammar/`: futuro módulo de gramática.
- `data/verbs/`: datos consumidos por el backend; no contiene lógica de negocio.
- `scripts/`: herramientas de migración/validación de datos.
- `tests/`: pruebas del backend.

La migración comienza sin modificar el frontend existente. Durante esta fase, HTML/CSS/JS permanecen fuera de `backend/`.
