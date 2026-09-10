# HIPÓTESIS DEL MODELO FINANCIERO

Última actualización: 2026-08-20

Este documento traduce `docs/ASSUMPTIONS.md` al modelo financiero. Ninguna cifra marcada como hipótesis debe presentarse ante banco o inversores como dato confirmado.

La separación entre vista verificable y vista hipotética, junto con la conciliación reproducible, se mantiene en `financial-model/FUENTES_Y_USOS.md`.

## Fuentes de financiación iniciales

| Concepto | Valor | Estado |
|---|---:|---|
| Recursos propios | 12.000 € | [HIPÓTESIS] HYP-002 |
| Financiación bancaria | 60.000–70.000 € | [HIPÓTESIS] HYP-004 |
| **Total fuentes** | **100.000–110.000 €** | [CÁLCULO SOBRE HIPÓTESIS] |

## Usos principales

| Concepto | Valor | Estado |
|---|---:|---|
| Precio local | 100.000 € | [HIPÓTESIS] HYP-003 |
| Impuestos y gastos de adquisición | [PENDIENTE] | HYP-006 |
| Reforma / adecuación | [PENDIENTE] | HYP-007 |
| Equipamiento y mobiliario | [PENDIENTE] | HYP-007 |
| Tecnología | [PENDIENTE] | HYP-007 |
| Marketing lanzamiento | [PENDIENTE] | Por definir |
| Fondo de maniobra | [PENDIENTE] | HYP-008 |

Con los valores existentes, los usos son `100.000 € + U`, donde `U` agrega todas las partidas aún pendientes. No existe base para convertir `U` en cero.

## Principio de solvencia bancaria

En el escenario bancario base:

**Ingresos SOMA OS = 0 €**.

La deuda deberá ser soportable únicamente con las líneas físicas: memberships, bonos, drop-in, talleres, eventos, programas presenciales y alquiler puntual de sala.

## Escenarios

### Conservador

- Menor ocupación.
- Lanzamiento más lento.
- Costes prudentes.
- Sin ingresos tecnológicos.
- Contratación diferida.

### Base

- Ocupación progresiva realista.
- Mix de memberships + bonos + talleres.
- Sin ingresos SOMA OS para análisis bancario.

### Expansivo

- Mayor utilización del espacio.
- Más talleres/eventos.
- Puede incluir escenario separado `Physical + Digital Upside` con ingresos SOMA OS, pero nunca para justificar la deuda base.

