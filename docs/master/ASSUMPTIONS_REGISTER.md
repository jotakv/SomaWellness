# Registro de supuestos

No se borrarán supuestos silenciosamente. Un cambio futuro conservará el registro anterior y documentará su resolución.

| ID | Área | Supuesto | Sensibilidad | Estado | Iteración / resolución |
|---|---|---|---|---|---|
| A-0001 | Proceso | El plan se construirá en 12 iteraciones previstas | Baja | HIPÓTESIS | 00; referencia de progreso, no calendario definitivo |
| A-0002 | Concepto | El concepto y la tesis inicial se definirían en iteración 01 | Alta | CONFIRMADO | Resuelto en 01 mediante `data/concept.json` |
| A-0003 | Clientes | Hay adultos en Madrid que valorarán y pagarán una práctica presencial, cercana y reducida | Alta | HIPÓTESIS | 01; contrastar con investigación y prueba de comportamiento |
| A-0004 | Oferta | Una selección cuerpo-mente reduce la fragmentación percibida frente a opciones separadas | Alta | HIPÓTESIS | 01; contrastar comprensión, preferencia y uso cruzado |
| A-0005 | Canales | Descubrimiento digital, recomendación y reserva directa generan captación y repetición medibles | Alta | HIPÓTESIS | 01; contrastar embudo y cohortes |

Los detalles de prueba y refutación de la tesis se mantienen en `data/concept.json`, evitando duplicar formulaciones estructuradas.
| A-0006 | Segmentos | S-01, S-02 y S-03 son unidades útiles para reclutar y comparar problemas | Alta | HIPÓTESIS | 02; contrastar con episodios y conducta, no demografía asumida |
| A-0007 | Investigación | Episodios recientes y acciones observables reducirán el sesgo frente a intención declarada | Media | HIPÓTESIS | 02; protocolo adoptado, aplicación PENDIENTE |
| A-0008 | Mensaje | Para S-01, orientación o simplicidad; para S-02, continuidad o complementariedad serán comprensibles y relevantes | Alta | HIPÓTESIS | 03; contrastar mediante P-02, sin inferir compra |
| A-0009 | Método | El orden alternado, la codificación previa y denominadores completos reducirán sesgos para orientar la siguiente prueba | Media | HIPÓTESIS | 03; utilidad del protocolo PENDIENTE de ejecución |
| A-0010 | Acceso de campo | Será posible obtener acceso ético y acreditable por canales preregistrados | Alta | PENDIENTE | 04; no disponible en este entorno, reevaluar antes de invitar |
| A-0011 | Aprendizaje | P-01/P-02 producirán evidencia para orientar problema y mensaje | Alta | PENDIENTE | 04; no evaluable sin campo, no se revisaron mensajes |
| A-0012 | Operación de campo | Completar AC-01–AC-04 permitirá iniciar una ejecución ética y trazable de 04.1 | Alta | HIPÓTESIS | 05; instrumentos preparados, acceso real PENDIENTE |

## Hipótesis tecnológicas — apertura 2026-09-10

| ID | Área | Hipótesis | Sensibilidad | Estado | Prueba siguiente |
|---|---|---|---|---|---|
| HYP-TECH-001 | B2B | Estudios externos tienen dolor operativo suficiente para pagar SOMA OS | Alta | HIPÓTESIS | problem discovery externo |
| HYP-TECH-002 | AI | AI Receptionist reduce carga administrativa | Alta | HIPÓTESIS | baseline y piloto controlado |
| HYP-TECH-003 | Learning | LAB aporta discovery transferible a terceros | Alta | HIPÓTESIS | comparar workflow externo |
| HYP-TECH-004 | B2C | Usuarios valoran Journeys personalizados | Alta | HIPÓTESIS | concierge manual y repetición |
| HYP-TECH-005 | Creator | Creators quieren distribuir contenido mediante SOMA | Alta | HIPÓTESIS | entrevistas y publicación manual |
| HYP-TECH-006 | Marketplace | Existe potencial de marketplace de experiencias | Alta | HIPÓTESIS | concierge de oferta/demanda |
| HYP-TECH-007 | Arquitectura | Modular monolith resulta adecuado al inicio | Media | HIPÓTESIS | spike y ADR tras MVP |
| HYP-TECH-008 | Seguridad | Aislamiento por organization_id satisface primera etapa | Alta | HIPÓTESIS | threat model y tests |
| HYP-TECH-009 | SaaS | CRM + booking constituyen un wedge útil | Alta | HIPÓTESIS | workflow y design partners |
| HYP-TECH-010 | AI | Orquestación aporta valor más allá de interfaces convencionales | Alta | HIPÓTESIS | A/B o comparación operacional |
| HYP-TECH-011 | Content | Contenido aumenta adquisición o continuidad | Alta | HIPÓTESIS | cohortes |
| HYP-TECH-012 | Community | Grafo de experiencias aumenta participación | Alta | HIPÓTESIS | cohortes y conexiones recíprocas |
| HYP-TECH-013 | Retreats | Organizadores pagarían SaaS + fee | Alta | HIPÓTESIS | discovery posterior |
| HYP-TECH-014 | Multi-sided | B2C, B2B y B2Creator generan refuerzo mutuo | Alta | HIPÓTESIS | medir cada enlace |
| HYP-TECH-015 | Pricing | Ranges 69–349 €/mes sirven para test de pricing | Alta | HIPÓTESIS | willingness-to-pay conductual |
| HYP-TECH-016 | Scale | Digital puede crecer sin recursos físicos proporcionales | Alta | HIPÓTESIS | ratio digital/location/staff |
| HYP-TECH-017 | Retention | Scoring explicable permite acción incremental | Alta | HIPÓTESIS | baseline y holdout |
| HYP-TECH-018 | Recommendation | Ranking explicable mejora selección/completion | Alta | HIPÓTESIS | comparación con catálogo simple |

## Iteración modelo económico web — 2026-09-10

| ID | Supuesto | Estado | Regla de salida |
|---|---|---|---|
| HYP-WEB-001 | Online School aporta 0 € en BASE 24m mientras subscribers, ARPU y costes estén pendientes. | HIPÓTESIS prudente | Pago verificable y unit economics completos. |
| HYP-WEB-002 | Retreats aporta 0 € en BASE; julio/agosto son ventanas conceptuales, no eventos confirmados. | HIPÓTESIS prudente | Venue, ticket, capacidad, costes y reservas verificables. |
| HYP-WEB-003 | 20 €/mes ya presupuestados como software se muestran como cash cost SOMA OS, sin duplicarlos en central OPEX. | HIPÓTESIS | Facturas e inventario tecnológico. |
