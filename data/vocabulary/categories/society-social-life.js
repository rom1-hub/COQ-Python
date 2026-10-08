/* COQ — Vocabulario · Sociedad y vida social */
(function () {
  'use strict';

  const category = {
    id: 'society-social-life',
    title: 'Sociedad y vida social',
    subcategories: [
      {
        id: 'society-community',
        title: 'Sociedad y comunidad',
        entries: [
          ['societe','société','sociedad','une','una'],
          ['communaute','communauté','comunidad','une','una'],
          ['groupe','groupe','grupo','un','un'],
          ['population','population','población','une','una'],
          ['peuple','peuple','pueblo','un','un'],
          ['citoyen','citoyen','ciudadano','un','un'],
          ['citoyenne','citoyenne','ciudadana','une','una'],
          ['habitant','habitant','habitante','un','un'],
          ['habitante','habitante','habitante','une','una'],
          ['voisin','voisin','vecino','un','un'],
          ['voisine','voisine','vecina','une','una'],
          ['membre','membre','miembro','un','un'],
          ['organisation','organisation','organización','une','una'],
          ['association','association','asociación','une','una'],
          ['organisme','organisme','organismo','un','un']
        ]
      },
      {
        id: 'society-social-relations',
        title: 'Relaciones sociales',
        entries: [
          ['relation','relation','relación','une','una'],
          ['rencontre','rencontre','encuentro','une','un'],
          ['connaissance','connaissance','conocido / conocida','une','un'],
          ['ami','ami','amigo','un','un'],
          ['amie','amie','amiga','une','una'],
          ['camarade','camarade','compañero / compañera','un','un'],
          ['camarade-f','camarade','compañera','une','una'],
          ['collegue','collègue','compañero de trabajo','un','un'],
          ['collegue-f','collègue','compañera de trabajo','une','una'],
          ['partenaire','partenaire','pareja / compañero','un','un'],
          ['partenaire-f','partenaire','pareja / compañera','une','una'],
          ['contact','contact','contacto','un','un'],
          ['visite','visite','visita','une','una']
        ]
      },
      {
        id: 'society-social-life',
        title: 'Vida social',
        entries: [
          ['fete','fête','fiesta','une','una'],
          ['soiree','soirée','velada / fiesta','une','una'],
          ['evenement','événement','evento','un','un'],
          ['activite','activité','actividad','une','una'],
          ['reunion','réunion','reunión','une','una'],
          ['celebration','célébration','celebración','une','una'],
          ['ceremonie','cérémonie','ceremonia','une','una'],
          ['sortie','sortie','salida','une','una'],
          ['rendez-vous','rendez-vous','cita','un','una'],
          ['conversation','conversation','conversación','une','una'],
          ['discussion','discussion','discusión','une','una'],
          ['repas','repas','comida','un','una'],
          ['reception','réception','recepción','une','una'],
          ['anniversaire','anniversaire','cumpleaños','un','un']
        ]
      },
      {
        id: 'society-communication-behavior',
        title: 'Comunicación y comportamiento social',
        entries: [
          ['comportement','comportement','comportamiento','un','un'],
          ['attitude','attitude','actitud','une','una'],
          ['opinion','opinion','opinión','une','una'],
          ['avis','avis','opinión','un','una'],
          ['idee','idée','idea','une','una'],
          ['proposition','proposition','propuesta','une','una'],
          ['decision','décision','decisión','une','una'],
          ['accord','accord','acuerdo','un','un'],
          ['desaccord','désaccord','desacuerdo','un','un'],
          ['reponse','réponse','respuesta','une','una'],
          ['question','question','pregunta','une','una'],
          ['demande','demande','petición','une','una'],
          ['promesse','promesse','promesa','une','una'],
          ['conseil','conseil','consejo','un','un'],
          ['excuse','excuse','disculpa','une','una']
        ]
      },
      {
        id: 'society-help-solidarity',
        title: 'Ayuda, cooperación y solidaridad',
        entries: [
          ['aide','aide','ayuda','une','una'],
          ['soutien','soutien','apoyo','un','un'],
          ['solidarite','solidarité','solidaridad','une','una'],
          ['cooperation','coopération','cooperación','une','una'],
          ['collaboration','collaboration','colaboración','une','una'],
          ['service','service','servicio','un','un'],
          ['echange','échange','intercambio','un','un'],
          ['partage','partage','reparto / puesta en común','un','un'],
          ['don','don','donación','un','una'],
          ['benevole','bénévole','voluntario','un','un'],
          ['benevole-f','bénévole','voluntaria','une','una'],
          ['volontaire','volontaire','voluntario','un','un'],
          ['volontaire-f','volontaire','voluntaria','une','una'],
          ['aider','aider','ayudar'],
          ['soutenir','soutenir','apoyar']
        ]
      },
      {
        id: 'society-rules-coexistence',
        title: 'Normas y convivencia',
        entries: [
          ['regle','règle','regla','une','una'],
          ['loi','loi','ley','une','una'],
          ['droit','droit','derecho','un','un'],
          ['devoir','devoir','deber','un','un'],
          ['obligation','obligation','obligación','une','una'],
          ['interdiction','interdiction','prohibición','une','una'],
          ['autorisation','autorisation','autorización','une','una'],
          ['responsabilite','responsabilité','responsabilidad','une','una'],
          ['respect','respect','respeto','un','un'],
          ['liberte','liberté','libertad','une','una'],
          ['egalite','égalité','igualdad','une','una'],
          ['difference','différence','diferencia','une','una']
        ]
      },
      {
        id: 'society-conflicts',
        title: 'Conflictos y problemas sociales',
        entries: [
          ['conflit','conflit','conflicto','un','un'],
          ['dispute','dispute','discusión','une','una'],
          ['querelle','querelle','disputa','une','una'],
          ['tension','tension','tensión','une','una'],
          ['violence','violence','violencia','une','una'],
          ['agression','agression','agresión','une','una'],
          ['menace','menace','amenaza','une','una'],
          ['probleme','problème','problema','un','un'],
          ['difficulte','difficulté','dificultad','une','una'],
          ['crise','crise','crisis','une','una'],
          ['injustice','injustice','injusticia','une','una'],
          ['discrimination','discrimination','discriminación','une','una'],
          ['exclusion','exclusion','exclusión','une','una'],
          ['resoudre','résoudre','resolver']
        ]
      },
      {
        id: 'society-civic-participation',
        title: 'Instituciones y participación ciudadana',
        entries: [
          ['gouvernement','gouvernement','gobierno','un','un'],
          ['mairie','mairie','ayuntamiento','une','un'],
          ['service-public','service public','servicio público','un','un'],
          ['institution','institution','institución','une','una'],
          ['administration','administration','administración','une','una'],
          ['fonctionnaire','fonctionnaire','funcionario','un','un'],
          ['fonctionnaire-f','fonctionnaire','funcionaria','une','una'],
          ['elu','élu','representante electo','un','un'],
          ['elue','élue','representante electa','une','una'],
          ['electeur','électeur','votante','un','un'],
          ['electrice','électrice','votante','une','una'],
          ['election','élection','elección','une','una'],
          ['vote','vote','voto','un','un'],
          ['manifestation','manifestation','manifestación','une','una'],
          ['participer','participer','participar']
        ]
      },
      {
        id: 'society-diversity-identity',
        title: 'Diversidad e identidad social',
        entries: [
          ['identite','identité','identidad','une','una'],
          ['culture','culture','cultura','une','una'],
          ['tradition','tradition','tradición','une','una'],
          ['origine','origine','origen','une','un'],
          ['nationalite','nationalité','nacionalidad','une','una'],
          ['langue','langue','lengua','une','una'],
          ['diversite','diversité','diversidad','une','una'],
          ['generation','génération','generación','une','una'],
          ['age','âge','edad','un','una'],
          ['minorite','minorité','minoría','une','una'],
          ['majorite','majorité','mayoría','une','una'],
          ['etranger','étranger','extranjero','un','un'],
          ['etrangere','étrangère','extranjera','une','una'],
          ['immigrant','immigrant','inmigrante','un','un'],
          ['immigrante','immigrante','inmigrante','une','una']
        ]
      },
      {
        id: 'society-personal-situations',
        title: 'Relaciones y situaciones personales',
        entries: [
          ['couple','couple','pareja','un','una'],
          ['celibataire','célibataire','persona soltera','un','una'],
          ['celibataire-f','célibataire','persona soltera','une','una'],
          ['mariage','mariage','matrimonio','un','un'],
          ['divorce','divorce','divorcio','un','un'],
          ['separation','séparation','separación','une','una'],
          ['voisinage','voisinage','vecindario','un','un'],
          ['proche','proche','persona cercana','un','una'],
          ['proche-f','proche','persona cercana','une','una'],
          ['inconnu','inconnu','desconocido','un','un'],
          ['inconnue','inconnue','desconocida','une','una'],
          ['invite','invité','invitado','un','un'],
          ['invitee','invitée','invitada','une','una'],
          ['accueillir','accueillir','recibir / acoger']
        ]
      }
    ].map((subcategory) => ({
      ...subcategory,
      entries: subcategory.entries.map(([id, word, translation, articleFr, articleEs]) => ({
        id: 'society-' + id,
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