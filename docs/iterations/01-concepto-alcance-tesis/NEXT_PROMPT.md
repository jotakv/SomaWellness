# ITERACIÓN 02 — CLIENTES, PROBLEMA Y EVIDENCIA DE MERCADO INICIAL

Continúa la construcción incremental del repositorio **SomaWellness** a partir del estado dejado por la iteración 01.

No completes todavía el business plan ni emitas una conclusión de viabilidad. Trabaja únicamente la comprensión inicial de clientes, problema, alternativas y evidencia de mercado necesaria para contrastar la tesis.

## LECTURA OBLIGATORIA

Antes de modificar archivos:

1. lee todos los documentos de `docs/master/`;
2. lee todos los archivos de `docs/iterations/01-concepto-alcance-tesis/`;
3. revisa todos los JSON de `data/`, en especial `concept.json`;
4. revisa la web y los tests existentes;
5. ejecuta los tests de partida.

## OBJETIVO

Definir segmentos preliminares, situaciones y problemas observables; diseñar y, cuando sea posible, iniciar una investigación de mercado acotada y trazable que permita contrastar T-0001, T-0002 y T-0003 sin confundir señales con validación concluyente.

## TRABAJO

- Prioriza segmentos preliminares con criterios explícitos y estado oficial.
- Formula trabajos, fricciones, alternativas actuales y resultados buscados como hipótesis contrastables.
- Diseña un protocolo de entrevistas y una matriz de evidencia primaria y secundaria.
- Define criterios de calidad, señales de apoyo y señales de refutación antes de recopilar resultados.
- Realiza solo investigación inicial proporcionada al alcance; no hagas un censo exhaustivo de competidores.
- Registra cada fuente real con URL o referencia identificable, fecha de consulta, método y valoración de calidad.
- Actualiza la tesis sin borrar su formulación o estado anterior.
- Conserva PENDIENTE todo dato que no pueda verificarse y evita inventar entrevistas, demanda, precios o métricas.

## ACTUALIZA

Como mínimo, actualiza coherentemente los registros maestros, `data/concept.json`, los JSON de mercado y fuentes pertinentes, la portada, las páginas de concepto y mercado, y los tests necesarios. Evita duplicar afirmaciones o cifras estructuradas fuera de su fuente única en `data/`.

## ESTADOS OBLIGATORIOS

Usa exclusivamente CONFIRMADO, DERIVADO, ESTIMADO, HIPÓTESIS y PENDIENTE. Una decisión interna puede estar CONFIRMADO sin confirmar la realidad del mercado. Toda evidencia debe incluir fuente, fecha y calidad.

## LÍMITES

- No cierres precios, demanda, capacidad, ubicación ni estructura operativa definitiva.
- No construyas un modelo financiero definitivo.
- No presentes señales iniciales como validación estadística.
- No emitas conclusión Go/No-Go ni de viabilidad.
- No inventes fuentes, entrevistas, métricas o competidores.

## ITERACIÓN

Crea `docs/iterations/02-clientes-problema-evidencia/` con `PROMPT.md`, `RESULT.md`, `CHANGES.md`, `VALIDATION.md`, `OPEN_QUESTIONS.md` y `NEXT_PROMPT.md`. Copia este prompt a `prompts/CURRENT_PROMPT.md` al comenzar. Al finalizar, copia exactamente el siguiente prompt archivado a `prompts/NEXT_PROMPT.md`.

## TESTS Y VALIDACIÓN

- Valida todos los JSON.
- Comprueba rutas y enlaces internos básicos.
- Comprueba el vocabulario oficial de estados.
- Comprueba existencia e igualdad de los dos archivos `NEXT_PROMPT.md`.
- Verifica que la web muestre iteración y madurez actuales.
- Documenta comandos, resultados y limitaciones en `VALIDATION.md`.

## CRITERIOS DE FINALIZACIÓN

No termines hasta que segmentos, problemas, alternativas y protocolo de evidencia estén documentados; cada afirmación relevante tenga estado; fuentes y calidad sean trazables; maestros, datos, web y tests sean coherentes; y el siguiente prompt completo exista, archivado y copiado de forma idéntica.
