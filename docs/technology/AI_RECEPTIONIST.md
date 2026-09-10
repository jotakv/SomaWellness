# AI Receptionist

> **Estado del documento:** blueprint interno. Salvo decisiones de diseño expresamente marcadas, las propuestas comerciales, problemas, efectos y adopción son **HIPÓTESIS**; los datos no disponibles son **PENDIENTE**. No acredita demanda, clientes, ventas ni viabilidad.

## Alcance

MVP web: FAQs, actividades, facilitadores, horarios, disponibilidad, precios, lead capture, recomendación, booking, follow-up y human handoff. WhatsApp es siguiente hipótesis; voice, futuro.

```text
LLM → controlled knowledge base → tool calling → SOMA APIs → domain
```

Tools con esquemas y permisos: `getActivities`, `getAvailability`, `createLead`, `createBooking`, `handoff`. Confirmación explícita antes de escribir; idempotencia; no inventar precio/plaza; respuesta “no sé”; aislamiento por tenant; auditoría. Métricas: containment seguro, task completion, error, handoff, tiempo administrativo y coste. HYP-TECH-002 solo progresa con baseline y comparación.

## Puerta de validación

No avanzar por entusiasmo: evidencia del problema → solución manual → Customer Zero → uso → valor medible → piloto externo → disposición a pagar → adopción repetible. Registrar evidencia adversa y detener o reordenar si no se supera la puerta.
