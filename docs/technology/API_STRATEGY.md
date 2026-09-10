# Estrategia API-first

> **Estado del documento:** blueprint interno. Salvo decisiones de diseño expresamente marcadas, las propuestas comerciales, problemas, efectos y adopción son **HIPÓTESIS**; los datos no disponibles son **PENDIENTE**. No acredita demanda, clientes, ventas ni viabilidad.

## Regla

SOMA AI y canales no acceden directamente a tablas; llaman application services/APIs con tenant, actor, policy, validation, idempotency y audit. Operaciones candidatas: `getActivities()`, `getExperiences()`, `getAvailability()`, `createBooking()`, `getCustomer()`, `getJourney()`, `getRecommendations()`, `findCreators()` y `findRetreats()`.

Contratos versionados, errores de dominio y mínimos datos necesarios permiten reutilizar desde SOMA App, SOMA OS, AI Receptionist, WhatsApp futuro y partner apps. Escrituras sensibles requieren confirmación y controles anti-replay.

## Puerta de validación

No avanzar por entusiasmo: evidencia del problema → solución manual → Customer Zero → uso → valor medible → piloto externo → disposición a pagar → adopción repetible. Registrar evidencia adversa y detener o reordenar si no se supera la puerta.
