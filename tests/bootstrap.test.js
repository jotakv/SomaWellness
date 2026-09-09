import test from 'node:test';
import assert from 'node:assert/strict';
import { access, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const states = new Set(['CONFIRMADO', 'DERIVADO', 'ESTIMADO', 'HIPÓTESIS', 'PENDIENTE']);

async function filesBelow(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(entry => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? filesBelow(target) : [target];
  }));
  return nested.flat();
}

test('todos los archivos JSON contienen JSON válido', async () => {
  const files = (await filesBelow(path.join(root, 'data'))).filter(file => file.endsWith('.json'));
  assert.ok(files.length > 0, 'Debe existir al menos un archivo JSON');
  for (const file of files) {
    const contents = await readFile(file, 'utf8');
    assert.doesNotThrow(() => JSON.parse(contents), file);
  }
});

test('las rutas HTML locales de la portada existen', async () => {
  const html = await readFile(path.join(root, 'index.html'), 'utf8');
  const links = [...html.matchAll(/href="([^"]+)"/g)].map(match => match[1]);
  const localRoutes = links.filter(link => !link.startsWith('#') && !link.includes('://'));
  assert.ok(localRoutes.length >= 3, 'La portada debe ofrecer navegación básica');
  for (const route of localRoutes) await access(path.join(root, route));
});

test('NEXT_PROMPT existe y coincide con el histórico de la iteración', async () => {
  const current = await readFile(path.join(root, 'prompts/NEXT_PROMPT.md'), 'utf8');
  const archived = await readFile(path.join(root, 'docs/iterations/00-bootstrap/NEXT_PROMPT.md'), 'utf8');
  assert.equal(current, archived);
  assert.match(current, /ITERACIÓN 01 — CONCEPTO, ALCANCE Y TESIS/);
});

test('el proyecto declara exactamente el vocabulario oficial', async () => {
  const project = JSON.parse(await readFile(path.join(root, 'data/project.json'), 'utf8'));
  assert.deepEqual(new Set(project.evidenceStates), states);
});
