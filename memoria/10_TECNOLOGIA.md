# 10 — Tecnología

SOMA OS constituye la vertical tecnológica escalable del proyecto y se desarrollará sobre necesidades observadas en SOMA LAB.

## MVP tecnológico

- CRM Wellness;
- reservas y aforo;
- AI Receptionist;
- Retention AI basada inicialmente en reglas/scoring explicable;
- Recommendation Engine.

## Enfoque

Se priorizará una arquitectura incremental. No se construirá una plataforma sobredimensionada antes de disponer de usuarios, procesos reales y señales de demanda.

## Stack

[PENDIENTE] decisión entre Power Platform/Dataverse, stack SaaS independiente o enfoque híbrido.

## Seguridad y datos

- minimización de datos;
- consentimiento y base jurídica;
- control de acceso;
- trazabilidad de automatizaciones;
- evitar datos de salud especiales salvo necesidad real y cumplimiento reforzado.

## Consolidación del blueprint interno

La documentación tecnológica define, sin convertirlo en producto validado: dominios de identidad/tenant, CRM, catálogo, agenda/reserva, asistencia, billing y consentimientos; eventos operativos; aislamiento multi-tenant; API; privacidad y seguridad de IA; recepción asistida; scoring de retención explicable y recomendaciones inicialmente basadas en reglas. **Estado: DISEÑO/HIPÓTESIS**, salvo la existencia documental del blueprint — **CONFIRMADO**.

La secuencia recomendada es sistema operativo de Customer Zero → instrumentación y métricas → pilotos B2B → producto multi-tenant. Marketplace, creadores, comunidad, journeys y retiros son opciones de expansión, no alcance del MVP ni ingreso base. Los costes de hosting, IA, soporte y desarrollo están **PENDIENTE** y no aparecen ocultos dentro del FCF de SOMA LAB.
