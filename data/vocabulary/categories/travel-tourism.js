/* COQ — Vocabulario · Viajes y turismo
 * Fuente de verdad del contenido de la categoría «Viajes y turismo».
 * Una entrada aparece una sola vez en el sistema de vocabulario.
 */
(function () {
  'use strict';

  const category = {
    id: 'travel-tourism',
    title: 'Viajes y turismo',
    subcategories: [
      {
        id: 'travel-vacation',
        title: 'Viaje y vacaciones',
        entries: [
          {id:'travel-voyage',word:'voyage',translation:'viaje',articleFr:'un',articleEs:'un'},
          {id:'travel-sejour',word:'séjour',translation:'estancia',articleFr:'un',articleEs:'una'},
          {id:'travel-vacances',word:'vacances',translation:'vacaciones',articleFr:'des',articleEs:'unas'},
          {id:'travel-weekend',word:'week-end',translation:'fin de semana',articleFr:'un',articleEs:'un'},
          {id:'travel-departure',word:'départ',translation:'salida',articleFr:'un',articleEs:'una'},
          {id:'travel-arrival',word:'arrivée',translation:'llegada',articleFr:'une',articleEs:'una'},
          {id:'travel-destination',word:'destination',translation:'destino',articleFr:'une',articleEs:'un'},
          {id:'travel-itinerary',word:'itinéraire',translation:'itinerario',articleFr:'un',articleEs:'un'},
          {id:'travel-excursion',word:'excursion',translation:'excursión',articleFr:'une',articleEs:'una'},
          {id:'travel-adventure',word:'aventure',translation:'aventura',articleFr:'une',articleEs:'una'},
          {id:'travel-circuit',word:'circuit',translation:'circuito / recorrido',articleFr:'un',articleEs:'un'},
          {id:'travel-visit',word:'visite',translation:'visita',articleFr:'une',articleEs:'una'},
          {id:'travel-traveler-m',word:'voyageur',translation:'viajero',articleFr:'un',articleEs:'un'},
          {id:'travel-traveler-f',word:'voyageuse',translation:'viajera',articleFr:'une',articleEs:'una'},
          {id:'travel-tourist',word:'touriste',translation:'turista',articleFr:'un / une',articleEs:'un / una'},
          {id:'travel-guide',word:'guide',translation:'guía',articleFr:'un / une',articleEs:'un / una'},
          {id:'travel-group',word:'groupe',translation:'grupo',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'travel-accommodation',
        title: 'Alojamiento',
        entries: [
          {id:'travel-hotel',word:'hôtel',translation:'hotel',articleFr:'un',articleEs:'un'},
          {id:'travel-inn',word:'auberge',translation:'albergue / posada',articleFr:'une',articleEs:'un / una'},
          {id:'travel-hostel',word:'auberge de jeunesse',translation:'albergue juvenil',articleFr:'une',articleEs:'un'},
          {id:'travel-single-room',word:'chambre simple',translation:'habitación individual',articleFr:'une',articleEs:'una'},
          {id:'travel-double-room',word:'chambre double',translation:'habitación doble',articleFr:'une',articleEs:'una'},
          {id:'travel-suite',word:'suite',translation:'suite',articleFr:'une',articleEs:'una'},
          {id:'travel-guesthouse',word:'maison d’hôtes',translation:'casa de huéspedes',articleFr:'une',articleEs:'una'},
          {id:'travel-camping',word:'camping',translation:'camping',articleFr:'un',articleEs:'un'},
          {id:'travel-tent',word:'tente',translation:'tienda de campaña',articleFr:'une',articleEs:'una'},
          {id:'travel-pitch',word:'emplacement',translation:'parcela',articleFr:'un',articleEs:'una'},
          {id:'travel-lodging',word:'logement',translation:'alojamiento',articleFr:'un',articleEs:'un'},
          {id:'travel-reception',word:'réception',translation:'recepción',articleFr:'une',articleEs:'una'},
        ]
      },
      {
        id: 'travel-booking-services',
        title: 'Reservas y servicios',
        entries: [
          {id:'travel-reservation',word:'réservation',translation:'reserva',articleFr:'une',articleEs:'una'},
          {id:'travel-book',word:'réserver',translation:'reservar',articleFr:null,articleEs:null},
          {id:'travel-confirmation',word:'confirmation',translation:'confirmación',articleFr:'une',articleEs:'una'},
          {id:'travel-cancellation',word:'annulation',translation:'cancelación',articleFr:'une',articleEs:'una'},
          {id:'travel-cancel',word:'annuler',translation:'cancelar',articleFr:null,articleEs:null},
          {id:'travel-availability',word:'disponibilité',translation:'disponibilidad',articleFr:'une',articleEs:'una'},
          {id:'travel-night',word:'nuit',translation:'noche',articleFr:'une',articleEs:'una'},
          {id:'travel-night-stay',word:'nuitée',translation:'noche de alojamiento',articleFr:'une',articleEs:'una'},
          {id:'travel-price',word:'prix',translation:'precio',articleFr:'un',articleEs:'un'},
          {id:'travel-rate',word:'tarif',translation:'tarifa',articleFr:'un',articleEs:'una'},
          {id:'travel-supplement',word:'supplément',translation:'suplemento',articleFr:'un',articleEs:'un'},
          {id:'travel-breakfast',word:'petit-déjeuner',translation:'desayuno',articleFr:'un',articleEs:'un'},
          {id:'travel-full-board',word:'pension complète',translation:'pensión completa',articleFr:'une',articleEs:'una'},
          {id:'travel-half-board',word:'demi-pension',translation:'media pensión',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'travel-luggage-documents',
        title: 'Equipaje y objetos de viaje',
        entries: [
          {id:'travel-luggage',word:'bagage',translation:'equipaje',articleFr:'un',articleEs:'un'},
          {id:'travel-suitcase',word:'valise',translation:'maleta',articleFr:'une',articleEs:'una'},
          {id:'travel-backpack',word:'sac à dos',translation:'mochila',articleFr:'un',articleEs:'una'},
          {id:'travel-travel-bag',word:'sac de voyage',translation:'bolso de viaje',articleFr:'un',articleEs:'un'},
          {id:'travel-wallet',word:'portefeuille',translation:'cartera',articleFr:'un',articleEs:'una'},
          {id:'travel-map',word:'carte',translation:'mapa',articleFr:'une',articleEs:'un'},
          {id:'travel-plan',word:'plan',translation:'plano',articleFr:'un',articleEs:'un'},
          {id:'travel-adapter',word:'adaptateur',translation:'adaptador',articleFr:'un',articleEs:'un'},
          {id:'travel-charger',word:'chargeur',translation:'cargador',articleFr:'un',articleEs:'un'},
          {id:'travel-sunglasses',word:'lunettes de soleil',translation:'gafas de sol',articleFr:'des',articleEs:'unas'},
          {id:'travel-camera',word:'appareil photo',translation:'cámara de fotos',articleFr:'un',articleEs:'una'}
        ]
      },
      {
        id: 'travel-tourism-places',
        title: 'Turismo y lugares',
        entries: [
          {id:'travel-monument',word:'monument',translation:'monumento',articleFr:'un',articleEs:'un'},
          {id:'travel-castle',word:'château',translation:'castillo',articleFr:'un',articleEs:'un'},
          {id:'travel-cathedral',word:'cathédrale',translation:'catedral',articleFr:'une',articleEs:'una'},
          {id:'travel-church',word:'église',translation:'iglesia',articleFr:'une',articleEs:'una'},
          {id:'travel-palace',word:'palais',translation:'palacio',articleFr:'un',articleEs:'un'},
          {id:'travel-historic-center',word:'centre historique',translation:'centro histórico',articleFr:'un',articleEs:'un'},
          {id:'travel-tourist-site',word:'site touristique',translation:'sitio turístico',articleFr:'un',articleEs:'un'},
          {id:'travel-tourist-attraction',word:'attraction touristique',translation:'atracción turística',articleFr:'une',articleEs:'una'},
          {id:'travel-beach',word:'plage',translation:'playa',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'travel-activities',
        title: 'Actividades y turismo',
        entries: [
          {id:'travel-visit-verb',word:'visiter',translation:'visitar',articleFr:null,articleEs:null},
          {id:'travel-travel-verb',word:'voyager',translation:'viajar',articleFr:null,articleEs:null},
          {id:'travel-stay-verb',word:'séjourner',translation:'alojarse / permanecer',articleFr:null,articleEs:null},
          {id:'travel-explore',word:'explorer',translation:'explorar',articleFr:null,articleEs:null},
          {id:'travel-discover',word:'découvrir',translation:'descubrir',articleFr:null,articleEs:null},
          {id:'travel-stroll',word:'se promener',translation:'pasear',articleFr:null,articleEs:null},
          {id:'travel-make-excursion',word:'faire une excursion',translation:'hacer una excursión',articleFr:null,articleEs:null},
          {id:'travel-take-photos',word:'prendre des photos',translation:'sacar fotos',articleFr:null,articleEs:null},
          {id:'travel-sightsee',word:'faire du tourisme',translation:'hacer turismo',articleFr:null,articleEs:null},
          {id:'travel-relax',word:'se détendre',translation:'relajarse',articleFr:null,articleEs:null},
          {id:'travel-enjoy',word:'profiter',translation:'disfrutar',articleFr:null,articleEs:null},
          {id:'travel-admire',word:'admirer',translation:'admirar',articleFr:null,articleEs:null},
          {id:'travel-swim',word:'se baigner',translation:'bañarse',articleFr:null,articleEs:null},
          {id:'travel-sunbathe',word:'bronzer',translation:'tomar el sol',articleFr:null,articleEs:null}
        ]
      },
      {
        id: 'travel-directions-situations',
        title: 'Orientación y situaciones del viajero',
        entries: [
          {id:'travel-information-request',word:'renseignement',translation:'información',articleFr:'un',articleEs:'una'},
          {id:'travel-information',word:'information',translation:'información',articleFr:'une',articleEs:'una'},
          {id:'travel-path',word:'chemin',translation:'camino',articleFr:'un',articleEs:'un'},
          {id:'travel-direction',word:'direction',translation:'dirección',articleFr:'une',articleEs:'una'},
          {id:'travel-left',word:'à gauche',translation:'a la izquierda',articleFr:null,articleEs:null},
          {id:'travel-right',word:'à droite',translation:'a la derecha',articleFr:null,articleEs:null},
          {id:'travel-straight',word:'tout droit',translation:'todo recto',articleFr:null,articleEs:null},
          {id:'travel-near',word:'près de',translation:'cerca de',articleFr:null,articleEs:null},
          {id:'travel-far',word:'loin de',translation:'lejos de',articleFr:null,articleEs:null},
          {id:'travel-next-to',word:'à côté de',translation:'al lado de',articleFr:null,articleEs:null},
          {id:'travel-opposite',word:'en face de',translation:'enfrente de',articleFr:null,articleEs:null},
          {id:'travel-where',word:'où ?',translation:'¿dónde?',articleFr:null,articleEs:null},
          {id:'travel-how-get-to',word:'comment aller à… ?',translation:'¿cómo llegar a…?',articleFr:null,articleEs:null},
          {id:'travel-get-lost',word:'se perdre',translation:'perderse',articleFr:null,articleEs:null},
          {id:'travel-find',word:'trouver',translation:'encontrar',articleFr:null,articleEs:null}
        ]
      }
    ]
  };

  if (!window.COQ_VOCABULARY_DATABASE_API || typeof window.COQ_VOCABULARY_DATABASE_API.registerCategory !== 'function') {
    throw new Error('COQ Vocabulario: el registro de base de datos debe cargarse antes de las categorías.');
  }

  window.COQ_VOCABULARY_TRAVEL_TOURISM = Object.freeze(category);
  window.COQ_VOCABULARY_DATABASE_API.registerCategory(category);
})();
