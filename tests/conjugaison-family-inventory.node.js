const fs=require('fs');
const path=require('path');
const vm=require('vm');
const root=path.resolve(__dirname,'..');
const context=vm.createContext({window:{},document:{querySelector:()=>null,getElementById:()=>null,querySelectorAll:()=>[]},console,Set,Map,Object,Array,Math,String,Number,Boolean,RegExp,JSON});
const files=['data/verbs/verbs.js','data/verbs/verbs-extended.js','data/verbs/family-catalog.js','data/verbs/category-catalog.js','data/verbs/canonical-model.js'];
files.forEach(file=>vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file}));
const w=context.window;
const assert=(condition,message)=>{if(!condition)throw new Error(message);};
const families=w.COQ_VERB_FAMILIES||{};
const familyCatalog=w.COQ_VERB_FAMILY_CATALOG||{};
const model=w.COQ_CONJ_DATA_MODEL;
const categories=w.COQ_VERB_CATEGORY_CATALOG||[];
assert(model&&model.records,'El modelo canónico debe estar disponible.');
assert(Object.keys(families).length>0,'El catálogo de familias no puede estar vacío.');
Object.entries(families).forEach(([familyId,family])=>{
  assert(family.id===familyId,`La familia ${familyId} debe conservar su familyId.`);
  assert(typeof family.patternId==='string'&&family.patternId,`La familia ${familyId} debe declarar patternId.`);
  assert(Array.isArray(family.verbs),`La familia ${familyId} debe declarar sus verbos.`);
  family.verbs.forEach(verb=>{
    const record=model.records[verb];
    const catalogEntry=familyCatalog[verb];
    assert(record,`El verbo ${verb} declarado en ${familyId} debe existir en el modelo canónico.`);
    assert(catalogEntry,`El verbo ${verb} declarado en ${familyId} debe existir en el índice familiar.`);
    assert(catalogEntry.familyId===familyId,`El índice familiar de ${verb} debe apuntar a ${familyId}.`);
    assert(record.familyId===familyId,`El modelo canónico de ${verb} debe declarar familyId=${familyId}.`);
    assert(catalogEntry.patternId===family.patternId,`El pattern de ${verb} debe coincidir con el pattern declarado por ${familyId}.`);
    assert(record.patternId===family.patternId,`El modelo canónico de ${verb} debe conservar el pattern de ${familyId}.`);
    assert(Number(record.groupe)===Number(family.groupe),`El groupe de ${verb} debe coincidir con ${familyId}.`);
  });
});
Object.entries(familyCatalog).forEach(([verb,entry])=>{
  const record=model.records[verb];
  const family=families[entry.familyId];
  assert(record,`Todo verbo del índice familiar debe existir en el modelo canónico: ${verb}.`);
  assert(family,`Todo familyId del índice debe existir en el catálogo: ${entry.familyId}.`);
  assert(record.familyId===entry.familyId,`La familia canónica de ${verb} debe coincidir con el índice.`);
  assert(record.patternId===entry.patternId,`El pattern canónico de ${verb} debe coincidir con el índice.`);
});
Object.entries(model.records).forEach(([verb,record])=>{
  if(!record.familyId)return;
  assert(families[record.familyId],`El modelo canónico de ${verb} referencia una familia inexistente: ${record.familyId}.`);
  assert(familyCatalog[verb],`El modelo canónico de ${verb} debe estar presente en el índice familiar.`);
});
categories.forEach(category=>{
  (category.familyIds||[]).forEach(familyId=>assert(families[familyId],`La categoría ${category.id} referencia una familia inexistente: ${familyId}.`));
});
const familyCount=Object.keys(families).length;
const indexedCount=Object.keys(familyCatalog).length;
const modelFamilyCount=Object.values(model.records).filter(record=>record.familyId).length;
assert(indexedCount===modelFamilyCount,`El índice familiar (${indexedCount}) debe cubrir exactamente los registros canónicos con familyId (${modelFamilyCount}).`);
console.log(`✓ Family inventory regression passed — ${familyCount} familias, ${indexedCount} verbos indexados y ${categories.length} categorías validadas.`);
