# Especificación maestra — Conjugaison

> **Documento normativo del proyecto.** Estas reglas quedan congeladas. Las futuras mejoras de arquitectura, datos, interfaz o rendimiento deben respetarlas. Si el código no las cumple, se corrige el código; no se cambia la regla pedagógica sin una decisión explícita posterior.

## 1. Alcance

- `Conjugaison` es una sección independiente de francés A1–B2.
- Tiene dos funciones independientes:
  - **Ver una conjugación**
  - **Practicar con ejercicios**
- La búsqueda de verbos no está limitada a una lista cerrada: la arquitectura debe soportar cientos y posteriormente miles de verbos.

## 2. Búsqueda y consulta de verbos

- El usuario introduce el infinitivo.
- Si el verbo no existe, se muestra un mensaje de verbo no encontrado y sugerencias de verbos similares.
- Lista de tiempos definitiva por ahora:
  - `-seleccionar-`
  - `Todos los tiempos`
  - `Présent de l'indicatif`
  - `Passé composé`
  - `Imparfait`
  - `Futur simple`
  - `Conditionnel présent`
  - `Plus-que-parfait`
  - `Conditionnel passé`
  - `Futur antérieur`
  - `Subjonctif présent`
  - `Subjonctif passé`
  - `Impératif présent`

## 3. Tablas de «Ver una conjugación»

### Sujetos

Las tablas utilizan siempre estos 9 sujetos, separados:

1. `je`
2. `tu`
3. `il`
4. `elle`
5. `on`
6. `nous`
7. `vous`
8. `ils`
9. `elles`

### Ortografía

- Se utiliza `j'` cuando corresponde por elisión: `j'ai`, `j'étais`, etc.

### Auxiliar avoir

- Los tiempos compuestos con `avoir` no muestran concordancia de género/número del participio pasado.
- Se muestran los 9 sujetos separados.

### Auxiliar être

- En todos los tiempos compuestos se aplica la concordancia del participio pasado.
- `vous` permanece en **una sola fila**, nunca se divide en cuatro filas.
- La representación pedagógica compacta utiliza las marcas de concordancia necesarias.

Ejemplo de `se lever` en `passé composé`:

| Sujet | Forme |
|---|---|
| je | me suis levé(e) |
| tu | t'es levé(e) |
| il | s'est levé |
| elle | s'est levée |
| on | s'est levé(e)(s) |
| nous | nous sommes levé(e)s |
| vous | vous êtes levé(e)(s) |
| ils | se sont levés |
| elles | se sont levées |

Esta misma lógica de presentación se aplica a todos los tiempos compuestos con `être`:

- passé composé
- plus-que-parfait
- conditionnel passé
- futur antérieur
- subjonctif passé

Por ejemplo, `plus-que-parfait` debe conservar su propio auxiliar: `je m'étais levé(e)`. Esto **no** contradice `je me suis levé(e)`, que es la forma correcta del passé composé.

## 4. Diferencia entre consulta y ejercicio

La presentación de **«Ver una conjugación»** y la lógica del **ejercicio** son deliberadamente diferentes.

- La tabla puede utilizar formas compactas como `vous êtes levé(e)(s)`.
- El ejercicio debe especificar el contexto de género/número cuando sea necesario para determinar una única respuesta.

Esta diferencia es obligatoria y no debe eliminarse mediante una supuesta simplificación arquitectónica.

## 5. Verbos pronominales

- El proyecto define explícitamente qué verbos son pronominales.
- No se debe inferir que cualquier verbo es pronominal simplemente por recibir `se + verbo`.
- Internamente, un verbo pronominal puede modelarse como verbo base + construcción pronominal, siempre que esto no altere:
  - la elección correcta del auxiliar `être`;
  - la concordancia correcta;
  - la formación de los tiempos verbales;
  - la presentación pedagógica.

## 6. Auxiliares

Cada verbo compuesto debe resolver correctamente su auxiliar:

- `avoir`
- `être`
- `être` por construcción pronominal

La información explícita de la base de datos debe prevalecer cuando corresponda; el motor no debe introducir una elección incorrecta del auxiliar.

## 7. Tiempos compuestos

El **passé composé es el modelo estructural de referencia** para los tiempos compuestos.

| Tiempo | Estructura del auxiliar |
|---|---|
| passé composé | auxiliar en présent + participe passé |
| plus-que-parfait | auxiliar en imparfait + participe passé |
| conditionnel passé | auxiliar en conditionnel présent + participe passé |
| futur antérieur | auxiliar en futur simple + participe passé |
| subjonctif passé | auxiliar en subjonctif présent + participe passé |

Para los verbos pronominales se mantiene la construcción pronominal y el auxiliar `être`.

Ejemplo `se lever`:

- passé composé: `je me suis levé(e)`
- plus-que-parfait: `je m'étais levé(e)`
- conditionnel passé: `je me serais levé(e)`
- futur antérieur: `je me serai levé(e)`
- subjonctif passé: `que je me sois levé(e)`

## 8. Ejercicio de conjugación

### Flujo

- El ejercicio contiene **20 preguntas**.
- Se muestra **una pregunta a la vez**.
- Las preguntas están aleatorizadas.
- Los sujetos aparecen siempre mezclados; nunca se agrupan artificialmente `il`, `elle`, `on`, etc.
- El alumno escribe **únicamente la forma verbal solicitada**.
- No debe escribir el sujeto.
- En subjuntivo tampoco debe escribir `que`/`qu'`.
- La validación se realiza mediante el botón actual o `Enter`.
- Al validar correctamente la respuesta, se pasa automáticamente a la siguiente pregunta.

### Puntuación

- Primer intento correcto: **1 punto**.
- Primer intento incorrecto:
  - se muestra `Réponse incorrecte`;
  - no se revela la respuesta correcta;
  - se permite un segundo intento.
- Segundo intento correcto: **0,5 puntos**.
- Segundo intento incorrecto: **0 puntos**.
- Después de dos errores se muestra la respuesta correcta.
- El alumno debe escribir correctamente la respuesta mostrada antes de poder continuar.
- Al validar esa respuesta correcta, pasa automáticamente a la siguiente pregunta.

### Corrección

- Los errores ortográficos cuentan como errores.
- Los errores de acentuación cuentan como errores.
- Una forma gramatical incorrecta cuenta como error.
- No se aplica una tolerancia que convierta una forma escrita incorrectamente en respuesta correcta.

## 9. Concordancia en ejercicios

### Con `avoir`

- No se especifica género/número para provocar concordancia del participio.
- Ejemplo: `elle a mangé`.

### Con `être`

- La concordancia sí forma parte de la respuesta.
- Ejemplos:
  - `elle est partie`
  - `ils sont partis`

### Sujetos con contexto de género/número

En los **tiempos compuestos**, el ejercicio puede especificar género/número únicamente para:

- `je`
- `tu`
- `on`
- `nous`
- `vous`

Esto permite determinar correctamente la concordancia cuando la forma no es única.

En particular, `vous` puede necesitar contexto:

- `vous — féminin singulier` → `vous vous êtes levée`
- `vous — masculin pluriel` → `vous vous êtes levés`

La misma lógica contextual se aplica a `je`, `tu`, `on` y `nous` cuando sea necesaria para resolver la concordancia en tiempos compuestos.

## 10. Pronominales en ejercicios

Ejemplos:

- `elle — se lever — passé composé` → `elle s'est levée`
- `vous — féminin singulier — se lever` → `vous vous êtes levée`

La concordancia debe ser coherente con el sujeto y con el auxiliar `être`.

## 11. Impératif présent

Se mantiene la lógica actual:

- `tu`
- `nous`
- `vous`

No se añaden otros sujetos al impératif présent.

## 12. Resultado final

Después de las 20 preguntas se muestra:

- nota sobre 20, por ejemplo `18/20`;
- cantidad de respuestas correctas;
- cantidad de errores;
- puntuación obtenida, por ejemplo `18,5`;
- resumen de las 20 preguntas.

El resumen debe permitir distinguir, como mínimo:

- pregunta;
- sujeto/contexto;
- respuesta dada;
- respuesta correcta;
- resultado;
- si hubo primer error;
- si fue necesario un segundo intento;
- puntuación obtenida.

## 13. Progreso

Durante el ejercicio, la barra de progreso debe expresarse preferentemente como:

> `7/20`

## 14. Audio

- En «Ver una conjugación», cada forma conjugada dispone de audio de pronunciación.
- El audio debe pronunciar la **forma conjugada**, no únicamente el infinitivo.
- La posición visual de los botones de audio y la velocidad de pronunciación quedan como una mejora futura de UX; esta mejora no debe alterar ninguna regla de conjugación ni del ejercicio.

## 15. Arquitectura de datos y motor

- La base de datos debe almacenar información estructural y pedagógica necesaria, por ejemplo:
  - infinitivo;
  - grupo;
  - patrón;
  - participe passé;
  - auxiliar;
  - información pronominal;
  - excepciones;
  - metadatos necesarios.
- El motor genera las conjugaciones a partir de reglas siempre que sea posible.
- No se deben almacenar manualmente miles de conjugaciones cuando pueden derivarse de patrones fiables.
- Se debe priorizar un **patrón/familia reutilizable (B)** cuando varios verbos comparten comportamiento.
- Se utiliza una **excepción específica (A)** cuando realmente se trata de una excepción aislada.

## 16. Grupos verbales

Se conservan los grupos pedagógicos actuales, incluyendo los grupos especiales ya definidos (por ejemplo, verbes en `-GER`, `-CER`, `-ELER`, etc.).

Los nombres y la presentación visual de estos grupos pueden mejorarse posteriormente, y se podrán añadir otros grupos, pero ninguna modificación de presentación debe romper la lógica de clasificación o conjugación ya implantada.

## 17. Regla de congelación

**LAS REGLAS PEDAGÓGICAS Y LA LÓGICA DEL EJERCICIO ESTÁN CONGELADAS.**

Una auditoría o refactorización futura NO debe modificar por iniciativa propia:

- las 20 preguntas;
- una pregunta por vez;
- la aleatoriedad y mezcla de sujetos;
- el sistema de 1 punto / 0,5 puntos / 0 puntos;
- los dos intentos;
- la obligación de escribir correctamente la solución después de dos errores;
- la validación automática al acertar;
- el tratamiento estricto de ortografía y acentos;
- la lógica de concordancia;
- el contexto de `vous` y de los demás sujetos definidos;
- la distinción `avoir` / `être`;
- la lógica de verbos pronominales;
- la lógica del passé composé como modelo de los tiempos compuestos;
- la estructura de los demás tiempos compuestos;
- la presentación compacta de las tablas de «Ver una conjugación»;
- la regla de `vous` en una sola fila.

**Cualquier futura modificación debe demostrar explícitamente que estas reglas siguen intactas.**
