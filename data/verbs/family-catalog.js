// COQ — catálogo declarativo de familias morfológicas.
//
// Responsabilidad única:
//   Famille → Pattern
//
// Este módulo NO almacena participios, auxiliares ni formas conjugadas.
// Esos datos pertenecen al verbo. Tampoco contiene categorías pedagógicas.
// La pertenencia a una familia se declara explícitamente: no se infiere por
// sufijo, prefijo ni por el nombre del pattern.
(function(){
  const families={
    'être':{id:'être',patternId:'être',groupe:3,verbs:['être']},
    'avoir':{id:'avoir',patternId:'avoir',groupe:3,verbs:['avoir']},
    'er-regular':{id:'er-regular',patternId:'regular-er',groupe:1,verbs:['parler','se parler']},
    'er-ger':{id:'er-ger',patternId:'er-ger',groupe:1,verbs:['manger']},
    'er-cer':{id:'er-cer',patternId:'er-cer',groupe:1,verbs:['commencer']},
    'er-e-accent':{id:'er-e-accent',patternId:'er-e-accent',groupe:1,verbs:['lever','promener','se lever','se promener']},
    'er-eler-double':{id:'er-eler-double',patternId:'er-eler',groupe:1,verbs:['appeler','rappeler','ficeler']},
    'er-eler-accent':{id:'er-eler-accent',patternId:'er-eler',groupe:1,verbs:['agneler','celer','déceler','receler','ciseler','démanteler','écarteler','encasteler','geler','dégeler','congeler','surgeler','marteler','modeler','peler']},
    'er-eter-double':{id:'er-eter-double',patternId:'er-eter',groupe:1,verbs:['jeter','projeter','rejeter','déjeter','surjeter']},
    'er-eter-accent':{id:'er-eter-accent',patternId:'er-eter',groupe:1,verbs:['acheter','racheter']},
    'er-eter-orthographic':{id:'er-eter-orthographic',patternId:'er-eter',groupe:1,verbs:['bégueter','corseter','crocheter','fileter','fureter','haleter','feuilleter']},
    'yer-oyer-uyer':{id:'yer-oyer-uyer',patternId:'yer',groupe:1,verbs:['nettoyer','essuyer']},
    'yer-ayer':{id:'yer-ayer',patternId:'yer',groupe:1,verbs:[]},
    'ir-regular-2':{id:'ir-regular-2',patternId:'regular-ir',groupe:2,verbs:['finir']},
    'aller-type':{id:'aller-type',patternId:'aller-type',groupe:3,verbs:['aller']},
    'prendre-type':{id:'prendre-type',patternId:'prendre',groupe:3,verbs:['prendre']},
    'faire-type':{id:'faire-type',patternId:'faire',groupe:3,verbs:['faire']},
    'partir-type':{id:'partir-type',patternId:'partir-type',groupe:3,verbs:['partir','sortir','dormir','servir']},
    'suivre-type':{id:'suivre-type',patternId:'suivre-type',groupe:3,verbs:['suivre']},
    'ouvrir-type':{id:'ouvrir-type',patternId:'ouvrir-type',groupe:3,verbs:['ouvrir','rouvrir','couvrir','découvrir','recouvrir','offrir','souffrir']},
    'venir-type':{id:'venir-type',patternId:'venir-type',groupe:3,verbs:['venir','revenir','devenir','parvenir','intervenir','convenir','provenir','survenir','prévenir']},
    'tenir-type':{id:'tenir-type',patternId:'tenir-type',groupe:3,verbs:['tenir','retenir','soutenir','obtenir','maintenir','contenir','détenir','appartenir']},
    'mettre-type':{id:'mettre-type',patternId:'mettre-type',groupe:3,verbs:['mettre','remettre','permettre','promettre','admettre','transmettre','soumettre']},
    'lire-type':{id:'lire-type',patternId:'lire-type',groupe:3,verbs:['lire','relire']},
    'rire-type':{id:'rire-type',patternId:'rire-type',groupe:3,verbs:['rire','sourire']},
    'vivre-type':{id:'vivre-type',patternId:'vivre-type',groupe:3,verbs:['vivre','revivre','survivre']},
    'conduire-type':{id:'conduire-type',patternId:'conduire-type',groupe:3,verbs:['conduire','traduire','produire','construire','détruire','réduire','cuire']},
    'courir-type':{id:'courir-type',patternId:'courir-type',groupe:3,verbs:['courir','accourir','recourir']},
    'mourir-type':{id:'mourir-type',patternId:'mourir-type',groupe:3,verbs:['mourir']},
    'croire-type':{id:'croire-type',patternId:'croire-type',groupe:3,verbs:['croire']},
    'recevoir-type':{id:'recevoir-type',patternId:'recevoir-type',groupe:3,verbs:['recevoir']},
    'connaître-type':{id:'connaître-type',patternId:'connaître-type',groupe:3,verbs:['connaître','reconnaître','méconnaître']},
    'paraître-type':{id:'paraître-type',patternId:'paraître-type',groupe:3,verbs:['paraître','apparaître','disparaître','reparaître','transparaître','comparaître']}
  };
  const catalog={};
  const familyIndex={};
  Object.values(families).forEach(family=>{
    familyIndex[family.id]=Object.freeze([...family.verbs]);
    family.verbs.forEach(infinitif=>{if(catalog[infinitif])throw new Error(`Duplicate family membership for ${infinitif}`);catalog[infinitif]=Object.freeze({familyId:family.id,patternId:family.patternId});});
  });
  const frozenFamilies={};
  Object.entries(families).forEach(([id,family])=>{frozenFamilies[id]=Object.freeze({id:family.id,patternId:family.patternId,groupe:family.groupe,verbs:familyIndex[id]});});
  const familyResolver=Object.freeze({normalize(value){return String(value||'').trim().toLowerCase();},options(){return Object.values(frozenFamilies);},resolve(verb){const entry=familyIndex&&Object.entries(familyIndex).find(([,verbs])=>verbs.includes(this.normalize(verb)));return entry?frozenFamilies[entry[0]]||null:null;}});
  window.COQ_VERB_FAMILIES=Object.freeze(frozenFamilies);
  window.COQ_VERB_FAMILY_CATALOG=Object.freeze(catalog);
  window.COQ_VERB_FAMILY_INDEX=Object.freeze(familyIndex);
  window.COQ_FAMILY_RESOLVER=familyResolver;
})();
