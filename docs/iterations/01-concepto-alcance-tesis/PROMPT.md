# ITERACIÓN 01 — CONCEPTO, ALCANCE Y TESIS

Continúa la construcción incremental del repositorio **SomaWellness** a partir del estado dejado por la iteración 00.

No intentes completar todavía el business plan. Trabaja únicamente el concepto, el alcance y la tesis inicial, y conserva el repositorio funcional, coherente y auditable.

## LECTURA OBLIGATORIA

Antes de modificar archivos:

1. lee `docs/master/PROJECT_CONTEXT.md`;
2. lee `docs/master/BUSINESS_PLAN_OUTLINE.md`;
3. lee todos los registros de `docs/master/`;
4. lee `docs/iterations/00-bootstrap/RESULT.md`, `VALIDATION.md` y `OPEN_QUESTIONS.md`;
5. revisa los datos y la web existentes;
6. ejecuta los tests de partida.

## OBJETIVO

Definir con precisión qué es SomaWellness, qué problema pretende resolver, para quién, qué ofrece a nivel conceptual, qué queda dentro y fuera del análisis y cuál es la tesis inicial que deberán contrastar las próximas iteraciones.

## TRABAJO

- Redacta una definición breve y otra desarrollada del concepto.
- Delimita alcance geográfico, tipo de negocio, beneficiarios/clientes preliminares, actividades, canales e ingresos admisibles.
- Registra explícitamente las exclusiones.
- Formula el problema, la respuesta propuesta y los principios de la experiencia SomaWellness.
- Propón una tesis inicial formada por afirmaciones contrastables, no por conclusiones.
- Para cada afirmación de la tesis, indica qué evidencia futura podría apoyarla o refutarla.
- Separa estrictamente hechos, derivados, estimaciones, hipótesis y pendientes usando solo los estados oficiales.
- Resuelve, cuando sea posible sin investigación profunda, las preguntas Q-0001, Q-0002 y Q-0003; conserva abiertas las que no puedan resolverse.

## ACTUALIZA

Como mínimo, actualiza de manera coherente:

- `docs/master/PROJECT_CONTEXT.md`;
- `docs/master/BUSINESS_PLAN_OUTLINE.md`;
- `docs/master/DECISION_LOG.md`;
- `docs/master/ASSUMPTIONS_REGISTER.md`;
- `docs/master/EVIDENCE_REGISTER.md`;
- `docs/master/OPEN_QUESTIONS.md`;
- los JSON pertinentes de `data/`;
- la página inicial y la página de concepto, o crea esta última si no existe;
- los tests necesarios.

No dupliques cifras ni afirmaciones estructuradas si pueden proceder de una única fuente de verdad en `data/`.

## ESTADOS OBLIGATORIOS

Usa exclusivamente:

- CONFIRMADO;
- DERIVADO;
- ESTIMADO;
- HIPÓTESIS;
- PENDIENTE.

No presentes una hipótesis como hecho. Toda nueva evidencia debe incluir fuente, fecha y valoración de calidad; si no existe evidencia, marca la afirmación como HIPÓTESIS o PENDIENTE.

## LÍMITES

- No realices aún un estudio de mercado profundo ni un censo exhaustivo de competidores.
- No cierres precios, demanda, capacidad, ubicación o estructura operativa definitiva.
- No construyas un modelo financiero definitivo.
- No emitas una conclusión Go/No-Go ni una conclusión de viabilidad.
- No inventes fuentes, entrevistas, métricas o validaciones.

## ITERACIÓN

Crea `docs/iterations/01-concepto-alcance-tesis/` con:

- `PROMPT.md`, que contenga una copia completa de este prompt;
- `RESULT.md`, con resultados y límites;
- `CHANGES.md`, con archivos y decisiones modificados;
- `VALIDATION.md`, con comandos ejecutados y resultados;
- `OPEN_QUESTIONS.md`, con preguntas que pasan a la siguiente iteración;
- `NEXT_PROMPT.md`, con el prompt completo de la iteración 02.

Al comenzar, copia este prompt a `prompts/CURRENT_PROMPT.md`. Al finalizar, copia exactamente el contenido de `docs/iterations/01-concepto-alcance-tesis/NEXT_PROMPT.md` a `prompts/NEXT_PROMPT.md`.

## TESTS Y VALIDACIÓN

- Ejecuta la validación de todos los JSON.
- Comprueba las rutas y enlaces internos básicos.
- Comprueba que los dos archivos `NEXT_PROMPT.md` existen y son idénticos.
- Comprueba que los estados utilizados pertenecen al vocabulario oficial.
- Verifica que la web indique claramente la iteración y madurez actuales.
- Documenta resultados y cualquier limitación del entorno en `VALIDATION.md`.

## CRITERIOS DE FINALIZACIÓN

No termines hasta que:

1. concepto, alcance, exclusiones y tesis estén documentados;
2. cada afirmación relevante tenga estado;
3. registros maestros, datos y web sean coherentes;
4. los tests pasen;
5. exista `prompts/NEXT_PROMPT.md` con el prompt completo de la iteración 02 y sea idéntico al archivado en la iteración 01.
