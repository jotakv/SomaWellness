# Multi-tenancy

> **Estado del documento:** blueprint interno. Salvo decisiones de diseño expresamente marcadas, las propuestas comerciales, problemas, efectos y adopción son **HIPÓTESIS**; los datos no disponibles son **PENDIENTE**. No acredita demanda, clientes, ventas ni viabilidad.

## Modelo obligatorio desde diseño

SOMA LAB es conceptualmente `organization_id = 1`; un estudio externo, `organization_id = N`. No son registros actuales. Tablas tenant-owned requieren `organization_id`, claves compuestas, scopes por defecto y autorización server-side.

Controles: RBAC organization/location; row-level defense-in-depth; tests negativos cross-tenant; jobs con tenant explícito; cache keys y object paths namespaced; logs sin payload sensible; knowledge/RAG por tenant; tool calls vuelven a autorizar. Operaciones cross-tenant solo en plano administrativo auditado. Threat model incluye IDOR, cache/log leakage y contexto AI mezclado.

## Puerta de validación

No avanzar por entusiasmo: evidencia del problema → solución manual → Customer Zero → uso → valor medible → piloto externo → disposición a pagar → adopción repetible. Registrar evidencia adversa y detener o reordenar si no se supera la puerta.
