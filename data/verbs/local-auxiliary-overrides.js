/* COQ — Overrides locales de auxiliar para verbos con doble posibilidad.
 * Solo selecciona el auxiliar utilizado por COQ; no modifica el motor ni las reglas de concordancia.
 */
(function(){
  const overrides={
    sortir:'être',
    monter:'être',
    descendre:'être',
    passer:'être',
    retourner:'être',
    'apparaître':'être'
  };
  Object.keys(overrides).forEach(function(verb){
    const auxiliary=overrides[verb];
    if(window.COQ_VERBS && window.COQ_VERBS[verb]){
      window.COQ_VERBS[verb].auxiliaire=auxiliary;
      if(Array.isArray(window.COQ_VERBS[verb].auxiliaires)){
        window.COQ_VERBS[verb].auxiliaires=[auxiliary];
      }
    }
    if(window.COQ_VERB_DATA && window.COQ_VERB_DATA.verbMeta && window.COQ_VERB_DATA.verbMeta[verb]){
      window.COQ_VERB_DATA.verbMeta[verb].auxiliaire=auxiliary;
    }
  });
})();
