# ADR-001 — Separación futura de repositorios

> **Estado del documento:** blueprint interno. Salvo decisiones de diseño expresamente marcadas, las propuestas comerciales, problemas, efectos y adopción son **HIPÓTESIS**; los datos no disponibles son **PENDIENTE**. No acredita demanda, clientes, ventas ni viabilidad.

## Estado

**PENDIENTE** de activación; decisión conceptual registrada el 2026-09-10.

## Contexto y decisión

SomaWellness permanece source of truth de business plan, research, strategy y product blueprint. Si existe evidencia suficiente para construir producto, podrá crearse un repositorio independiente `soma-os` como source of truth de software. **No se crea ahora.**

## Consecuencias

Evita mezclar blueprint y aplicación prematura. Antes de separar: owner, contratos de API/data, trazabilidad de decisiones, seguridad, release process y vínculo entre hypothesis/evidence y entrega. Alternativas rechazadas por ahora: monorepo SaaS pesado o código de producción dentro de este repositorio.

## Puerta de validación

No avanzar por entusiasmo: evidencia del problema → solución manual → Customer Zero → uso → valor medible → piloto externo → disposición a pagar → adopción repetible. Registrar evidencia adversa y detener o reordenar si no se supera la puerta.
