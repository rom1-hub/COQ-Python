/* COQ — Vocabulario · Política
 * Fuente de verdad del contenido de la categoría «Política».
 * Vocabulario descriptivo y cívico, sin orientación partidista.
 */
(function () {
  'use strict';

  const category = {
    id: 'politics',
    title: 'Política',
    subcategories: [
      {
        id: 'politics-government-state',
        title: 'Gobierno y Estado',
        entries: [
          {id:'politics-state',word:'État',translation:'Estado',articleFr:'l’',articleEs:'el'},
          {id:'politics-government',word:'gouvernement',translation:'gobierno',articleFr:'le',articleEs:'el'},
          {id:'politics-regime',word:'régime politique',translation:'régimen político',articleFr:'un',articleEs:'un'},
          {id:'politics-state-power',word:'pouvoir de l’État',translation:'poder del Estado',articleFr:'le',articleEs:'el'},
          {id:'politics-executive-power',word:'pouvoir exécutif',translation:'poder ejecutivo',articleFr:'le',articleEs:'el'},
          {id:'politics-legislative-power',word:'pouvoir législatif',translation:'poder legislativo',articleFr:'le',articleEs:'el'},
          {id:'politics-judicial-power',word:'pouvoir judiciaire',translation:'poder judicial',articleFr:'le',articleEs:'el'},
          {id:'politics-head-of-state',word:'chef de l’État',translation:'jefe de Estado',articleFr:'le',articleEs:'el'},
          {id:'politics-head-of-government',word:'chef du gouvernement',translation:'jefe de Gobierno',articleFr:'le',articleEs:'el'},
          {id:'politics-minister',word:'ministre',translation:'ministro / ministra',articleFr:'un',articleEs:'un'},
          {id:'politics-ministry',word:'ministère',translation:'ministerio',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'politics-institutions-parliament',
        title: 'Instituciones y Parlamento',
        entries: [
          {id:'politics-institution',word:'institution',translation:'institución',articleFr:'une',articleEs:'una'},
          {id:'politics-parliament',word:'Parlement',translation:'Parlamento',articleFr:'le',articleEs:'el'},
          {id:'politics-parliamentarian',word:'parlementaire',translation:'parlamentario / parlamentaria',articleFr:'un',articleEs:'un'},
          {id:'politics-chamber',word:'chambre parlementaire',translation:'cámara parlamentaria',articleFr:'une',articleEs:'una'},
          {id:'politics-deputy',word:'député',translation:'diputado',articleFr:'un',articleEs:'un'},
          {id:'politics-deputy-feminine',word:'députée',translation:'diputada',articleFr:'une',articleEs:'una'},
          {id:'politics-senator',word:'sénateur',translation:'senador',articleFr:'un',articleEs:'un'},
          {id:'politics-senator-feminine',word:'sénatrice',translation:'senadora',articleFr:'une',articleEs:'una'},
          {id:'politics-session',word:'séance parlementaire',translation:'sesión parlamentaria',articleFr:'une',articleEs:'una'},
          {id:'politics-debate',word:'débat parlementaire',translation:'debate parlamentario',articleFr:'un',articleEs:'un'},
          {id:'politics-majority',word:'majorité parlementaire',translation:'mayoría parlamentaria',articleFr:'une',articleEs:'una'},
          {id:'politics-opposition',word:'opposition parlementaire',translation:'oposición parlamentaria',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'politics-democracy-elections',
        title: 'Democracia y elecciones',
        entries: [
          {id:'politics-democracy',word:'démocratie',translation:'democracia',articleFr:'la',articleEs:'la'},
          {id:'politics-election',word:'élection',translation:'elección',articleFr:'une',articleEs:'una'},
          {id:'politics-electoral-campaign',word:'campagne électorale',translation:'campaña electoral',articleFr:'une',articleEs:'una'},
          {id:'politics-candidate',word:'candidat',translation:'candidato',articleFr:'un',articleEs:'un'},
          {id:'politics-candidate-feminine',word:'candidate',translation:'candidata',articleFr:'une',articleEs:'una'},
          {id:'politics-ballot',word:'bulletin de vote',translation:'papeleta electoral',articleFr:'un',articleEs:'una'},
          {id:'politics-ballot-box',word:'urne électorale',translation:'urna electoral',articleFr:'une',articleEs:'una'},
          {id:'politics-polling-station',word:'bureau de vote',translation:'colegio electoral / mesa electoral',articleFr:'un',articleEs:'un'},
          {id:'politics-electoral-roll',word:'liste électorale',translation:'lista electoral',articleFr:'une',articleEs:'una'},
          {id:'politics-voter',word:'électeur',translation:'elector / votante',articleFr:'un',articleEs:'un'},
          {id:'politics-voter-feminine',word:'électrice',translation:'electora / votante',articleFr:'une',articleEs:'una'},
          {id:'politics-vote',word:'vote',translation:'voto',articleFr:'un',articleEs:'un'},
          {id:'politics-voting',word:'scrutin',translation:'votación / escrutinio',articleFr:'un',articleEs:'un'},
          {id:'politics-referendum',word:'référendum',translation:'referéndum',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'politics-citizenship-participation',
        title: 'Ciudadanía y participación',
        entries: [
          {id:'politics-citizen',word:'citoyen',translation:'ciudadano',articleFr:'un',articleEs:'un'},
          {id:'politics-citizen-feminine',word:'citoyenne',translation:'ciudadana',articleFr:'une',articleEs:'una'},
          {id:'politics-citizenship',word:'citoyenneté',translation:'ciudadanía',articleFr:'la',articleEs:'la'},
          {id:'politics-participation',word:'participation citoyenne',translation:'participación ciudadana',articleFr:'une',articleEs:'una'},
          {id:'politics-public-life',word:'vie publique',translation:'vida pública',articleFr:'la',articleEs:'la'},
          {id:'politics-civic-engagement',word:'engagement citoyen',translation:'compromiso ciudadano',articleFr:'un',articleEs:'un'},
          {id:'politics-activism',word:'militantisme',translation:'militancia / activismo',articleFr:'le',articleEs:'la'},
          {id:'politics-demonstration',word:'manifestation',translation:'manifestación',articleFr:'une',articleEs:'una'},
          {id:'politics-petition',word:'pétition',translation:'petición',articleFr:'une',articleEs:'una'},
          {id:'politics-civic-association',word:'association civique',translation:'asociación cívica',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'politics-parties-ideologies',
        title: 'Partidos e ideologías',
        entries: [
          {id:'politics-political-party',word:'parti politique',translation:'partido político',articleFr:'un',articleEs:'un'},
          {id:'politics-party-member',word:'membre d’un parti',translation:'miembro de un partido',articleFr:'un',articleEs:'un'},
          {id:'politics-party-leader',word:'chef de parti',translation:'líder de un partido',articleFr:'un',articleEs:'un'},
          {id:'politics-political-program',word:'programme politique',translation:'programa político',articleFr:'un',articleEs:'un'},
          {id:'politics-political-movement',word:'mouvement politique',translation:'movimiento político',articleFr:'un',articleEs:'un'},
          {id:'politics-political-ideology',word:'idéologie politique',translation:'ideología política',articleFr:'une',articleEs:'una'},
          {id:'politics-left',word:'gauche',translation:'izquierda',articleFr:'la',articleEs:'la'},
          {id:'politics-political-right',word:'droite',translation:'derecha',articleFr:'la',articleEs:'la'},
          {id:'politics-center',word:'centre',translation:'centro',articleFr:'le',articleEs:'el'},
          {id:'politics-coalition',word:'coalition',translation:'coalición',articleFr:'une',articleEs:'una'},
          {id:'politics-party-member-card',word:'carte de membre',translation:'carné de afiliado',articleFr:'une',articleEs:'un'}
        ]
      },
      {
        id: 'politics-law-rights-constitution',
        title: 'Leyes, derechos y Constitución',
        entries: [
          {id:'politics-constitution',word:'Constitution',translation:'Constitución',articleFr:'la',articleEs:'la'},
          {id:'politics-law',word:'loi',translation:'ley',articleFr:'une',articleEs:'una'},
          {id:'politics-bill',word:'projet de loi',translation:'proyecto de ley',articleFr:'un',articleEs:'un'},
          {id:'politics-amendment',word:'amendement',translation:'enmienda',articleFr:'un',articleEs:'una'},
          {id:'politics-right',word:'droit',translation:'derecho',articleFr:'un',articleEs:'un'},
          {id:'politics-fundamental-right',word:'droit fondamental',translation:'derecho fundamental',articleFr:'un',articleEs:'un'},
          {id:'politics-human-rights',word:'droits humains',translation:'derechos humanos',articleFr:'les',articleEs:'los'},
          {id:'politics-freedom',word:'liberté',translation:'libertad',articleFr:'la',articleEs:'la'},
          {id:'politics-equality',word:'égalité',translation:'igualdad',articleFr:'l’',articleEs:'la'},
          {id:'politics-justice',word:'justice',translation:'justicia',articleFr:'la',articleEs:'la'},
          {id:'politics-separation-of-powers',word:'séparation des pouvoirs',translation:'separación de poderes',articleFr:'la',articleEs:'la'},
          {id:'politics-rule-of-law',word:'État de droit',translation:'Estado de derecho',articleFr:'l’',articleEs:'el'}
        ]
      },
      {
        id: 'politics-authority-power',
        title: 'Poder y autoridad',
        entries: [
          {id:'politics-power',word:'pouvoir',translation:'poder',articleFr:'le',articleEs:'el'},
          {id:'politics-authority',word:'autorité',translation:'autoridad',articleFr:'l’',articleEs:'la'},
          {id:'politics-sovereignty',word:'souveraineté',translation:'soberanía',articleFr:'la',articleEs:'la'},
          {id:'politics-public-authority',word:'autorité publique',translation:'autoridad pública',articleFr:'une',articleEs:'una'},
          {id:'politics-political-responsibility',word:'responsabilité politique',translation:'responsabilidad política',articleFr:'une',articleEs:'una'},
          {id:'politics-mandate',word:'mandat',translation:'mandato',articleFr:'un',articleEs:'un'},
          {id:'politics-term-of-office',word:'mandat électoral',translation:'mandato electoral',articleFr:'un',articleEs:'un'},
          {id:'politics-office',word:'fonction publique',translation:'cargo público',articleFr:'une',articleEs:'un'},
          {id:'politics-public-office-holder',word:'responsable politique',translation:'responsable político / responsable política',articleFr:'un',articleEs:'un'},
          {id:'politics-political-opposition',word:'opposition',translation:'oposición',articleFr:'l’',articleEs:'la'},
          {id:'politics-political-majority',word:'majorité',translation:'mayoría',articleFr:'la',articleEs:'la'}
        ]
      },
      {
        id: 'politics-international-relations',
        title: 'Relaciones internacionales',
        entries: [
          {id:'politics-international-relations',word:'relations internationales',translation:'relaciones internacionales',articleFr:'les',articleEs:'las'},
          {id:'politics-diplomacy',word:'diplomatie',translation:'diplomacia',articleFr:'la',articleEs:'la'},
          {id:'politics-diplomat',word:'diplomate',translation:'diplomático / diplomática',articleFr:'un',articleEs:'un'},
          {id:'politics-embassy',word:'ambassade',translation:'embajada',articleFr:'une',articleEs:'una'},
          {id:'politics-ambassador',word:'ambassadeur',translation:'embajador',articleFr:'un',articleEs:'un'},
          {id:'politics-ambassador-feminine',word:'ambassadrice',translation:'embajadora',articleFr:'une',articleEs:'una'},
          {id:'politics-treaty',word:'traité',translation:'tratado',articleFr:'un',articleEs:'un'},
          {id:'politics-agreement',word:'accord international',translation:'acuerdo internacional',articleFr:'un',articleEs:'un'},
          {id:'politics-alliance',word:'alliance',translation:'alianza',articleFr:'une',articleEs:'una'},
          {id:'politics-border',word:'frontière',translation:'frontera',articleFr:'une',articleEs:'una'},
          {id:'politics-international-organization',word:'organisation internationale',translation:'organización internacional',articleFr:'une',articleEs:'una'}
        ]
      }
    ]
  };

  if (!window.COQ_VOCABULARY_DATABASE_API || typeof window.COQ_VOCABULARY_DATABASE_API.registerCategory !== 'function') {
    throw new Error('COQ Vocabulario: el registro de base de datos debe cargarse antes de las categorías.');
  }

  window.COQ_VOCABULARY_POLITICS = Object.freeze(category);
  window.COQ_VOCABULARY_DATABASE_API.registerCategory(category);
})();
