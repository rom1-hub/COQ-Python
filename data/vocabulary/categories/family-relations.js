/* COQ — Vocabulario · Familia y relaciones */
(function () {
  'use strict';

  const category = {
    id: 'family-relations',
    title: 'Familia y relaciones',
    subcategories: [
      {
        id: 'family-close',
        title: 'Familia cercana',
        entries: [
          {id:'person-father',word:'père',translation:'padre',articleFr:'un',articleEs:'un'},
          {id:'person-mother',word:'mère',translation:'madre',articleFr:'une',articleEs:'una'},
          {id:'person-girl',word:'fille',translation:'hija',articleFr:'une',articleEs:'una'},
          {id:'person-brother',word:'frère',translation:'hermano',articleFr:'un',articleEs:'un'},
          {id:'person-sister',word:'sœur',translation:'hermana',articleFr:'une',articleEs:'una'},
          {id:'family-parents',word:'parents',translation:'padres',articleFr:'des',articleEs:'unos'},
          {id:'family-son',word:'fils',translation:'hijo',articleFr:'un',articleEs:'un'},
          {id:'family-grandfather',word:'grand-père',translation:'abuelo',articleFr:'un',articleEs:'un'},
          {id:'family-grandmother',word:'grand-mère',translation:'abuela',articleFr:'une',articleEs:'una'},
          {id:'family-grandson',word:'petit-fils',translation:'nieto',articleFr:'un',articleEs:'un'},
          {id:'family-granddaughter',word:'petite-fille',translation:'nieta',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'family-extended',
        title: 'Familia extensa',
        entries: [
          {id:'family-uncle',word:'oncle',translation:'tío',articleFr:'un',articleEs:'un'},
          {id:'family-aunt',word:'tante',translation:'tía',articleFr:'une',articleEs:'una'},
          {id:'family-cousin-m',word:'cousin',translation:'primo',articleFr:'un',articleEs:'un'},
          {id:'family-cousin-f',word:'cousine',translation:'prima',articleFr:'une',articleEs:'una'},
          {id:'family-nephew',word:'neveu',translation:'sobrino',articleFr:'un',articleEs:'un'},
          {id:'family-niece',word:'nièce',translation:'sobrina',articleFr:'une',articleEs:'una'},
          {id:'family-great-grandfather',word:'arrière-grand-père',translation:'bisabuelo',articleFr:'un',articleEs:'un'},
          {id:'family-great-grandmother',word:'arrière-grand-mère',translation:'bisabuela',articleFr:'une',articleEs:'una'},
          {id:'family-great-grandson',word:'arrière-petit-fils',translation:'bisnieto',articleFr:'un',articleEs:'un'},
          {id:'family-great-granddaughter',word:'arrière-petite-fille',translation:'bisnieta',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'family-in-law',
        title: 'Familia política',
        entries: [
          {id:'family-father-in-law',word:'beau-père',translation:'suegro / padrastro',articleFr:'un',articleEs:'un'},
          {id:'family-mother-in-law',word:'belle-mère',translation:'suegra / madrastra',articleFr:'une',articleEs:'una'},
          {id:'family-brother-in-law',word:'beau-frère',translation:'cuñado',articleFr:'un',articleEs:'un'},
          {id:'family-sister-in-law',word:'belle-sœur',translation:'cuñada',articleFr:'une',articleEs:'una'},
          {id:'family-son-in-law',word:'gendre',translation:'yerno',articleFr:'un',articleEs:'un'},
          {id:'family-daughter-in-law',word:'belle-fille',translation:'nuera / hijastra',articleFr:'une',articleEs:'una'},
          {id:'family-step-son',word:'beau-fils',translation:'yerno / hijastro',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'family-couple-marriage',
        title: 'Pareja y matrimonio',
        entries: [
          {id:'family-husband',word:'mari',translation:'marido / esposo',articleFr:'un',articleEs:'un'},
          {id:'family-spouse-f',word:'épouse',translation:'esposa / cónyuge',articleFr:'une',articleEs:'una'},
          {id:'family-spouse-m',word:'époux',translation:'esposo / cónyuge',articleFr:'un',articleEs:'un'},
          {id:'family-fiance-m',word:'fiancé',translation:'prometido',articleFr:'un',articleEs:'un'},
          {id:'family-fiance-f',word:'fiancée',translation:'prometida',articleFr:'une',articleEs:'una'},
          {id:'family-boyfriend',word:'petit ami',translation:'novio',articleFr:'un',articleEs:'un'},
          {id:'family-girlfriend',word:'petite amie',translation:'novia',articleFr:'une',articleEs:'una'},
          {id:'family-ex-husband',word:'ex-mari',translation:'exmarido',articleFr:'un',articleEs:'un'},
          {id:'family-ex-wife',word:'ex-femme',translation:'exesposa',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'family-kinship-generations',
        title: 'Parentesco y generaciones',
        entries: [
          {id:'family-family',word:'famille',translation:'familia',articleFr:'une',articleEs:'una'},
          {id:'family-generation',word:'génération',translation:'generación',articleFr:'une',articleEs:'una'},
          {id:'family-kin-member',word:'membre de la famille',translation:'miembro de la familia',articleFr:'un',articleEs:'un'},
          {id:'family-ancestor',word:'ancêtre',translation:'antepasado',articleFr:'un',articleEs:'un'},
          {id:'family-descendant',word:'descendant',translation:'descendiente',articleFr:'un',articleEs:'un'},
          {id:'family-twin-m',word:'jumeau',translation:'gemelo',articleFr:'un',articleEs:'un'},
          {id:'family-twin-f',word:'jumelle',translation:'gemela',articleFr:'une',articleEs:'una'},
          {id:'family-elder-m',word:'aîné',translation:'hijo mayor / hermano mayor',articleFr:'un',articleEs:'un'},
          {id:'family-elder-f',word:'aînée',translation:'hija mayor / hermana mayor',articleFr:'une',articleEs:'una'},
          {id:'family-younger-m',word:'cadet',translation:'hijo menor / hermano menor',articleFr:'un',articleEs:'un'},
          {id:'family-younger-f',word:'cadette',translation:'hija menor / hermana menor',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'family-social-relations',
        title: 'Relaciones sociales',
        entries: [
          {id:'family-classmate-m',word:'camarade',translation:'compañero / compañera',articleFr:'un',articleEs:'un'},
          {id:'family-acquaintance',word:'connaissance',translation:'conocido / conocida',articleFr:'une',articleEs:'una'},
          {id:'family-friend-m',word:'ami',translation:'amigo',articleFr:'un',articleEs:'un'},
          {id:'family-friend-f',word:'amie',translation:'amiga',articleFr:'une',articleEs:'una'},
          {id:'family-copain-m',word:'copain',translation:'amigo',articleFr:'un',articleEs:'un'},
          {id:'family-copine-f',word:'copine',translation:'amiga',articleFr:'une',articleEs:'una'},
          {id:'family-boyfriend-informal-m',word:'petit copain',translation:'novio',articleFr:'un',articleEs:'un'},
          {id:'family-girlfriend-informal-f',word:'petite copine',translation:'novia',articleFr:'une',articleEs:'una'},
          {id:'family-widower-m',word:'veuf',translation:'viudo',articleFr:'un',articleEs:'un'},
          {id:'family-widow-f',word:'veuve',translation:'viuda',articleFr:'une',articleEs:'una'},
          {id:'family-colleague',word:'collègue',translation:'colega / compañero / compañera',articleFr:'un / une',articleEs:'un / una'},
          {id:'family-partner',word:'partenaire',translation:'compañero / pareja',articleFr:'un',articleEs:'un'}
        ]
      }
    ]
  };

  if (!window.COQ_VOCABULARY_DATABASE_API) throw new Error('COQ Vocabulario: registro no disponible.');
  window.COQ_VOCABULARY_DATABASE_API.registerCategory(Object.freeze(category));
})();