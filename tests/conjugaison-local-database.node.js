const fs=require('fs');
const path=require('path');
const vm=require('vm');
const root=path.resolve(__dirname,'..');
const context=vm.createContext({window:{},console,Object,Array,Set,Map,String,Number,Boolean,RegExp,JSON});
const load=file=>vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file});
load('data/verbs/pronominal-catalog.js');
load('data/verbs/local-database.js');
const verbs=context.window.COQ_VERBS;
const catalog=context.window.COQ_PRONOMINAL_CATALOG||[];
const assert=(condition,message)=>{if(!condition)throw new Error(message);};
assert(verbs&&typeof verbs==='object','La base local debe exponer COQ_VERBS.');
const keys=Object.keys(verbs);
assert(keys.length>=7000,'La base local debe contener el catálogo completo.');
assert(catalog.length===102,'El catálogo pedagógico debe contener 102 verbos pronominales.');
const seen=new Set();
for(const entry of catalog){
  assert(entry&&entry.infinitif&&entry.base,'Entrada pronominal incompleta.');
  assert(!seen.has(entry.infinitif),'Verbo pronominal duplicado: '+entry.infinitif);
  seen.add(entry.infinitif);
  const record=verbs[entry.infinitif];
  assert(record&&record.pronominal===true,entry.infinitif+' debe estar en la base local como pronominal.');
  assert(record.construction==='pronomiale',entry.infinitif+' debe tener construcción pronomiale.');
  assert(record.infinitif_base,'Falta infinitif_base en '+entry.infinitif);
  assert(record.auxiliaire==='être',entry.infinitif+' debe usar être.');
  assert(record.formes&&record.formes["présent de l'indicatif"],'Falta el presente de '+entry.infinitif+'.');
}
assert(verbs['servir']&&!verbs['servir'].pronominal,'servir no debe clasificarse como pronominal.');
assert(verbs['se servir']&&verbs['se servir'].pronominal===true,'se servir debe estar en la base local como pronominal.');
const pronominal=keys.filter(key=>verbs[key]?.pronominal===true);
assert(pronominal.length>=catalog.length,'La base debe contener todos los pronominales del catálogo.');
for(const key of pronominal){
  const record=verbs[key];
  assert(record.construction==='pronomiale','Entrada pronominal sin construcción canónica: '+key);
  assert(record.infinitif_base,'Entrada pronominal sin infinitif_base: '+key);
  assert(record.auxiliaire,'Entrada pronominal sin auxiliar: '+key);
}
for(const key of ['être','avoir','prendre','finir','aller','se lever']){
  const record=verbs[key];
  assert(record&&record.formes&&Object.keys(record.formes).length>0,'Faltan conjugaciones locales para '+key+'.');
  assert(record.formes["présent de l'indicatif"],'Falta el presente de '+key+'.');
}
console.log('Local database regression passed: '+keys.length+' verbs, '+pronominal.length+' pronominal entries');
