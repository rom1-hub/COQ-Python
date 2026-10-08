/* COQ — Vocabulario · Transporte y desplazamientos */
(function () {
  'use strict';

  const category = {
    id: 'transport',
    title: 'Transporte y desplazamientos',
    subcategories: [
      {
        id: 'transport-land',
        title: 'Medios de transporte terrestres',
        entries: [
          {id:'transport-car',word:'voiture',translation:'coche / automóvil',articleFr:'une',articleEs:'un'},
          {id:'transport-bus',word:'bus',translation:'autobús',articleFr:'un',articleEs:'un'},
          {id:'transport-coach',word:'car',translation:'autocar',articleFr:'un',articleEs:'un'},
          {id:'transport-taxi',word:'taxi',translation:'taxi',articleFr:'un',articleEs:'un'},
          {id:'transport-bike',word:'vélo',translation:'bicicleta',articleFr:'un',articleEs:'una'},
          {id:'transport-motorcycle',word:'moto',translation:'moto',articleFr:'une',articleEs:'una'},
          {id:'transport-scooter',word:'scooter',translation:'scooter',articleFr:'un',articleEs:'un'},
          {id:'transport-scooter-kick',word:'trottinette',translation:'patinete',articleFr:'une',articleEs:'un'},
          {id:'transport-train',word:'train',translation:'tren',articleFr:'un',articleEs:'un'},
          {id:'transport-tram',word:'tramway',translation:'tranvía',articleFr:'un',articleEs:'un'},
          {id:'transport-metro',word:'métro',translation:'metro',articleFr:'un',articleEs:'un'},
          {id:'transport-truck',word:'camion',translation:'camión',articleFr:'un',articleEs:'un'},
          {id:'transport-van',word:'camionnette',translation:'furgoneta',articleFr:'une',articleEs:'una'},
          {id:'transport-minibus',word:'minibus',translation:'minibús',articleFr:'un',articleEs:'un'},
          {id:'transport-motorhome',word:'camping-car',translation:'autocaravana',articleFr:'un',articleEs:'una'},
          {id:'transport-tractor',word:'tracteur',translation:'tractor',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'transport-air-space',
        title: 'Transporte aéreo y espacial',
        entries: [
          {id:'transport-plane',word:'avion',translation:'avión',articleFr:'un',articleEs:'un'},
          {id:'transport-helicopter',word:'hélicoptère',translation:'helicóptero',articleFr:'un',articleEs:'un'},
          {id:'transport-hot-air-balloon',word:'montgolfière',translation:'globo aerostático',articleFr:'une',articleEs:'un'},
          {id:'transport-glider',word:'planeur',translation:'planeador',articleFr:'un',articleEs:'un'},
          {id:'transport-airship',word:'dirigeable',translation:'dirigible',articleFr:'un',articleEs:'un'},
          {id:'transport-seaplane',word:'hydravion',translation:'hidroavión',articleFr:'un',articleEs:'un'},
          {id:'transport-drone',word:'drone',translation:'dron',articleFr:'un',articleEs:'un'},
          {id:'transport-rocket',word:'fusée',translation:'cohete',articleFr:'une',articleEs:'un'},
          {id:'transport-space-shuttle',word:'navette spatiale',translation:'transbordador espacial',articleFr:'une',articleEs:'un'}
        ]
      },
      {
        id: 'transport-water',
        title: 'Transporte marítimo y fluvial',
        entries: [
          {id:'transport-boat',word:'bateau',translation:'barco',articleFr:'un',articleEs:'un'},
          {id:'transport-ferry',word:'ferry',translation:'ferry',articleFr:'un',articleEs:'un'},
          {id:'transport-ship',word:'navire',translation:'buque',articleFr:'un',articleEs:'un'},
          {id:'transport-sailboat',word:'voilier',translation:'velero',articleFr:'un',articleEs:'un'},
          {id:'transport-yacht',word:'yacht',translation:'yate',articleFr:'un',articleEs:'un'},
          {id:'transport-liner',word:'paquebot',translation:'transatlántico',articleFr:'un',articleEs:'un'},
          {id:'transport-submarine',word:'sous-marin',translation:'submarino',articleFr:'un',articleEs:'un'},
          {id:'transport-canoe',word:'canoë',translation:'canoa',articleFr:'un',articleEs:'una'},
          {id:'transport-kayak',word:'kayak',translation:'kayak',articleFr:'un',articleEs:'un'},
          {id:'transport-rowboat',word:'barque',translation:'barca',articleFr:'une',articleEs:'una'},
          {id:'transport-barge',word:'péniche',translation:'barcaza',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'transport-road-traffic',
        title: 'Carretera y circulación',
        entries: [
          {id:'transport-road',word:'route',translation:'carretera',articleFr:'une',articleEs:'una'},
          {id:'transport-highway',word:'autoroute',translation:'autopista',articleFr:'une',articleEs:'una'},
          {id:'transport-avenue',word:'avenue',translation:'avenida',articleFr:'une',articleEs:'una'},
          {id:'transport-intersection',word:'carrefour',translation:'cruce',articleFr:'un',articleEs:'un'},
          {id:'transport-roundabout',word:'rond-point',translation:'rotonda',articleFr:'un',articleEs:'una'},
          {id:'transport-bridge',word:'pont',translation:'puente',articleFr:'un',articleEs:'un'},
          {id:'transport-tunnel',word:'tunnel',translation:'túnel',articleFr:'un',articleEs:'un'},
          {id:'transport-sidewalk',word:'trottoir',translation:'acera',articleFr:'un',articleEs:'una'},
          {id:'transport-crosswalk',word:'passage piéton',translation:'paso de peatones',articleFr:'un',articleEs:'un'},
          {id:'transport-traffic-light',word:'feu',translation:'semáforo',articleFr:'un',articleEs:'un'},
          {id:'transport-sign',word:'panneau',translation:'señal',articleFr:'un',articleEs:'una'},
          {id:'transport-lane',word:'voie',translation:'carril / vía',articleFr:'une',articleEs:'un'},
          {id:'transport-bike-lane',word:'piste cyclable',translation:'carril bici',articleFr:'une',articleEs:'un'},
          {id:'transport-toll',word:'péage',translation:'peaje',articleFr:'un',articleEs:'un'},
          {id:'transport-parking',word:'parking',translation:'aparcamiento',articleFr:'un',articleEs:'un'},
          {id:'transport-gas-station',word:'station-service',translation:'gasolinera',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'transport-public',
        title: 'Transporte público y desplazamientos',
        entries: [
          {id:'transport-public-transit',word:'transports en commun',translation:'transporte público',articleFr:'les',articleEs:'el'},
          {id:'transport-stop',word:'arrêt',translation:'parada',articleFr:'un',articleEs:'una'},
          {id:'transport-station',word:'station',translation:'estación',articleFr:'une',articleEs:'una'},
          {id:'transport-railway-station',word:'gare',translation:'estación de tren',articleFr:'une',articleEs:'una'},
          {id:'transport-bus-station',word:'gare routière',translation:'estación de autobuses',articleFr:'une',articleEs:'una'},
          {id:'transport-platform',word:'quai',translation:'andén',articleFr:'un',articleEs:'un'},
          {id:'transport-ticket',word:'billet',translation:'billete',articleFr:'un',articleEs:'un'},
          {id:'transport-pass',word:'abonnement',translation:'abono',articleFr:'un',articleEs:'un'},
          {id:'transport-journey',word:'trajet',translation:'trayecto',articleFr:'un',articleEs:'un'},
          {id:'transport-line',word:'ligne',translation:'línea',articleFr:'une',articleEs:'una'},
          {id:'transport-schedule',word:'horaire',translation:'horario',articleFr:'un',articleEs:'un'},
          {id:'transport-connection',word:'correspondance',translation:'transbordo',articleFr:'une',articleEs:'un'},
          {id:'transport-passenger',word:'passager',translation:'pasajero',articleFr:'un',articleEs:'un'},
          {id:'transport-passenger-f',word:'passagère',translation:'pasajera',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'transport-driving',
        title: 'Conducción y desplazamiento',
        entries: [
          {id:'transport-drive',word:'conduire',translation:'conducir',articleFr:null,articleEs:null},
          {id:'transport-ride',word:'rouler',translation:'circular',articleFr:null,articleEs:null},
          {id:'transport-walk',word:'marcher',translation:'caminar',articleFr:null,articleEs:null},
          {id:'transport-cycle',word:'pédaler',translation:'pedalear',articleFr:null,articleEs:null},
          {id:'transport-brake',word:'freiner',translation:'frenar',articleFr:null,articleEs:null},
          {id:'transport-accelerate',word:'accélérer',translation:'acelerar',articleFr:null,articleEs:null},
          {id:'transport-turn',word:'tourner',translation:'girar',articleFr:null,articleEs:null},
          {id:'transport-start',word:'démarrer',translation:'arrancar',articleFr:null,articleEs:null},
          {id:'transport-stop-verb',word:'s’arrêter',translation:'detenerse',articleFr:null,articleEs:null},
          {id:'transport-park-verb',word:'stationner',translation:'estacionar',articleFr:null,articleEs:null},
          {id:'transport-park-self',word:'se garer',translation:'aparcar',articleFr:null,articleEs:null},
          {id:'transport-board',word:'monter',translation:'subir',articleFr:null,articleEs:null},
          {id:'transport-get-off',word:'descendre',translation:'bajar',articleFr:null,articleEs:null},
          {id:'transport-board-ship',word:'embarquer',translation:'embarcar',articleFr:null,articleEs:null},
          {id:'transport-disembark',word:'débarquer',translation:'desembarcar',articleFr:null,articleEs:null},
          {id:'transport-cross',word:'traverser',translation:'cruzar',articleFr:null,articleEs:null},
          {id:'transport-change',word:'changer',translation:'cambiar de transporte',articleFr:null,articleEs:null}
        ]
      }
    ]
  };

  if (!window.COQ_VOCABULARY_DATABASE_API) throw new Error('COQ Vocabulario: registro no disponible.');
  window.COQ_VOCABULARY_DATABASE_API.registerCategory(Object.freeze(category));
})();