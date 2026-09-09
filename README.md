# SomaWellness — Plan de Empresa en construcción

Este repositorio construye el plan de empresa de **SomaWellness** de forma incremental, versionada y auditable. El estado actual es **ITERACIÓN 00 — BOOTSTRAP**: existe la infraestructura, pero todavía no hay una conclusión de viabilidad.

## Estado actual

- Arquitectura web estática y navegación inicial.
- Datos estructurados en `data/`.
- Documentos vivos en `docs/master/`.
- Histórico reproducible en `docs/iterations/`.
- Prompt activo y siguiente paso en `prompts/`.
- Tests de JSON, rutas y continuidad del siguiente prompt.

Los materiales exploratorios que ya existen en otras páginas o ficheros no se consideran resultados confirmados de esta iteración. El concepto se revisará en la iteración 01; la investigación profunda de mercado, el modelo financiero definitivo y la evaluación de viabilidad corresponden a iteraciones posteriores.

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
