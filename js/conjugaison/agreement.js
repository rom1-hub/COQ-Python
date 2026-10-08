/* COQ — Concordancia para Conjugaison.
 * Responsabilidad: reglas de concordancia y presentación de participios compuestos.
 * Los casos complejos de COD se tratarán en una lección independiente.
 */
(function(){
  const rules=window.COQ_PRONOMINAL_RULES||{};
  const LOOKUP_NOTATION={je:'(e)',tu:'(e)',on:'(e)(s)',nous:'(e)s',vous:'(e)(s)'};
  const LOOKUP_CONTEXT={
    il:{gender:'masculin',number:'singulier'},
    elle:{gender:'féminin',number:'singulier'},
    ils:{gender:'masculin',number:'pluriel'},
    elles:{gender:'féminin',number:'pluriel'}
  };
  function normalizeGender(g){return g==='féminin'?'féminin':'masculin';}
  function normalizeNumber(n){return n==='pluriel'?'pluriel':'singulier';}
  function stripAgreementMarkers(form){return String(form||'').replace(/\(e\)\(s\)/g,'').replace(/\(e\)s/g,'').replace(/\(e\)/g,'');}
  function applySubjectAgreement(participle, subject){
    const g=normalizeGender(subject&&subject.gender), n=normalizeNumber(subject&&subject.number);
    const base=stripAgreementMarkers(participle);
    if(n==='pluriel') return base+(g==='féminin'?'es':'s');
    return base+(g==='féminin'?'e':'');
  }
  function agree(participle, subject, context){
    if(!context) return stripAgreementMarkers(participle);
    if(context.auxiliaire==='être' && context.type==='non-pronominale') return applySubjectAgreement(participle,subject);
    if(context.type!=='pronominale') return stripAgreementMarkers(participle);
    const rule=rules[context.baseVerb];
    if(!rule || rule.accord==='aucun') return stripAgreementMarkers(participle);
    if(rule.accord==='sujet') return applySubjectAgreement(participle,subject);
    return stripAgreementMarkers(participle);
  }
  function lookupSubject(value){return String(value||'').trim().toLowerCase().replace(/\s+/g,' ').replace(/^que\s+/i,'').replace(/^qu['’]/i,'').trim();}
  function lookupAgreementContext(subject){return LOOKUP_CONTEXT[lookupSubject(subject)]||null;}
  function formatLookupCompoundForm(form,subject,record,verb){
    const value=String(form||'');
    const meta=record||{};
    const agreementSensitive=meta.pronominal===true||meta.construction==='pronomiale'||meta.construction==='pronominale'||meta.auxiliaire==='être';
    if(!agreementSensitive)return value;
    const pp=String(meta.participePasse||'').trim();
    if(!pp)return value;
    const withoutMarkers=stripAgreementMarkers(value);
    const ppIndex=withoutMarkers.lastIndexOf(pp);
    if(ppIndex===-1)return value;
    const prefix=withoutMarkers.slice(0,ppIndex);
    const ruleBase=meta.baseVerbId||meta.infinitifBase||meta.verbeBase||meta.infinitif_base||verb;
    const isPronominal=meta.pronominal===true||meta.construction==='pronomiale'||meta.construction==='pronominale';
    if(isPronominal){
      const rule=rules[ruleBase];
      if(!rule || rule.accord==='aucun')return prefix+pp;
    }
    const base=lookupSubject(subject);
    const explicitContext=lookupAgreementContext(subject);
    if(explicitContext)return value;
    const genericNotation=LOOKUP_NOTATION[base];
    if(genericNotation)return prefix+pp+genericNotation;
    return value;
  }
  window.COQ_CONJ_AGREEMENT={agree,applySubjectAgreement,stripAgreementMarkers,lookupAgreementContext,formatLookupCompoundForm};
})();
