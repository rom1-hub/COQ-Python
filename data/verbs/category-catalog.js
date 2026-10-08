// COQ — catálogo pedagógico de categorías de grupos verbales.
(function(){
  const commonThirdGroupVerbs=[
    'être','avoir','aller','faire','dire','voir','savoir','pouvoir','vouloir','devoir',
    'venir','prendre','mettre','tenir','partir','sortir','dormir','lire','écrire','vivre',
    'suivre','croire','connaître','comprendre','apprendre','attendre','entendre','répondre','perdre','recevoir',
    'ouvrir','offrir','courir','mourir','naître','boire','rire','conduire','construire','produire',
    'traduire','découvrir','couvrir','sentir','servir','revenir','devenir','reprendre','battre','résoudre'
  ];
  const categories=[
    {id:'all',label:'Todos los grupos',section:null,groupes:null,familyIds:null,subCategories:null},
    {id:'groupe-1-all',label:'Todos los verbos',section:'Primer grupo',groupes:[1],familyIds:null,subCategories:null},
    {id:'regular-er',label:'Normales',section:'Primer grupo',groupes:[1],familyIds:['er-regular'],subCategories:['NORMAL']},
    {id:'er-ger',label:'-GER',section:'Primer grupo',groupes:[1],familyIds:['er-ger'],subCategories:['GER']},
    {id:'er-cer',label:'-CER',section:'Primer grupo',groupes:[1],familyIds:['er-cer'],subCategories:['CER']},
    {id:'er-eler',label:'-ELER',section:'Primer grupo',groupes:[1],familyIds:['er-eler-double','er-eler-accent'],subCategories:['ELER']},
    {id:'er-eter',label:'-ETER',section:'Primer grupo',groupes:[1],familyIds:['er-eter-double','er-eter-accent','er-eter-orthographic'],subCategories:['ETER']},
    {id:'yer',label:'-YER',section:'Primer grupo',groupes:[1],familyIds:['yer-oyer-uyer','yer-ayer'],subCategories:['YER']},
    {id:'er-e-accent',label:'-E (È) + consonante + ER',section:'Primer grupo',groupes:[1],familyIds:['er-e-accent'],subCategories:['E_ACUTE_CONSONANT_ER']},
    {id:'groupe-2-all',label:'Todos los verbos',section:'Segundo grupo',groupes:[2],familyIds:null,subCategories:null},
    {id:'groupe-3-all',label:'Todos los verbos',section:'Tercer grupo',groupes:[3],familyIds:null,subCategories:null},
    {id:'groupe-3-dre',label:'-DRE',section:'Tercer grupo',groupes:[3],familyIds:null,subCategories:['DRE'],endings:['dre']},
    {id:'groupe-3-ir',label:'-IR',section:'Tercer grupo',groupes:[3],familyIds:null,subCategories:['IR_THIRD'],endings:['ir']},
    {id:'groupe-3-uire',label:'-UIRE',section:'Tercer grupo',groupes:[3],familyIds:['conduire-type'],subCategories:['UIRE'],endings:['uire']},
    {id:'groupe-3-aitre',label:'-AÎTRE',section:'Tercer grupo',groupes:[3],familyIds:['connaître-type','paraître-type'],subCategories:['AITRE'],endings:['aître']},
    {id:'groupe-3-eindre-aindre-oindre',label:'-EINDRE / -AINDRE / -OINDRE',section:'Tercer grupo',groupes:[3],familyIds:null,subCategories:['EINDRE_AINDRE_OINDRE'],endings:['eindre','aindre','oindre']},
    {id:'groupe-3-common',label:'Verbos más comunes',section:'Tercer grupo',groupes:[3],familyIds:null,subCategories:null,verbIds:commonThirdGroupVerbs}
  ];
  const frozen=Object.freeze(categories.map(category=>Object.freeze({...category,
    groupes:category.groupes?Object.freeze([...category.groupes]):null,
    familyIds:category.familyIds?Object.freeze([...category.familyIds]):null,
    subCategories:category.subCategories?Object.freeze([...category.subCategories]):null,
    endings:category.endings?Object.freeze([...category.endings]):null,
    verbIds:category.verbIds?Object.freeze([...category.verbIds]):null
  })));
  const canonicalRecord=verb=>{
    const records=window.COQ_CONJ_DATA_MODEL?.records||{};
    return records[String(verb||'').trim().toLowerCase()]||null;
  };
  function categoryOptions(){
    return frozen.map(category=>Object.freeze({...category,
      groupes:category.groupes?Object.freeze([...category.groupes]):null,
      familyIds:category.familyIds?Object.freeze([...category.familyIds]):null,
      subCategories:category.subCategories?Object.freeze([...category.subCategories]):null,
      endings:category.endings?Object.freeze([...category.endings]):null,
      verbIds:category.verbIds?Object.freeze([...category.verbIds]):null
    }));
  }
  function matchesCategory(verb,categoryId){
    if(!categoryId||categoryId==='all')return true;
    const category=frozen.find(item=>item.id===categoryId);if(!category)return false;
    const record=canonicalRecord(verb);if(!record)return false;
    const groupeMatches=!category.groupes?.length||category.groupes.includes(Number(record.groupe));
    if(!groupeMatches)return false;
    if(category.verbIds?.length){
      const infinitif=String(record.infinitif||verb||'').trim().toLowerCase();
      return category.verbIds.includes(infinitif);
    }
    if(category.familyIds?.includes(record.familyId))return true;
    if(category.subCategories?.includes(record.subCategory))return true;
    if(category.endings?.length){
      const infinitif=String(record.infinitif||verb||'').trim().toLowerCase();
      if(category.endings.some(ending=>infinitif.endsWith(ending)))return true;
    }
    if(category.id==='groupe-1-all'||category.id==='groupe-2-all'||category.id==='groupe-3-all')return true;
    return false;
  }
  window.COQ_VERB_CATEGORY_CATALOG=frozen;
  window.COQ_CATEGORY_RESOLVER=Object.freeze({categoryOptions,matchesCategory});
})();
