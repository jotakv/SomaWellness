# Modelo de eventos

> **Estado del documento:** blueprint interno. Salvo decisiones de diseño expresamente marcadas, las propuestas comerciales, problemas, efectos y adopción son **HIPÓTESIS**; los datos no disponibles son **PENDIENTE**. No acredita demanda, clientes, ventas ni viabilidad.

## Eventos internos

`lead.created`, `lead.converted`, `booking.created`, `booking.cancelled`, `attendance.checked_in`, `membership.started`, `membership.expiring`, `journey.started`, `journey.completed`, `content.completed`, `experience.booked`, `recommendation.clicked`, `creator.followed`, `community.joined`, `retreat.booked`.

Envelope: eventId, type/version, occurredAt, organizationId, actorId opcional, aggregateId y payload mínimo. Tabla outbox/job dentro del monolito solo si hace falta; idempotent consumers y retention. No broker distribuido ni promesa de tiempo real prematura.

## Puerta de validación

No avanzar por entusiasmo: evidencia del problema → solución manual → Customer Zero → uso → valor medible → piloto externo → disposición a pagar → adopción repetible. Registrar evidencia adversa y detener o reordenar si no se supera la puerta.
