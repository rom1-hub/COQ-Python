# COQ — Registro de migración y arquitectura

## Objetivo
Extraer la pronunciación global de `script.js` a un servicio reutilizable, manteniendo el comportamiento actual de los botones `[data-say]`.

## Modificados
- `js/core/audio.js` (nuevo)
- `script.js` (solo extracción de audio global y navegación ya separada)
- 10 HTML (carga del servicio)

## Protegidos
No se modifica la lógica de conjugación, datos, ejercicios, buscador, progreso ni estilos. En `conjugaison.html` se elimina únicamente el inicializador de menú duplicado; la lógica de audio específica de conjugación permanece intacta.

## Validación
- `script.js` ya no contiene `SpeechSynthesisUtterance`.
- `audio.js` contiene la implementación global.
- Cada HTML carga `navigation.js`, `audio.js` y `script.js` una sola vez.
- Se conserva el conjunto completo de archivos V43, incluido CSS y logo.


## FASE 2C — Motor global de ejercicios

- Extraído el motor genérico de ejercicios de `script.js` a `js/exercises/exercise-engine.js`.
- Se conserva la lógica y comportamiento existentes; no se rediseña el motor.
- Las páginas HTML cargan el motor antes de `script.js`.
- Protegidos: conjugación, audio, navegación, búsqueda, progreso y estilos.

## Validación FASE 2C
- `script.js`, `js/core/audio.js`, `js/core/navigation.js` y `js/exercises/exercise-engine.js` pasan `node --check`.
- El bloque de ejercicios ya no existe en `script.js`.
- El motor aparece una sola vez en `js/exercises/exercise-engine.js`.
- Todas las páginas HTML cargan `exercise-engine.js` antes de `script.js`.
- No se modificó `styles.css` ni la lógica específica de `conjugaison.html`.


## Fase 2D — separar progreso global
- Extraída la escritura de finalización de etapa y la revelación de `#completeBox` a `js/progress/progress.js`.
- El motor global de ejercicios conserva su comportamiento y ahora llama a `markStageComplete()`.
- Añadida la carga de `js/progress/progress.js` en las 10 páginas HTML.
- No se modifica todavía el modelo futuro de progreso; la clave de `localStorage` sigue siendo `coq-stage-complete-` + `location.pathname`.


## Fase 2E — separar buscador global
- Extraída la lógica del buscador global de `script.js` a `js/search/search.js`.
- Se conserva el índice actual y el comportamiento de búsqueda; no se amplía todavía el buscador.
- Las 10 páginas HTML cargan `js/search/search.js` antes de `script.js`.
- Protegidos: conjugación, audio, navegación, ejercicios, progreso, estilos y contenido.

## Validación FASE 2E
- `script.js` ya no contiene el bloque del buscador global.
- `search.js` contiene una única implementación del buscador global.
- Todas las páginas HTML cargan `search.js` una sola vez.
- El buscador mantiene el mismo índice y comportamiento de V43.


## Fase 3A — separar datos de conjugación
- Extraídos los datos de `conjugations`, `verbGroups` y `verbMeta` de `conjugaison.html` a `data/verbs/conjugations.js`.
- Se mantiene el contenido de datos sin cambios.
- `conjugaison.html` consume `window.COQ_VERB_DATA`; la lógica de conjugación permanece en la página en esta fase.
- No se modifican CSS, ejercicios, progreso, buscador, navegación ni audio.


## Correcciones de Conjugación antes de cerrar Fase 3A
- Aceptar la respuesta completa con el sujeto `j'` (por ejemplo, `j'ai`) en el ejercicio, manteniendo también válida la forma conjugada sola (`ai`).
- Ordenar la vista de `Todos los tiempos` comenzando por `présent de l'indicatif`, seguido del orden pedagógico definido, sin modificar los datos de conjugación.
- Adaptar la ventana y el resumen final a móvil/tablet para eliminar el scroll horizontal de la tabla.


## Fase 3B — separación de lógica de Conjugación
- Extraída la lógica inline de `conjugaison.html`.
- Separada por responsabilidad en `js/conjugaison/utils.js`, `lookup.js`, `practice.js` y `app.js`.
- Sin cambios pedagógicos ni de base de datos en esta fase.


## Fase 3E — estructura real de datos
- Sustituido `data/verbs/conjugations.js` por `data/verbs/verbs.js`, `patterns.js` y `tense-rules.js`.
- `verbs.js` conserva una capa de compatibilidad para la lógica actual.
- No se modificaron las formas de conjugación existentes ni las reglas de cálculo.


## Fase 3E — revisión arquitectónica antes del registro (versión corregida)
- El modelo distingue ahora el **verbo base** de la **construcción** que se está conjugando.
- Una forma pronominal se relaciona con su verbo base mediante `verbeBase` y `formesAssociees`; no se considera un verbo completamente independiente.
- La estructura admite que un verbo tenga o no una construcción pronominal válida. No se inventan automáticamente formas como `se être` o `se avoir`; una construcción pronominal solo se registra cuando sea lingüísticamente pertinente y validada.
- Se añadió `data/verbs/constructions.js` como catálogo común de construcciones.
- Todos los tiempos compuestos apuntan al mismo catálogo de filtros de construcción (`avec-avoir`, `avec-etre`, `avec-avoir-et-etre`, `verbes-pronominaux`). La interfaz de entrenamiento se cambiará posteriormente; en esta fase solo se prepara el modelo.
- Se deja explícitamente fuera de esta fase la implementación completa de las reglas de concordancia del participe passé. Estas reglas se desarrollarán posteriormente como motor independiente.
- La futura búsqueda de conjugación deberá aceptar tanto la forma no pronominal como la forma pronominal y permitir alternar entre ambas en la misma vista. La relación se guarda a nivel de verbo base + construcción; esta fase prepara los datos, sin modificar todavía la interfaz.

### Protección de esta fase
- No se rediseña la interfaz de `conjugaison`.
- No se implementa todavía el motor completo de conjugación ni la concordancia del participe passé.
- No se modifica el comportamiento actual de la consulta ni de los ejercicios.
- Se conserva la capa `COQ_VERB_DATA` para compatibilidad con la lógica actual.


### Decisiones añadidas antes del registro
- `parler` conserva su identidad como verbo base y registra `se parler` como construcción pronominal futura (`statut: a_construire`), sin inventar todavía sus tablas de conjugación.
- `se lever` conserva sus datos actuales como construcción pronominal relacionada con el verbo base `lever`.
- La base no presupone que todos los verbos admitan automáticamente una forma pronominal válida; el catálogo podrá registrar esa relación cuando corresponda.
- El selector de entrenamiento de los tiempos compuestos se modela una sola vez y será reutilizado por passé composé, plus-que-parfait, conditionnel passé, futur antérieur y subjonctif passé.
- La implementación de la búsqueda `se parler` ↔ `parler` y del botón contextual queda para una fase posterior del motor/lookup.

## Fase 3F1 — Motor de tiempos simples
- Añadidos `js/conjugaison/engine.js` y `js/conjugaison/pronouns.js`.
- El motor genera tiempos simples a partir del patrón para los patrones regulares actualmente disponibles y conserva compatibilidad con formas explícitas para patrones aún no migrados.
- La consulta y la práctica utilizan el motor para los tiempos simples.
- La construcción pronominal reutiliza la conjugación del verbo base y aplica el pronombre correspondiente.
- No se modifica todavía la lógica completa de tiempos compuestos ni la concordancia avanzada.
- No se realizan cambios estéticos.


## 3F1 — filtros de entrenamiento
- `Construction` es independiente del tiempo verbal y permite practicar verbos no pronominales o pronominales también en tiempos simples.
- `Verbe auxiliaire` sustituye el antiguo selector de entrenamiento y solo se habilita para tiempos compuestos. Para tiempos simples muestra un mensaje de bloqueo contextual.
- Los filtros `Construction` y `Verbe auxiliaire` son independientes.

## Fase 3F2 — Motor de tiempos compuestos

- Se añadió `js/conjugaison/compound-tenses.js` con una única correspondencia para todos los tiempos compuestos:
  - passé composé → présent de l'auxiliaire
  - plus-que-parfait → imparfait
  - conditionnel passé → conditionnel présent
  - futur antérieur → futur simple
  - subjonctif passé → subjonctif présent
- Se añadió `js/conjugaison/agreement.js` para las reglas de concordancia básicas usadas en `Conjugaison`.
- `engine.js` genera ahora tiempos compuestos a partir de auxiliar + tiempo del auxiliar + participio pasado + regla de concordancia.
- La construcción pronominal utiliza `être` y los pronombres pronominales comunes.
- Para las construcciones pronominales incluidas en esta fase:
  - `se lever` → concordancia con el sujeto.
  - `se parler` → `se` COI, sin concordancia.
- Se ampliaron los datos de `être` y `avoir` con las formas auxiliares necesarias para conditionnel présent y subjonctif présent.
- Se añadió `se parler` como caso de prueba de concordancia COI.
- Los ejercicios de tiempos compuestos especifican género/número para `je`, `tu`, `on`, `nous` y `vous`, incluyendo las tres variantes de `on` aprobadas:
  - on (masculin singulier)
  - on (masculin pluriel)
  - on (féminin pluriel)
- Los casos complejos de COD y la elección contextual AVOIR/ÊTRE quedan fuera de `Conjugaison` y se reservarán para unidades pedagógicas independientes.
- No se modificó la estética.


## Fase 3F3 — disponibilidad de tiempos compuestos generables

- Se corrigió la práctica para que los tiempos compuestos no dependan de que exista una fila explícita en `formes`.
- `conditionnel passé`, `plus-que-parfait`, `futur antérieur` y `subjonctif passé` pueden generarse desde el motor cuando el verbo ya está registrado y dispone de auxiliar + participio.
- `Todos los tiempos` incorpora también los tiempos compuestos generables, aunque todavía no tengan una entrada explícita en los datos.
- La consulta de conjugación puede mostrar un tiempo compuesto generado aunque no exista todavía una fila almacenada para ese tiempo.
- No se modifican las reglas pedagógicas de auxiliares: cada verbo mantiene un único auxiliar principal en esta sección.
- No se implementan excepciones de auxiliar ni casos complejos de acuerdo pronominal; permanecen fuera de esta sección.

## Fase 3F3b — Corrección de práctica y generación sin datos explícitos

- Corregida la generación de `subjonctif passé` para las variantes de sujeto `je`, `tu`, `nous` y `vous`. La búsqueda del auxiliar reconoce correctamente las filas `que je`, `que tu`, etc.
- La práctica ya no crea preguntas cuyo `answer` esté vacío cuando un tiempo todavía no está registrado y el motor tampoco puede generarlo.
- `Todos los tiempos` considera tanto los tiempos registrados como los tiempos que el motor sabe generar mediante reglas.
- Cuando un tiempo simple no está registrado pero su patrón permite generarlo, se crea automáticamente la conjugación y puede utilizarse en la práctica.
- Cuando un tiempo todavía no está registrado y el motor no sabe generarlo (por ejemplo, una irregularidad aún no migrada), ese tiempo queda fuera de la sesión en lugar de generar una pregunta bloqueada.
- Se añadió la formación correcta del imperativo pronominal básico (`lève-toi`, `levons-nous`, `levez-vous`) para evitar respuestas incorrectas al utilizar `Todos los tiempos`.

