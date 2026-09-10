# Planning model — Online School y Retreats

> **Separación de evidencia obligatoria.** En **ACTUAL**, suscriptores, clientes, pagos, ocupación, tickets y costes observados siguen **PENDIENTE**. El **BASE MODELADO** no rellena esos actuals: todos sus inputs son **HIPÓTESIS** y toda operación es **DERIVADO DE HIPÓTESIS**. Importes pre-tax, sin IVA, deuda ni retribución del promotor.

## SOMA Online School

### Inputs del BASE MODELADO — HIPÓTESIS

| Driver | Valor |
|---|---:|
| Lanzamiento | M07 |
| Suscriptores M07–M09 / M10–M12 / M13–M24 | 20 / 40 / 75 |
| Suscriptores años 3 / 4 / 5 | 120 / 180 / 250 |
| ARPU mensual | 19 € |
| Creator share | 35% de revenue |
| Payments | 3% de revenue |
| Plataforma, IA y soporte variables | 1,50 €/suscriptor/mes |
| Plataforma fija desde lanzamiento | 100 €/mes |

`MRR = suscriptores × ARPU`. `Contribution online = MRR − creator share − payments − variable por suscriptor − plataforma fija`.

En 24 meses resultan **20.520 € de revenue y 9.302,40 € de contribution — DERIVADO DE HIPÓTESIS**. Churn, CAC, LTV, conversión y retención observados permanecen **PENDIENTE** y no se inventan.

## SOMA Retreats

### Inputs del BASE MODELADO — HIPÓTESIS

| Driver | Valor |
|---|---:|
| Calendario M01–M24 | M12, M18 y M24 |
| Capacidad / ocupación | 16 plazas / 75% |
| Participantes por evento | 12 — DERIVADO DE HIPÓTESIS |
| Ticket | 650 € |
| Coste variable por participante | 390 € |
| Coste fijo por evento | 1.500 € |
| Frecuencia años 3 / 4 / 5 | 3 / 4 / 4 eventos |

Por evento: revenue **7.800 €**, costes **6.180 €** y contribution **1.620 € — DERIVADO DE HIPÓTESIS**. Break-even: **5,77 participantes o 36,06% de ocupación — DERIVADO DE HIPÓTESIS**. En 24 meses resultan **23.400 € de revenue y 4.860 € de contribution — DERIVADO DE HIPÓTESIS**.

## Efecto híbrido

El motor físico sigue visible por separado. Online y Retreats se suman mes a mes, con sus costes explícitos, al mismo puente de contribution y FCF. SOMA OS continúa como coste y su revenue SaaS externo permanece **0 € — HIPÓTESIS prudente**. El BASE MODELADO híbrido produce **504.498,93 € de revenue y 177.196,05 € de FCF acumulados en cinco años — DERIVADO DE HIPÓTESIS**; no es evidencia de viabilidad comercial.

## Puertas de validación

1. No sustituir `actual.* = null / PENDIENTE` por cifras planificadas.
2. Registrar pagos y cohortes verificables antes de tratar subscribers o ARPU como observados.
3. Cotizar proveedores y vender reservas antes de tratar economics de retreats como observados.
4. Recalibrar el SSOT y regenerar el dashboard; nunca editar sólo el JSON generado.
