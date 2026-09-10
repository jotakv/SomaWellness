# SomaWellness — Metodología incremental para construir el Plan de Empresa

## 0. Propósito

Este documento define una metodología para construir el plan de empresa de **SomaWellness** de forma incremental, versionada y auditable, plasmándolo directamente en una web estática.

La idea no es escribir todo el business plan en un único prompt. Cada iteración debe:

1. leer el estado actual del repositorio;
2. trabajar solo una parte concreta del plan;
3. actualizar datos, evidencia, narrativa, cálculos y HTML relacionados;
4. ejecutar validaciones;
5. registrar qué ha cambiado;
6. registrar qué sigue pendiente;
7. generar automáticamente el **prompt de la siguiente iteración**.

El repositorio debe evolucionar desde un conjunto de hipótesis hasta un plan de empresa sustentado por evidencia.

---

# 1. Principio general

El plan de empresa debe funcionar como un sistema compuesto por:

- hechos confirmados;
- datos derivados;
- estimaciones;
- hipótesis;
- pendientes;
- fuentes;
- decisiones;
- modelo financiero;
- tests;
- páginas HTML;
- histórico de iteraciones.

La regla principal es:

> Cada iteración debe dejar el repositorio funcional, coherente y publicable aunque el plan todavía no esté terminado.

---

# 2. Alcance del proyecto

SomaWellness se analiza como un negocio **100 % wellness**.

No introducir:

- Amazon;
- Catcher;
- última milla;
- paquetes;
- lockers;
- microhubs;
- reparto;
- delivery;
- ingresos logísticos.

El objetivo final es responder:

> ¿Puede un único estudio boutique SomaWellness, operado de forma lean en Madrid, convertirse en un negocio sostenible únicamente mediante clases, talleres y colaboración con profesionales wellness?

---

# 3. Arquitectura recomendada

```text
/
├── index.html
├── concepto.html
├── estudio-mercado.html
├── competencia.html
├── clientes.html
├── propuesta-valor.html
├── servicios-precios.html
├── profesores.html
├── local-licencias.html
├── operaciones.html
├── marketing.html
├── ventas.html
├── modelo-economico.html
├── proyecciones.html
├── escenarios.html
├── riesgos.html
├── roadmap.html
├── viabilidad.html
├── business-plan.html
├── metodologia.html
├── fuentes.html
│
├── assets/
│   ├── css/
│   └── js/
│
├── data/
│   ├── project.json
│   ├── assumptions.json
│   ├── evidence-status.json
│   ├── business-model.json
│   ├── startup-budget.json
│   ├── market-research.json
│   ├── competitors.json
│   ├── customer-segments.json
│   ├── pricing.json
│   ├── operations.json
│   ├── marketing.json
│   ├── scenarios.json
│   ├── risk-register.json
│   ├── roadmap.json
│   ├── sources.json
│   └── decisions.json
│
├── docs/
│   ├── master/
│   │   ├── PROJECT_CONTEXT.md
│   │   ├── BUSINESS_PLAN_OUTLINE.md
│   │   ├── DECISION_LOG.md
│   │   ├── ASSUMPTIONS_REGISTER.md
│   │   ├── EVIDENCE_REGISTER.md
│   │   └── OPEN_QUESTIONS.md
│   │
│   └── iterations/
│       ├── 00-bootstrap/
│       ├── 01-concept/
│       ├── 02-market/
│       └── ...
│
├── prompts/
│   ├── CURRENT_PROMPT.md
│   ├── NEXT_PROMPT.md
│   └── archive/
│
├── tests/
├── CHANGELOG.md
├── README.md
└── package.json
```

---

# 4. Fuente única de verdad

No hardcodear las mismas cifras en varios HTML.

La jerarquía debe ser:

```text
FUENTES
↓
INPUTS
↓
MODELO
↓
RESULTADOS
↓
NARRATIVA
↓
HTML
```

Nunca:

```text
HTML
↓
número escrito manualmente
```

Toda cifra financiera repetida debe proceder del mismo motor.

---

# 5. Estados de evidencia

Toda afirmación relevante debe tener uno de estos estados:

## CONFIRMADO

Existe evidencia sólida.

## DERIVADO

Resultado matemático calculado a partir de inputs.

## ESTIMADO

Aproximación razonable todavía no confirmada.

## HIPÓTESIS

Supuesto elegido para modelizar.

## PENDIENTE

Todavía no existe evidencia suficiente.

---

# 6. Archivos maestros

## PROJECT_CONTEXT.md

Debe contener solo contexto estable:

- qué es SomaWellness;
- alcance;
- un único estudio;
- Madrid;
- modelo lean;
- actividades;
- exclusiones;
- filosofía de datos;
- modelo de profesores;
- reglas financieras.

## ASSUMPTIONS_REGISTER.md

Ejemplo:

| ID | Área | Hipótesis | Valor | Unidad | Sensibilidad | Estado |
|---|---|---|---:|---|---|---|
| A001 | Capacidad | Plazas financieras | 8 | alumnos | Alta | HIPÓTESIS |
| A002 | Ticket | Ingreso efectivo | 10,50 | €/asistencia | Alta | HIPÓTESIS |

Nunca borrar silenciosamente una hipótesis. Si cambia, marcarla como sustituida.

## EVIDENCE_REGISTER.md

| ID | Tema | Dato | Fuente | Fecha | Calidad | Estado |
|---|---|---|---|---|---|---|

## DECISION_LOG.md

Registrar:

- decisión;
- fecha;
- evidencia;
- alternativas;
- motivo;
- condición de revisión.

## OPEN_QUESTIONS.md

Clasificar:

- P0 — puede invalidar el proyecto;
- P1 — puede alterar materialmente la economía;
- P2 — mejora precisión;
- P3 — optimización.

---

# 7. Contrato obligatorio de cada iteración

Cada prompt debe exigir:

## Antes de modificar

Leer:

```text
README.md
docs/master/PROJECT_CONTEXT.md
docs/master/BUSINESS_PLAN_OUTLINE.md
docs/master/DECISION_LOG.md
docs/master/ASSUMPTIONS_REGISTER.md
docs/master/EVIDENCE_REGISTER.md
docs/master/OPEN_QUESTIONS.md
prompts/CURRENT_PROMPT.md
data/evidence-status.json
```

y el resultado de la iteración anterior.

## Durante la iteración

- conservar contenido válido;
- no reconstruir desde cero;
- actualizar primero los datos;
- después motores;
- después HTML;
- clasificar evidencia;
- registrar decisiones;
- añadir tests.

## Al terminar

Crear:

```text
docs/iterations/NN-slug/
├── PROMPT.md
├── RESULT.md
├── CHANGES.md
├── VALIDATION.md
├── OPEN_QUESTIONS.md
└── NEXT_PROMPT.md
```

Y copiar:

```text
docs/iterations/NN-slug/NEXT_PROMPT.md
```

a:

```text
prompts/NEXT_PROMPT.md
```

---

# 8. Formato de RESULT.md

```markdown
# Resultado iteración NN — Nombre

## Objetivo
...

## Resultado
...

## Evidencia añadida
...

## Hipótesis añadidas o modificadas
...

## Decisiones tomadas
...

## Archivos creados
...

## Archivos modificados
...

## Métricas afectadas
...

## Tests ejecutados
...

## Pendientes
...

## Riesgos nuevos
...

## Estado
COMPLETA / PARCIAL / BLOQUEADA

## Recomendación siguiente
...
```

---

# 9. Formato de NEXT_PROMPT.md

```markdown
# Iteración NN+1 — Nombre

Trabaja sobre el repositorio SomaWellness existente.

NO reconstruyas el proyecto desde cero.

## Contexto obligatorio

Lee:

- README.md
- docs/master/PROJECT_CONTEXT.md
- docs/master/DECISION_LOG.md
- docs/master/ASSUMPTIONS_REGISTER.md
- docs/master/EVIDENCE_REGISTER.md
- docs/master/OPEN_QUESTIONS.md
- resultado de la iteración anterior
- data/evidence-status.json

## Objetivo

...

## Inputs confirmados

...

## Hipótesis permitidas

...

## Pendientes que NO debes inventar

...

## Trabajo requerido

1. ...
2. ...
3. ...

## Datos a actualizar

...

## HTML a actualizar

...

## Fuentes a investigar

...

## Tests obligatorios

...

## Criterios de aceptación

...

## Entregables

Genera:

- RESULT.md
- CHANGES.md
- VALIDATION.md
- OPEN_QUESTIONS.md
- NEXT_PROMPT.md

Y copia NEXT_PROMPT.md a:

prompts/NEXT_PROMPT.md
```

---

# 10. Plan completo de iteraciones

## Iteración 00 — Bootstrap

Objetivo:

Crear la arquitectura técnica y documental.

Crear:

- estructura;
- navegación;
- CSS base;
- JSONs;
- archivos maestros;
- sistema de iteraciones;
- tests básicos;
- `prompts/NEXT_PROMPT.md`.

No realizar todavía estudio de mercado ni proyección final.

---

## Iteración 01 — Concepto y tesis

Pregunta:

> ¿Qué es exactamente SomaWellness?

Trabajar:

- misión;
- visión;
- problema;
- oportunidad;
- actividades;
- exclusiones;
- grupos reducidos;
- un único estudio;
- modelo lean;
- digital-first.

Actualizar:

- `index.html`;
- `concepto.html`;
- `business-plan.html`.

---

## Iteración 02 — Mercado macro

Pregunta:

> ¿Existe una categoría de mercado suficientemente activa?

Investigar:

- yoga;
- mindfulness;
- meditación;
- wellness;
- estudios boutique;
- Madrid/España;
- tendencias;
- gasto;
- hábitos.

Crear:

- `estudio-mercado.html`;
- `market-research.json`;
- `sources.json`.

No extrapolar cifras globales arbitrariamente.

---

## Iteración 03 — Mercado local

Pregunta:

> ¿Qué características debe tener la zona?

Analizar:

- densidad;
- población;
- renta;
- transporte;
- oficinas;
- radio caminable;
- competencia;
- coste.

Crear:

`LOCAL_SELECTION_SCORECARD`.

---

## Iteración 04 — Competencia

Pregunta:

> ¿Contra quién compite realmente SomaWellness?

Analizar 10–15 competidores cuando haya evidencia:

- precios;
- bonos;
- talleres;
- membresías;
- disciplinas;
- posicionamiento;
- ubicación;
- horarios.

Crear:

- `competencia.html`;
- `competitors.json`.

---

## Iteración 05 — Cliente

Pregunta:

> ¿Quién compraría y por qué?

Construir:

- segmentos;
- jobs-to-be-done;
- motivaciones;
- objeciones;
- horarios;
- frecuencia;
- disposición a pagar.

Crear plan de validación:

- entrevistas;
- encuesta;
- waitlist;
- landing.

---

## Iteración 06 — Propuesta de valor

Pregunta:

> ¿Por qué elegir SomaWellness?

Trabajar:

- diferenciadores;
- promesa;
- posicionamiento;
- grupos reducidos;
- multidisciplina;
- comunidad;
- experiencia.

Actualizar:

`propuesta-valor.html`.

---

## Iteración 07 — Servicios y pricing

Pregunta:

> ¿Qué venderemos y a qué precio?

Diseñar:

- prueba;
- clase suelta;
- bono 4;
- bono 8;
- talleres;
- promociones;
- membresía futura.

Separar:

- PVP;
- ingreso efectivo por asistencia.

Actualizar:

- `pricing.json`;
- `servicios-precios.html`.

---

## Iteración 08 — Profesores

Pregunta:

> ¿Cómo prestar el servicio con coste variable?

Analizar:

- autónomos;
- 50/50 clases;
- 65/35 talleres;
- profesor residente;
- alquiler horario;
- sustituciones;
- concentración;
- falso autónomo.

Actualizar:

`profesores.html`.

---

## Iteración 09 — Local y licencias

Pregunta:

> ¿Qué condiciones debe cumplir el local?

Analizar:

- actividad;
- licencia;
- declaración responsable;
- aforo;
- accesibilidad;
- evacuación;
- ventilación;
- aseo;
- ruido;
- seguro;
- AVS;
- fianza;
- bonificaciones.

Crear:

`local-licencias.html`.

---

## Iteración 10 — Operaciones

Pregunta:

> ¿Cuántas clases puede operar realmente el estudio?

Crear:

- horario;
- franjas;
- limpieza;
- turnaround;
- cancelaciones;
- reservas;
- no-show;
- apertura/cierre;
- sustituciones.

Actualizar:

`operaciones.html`.

---

## Iteración 11 — Marketing y funnel

Pregunta:

> ¿Cómo conseguimos los alumnos?

Modelar:

```text
impresión
→ visita
→ lead
→ trial
→ compra
→ bono
→ recompra
→ recurrente
```

Métricas:

- CAC;
- CPL;
- conversion;
- retención;
- churn;
- LTV.

Actualizar:

- `marketing.html`;
- `ventas.html`.

---

## Iteración 12 — CAPEX

Pregunta:

> ¿Cuánto capital hace falta para abrir?

Crear:

- LOW;
- BASE;
- HIGH.

Separar:

- equipamiento;
- fianza;
- técnico;
- licencia;
- circulante;
- colchón;
- adecuación.

Mantener inicialmente BASE ≈5.000 € solo como hipótesis hasta validación.

---

## Iteración 13 — OPEX

Pregunta:

> ¿Cuánto cuesta mantener abierto el estudio?

Analizar:

- electricidad;
- agua;
- internet;
- limpieza;
- seguro;
- gestoría;
- RETA;
- software;
- mantenimiento;
- alquiler;
- consumibles.

Separar:

- cash cost;
- founder time.

---

## Iteración 14 — Unit economics

Pregunta:

> ¿Cuánto aporta una clase, alumno y taller?

Implementar:

```text
studentsPerClass
monthlyAttendances
classRevenue
teacherPayment
classContribution
workshopRevenue
workshopContribution
fixedCosts
FCF
```

Crear motor y tests.

Actualizar:

`modelo-economico.html`.

---

## Iteración 15 — Break-even

Pregunta:

> ¿Cuál es el mínimo de actividad para no perder dinero?

Calcular:

- alumnos/clase;
- ocupación;
- clases/semana;
- revenue mínimo;
- sensibilidad ticket;
- sensibilidad alquiler.

Crear reglas operativas.

---

## Iteración 16 — Primeros 12 meses

Pregunta:

> ¿Cómo pasa SomaWellness de cero a estabilizado?

Referencia inicial:

- meses 1–3: 8 clases, 35 %;
- meses 4–6: 12 clases, 45 %;
- meses 7–9: 16 clases, 55 %;
- meses 10–12: 18 clases, 60 %.

Mostrar mes a mes:

- ingresos;
- profesores;
- margen;
- talleres;
- OPEX;
- alquiler;
- FCF;
- caja acumulada.

Actualizar:

`proyecciones.html`.

---

## Iteración 17 — Cinco años

Pregunta:

> ¿Sigue funcionando cuando desaparecen ventajas iniciales?

Proyectar años 1–5:

- revenue;
- variable costs;
- contribution;
- OPEX;
- alquiler;
- reposición;
- FCF;
- caja acumulada.

No introducir crecimientos automáticos sin evidencia.

---

## Iteración 18 — Escenarios

Pregunta:

> ¿Qué ocurre si los supuestos no se cumplen?

Crear:

- defensivo;
- base;
- objetivo;
- stress.

Sensibilidades:

- ocupación;
- ticket;
- clases;
- talleres;
- alquiler;
- OPEX;
- share profesor;
- capacidad.

Actualizar:

`escenarios.html`.

---

## Iteración 19 — Riesgos

Pregunta:

> ¿Qué puede invalidar la inversión aunque el Excel sea rentable?

Registrar:

- legal;
- técnico;
- comercial;
- profesores;
- demanda;
- reputación;
- financiero;
- fiscal;
- operaciones.

Actualizar:

`riesgos.html`.

---

## Iteración 20 — Roadmap y gates

Pregunta:

> ¿Qué tiene que ocurrir antes de invertir?

Crear fases:

1. due diligence;
2. mercado;
3. local;
4. profesores;
5. waitlist;
6. firma;
7. adecuación;
8. apertura;
9. 8 clases;
10. 12 clases;
11. 18 clases.

Definir:

- GO;
- REVIEW;
- NO-GO.

---

## Iteración 21 — Tesorería y runway

Pregunta:

> ¿Cuánta caja necesitamos realmente?

Analizar:

- capital inicial;
- caja mínima;
- circulante;
- contingencia;
- runway;
- meses malos;
- reposiciones.

---

## Iteración 22 — Business Plan integrado V1

Generar:

`business-plan.html`

con:

1. resumen ejecutivo;
2. promotor;
3. oportunidad;
4. concepto;
5. mercado;
6. cliente;
7. competencia;
8. propuesta;
9. servicios;
10. pricing;
11. profesores;
12. local;
13. operaciones;
14. tecnología;
15. marketing;
16. ventas;
17. CAPEX;
18. OPEX;
19. finanzas;
20. escenarios;
21. riesgos;
22. roadmap;
23. financiación;
24. conclusiones;
25. pendientes.

Consumir datos existentes; no duplicar cálculos.

---

## Iteración 23 — Auditoría de coherencia

Auditar:

- cifras repetidas;
- capacidad;
- ticket;
- clases;
- OPEX;
- CAPEX;
- alquiler;
- fórmulas;
- textos contradictorios.

Crear tests de consistencia.

---

## Iteración 24 — Auditoría de evidencia

Pregunta:

> ¿Qué afirmaciones siguen apoyándose en hipótesis débiles?

Clasificar evidencia:

- A: primaria/contractual;
- B: oficial;
- C: mercado observable;
- D: hipótesis.

Crear top 10 de validaciones pendientes.

---

## Iteración 25 — Experimentos

Pregunta:

> ¿Cómo convertimos hipótesis críticas en evidencia barata?

Diseñar:

- entrevistas;
- encuesta;
- landing;
- ads;
- waitlist;
- open day;
- preventa;
- contacto profesores;
- pricing test.

Cada experimento:

- hipótesis;
- coste;
- KPI;
- threshold;
- decisión.

---

## Iteración 26 — Incorporar evidencia real

Iteración repetible.

Inputs posibles:

- presupuestos;
- entrevistas;
- AVS;
- técnico;
- profesores;
- campañas;
- waitlist;
- pricing.

Sustituir hipótesis por evidencia sin borrar histórico.

---

## Iteración 27 — Viabilidad

Pregunta:

> ¿Con la evidencia actual debemos ejecutar el proyecto?

Posibles resultados:

- GO;
- GO CON CONDICIONES;
- ESPERAR / VALIDAR;
- NO-GO.

Actualizar:

`viabilidad.html`.

---

## Iteración 28 — Presentación para terceros

Crear vistas o estilos para:

- promotor;
- banco;
- AVS;
- posibles financiadores;
- profesor;
- posible socio/inversor.

Mismos datos; distinta narrativa.

---

## Iteración 29 — UX, responsive e impresión

Validar:

- desktop;
- tablet;
- móvil;
- accesibilidad;
- print;
- tablas;
- gráficos;
- navegación.

---

## Iteración 30 — Auditoría final

Crear:

```text
docs/FINAL_AUDIT.md
docs/FINAL_OPEN_QUESTIONS.md
docs/BUSINESS_PLAN_STATUS.md
```

Responder:

- qué sabemos;
- qué suponemos;
- qué está validado;
- qué falta;
- qué variable puede cambiar la decisión.

---

# 11. Iteraciones posteriores

El sistema debe continuar después de la V1:

```text
31-local-real
32-technical-report
33-professor-interviews
34-waitlist-results
35-real-budget
36-pricing-test
37-prelaunch
38-opening
39-month-1-actuals
40-month-3-review
...
```

El objetivo es evolucionar de:

**Business Plan**

a:

**Business Operating System**.

---

# 12. Definition of Done de cada iteración

Una iteración está terminada cuando:

- [ ] objetivo cumplido;
- [ ] datos actualizados;
- [ ] HTML actualizado;
- [ ] evidencia clasificada;
- [ ] fuentes registradas;
- [ ] hipótesis registradas;
- [ ] decisiones registradas;
- [ ] preguntas abiertas actualizadas;
- [ ] tests pasan;
- [ ] RESULT.md existe;
- [ ] VALIDATION.md existe;
- [ ] NEXT_PROMPT.md existe;
- [ ] `prompts/NEXT_PROMPT.md` actualizado.

---

# 13. Definition of Done del Business Plan V1

## Mercado

- [ ] mercado;
- [ ] competencia;
- [ ] pricing;
- [ ] cliente;
- [ ] SOM bottom-up.

## Producto

- [ ] servicios;
- [ ] propuesta;
- [ ] profesores;
- [ ] customer journey.

## Operación

- [ ] local;
- [ ] licencias;
- [ ] capacidad;
- [ ] horarios;
- [ ] procesos.

## Comercial

- [ ] funnel;
- [ ] marketing;
- [ ] ventas;
- [ ] KPIs;
- [ ] retención.

## Finanzas

- [ ] CAPEX;
- [ ] OPEX;
- [ ] unit economics;
- [ ] break-even;
- [ ] 12 meses;
- [ ] 5 años;
- [ ] escenarios;
- [ ] sensibilidad;
- [ ] runway;
- [ ] payback.

## Riesgos

- [ ] risk register;
- [ ] gates;
- [ ] mitigaciones;
- [ ] GO/NO-GO.

## Evidencia

- [ ] fuentes;
- [ ] assumptions;
- [ ] decisiones;
- [ ] pendientes.

## Presentación

- [ ] business-plan.html;
- [ ] dashboard;
- [ ] print;
- [ ] responsive.

---

# 14. Business Plan Maturity Score

Crear una puntuación de madurez 0–100.

No debe interpretarse como probabilidad de éxito.

| Área | Peso |
|---|---:|
| Mercado | 15 |
| Cliente | 10 |
| Competencia | 10 |
| Oferta/pricing | 10 |
| Operaciones | 10 |
| Local/legal | 10 |
| Profesores | 5 |
| Marketing | 10 |
| Finanzas | 15 |
| Riesgos | 5 |

Escala por área:

```text
0 = no estudiada
1 = estructura creada
2 = hipótesis
3 = evidencia parcial
4 = evidencia razonable
5 = validación fuerte
```

---

# 15. Regla “Next Best Action”

Al terminar cada iteración Codex debe elegir la siguiente acción considerando:

1. impacto sobre la decisión;
2. incertidumbre;
3. coste de obtener evidencia;
4. dependencias;
5. existencia de P0/P1.

Si aparece un bloqueo crítico, el próximo prompt debe resolverlo antes de seguir la secuencia normal.

---

# 16. Prompt maestro reutilizable

```markdown
Trabaja sobre el repositorio SomaWellness existente.

NO reconstruyas el proyecto desde cero.

Esta ejecución debe ser incremental.

## PASO 1 — CONTEXTO

Lee:

- README.md
- docs/master/PROJECT_CONTEXT.md
- docs/master/BUSINESS_PLAN_OUTLINE.md
- docs/master/DECISION_LOG.md
- docs/master/ASSUMPTIONS_REGISTER.md
- docs/master/EVIDENCE_REGISTER.md
- docs/master/OPEN_QUESTIONS.md
- prompts/CURRENT_PROMPT.md
- resultado de la iteración anterior

## PASO 2 — AUDITORÍA

Antes de modificar:

- identifica qué existe;
- detecta contradicciones;
- detecta P0/P1;
- revisa tests.

## PASO 3 — OBJETIVO

Ejecuta exclusivamente:

[OBJETIVO DE ESTA ITERACIÓN]

No avances innecesariamente a fases posteriores.

## PASO 4 — FUENTE DE VERDAD

Actualiza:

datos → motores → HTML.

Nunca al revés.

## PASO 5 — EVIDENCIA

Clasifica todo dato nuevo como:

CONFIRMADO
DERIVADO
ESTIMADO
HIPÓTESIS
PENDIENTE

## PASO 6 — TESTS

Ejecuta y amplía tests.

## PASO 7 — DOCUMENTACIÓN

Crea:

docs/iterations/NN-slug/PROMPT.md
docs/iterations/NN-slug/RESULT.md
docs/iterations/NN-slug/CHANGES.md
docs/iterations/NN-slug/VALIDATION.md
docs/iterations/NN-slug/OPEN_QUESTIONS.md

## PASO 8 — SIGUIENTE PROMPT

Genera:

docs/iterations/NN-slug/NEXT_PROMPT.md

y copia su contenido a:

prompts/NEXT_PROMPT.md

Debe quedar listo para pegar directamente en Codex.

## PASO 9 — CIERRE

Devuelve:

- resumen;
- archivos;
- evidencia;
- hipótesis;
- tests;
- riesgos;
- bloqueos;
- ruta de NEXT_PROMPT.md.
```

---

# 17. Prompt inicial — Iteración 00

```markdown
Quiero que empieces la construcción incremental del repositorio SomaWellness.

No intentes completar el business plan en esta primera ejecución.

Esta es la ITERACIÓN 00 — BOOTSTRAP.

## OBJETIVO

Crear la arquitectura técnica y documental que permitirá construir el plan de empresa iteración por iteración.

## CREA

- HTML mínimo navegable;
- assets;
- data;
- docs/master;
- docs/iterations;
- prompts;
- tests.

Crea:

docs/master/PROJECT_CONTEXT.md
docs/master/BUSINESS_PLAN_OUTLINE.md
docs/master/DECISION_LOG.md
docs/master/ASSUMPTIONS_REGISTER.md
docs/master/EVIDENCE_REGISTER.md
docs/master/OPEN_QUESTIONS.md

Crea:

prompts/CURRENT_PROMPT.md

con una copia de este prompt.

## ITERACIÓN

Crea:

docs/iterations/00-bootstrap/

con:

PROMPT.md
RESULT.md
CHANGES.md
VALIDATION.md
OPEN_QUESTIONS.md
NEXT_PROMPT.md

NEXT_PROMPT.md debe contener el prompt completo de:

ITERACIÓN 01 — CONCEPTO, ALCANCE Y TESIS.

Copia además su contenido a:

prompts/NEXT_PROMPT.md

## REGLA

No hagas todavía un estudio de mercado profundo, modelo financiero definitivo ni conclusión de viabilidad.

## ESTADOS

Implementa:

CONFIRMADO
DERIVADO
ESTIMADO
HIPÓTESIS
PENDIENTE

## WEB

Crea una página inicial funcional:

SomaWellness
Plan de Empresa en construcción

y un indicador del progreso/madurez del plan.

## TESTS

Añade como mínimo:

- validación JSON;
- navegación/rutas básicas;
- comprobación de existencia de NEXT_PROMPT.md.

## FINAL

No termines hasta que exista:

prompts/NEXT_PROMPT.md
```

---

# 18. Flujo de trabajo del promotor

```text
1. Ejecutar prompts/CURRENT_PROMPT.md
      ↓
2. Revisar RESULT.md
      ↓
3. Revisar OPEN_QUESTIONS.md
      ↓
4. Añadir información real disponible
      ↓
5. Abrir prompts/NEXT_PROMPT.md
      ↓
6. Ajustarlo si hace falta
      ↓
7. Ejecutar en Codex
      ↓
8. Repetir
```

El contexto se conserva en el repositorio; no es necesario explicar SomaWellness desde cero en cada prompt.

---

# 19. Filosofía final

La finalidad no es producir rápidamente un documento largo.

La finalidad es reducir incertidumbre de forma progresiva:

```text
HIPÓTESIS
↓
INVESTIGACIÓN
↓
EVIDENCIA
↓
MODELO
↓
DECISIÓN
↓
EXPERIMENTO
↓
NUEVA EVIDENCIA
↓
MODELO ACTUALIZADO
```

La pregunta más importante que el repositorio debe poder contestar siempre es:

> **¿Qué información nueva podría cambiar hoy la decisión de invertir en SomaWellness?**

Cuando el plan pueda responder a eso con fuentes, cálculos, evidencia y trazabilidad, estará cumpliendo su función.
