# Modelo transversal Experience

> **Estado del documento:** blueprint interno. Salvo decisiones de diseño expresamente marcadas, las propuestas comerciales, problemas, efectos y adopción son **HIPÓTESIS**; los datos no disponibles son **PENDIENTE**. No acredita demanda, clientes, ventas ni viabilidad.

`Experience` abstrae clase, workshop, event, retreat, digital session, live stream, challenge y group activity para LAB, Marketplace y Journey.

Campos conceptuales: id, organizationId/owner, type, title, description, modality, location/URL, schedule/duration, capacity, eligibility/level, facilitatorIds, price/currency, cancellation policy, taxonomy, lifecycle, safety/accessibility y provenance. `Activity` es plantilla; `Experience` oferta descubrible; `Session` ocurrencia programada; `Booking` reserva. Retreat y challenge extienden sin romper catálogo. Estado y disponibilidad nunca los inventa AI.

## Puerta de validación

No avanzar por entusiasmo: evidencia del problema → solución manual → Customer Zero → uso → valor medible → piloto externo → disposición a pagar → adopción repetible. Registrar evidencia adversa y detener o reordenar si no se supera la puerta.
