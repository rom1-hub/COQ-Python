/* COQ — Consulta de conjugaciones.
 * Responsabilidad: resolver la consulta, pedir las formas al motor y presentar la tabla.
 */
(function(){
  const U=window.COQ_CONJ_UTILS,P=window.COQ_CONJ_PRONOUNS,dataModel=window.COQ_CONJ_DATA_MODEL,engine=window.COQ_CONJ_ENGINE,C=window.COQ_CONJ_COMPOUND,A=window.COQ_CONJ_AGREEMENT;
  const record=v=>dataModel?.get?.(v)||null;
  const meta=v=>record(v)||{},verbExists=verb=>!!record(verb),isCompound=tense=>!!C?.isCompound?.(tense);
  function counterpart(verb){
    const m=meta(verb);
    if(m.pronominal&&m.baseVerbId&&record(m.baseVerbId))return m.baseVerbId;
    if(!m.pronominal&&m.formePronominale?.infinitif&&record(m.formePronominale.infinitif))return m.formePronominale.infinitif;
    if(!m.pronominal){
      const catalog=Array.isArray(window.COQ_PRONOMINAL_CATALOG)?window.COQ_PRONOMINAL_CATALOG:[];
      const entry=catalog.find(item=>String(item?.base||'').trim()===String(verb||'').trim());
      if(entry?.infinitif&&record(entry.infinitif))return entry.infinitif;
    }
    return null;
  }
  function toggleLabel(verb){return meta(verb).pronominal?'Ver su forma no pronominal':'Ver su forma pronominal';}
  function rowsForTense(verb,tense){return engine?.rowsForLookup?engine.rowsForLookup(verb,tense):[];}
  function stripMetadata(value){return String(value||'').replace(/\s*\([^)]*\)\s*/g,'').trim();}
  function expandSubjects(label,form,tense){
    const raw=String(label||'').trim(),group=P.subjectGroupFor?.(raw),subjects=group||[raw];
    const mode=tense==='subjonctif présent'||tense==='subjonctif passé'?'subjonctif':'normal';
    return subjects.map(subject=>P.subjectForMode(subject,mode,form));
  }
  function normalizedRows(rows,tense,verb){
    const output=[];
    const recordMeta=meta(verb),construction=recordMeta.pronominal?'pronomiale':'non-pronomiale';
    (rows||[]).forEach(row=>{
      const form=String(row?.[1]??'').trim();if(!form)return;
      const rawSubject=String(row?.[0]||'').trim();
      expandSubjects(rawSubject,form,tense).forEach(subject=>{
        const resolvedForm=isCompound(tense)&&engine?.conjugate?.(verb,tense,subject,construction)||form;
        output.push([subject,isCompound(tense)?A.formatLookupCompoundForm(resolvedForm,subject,recordMeta,verb):resolvedForm]);
      });
    });
    return output;
  }
  function addFormAudioButtons(table){const speak=window.Coqaudio&&typeof window.Coqaudio.speak==='function'?window.Coqaudio.speak:null;if(!speak)return;table.querySelectorAll('tbody tr').forEach(row=>{const cells=row.querySelectorAll('td');if(cells.length<2||cells[1].querySelector('[data-speak-form]'))return;const form=cells[1].textContent.trim(),spoken=speechForm(form);if(!spoken)return;const button=document.createElement('button');button.type='button';button.className='btn tiny secondary audio-form-btn';button.dataset.speakForm=spoken;button.setAttribute('aria-label','Escuchar la forma « '+spoken+' »');button.textContent='🔊';button.addEventListener('click',()=>speak(spoken));cells[1].appendChild(button);});}
  function speechForm(form){return stripMetadata(form).replace(/\s+/g,' ').trim();}
  function imperativeDecoration(rows){return rows.map(([subject,form])=>[subject==='tu'||subject==='nous'||subject==='vous'?subject+'*':subject,form]);}
  function renderRowsTable(tense,rows){let displayRows=normalizedRows(rows,tense,window.COQ_CONJ_LOOKUP?.currentVerb||'');if(tense==='impératif présent')displayRows=imperativeDecoration(displayRows);let html='<div class="tense-block"><div class="tense-head"><h3>'+U.escapeHtml(tense)+'</h3><button class="btn tiny secondary" type="button" data-speak-tense="'+U.escapeHtml(tense)+'">🔊</button></div><table class="tense-table"><tbody>';displayRows.forEach(row=>{html+='<tr><td>'+U.escapeHtml(row[0])+'</td><td>'+U.escapeHtml(row[1])+'</td></tr>';});if(tense==='impératif présent')html+='<tr><td colspan="2">* En el imperativo los sujetos desaparecen. No se pronuncian, ni se escriben.</td></tr>';return html+'</tbody></table></div>';}
  function renderConjugation(verb){const result=document.querySelector('#conjResult');if(!result)return;result.classList.remove('hidden');window.COQ_CONJ_LOOKUP.currentVerb=verb;const selectedTense=document.querySelector('#lookupTense')?.value||'',other=counterpart(verb);let html='<div class="card verb-summary"><span class="tag">Consulta</span><div class="conj-result-head"><div><h2 class="verb-summary-title">'+U.escapeHtml(verb)+'</h2><p class="muted">'+(meta(verb).pronominal?'Forma pronominal':'Forma no pronominal')+'</p></div><div class="conj-actions">';if(other)html+='<button class="btn secondary" type="button" id="togglePronominal" data-target-verb="'+U.escapeHtml(other)+'">'+toggleLabel(verb)+'</button>';html+='<button class="btn secondary" type="button" id="speakVerb" aria-label="Escuchar el verbo">🔊 Escuchar el verbo</button><button class="btn tiny secondary" type="button" id="practiceThisVerb">Practicar este verbo</button></div></div></div>';if(selectedTense){const orderIndex=t=>{const i=(C?.displayOrder||[]).indexOf(t);return i===-1?9999:i;};let timesToShow=[];if(selectedTense==='Todos los tiempos'){timesToShow=(C?.displayOrder||[]).filter(t=>engine?.canGenerate?.(verb,t)).map(t=>[t]);}else if(engine?.canGenerate?.(verb,selectedTense))timesToShow=[[selectedTense]];timesToShow.sort((a,b)=>orderIndex(a[0])-orderIndex(b[0]));const generated=timesToShow.map(([tense])=>[tense,rowsForTense(verb,tense)]).filter(([,rows])=>rows?.length);html+='<div class="conj-toolbar"><span class="muted">'+(selectedTense==='Todos los tiempos'?'Todos los tiempos':'Tiempo seleccionado')+'</span></div>';if(!generated.length)html+='<div class="callout">Todavía no hay una conjugación disponible para <strong>'+U.escapeHtml(verb)+'</strong> en el tiempo «'+U.escapeHtml(selectedTense)+'».</div>';else{html+='<div class="conj-times" id="conjTimes">';generated.forEach(([tense,rows])=>{html+=renderRowsTable(tense,rows);});html+='</div>';}}else html+='<div class="callout">Selecciona un tiempo verbal para mostrar la conjugación.</div>';result.innerHTML=html;bindResultControls(verb);}
  function bindResultControls(verb){const speak=window.Coqaudio&&window.Coqaudio.speak?window.Coqaudio.speak:function(){};addFormAudioButtons(document.querySelector('#conjResult'));document.querySelector('#speakVerb')?.addEventListener('click',()=>speak(verb));document.querySelector('#togglePronominal')?.addEventListener('click',e=>{const target=e.currentTarget.dataset.targetVerb;document.querySelector('#lookupVerb').value=target;renderConjugation(target);setLookupMessage((document.querySelector('#lookupTense')?.value==='Todos los tiempos'?'Conjugación de todos los tiempos verbales cargada para «':'Conjugación cargada para «')+target+'».','form-message info');});document.querySelectorAll('[data-speak-tense]').forEach(button=>button.addEventListener('click',()=>{const tense=button.dataset.speakTense,rows=rowsForTense(verb,tense),spoken=[],seen=new Set();rows.forEach(row=>{const subject=stripMetadata(row[0]).trim(),form=speechForm(row[1]);if(!form)return;if(isCompound(tense)&&seen.has(subject))return;seen.add(subject);spoken.push((subject+' '+form).trim());});speak(spoken.join('. '));}));}
  function setLookupMessage(message,kind){const msg=document.querySelector('#lookupMessage');if(msg){msg.className=kind||'';msg.textContent=message||'';}}
  function hideResult(){document.querySelector('#conjResult')?.classList.add('hidden');}
  function lookup(){const input=document.querySelector('#lookupVerb'),tenseSelect=document.querySelector('#lookupTense'),v=U.normalizeVerb(input?.value);if(!v||!verbExists(v)||!tenseSelect?.value){setLookupMessage('','');hideResult();return;}const tense=tenseSelect.value;setLookupMessage(tense==='Todos los tiempos'?'Conjugación de todos los tiempos verbales cargada para «'+v+'».':'Conjugación del «'+tense+'» cargada para «'+v+'».','form-message info');renderConjugation(v);}
  function resetLookup(){const input=document.querySelector('#lookupVerb'),tenseSelect=document.querySelector('#lookupTense');if(input)input.value='';if(tenseSelect){tenseSelect.value='';if(tenseSelect.options.length)tenseSelect.selectedIndex=0;}window.COQ_CONJ_LOOKUP.currentVerb='';setLookupMessage('','');hideResult();input?.focus();}
  function init(){document.querySelector('#lookupTense')?.addEventListener('change',lookup);document.querySelector('#lookupVerb')?.addEventListener('change',lookup);document.querySelector('#lookupVerb')?.addEventListener('keydown',e=>{if(e.key==='Enter')lookup();});document.querySelectorAll('.suggestion').forEach(button=>button.addEventListener('click',()=>{document.querySelector('#lookupVerb').value=button.dataset.verb;lookup();}));document.querySelector('#resetLookup')?.addEventListener('click',resetLookup);const verbInput=document.getElementById('lookupVerb');if(verbInput){let timer=null;verbInput.addEventListener('input',()=>{clearTimeout(timer);timer=setTimeout(()=>{const v=U.normalizeVerb(verbInput.value);if(v&&verbExists(v)&&document.querySelector('#lookupTense')?.value)lookup();else{hideResult();setLookupMessage('','');}},300);});}}
  window.COQ_CONJ_LOOKUP={lookup,renderConjugation,init,normalizedRows,currentVerb:''};
})();
