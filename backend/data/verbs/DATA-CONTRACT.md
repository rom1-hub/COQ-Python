# Contrato canónico JSON — Conjugación

## 1. Principio

Los JSON contienen **datos declarativos**, no lógica de negocio.

Las relaciones se realizan mediante IDs estables:

```text
Verb
 ├── familyId ──> Family
 │                  └── patternId ──> Pattern
 └── auxiliary / construction / participle

TenseRule
 └── declara la estructura del tiempo
```

No se duplican listas inversas de verbos dentro de `families.json`.

## 2. verbs.json

Un registro representa un verbo concreto.

Ejemplo:

```json
{
  "id": "abaisser",
  "infinitif": "abaisser",
  "infinitif_base": "abaisser",
  "groupe": 1,
  "familyId": "er-regular",
  "patternId": "regular-er",
  "sub_category": "NORMAL",
  "auxiliaire": "avoir",
  "auxiliaires": ["avoir"],
  "pronominal": false,
  "construction": "non-pronomiale",
  "participePasse": "abaissé",
  "verbeBase": null,
  "formePronominale": null,
  "formeNonPronominale": null,
  "variantes": null,
  "exceptions": null,
  "source": {
    "name": "conjugation-fr",
    "version": "0.3.4",
    "base": "Verbiste",
    "localMetadata": false
  }
}
```

### Identidad

- `id`: identificador único del verbo dentro de COQ.
- `infinitif`: forma mostrada.
- `infinitif_base`: verbo base morfológico.

### Relaciones

- `familyId`: referencia obligatoria a `families.json`.
- `patternId`: referencia obligatoria a `patterns.json`.

Ambos se conservan explícitamente para evitar resolver la familia mediante heurísticas.

### Datos lingüísticos

- `groupe`
- `auxiliaire`
- `auxiliaires`
- `pronominal`
- `construction`
- `participePasse`
- referencias de forma base/pronominal
- variantes y excepciones

### Transición

`_legacy_formes` puede aparecer temporalmente durante la migración.

No es parte del contrato definitivo. Se conserva porque algunos verbos irregulares todavía dependen de formas conjugadas almacenadas mientras el motor Python no haya reproducido completamente su comportamiento.

No se debe eliminar hasta superar la regresión lingüística.

## 3. families.json

Una familia describe una relación reutilizable entre un conjunto de verbos y un patrón.

Ejemplo:

```json
{
  "er-regular": {
    "id": "er-regular",
    "patternId": "regular-er",
    "groupe": 1
  }
}
```

No contiene:

- participios;
- auxiliares;
- conjugaciones;
- lógica;
- lista duplicada de verbos.

La pertenencia se obtiene desde `verbs.json`:

```text
abaisser.familyId = "er-regular"
```

y luego:

```text
families["er-regular"].patternId = "regular-er"
```

## 4. patterns.json

Un patrón identifica el mecanismo morfológico que deberá implementar posteriormente el motor Python.

Ejemplo:

```json
{
  "regular-er": {
    "id": "regular-er",
    "groupe": 1,
    "description": "Premier groupe régulier en -ER"
  }
}
```

Este archivo es un **catálogo de patrones**, no contiene código Python ni funciones.

La implementación del algoritmo correspondiente a cada patrón pertenecerá al módulo de dominio del motor.

Por ejemplo:

```text
patterns.json
    "regular-er"
          │
          ▼
Python Pattern Resolver / Generator
```

## 5. tense-rules.json

Declara la estructura de cada tiempo verbal.

Ejemplo simple:

```json
{
  "présent de l'indicatif": {
    "id": "présent de l'indicatif",
    "type": "simple",
    "mode": "indicatif",
    "order": 10
  }
}
```

Ejemplo compuesto:

```json
{
  "passé composé": {
    "id": "passé composé",
    "type": "composé",
    "auxiliaireTemps": "présent de l'indicatif",
    "participe": "participePasse",
    "order": 30
  }
}
```

El tiempo compuesto no almacena aquí la conjugación de `avoir` o `être`.

La regla solamente declara:

1. que es compuesto;
2. qué tiempo utiliza el auxiliar;
3. qué dato aporta el verbo;
4. su posición pedagógica.

El motor Python resolverá después el auxiliar y construirá la forma.

## 6. Relaciones

Para un verbo:

```text
verbs["abaisser"]
        │
        ├── familyId = "er-regular"
        │                 │
        │                 └── patternId = "regular-er"
        │
        └── auxiliaire = "avoir"
```

Para un tiempo:

```text
tense-rules["passé composé"]
        │
        ├── type = "composé"
        ├── auxiliaireTemps = "présent de l'indicatif"
        └── participe = "participePasse"
```

Esto permite que Python cruce los datos mediante diccionarios en memoria sin joins complejos.

## 7. Regla de autoridad

Orden de autoridad:

1. `verbs.json` → hechos específicos del verbo.
2. `families.json` → pertenencia familia/patrón.
3. `patterns.json` → identidad y metadatos del patrón.
4. `tense-rules.json` → estructura temporal.
5. Python → comportamiento y resolución.
6. FastAPI → exposición HTTP.
7. Frontend → presentación e interacción.

Ninguna capa superior debe crear una segunda fuente de verdad lingüística.

## 8. Validaciones obligatorias

El generador debe fallar si:

- un `familyId` no existe;
- un `patternId` no existe;
- el grupo del verbo no coincide con el de su patrón;
- una familia apunta a un patrón inexistente;
- existen IDs duplicados;
- falta un campo obligatorio;
- un registro no tiene familia/patrón resoluble.

La generación debe ser **fail-fast**: no producir JSON parcialmente válido.
