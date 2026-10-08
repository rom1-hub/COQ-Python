/* COQ — Vocabulario · Planetas y el espacio
 * Fuente de verdad del contenido de la categoría «Planetas y el espacio».
 * Una entrada aparece una sola vez dentro de esta categoría.
 */
(function () {
  'use strict';

  const category = {
    id: 'planets-space',
    title: 'Planetas y el espacio',
    subcategories: [
      {
        id: 'space-solar-system-earth-moon',
        title: 'El sistema solar, la Tierra y la Luna',
        entries: [
          {id:'space-sun',word:'Soleil',translation:'Sol',articleFr:'le',articleEs:'el'},
          {id:'space-planet',word:'planète',translation:'planeta',articleFr:'une',articleEs:'un'},
          {id:'space-mercury',word:'Mercure',translation:'Mercurio',articleFr:'',articleEs:''},
          {id:'space-venus',word:'Vénus',translation:'Venus',articleFr:'',articleEs:''},
          {id:'space-earth',word:'Terre',translation:'Tierra',articleFr:'la',articleEs:'la'},
          {id:'space-mars',word:'Mars',translation:'Marte',articleFr:'',articleEs:''},
          {id:'space-jupiter',word:'Jupiter',translation:'Júpiter',articleFr:'',articleEs:''},
          {id:'space-saturn',word:'Saturne',translation:'Saturno',articleFr:'',articleEs:''},
          {id:'space-uranus',word:'Uranus',translation:'Urano',articleFr:'',articleEs:''},
          {id:'space-neptune',word:'Neptune',translation:'Neptuno',articleFr:'',articleEs:''},
          {id:'space-solar-system',word:'système solaire',translation:'sistema solar',articleFr:'le',articleEs:'el'},
          {id:'space-orbit',word:'orbite',translation:'órbita',articleFr:'une',articleEs:'una'},
          {id:'space-moon',word:'Lune',translation:'Luna',articleFr:'la',articleEs:'la'},
          {id:'space-satellite',word:'satellite',translation:'satélite',articleFr:'un',articleEs:'un'},
          {id:'space-crescent-moon',word:'croissant de lune',translation:'luna creciente',articleFr:'un',articleEs:'una'},
          {id:'space-full-moon',word:'pleine lune',translation:'luna llena',articleFr:'la',articleEs:'la'},
          {id:'space-new-moon',word:'nouvelle lune',translation:'luna nueva',articleFr:'la',articleEs:'la'},
          {id:'space-quarter-moon',word:'quartier de lune',translation:'cuarto de luna',articleFr:'un',articleEs:'un'},
          {id:'space-surface',word:'surface',translation:'superficie',articleFr:'une',articleEs:'una'},
          {id:'space-crater',word:'cratère',translation:'cráter',articleFr:'un',articleEs:'un'},
          {id:'space-pole',word:'pôle',translation:'polo',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'space-stars-celestial-bodies',
        title: 'Estrellas y otros cuerpos celestes',
        entries: [
          {id:'space-star',word:'étoile',translation:'estrella',articleFr:'une',articleEs:'una'},
          {id:'space-shooting-star',word:'étoile filante',translation:'estrella fugaz',articleFr:'une',articleEs:'una'},
          {id:'space-asteroid',word:'astéroïde',translation:'asteroide',articleFr:'un',articleEs:'un'},
          {id:'space-meteorite',word:'météorite',translation:'meteorito',articleFr:'une',articleEs:'un'},
          {id:'space-meteoroid',word:'météoroïde',translation:'meteoroide',articleFr:'un',articleEs:'un'},
          {id:'space-comet',word:'comète',translation:'cometa',articleFr:'une',articleEs:'un'},
          {id:'space-galaxy',word:'galaxie',translation:'galaxia',articleFr:'une',articleEs:'una'},
          {id:'space-nebula',word:'nébuleuse',translation:'nebulosa',articleFr:'une',articleEs:'una'},
          {id:'space-star-cluster',word:'amas d’étoiles',translation:'cúmulo de estrellas',articleFr:'un',articleEs:'un'},
          {id:'space-black-hole',word:'trou noir',translation:'agujero negro',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'space-universe',
        title: 'El espacio y el universo',
        entries: [
          {id:'space-space',word:'espace',translation:'espacio',articleFr:'l’',articleEs:'el'},
          {id:'space-universe',word:'univers',translation:'universo',articleFr:'l’',articleEs:'el'},
          {id:'space-cosmos',word:'cosmos',translation:'cosmos',articleFr:'le',articleEs:'el'},
          {id:'space-milky-way',word:'Voie lactée',translation:'Vía Láctea',articleFr:'la',articleEs:'la'},
          {id:'space-interstellar-space',word:'espace interstellaire',translation:'espacio interestelar',articleFr:'l’',articleEs:'el'},
          {id:'space-deep-space',word:'espace profond',translation:'espacio profundo',articleFr:'l’',articleEs:'el'},
          {id:'space-vacuum',word:'vide spatial',translation:'vacío espacial',articleFr:'le',articleEs:'el'},
          {id:'space-gravity',word:'gravité',translation:'gravedad',articleFr:'la',articleEs:'la'},
          {id:'space-light',word:'lumière',translation:'luz',articleFr:'la',articleEs:'la'},
          {id:'space-matter',word:'matière',translation:'materia',articleFr:'la',articleEs:'la'}
        ]
      },
      {
        id: 'space-astronomical-phenomena-movements',
        title: 'Fenómenos y movimientos astronómicos',
        entries: [
          {id:'space-eclipse',word:'éclipse',translation:'eclipse',articleFr:'une',articleEs:'un'},
          {id:'space-solar-eclipse',word:'éclipse solaire',translation:'eclipse solar',articleFr:'une',articleEs:'un'},
          {id:'space-lunar-eclipse',word:'éclipse lunaire',translation:'eclipse lunar',articleFr:'une',articleEs:'un'},
          {id:'space-sunrise',word:'lever du soleil',translation:'amanecer / salida del Sol',articleFr:'le',articleEs:'el'},
          {id:'space-sunset',word:'coucher du soleil',translation:'atardecer / puesta del Sol',articleFr:'le',articleEs:'el'},
          {id:'space-moonrise',word:'lever de la Lune',translation:'salida de la Luna',articleFr:'le',articleEs:'la'},
          {id:'space-rotation',word:'rotation',translation:'rotación',articleFr:'la',articleEs:'la'},
          {id:'space-revolution',word:'révolution',translation:'revolución',articleFr:'la',articleEs:'la'},
          {id:'space-gravitation',word:'gravitation',translation:'gravitación',articleFr:'la',articleEs:'la'}
        ]
      },
      {
        id: 'space-exploration',
        title: 'Exploración espacial',
        entries: [
          {id:'space-exploration',word:'exploration spatiale',translation:'exploración espacial',articleFr:'l’',articleEs:'la'},
          {id:'space-mission',word:'mission spatiale',translation:'misión espacial',articleFr:'une',articleEs:'una'},
          {id:'space-astronaut',word:'astronaute',translation:'astronauta',articleFr:'un',articleEs:'un'},
          {id:'space-cosmonaut',word:'cosmonaute',translation:'cosmonauta',articleFr:'un',articleEs:'un'},
          {id:'space-agency',word:'agence spatiale',translation:'agencia espacial',articleFr:'une',articleEs:'una'},
          {id:'space-launch',word:'lancement',translation:'lanzamiento',articleFr:'un',articleEs:'un'},
          {id:'space-liftoff',word:'décollage',translation:'despegue',articleFr:'un',articleEs:'un'},
          {id:'space-landing',word:'atterrissage',translation:'aterrizaje',articleFr:'un',articleEs:'un'},
          {id:'space-splashdown',word:'amerrissage',translation:'amerizaje',articleFr:'un',articleEs:'un'},
          {id:'space-station',word:'station spatiale',translation:'estación espacial',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'space-vessels-vehicles',
        title: 'Naves y vehículos espaciales',
        entries: [
          {id:'space-rocket',word:'fusée',translation:'cohete',articleFr:'une',articleEs:'un'},
          {id:'space-spacecraft',word:'vaisseau spatial',translation:'nave espacial',articleFr:'un',articleEs:'una'},
          {id:'space-space-shuttle',word:'navette spatiale',translation:'transbordador espacial',articleFr:'une',articleEs:'un'},
          {id:'space-artificial-satellite',word:'satellite artificiel',translation:'satélite artificial',articleFr:'un',articleEs:'un'},
          {id:'space-probe',word:'sonde spatiale',translation:'sonda espacial',articleFr:'une',articleEs:'una'},
          {id:'space-rover',word:'rover',translation:'vehículo explorador',articleFr:'un',articleEs:'un'},
          {id:'space-lunar-module',word:'module lunaire',translation:'módulo lunar',articleFr:'un',articleEs:'un'},
          {id:'space-telescope',word:'télescope spatial',translation:'telescopio espacial',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'space-equipment-objects',
        title: 'Equipamiento y objetos espaciales',
        entries: [
          {id:'space-spacesuit',word:'combinaison spatiale',translation:'traje espacial',articleFr:'une',articleEs:'un'},
          {id:'space-space-helmet',word:'casque spatial',translation:'casco espacial',articleFr:'un',articleEs:'un'},
          {id:'space-scaphandre',word:'scaphandre',translation:'traje espacial',articleFr:'un',articleEs:'un'},
          {id:'space-tank',word:'réservoir',translation:'depósito',articleFr:'un',articleEs:'un'},
          {id:'space-engine',word:'moteur',translation:'motor',articleFr:'un',articleEs:'un'},
          {id:'space-thruster',word:'propulseur',translation:'propulsor',articleFr:'un',articleEs:'un'},
          {id:'space-solar-panel',word:'panneau solaire',translation:'panel solar',articleFr:'un',articleEs:'un'},
          {id:'space-antenna',word:'antenne',translation:'antena',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'space-astronomy-observation',
        title: 'Astronomía y observación',
        entries: [
          {id:'space-astronomy',word:'astronomie',translation:'astronomía',articleFr:'l’',articleEs:'la'},
          {id:'space-astronomer',word:'astronome',translation:'astrónomo',articleFr:'un',articleEs:'un'},
          {id:'space-observatory',word:'observatoire',translation:'observatorio',articleFr:'un',articleEs:'un'},
          {id:'space-constellation',word:'constellation',translation:'constelación',articleFr:'une',articleEs:'una'},
          {id:'space-sky-map',word:'carte du ciel',translation:'mapa del cielo',articleFr:'une',articleEs:'un'},
          {id:'space-star-system',word:'système stellaire',translation:'sistema estelar',articleFr:'un',articleEs:'un'},
          {id:'space-exoplanet',word:'exoplanète',translation:'exoplaneta',articleFr:'une',articleEs:'un'},
          {id:'space-dwarf-planet',word:'planète naine',translation:'planeta enano',articleFr:'une',articleEs:'un'},
          {id:'space-night-sky',word:'ciel nocturne',translation:'cielo nocturno',articleFr:'le',articleEs:'el'}
        ]
      },
      {
        id: 'space-life-conditions',
        title: 'Vida y condiciones en el espacio',
        entries: [
          {id:'space-weightlessness',word:'apesanteur',translation:'ingravidez',articleFr:'l’',articleEs:'la'},
          {id:'space-microgravity',word:'microgravité',translation:'microgravedad',articleFr:'la',articleEs:'la'},
          {id:'space-atmosphere',word:'atmosphère',translation:'atmósfera',articleFr:'une',articleEs:'una'},
          {id:'space-temperature',word:'température',translation:'temperatura',articleFr:'la',articleEs:'la'},
          {id:'space-radiation',word:'rayonnement',translation:'radiación',articleFr:'un',articleEs:'la'},
          {id:'space-oxygen',word:'oxygène',translation:'oxígeno',articleFr:'l’',articleEs:'el'},
          {id:'space-pressure',word:'pression',translation:'presión',articleFr:'la',articleEs:'la'},
          {id:'space-habitability',word:'habitabilité',translation:'habitabilidad',articleFr:'l’',articleEs:'la'},
          {id:'space-extraterrestrial-life',word:'vie extraterrestre',translation:'vida extraterrestre',articleFr:'la',articleEs:'la'},
          {id:'space-extraterrestrial',word:'extraterrestre',translation:'extraterrestre',articleFr:'un',articleEs:'un'}
        ]
      }
    ]
  };

  if (!window.COQ_VOCABULARY_DATABASE_API || typeof window.COQ_VOCABULARY_DATABASE_API.registerCategory !== 'function') {
    throw new Error('COQ Vocabulario: el registro de base de datos debe cargarse antes de las categorías.');
  }

  window.COQ_VOCABULARY_PLANETS_SPACE = Object.freeze(category);
  window.COQ_VOCABULARY_DATABASE_API.registerCategory(category);
})();
