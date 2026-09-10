# Economía de IA

> **Estado del documento:** blueprint interno. Salvo decisiones de diseño expresamente marcadas, las propuestas comerciales, problemas, efectos y adopción son **HIPÓTESIS**; los datos no disponibles son **PENDIENTE**. No acredita demanda, clientes, ventas ni viabilidad.

## Modelo

`AI interactions × tokens per interaction × model cost = AI COGS`, ajustado por input/output, caching, retrieval, tool calls, retries y costes no-token. Todos los inputs y precios de proveedor son **PENDIENTE** hasta selección y medición.

Palancas: routing por complejidad, modelos pequeños, workflows deterministas, caching seguro por tenant, retrieval acotado, límites y batching. Dashboard por tenant/use case: coste por tarea completada, latencia, error, handoff y margen. Reducir coste nunca puede saltarse seguridad o aislamiento.

## Puerta de validación

No avanzar por entusiasmo: evidencia del problema → solución manual → Customer Zero → uso → valor medible → piloto externo → disposición a pagar → adopción repetible. Registrar evidencia adversa y detener o reordenar si no se supera la puerta.
