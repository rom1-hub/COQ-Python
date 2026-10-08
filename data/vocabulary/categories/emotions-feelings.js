/* COQ — Vocabulario · Emociones y sentimientos */
(function () {
  'use strict';

  const category = {
    id: 'emotions-feelings',
    title: 'Emociones y sentimientos',
    subcategories: [
      {
        id: 'emotions-general',
        title: 'Emociones y estados generales',
        entries: [
          ['emotion','émotion','emoción','une','una'],
          ['sentiment','sentiment','sentimiento','un','un'],
          ['sensation','sensation','sensación','une','una'],
          ['humeur','humeur','estado de ánimo','une','un'],
          ['joie','joie','alegría','une','una'],
          ['tristesse','tristesse','tristeza','une','una'],
          ['peur','peur','miedo','une','un'],
          ['colere','colère','ira','une','una'],
          ['surprise','surprise','sorpresa','une','una'],
          ['plaisir','plaisir','placer','un','un'],
          ['inquietude','inquiétude','preocupación','une','una'],
          ['anxiete','anxiété','ansiedad','une','una'],
          ['stress','stress','estrés','un','un'],
          ['soulagement','soulagement','alivio','un','un'],
          ['deception','déception','decepción','une','una']
        ]
      },
      {
        id: 'emotions-joy',
        title: 'Alegría y satisfacción',
        entries: [
          ['bonheur','bonheur','felicidad','un','una'],
          ['satisfaction','satisfaction','satisfacción','une','una'],
          ['enthousiasme','enthousiasme','entusiasmo','un','un'],
          ['excitation','excitation','emoción','une','una'],
          ['emerveillement','émerveillement','asombro','un','un'],
          ['rejouissance','réjouissance','alegría','une','una'],
          ['sourire','sourire','sonrisa','un','una'],
          ['rire','rire','risa','un','una'],
          ['bonne-humeur','bonne humeur','buen humor','une','un'],
          ['heureux','heureux','feliz','un','un'],
          ['heureuse','heureuse','feliz','une','una'],
          ['content','content','contento','un','un'],
          ['contente','contente','contenta','une','una'],
          ['ravi','ravi','encantado','un','un'],
          ['ravie','ravie','encantada','une','una'],
          ['se-rejouir','se réjouir','alegrarse'],
          ['sourire-verbe','sourire','sonreír'],
          ['rire-verbe','rire','reír']
        ]
      },
      {
        id: 'emotions-sadness',
        title: 'Tristeza y decepción',
        entries: [
          ['chagrin','chagrin','pena','un','una'],
          ['peine','peine','pena','une','una'],
          ['desespoir','désespoir','desesperación','un','una'],
          ['melancolie','mélancolie','melancolía','une','una'],
          ['solitude','solitude','soledad','une','una'],
          ['regret','regret','arrepentimiento','un','un'],
          ['nostalgie','nostalgie','nostalgia','une','una'],
          ['decouragement','découragement','desánimo','un','un'],
          ['triste','triste','triste','un','un'],
          ['triste-f','triste','triste','une','una'],
          ['decu','déçu','decepcionado','un','un'],
          ['decue','déçue','decepcionada','une','una'],
          ['desespere','désespéré','desesperado','un','un'],
          ['desesperee','désespérée','desesperada','une','una'],
          ['seul','seul','solo','un','un'],
          ['seule','seule','sola','une','una'],
          ['regretter','regretter','lamentar / arrepentirse'],
          ['se-decourager','se décourager','desanimarse']
        ]
      },
      {
        id: 'emotions-fear',
        title: 'Miedo y preocupación',
        entries: [
          ['crainte','crainte','temor','une','un'],
          ['angoisse','angoisse','angustia','une','una'],
          ['panique','panique','pánico','une','un'],
          ['apprehension','appréhension','aprensión','une','una'],
          ['cauchemar','cauchemar','pesadilla','un','una'],
          ['menace','menace','amenaza','une','una'],
          ['danger','danger','peligro','un','un'],
          ['inquiet','inquiet','preocupado','un','un'],
          ['inquiete','inquiète','preocupada','une','una'],
          ['avoir-peur','avoir peur','tener miedo'],
          ['paniquer','paniquer','entrar en pánico'],
          ['craindre','craindre','temer'],
          ['sinquieter','s’inquiéter','preocuparse'],
          ['angoisse-adj','angoissé','angustiado','un','un'],
          ['angoissee','angoissée','angustiada','une','una'],
          ['trembler','trembler','temblar']
        ]
      },
      {
        id: 'emotions-anger',
        title: 'Enfado y frustración',
        entries: [
          ['enerve','énervement','enfado','un','un'],
          ['irritation','irritation','irritación','une','una'],
          ['frustration','frustration','frustración','une','una'],
          ['rage','rage','rabia','une','una'],
          ['indignation','indignation','indignación','une','una'],
          ['mecontentement','mécontentement','descontento','un','un'],
          ['exasperation','exaspération','exasperación','une','una'],
          ['dispute','dispute','discusión','une','una'],
          ['conflit','conflit','conflicto','un','un'],
          ['en-colere','en colère','enfadado','un','un'],
          ['en-colere-f','en colère','enfadada','une','una'],
          ['enerve-adj','énervé','enfadado','un','un'],
          ['enervee','énervée','enfadada','une','una'],
          ['frustre','frustré','frustrado','un','un'],
          ['frustree','frustrée','frustrada','une','una'],
          ['senerver','s’énerver','enfadarse'],
          ['se-facher','se fâcher','enfadarse'],
          ['semporter','s’emporter','perder los estribos']
        ]
      },
      {
        id: 'emotions-love',
        title: 'Amor y afecto',
        entries: [
          ['amour','amour','amor','un','un'],
          ['affection','affection','afecto','une','un'],
          ['tendresse','tendresse','ternura','une','una'],
          ['amitie','amitié','amistad','une','una'],
          ['sympathie','sympathie','simpatía','une','una'],
          ['admiration','admiration','admiración','une','una'],
          ['attirance','attirance','atracción','une','una'],
          ['passion','passion','pasión','une','una'],
          ['calin','câlin','abrazo','un','un'],
          ['baiser','baiser','beso','un','un'],
          ['geste-affectueux','geste affectueux','gesto cariñoso','un','un'],
          ['amoureux','amoureux','enamorado','un','un'],
          ['amoureuse','amoureuse','enamorada','une','una'],
          ['aimer','aimer','amar / querer'],
          ['adorer','adorer','adorar'],
          ['apprecier','apprécier','apreciar'],
          ['sattacher','s’attacher à quelqu’un','encariñarse con alguien']
        ]
      },
      {
        id: 'emotions-surprise',
        title: 'Sorpresa, duda y confusión',
        entries: [
          ['etonnement','étonnement','asombro','un','un'],
          ['stupéfaction','stupéfaction','estupor','une','un'],
          ['confusion','confusion','confusión','une','una'],
          ['doute','doute','duda','un','una'],
          ['hesitation','hésitation','vacilación','une','una'],
          ['curiosite','curiosité','curiosidad','une','una'],
          ['incomprehension','incompréhension','incomprensión','une','una'],
          ['malentendu','malentendu','malentendido','un','un'],
          ['surpris','surpris','sorprendido','un','un'],
          ['surprise-adj','surprise','sorprendida','une','una'],
          ['etonne','étonné','sorprendido','un','un'],
          ['etonnee','étonnée','sorprendida','une','una'],
          ['confus','confus','confundido','un','un'],
          ['confuse','confuse','confundida','une','una'],
          ['perplexe','perplexe','perplejo / perpleja'],
          ['se-demander','se demander','preguntarse'],
          ['hesiter','hésiter','dudar / vacilar'],
          ['se-tromper','se tromper','equivocarse']
        ]
      },
      {
        id: 'emotions-calm',
        title: 'Calma y bienestar',
        entries: [
          ['calme','calme','calma','un','una'],
          ['tranquillite','tranquillité','tranquilidad','une','una'],
          ['serenite','sérénité','serenidad','une','una'],
          ['paix','paix','paz','une','una'],
          ['bien-etre','bien-être','bienestar','un','un'],
          ['detente','détente','relajación','une','una'],
          ['relaxation','relaxation','relajación','une','una'],
          ['securite-emotion','sécurité','seguridad','une','una'],
          ['calme-adj','calme','tranquilo','un','un'],
          ['calme-adj-f','calme','tranquila','une','una'],
          ['detendu','détendu','relajado','un','un'],
          ['detendue','détendue','relajada','une','una'],
          ['serein','serein','sereno','un','un'],
          ['sereine','sereine','serena','une','una'],
          ['se-detendre','se détendre','relajarse'],
          ['se-sentir-bien','se sentir bien','sentirse bien'],
          ['se-sentir-en-securite','se sentir en sécurité','sentirse seguro / segura']
        ]
      },
      {
        id: 'emotions-shame-pride',
        title: 'Vergüenza, culpa y orgullo',
        entries: [
          ['honte','honte','vergüenza','une','una'],
          ['culpabilite','culpabilité','culpa','une','una'],
          ['remords','remords','remordimiento','un','un'],
          ['fierte','fierté','orgullo','une','un'],
          ['humiliation','humiliation','humillación','une','una'],
          ['embarras','embarras','incomodidad','un','una'],
          ['gene','gêne','incomodidad','une','una'],
          ['dignite','dignité','dignidad','une','una'],
          ['honneur','honneur','honor','un','un'],
          ['honteux','honteux','avergonzado','un','un'],
          ['honteuse','honteuse','avergonzada','une','una'],
          ['coupable','coupable','culpable','un','un'],
          ['coupable-f','coupable','culpable','une','una'],
          ['fier','fier','orgulloso','un','un'],
          ['fiere','fière','orgullosa','une','una'],
          ['avoir-honte','avoir honte','tener vergüenza'],
          ['se-sentir-coupable','se sentir coupable','sentirse culpable'],
          ['humilier','humilier','humillar']
        ]
      },
      {
        id: 'emotions-desire',
        title: 'Deseo, interés y motivación',
        entries: [
          ['desir','désir','deseo','un','un'],
          ['envie','envie','ganas / deseo','une','unas'],
          ['motivation','motivation','motivación','une','una'],
          ['interet','intérêt','interés','un','un'],
          ['volonte','volonté','voluntad','une','una'],
          ['ambition','ambition','ambición','une','una'],
          ['espoir','espoir','esperanza','un','una'],
          ['determination','détermination','determinación','une','una'],
          ['inspiration','inspiration','inspiración','une','una'],
          ['motive','motivé','motivado','un','un'],
          ['motivee','motivée','motivada','une','una'],
          ['interesse','intéressé','interesado','un','un'],
          ['interessee','intéressée','interesada','une','una'],
          ['avoir-envie','avoir envie','tener ganas'],
          ['esperer','espérer','esperar'],
          ['vouloir','vouloir','querer'],
          ['desirer','désirer','desear'],
          ['se-motiver','se motiver','motivarse']
        ]
      }
    ].map((subcategory) => ({
      ...subcategory,
      entries: subcategory.entries.map(([id, word, translation, articleFr, articleEs]) => ({
        id: 'emotions-' + id,
        word,
        translation,
        ...(articleFr ? {articleFr} : {}),
        ...(articleEs ? {articleEs} : {})
      }))
    }))
  };

  if (window.COQ_VOCABULARY_DATABASE_API) {
    window.COQ_VOCABULARY_DATABASE_API.registerCategory(category);
  }
})();