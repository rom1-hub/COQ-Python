/* COQ — Suite de regresión para la arquitectura de Conjugaison.
 * No se carga en producción. Se puede importar desde DevTools para ejecutar
 * comprobaciones contra el motor central, el registro de patrones, el catálogo
 * de tiempos y la construcción de filas de consulta/práctica.
 */
(function(){
  function assert(name,actual,expected,results){const ok=actual===expected;results.push({name,actual,expected,ok});return ok;}
  function assertTruthy(name,value,results){const ok=!!value;results.push({name,actual:ok?'presente':'ausente',expected:'presente',ok});return ok;}
  function run(){
    const engine=window.COQ_CONJ_ENGINE,registry=window.COQ_PATTERN_REGISTRY,resolver=window.COQ_PATTERN_RESOLVER,C=window.COQ_CONJ_COMPOUND,lookup=window.COQ_CONJ_LOOKUP,results=[];
    if(!engine)return [{name:'motor disponible',actual:'ausente',expected:'presente',ok:false}];
    if(!registry)return [{name:'registro disponible',actual:'ausente',expected:'presente',ok:false}];
    assertTruthy('registro expone generate()',typeof registry.generate==='function',results);
    assertTruthy('registro expone get()',typeof registry.get==='function',results);
    assertTruthy('resolutor expone resolveRecord()',resolver&&typeof resolver.resolveRecord==='function',results);
    assert('capa Proxy heredada eliminada',resolver&&typeof resolver.installResolverViews,'undefined',results);
    assertTruthy('motor expone conjugate()',typeof engine.conjugate==='function',results);
    assertTruthy('motor expone rowsForLookup()',typeof engine.rowsForLookup==='function',results);
    assertTruthy('catálogo de tiempos disponible',C&&Array.isArray(C.allTenses),results);
    assert('11 tiempos declarados',C?.allTenses?.length,11,results);
    assert('5 tiempos compuestos',C?.compoundTenses?.length,5,results);
    assert('6 tiempos simples',C?.simpleTenses?.length,6,results);
    assertTruthy('consulta expone normalizedRows()',lookup&&typeof lookup.normalizedRows==='function',results);

    const catalog=window.COQ_VERBS||{},patterns=window.COQ_VERB_PATTERNS||{};
    Object.keys(patterns).forEach(pattern=>assert('patrón del catálogo tiene registro · '+pattern,!!registry.get(pattern),true,results));
    const registeredPatterns=new Set(Object.values(catalog).map(v=>v&&v.pattern).filter(Boolean));
    registeredPatterns.forEach(pattern=>assert('patrón usado por verbos tiene generador · '+pattern,typeof registry.get(pattern)?.generate==='function',true,results));

    const historicalCatalogVerbs=['nettoyer','essuyer','partir','sortir','dormir','servir','suivre','ouvrir','rouvrir','couvrir','découvrir','recouvrir','offrir','souffrir','venir','revenir','devenir','parvenir','intervenir','convenir','provenir','survenir','prévenir','tenir','retenir','soutenir','obtenir','maintenir','contenir','détenir','appartenir','mettre','remettre','permettre','promettre','admettre','transmettre','soumettre','lire','relire','rire','sourire','vivre','revivre','survivre','conduire','traduire','produire','construire','détruire','réduire','cuire','courir','accourir','recourir','mourir','croire','recevoir','connaître','reconnaître','méconnaître','paraître','apparaître','disparaître','reparaître','transparaître','comparaître'];
    historicalCatalogVerbs.forEach(function(verb){assert('catálogo contiene · '+verb,Object.prototype.hasOwnProperty.call(catalog,verb),true,results);if(catalog[verb])assert('patrón registrado · '+verb,typeof catalog[verb].pattern==='string'&&!!registry.get(catalog[verb].pattern),true,results);});

    const familyAssignments=[['être','être'],['partir','partir-type'],['sortir','partir-type'],['dormir','partir-type'],['servir','partir-type'],['suivre','suivre-type'],['ouvrir','ouvrir-type'],['venir','venir-type'],['prévenir','venir-type'],['tenir','tenir-type'],['mettre','mettre-type'],['lire','lire-type'],['rire','rire-type'],['vivre','vivre-type'],['conduire','conduire-type'],['courir','courir-type'],['mourir','mourir-type'],['croire','croire-type'],['recevoir','recevoir-type'],['connaître','connaître-type'],['paraître','paraître-type'],['aller','aller-type']];
    familyAssignments.forEach(([verb,pattern])=>assert('asignación canónica · '+verb,catalog[verb]?.pattern,pattern,results));
    assert('auxiliar correcto de être',catalog['être']?.auxiliaire,'avoir',results);

    const simple=[['appeler',"présent de l'indicatif",'je','appelle'],['appeler',"présent de l'indicatif",'nous','appelons'],['acheter',"présent de l'indicatif",'je','achète'],['jeter',"présent de l'indicatif",'je','jette'],['feuilleter',"présent de l'indicatif",'je','feuillette'],['nettoyer',"présent de l'indicatif",'je','nettoie'],['essuyer',"présent de l'indicatif",'ils','essuient'],['partir',"présent de l'indicatif",'je','pars'],['venir',"présent de l'indicatif",'nous','venons'],['tenir',"présent de l'indicatif",'vous','tenez'],['conduire',"présent de l'indicatif",'je','conduis'],['aller',"présent de l'indicatif",'je','vais'],['aller','subjonctif présent','je','aille'],['faire',"présent de l'indicatif",'je','fais'],['faire',"présent de l'indicatif",'vous','faites'],['faire','imparfait','nous','faisions'],['faire','futur simple','ils','feront'],['faire','conditionnel présent','je','ferais'],['faire','subjonctif présent','je','fasse'],['faire','impératif présent','vous','faites'],['connaître',"présent de l'indicatif",'je','connais'],['connaître',"présent de l'indicatif",'il','connaît'],['paraître',"présent de l'indicatif",'je','parais'],['paraître',"présent de l'indicatif",'ils','paraissent']];
    simple.forEach(item=>assert(item[0]+' · '+item[1]+' · '+item[2],engine.conjugate(item[0],item[1],item[2],'non-pronominale'),item[3],results));

    const registryFamilies=[['regular-er','parler',"présent de l'indicatif",'je','parle'],['regular-ir','finir',"présent de l'indicatif",'nous','finissons'],['regular-re','vendre',"présent de l'indicatif",'ils','vendent'],['er-ger','manger',"présent de l'indicatif",'nous','mangeons'],['er-cer','commencer',"présent de l'indicatif",'nous','commençons'],['er-eler','appeler',"présent de l'indicatif",'je','appelle'],['er-eter','jeter',"présent de l'indicatif",'je','jette'],['er-e-accent','lever',"présent de l'indicatif",'je','lève'],['yer','nettoyer',"présent de l'indicatif",'je','nettoie'],['avoir','avoir',"présent de l'indicatif",'je','ai'],['être','être',"présent de l'indicatif",'je','suis'],['prendre','prendre',"présent de l'indicatif",'je','prends'],['partir-type','partir',"présent de l'indicatif",'je','pars'],['suivre-type','suivre',"présent de l'indicatif",'nous','suivons'],['ouvrir-type','ouvrir',"présent de l'indicatif",'je','ouvre'],['venir-type','venir',"présent de l'indicatif",'je','viens'],['tenir-type','tenir',"présent de l'indicatif",'nous','tenons'],['aller-type','aller',"présent de l'indicatif",'je','vais'],['mettre-type','mettre',"présent de l'indicatif",'je','mets'],['lire-type','lire',"présent de l'indicatif",'je','lis'],['rire-type','rire',"présent de l'indicatif",'je','ris'],['vivre-type','vivre',"présent de l'indicatif",'je','vis'],['conduire-type','conduire',"présent de l'indicatif",'je','conduis'],['courir-type','courir',"présent de l'indicatif",'je','cours'],['mourir-type','mourir',"présent de l'indicatif",'je','meurs'],['croire-type','croire',"présent de l'indicatif",'je','crois'],['recevoir-type','recevoir',"présent de l'indicatif",'je','reçois'],['connaître-type','connaître',"présent de l'indicatif",'je','connais'],['paraître-type','paraître',"présent de l'indicatif",'je','parais'],['faire','faire',"présent de l'indicatif",'je','fais']];
    registryFamilies.forEach(item=>assert('registro · '+item[0]+' · '+item[1]+' · '+item[2]+' · '+item[3],registry.generate(item[0],item[1],item[3],item[2]),item[4],results));

    const representative=[['regular-er','parler','imparfait','je','parlais'],['regular-er','parler','futur simple','nous','parlerons'],['regular-er','parler','conditionnel présent','vous','parleriez'],['regular-er','parler','subjonctif présent','ils','parlent'],['regular-er','parler','impératif présent','tu','parle'],['regular-ir','finir','imparfait','nous','finissions'],['regular-ir','finir','subjonctif présent','ils','finissent'],['regular-re','vendre','imparfait','je','vendais'],['regular-re','vendre','futur simple','je','vendrai'],['regular-re','vendre','conditionnel présent','je','vendrais'],['regular-re','vendre','subjonctif présent','je','vende'],['regular-re','vendre','impératif présent','tu','vends'],['er-ger','manger','imparfait','je','mangeais'],['er-cer','commencer','imparfait','nous','commencions'],['er-e-accent','lever','futur simple','je','lèverai'],['er-eler','appeler','futur simple','je','appellerai'],['er-eter','jeter','futur simple','je','jetterai'],['yer','nettoyer','subjonctif présent','nous','nettoyions'],['avoir','avoir','subjonctif présent','nous','ayons'],['être','être','subjonctif présent','nous','soyons'],['être','être','subjonctif présent','elles','soient'],['prendre','prendre','subjonctif présent','ils','prennent'],['faire','faire','impératif présent','nous','faisons'],['connaître-type','connaître','imparfait','je','connaissais'],['paraître-type','paraître','futur simple','je','paraîtrai']];
    representative.forEach(item=>assert('tiempo representativo · '+item[0]+' · '+item[2]+' · '+item[3],registry.generate(item[0],item[1],item[3],item[2]),item[4],results));

    const inferred=[['parler',"présent de l'indicatif",'je','parle'],['parler','futur simple','nous','parlerons'],['se parler','passé composé','je (masculin singulier)','me suis parlé']];
    inferred.forEach(item=>assert('verbo inféré · '+item[0]+' · '+item[1]+' · '+item[2],engine.conjugate(item[0],item[1],item[2],item[0].startsWith('se ')?'pronominale':'non-pronominale'),item[3],results));
    assert('IR desconocido no se infiere',resolver.resolveRecord('zzzzir'),null,results);assert('RE desconocido no se infiere',resolver.resolveRecord('zzzzre'),null,results);assertTruthy('ER desconocido sí se resuelve',resolver.resolveRecord('zzzzparler'),results);assert('ER desconocido genera presente',engine.conjugate('zzzzparler',"présent de l'indicatif",'je','non-pronominale'),'zzzzparle',results);

    const compounds=[['être','passé composé','je (masculin singulier)','ai été'],['être','plus-que-parfait','elle (féminin singulier)','avait été'],['être','conditionnel passé','nous (masculin pluriel)','aurions été'],['être','futur antérieur','elles','auront été'],['être','subjonctif passé','que je (féminin singulier)','aie été'],['partir','passé composé','je (masculin singulier)','suis parti'],['partir','passé composé','je (féminin singulier)','suis partie'],['partir','passé composé','vous (masculin pluriel)','êtes partis'],['partir','plus-que-parfait','elle (féminin singulier)','était partie'],['partir','conditionnel passé','elle (féminin singulier)','serait partie'],['partir','futur antérieur','elles','seront parties'],['partir','subjonctif passé','que je (féminin singulier)','sois partie'],['faire','passé composé','je (masculin singulier)','ai fait']];
    compounds.forEach(item=>assert(item[0]+' · '+item[1]+' · '+item[2],engine.conjugate(item[0],item[1],item[2],'non-pronominale'),item[3],results));

    const pronominal=[['se lever','passé composé','je (féminin singulier)','me suis levée'],['se lever','plus-que-parfait','elle (féminin singulier)',"s'était levée"],['se lever','conditionnel passé','ils','se seraient levés'],['se lever','futur antérieur','vous (féminin singulier)','vous serez levée'],['se parler','subjonctif passé','que je (féminin singulier)','me sois parlé']];
    pronominal.forEach(item=>assert(item[0]+' · '+item[1]+' · '+item[2],engine.conjugate(item[0],item[1],item[2],'pronominale'),item[3],results));

    const normalized=lookup.normalizedRows([['je','parle'],['il/elle/on','parle'],['ils/elles','parlent']],"présent de l'indicatif");
    assert('consulta separa grupos de sujetos',normalized.length,6,results);

    const practice=window.COQ_CONJ_PRACTICE;
    if(practice){
      const mixed=practice.buildQuestions('', 'passé composé','Todos','', 'avec-avoir-et-etre');
      assert('filtro AVOIR et ÊTRE devuelve preguntas',mixed.length>0,true,results);
      assert('filtro AVOIR et ÊTRE excluye pronominales',mixed.some(q=>resolver.resolveRecord(q.verb)?.pronominal===true),false,results);
    }
    return results;
  }
  window.COQ_CONJ_REGRESSION={run};
})();
