# SOMA — plan de empresa híbrido en construcción

Este repositorio construye el plan de empresa de **SOMA = SOMA LAB + SOMA DIGITAL** de forma incremental, versionada y auditable. El estado real previo a esta ampliación era la **iteración física 05**; ahora se añade, en paralelo, el blueprint tecnológico inicial. No existe todavía una conclusión de viabilidad física ni digital.

## Estado actual

- SOMA LAB preserva el caso físico y actúa, como hipótesis, como Customer Zero y Living Lab.
- SOMA DIGITAL incorpora SOMA OS, SOMA AI, Journeys, Content, Creators, Community, Marketplace y Retreats como hipótesis contrastables.
- Segmentos físicos preliminares priorizados con situaciones, trabajos, fricciones y alternativas.
- Protocolo y matriz de evidencia para T-0001–T-0003.
- Despliegue continuo de la web estática mediante GitHub Actions.
- Datos estructurados en `data/`.
- Documentos vivos en `docs/master/`.
- Histórico reproducible en `docs/iterations/`.
- Prompt activo y siguiente paso en `prompts/`.
- Tests de JSON, rutas y continuidad del siguiente prompt.

Los materiales exploratorios que ya existen en otras páginas o ficheros no se consideran resultados confirmados de esta iteración. No se realizaron entrevistas ni pruebas conductuales: las señales iniciales no constituyen validación y la investigación profunda, el modelo financiero definitivo y la evaluación de viabilidad corresponden a iteraciones posteriores.

## Estados de evidencia

`CONFIRMADO` · `DERIVADO` · `ESTIMADO` · `HIPÓTESIS` · `PENDIENTE`

Sus definiciones canónicas están en `data/evidence-status.json` y `docs/master/PROJECT_CONTEXT.md`.

## Estructura

```text
index.html                         portada y madurez del plan
assets/                            estilos y scripts web
data/                              fuentes de verdad estructuradas
docs/master/                       contexto y registros vivos
docs/iterations/00-bootstrap/      histórico de la iteración 00
docs/technology/                   arquitectura y producto tecnológico
docs/platform/                     blueprint de plataforma B2C/B2Creator
docs/product/                      experiencia de producto
prompts/CURRENT_PROMPT.md           instrucción ejecutada
prompts/NEXT_PROMPT.md              siguiente iteración completa
prompts/technology/                 línea incremental tecnológica paralela
tests/                              controles automáticos
```

## Ejecutar

```bash
python -m http.server 8000
```

Abra `http://localhost:8000`. No hay dependencias de producción ni proceso de compilación.

## Validar

```bash
npm test
npm run check:content
```

Node.js 20 o superior es recomendable. No se versionan recursos binarios.
