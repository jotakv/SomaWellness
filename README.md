# SomaWellness — Plan de Empresa en construcción

Este repositorio construye el plan de empresa de **SomaWellness** de forma incremental, versionada y auditable. El estado actual es **ITERACIÓN 02 — CLIENTES, PROBLEMA Y EVIDENCIA INICIAL**: existe la infraestructura, pero todavía no hay una conclusión de viabilidad.

## Estado actual

- Segmentos preliminares priorizados con situaciones, trabajos, fricciones y alternativas.
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
prompts/CURRENT_PROMPT.md           instrucción ejecutada
prompts/NEXT_PROMPT.md              siguiente iteración completa
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
