# Hipótesis económicas

> **Regla de evidencia.** Todas las cifras de este documento son **HIPÓTESIS**, salvo las operaciones matemáticas que se etiquetan **DERIVADO** y las fuentes internas expresamente **CONFIRMADO**. Una proyección no acredita demanda, ventas ni financiación. Importes antes de IVA, impuesto sobre beneficios, deuda y retribución del promotor, salvo indicación contraria.

| Driver | Valor | Estado | Fuente | Validación pendiente |
|---|---:|---|---|---|
| Centros | 1 | HIPÓTESIS | encargo / `business-model.json` | local operativo |
| Capacidad | 8 | HIPÓTESIS | idem | licencia y plano |
| Semanas/mes | 4,33 | ESTIMADO | conversión 52/12 | calendario real |
| Ticket/asistencia | 10,50 € | HIPÓTESIS | idem | pruebas de pago |
| Share profesor clase | 50% | HIPÓTESIS | idem | acuerdos/coste laboral |
| Taller: asistentes/ticket/share profesor | 6 / 22 € / 65% | HIPÓTESIS | idem | ventas y contratos |
| OPEX fijo | 450 €/mes | ESTIMADO | desglose `business-model.json` | facturas/ofertas |
| Renta completa | 300 €/mes | HIPÓTESIS | idem | contrato |
| Capital inicial | 5.000 € | HIPÓTESIS | presupuesto lean | acreditación |
| Estacionalidad/inflación | 0% | HIPÓTESIS | simplificación | históricos |
| SOMA OS base | 0 € | HIPÓTESIS prudente | tesis híbrida | clientes SaaS |

## Rampa
| Meses | Clases/sem. | Ocupación | Asistencia/clase | Talleres/mes | Renta/mes | Estado |
|---|---:|---:|---:|---:|---:|---|
| 1–3 | 8 | 35% | 2.8 | 2 | 0,00 € | HIPÓTESIS |
| 4–6 | 12 | 45% | 3.6 | 3 | 0,00 € | HIPÓTESIS |
| 7–9 | 16 | 55% | 4.4 | 4 | 75,00 € | HIPÓTESIS |
| 10–12 | 18 | 60% | 4.8 | 4 | 75,00 € | HIPÓTESIS |
| 13–24 | 18 | 60% | 4.8 | 4 | 150,00 € | HIPÓTESIS |

No hay evidencia de campo que valide la rampa: las iteraciones registran acceso incompleto y ejecución nula.

## Planning model comercial híbrido

Online School: lanzamiento M07, rampa 20 → 40 → 75 suscriptores durante los primeros 24 meses, ARPU 19 €, creator share 35%, payments 3%, coste variable 1,50 €/suscriptor y plataforma fija 100 €/mes — **HIPÓTESIS**. Retreats: eventos M12/M18/M24, 16 plazas, 75% de ocupación, ticket 650 €, coste variable 390 €/participante y fijo 1.500 €/evento — **HIPÓTESIS**. Los actuals de ambos motores siguen **PENDIENTE**. Desarrollo y fórmulas: [`14_ONLINE_RETREATS_PLANNING_MODEL.md`](14_ONLINE_RETREATS_PLANNING_MODEL.md).
