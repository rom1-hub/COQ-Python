/* COQ — Catálogo común de tiempos verbales.
 *
 * La fuente declarativa es COQ_TENSE_RULES. Este módulo solo expone una API
 * inmutable para que motor, consulta y práctica consuman exactamente el mismo
 * catálogo, sin repetir listas de tiempos.
 */
(function(){
  const rules=window.COQ_TENSE_RULES||{};
  const entries=Object.keys(rules).map(name=>({name,...rules[name]})).sort((a,b)=>(a.order??9999)-(b.order??9999));
  const compoundEntries=entries.filter(entry=>entry.type==='composé'&&entry.auxiliaireTemps);
  const simpleEntries=entries.filter(entry=>entry.type==='simple');
  const byName=Object.freeze(entries.reduce((map,entry)=>{map[entry.name]=Object.freeze(entry);return map;},{}));
  const mapping=Object.freeze(compoundEntries.reduce((map,entry)=>{map[entry.name]=entry.auxiliaireTemps;return map;},{}));
  const allTenses=Object.freeze(entries.map(entry=>entry.name));
  const simpleTenses=Object.freeze(simpleEntries.map(entry=>entry.name));
  const compoundTenses=Object.freeze(compoundEntries.map(entry=>entry.name));
  const displayOrder=allTenses;
  function auxiliaryTense(tense){return mapping[tense]||null;}
  function isCompound(tense){return !!byName[tense]&&byName[tense].type==='composé';}
  function isSimple(tense){return !!byName[tense]&&byName[tense].type==='simple';}
  function metadata(tense){return byName[tense]||null;}
  window.COQ_CONJ_COMPOUND={mapping,compoundTenses,simpleTenses,allTenses,displayOrder,auxiliaryTense,isCompound,isSimple,metadata};
})();
