# SOMA AI

> **Estado del documento:** blueprint interno. Salvo decisiones de diseño expresamente marcadas, las propuestas comerciales, problemas, efectos y adopción son **HIPÓTESIS**; los datos no disponibles son **PENDIENTE**. No acredita demanda, clientes, ventas ni viabilidad.

## Capability layer

```text
SOMA EXPERIENCE
      ↓
SOMA AI ORCHESTRATION
      ↓
Knowledge ─ Tools ─ Intelligence
RAG/FAQs   APIs     Scores/ranking/retention insights
Content    Booking/CRM/Payments
```

No es “un chat encima”. Orquestación aplica identidad, tenant, consentimiento, políticas, retrieval, tool allowlist, evaluación y handoff. El modelo nunca accede directamente a DB. Provider abstraction, registros minimizados y respuestas trazables. Primeros casos: receptionist, scoring de retención explicable y ranking de recomendaciones; su impacto es **HIPÓTESIS**.

## Puerta de validación

No avanzar por entusiasmo: evidencia del problema → solución manual → Customer Zero → uso → valor medible → piloto externo → disposición a pagar → adopción repetible. Registrar evidencia adversa y detener o reordenar si no se supera la puerta.
