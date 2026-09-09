import test from 'node:test';import assert from 'node:assert/strict';import {readdir,readFile} from 'node:fs/promises';import path from 'node:path';
const forbidden=['ama'+'zon','cat'+'cher','micro'+'hub','última'+' milla','paquete'+'s','repartidor'+'es'];
async function walk(d){return (await readdir(d,{withFileTypes:true})).flatMap(x=>x.isDirectory()?[]:[path.join(d,x.name)])}
test('contenido público no contiene términos ajenos al proyecto',async()=>{const files=[...(await walk('.')).filter(x=>x.endsWith('.html')),...await walk('data')];for(const f of files){const s=(await readFile(f,'utf8')).toLowerCase();for(const word of forbidden)assert.equal(s.includes(word),false,`${word} en ${f}`)}});
