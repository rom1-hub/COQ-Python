const fs=require('fs');
const path=require('path');
const vm=require('vm');
const root=path.resolve(__dirname,'..');
const context=vm.createContext({window:{},document:{querySelector:()=>null,getElementById:()=>null,querySelectorAll:()=>[]},console,Object,Array,Set,Map,String,Number,Boolean,RegExp,JSON});
[
  'data/verbs/verbs.js',
  'data/verbs/verbs-extended.js',
  'data/verbs/family-catalog.js',
  'data/verbs/canonical-model.js',
  'data/verbs/patterns.js',
  'js/conjugaison/pattern-registry.js'
].forEach(file=>vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),context,{filename:file}));
const w=context.window;
const assert=(condition,message)=>{if(!condition)throw new Error(message);};
const patterns=w.COQ_VERB_PATTERNS||{};
const families=w.COQ_VERB_FAMILIES||{};
const registry=w.COQ_PATTERN_REGISTRY||{};
assert(Object.keys(patterns).length>0,'El catálogo de patterns no debe estar vacío.');
assert(typeof registry.get==='function','El registro de generación de patterns debe exponer get.');
assert(typeof registry.generate==='function','El registro de generación de patterns debe exponer generate.');
assert(w.COQ_PATTERN_RESOLVER&&typeof w.COQ_PATTERN_RESOLVER.resolvePattern==='function','El resolver de patterns debe existir y exponer resolvePattern.');
assert(typeof w.COQ_PATTERN_RESOLVER.resolveFamily==='undefined','El resolver de patterns no debe resolver familias.');
assert(typeof w.COQ_PATTERN_RESOLVER.familyOptions==='undefined','El resolver de patterns no debe exponer opciones de familias.');
Object.values(families).forEach(family=>{
  const patternId=family.patternId;
  assert(patternId&&patterns[patternId],`La familia ${family.id} debe apuntar a un pattern declarado.`);
  const definition=registry.get(patternId);
  assert(definition&&typeof definition.generate==='function',`El pattern ${patternId} debe tener implementación en el registro.`);
});
Object.keys(patterns).forEach(patternId=>{
  const definition=registry.get(patternId);
  assert(definition&&typeof definition.generate==='function',`El catálogo declara ${patternId} sin implementación en el registro.`);
});
assert(w.COQ_PATTERN_RESOLVER.resolvePattern('parler')==='regular-er','parler debe resolver al pattern regular-er.');
assert(w.COQ_PATTERN_RESOLVER.resolvePattern('prendre')==='prendre','prendre debe resolver al pattern prendre.');
console.log('✓ Pattern ownership regression passed');