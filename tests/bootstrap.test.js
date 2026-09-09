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

test('CURRENT_PROMPT archiva íntegramente el encargo de iteración 03', async () => {
  const current = await readFile(path.join(root, 'prompts/CURRENT_PROMPT.md'), 'utf8');
  const archived = await readFile(path.join(root, 'docs/iterations/03-propuesta-valor-experimentos/PROMPT.md'), 'utf8');
  assert.equal(current, archived);
  assert.match(current, /ITERACIÓN 03 — PROPUESTA DE VALOR Y DISEÑO DE EXPERIMENTOS/);
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

test('la web conserva la tesis y declara evidencia de campo pendiente', async () => {
  const [home, concept] = await Promise.all([
    readFile(path.join(root, 'index.html'), 'utf8'),
    readFile(path.join(root, 'concepto.html'), 'utf8')
  ]);
  assert.match(home, /ITERACIÓN 03/);
  assert.match(home, /SIN VALIDACIÓN CONCLUYENTE/);
  assert.match(concept, /ITERACIÓN 03/);
  assert.match(concept, /TESIS ACTUALIZADA SIN CAMBIO DE ESTADO/);
});


test('la investigación define segmentos, pruebas y límites sin inventar resultados', async () => {
  const market = JSON.parse(await readFile(path.join(root, 'data/market-research.json'), 'utf8'));
  assert.equal(market.segments.length, 3);
  assert.deepEqual(market.tests.map(item => item.thesis), ['T-0001', 'T-0002', 'T-0003']);
  for (const item of market.tests) {
    assert.equal(item.status, 'PENDIENTE');
    assert.ok(item.supportSignal && item.refuteSignal && item.qualityGate);
  }
  assert.equal(market.competitors.length, 0);
  assert.match(market.limitations.join(' '), /Sin participantes/);
});

test('las fuentes candidatas no se presentan como evidencia aceptada', async () => {
  const sources = JSON.parse(await readFile(path.join(root, 'data/sources.json'), 'utf8'));
  assert.ok(sources.candidates.length >= 3);
  assert.ok(sources.candidates.every(item => item.status === 'PENDIENTE'));
  assert.ok(sources.official.length === 0 && sources.market.length === 0 && sources.competitors.length === 0);
});

test('existe un workflow de Pages que prueba antes de desplegar', async () => {
  const workflow = await readFile(path.join(root, '.github/workflows/pages.yml'), 'utf8');
  assert.match(workflow, /npm test/);
  assert.match(workflow, /needs: test/);
  assert.match(workflow, /actions\/deploy-pages@v4/);
});

test('NEXT_PROMPT coincide con iteración 03 y anuncia iteración 04', async () => {
  const current = await readFile(path.join(root, 'prompts/NEXT_PROMPT.md'), 'utf8');
  const archived = await readFile(path.join(root, 'docs/iterations/03-propuesta-valor-experimentos/NEXT_PROMPT.md'), 'utf8');
  assert.equal(current, archived);
  assert.match(current, /ITERACIÓN 04 — EJECUCIÓN CONTROLADA Y APRENDIZAJE DE MENSAJE/);
});

test('iteración 03 preregistra propuestas y experimentos sin inventar campo', async () => {
  const value = JSON.parse(await readFile(path.join(root, 'data/value-proposition.json'), 'utf8'));
  assert.equal(value.valuePropositions.length, 4);
  assert.deepEqual(new Set(value.valuePropositions.map(item => item.segmentId)), new Set(['S-01', 'S-02']));
  assert.equal(value.messageTest.messages.length, 4);
  for (const item of value.valuePropositions) {
    assert.equal(item.status, 'HIPÓTESIS');
    assert.ok(item.job && item.observedFrictionToTest && item.promise && item.mechanism && item.boundary);
  }
  assert.ok(value.recruitment.eligible.length && value.recruitment.exclude.length);
  assert.ok(value.consent.script && value.captureSheet.blankRecord && value.analysisPlan.denominators.length);
  assert.ok(value.thresholds['P-01'] && value.thresholds['P-02'] && value.stopRules.earlyStop.length);
  assert.equal(value.execution.fieldworkStarted, false);
  assert.equal(value.execution.participants, 0);
  assert.equal(value.execution.invitations, 0);
  assert.deepEqual(value.captureSheet.records, []);
  assert.equal(value.execution.status, 'PENDIENTE');
  assert.ok(value.protectedPending.every(item => item.status === 'PENDIENTE'));
});

test('la web publica iteración 03, protocolo y límites', async () => {
  const [home, proposal] = await Promise.all([
    readFile(path.join(root, 'index.html'), 'utf8'),
    readFile(path.join(root, 'propuesta-valor.html'), 'utf8')
  ]);
  assert.match(home, /ITERACIÓN 03/);
  assert.match(proposal, /ITERACIÓN 03/);
  assert.match(proposal, /Umbrales internos fijados antes del campo/);
  assert.match(proposal, /No es validación/);
});
