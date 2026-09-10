# DATA MODEL — SOMA OS

Última actualización: 2026-08-19

## Entidades MVP

### Lead
- id
- origen
- fecha alta
- interés
- estado
- consentimiento comunicaciones

### Cliente
- id
- datos de contacto mínimos
- fecha alta
- estado
- preferencias
- consentimientos

### Membresía
- id
- cliente
- tipo
- fecha inicio
- fecha fin
- estado

### Actividad
- id
- nombre
- categoría
- nivel
- duración
- requisitos/restricciones

### Sesión
- id
- actividad
- facilitador
- fecha/hora
- aforo
- estado

### Reserva
- id
- cliente
- sesión
- estado
- canal
- fecha reserva

### Asistencia
- reserva
- asistió/no-show/cancelación
- timestamp

### Facilitador
- id
- tipo de relación
- cualificaciones verificadas cuando proceda
- disponibilidad

### Interacción
- cliente/lead
- canal
- tipo
- resumen
- fecha
- resultado

### RetentionSignal
- cliente
- regla
- score
- explicación
- fecha
- acción recomendada

### Recommendation
- cliente
- actividad/sesión
- score
- razones
- fecha
- resultado

## Principios

- Minimización de datos.
- No almacenar datos de salud especiales salvo necesidad real, base jurídica y controles adecuados.
- Separar preferencias wellness de diagnósticos médicos.
- Consentimientos versionados.
- Auditoría de automatizaciones críticas.
