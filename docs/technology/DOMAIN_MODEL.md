# Domain model

> **Estado del documento:** blueprint interno. Salvo decisiones de diseño expresamente marcadas, las propuestas comerciales, problemas, efectos y adopción son **HIPÓTESIS**; los datos no disponibles son **PENDIENTE**. No acredita demanda, clientes, ventas ni viabilidad.

## Bounded contexts conceptuales

Identity; Organization; Location; Customer; Lead; Creator; Facilitator; Activity; Experience; Session; Booking; Attendance; Membership; Journey; Content; Community; Marketplace; Retreat; Interaction; Recommendation; Retention; AI; Billing; Analytics; Consent; Audit.

## MVP SOMA OS

Entidades: Organization, Location, User, Lead, Customer, Membership, MembershipPlan, Facilitator, Activity, Session, Booking, Attendance, Interaction, Preference, Consent, Task, Campaign, Recommendation, RetentionSignal, AIConversation y Event. CRM y booking cubren actividades, horarios, aforo, cancelación, asistencia/no-show, facilitador, membership y bonos. Waiting list, recurring booking, rooms, multi-location y resource scheduling son roadmap. No implementar todos los contextos en MVP.

## Puerta de validación

No avanzar por entusiasmo: evidencia del problema → solución manual → Customer Zero → uso → valor medible → piloto externo → disposición a pagar → adopción repetible. Registrar evidencia adversa y detener o reordenar si no se supera la puerta.
