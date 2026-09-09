# SomaWellness — NOMBRE PROVISIONAL

Business plan, estudio de mercado, modelo financiero auditable y web estática para evaluar **un único estudio boutique lean** de yoga, meditación, mindfulness y movimiento consciente en Madrid. Las proyecciones son **PRE-TAX, HIPÓTESIS y NO GARANTIZADAS**.

## Estado y pregunta

Proyecto previo a due diligence. Dirección, renta contractual, actividad autorizada, licencia, aforo, demanda, profesores, marca y fiscalidad están pendientes. El repositorio pregunta si una sala de ocho plazas financieras puede sostenerse exclusivamente con clases y talleres.

> Las 8 plazas son una hipótesis financiera prudente y no constituyen el aforo legal del local. El aforo definitivo dependerá de superficie, distribución, evacuación, accesibilidad, ventilación y licencia.

## Arquitectura

- `index.html`: dashboard ejecutivo.
- `concepto.html`, `propuesta-valor.html`, `clientes.html`, `servicios-precios.html`: concepto y oferta.
- `estudio-mercado.html`, `fuentes.html`: investigación, vacíos y trazabilidad.
- `business-plan.html`, `viabilidad.html`: documento integral y gates.
- `modelo-economico.html`, `proyecciones.html`, `escenarios.html`, `metodologia.html`: calculadora, tablas, sensibilidades y fórmulas.
- `operaciones.html`, `profesores.html`, `marketing.html`, `roadmap.html`, `riesgos.html`: ejecución.
- `data/`: única fuente de verdad editable.
- `assets/js/financial-engine.js`: motor puro compartido por web y tests.
- `assets/css/style.css`: responsive, accesibilidad visual e impresión.
- `tests/`: regresión financiera y control de contenido público.

## Modelo

`data/business-model.json` centraliza sala, calendario, clases, talleres, costes, renta mensual, rampa, estacionalidad, capital y tiempo del promotor. `data/scenarios.json` contiene defensivo/base/objetivo. Los presupuestos viven en `data/startup-budget.json`. Nunca replique una cifra financiera en HTML si puede derivarse del motor.

Para cambiar dirección, superficie, capacidad o renta, edite `premises`. Para cambiar precio efectivo o reparto, edite `classes`/`workshops`. Para estacionalidad, cambie los 12 factores (1,00 por defecto). Para fuentes, añada registros completos y verificables a `data/sources.json`.

## Ejecutar

```bash
python -m http.server 8000
```

Abra <http://localhost:8000>. `fetch()` requiere servidor local; no abra los HTML mediante `file://`.

## Tests

```bash
npm test
npm run check:content
```

No hay dependencias de producción ni build. Node 20+ recomendado.

## Publicar en GitHub Pages

1. Suba la rama al repositorio remoto.
2. En **Settings → Pages**, seleccione **Deploy from a branch**.
3. Seleccione la rama deseada y carpeta `/ (root)`.
4. Espere el workflow de Pages y revise enlaces, calculadora y consola.

No se afirma disponibilidad de dominio ni protección de marca. No se versionan recursos binarios.
