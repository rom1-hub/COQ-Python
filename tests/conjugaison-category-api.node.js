const fs=require('fs');
const path=require('path');
const vm=require('vm');
const root=path.resolve(__dirname,'..');
const context=vm.createContext({window:{},document:{querySelector:()=>null,getElementById:()=>null,querySelectorAll:()=>[]},console,Object,Array,Set,Map,String,Number,Boolean,RegExp,JSON});
['data/verbs/verbs.js','data/verbs/verbs-extended.js','data/verbs/family-catalog.js','data/verbs/category-catalog.js','data/verbs/canonical-model.js','data/verbs/patterns.js'].forEach(file=>vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file}));
const w=context.window;
const assert=(condition,message)=>{if(!condition)throw new Error(message);};
assert(Array.isArray(w.COQ_VERB_CATEGORY_CATALOG),'El catálogo de categorías debe existir.');
assert(w.COQ_CATEGORY_RESOLVER&&typeof w.COQ_CATEGORY_RESOLVER.categoryOptions==='function','El resolver de categorías debe exponer categoryOptions.');
assert(typeof w.COQ_CATEGORY_RESOLVER.matchesCategory==='function','El resolver de categorías debe exponer matchesCategory.');
assert(typeof w.COQ_PATTERN_RESOLVER.categoryOptions==='undefined','El resolver de patterns no debe exponer la API de categorías.');
assert(typeof w.COQ_PATTERN_RESOLVER.matchesGroup==='undefined','El resolver de patterns no debe exponer reglas de categorías con nomenclatura histórica.');
const catalog=w.COQ_VERB_CATEGORY_CATALOG;
const ids=new Set();
catalog.forEach(category=>{
  assert(category&&typeof category.id==='string'&&category.id,'Cada categoría debe declarar un id válido.');
  assert(!ids.has(category.id),`Duplicate category id: ${category.id}`);
  ids.add(category.id);
  assert(typeof category.label==='string'&&category.label.trim(),'Cada categoría debe declarar un label válido.');
  if(category.id==='all'){
    assert(category.groupes===null&&category.familyIds===null,'La categoría all debe permanecer global y sin restricciones.');
    return;
  }
  assert(Array.isArray(category.groupes)&&category.groupes.length>0,`Category ${category.id} must declare groupes.`);
  assert(category.familyIds===null||Array.isArray(category.familyIds),`Category ${category.id} debe declarar familyIds como null o array.`);
  assert(category.subCategories===null||Array.isArray(category.subCategories),`Category ${category.id} debe declarar subCategories como null o array.`);
  assert(category.endings===null||Array.isArray(category.endings),`Category ${category.id} debe declarar endings como null o array.`);
  assert(new Set(category.groupes).size===category.groupes.length,`Category ${category.id} has duplicate groupes.`);
  if(Array.isArray(category.familyIds))assert(new Set(category.familyIds).size===category.familyIds.length,`Category ${category.id} has duplicate familyIds.`);
});
const options=w.COQ_CATEGORY_RESOLVER.categoryOptions();
assert(options.length===catalog.length,'categoryOptions debe reflejar exactamente el catálogo canónico.');
assert(options.some(category=>category.id==='er-eler'),'categoryOptions debe conservar las categorías pedagógicas existentes.');
assert(w.COQ_CATEGORY_RESOLVER.matchesCategory('appeler','er-eler'),'appeler debe resolverse dentro de la categoría er-eler.');
assert(!w.COQ_CATEGORY_RESOLVER.matchesCategory('appeler','er-eter'),'appeler no debe pertenecer a la categoría er-eter.');
assert(w.COQ_CATEGORY_RESOLVER.matchesCategory('prendre','groupe-3-all'),'prendre debe pertenecer al tercer grupo.');
console.log('✓ Category resolver ownership regression passed');
