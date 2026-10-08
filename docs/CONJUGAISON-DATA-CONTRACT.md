# Contrato de datos — Conjugaison

> Documento arquitectónico de referencia. No modifica las reglas pedagógicas ni la lógica de los ejercicios definidas en `docs/CONJUGAISON-SPEC.md`.
>
> Objetivo: establecer una única fuente de verdad para cada concepto del dominio antes de ampliar la base de verbos o refactorizar el motor.

## 1. Principio de autoridad

Cada dato o regla del dominio debe tener una única autoridad lógica.

Si una misma información aparece en varias capas, las copias secundarias deben ser derivadas, validadas o adaptadas para presentación; no deben convertirse en fuentes de verdad independientes.

La especificación pedagógica tiene prioridad sobre cualquier implementación.

Orden de autoridad:

1. `docs/CONJUGAISON-SPEC.md` — reglas pedagógicas congeladas.
2. Contrato de datos del dominio — significado y responsabilidades de los datos.
3. Datos estructurados de los verbos — hechos específicos de cada verbo.
4. Familias/patrones — reglas reutilizables de conjugación.
5. Motor — resolución y generación a partir de las fuentes anteriores.
6. Lookup/Practice/UI — presentación, interacción y estado de aplicación.

Una capa inferior no puede redefinir silenciosamente una regla de una capa superior.

## 2. Entidades del dominio

### Verb

Representa un verbo concreto y su identidad dentro de la aplicación.

Responsabilidades de sus datos:

- `id`
- `infinitif`
- `infinitif_base`
- `groupe`
- `pattern`
- `auxiliaire`
- `pronominal`
- `participePasse`
- `construction`
- referencias a forma base/pronominal cuando correspondan
- excepciones o metadatos específicos del verbo

Estos datos describen hechos del verbo; no deben contener lógica de interfaz.

### Family / Pattern

Representan comportamiento reutilizable.

Responsabilidades:

- identificar el comportamiento compartido;
- generar las terminaciones o transformaciones correspondientes;
- declarar las condiciones de aplicación;
- evitar duplicar reglas verbo por verbo.

Una excepción aislada debe permanecer específica del verbo cuando no exista un comportamiento familiar reutilizable fiable.

### Construction

Representa cómo se construye la forma verbal a partir del verbo base.

Debe poder distinguir, como mínimo:

- construcción no pronominal;
- construcción pronominal.

La construcción pronominal no debe deducirse simplemente porque una forma textual contenga `se`.

### Tense

Representa un tiempo verbal y su estructura.

Los tiempos simples y compuestos deben distinguirse explícitamente.

Los tiempos compuestos se construyen mediante una regla común basada en:

- tiempo del auxiliar;
- auxiliar resuelto (`avoir` / `être`);
- participe passé;
- construcción pronominal cuando corresponda;
- concordancia cuando corresponda.

El `passé composé` es el modelo estructural de referencia establecido por la especificación maestra.

### Auxiliary

Representa la elección de `avoir` o `être`.

La elección explícita de la base de datos prevalece cuando está definida correctamente.

La construcción pronominal implica `être` según la especificación maestra.

La selección del auxiliar no debe ser decidida de forma independiente por Lookup y Practice.

### Participle

El participe passé es un dato del verbo, salvo que una regla explícita del dominio determine otra cosa.

La concordancia no cambia el participe passé base: se aplica como transformación de presentación/generación según sujeto y contexto.

### Agreement

Representa la concordancia del participe passé cuando corresponde.

Reglas maestras:

- con `avoir`, no se genera concordancia de género/número en esta aplicación;
- con `être`, se aplica la concordancia;
- en Lookup se conserva la representación compacta pedagógica;
- en Practice se solicita contexto de género/número cuando sea necesario para determinar una respuesta única.

### Subject

El dominio utiliza nueve sujetos separados para Lookup:

`je`, `tu`, `il`, `elle`, `on`, `nous`, `vous`, `ils`, `elles`.

El `impératif présent` utiliza únicamente `tu`, `nous`, `vous`.

El modelo de sujeto debe ser único. Lookup, Practice y Engine no deben mantener interpretaciones incompatibles del mismo sujeto.

El contexto de género/número para ejercicios de tiempos compuestos puede aplicarse a:

- `je`
- `tu`
- `on`
- `nous`
- `vous`

### Exception

Una excepción es una desviación específica respecto de una regla familiar/patrón.

No debe crearse una excepción para compensar una regla familiar mal modelada.

## 3. Datos derivados

Las formas conjugadas completas no deben convertirse en una segunda fuente de verdad cuando puedan generarse de manera fiable a partir de los datos estructurales.

Cuando existan formas históricas o heredadas en los datos actuales, deben considerarse datos candidatos a migración/validación, no una autorización para duplicar reglas en el motor.

Cualquier refactorización que elimine o transforme datos derivados debe conservar el comportamiento definido por la especificación maestra.

## 4. Responsabilidad del motor

`engine.js` es la autoridad de resolución/generación dentro de la aplicación.

El motor debe:

1. resolver el verbo;
2. resolver su construcción;
3. resolver familia/patrón o excepción;
4. resolver el tiempo;
5. resolver auxiliar cuando corresponda;
6. construir la forma;
7. aplicar concordancia cuando corresponda;
8. devolver una representación de dominio suficientemente estructurada para las capas superiores.

El motor no debe contener reglas específicas de presentación de tablas o componentes de UI.

## 5. Responsabilidad de Lookup

Lookup debe:

- recibir la resolución del dominio;
- expandir los nueve sujetos definidos por la especificación;
- presentar las formas;
- aplicar exclusivamente transformaciones de presentación necesarias, como `j'` y la representación compacta de `vous`;
- proporcionar audio de la forma conjugada.

Lookup no debe implementar una segunda lógica de conjugación.

## 6. Responsabilidad de Practice

Practice debe conservar exactamente la lógica pedagógica actual definida en `CONJUGAISON-SPEC.md`.

Practice puede decidir:

- qué pregunta generar;
- qué sujeto/contexto utilizar;
- cómo distribuir y aleatorizar preguntas;
- cómo evaluar intentos;
- cómo puntuar;
- cómo mostrar el resultado.

Practice no debe duplicar reglas lingüísticas del Engine para producir respuestas diferentes.

**Esta sección no autoriza ningún cambio en el flujo, puntuación, número de preguntas, intentos, aleatoriedad, corrección estricta, concordancia ni comportamiento de continuación.**

## 7. Responsabilidad de la UI

HTML/CSS y la capa de aplicación son responsables de:

- interacción;
- accesibilidad;
- navegación;
- estado visual;
- mensajes;
- modales;
- progreso;
- presentación.

La UI no debe convertirse en una fuente de reglas lingüísticas.

## 8. Regla contra duplicaciones

Antes de añadir una nueva regla, debe responderse:

1. ¿Es una regla pedagógica? → `CONJUGAISON-SPEC.md`.
2. ¿Es un hecho de un verbo? → datos del verbo.
3. ¿Es comportamiento compartido? → familia/patrón.
4. ¿Es una construcción? → sistema de construcciones.
5. ¿Es estructura temporal? → reglas de tiempos.
6. ¿Es resolución lingüística? → Engine.
7. ¿Es presentación o interacción? → Lookup/Practice/UI.

Si una regla necesita existir en dos capas, una de las apariciones debe ser derivada y quedar claramente subordinada a la fuente de verdad.

## 9. Regla de refactorización

Toda futura modificación de arquitectura debe:

- mantener intacta la especificación maestra;
- no cambiar la lógica de ejercicios;
- no crear familias duplicadas;
- no introducir parches específicos para compensar otra capa;
- mantener compatibilidad con los datos existentes o incluir una migración explícita;
- añadir o actualizar tests antes de eliminar una garantía existente;
- ejecutar la regresión de GitHub Actions antes de continuar con el siguiente bloque.

## 10. Estado de este contrato

Este documento define el objetivo arquitectónico del contrato de datos. No implica todavía una migración de código ni de datos.

La siguiente etapa debe auditar el código actual contra este contrato y localizar cada fuente de verdad duplicada antes de realizar cambios funcionales.
