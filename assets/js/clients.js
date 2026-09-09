import {data} from './common.js';
const m=await data('market-research');
const tag=s=>`<span class="tag ${s==='HIPÓTESIS'?'hyp':s==='PENDIENTE'?'pending':''}">${s}</span>`;
document.querySelector('#segments').innerHTML=m.segments.map(s=>`<article class="card"><p>${tag(s.status)} <strong>Prioridad ${s.priority}</strong></p><h3>${s.id} · ${s.name}</h3><p><strong>Situación:</strong> ${s.situation}</p><p><strong>Trabajo:</strong> ${s.job}</p><p><strong>Fricciones:</strong></p><ul>${s.frictions.map(x=>`<li>${x}</li>`).join('')}</ul><p><strong>Alternativas actuales:</strong> ${s.currentAlternatives.join('; ')}.</p><p><strong>Resultado buscado:</strong> ${s.desiredOutcome}</p><p><strong>Por qué esta prioridad:</strong> ${s.priorityRationale}</p></article>`).join('');
document.querySelector('#criteria').innerHTML=`<ul>${m.prioritizationCriteria.map(x=>`<li>${tag(x.status)} <strong>${x.weight}:</strong> ${x.criterion}</li>`).join('')}</ul>`;
document.querySelector('#protocol').textContent=m.interviewProtocol.goal;
document.querySelector('#sample').textContent=m.interviewProtocol.sample;
document.querySelector('#questions').innerHTML=m.interviewProtocol.questions.map(x=>`<li>${x}</li>`).join('');
