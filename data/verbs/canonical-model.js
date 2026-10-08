/* COQ — Modelo canónico de datos de Conjugaison. */
(function(){
  function deepFreeze(value){if(value&&typeof value==='object'&&!Object.isFrozen(value)){Object.values(value).forEach(deepFreeze);Object.freeze(value);}return value;}
  function normalizeConjugations(item){
    const source=item?.conjugations||item?.formes||{};
    if(!source||typeof source!=='object')return {};
    return Object.fromEntries(Object.entries(source).filter(([key])=>key!=='participePasse'));
  }
  function build(rawVerbs){
    const raw=rawVerbs||{},records={};
    const familyResolver=window.COQ_FAMILY_RESOLVER;
    Object.keys(raw).forEach(key=>{
      const item=raw[key]||{},family=familyResolver?.resolve(key),merged={...item,...(family?{familyId:family.id,patternId:family.patternId,groupe:family.groupe}: {})},baseCandidate=String(merged.verbeBase||merged.infinitif_base||'').trim();
      records[key]=deepFreeze({
        id:merged.id||key,
        infinitif:merged.infinitif||key,
        infinitifBase:merged.infinitif_base||key,
        groupe:Number.isFinite(Number(merged.groupe))?Number(merged.groupe):null,
        familyId:typeof merged.familyId==='string'&&merged.familyId.trim()?merged.familyId.trim():null,
        patternId:typeof merged.patternId==='string'&&merged.patternId.trim()?merged.patternId.trim():null,
        subCategory:merged.sub_category||merged.subCategory||null,
        auxiliaire:merged.auxiliaire||null,
        auxiliaires:Array.isArray(merged.auxiliaires)?merged.auxiliaires:(merged.auxiliaire?[merged.auxiliaire]:[]),
        participePasse:merged.participePasse||merged.formes?.participePasse||null,
        conjugations:normalizeConjugations(merged),
        templates:merged.templates||null,
        construction:merged.construction||'non-pronominale',
        baseVerbId:baseCandidate&&baseCandidate!==key?baseCandidate:null,
        formePronominale:merged.formePronominale||null,
        formeNonPronominale:merged.formeNonPronominale||null,
        pronominal:merged.pronominal===true,
        variantes:merged.variantes??merged.variante??null,
        exceptions:merged.exceptions||null,
        source:merged.source||null
      });
    });
    state.records=Object.freeze(records);
    return api;
  }
  const state={records:{}};
  const api={version:'1.2.0',get(verb){return state.records[String(verb||'').trim()]||null;}};
  Object.defineProperty(api,'records',{enumerable:true,get(){return state.records;}});
  window.COQ_CONJ_DATA_MODEL=api;
  const provider=window.COQ_VERB_PROVIDER_READY;
  window.COQ_CONJ_DATA_MODEL_READY=Promise.resolve(provider||window.COQ_VERBS||{}).then(value=>build(value));
  if(!provider)build(window.COQ_VERBS||{});
})();
