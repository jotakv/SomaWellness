import { data } from './common.js';

const model = await data('value-proposition');
const tag = status => `<span class="tag ${status === 'HIPÓTESIS' ? 'hyp' : status === 'PENDIENTE' ? 'pending' : ''}">${status}</span>`;
const list = items => `<ul>${items.map(item => `<li>${item}</li>`).join('')}</ul>`;

document.querySelector('#propositions').innerHTML = model.valuePropositions.map(item => `
  <article class="card"><p>${tag(item.status)} <strong>${item.id} · ${item.segmentId}</strong></p><h3>${item.promise}</h3>
  <p><strong>Trabajo:</strong> ${item.job}</p><p><strong>Fricción a contrastar:</strong> ${item.observedFrictionToTest}</p>
  <p><strong>Mecanismo:</strong> ${item.mechanism}</p><p><strong>Límite:</strong> ${item.boundary}</p></article>`).join('');
document.querySelector('#messages').innerHTML = model.messageTest.messages.map(item => `
  <article class="card"><p>${tag(item.status)} <strong>${item.id} · ${item.segmentId}</strong></p><h3>${item.headline}</h3><p>${item.body}</p>
  <small>Contrasta ${item.valuePropositionId}; texto fijo sin precio, imágenes ni testimonios.</small></article>`).join('');
document.querySelector('#exposure').innerHTML = list(model.messageTest.exposureScript);
document.querySelector('#recruitment').innerHTML = `<p>${model.recruitment.target}</p><p><strong>Invitación:</strong> ${model.recruitment.invitation}</p><h3>Elegibilidad</h3>${list(model.recruitment.eligible)}<h3>Exclusiones</h3>${list(model.recruitment.exclude)}`;
document.querySelector('#consent').innerHTML = `<blockquote>${model.consent.script}</blockquote><p><strong>Datos:</strong> ${model.consent.handling}</p><p><strong>Seguridad:</strong> ${model.consent.safety}</p>`;
const blank = model.captureSheet.blankRecord;
document.querySelector('#capture').innerHTML = `<p>Versión ${model.captureSheet.version}; <strong>${model.captureSheet.records.length} registros reales</strong>.</p><p>Campos: ${Object.keys(blank).join(', ')}.</p>`;
const threshold = ([id, item]) => `<article class="card"><h3>${id}</h3><p><strong>Calidad mínima:</strong> ${item.minimumQuality}</p><p><strong>Apoyo provisional:</strong> ${item.provisionalSupport}</p><p><strong>Refutación provisional:</strong> ${item.provisionalRefute}</p><p><strong>Mixto:</strong> ${item.mixed}</p></article>`;
document.querySelector('#thresholds').innerHTML = Object.entries(model.thresholds).filter(([id]) => id.startsWith('P-')).map(threshold).join('');
document.querySelector('#stop-rules').innerHTML = list([...model.stopRules.qualityStop, ...model.stopRules.earlyStop]);
document.querySelector('#versions').innerHTML = model.protocolVersions.map(item => `<article class="card"><h3>Versión ${item.version}</h3><p>${tag(item.status)} ${item.description ?? `Congelada el ${item.frozenAt}; base ${item.basedOn}.`}</p><p><strong>Cambios:</strong> ${item.changesFromPrevious?.length ? item.changesFromPrevious.join(', ') : 'ninguno'}.</p>${item.contentSha256 ? `<small>SHA-256: <code>${item.contentSha256}</code></small>` : ''}</article>`).join('') + `<article class="card"><h3>Desviaciones</h3><p><strong>${model.deviations.length}</strong> registradas.</p></article>`;
document.querySelector('#execution').innerHTML = `${tag(model.execution.status)} ${model.execution.result}<p><strong>Invitaciones:</strong> ${model.execution.invitations} · <strong>Participantes:</strong> ${model.execution.participants} · <strong>Canal/fecha:</strong> ${model.execution.channel} / ${model.execution.startDate}</p><p><strong>Flujo:</strong> ${Object.entries(model.execution.flow).map(([key, value]) => `${key}: ${value}`).join(' · ')}</p><p><strong>Codificación:</strong> ${model.execution.coding.reason} Umbral: ${model.execution.coding.thresholdOutcome}.</p>`;
