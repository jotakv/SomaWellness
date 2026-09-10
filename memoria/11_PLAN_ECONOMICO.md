# 11 — Plan económico

> Todas las entradas del caso lean son **HIPÓTESIS** o **ESTIMACIONES**; los resultados aritméticos son **DERIVADO**. Una proyección no acredita ventas, demanda, contratos ni financiación. Véase el modelo íntegro y trazable en [`economia/README.md`](economia/README.md).

## Respuesta ejecutiva: caso lean principal

| Pregunta | Respuesta modelada | Estado |
|---|---:|---|
| Capital mínimo de lanzamiento | 5.000 € | DERIVADO de ESTIMACIONES |
| Facturación estabilizada | 4.456,18 €/mes | DERIVADO |
| Pago a facilitadores | 2.307,29 €/mes | DERIVADO |
| Margen de contribución | 2.148,89 €/mes (48,22%) | DERIVADO |
| Estructura fija, incluida renta completa | 750 €/mes | DERIVADO |
| EBITDA / FCF simplificado | 1.398,89 €/mes | DERIVADO |
| Break-even | 17,27% de ocupación | DERIVADO |
| Payback | mes 8,01 | DERIVADO |
| FCF acumulado a M24 | 29.705,58 € | DERIVADO |
| FCF acumulado a 5 años | 80.965,55 € | DERIVADO |
| SOMA OS en caso base | 0 € | HIPÓTESIS prudente |

## Drivers y fórmula

Un centro, ocho plazas, 4,33 semanas/mes, ticket efectivo de 10,50 €, share del profesor del 50%, cuatro talleres mensuales de seis asistentes a 22 € con share del 65%, y 450 € de OPEX fijo son **HIPÓTESIS/ESTIMACIONES**.

`ventas clases = clases/semana × 4,33 × capacidad × ocupación × ticket`

En régimen: `18 × 4,33 × 8 × 60% × 10,50 = 3.928,18 €`. Talleres: `4 × 6 × 22 = 528 €`. Tras facilitadores quedan 2.148,89 €; después de OPEX y 300 € de renta, 1.398,89 € — todo **DERIVADO**.

## Inversión, caja y cautelas

Los 5.000 € se distribuyen en 2.000 € de equipamiento, 600 € de fianza, 1.000 € de circulante, 800 € técnico/licencias y 600 € de colchón — **ESTIMADO**. Este caso excluye compra inmobiliaria, deuda, impuestos, IVA, obra mayor y retribución del promotor. El caso histórico de compra por 100.000 € — **HIPÓTESIS**— es alternativo e incompatible con el lean, y permanece **PENDIENTE** de due diligence y financiación.

El FCF se aproxima al EBITDA porque no se modelan impuestos, deuda, variación de circulante ni CAPEX de mantenimiento. Con coste sombra del promotor de 600 €/mes — **HIPÓTESIS**, el resultado económico estabilizado baja a 798,89 € — **DERIVADO**.

## Proyección y sensibilidad

La rampa mensual completa está en [`economia/06_PROYECCION_24_MESES.md`](economia/06_PROYECCION_24_MESES.md) y los cinco años en [`economia/07_PROYECCION_5_ANOS.md`](economia/07_PROYECCION_5_ANOS.md). El resultado es especialmente sensible a ocupación, ticket y clases: +1 punto de ocupación aporta 32,73 €/mes, +1 clase semanal 109,12 €/mes y +1 € de ticket 187,06 €/mes — **DERIVADO**, ceteris paribus.

## Physical vs Digital/SaaS

SOMA LAB se calcula sin ingresos digitales. SOMA OS tiene 0 clientes, 0 € MRR y 0 € ARR en base — **HIPÓTESIS prudente**. Sin actuals de ARPA, churn, CAC y coste variable no se calcula LTV ni se atribuye valor. Véase [`economia/12_DIGITAL_SAAS_ECONOMICS.md`](economia/12_DIGITAL_SAAS_ECONOMICS.md).

## Condiciones antes de decidir

Continúan **PENDIENTE**: local/licencia y aforo, renta contractual, presupuestos, fiscalidad, comisiones, acuerdos laborales/mercantiles, evidencia de pago, ocupación y condiciones de financiación. La viabilidad matemática no es viabilidad demostrada.

## Planning model de Online School y Retreats

Sin modificar la evidencia **ACTUAL**, que continúa **PENDIENTE**, el BASE MODELADO incorpora desde M07 una rampa online y tres retreats durante los primeros 24 meses. El resultado híbrido suma costes variables y fijos de cada motor, mantiene SOMA OS con 0 € de revenue SaaS y alcanza 504.498,93 € de revenue y 177.196,05 € de FCF en cinco años — **DERIVADO DE HIPÓTESIS**, no forecast garantizado. Inputs, fórmulas, break-even y puertas de validación: [`economia/14_ONLINE_RETREATS_PLANNING_MODEL.md`](economia/14_ONLINE_RETREATS_PLANNING_MODEL.md).
