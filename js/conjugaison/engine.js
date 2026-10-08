/* COQ — Motor de conjugación.
 * Responsabilidad exclusiva: resolver y generar formas; la UI decide cómo presentarlas.
 */
(function(){
  const P=window.COQ_CONJ_PRONOUNS,C=window.COQ_CONJ_COMPOUND,A=window.COQ_CONJ_AGREEMENT,R=window.COQ_PATTERN_REGISTRY,dataModel=window.COQ_CONJ_DATA_MODEL,constructionResolver=window.COQ_CONSTRUCTION_RESOLVER,auxiliaryResolver=window.COQ_AUXILIARY_RESOLVER,S=P.subjectSets;
  function canonicalRecord(verb){return dataModel&&typeof dataModel.get==='function'?dataModel.get(verb):null;}
  function baseKey(verb){const canonical=canonicalRecord(verb);if(canonical&&canonical.baseVerbId)return canonical.baseVerbId;return verb;}
  function record(verb){return canonicalRecord(verb);}
  function formValue(row){if(Array.isArray(row))return row[1]||null;if(row==null)return null;if(typeof row==='string')return row.trim()||null;if(typeof row==='object')return row.form||row.forme||row.value||null;return null;}
  function externalSimple(verb,tense,subject){
    const r=record(verb),forms=r?.conjugations?.[tense];
    if(!Array.isArray(forms)||!forms.length)return null;
    const base=P.baseSubject(subject);
    if(tense==='impératif présent'){
      const imperativeIndex={tu:0,nous:1,vous:2};
      const index=imperativeIndex[base];
      return Number.isInteger(index)&&forms[index]?formValue(forms[index]):null;
    }
    const exact=forms.find(row=>Array.isArray(row)&&String(row?.[0]||'').trim()===base);
    if(exact)return formValue(exact);
    const grouped={
      il:['il/elle/on','il'],elle:['il/elle/on','elle'],on:['il/elle/on','on'],
      ils:['ils/elles','ils'],elles:['ils/elles','elles']
    };
    const candidates=grouped[base];
    if(candidates){const row=forms.find(item=>Array.isArray(item)&&candidates.includes(String(item?.[0]||'').trim()));if(row)return formValue(row);}
    const index={je:0,tu:1,il:2,elle:2,on:2,nous:3,vous:4,ils:5,elles:5}[base];
    return Number.isInteger(index)&&forms[index]?formValue(forms[index]):null;
  }
  function generatedSimple(verb,tense,subject){const r=record(verb);if(!r||!R||typeof R.generate!=='function')return null;return R.generate(r.patternId,r.infinitifBase,P.baseSubject(subject),tense,r);}
  function simpleForm(verb,tense,subject){
    const external=externalSimple(verb,tense,subject);
    if(external!=null)return external;
    return generatedSimple(verb,tense,subject);
  }
  function participle(verb){const r=record(baseKey(verb));return r&&r.participePasse?r.participePasse:null;}
  function isPronominalRecord(r,construction){
    return r?.pronominal===true||r?.construction==='pronomiale'||r?.construction==='pronominale'||construction==='pronomiale'||construction==='pronominale';
  }
  function agreementBase(r,base){
    return r?.baseVerbId||r?.infinitifBase||r?.infinitif_base||r?.verbeBase||base;
  }
  function applyAgreement(pp,info,base,isPronominal,auxiliary,recordMeta){
    if(!A)return pp;
    if(isPronominal){
      const ruleBase=agreementBase(recordMeta,base);
      const rule=window.COQ_PRONOMINAL_RULES?.[ruleBase];
      if(rule?.accord==='sujet'&&typeof A.applySubjectAgreement==='function')return A.applySubjectAgreement(pp,{gender:info.gender,number:info.number});
      return typeof A.stripAgreementMarkers==='function'?A.stripAgreementMarkers(pp):pp;
    }
    if(auxiliary==='être'&&typeof A.applySubjectAgreement==='function')return A.applySubjectAgreement(pp,{gender:info.gender,number:info.number});
    return typeof A.stripAgreementMarkers==='function'?A.stripAgreementMarkers(pp):pp;
  }
  function compoundForm(verb,tense,subject,construction){if(!C||!C.isCompound(tense))return null;const r=record(verb);if(!r)return null;const base=baseKey(verb),info=P.subjectInfo(subject),isPronominal=isPronominalRecord(r,construction),auxiliary=auxiliaryResolver?.resolve(r,constructionResolver);if(!auxiliary)return null;const auxTense=C.auxiliaryTense(tense),auxForm=simpleForm(auxiliary,auxTense,info.base);if(!auxForm)return null;const pp=participle(base);if(!pp)return null;const agreed=applyAgreement(pp,info,base,isPronominal,auxiliary,r);if(isPronominal){const pron=P.pronounFor(info.base);if(!pron)return null;const contracted=P.contractPronoun(pron,auxForm);return (contracted.endsWith("'")?contracted+auxForm:contracted+' '+auxForm)+' '+agreed;}return auxForm+' '+agreed;}
  function conjugate(verb,tense,subject,construction){const r=record(verb);if(!r)return null;const constructionId=construction||((constructionResolver?.isPronominal(r))?'pronomiale':'non-pronomiale');const isPronominal=isPronominalRecord(r,constructionId);if(C&&C.isCompound(tense))return compoundForm(verb,tense,subject,constructionId);let form=simpleForm(baseKey(verb),tense,subject);if(form==null)return null;if(isPronominal){if(tense==='impératif présent'){const imperativePronoun=P.imperativePronounFor?.(subject);if(!imperativePronoun)return form;return form+'-'+imperativePronoun;}form=P.apply(subject,form);}return form;}
  function practiceCompoundSubjects(tense){return tense==='subjonctif passé'?S.subjonctifPractice:S.practice;}
  function rowsForLookup(verb,tense){const r=record(verb);if(!r)return [];if(!(C&&C.isCompound(tense)))return rowsFor(verb,tense);const construction=isPronominalRecord(r)?'pronomiale':'non-pronomiale';const subjects=tense==='subjonctif passé'?S.subjonctifPractice:S.lookupCompound;return subjects.map(subject=>[subject,conjugate(verb,tense,P.baseSubject(subject),construction)]).filter(row=>row[1]!=null);}
  function rowsFor(verb,tense){const r=record(verb);if(!r)return [];if(!(C?.isSimple?.(tense)||C?.isCompound?.(tense)))return [];const construction=isPronominalRecord(r)?'pronomiale':'non-pronomiale';if(C.isCompound(tense))return practiceCompoundSubjects(tense).map(subject=>[subject,conjugate(verb,tense,subject,construction)]).filter(row=>row[1]!=null);const fallback=tense==='impératif présent'?S.imperative:tense==='subjonctif présent'?S.subjonctifSimpleFallback:S.simpleFallback,rows=fallback.map(subject=>[subject,'']);return rows.map(row=>{const subject=String(row[0]).split('/').map(x=>x.trim()).filter(Boolean)[0],generated=conjugate(verb,tense,subject,construction);return generated!=null?[row[0],generated]:null;}).filter(Boolean);}
  function rowsForConstruction(verb,tense,construction){const r=record(verb);if(!r)return [];if(C?.isCompound?.(tense))return practiceCompoundSubjects(tense).map(subject=>[subject,conjugate(verb,tense,subject,construction)]).filter(row=>row[1]!=null);if(!C?.isSimple?.(tense))return [];const fallback=tense==='impératif présent'?S.imperative:tense==='subjonctif présent'?S.subjonctifConstructionFallback:S.simpleConstructionFallback,rows=fallback.map(subject=>[subject,'']);return rows.map(row=>{const subject=String(row[0]).split('/').map(x=>x.trim()).filter(Boolean)[0],generated=conjugate(verb,tense,subject,construction);return generated!=null?[row[0],generated]:null;}).filter(Boolean);}
  function canGenerate(verb,tense){const r=record(verb);if(!r)return false;if(C?.isCompound?.(tense))return !!auxiliaryResolver?.resolve(r,constructionResolver);return !!C?.isSimple?.(tense)&&(!!R&&typeof R.generate==='function'||!!r.conjugations?.[tense]);}
  window.COQ_CONJ_ENGINE={conjugate,rowsFor,rowsForLookup,rowsForConstruction,canGenerate,subjectInfo:P.subjectInfo};
})();
