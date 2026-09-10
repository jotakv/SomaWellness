# Arquitectura técnica

> **Estado del documento:** blueprint interno. Salvo decisiones de diseño expresamente marcadas, las propuestas comerciales, problemas, efectos y adopción son **HIPÓTESIS**; los datos no disponibles son **PENDIENTE**. No acredita demanda, clientes, ventas ni viabilidad.

## Principio: modular monolith

Stack **HIPÓTESIS técnica**: TypeScript; React/Next.js; Node.js/NestJS; PostgreSQL; Redis/BullMQ solo cuando haya necesidad; object storage S3-compatible; Stripe; AI provider abstraction; OpenTelemetry/Sentry cuando proceda.

```text
Web/PWA + SOMA OS UI + AI channels
              ↓ API/application services
Identity | Organizations | CRM | Scheduling | Experience | Journey | Content
Community | Marketplace | Billing | AI | Analytics | Consent/Audit
              ↓
PostgreSQL (+ jobs/cache/object storage when justified)
```

No microservices, Kubernetes, Kafka, data lake ni event sourcing complejo. Módulos tienen límites y contratos dentro de un despliegue. ADR-001 registra estrategia de repositorios.

## Puerta de validación

No avanzar por entusiasmo: evidencia del problema → solución manual → Customer Zero → uso → valor medible → piloto externo → disposición a pagar → adopción repetible. Registrar evidencia adversa y detener o reordenar si no se supera la puerta.
