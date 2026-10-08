/* COQ — Pronombres y construcciones pronominales.
 * Capa de datos/reglas, sin interfaz.
 */
(function(){
  const subjectPronouns=Object.freeze({
    je:'me', tu:'te', il:'se', elle:'se', on:'se', nous:'nous', vous:'vous', ils:'se', elles:'se'
  });
  const subjectBase=Object.freeze({
    "j'":'je', je:'je', tu:'tu', il:'il', elle:'elle', on:'on', nous:'nous', vous:'vous', ils:'ils', elles:'elles',
    "que je":'je', "que j'":'je', "que tu":'tu', "qu'il":'il', "qu'elle":'elle', "qu'on":'on',
    "qu'il/elle/on":'il', "que nous":'nous', "que vous":'vous', "qu'ils":'ils', "qu'elles":'elles', "qu'ils/elles":'ils'
  });
  const subjectVariants=Object.freeze({
    je:Object.freeze(['je (féminin singulier)','je (masculin singulier)']),
    tu:Object.freeze(['tu (féminin singulier)','tu (masculin singulier)']),
    il:Object.freeze(['il']),
    elle:Object.freeze(['elle']),
    on:Object.freeze(['on (masculin singulier)','on (masculin pluriel)','on (féminin pluriel)']),
    nous:Object.freeze(['nous (masculin pluriel)','nous (féminin pluriel)']),
    vous:Object.freeze(['vous (masculin singulier)','vous (féminin singulier)','vous (masculin pluriel)','vous (féminin pluriel)']),
    ils:Object.freeze(['ils']),
    elles:Object.freeze(['elles'])
  });
  const imperativePronouns=Object.freeze({tu:'toi',nous:'nous',vous:'vous'});
  const subjonctifSubjects=Object.freeze({je:'que je',tu:'que tu',il:"qu'il",elle:"qu'elle",on:"qu'on",nous:'que nous',vous:'que vous',ils:"qu'ils",elles:"qu'elles"});
  const subjectGroups=Object.freeze({
    'il/elle/on':Object.freeze(['il','elle','on']),
    "qu'il/elle/on":Object.freeze(["qu'il","qu'elle","qu'on"]),
    'ils/elles':Object.freeze(['ils','elles']),
    "qu'ils/elles":Object.freeze(["qu'ils","qu'elles"])
  });
  const subjectSets=Object.freeze({
    lookupCompound:Object.freeze(['je','tu','il','elle','on','nous','vous','ils','elles']),
    practice:Object.freeze(['je','tu','il','elle','on','nous','vous','ils','elles']),
    subjonctifPractice:Object.freeze(['que je','que tu',"qu'il","qu'elle","qu'on",'que nous','que vous',"qu'ils","qu'elles"]),
    simpleFallback:Object.freeze(['je','tu','il/elle/on','nous','vous','ils/elles']),
    subjonctifSimpleFallback:Object.freeze(['que je','que tu',"qu'il/elle/on",'que nous','que vous',"qu'ils/elles"]),
    subjonctifConstructionFallback:Object.freeze(['que je','que tu',"qu'il",'que nous','que vous',"qu'ils"]),
    simpleConstructionFallback:Object.freeze(['je','tu','il','elle','on','nous','vous','ils','elles']),
    imperative:Object.freeze(['tu','nous','vous'])
  });
  const VOWELS=/^[aeiouàâäéèêëîïôöùûüÿœæ]/i;
  const VOWELS_OR_MUTE_H=/^[aeiouàâäéèêëîïôöùûüÿœæh]/i;
  function baseSubject(label){
    const s=String(label||'').trim();
    const withoutGender=s.replace(/\s*\([^)]*\)\s*$/,'').trim();
    if(subjectBase[s]) return subjectBase[s];
    if(subjectBase[withoutGender]) return subjectBase[withoutGender];
    const normalized=withoutGender.replace(/^qu['’]/,'').replace(/^que\s+/,'').replace(/^q['’]/,'').trim();
    if(subjectBase[normalized]) return subjectBase[normalized];
    const first=withoutGender.split(/\s+/)[0].split('/')[0];
    const normalizedFirst=first.replace(/^qu['’]/,'').replace(/^que\s*/,'').replace(/^q['’]/,'');
    return subjectBase[first]||subjectBase[normalizedFirst]||normalizedFirst;
  }
  function subjectGroupFor(label){
    const raw=String(label||'').trim().replace(/\s*\([^)]*\)\s*$/,'').trim().toLowerCase();
    return subjectGroups[raw]||null;
  }
  function subjectInfo(subject){
    const label=String(subject||'').trim();
    const base=baseSubject(label);
    const match=label.match(/\(([^)]+)\)/);
    let gender='masculin',number='singulier';
    if(match){
      const details=match[1].toLowerCase();
      if(details.includes('féminin'))gender='féminin';
      if(details.includes('pluriel'))number='pluriel';
    }else if(base==='elle'){gender='féminin';}
    else if(base==='ils'){gender='masculin';number='pluriel';}
    else if(base==='elles'){gender='féminin';number='pluriel';}
    else if(base==='nous'||base==='vous'){number='pluriel';}
    return Object.freeze({label,base,gender,number});
  }
  function pronounFor(label){return subjectPronouns[baseSubject(label)]||null;}
  function imperativePronounFor(label){return imperativePronouns[baseSubject(label)]||null;}
  function contractPronoun(pronoun,nextWord){
    if(!pronoun || !nextWord) return pronoun;
    if(!['me','te','se'].includes(pronoun)) return pronoun;
    return /^[aeiouyàâäéèêëîïôöùûüÿh]/i.test(nextWord) ? pronoun.charAt(0)+"'" : pronoun;
  }
  function apply(subjectLabel,verbForm){
    const p=pronounFor(subjectLabel);
    if(!p) return verbForm;
    const clean=String(verbForm||'').trim();
    if(!clean) return clean;
    const first=clean.match(/^([^\s']+)/)?.[1]||clean;
    const cp=contractPronoun(p,first);
    return cp + (cp.endsWith("'")?'':' ') + clean;
  }
  function subjectForMode(label,mode,form){
    const raw=String(label||'').trim();
    const match=raw.match(/\s*(\([^)]*\))\s*$/);
    const context=match?.[1]||'';
    const baseLabel=raw.replace(/\s*\([^)]*\)\s*$/,'').trim();
    const base=baseSubject(baseLabel);
    let result=baseLabel;
    if(mode==='subjonctif')result=subjonctifSubjects[base]||baseLabel;
    if((result==='je'||result==='que je')&&VOWELS_OR_MUTE_H.test(String(form||'').trim()))result=result==='que je'?"que j'":"j'";
    return result+(context?' '+context:'');
  }
  window.COQ_CONJ_PRONOUNS={subjectPronouns,baseSubject,subjectInfo,subjectVariants,imperativePronouns,subjonctifSubjects,subjectGroupFor,subjectSets,pronounFor,imperativePronounFor,contractPronoun,apply,subjectForMode};
})();
