const fs=require('fs');
const path=require('path');
const vm=require('vm');
const root=path.resolve(__dirname,'..');
const context=vm.createContext({window:{},document:{querySelector:()=>null,getElementById:()=>null,querySelectorAll:()=>[]},console,Set,Map,Object,Array,Math,String,Number,Boolean,RegExp,JSON});
const files=['data/verbs/verbs.js','data/verbs/verbs-extended.js','data/verbs/family-catalog.js','data/verbs/canonical-model.js'];
files.forEach(file=>vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file}));
const w=context.window;
const assert=(condition,message)=>{if(!condition)throw new Error(message);};
const verbs=w.COQ_VERBS||{};
const families=w.COQ_VERB_FAMILIES||{};
const familyCatalog=w.COQ_VERB_FAMILY_CATALOG||{};
const model=w.COQ_CONJ_DATA_MODEL;
assert(Object.keys(verbs).length>0,'El registro léxico de verbos no puede estar vacío.');
assert(Object.keys(families).length>0,'El catálogo de familias no puede estar vacío.');
assert(model&&model.records,'El modelo canónico debe estar disponible.');
const missing=[];
const invalid=[];
Object.keys(verbs).forEach(verb=>{
  const entry=familyCatalog[verb];
  const record=model.records[verb];
  if(!entry){missing.push(verb);return;}
  if(!record)invalid.push(`${verb}: falta en el modelo canónico`);
  else {
    if(record.familyId!==entry.familyId)invalid.push(`${verb}: familyId ${record.familyId} !== ${entry.familyId}`);
    if(record.patternId!==entry.patternId)invalid.push(`${verb}: patternId ${record.patternId} !== ${entry.patternId}`);
  }
});
Object.entries(familyCatalog).forEach(([verb,entry])=>{
  assert(families[entry.familyId],`La familia del índice de ${verb} no existe: ${entry.familyId}.`);
  assert(verbs[verb],`El índice familiar no debe introducir verbos fuera del registro léxico: ${verb}.`);
});
if(missing.length||invalid.length){
  console.error(`Verbos sin familia (${missing.length}): ${missing.join(', ')||'ninguno'}`);
  console.error(`Incoherencias (${invalid.length}): ${invalid.join(' | ')||'ninguna'}`);
  throw new Error(`La cobertura verbo→familia no está completa: ${missing.length} faltantes, ${invalid.length} incoherencias.`);
}
const covered=Object.keys(verbs).filter(verb=>familyCatalog[verb]).length;
console.log(`✓ Verb-family coverage regression passed — ${covered}/${Object.keys(verbs).length} verbos léxicos cubiertos.`);
