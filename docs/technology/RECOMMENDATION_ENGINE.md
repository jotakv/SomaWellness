# Recommendation Engine

> **Estado del documento:** blueprint interno. Salvo decisiones de diseño expresamente marcadas, las propuestas comerciales, problemas, efectos y adopción son **HIPÓTESIS**; los datos no disponibles son **PENDIENTE**. No acredita demanda, clientes, ventas ni viabilidad.

## Primera versión

Rules + weighted ranking sobre objetivos, intereses, actividad, historial, horario, nivel, preferencias, facilitadores y disponibilidad. Output Top N de clases, experiencias, contenido, journeys o eventos, con explicación y filtros duros de disponibilidad/nivel/consentimiento.

`score = fitObjective + scheduleFit + preferenceFit + continuity - conflicts`; pesos **HIPÓTESIS** versionados. Registrar impresión, clic, booking, completion y rechazo sin inferir salud. Después de datos suficientes: embeddings, collaborative filtering, personalized ranking, behavioral similarity o sequence models; nunca llamarlos implementados antes de existir.

## Puerta de validación

No avanzar por entusiasmo: evidencia del problema → solución manual → Customer Zero → uso → valor medible → piloto externo → disposición a pagar → adopción repetible. Registrar evidencia adversa y detener o reordenar si no se supera la puerta.
