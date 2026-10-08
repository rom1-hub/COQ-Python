const fs=require('fs');
const vm=require('vm');
const assert=require('assert');

const context={
  window:{},
  document:{
    querySelector(){return null;},
    querySelectorAll(){return [];},
    addEventListener(){},
  },
  console,
  setTimeout,
  clearTimeout,
};
context.globalThis=context;
vm.createContext(context);

const files=[
  'data/verbs/local-database.js',
  'data/verbs/family-catalog.js',
  'data/verbs/canonical-model.js',
  'data/verbs/constructions.js',
  'data/verbs/auxiliaries.js',
  'data/verbs/tense-rules.js',
  'js/conjugaison/utils.js',
  'js/conjugaison/pronouns.js',
  'js/conjugaison/compound-tenses.js',
  'js/conjugaison/agreement.js',
  'js/conjugaison/pattern-registry.js',
  'js/conjugaison/engine.js',
  'js/conjugaison/lookup.js',
  'js/conjugaison/practice.js',
];

files.forEach(file=>vm.runInContext(fs.readFileSync(file,'utf8'),context,{filename:file}));

const db=context.window.COQ_VERBS;
const model=context.window.COQ_CONJ_DATA_MODEL;
const engine=context.window.COQ_CONJ_ENGINE;
const presentKey="présent de l'indicatif";

assert.ok(db&&Object.keys(db).length>=7000,'La consulta debe partir de la base local completa.');
assert.ok(model&&typeof model.get==='function','El modelo canónico debe leer la base local.');
assert.ok(engine&&typeof engine.conjugate==='function','El motor debe estar conectado al modelo canónico.');

const prendre=model.get('prendre');
assert.ok(prendre,'prendre debe existir en la base local.');
assert.ok(Array.isArray(prendre.conjugations?.[presentKey]),'prendre debe contener su presente en la base local.');
const present=prendre.conjugations[presentKey];
const jeRow=present[0];
const storedJe=Array.isArray(jeRow)?jeRow[1]:jeRow;
assert.ok(storedJe,'La forma de je de prendre debe estar almacenada en la base local.');
assert.strictEqual(engine.conjugate('prendre',presentKey,'je'),storedJe,'El motor debe usar la forma almacenada en la base local para un tiempo simple.');
assert.strictEqual(storedJe,'prends','La base local debe contener la forma correcta de je de prendre.');

const pronominalExpectations={
  'se lever':{subject:'je',answer:'me lève'},
  'se laver':{subject:'je',answer:'me lave'},
  'se réveiller':{subject:'je',answer:"me réveille"},
  'se baisser':{subject:'elle',answer:'se baisse'},
  "s'endormir":{subject:'elle',answer:"s'endort"},
};
Object.entries(pronominalExpectations).forEach(([verb,expected])=>{
  const record=model.get(verb);
  assert.ok(record&&record.pronominal===true,`${verb} debe conservar su metadata pronominal en la base local.`);
  assert.ok(record.baseVerbId,`${verb} debe apuntar explícitamente a su verbo base.`);
  assert.strictEqual(engine.conjugate(verb,presentKey,expected.subject),expected.answer,`${verb} debe generar ${expected.answer} sin duplicar el pronombre pronominal.`);
});

const coiCompoundExpectations={
  'se parler':{subject:'elle',answer:"s'est parlé"},
  'se téléphoner':{subject:'elles',answer:'se sont téléphoné'},
};
Object.entries(coiCompoundExpectations).forEach(([verb,expected])=>{
  const record=model.get(verb);
  assert.ok(record&&record.pronominal===true,`${verb} debe conservar su metadata pronominal.`);
  assert.strictEqual(record.baseVerbId,verb.replace(/^se /,'').replace(/^s'/,''),`${verb} debe apuntar a su verbo base.`);
  assert.strictEqual(engine.conjugate(verb,'passé composé',expected.subject),expected.answer,`${verb} debe mantener el participio invariable por COI.`);
});

assert.ok(context.window.COQ_CONJ_LOOKUP&&typeof context.window.COQ_CONJ_LOOKUP.renderConjugation==='function','La consulta debe estar conectada al motor basado en la base local.');
assert.ok(context.window.COQ_CONJ_PRACTICE_TESTING&&typeof context.window.COQ_CONJ_PRACTICE_TESTING.selectPracticeQuestions==='function','La práctica debe conservar su API de ejercicio.');

console.log(`conjugaison-local-integration: OK (${Object.keys(db).length} verbos locales)`);
