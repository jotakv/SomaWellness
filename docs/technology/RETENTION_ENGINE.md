# Retention Engine

> **Estado del documento:** blueprint interno. Salvo decisiones de diseño expresamente marcadas, las propuestas comerciales, problemas, efectos y adopción son **HIPÓTESIS**; los datos no disponibles son **PENDIENTE**. No acredita demanda, clientes, ventas ni viabilidad.

## Fase 1: reglas, no machine learning

Signals HIPÓTESIS: frequency decline, inactivity, no-show, cancelled bookings, membership expiration/no renewal, post-trial inactivity y reduced engagement. Normalizar ventana y retornar `riskScore` 0–100, `reasonCodes`, timestamps y `recommendedActions`. Ejemplo ilustrativo, no actual: 74/100 por asistencia -42 %, 15 días inactivo y expiración en 8 días; acción sugerida, outreach de reactivación sujeto a consentimiento.

Toda razón debe ser explicable, revisable y no clínica. Medir falsos positivos, opt-out y resultado incremental. Solo con volumen/calidad suficientes evaluar churn prediction, survival analysis, gradient boosting, uplift modelling y next best action.

## Puerta de validación

No avanzar por entusiasmo: evidencia del problema → solución manual → Customer Zero → uso → valor medible → piloto externo → disposición a pagar → adopción repetible. Registrar evidencia adversa y detener o reordenar si no se supera la puerta.
