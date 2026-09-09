import test from 'node:test';import assert from 'node:assert/strict';import {readFile} from 'node:fs/promises';import {economics,annualProjection,paybackMonth,projection} from '../assets/js/financial-engine.js';
const m=JSON.parse(await readFile(new URL('../data/business-model.json',import.meta.url)));const near=(a,b,t=.08)=>assert.ok(Math.abs(a-b)<=t,`${a} ≉ ${b}`);
test('economía base auditable',()=>{const e=economics(m);near(e.classRevenue,3928.18);near(e.classContribution,1964.09);near(e.workshopRevenue,528);near(e.workshopContribution,184.8);near(e.totalContribution,2148.89);near(e.fcf,1398.89);near(e.annualFCF,16786.66)});
test('rampa y cinco años',()=>{const a=annualProjection(m);[11118.92,18586.66,17686.66,16786.66,16786.66].forEach((x,i)=>near(a[i].fcf,x,.15));near(a.reduce((s,x)=>s+x.fcf,0),80965.56,.5);near(a.at(-1).cumulative-m.initialCapital,75965.56,.5);near(paybackMonth(m),8.01,.02)});
test('residual inmobiliario cero',()=>assert.equal(m.realEstateResidual,0));
