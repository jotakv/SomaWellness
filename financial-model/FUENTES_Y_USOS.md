# FUENTES Y USOS — CONTROL REPRODUCIBLE

Última actualización: 2026-08-20

## Regla

`inversión + puesta en marcha + circulante inicial = fondos propios + deuda + otras fuentes acreditadas`

Este archivo separa cifras verificadas de hipótesis. La financiación no se registra como ingreso operativo y ninguna fuente pendiente se trata como efectivo disponible.

## Vista A — sólo cifras verificadas

A fecha de esta versión no existe en el repositorio una cifra de fuente o uso acreditada con resolución, extracto, oferta, escritura o presupuesto. Por tanto, la vista verificable no permite todavía reconciliar el proyecto.

| Bloque | Importe verificado | Documento soporte |
|---|---:|---|
| Total fuentes | [PENDIENTE] | extracto + oferta financiera |
| Total usos | [PENDIENTE] | local + presupuestos + impuestos/gastos |
| Diferencia | No calculable | faltan ambos totales verificables |

## Vista B — cálculo sobre hipótesis existentes

| Fuente | Importe | Estado |
|---|---:|---|
| Recursos propios | 12.000 € | [HIPÓTESIS] HYP-002 |
| Deuda | 60.000–70.000 € | [HIPÓTESIS] HYP-004 |
| **Total fuentes F** | **72.000–82.000 €** | [CÁLCULO] 12.000 + rango de deuda |

| Uso | Importe | Estado |
|---|---:|---|
| Precio del local | 100.000 € | [HIPÓTESIS] HYP-003 |
| Otros usos de adquisición, apertura y circulante | `U` | [PENDIENTE] HYP-006, HYP-007, HYP-008 y partidas sin presupuesto |
| **Total usos** | **100.000 € + U** | [CÁLCULO SOBRE HIPÓTESIS] |

### Resultado reproducible actual

- Margen antes de otros usos: `F − 100.000 € = 0–10.000 €`.
- Necesidad adicional para un valor concreto de `F`: `máx(0, 100.000 € + U − F)`.
- Con los datos actuales no puede calcularse la necesidad final porque `U` y la financiación real siguen pendientes.

[CRITERIO DE RIESGO] La operación no está financiada de forma demostrable. Incluso el extremo alto del rango deja como máximo 10.000 € antes de impuestos, compra, adecuación, equipamiento y circulante.

## Datos necesarios para cerrar la conciliación

1. fondos propios acreditados y realmente disponibles;
2. oferta indicativa o aprobada de financiación;
3. precio y tratamiento fiscal del local concreto;
4. presupuestos de gastos de adquisición, obra, licencias, equipos y apertura;
5. fondo de maniobra derivado del cash-flow mensual.


