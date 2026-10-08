/* COQ — Práctica de conjugación */
(function(){
  const U=window.COQ_CONJ_UTILS;
  const dataModel=window.COQ_CONJ_DATA_MODEL;
  const categoryResolver=window.COQ_CATEGORY_RESOLVER;
  const constructionResolver=window.COQ_CONSTRUCTION_RESOLVER;
  const C=window.COQ_CONJ_COMPOUND;
  const constructionOptions=window.COQ_CONSTRUCTION_OPTIONS||[];
  const auxiliaryOptions=window.COQ_AUXILIARY_OPTIONS||[];
  const getRecord=v=>dataModel?.get?.(v)||null;
  const compoundTenses=C?.compoundTenses||[];
  let session={questions:[],index:0,correct:0,results:[],locked:false};
  function convertirGrupoFrontend(group){
    if(!group||group==='all')return[1,2,3];
    if(group==='groupe-1-all')return[1];
    if(group==='groupe-2-all')return[2];
    if(group==='groupe-3-all')return[3];
    const numericGroup=Number(group);
    if([1,2,3].includes(numericGroup))return[numericGroup];
    throw new Error('No se pudo interpretar el grupo verbal seleccionado.');
  }
  function convertirPronominalFrontend(construction){
    if(construction==='pronomiale')return true;
    if(construction==='non-pronomiale'||construction==='non-pronomial')return false;
    return null;
  }
  async function generarPreguntasDesdeBackend({
    verbId,
    tenseIds,
    group,
    construction,
    auxiliary
  }){
    const groups=convertirGrupoFrontend(group);
    const selectedTenses=Array.isArray(tenseIds)?tenseIds:[tenseIds];
    const normalizedTenses=selectedTenses.flatMap((tenseId)=>
      tenseId==='Todos los tiempos' ? (C?.displayOrder||[]).slice() : [tenseId]
    ).filter(Boolean);
    if(!normalizedTenses.length)
      throw new Error('Debes indicar al menos un tiempo verbal.');
    const data=await window.COQ_API.generarEjercicioDesdeBackend({
      grupos:groups,
      tenseIds:normalizedTenses,
      limite:20,
      familyId:null,
      verbId:verbId||null,
      pronominal:convertirPronominalFrontend(construction),
      auxiliary:auxiliary||null
    });
    const adapter=window.COQ_CONJUGATION_ADAPTER;
    if(!adapter||typeof adapter.adaptarPreguntasConjugation!=='function')
      throw new Error('El adaptador de conjugación no está disponible.');
    const questions=adapter.adaptarPreguntasConjugation(data.questions);
    if(questions.length!==20)
      throw new Error('El servidor no generó las 20 preguntas solicitadas.');
    return questions;
  }
  function updatePracticeAuxiliaryOptions(){const tense=document.querySelector('#practiceTense')?.value,verb=U.normalizeVerb(document.querySelector('#practiceVerb')?.value),construction=document.querySelector('#practiceConstruction')?.value,aux=document.querySelector('#practiceAuxiliary'),help=document.querySelector('#practiceAuxiliaryHelp');if(!aux)return;aux.innerHTML='';let disabledReason='';if(verb)disabledReason='Determinado por el verbo seleccionado';else if(construction==='pronomiale')disabledReason='No disponible para los verbos pronominales';else if(!tense||!compoundTenses.includes(tense))disabledReason=tense==='Todos los tiempos'?'Disponible únicamente cuando se selecciona un tiempo compuesto.':'No disponible para un tiempo simple';if(disabledReason){aux.disabled=true;const o=document.createElement('option');o.value='';o.selected=true;o.textContent=disabledReason;aux.appendChild(o);if(help){if(verb)help.textContent='El verbo seleccionado ya determina el verbo auxiliar en Conjugación.';else if(construction==='pronomiale')help.textContent='La construcción pronominal determina el verbo auxiliar en Conjugación.';else help.textContent=tense==='Todos los tiempos'?'Disponible únicamente cuando se selecciona un tiempo compuesto.':'Disponible únicamente con un tiempo compuesto.';}return;}aux.disabled=false;const placeholder=document.createElement('option');placeholder.value='';placeholder.selected=true;placeholder.textContent='- seleccionar -';aux.appendChild(placeholder);auxiliaryOptions.forEach(item=>{const o=document.createElement('option');o.value=U.escapeHtml(item.id);o.textContent=U.escapeHtml(item.label);aux.appendChild(o);});if(help)help.textContent='Este filtro se aplica a todos los tiempos compuestos.';}
  function updatePracticeConstructionOptions(){const construction=document.querySelector('#practiceConstruction'),help=document.querySelector('#practiceConstructionHelp'),verb=U.normalizeVerb(document.querySelector('#practiceVerb')?.value);if(!construction)return;if(verb){const meta=getRecord(verb)||{};const isPronominal=!!(constructionResolver&&typeof constructionResolver.isPronominal==='function'&&constructionResolver.isPronominal(meta));const selectedId=isPronominal?'pronomiale':'non-pronomiale';const selected=constructionOptions.find(item=>item.id===selectedId);const selectedLabel=isPronominal?'Verbos pronominales':'Verbos no pronominales';construction.disabled=true;construction.innerHTML='';const o=document.createElement('option');o.value=selectedId;o.selected=true;o.textContent=selectedLabel;construction.appendChild(o);if(help)help.textContent='Determinada por el verbo seleccionado.';return;}construction.disabled=false;construction.innerHTML='<option value="" selected>-seleccionar-</option>'+constructionOptions.map(item=>'<option value="'+U.escapeHtml(item.id)+'">'+U.escapeHtml(item.label)+'</option>').join('');if(help)help.textContent='Puedes elegir una construcción para afinar el ejercicio.';}
  function updatePracticeGroupState(){const verb=U.normalizeVerb(document.querySelector('#practiceVerb')?.value),group=document.querySelector('#practiceGroup'),help=document.querySelector('#practiceGroupHelp');if(!group)return;if(verb){group.disabled=true;group.innerHTML='<option value="" selected>No necesario: verbo concreto</option>';if(help)help.textContent='';return;}group.disabled=false;const options=categoryResolver&&typeof categoryResolver.categoryOptions==='function'?categoryResolver.categoryOptions():[];const first=options.find(item=>!item.section&&item.id==='all');const sections=[...new Set(options.map(item=>item.section).filter(Boolean))];const optionHtml=item=>'<option value="'+U.escapeHtml(item.id)+'">'+U.escapeHtml(item.label)+'</option>';group.innerHTML=(first?optionHtml(first):'<option value="all">Todos los grupos</option>')+sections.map(section=>'<optgroup label="'+U.escapeHtml(section)+'">'+options.filter(item=>item.section===section).map(optionHtml).join('')+'</optgroup>').join('');const placeholder=document.createElement('option');placeholder.value='';placeholder.selected=true;placeholder.textContent='-seleccionar-';group.insertBefore(placeholder,group.firstChild);if(help)help.textContent='Selecciona una categoría verbal para afinar el ejercicio.';}
  function resetPracticeSession(){session={questions:[],index:0,correct:0,results:[],locked:false};document.querySelector('#practiceSession')?.classList.add('hidden');const input=document.querySelector('#answerInput');if(input){input.value='';input.className='';input.disabled=false;}const feedback=document.querySelector('#practiceFeedback');if(feedback){feedback.className='feedback-box';feedback.textContent='';}const progressText=document.querySelector('#practiceProgressText');if(progressText)progressText.textContent='Pregunta 1 / 20';const progressBar=document.querySelector('#practiceProgressBar');if(progressBar)progressBar.style.width='0%';const criteria=document.querySelector('#practiceCriteria');if(criteria)criteria.textContent='—';}
  function clearPracticeForm(){const verbInput=document.querySelector('#practiceVerb');if(verbInput)verbInput.value='';const tense=document.querySelector('#practiceTense');if(tense){tense.value='';if(tense.options.length)tense.selectedIndex=0;}const group=document.querySelector('#practiceGroup');if(group)group.value='';const construction=document.querySelector('#practiceConstruction');if(construction)construction.value='';const auxiliary=document.querySelector('#practiceAuxiliary');if(auxiliary)auxiliary.value='';const message=document.querySelector('#practiceMessage');if(message){message.className='form-message';message.textContent='';}resetPracticeSession();updatePracticeGroupState();updatePracticeConstructionOptions();updatePracticeAuxiliaryOptions();verbInput?.focus();verbInput?.scrollIntoView({behavior:'smooth',block:'center'});}
  function constructionLabel(id){const option=constructionOptions.find(item=>item.id===id);if(option?.label)return option.label;if(id==='pronomiale')return 'Verbos pronominales';if(id==='non-pronomiale'||id==='non-pronominale')return 'Verbos no pronomiales';return id;}
  async function startSession(){
    const verb=U.normalizeVerb(document.querySelector('#practiceVerb')?.value),
      tense=document.querySelector('#practiceTense')?.value,
      group=document.querySelector('#practiceGroup')?.value,
      construction=document.querySelector('#practiceConstruction')?.value,
      auxiliary=document.querySelector('#practiceAuxiliary')?.value,
      msg=document.querySelector('#practiceMessage');

    if(!msg)return;

    if(!tense){
      msg.className='form-message error';
      msg.textContent='Debes seleccionar un tiempo verbal para comenzar la práctica.';
      return;
    }

    try{
      msg.className='form-message';
      msg.textContent='Generando el ejercicio…';

      const questions=await generarPreguntasDesdeBackend({
        verbId:verb||null,
        tenseIds:[tense],
        group,
        construction,
        auxiliary
      });

      session={
        questions,
        index:0,
        correct:0,
        results:[],
        locked:false
      };

      msg.className='form-message';
      msg.textContent='';
      document.querySelector('#practiceSession')?.classList.remove('hidden');

      const summaryGroup=({
        'all':'Todos los verbos',
        'groupe-1-all':'Todos los verbos del primer grupo',
        'groupe-2-all':'Todos los verbos del segundo grupo',
        'groupe-3-all':'Todos los verbos del tercer grupo'
      }[group]||group||'');
      const summaryConstruction=constructionLabel(construction);

      document.querySelector('#practiceCriteria').textContent=[
        tense,
        summaryGroup,
        summaryConstruction,
        auxiliary||''
      ].filter(Boolean).join(' · ');

      showQuestion();
      document.querySelector('#practiceSession')?.scrollIntoView({
        behavior:'smooth',
        block:'start'
      });
    }catch(error){
      console.error('[COQ] Error al generar la sesión:',error);
      msg.className='form-message error';
      msg.textContent=error?.message||'No se pudo generar el ejercicio.';
    }
  }
  function renderizarPregunta(question){const questionVerb=document.querySelector('#questionVerb'),questionSubject=document.querySelector('#questionSubject');if(questionVerb)questionVerb.textContent=`${question.verb} · ${question.tense}`;if(questionSubject)questionSubject.textContent=question.subject;}
  function showQuestion(){const q=session.questions[session.index];session.locked=false;q.attempts=0;q.firstError='';q.secondError='';q.mustTypeCorrect=false;renderizarPregunta(q);const input=document.querySelector('#answerInput');input.value='';input.className='';input.disabled=false;const fb=document.querySelector('#practiceFeedback');fb.className='feedback-box';fb.textContent='';document.querySelector('#practiceProgressText').textContent=`Pregunta ${session.index+1} / 20`;document.querySelector('#practiceProgressBar').style.width=`${(session.index/20)*100}%`;setTimeout(()=>input.focus(),80);}
  function renderSecondErrorFeedback(q){const fb=document.querySelector('#practiceFeedback');fb.className='feedback-box warn';fb.innerHTML='Respuesta incorrecta.<br>Respuesta correcta: <strong>'+U.escapeHtml(q.displayAnswer||q.answer)+'</strong><br>Escribe la respuesta correcta para continuar.';}
  function validateAnswer(){if(session.locked)return;const q=session.questions[session.index],input=document.querySelector('#answerInput'),value=input.value.trim();if(!value)return;if(q.mustTypeCorrect){if(samePracticeAnswer(value,q)){input.className='success';const fb=document.querySelector('#practiceFeedback');fb.className='feedback-box ok';fb.textContent='✓ Correcto. Pasamos a la siguiente pregunta.';session.locked=true;setTimeout(()=>{session.index++;session.index>=20?finishSession():showQuestion()},650);}else{input.className='error-second';renderSecondErrorFeedback(q);input.focus();}return;}q.attempts++;if(samePracticeAnswer(value,q)){input.className='success';if(q.attempts===1)session.correct+=1;else if(q.attempts===2)session.correct+=0.5;let outcome;if(q.attempts===1)outcome='correct-first';else if(q.attempts===2)outcome='correct-after-first-error';else outcome='correct-after-help';session.results.push({question:q,finalAnswer:value,outcome});session.locked=true;const fb=document.querySelector('#practiceFeedback');fb.className='feedback-box ok';fb.textContent=q.attempts===1?'✓ Correcto.':'✓ Correcto en el segundo intento.';setTimeout(()=>{session.index++;session.index>=20?finishSession():showQuestion()},650);return;}input.className='error-first';if(q.attempts===1){q.firstError=value;const fb=document.querySelector('#practiceFeedback');fb.className='feedback-box warn';fb.textContent='Respuesta incorrecta. Corrige tu respuesta e inténtalo de nuevo.';input.focus();return;}q.secondError=value;q.mustTypeCorrect=true;session.results.push({question:q,finalAnswer:'',outcome:'incorrect-twice',firstError:q.firstError,secondError:q.secondError});renderSecondErrorFeedback(q);input.focus();}
  function selectPracticeQuestions(pool, limit=20){
    if(!Array.isArray(pool)) throw new TypeError('El pool de práctica debe ser una lista.');
    const target=Math.max(0,Math.min(Number(limit)||0,pool.length));
    const unique=[];
    const seen=new Set();
    pool.forEach(question=>{
      if(!question||typeof question!=='object') return;
      const key=[question.verb,question.tense,question.subject,question.answer].map(value=>String(value??'')).join('|');
      if(seen.has(key)) return;
      seen.add(key);
      unique.push(question);
    });
    if(target===0) return [];
    const remaining=unique.slice();
    const selected=[];
    const subjectCounts=new Map();
    let previousSubject=null;
    while(selected.length<target&&remaining.length){
      const minCount=Math.min(...new Set(remaining.map(q=>subjectCounts.get(String(q.subject??''))||0)));
      let candidates=remaining.filter(q=>{
        const subject=String(q.subject??'');
        return (subjectCounts.get(subject)||0)===minCount && subject.toLowerCase()!==String(previousSubject??'').toLowerCase();
      });
      if(!candidates.length){
        candidates=remaining.filter(q=>(subjectCounts.get(String(q.subject??''))||0)===minCount);
      }
      const question=candidates[0];
      const index=remaining.indexOf(question);
      remaining.splice(index,1);
      selected.push(question);
      const subject=String(question.subject??'');
      subjectCounts.set(subject,(subjectCounts.get(subject)||0)+1);
      previousSubject=subject;
    }
    return selected;
  }

  window.COQ_CONJ_PRACTICE_TESTING=Object.freeze({selectPracticeQuestions});
  function finishSession(){document.querySelector('#practiceProgressBar').style.width='100%';const errors=session.results.filter(r=>r.outcome!=='correct-first').length;document.dispatchEvent(new CustomEvent('coq:practice-finished',{detail:{...session,results:session.results,correct:session.results.filter(r=>r.outcome==='correct-first').length,score:session.correct,errors}}));}
  function bind(){document.querySelector('#practiceVerb')?.addEventListener('input',()=>{updatePracticeGroupState();updatePracticeConstructionOptions();updatePracticeAuxiliaryOptions();});document.querySelector('#practiceTense')?.addEventListener('change',updatePracticeAuxiliaryOptions);document.querySelector('#practiceGroup')?.addEventListener('change',updatePracticeAuxiliaryOptions);document.querySelector('#practiceConstruction')?.addEventListener('change',updatePracticeAuxiliaryOptions);document.querySelector('#startPractice')?.addEventListener('click',startSession);document.querySelector('#validateAnswer')?.addEventListener('click',validateAnswer);document.querySelector('#answerInput')?.addEventListener('keydown',e=>{if(e.key==='Enter')validateAnswer();});document.querySelector('#clearVerb')?.addEventListener('click',clearPracticeForm);document.querySelector('#reviewDone')?.addEventListener('click',clearPracticeForm);updatePracticeGroupState();updatePracticeConstructionOptions();updatePracticeAuxiliaryOptions();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind);else bind();
})();
