/* COQ — Utilidades de Conjugación.
 * Expone utilidades puras compartidas por las capas de Conjugaison.
 * Los datos estructurales pertenecen al modelo canónico.
 */
(function(){
  const api={};
  api.normalizeVerb=v=>String(v??'').trim().toLowerCase();
  api.escapeHtml=v=>String(v??'').replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#039;'}[c]));
  api.normalizeAnswerText=v=>String(v??'').trim().toLocaleLowerCase().replace(/\s+/g,' ');
  api.expandPracticeRows=rows=>{
    const expanded=[];
    (rows||[]).forEach(r=>{
      const subjects=String(r?.[0]??'').split('/').map(x=>x.trim()).filter(Boolean);
      if(subjects.length>1)subjects.forEach(subject=>expanded.push({subject,answer:r[1]}));
      else expanded.push({subject:r?.[0],answer:r?.[1]});
    });
    return expanded;
  };
  api.shuffleArray=arr=>{
    const a=[...(arr||[])];
    for(let i=a.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [a[i],a[j]]=[a[j],a[i]];
    }
    return a;
  };

  window.COQ_CONJ_UTILS=api;
})();