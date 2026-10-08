/* Coq — servicio de audio global
 * Fuente única de verdad para la pronunciación mediante SpeechSynthesis.
 */
(function(){
  function getFrenchVoice(){
    const voices=window.speechSynthesis.getVoices()||[];
    const fr=voices.filter(function(v){ return /^fr(?:-|_)/i.test(v.lang||''); });
    if(!fr.length) return null;
    const preferred=[
      function(v){ return /google/i.test(v.name||''); },
      function(v){ return /hortense|denise|thomas|amelie|aurelie|audrey|fran[cç]ais/i.test(v.name||''); }
    ];
    for(const rule of preferred){
      const match=fr.find(rule);
      if(match) return match;
    }
    return fr.find(function(v){ return /^fr-fr$/i.test(v.lang||''); })||fr[0];
  }

  function normalizeFrenchSpeech(text){
    return String(text||'')
      .replace(/\bj['’]a(?:i|ie)\b/gi,"j'ai")
      .replace(/\bj['’]étais\b/gi,"j'étais")
      .replace(/\bj['’]était\b/gi,"j'étais")
      .replace(/\bj['’]aurais\b/gi,"j'aurais")
      .replace(/\bj['’]aurai\b/gi,"j'aurai")
      .replace(/\bj['’]avais\b/gi,"j'avais")
      .replace(/\bj['’]\b/gi,"j'")
      .replace(/\bque\s+j['’]\b/gi,"que j'")
      .replace(/\bqu['’]il\b/gi,"qu'il")
      .replace(/\bqu['’]elle\b/gi,"qu'elle")
      .replace(/\bqu['’]on\b/gi,"qu'on")
      .replace(/\bqu['’]ils\b/gi,"qu'ils")
      .replace(/\bqu['’]elles\b/gi,"qu'elles");
  }

  function speak(text){
    if(!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance=new SpeechSynthesisUtterance(normalizeFrenchSpeech(text));
    utterance.lang='fr-FR';
    const voice=getFrenchVoice();
    if(voice) utterance.voice=voice;
    utterance.rate=.88;
    window.speechSynthesis.speak(utterance);
  }

  function bind(root){
    const scope=root&&root.querySelectorAll?root:document;
    scope.querySelectorAll('[data-say]').forEach(function(button){
      if(button.dataset.coqAudioReady==='1') return;
      button.dataset.coqAudioReady='1';
      button.addEventListener('click',function(){
        speak(button.dataset.say);
      });
    });
  }

  window.Coqaudio={speak:speak,bind:bind};

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',function(){bind(document);});
  else bind(document);
})();
