const fs=require('fs');
const vm=require('vm');
const assert=require('assert');

const context={
  window:{},
  document:{
    readyState:'loading',
    addEventListener(){},
    querySelector(){return null;},
  },
  console,
  setTimeout,
  clearTimeout,
};
context.globalThis=context;
vm.createContext(context);

const files=[
  'data/verbs/verbs.js',
  'data/verbs/family-catalog.js',
  'data/verbs/patterns.js',
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

assert(context.window.COQ_CONJ_PRACTICE_TESTING,'API de pruebas de práctica no disponible.');
const {selectPracticeQuestions}=context.window.COQ_CONJ_PRACTICE_TESTING;

const makeQuestion=(subject,tense,verb='parler')=>({verb,tense,subject,answer:`${verb}-${subject}-${tense}`});
const broadPool=[];
['je','tu','il','elle','on','nous','vous','ils','elles'].forEach(subject=>{
  ['t1','t2','t3','t4'].forEach(tense=>{
    ['parler','finir','vendre'].forEach(verb=>broadPool.push(makeQuestion(subject,tense,verb)));
  });
});

const selected=selectPracticeQuestions(broadPool,20);
assert.strictEqual(selected.length,20,'La selección debe contener exactamente 20 preguntas.');
assert.strictEqual(new Set(selected.map(q=>[q.verb,q.tense,q.subject,q.answer].join('|'))).size,20,'No debe haber preguntas duplicadas.');
for(let i=1;i<selected.length;i++){
  assert.notStrictEqual(String(selected[i].subject).toLowerCase(),String(selected[i-1].subject).toLowerCase(),'No debe repetirse inmediatamente el mismo sujeto.');
}
const subjectCounts=selected.reduce((map,q)=>map.set(q.subject,(map.get(q.subject)||0)+1),new Map());
assert.ok(Math.max(...subjectCounts.values())-Math.min(...subjectCounts.values())<=1,'La distribución de sujetos debe permanecer equilibrada.');

const exactPool=Array.from({length:20},(_,i)=>makeQuestion(`s${i}`,'t1',`v${i}`));
assert.strictEqual(selectPracticeQuestions(exactPool,20).length,20,'Un pool exacto de 20 debe conservar las 20 preguntas.');

const duplicatedPool=[...exactPool,...exactPool];
const deduped=selectPracticeQuestions(duplicatedPool,20);
assert.strictEqual(deduped.length,20,'Un pool duplicado debe deduplicarse sin reutilizar preguntas.');
assert.strictEqual(new Set(deduped.map(q=>[q.verb,q.tense,q.subject,q.answer].join('|'))).size,20,'La deduplicación debe eliminar las repeticiones.');

console.log('conjugaison-practice-distribution: OK');
