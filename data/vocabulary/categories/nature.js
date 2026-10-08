/* COQ — Vocabulario · Naturaleza
 * Fuente de verdad del contenido de la categoría «Naturaleza».
 * Una entrada aparece una sola vez en el sistema de vocabulario.
 */
(function () {
  'use strict';

  const category = {
    id: 'nature',
    title: 'Naturaleza',
    subcategories: [
      {
        id: 'nature-landscapes',
        title: 'Paisajes y entornos naturales',
        entries: [
          {id:'nature-nature',word:'nature',translation:'naturaleza',articleFr:'la',articleEs:'la'},
          {id:'nature-landscape',word:'paysage',translation:'paisaje',articleFr:'un',articleEs:'un'},
          {id:'nature-countryside',word:'campagne',translation:'campo / zona rural',articleFr:'la',articleEs:'el'},
          {id:'nature-forest',word:'forêt',translation:'bosque',articleFr:'une',articleEs:'un'},
          {id:'nature-jungle',word:'jungle',translation:'selva',articleFr:'une',articleEs:'una'},
          {id:'nature-savanna',word:'savane',translation:'sabana',articleFr:'une',articleEs:'una'},
          {id:'nature-prairie',word:'prairie',translation:'pradera',articleFr:'une',articleEs:'una'},
          {id:'nature-field',word:'champ',translation:'campo',articleFr:'un',articleEs:'un'},
          {id:'nature-wetland',word:'marais',translation:'pantano / humedal',articleFr:'un',articleEs:'un'},
          {id:'nature-desert',word:'désert',translation:'desierto',articleFr:'un',articleEs:'un'},
          {id:'nature-canyon',word:'canyon',translation:'cañón',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'nature-mountains-relief',
        title: 'Montañas y relieve',
        entries: [
          {id:'nature-mountain',word:'montagne',translation:'montaña',articleFr:'une',articleEs:'una'},
          {id:'nature-hill',word:'colline',translation:'colina',articleFr:'une',articleEs:'una'},
          {id:'nature-valley',word:'vallée',translation:'valle',articleFr:'une',articleEs:'un'},
          {id:'nature-cliff',word:'falaise',translation:'acantilado',articleFr:'une',articleEs:'un'},
          {id:'nature-rock',word:'rocher',translation:'roca',articleFr:'un',articleEs:'una'},
          {id:'nature-stone',word:'pierre',translation:'piedra',articleFr:'une',articleEs:'una'},
          {id:'nature-cave',word:'grotte',translation:'cueva',articleFr:'une',articleEs:'una'},
          {id:'nature-volcano',word:'volcan',translation:'volcán',articleFr:'un',articleEs:'un'},
          {id:'nature-glacier',word:'glacier',translation:'glaciar',articleFr:'un',articleEs:'un'},
          {id:'nature-summit',word:'sommet',translation:'cima / cumbre',articleFr:'un',articleEs:'una'},
          {id:'nature-mountain-slope',word:'flanc de montagne',translation:'falda o declive de la montaña',articleFr:'un',articleEs:'una'}
        ]
      },
      {
        id: 'nature-water',
        title: 'Agua y medios acuáticos',
        entries: [
          {id:'nature-water',word:'eau',translation:'agua',articleFr:'une',articleEs:'una'},
          {id:'nature-sea',word:'mer',translation:'mar',articleFr:'une',articleEs:'una'},
          {id:'nature-ocean',word:'océan',translation:'océano',articleFr:'un',articleEs:'un'},
          {id:'nature-river',word:'rivière',translation:'río',articleFr:'une',articleEs:'un'},
          {id:'nature-stream',word:'ruisseau',translation:'arroyo',articleFr:'un',articleEs:'un'},
          {id:'nature-lake',word:'lac',translation:'lago',articleFr:'un',articleEs:'un'},
          {id:'nature-waterfall',word:'cascade',translation:'cascada',articleFr:'une',articleEs:'una'},
          {id:'nature-pond',word:'étang',translation:'estanque',articleFr:'un',articleEs:'un'},
          {id:'nature-island',word:'île',translation:'isla',articleFr:'une',articleEs:'una'},
          {id:'nature-coast',word:'côte',translation:'costa',articleFr:'une',articleEs:'una'},
          {id:'nature-shore',word:'rivage',translation:'orilla / litoral',articleFr:'un',articleEs:'una'},
          {id:'nature-estuary',word:'embouchure',translation:'desembocadura',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'nature-plants',
        title: 'Plantas y vegetación',
        entries: [
          {id:'nature-plant',word:'plante',translation:'planta',articleFr:'une',articleEs:'una'},
          {id:'nature-tree',word:'arbre',translation:'árbol',articleFr:'un',articleEs:'un'},
          {id:'nature-flower',word:'fleur',translation:'flor',articleFr:'une',articleEs:'una'},
          {id:'nature-grass',word:'herbe',translation:'hierba',articleFr:'une',articleEs:'una'},
          {id:'nature-leaf',word:'feuille',translation:'hoja',articleFr:'une',articleEs:'una'},
          {id:'nature-branch',word:'branche',translation:'rama',articleFr:'une',articleEs:'una'},
          {id:'nature-trunk',word:'tronc',translation:'tronco',articleFr:'un',articleEs:'un'},
          {id:'nature-root',word:'racine',translation:'raíz',articleFr:'une',articleEs:'una'},
          {id:'nature-bark',word:'écorce',translation:'corteza',articleFr:'une',articleEs:'una'},
          {id:'nature-seed',word:'graine',translation:'semilla',articleFr:'une',articleEs:'una'},
          {id:'nature-petal',word:'pétale',translation:'pétalo',articleFr:'un',articleEs:'un'},
          {id:'nature-thorn',word:'épine',translation:'espina',articleFr:'une',articleEs:'una'},
          {id:'nature-bud',word:'bourgeon',translation:'brote',articleFr:'un',articleEs:'un'},
          {id:'nature-moss',word:'mousse',translation:'musgo',articleFr:'une',articleEs:'un'},
          {id:'nature-algae',word:'algue',translation:'alga',articleFr:'une',articleEs:'una'},
          {id:'nature-mushroom',word:'champignon',translation:'seta / hongo',articleFr:'un',articleEs:'una'}
        ]
      },
      {
        id: 'nature-trees-flowers',
        title: 'Árboles y flores',
        entries: [
          {id:'nature-oak',word:'chêne',translation:'roble',articleFr:'un',articleEs:'un'},
          {id:'nature-pine',word:'pin',translation:'pino',articleFr:'un',articleEs:'un'},
          {id:'nature-fir',word:'sapin',translation:'abeto',articleFr:'un',articleEs:'un'},
          {id:'nature-palm-tree',word:'palmier',translation:'palmera',articleFr:'un',articleEs:'una'},
          {id:'nature-bamboo',word:'bambou',translation:'bambú',articleFr:'un',articleEs:'un'},
          {id:'nature-rose',word:'rose',translation:'rosa',articleFr:'une',articleEs:'una'},
          {id:'nature-tulip',word:'tulipe',translation:'tulipán',articleFr:'une',articleEs:'un'},
          {id:'nature-sunflower',word:'tournesol',translation:'girasol',articleFr:'un',articleEs:'un'},
          {id:'nature-daisy',word:'marguerite',translation:'margarita',articleFr:'une',articleEs:'una'},
          {id:'nature-cactus',word:'cactus',translation:'cactus',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'nature-earth-materials',
        title: 'Tierra y elementos naturales',
        entries: [
          {id:'nature-earth',word:'terre',translation:'tierra',articleFr:'la',articleEs:'la'},
          {id:'nature-soil',word:'sol',translation:'suelo',articleFr:'un',articleEs:'un'},
          {id:'nature-sand',word:'sable',translation:'arena',articleFr:'le',articleEs:'la'},
          {id:'nature-mud',word:'boue',translation:'barro',articleFr:'la',articleEs:'el'},
          {id:'nature-pebble',word:'caillou',translation:'piedrecita / guijarro',articleFr:'un',articleEs:'un'},
          {id:'nature-gravel',word:'gravier',translation:'grava',articleFr:'le',articleEs:'la'},
          {id:'nature-dust',word:'poussière',translation:'polvo',articleFr:'la',articleEs:'el'},
          {id:'nature-fossil',word:'fossile',translation:'fósil',articleFr:'un',articleEs:'un'},
          {id:'nature-crystal',word:'cristal',translation:'cristal',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'nature-orientation-earth-references',
        title: 'Orientación y referencias terrestres',
        entries: [
          {id:'nature-north',word:'nord',translation:'norte',articleFr:'le',articleEs:'el'},
          {id:'nature-south',word:'sud',translation:'sur',articleFr:'le',articleEs:'el'},
          {id:'nature-east',word:'est',translation:'este',articleFr:'l’',articleEs:'el'},
          {id:'nature-west',word:'ouest',translation:'oeste',articleFr:'l’',articleEs:'el'},
          {id:'nature-hemisphere',word:'hémisphère',translation:'hemisferio',articleFr:'un',articleEs:'un'},
          {id:'nature-equator',word:'équateur',translation:'ecuador',articleFr:'l’',articleEs:'el'},
          {id:'nature-tropic-cancer',word:'tropique du Cancer',translation:'trópico de Cáncer',articleFr:'le',articleEs:'el'},
          {id:'nature-tropic-capricorn',word:'tropique du Capricorne',translation:'trópico de Capricornio',articleFr:'le',articleEs:'el'},
          {id:'nature-polar-circle',word:'cercle polaire',translation:'círculo polar',articleFr:'un',articleEs:'un'},
          {id:'nature-summer-solstice',word:'solstice d’été',translation:'solsticio de verano',articleFr:'le',articleEs:'el'},
          {id:'nature-winter-solstice',word:'solstice d’hiver',translation:'solsticio de invierno',articleFr:'le',articleEs:'el'},
          {id:'nature-spring-equinox',word:'équinoxe de printemps',translation:'equinoccio de primavera',articleFr:'l’',articleEs:'el'},
          {id:'nature-autumn-equinox',word:'équinoxe d’automne',translation:'equinoccio de otoño',articleFr:'l’',articleEs:'el'}
        ]
      },
      {
        id: 'nature-environment',
        title: 'Medio ambiente y conservación',
        entries: [
          {id:'nature-environment',word:'environnement',translation:'medio ambiente',articleFr:'un',articleEs:'el'},
          {id:'nature-ecosystem',word:'écosystème',translation:'ecosistema',articleFr:'un',articleEs:'un'},
          {id:'nature-habitat',word:'habitat',translation:'hábitat',articleFr:'un',articleEs:'un'},
          {id:'nature-species',word:'espèce',translation:'especie',articleFr:'une',articleEs:'una'},
          {id:'nature-pollution',word:'pollution',translation:'contaminación',articleFr:'la',articleEs:'la'},
          {id:'nature-recycling',word:'recyclage',translation:'reciclaje',articleFr:'le',articleEs:'el'},
          {id:'nature-protection',word:'protection',translation:'protección',articleFr:'la',articleEs:'la'},
          {id:'nature-reserve',word:'réserve naturelle',translation:'reserva natural',articleFr:'une',articleEs:'una'},
          {id:'nature-natural-resource',word:'ressource naturelle',translation:'recurso natural',articleFr:'une',articleEs:'un'},
          {id:'nature-endangered-species',word:'espèce en voie de disparition',translation:'especie en peligro de extinción',articleFr:'une',articleEs:'una'}
        ]
      }
    ]
  };

  if (!window.COQ_VOCABULARY_DATABASE_API || typeof window.COQ_VOCABULARY_DATABASE_API.registerCategory !== 'function') {
    throw new Error('COQ Vocabulario: el registro de base de datos debe cargarse antes de las categorías.');
  }

  window.COQ_VOCABULARY_NATURE = Object.freeze(category);
  window.COQ_VOCABULARY_DATABASE_API.registerCategory(category);
})();
