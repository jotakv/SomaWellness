import { data } from './common.js';

const concept = await data('concept');
const tag = status => `<span class="tag ${status === 'HIPÓTESIS' ? 'hyp' : status === 'PENDIENTE' ? 'pending' : ''}">${status}</span>`;
const list = items => `<ul>${items.map(item => `<li>${tag(item.status)} ${item.value ?? item.segment}</li>`).join('')}</ul>`;

document.querySelector('#brief').textContent = concept.definitions.brief.text;
document.querySelector('#developed').textContent = concept.definitions.developed.text;
document.querySelector('#problem').textContent = concept.problem.statement;
document.querySelector('#response').textContent = concept.proposedResponse.statement;
const scope = concept.scope;
document.querySelector('#scope').innerHTML = `
  <div class="grid">
    <article class="card"><h3>Geografía</h3><p>${tag(scope.geography.status)} ${scope.geography.value}</p></article>
    <article class="card"><h3>Tipo de negocio</h3><p>${tag(scope.businessType.status)} ${scope.businessType.value}</p></article>
  </div>
  <h3>Beneficiarios y clientes preliminares</h3>${list(scope.preliminaryBeneficiaries)}
  <div class="grid"><article class="card"><h3>Actividades admisibles</h3>${list(scope.admissibleActivities)}</article><article class="card"><h3>Canales admisibles</h3>${list(scope.admissibleChannels)}</article><article class="card"><h3>Ingresos admisibles</h3>${list(scope.admissibleRevenueFamilies)}</article></div>
  <h3>Exclusiones explícitas</h3>${list(scope.exclusions)}`;
document.querySelector('#principles').innerHTML = concept.experiencePrinciples.map(item => `<article class="card">${tag(item.status)}<h3>${item.name}</h3><p>${item.statement}</p></article>`).join('');
document.querySelector('#thesis').innerHTML = concept.thesis.map(item => `<article class="card thesis"><p>${tag(item.status)} <strong>${item.id}</strong></p><h3>${item.claim}</h3><p><strong>Podría apoyarla:</strong> ${item.supportEvidence}</p><p><strong>Podría refutarla:</strong> ${item.refuteEvidence}</p></article>`).join('');
document.querySelector('#unresolved').innerHTML = concept.unresolved.map(item => `<li>${tag(item.status)} ${item.value}</li>`).join('');
