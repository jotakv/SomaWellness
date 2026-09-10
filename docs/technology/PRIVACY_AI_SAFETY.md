# Privacy, AI safety y límites wellness

> **Estado del documento:** blueprint interno. Salvo decisiones de diseño expresamente marcadas, las propuestas comerciales, problemas, efectos y adopción son **HIPÓTESIS**; los datos no disponibles son **PENDIENTE**. No acredita demanda, clientes, ventas ni viabilidad.

## Minimización

Evitar almacenar innecesariamente enfermedades, diagnósticos, historial médico, datos psicológicos sensibles y biometría. Preferir preferencias, objetivos no clínicos, asistencia, bookings, contenido, disponibilidad y conducta dentro de SOMA. SOMA es wellness: no medical device, diagnóstico ni terapia; no formula claims médicos.

Controles conceptuales: purpose limitation, consentimiento granular/revocable, RBAC y least privilege, auditoría, exportación, borrado y retention policy. Human Profile es controlado por usuario. AI: aislamiento por tenant, provenance, evaluación, prompt-injection defense, no entrenamiento secundario por defecto, handoff y respuesta segura ante consultas clínicas. DPIA y asesoramiento jurídico son PENDIENTE antes de producción.

## Puerta de validación

No avanzar por entusiasmo: evidencia del problema → solución manual → Customer Zero → uso → valor medible → piloto externo → disposición a pagar → adopción repetible. Registrar evidencia adversa y detener o reordenar si no se supera la puerta.
