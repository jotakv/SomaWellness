import test from 'node:test';import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';import {economics,annualProjection,paybackMonth,projection} from '../assets/js/financial-engine.js';
const m=JSON.parse(await readFile(new URL('../data/business-model.json',import.meta.url)));const near=(a,b,t=.08)=>assert.ok(Math.abs(a-b)<=t,`${a} ≉ ${b}`);
test('economía base auditable',()=>{const e=economics(m);near(e.classRevenue,3928.18);near(e.classContribution,1964.09);near(e.workshopRevenue,528);near(e.workshopContribution,184.8);near(e.totalContribution,2148.89);near(e.fcf,1398.89);near(e.annualFCF,16786.66)});
test('rampa y cinco años',()=>{const a=annualProjection(m);[11118.92,18586.66,17686.66,16786.66,16786.66].forEach((x,i)=>near(a[i].fcf,x,.15));near(a.reduce((s,x)=>s+x.fcf,0),80965.56,.5);near(a.at(-1).cumulative-m.initialCapital,75965.56,.5);near(paybackMonth(m),8.01,.02)});
test('residual inmobiliario cero',()=>assert.equal(m.realEstateResidual,0));

test('la memoria económica lean está completa y conectada al modelo', async()=>{
 const {readdir}=await import('node:fs/promises');
 const files=await readdir(new URL('../memoria/economia/',import.meta.url));
 const required=['00_METODOLOGIA_MODELO.md','01_HIPOTESIS_ECONOMICAS.md','02_CAPEX_INVERSION_INICIAL.md','03_OPEX.md','04_UNIT_ECONOMICS_CLASE.md','05_INGRESOS.md','06_PROYECCION_24_MESES.md','07_PROYECCION_5_ANOS.md','08_CASH_FLOW_FCF.md','09_BREAK_EVEN_PAYBACK.md','10_ESCENARIOS.md','11_SENSIBILIDAD.md','12_DIGITAL_SAAS_ECONOMICS.md','13_DASHBOARD_ECONOMICO.md','README.md'];
 assert.deepEqual(required.filter(x=>!files.includes(x)),[]);
 const [plan,monthly,saas]=await Promise.all([
  readFile(new URL('../memoria/11_PLAN_ECONOMICO.md',import.meta.url),'utf8'),
  readFile(new URL('../memoria/economia/06_PROYECCION_24_MESES.md',import.meta.url),'utf8'),
  readFile(new URL('../memoria/economia/12_DIGITAL_SAAS_ECONOMICS.md',import.meta.url),'utf8')]);
 assert.match(plan,/4\.456,18 \/mes|4\.456,18 €\/mes/);
 assert.equal((monthly.match(/^\| \d+ \|/gm)||[]).length,24);
 assert.match(saas,/0 clientes, 0 € MRR y 0 € ARR/);
});
