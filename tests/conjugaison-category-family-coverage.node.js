const fs=require('fs');
const path=require('path');
const vm=require('vm');
const root=path.resolve(__dirname,'..');
const context=vm.createContext({window:{},document:{querySelector:()=>null,getElementById:()=>null,querySelectorAll:()=>[]},console,Object,Array,Set,Map,Math,String,Number,Boolean,RegExp,JSON,Promise});
const files=['data/verbs/verbs.js','data/verbs/verbs-extended.js','data/verbs/family-catalog.js','data/verbs/category-catalog.js','data/verbs/canonical-model.js'];
files.forEach(file=>vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file}));
const w=context.window;
const assert=(condition,message)=>{if(!condition)throw new Error(message);};
const families=w.COQ_VERB_FAMILIES||{};
const categories=w.COQ_VERB_CATEGORY_CATALOG||[];
const resolver=w.COQ_CATEGORY_RESOLVER;
const records=Object.values(w.COQ_CONJ_DATA_MODEL?.records||{});
assert(Object.keys(families).length>0,'El catálogo de familias no puede estar vacío.');
assert(Array.isArray(categories)&&categories.length>0,'El catálogo de categorías no puede estar vacío.');
assert(resolver&&typeof resolver.matchesCategory==='function','El resolver de categorías debe exponer matchesCategory.');
assert(records.length>0,'El modelo canónico debe contener verbos.');
const ids=new Set();
categories.forEach(category=>{
  assert(category&&typeof category.id==='string'&&category.id.trim(),'Cada categoría debe declarar un id válido.');
  assert(!ids.has(category.id),`Duplicate category id: ${category.id}`);
  ids.add(category.id);
  assert(typeof category.label==='string'&&category.label.trim(),`La categoría ${category.id} debe declarar un label válido.`);
  if(category.id==='all'){
    assert(category.groupes===null&&category.familyIds===null&&category.subCategories===null,'La categoría all debe permanecer global y sin restricciones.');
    return;
  }
  assert(Array.isArray(category.groupes)&&category.groupes.length>0,`Category ${category.id} must declare groupes.`);
  assert(category.familyIds===null||Array.isArray(category.familyIds),`Category ${category.id} debe declarar familyIds como null o array.`);
  assert(category.subCategories===null||Array.isArray(category.subCategories),`Category ${category.id} debe declarar subCategories como null o array.`);
  assert(category.endings===undefined||category.endings===null||Array.isArray(category.endings),`Category ${category.id} debe declarar endings como null o array cuando exista.`);
  assert(new Set(category.groupes).size===category.groupes.length,`Category ${category.id} has duplicate groupes.`);
  if(Array.isArray(category.familyIds)){
    assert(new Set(category.familyIds).size===category.familyIds.length,`Category ${category.id} has duplicate familyIds.`);
    category.familyIds.forEach(familyId=>assert(families[familyId],`La categoría ${category.id} referencia una familia inexistente: ${familyId}.`));
  }
  const matching=records.filter(record=>resolver.matchesCategory(record.infinitif,category.id));
  if(Array.isArray(category.familyIds)&&category.familyIds.length>0){
    assert(matching.length>0,`La categoría ${category.id} (${category.label}) referencia familias pero no filtra ningún verbo existente en el modelo canónico.`);
  }
});
assert(ids.has('all'),'El catálogo debe conservar la categoría global all.');
const options=resolver.categoryOptions();
assert(options.length===categories.length,'categoryOptions debe reflejar exactamente el catálogo canónico.');
const categoryById=new Map(categories.map(category=>[category.id,category]));
options.forEach(option=>assert(categoryById.has(option.id),`categoryOptions expone una categoría inexistente: ${option.id}.`));
console.log(`✓ Category-family coverage regression passed — ${Object.keys(families).length} familias, ${categories.length} categorías y ${records.length} verbos validados.`);
