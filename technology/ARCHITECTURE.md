# ARCHITECTURE — SOMA OS

Última actualización: 2026-08-19

## Principio

Arquitectura incremental. El objetivo del MVP no es demostrar sofisticación técnica, sino reducir trabajo operativo y generar datos fiables.

## Capas

1. **Experience** — web/app/portal y canales conversacionales.
2. **CRM & Operations** — leads, clientes, membresías, reservas y asistencia.
3. **Automation** — workflows, notificaciones, follow-up y reglas de retención.
4. **AI** — recepción asistida, clasificación, resumen, recomendaciones y scoring.
5. **Data** — modelo de datos, eventos, consentimientos, métricas y auditoría.
6. **Analytics** — dashboards de adquisición, ocupación, retención y unit economics.

## Stack

[PENDIENTE] Decidir entre:

- Power Platform/Dataverse como back-office inicial aprovechando experiencia del promotor;
- stack SaaS independiente desde el principio;
- enfoque híbrido que permita validar rápido y desacoplar después.

La decisión deberá ponderar coste, velocidad, lock-in, escalabilidad, experiencia existente y facilidad de comercialización B2B.

## IA

Primera etapa:

- RAG/knowledge base controlada para FAQs;
- function calling/herramientas para disponibilidad y reservas;
- scoring basado en reglas para retención/recomendación;
- handoff humano.

No utilizar modelos predictivos de churn sin volumen suficiente de datos.

## Seguridad y privacidad

- minimizar datos personales;
- evitar datos de salud especiales salvo necesidad expresa;
- consentimiento y base jurídica documentados;
- roles y least privilege;
- logs de acciones automatizadas;
- separación entre datos operativos y prompts/telemetría cuando sea posible.
