# Validación — Iteración 01

## Punto de partida

- `npm test`: **SUPERADO**, 8 pruebas, 0 fallos.
- `npm run check:content`: **SUPERADO**, 1 prueba, 0 fallos.

## Validación final

- `npm test`: **SUPERADO**, 11 pruebas, 0 fallos. Incluye sintaxis de los 12 JSON, rutas HTML internas, igualdad del siguiente prompt, vocabulario de estados, estructura contrastable de la tesis y declaración web de iteración/madurez.
- `npm run check:content`: **SUPERADO**, 1 prueba, 0 fallos.
- `node -e "const fs=require('fs'); for(const f of fs.readdirSync('data').filter(x=>x.endsWith('.json'))) JSON.parse(fs.readFileSync('data/'+f)); console.log('JSON válido:',fs.readdirSync('data').filter(x=>x.endsWith('.json')).length)"`: **SUPERADO**, 12 JSON válidos.
- `cmp -s prompts/NEXT_PROMPT.md docs/iterations/01-concepto-alcance-tesis/NEXT_PROMPT.md`: **SUPERADO**, archivos idénticos.
- `git diff --check`: **SUPERADO**, sin errores de espacios.

## Revisión visual y limitación del entorno

Se intentó capturar `concepto.html` mediante `npx --yes playwright install chromium` y Playwright. La descarga del navegador fue rechazada por el CDN con HTTP 403 (`Domain forbidden`), por lo que no fue posible generar la captura en este entorno. No se añadió ningún archivo binario. La presencia del contenido dinámico queda cubierta programáticamente y la página conserva HTML semántico antes de la carga de datos.
