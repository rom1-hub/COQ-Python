/* COQ — Vocabulario · Ciudad */
(function () {
  'use strict';
  const category = {
    id:'city', title:'Ciudad', subcategories:[
      {id:'city-streets-public-spaces',title:'Calles y espacios públicos',entries:[
        {id:'city-street',word:'rue',translation:'calle',articleFr:'une',articleEs:'una'},
        {id:'city-avenue',word:'avenue',translation:'avenida',articleFr:'une',articleEs:'una'},
        {id:'city-boulevard',word:'boulevard',translation:'bulevar',articleFr:'un',articleEs:'un'},
        {id:'city-road',word:'route',translation:'carretera',articleFr:'une',articleEs:'una'},
        {id:'city-alley',word:'ruelle',translation:'callejón',articleFr:'une',articleEs:'un'},
        {id:'city-square',word:'place',translation:'plaza',articleFr:'une',articleEs:'una'},
        {id:'city-neighborhood',word:'quartier',translation:'barrio',articleFr:'un',articleEs:'un'},
        {id:'city-center',word:'centre-ville',translation:'centro de la ciudad',articleFr:'un',articleEs:'el'},
        {id:'city-park',word:'parc',translation:'parque',articleFr:'un',articleEs:'un'},
        {id:'city-public-garden',word:'jardin public',translation:'jardín público',articleFr:'un',articleEs:'un'},
        {id:'city-fountain',word:'fontaine',translation:'fuente',articleFr:'une',articleEs:'una'},
        {id:'city-sidewalk',word:'trottoir',translation:'acera / vereda',articleFr:'un',articleEs:'una'},
        {id:'city-crosswalk',word:'passage piéton',translation:'paso de peatones',articleFr:'un',articleEs:'un'},
        {id:'city-traffic-light',word:'feu',translation:'semáforo',articleFr:'un',articleEs:'un'},
        {id:'city-intersection',word:'carrefour',translation:'intersección / cruce',articleFr:'un',articleEs:'una'},
        {id:'city-roundabout',word:'rond-point',translation:'rotonda',articleFr:'un',articleEs:'una'},
        {id:'city-bridge',word:'pont',translation:'puente',articleFr:'un',articleEs:'un'},
        {id:'city-tunnel',word:'tunnel',translation:'túnel',articleFr:'un',articleEs:'un'},
        {id:'city-parking',word:'parking',translation:'estacionamiento / aparcamiento',articleFr:'un',articleEs:'un'}
      ]},
      {id:'city-buildings-public-services',title:'Edificios y servicios públicos',entries:[
        {id:'city-building',word:'bâtiment',translation:'edificio',articleFr:'un',articleEs:'un'},
        {id:'city-town-hall',word:'mairie',translation:'ayuntamiento / municipalidad',articleFr:'une',articleEs:'un'},
        {id:'city-police-station',word:'commissariat',translation:'comisaría',articleFr:'un',articleEs:'una'},
        {id:'city-post-office',word:'poste',translation:'oficina de correos',articleFr:'une',articleEs:'una'},
        {id:'city-court',word:'tribunal',translation:'tribunal',articleFr:'un',articleEs:'un'},
        {id:'city-fire-station',word:'caserne',translation:'cuartel',articleFr:'une',articleEs:'un'},
        {id:'city-library',word:'bibliothèque',translation:'biblioteca',articleFr:'une',articleEs:'una'},
        {id:'city-museum',word:'musée',translation:'museo',articleFr:'un',articleEs:'un'},
        {id:'city-cinema',word:'cinéma',translation:'cine',articleFr:'un',articleEs:'un'},
        {id:'city-theater',word:'théâtre',translation:'teatro',articleFr:'un',articleEs:'un'},
        {id:'city-performance-hall',word:'salle de spectacle',translation:'sala de espectáculos',articleFr:'une',articleEs:'una'},
        {id:'city-cultural-center',word:'centre culturel',translation:'centro cultural',articleFr:'un',articleEs:'un'},
        {id:'city-monument',word:'monument',translation:'monumento',articleFr:'un',articleEs:'un'}
      ]},
      {id:'city-shops',title:'Comercios y tiendas',entries:[
        {id:'city-store',word:'magasin',translation:'tienda',articleFr:'un',articleEs:'una'},
        {id:'city-boutique',word:'boutique',translation:'tienda / boutique',articleFr:'une',articleEs:'una'},
        {id:'city-supermarket',word:'supermarché',translation:'supermercado',articleFr:'un',articleEs:'un'},
        {id:'city-bakery',word:'boulangerie',translation:'panadería',articleFr:'une',articleEs:'una'},
        {id:'city-pastry-shop',word:'pâtisserie',translation:'pastelería',articleFr:'une',articleEs:'una'},
        {id:'city-butcher',word:'boucherie',translation:'carnicería',articleFr:'une',articleEs:'una'},
        {id:'city-fishmonger',word:'poissonnerie',translation:'pescadería',articleFr:'une',articleEs:'una'},
        {id:'city-grocery',word:'épicerie',translation:'tienda de comestibles',articleFr:'une',articleEs:'una'},
        {id:'city-market',word:'marché',translation:'mercado',articleFr:'un',articleEs:'un'},
        {id:'city-bookstore',word:'librairie',translation:'librería',articleFr:'une',articleEs:'una'},
        {id:'city-stationery',word:'papeterie',translation:'papelería',articleFr:'une',articleEs:'una'},
        {id:'city-pharmacy',word:'pharmacie',translation:'farmacia',articleFr:'une',articleEs:'una'},
        {id:'city-florist',word:'fleuriste',translation:'floristería',articleFr:'un',articleEs:'una'},
        {id:'city-clothing-store',word:'magasin de vêtements',translation:'tienda de ropa',articleFr:'un',articleEs:'una'},
        {id:'city-shopping-center',word:'centre commercial',translation:'centro comercial',articleFr:'un',articleEs:'un'}
      ]},
      {id:'city-health-services',title:'Salud y servicios',entries:[
        {id:'city-hospital',word:'hôpital',translation:'hospital',articleFr:'un',articleEs:'un'},
        {id:'city-clinic',word:'clinique',translation:'clínica',articleFr:'une',articleEs:'una'},
        {id:'city-medical-office',word:'cabinet médical',translation:'consulta médica',articleFr:'un',articleEs:'una'},
        {id:'city-health-center',word:'centre de santé',translation:'centro de salud',articleFr:'un',articleEs:'un'},
        {id:'city-laboratory',word:'laboratoire',translation:'laboratorio',articleFr:'un',articleEs:'un'},
        {id:'city-dental-office',word:'cabinet dentaire',translation:'consulta dental',articleFr:'un',articleEs:'una'},
        {id:'city-ambulance',word:'ambulance',translation:'ambulancia',articleFr:'une',articleEs:'una'},
        {id:'city-emergency-room',word:'urgences',translation:'urgencias',articleFr:'les',articleEs:'las'}
      ]},
      {id:'city-restaurants-food-places',title:'Restaurantes y lugares para comer',entries:[
        {id:'city-restaurant',word:'restaurant',translation:'restaurante',articleFr:'un',articleEs:'un'},
        {id:'city-cafe',word:'café',translation:'café',articleFr:'un',articleEs:'un'},
        {id:'city-bar',word:'bar',translation:'bar',articleFr:'un',articleEs:'un'},
        {id:'city-brasserie',word:'brasserie',translation:'brasserie / cervecería',articleFr:'une',articleEs:'una'},
        {id:'city-cafeteria',word:'cafétéria',translation:'cafetería',articleFr:'une',articleEs:'una'},
        {id:'city-pizzeria',word:'pizzeria',translation:'pizzería',articleFr:'une',articleEs:'una'},
        {id:'city-fast-food',word:'fast-food',translation:'restaurante de comida rápida',articleFr:'un',articleEs:'un'}
      ]},
      {id:'city-people-services',title:'Personas y servicios de la ciudad',entries:[
        {id:'city-inhabitant-m',word:'habitant',translation:'habitante',articleFr:'un',articleEs:'un'},
        {id:'city-inhabitant-f',word:'habitante',translation:'habitante',articleFr:'une',articleEs:'una'},
        {id:'city-passerby-m',word:'passant',translation:'transeúnte',articleFr:'un',articleEs:'un'},
        {id:'city-passerby-f',word:'passante',translation:'transeúnte',articleFr:'une',articleEs:'una'},
        {id:'city-pedestrian-m',word:'piéton',translation:'peatón',articleFr:'un',articleEs:'un'},
        {id:'city-pedestrian-f',word:'piétonne',translation:'peatona',articleFr:'une',articleEs:'una'},
        {id:'city-shopkeeper-m',word:'commerçant',translation:'comerciante',articleFr:'un',articleEs:'un'},
        {id:'city-shopkeeper-f',word:'commerçante',translation:'comerciante',articleFr:'une',articleEs:'una'},
        {id:'city-salesman',word:'vendeur',translation:'vendedor',articleFr:'un',articleEs:'un'},
        {id:'city-saleswoman',word:'vendeuse',translation:'vendedora',articleFr:'une',articleEs:'una'},
        {id:'city-mailman',word:'facteur',translation:'cartero',articleFr:'un',articleEs:'un'},
        {id:'city-mailwoman',word:'factrice',translation:'cartera',articleFr:'une',articleEs:'una'},
        {id:'city-municipal-agent-m',word:'agent municipal',translation:'agente municipal',articleFr:'un',articleEs:'un'},
        {id:'city-municipal-agent-f',word:'agente municipale',translation:'agente municipal',articleFr:'une',articleEs:'una'}
      ]},
      {id:'city-orientation',title:'Orientación y circulación por la ciudad',entries:[
        {id:'city-address',word:'adresse',translation:'dirección',articleFr:'une',articleEs:'una'},
        {id:'city-map',word:'plan',translation:'mapa / plano',articleFr:'un',articleEs:'un'},
        {id:'city-itinerary',word:'itinéraire',translation:'itinerario',articleFr:'un',articleEs:'un'},
        {id:'city-path',word:'chemin',translation:'camino',articleFr:'un',articleEs:'un'},
        {id:'city-direction',word:'direction',translation:'dirección',articleFr:'une',articleEs:'una'},
        {id:'city-cross',word:'traverser',translation:'cruzar'},
        {id:'city-turn',word:'tourner',translation:'girar'},
        {id:'city-continue',word:'continuer',translation:'continuar'},
        {id:'city-arrive',word:'arriver',translation:'llegar'},
        {id:'city-leave',word:'partir',translation:'salir / partir'},
        {id:'city-move-around',word:'se déplacer',translation:'desplazarse'},
        {id:'city-find',word:'trouver',translation:'encontrar'},
        {id:'city-get-lost',word:'se perdre',translation:'perderse'}
      ]}
    ]
  };
  if (!window.COQ_VOCABULARY_DATABASE_API) throw new Error('COQ Vocabulario: registro no disponible.');
  window.COQ_VOCABULARY_DATABASE_API.registerCategory(Object.freeze(category));
})();