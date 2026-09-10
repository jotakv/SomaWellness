# Metodología del modelo económico

> **Regla de evidencia.** Todas las cifras de este documento son **HIPÓTESIS**, salvo las operaciones matemáticas que se etiquetan **DERIVADO** y las fuentes internas expresamente **CONFIRMADO**. Una proyección no acredita demanda, ventas ni financiación. Importes antes de IVA, impuesto sobre beneficios, deuda y retribución del promotor, salvo indicación contraria.

## Alcance y trazabilidad
Modelo driver-based de un único SOMA LAB en modalidad lean. Fuente numérica canónica: `data/business-model.json`; motor reproducible: `assets/js/financial-engine.js`; presupuesto: `data/startup-budget.json`. Se revisaron HTML, JSON, `docs/master`, tecnología, roadmaps, prompts y memoria. La fuente posterior y específica prevalece; una contradicción no resuelta queda visible.

## Fórmulas
- Asistencias/mes = clases/semana × 4,33 × capacidad × ocupación.
- Ventas clases = asistencias × ticket efectivo.
- Margen clases = ventas clases × (1 − share profesor).
- Ventas talleres = talleres × asistentes × ticket.
- Margen talleres = ventas talleres × (1 − share profesor).
- EBITDA operativo simplificado = margen total − OPEX fijo − renta.
- FCF simplificado = EBITDA, al no modelar impuestos, deuda, variación de circulante ni CAPEX posterior. Esta igualdad es una simplificación **HIPÓTESIS**, no una definición contable general.
- Caja final = capital inicial + FCF acumulado; payback cuando FCF acumulado recupera 5.000 €.

## Convenciones y controles
Redondeo a 2 decimales sólo en presentación; cálculo sin redondeos intermedios. Totales se recomputan desde drivers. Pre-tax. Sin estacionalidad, inflación, IVA, impago o comisiones de cobro (**PENDIENTE**). El coste sombra del promotor (40 h × 15 € = 600 €/mes — **HIPÓTESIS**) se presenta aparte para no confundir caja y remuneración económica.

## Reconciliación crítica
La memoria histórica plantea compra por 100.000 € — **HIPÓTESIS**; el caso solicitado lean parte de 5.000 € y renta promocional. Son casos incompatibles, no sumables. El modelo principal excluye compra, deuda y valor residual (0 € — **HIPÓTESIS**). La compra permanece como alternativa **PENDIENTE**.

## Mapa de consolidación y procedencia

| Fuentes internas revisadas | Tema sustantivo | Destino principal | Estado/límite | Reconciliación |
|---|---|---|---|---|
| `concepto.html`, `propuesta-valor.html`, `data/concept.json`, `data/value-proposition.json` | tesis, problema, oferta | memoria 02–03 | HIPÓTESIS; campo PENDIENTE | se eliminan navegación y repetición |
| `clientes.html`, `estudio-mercado.html`, `data/market-research.json` | segmentos, protocolo, mercado | memoria 04 | diseño CONFIRMADO; demanda PENDIENTE | ejecución nula no es evidencia negativa de demanda |
| `servicios-precios.html`, `marketing.html`, `profesores.html`, `operaciones.html` | catálogo, funnel, facilitadores, operación | memoria 05–09 | mayoritariamente HIPÓTESIS | formatos comerciales no se suman al ticket efectivo |
| `tecnologia.html`, `ecosistema.html`, `escalabilidad.html`, `data/*technology*`, `data/saas-model.json`, `docs/master`, `docs/technology`, `technology/` | SOMA OS y arquitectura híbrida | memoria 05 y 10; economía 12 | blueprint documentado; tracción PENDIENTE | SaaS = 0 € en base |
| `modelo-economico.html`, `escenarios.html`, `proyecciones.html`, `viabilidad.html`, `data/business-model.json`, `data/startup-budget.json`, `financial-model/` | drivers, CAPEX/OPEX, escenarios | memoria 08, 11–12; economía 00–13 | inputs HIPÓTESIS/ESTIMACIONES | motor recalcula; no se copian resultados HTML |
| `business-plan.html`, `index.html`, `fuentes.html`, `riesgos.html`, roadmaps y prompts | síntesis, fuentes, riesgos y secuencia | memoria completa, 13 y 15 | mezcla de estados | la fuente específica más reciente prevalece |

### Duplicidades y contradicciones retenidas

- Compra de local (100.000 €) frente a lanzamiento lean (5.000 € con renta): alternativas incompatibles; no se agregan.
- Renta 0/75/150 € de M1–24 frente a renta completa 300 €: carencia/promoción modelada frente a estado estabilizado; contrato **PENDIENTE**.
- SaaS como visión de crecimiento frente a ausencia de clientes: visión **HIPÓTESIS**; ingresos base 0 €.
- Oferta extensa frente a MVP: sólo la oferta limitada se considera operable inicialmente; licencias, demanda y cualificaciones siguen **PENDIENTE**.
