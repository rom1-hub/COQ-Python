/* COQ — Construcción de base local de verbos.
 * Fuente: conjugation-fr / Verbiste.
 * La aplicación no consulta la fuente externa en producción.
 * Este script descarga los dos datasets, los normaliza al contrato COQ y
 * conserva los metadatos locales de construcción/pronominalidad.
 */
const fs=require('fs');
const path=require('path');
const vm=require('vm');

const VERSION='0.3.4';
const BASE=`https://cdn.jsdelivr.net/npm/conjugation-fr@${VERSION}/`;
const URLS={verbs:BASE+'verbs-fr.json',templates:BASE+'conjugation-fr.json'};
const SOURCES_LOCAL=[
  path.resolve(__dirname,'../data/verbs/verbs.js'),
  path.resolve(__dirname,'../data/verbs/verbs-extended.js')
];
const SOURCE_PRONOMINAL=path.resolve(__dirname,'../data/verbs/pronominal-catalog.js');
const OUT=path.resolve(__dirname,'../data/verbs/local-database.js');
const SIMPLE={
  "présent de l'indicatif":['indicative','present'],
  'passé simple':['indicative','simple-past'],
  'imparfait':['indicative','imperfect'],
  'futur simple':['indicative','future'],
  'conditionnel présent':['conditional','present'],
  'subjonctif présent':['subjunctive','present'],
  'subjonctif imparfait':['subjunctive','imperfect'],
  'impératif présent':['imperative','imperative-present']
};

async function getJson(url){
  const response=await fetch(url,{headers:{'user-agent':'COQ-local-database-builder'}});
  if(!response.ok)throw new Error(`${url} HTTP ${response.status}`);
  return response.json();
}
function readLocalMetadata(){
  const window={};
  const merged={};
  for(const source of SOURCES_LOCAL){
    if(!fs.existsSync(source))continue;
    vm.runInNewContext(fs.readFileSync(source,'utf8'),{window,console});
    Object.assign(merged,window.COQ_VERBS||{});
  }
  return merged;
}
function readPronominalCatalog(){
  const window={};
  vm.runInNewContext(fs.readFileSync(SOURCE_PRONOMINAL,'utf8'),{window,console});
  return Array.isArray(window.COQ_PRONOMINAL_CATALOG)?window.COQ_PRONOMINAL_CATALOG:[];
}
function groupOf(template,verb){
  if(template==='fin:ir')return 2;
  if(/:er$/i.test(String(template||'')) && verb!=='aller')return 1;
  return 3;
}
function category(verb,group){
  if(group===1){
    if(/ger$/i.test(verb))return 'GER';
    if(/cer$/i.test(verb))return 'CER';
    if(/eler$/i.test(verb))return 'ELER';
    if(/eter$/i.test(verb))return 'ETER';
    if(/yer$/i.test(verb))return 'YER';
    if(/e[^aeiouyàâäéèêëîïôöùûüÿç]er$/i.test(verb))return 'E_ACUTE_CONSONANT_ER';
    return 'NORMAL';
  }
  if(group===2)return 'IR_SECOND';
  if(/(?:eindre|aindre|oindre)$/i.test(verb))return 'EINDRE_AINDRE_OINDRE';
  if(/uire$/i.test(verb))return 'UIRE';
  if(/aître$/i.test(verb))return 'AITRE';
  if(/dre$/i.test(verb))return 'DRE';
  if(/ir$/i.test(verb))return 'IR_THIRD';
  return 'IRREGULAR';
}
function familyId(group,cat){
  if(group===1)return ({NORMAL:'er-regular',GER:'er-ger',CER:'er-cer',ELER:'er-eler',ETER:'er-eter',YER:'yer','E_ACUTE_CONSONANT_ER':'er-e-accent'})[cat]||'er-regular';
  if(group===2)return 'ir-regular-2';
  return 'groupe-3';
}
function variants(value){
  if(value==null)return [];
  if(Array.isArray(value))return value.flatMap(variants);
  if(typeof value==='object'){
    if('i' in value)return variants(value.i);
    if('form' in value)return variants(value.form);
    if('forme' in value)return variants(value.forme);
    if('value' in value)return variants(value.value);
    return [];
  }
  return [String(value)];
}
function applyTemplate(verb,template,value){
  const parts=String(template||'').split(':');
  const suffix=parts.length>1?parts.slice(1).join(':'):'';
  const forms=variants(value).filter(Boolean);
  const stem=suffix&&String(verb).endsWith(suffix)?String(verb).slice(0,-suffix.length):String(verb);
  return forms.map(form=>stem+form);
}
function bareForm(value){
  const forms=variants(value);
  return String(forms[1]??forms[0]??'');
}
function reflexivePronoun(index,form){
  const pronouns=['me','te','se','nous','vous','se'];
  const p=pronouns[index]||'se';
  return /^[aeiouyàâäéèêëîïôöùûüÿæœh]/i.test(form)?`${p[0]}'${form}`:`${p} ${form}`;
}
function pronominalFormList(values){
  return values.map((value,index)=>reflexivePronoun(index,bareForm(value)));
}
function imperativePronominal(values){
  const pronouns=['toi','nous','vous'];
  return values.slice(0,3).map((value,index)=>`${bareForm(value)}-${pronouns[index]}`);
}
function makePronominalRecord(base,entry){
  const formes={};
  Object.entries(base.formes||{}).forEach(([label,values])=>{
    if(!Array.isArray(values))return;
    if(label==='impératif présent')formes[label]=imperativePronominal(values);
    else if(values.length>=3)formes[label]=pronominalFormList(values.slice(0,6));
  });
  return {
    ...base,
    id:`se-${base.id}`,
    infinitif:entry.infinitif,
    infinitif_base:base.infinitif_base||base.infinitif,
    verbeBase:base.infinitif,
    auxiliaire:'être',
    auxiliaires:['être'],
    pronominal:true,
    construction:'pronomiale',
    formes,
    formeNonPronominale:base.infinitif,
    formePronominale:null,
    source:{name:'COQ-pronominal-catalog',base:'COQ local + conjugation-fr',catalog:true}
  };
}
function normalize(verbs,templates,local,pronominalCatalog){
  const out={};
  Object.entries(verbs||{}).forEach(([verb,meta])=>{
    const template=meta?.t;
    const data=templates?.[template];
    if(!data)return;
    const group=groupOf(template,verb);
    const aux=Array.isArray(meta?.aux)?meta.aux:[meta?.aux||'avoir'];
    const formes={};
    for(const [label,[mode,tense]] of Object.entries(SIMPLE)){
      const rows=data?.[mode]?.[tense];
      if(!Array.isArray(rows)||rows.length<3)continue;
      formes[label]=rows.slice(0,6).map((row)=>applyTemplate(verb,template,row?.i??row)[0]||'');
    }
    const pp=applyTemplate(verb,template,data?.participle?.['past-participle']?.[0]?.i??data?.participle?.['past-participle']?.[0]??'')[0]||null;
    const old=local[verb]||{};
    out[verb]={
      ...old,
      id:verb,
      infinitif:verb,
      infinitif_base:old.infinitif_base||verb,
      groupe:group,
      familyId:old.familyId||familyId(group,category(verb,group)),
      sub_category:old.sub_category||category(verb,group),
      pattern:template,
      patternId:old.patternId||template,
      auxiliaire:old.auxiliaire||aux[0]||null,
      auxiliaires:old.auxiliaires||aux,
      pronominal:old.pronominal===true,
      construction:old.construction||'non-pronomiale',
      participePasse:old.participePasse||pp,
      formes:{...formes,...(old.formes||{})},
      variantes:old.variantes??null,
      exceptions:old.exceptions??null,
      formePronominale:old.formePronominale||null,
      formeNonPronominale:old.formeNonPronominale||null,
      source:{name:'conjugation-fr',version:VERSION,base:'Verbiste',localMetadata:Boolean(local[verb])}
    };
  });
  Object.entries(local).forEach(([verb,record])=>{
    if(!out[verb])out[verb]={...record,source:{name:'COQ-local',localMetadata:true}};
  });
  const missing=[];
  pronominalCatalog.forEach(entry=>{
    const base=out[entry.base];
    if(!base){missing.push(entry.base);return;}
    out[entry.base]={...base,formePronominale:entry.infinitif,formePronominaleDisponible:true};
    const pronominalRecord=makePronominalRecord(base,entry);
    out[entry.infinitif]={
      ...pronominalRecord,
      pronominal:true,
      construction:'pronomiale',
      auxiliaire:'être',
      auxiliaires:['être']
    };
  });
  Object.values(out).forEach(record=>{
    if(record?.pronominal===true){
      record.construction='pronomiale';
      record.auxiliaire='être';
      record.auxiliaires=['être'];
    }
  });
  if(missing.length)console.warn(`[COQ] Pronominales sin verbo base en la fuente: ${missing.join(', ')}`);
  return out;
}
function sortObject(value){return Object.fromEntries(Object.keys(value).sort((a,b)=>a.localeCompare(b,'fr')).map(key=>[key,value[key]]));}
(async()=>{
  const [verbs,templates]=await Promise.all([getJson(URLS.verbs),getJson(URLS.templates)]);
  const local=readLocalMetadata();
  const pronominalCatalog=readPronominalCatalog();
  const data=sortObject(normalize(verbs,templates,local,pronominalCatalog));
  const payload=`/* AUTO-GENERATED — do not edit manually. Source: conjugation-fr ${VERSION} / Verbiste + COQ local metadata + pronominal catalog. */\nwindow.COQ_VERBS=${JSON.stringify(data)};\nwindow.COQ_VERB_DATABASE_VERSION=${JSON.stringify(VERSION)};\n`;
  fs.mkdirSync(path.dirname(OUT),{recursive:true});
  fs.writeFileSync(OUT,payload,'utf8');
  console.log(`Generated ${Object.keys(data).length} verbs at ${OUT}`);
})();
