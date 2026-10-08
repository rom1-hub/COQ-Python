const fs=require('fs');
const path=require('path');
const vm=require('vm');
const root=path.resolve(__dirname,'..');
const context=vm.createContext({window:{},document:{querySelector:()=>null,getElementById:()=>null,querySelectorAll:()=>[]},console,Set,Map,Object,Array,Math,String,Number,Boolean,RegExp,JSON});
const files=['data/verbs/verbs.js','data/verbs/verbs-extended.js','data/verbs/family-catalog.js','data/verbs/canonical-model.js','data/verbs/patterns.js','data/verbs/constructions.js','data/verbs/auxiliaries.js','data/verbs/tense-rules.js','js/conjugaison/utils.js','js/conjugaison/pronouns.js','js/conjugaison/compound-tenses.js','js/conjugaison/agreement.js','js/conjugaison/pattern-registry.js'];
files.forEach(file=>vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file}));
const w=context.window,model=w.COQ_CONJ_DATA_MODEL,C=w.COQ_CONJ_COMPOUND,S=w.COQ_CONJ_PRONOUNS;
const assert=(condition,message)=>{if(!condition)throw new Error(message);};
assert(model&&model.records&&C&&S,'El modelo canónico y los modelos de tiempos/sujetos deben estar disponibles.');
const sourceRecords=model.records;
const records={};
Object.keys(sourceRecords).forEach(verb=>{
  const source=sourceRecords[verb];
  const copy={...source};
  delete copy.legacyFormes;
  records[verb]=Object.freeze(copy);
});
w.COQ_CONJ_DATA_MODEL=Object.freeze({version:model.version,records:Object.freeze(records),get(verb){return records[String(verb||'').trim()]||null;}});
vm.runInContext(fs.readFileSync(path.join(root,'js/conjugaison/engine.js'),'utf8'),context,{filename:'js/conjugaison/engine.js'});
const engine=w.COQ_CONJ_ENGINE;
assert(engine,'El motor de conjugación debe estar disponible.');
const simpleTenses=(C.simpleTenses||[]).filter(tense=>tense!==undefined);
const canonicalSubjects=S.subjectSets.simpleConstructionFallback;
assert(canonicalSubjects.length===9,'La cobertura simple debe validar los 9 sujetos canónicos.');
const failures=[];
Object.keys(records).forEach(verb=>{
  const record=records[verb];
  simpleTenses.forEach(tense=>{
    const subjects=tense==='impératif présent'
      ? S.subjectSets.imperative
      : tense==='subjonctif présent'
        ? S.subjectSets.subjonctifPractice
        : canonicalSubjects;
    subjects.forEach(subject=>{
      const baseSubject=S.baseSubject(subject);
      const result=engine.conjugate(verb,tense,baseSubject,record.pronominal?'pronomiale':'non-pronomiale');
      if(result===null||result===undefined||String(result)==='')failures.push(`${verb} | ${tense} | ${baseSubject}`);
    });
  });
});
if(failures.length){
  console.error(`Combinaciones simples no generables (${failures.length}): ${failures.slice(0,80).join(' ; ')}`);
  throw new Error(`La cobertura del generador simple sin legacyFormes no es completa: ${failures.length} combinaciones sin forma generada.`);
}
console.log(`✓ Simple generation coverage regression passed without legacyFormes — ${Object.keys(records).length} verbos × ${simpleTenses.length} tiempos simples, con sujetos válidos por tiempo.`);
