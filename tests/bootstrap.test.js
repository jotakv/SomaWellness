import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const states = new Set(['CONFIRMADO', 'DERIVADO', 'ESTIMADO', 'HIPÓTESIS', 'PENDIENTE']);

async function filesBelow(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? filesBelow(target) : [target];
  }))).flat();
}

test('todos los archivos JSON contienen JSON válido', async () => {
  const files = (await filesBelow(path.join(root, 'data'))).filter(file => file.endsWith('.json'));
  assert.ok(files.length > 0);
  for (const file of files) {
    const contents = await readFile(file, 'utf8');
    assert.doesNotThrow(() => JSON.parse(contents), file);
  }
});

test('todas las rutas HTML internas básicas existen', async () => {
  const files = (await readdir(root)).filter(file => file.endsWith('.html'));
  assert.ok(files.includes('index.html') && files.includes('concepto.html'));
  for (const file of files) {
    const html = await readFile(path.join(root, file), 'utf8');
    const links = [...html.matchAll(/href="([^"]+)"/g)].map(match => match[1].split('#')[0]);
    for (const route of links.filter(link => link && !link.includes('://') && !link.includes('${') && !link.startsWith('mailto:'))) {
      await access(path.join(root, route));
    }
  }
});

test('NEXT_PROMPT existe, coincide con iteración 01 y anuncia iteración 02', async () => {
  const current = await readFile(path.join(root, 'prompts/NEXT_PROMPT.md'), 'utf8');
  const archived = await readFile(path.join(root, 'docs/iterations/01-concepto-alcance-tesis/NEXT_PROMPT.md'), 'utf8');
  assert.equal(current, archived);
  assert.match(current, /ITERACIÓN 02 — CLIENTES, PROBLEMA Y EVIDENCIA DE MERCADO INICIAL/);
});

test('el proyecto declara exactamente el vocabulario oficial', async () => {
  const project = JSON.parse(await readFile(path.join(root, 'data/project.json'), 'utf8'));
  assert.deepEqual(new Set(project.evidenceStates), states);
});

test('todos los campos status estructurados usan solo estados oficiales', async () => {
  const jsonFiles = (await filesBelow(path.join(root, 'data'))).filter(file => file.endsWith('.json'));
  const documents = await Promise.all(jsonFiles.map(async file => JSON.parse(await readFile(file, 'utf8'))));
  const found = [];
  const visit = value => {
    if (Array.isArray(value)) return value.forEach(visit);
    if (!value || typeof value !== 'object') return;
    for (const [key, child] of Object.entries(value)) {
      if (key === 'status') found.push(child);
      visit(child);
    }
  };
  documents.forEach(visit);
  assert.ok(found.length >= 25, 'Cada afirmación estructurada relevante debe declarar estado');
  for (const status of found) assert.ok(states.has(status), `Estado no oficial: ${status}`);
});

test('la tesis es contrastable y registra apoyo y refutación', async () => {
  const concept = JSON.parse(await readFile(path.join(root, 'data/concept.json'), 'utf8'));
  assert.ok(concept.thesis.length >= 3);
  for (const item of concept.thesis) {
    assert.equal(item.status, 'HIPÓTESIS');
    assert.ok(item.claim && item.supportEvidence && item.refuteEvidence);
  }
});

test('la web declara iteración 01 y madurez sin validación', async () => {
  const [home, concept] = await Promise.all([
    readFile(path.join(root, 'index.html'), 'utf8'),
    readFile(path.join(root, 'concepto.html'), 'utf8')
  ]);
  assert.match(home, /ITERACIÓN 01/);
  assert.match(home, /SIN VALIDACIÓN DE MERCADO/);
  assert.match(concept, /ITERACIÓN 01/);
  assert.match(concept, /TESIS INICIAL SIN VALIDAR/);
});
