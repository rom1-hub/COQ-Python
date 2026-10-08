/* COQ — Vocabulario · Clima y tiempo
 * Fuente de verdad del contenido de la categoría «Clima y tiempo».
 */
(function () {
  'use strict';

  const category = {
    id: 'weather-climate',
    title: 'Clima y tiempo',
    subcategories: [
      {
        id: 'weather-atmosphere',
        title: 'Tiempo atmosférico',
        entries: [
          {id:'weather-meteo',word:'météo',translation:'tiempo / meteorología',articleFr:'la',articleEs:'el'},
          {id:'weather-temps',word:'temps',translation:'tiempo atmosférico',articleFr:'un',articleEs:'un'},
          {id:'weather-change',word:'changement de temps',translation:'cambio de tiempo',articleFr:'un',articleEs:'un'},
          {id:'weather-forecast',word:'prévision météorologique',translation:'previsión meteorológica',articleFr:'une',articleEs:'una'},
          {id:'weather-bulletin',word:'bulletin météo',translation:'parte meteorológico',articleFr:'un',articleEs:'un'},
          {id:'weather-temperature',word:'température',translation:'temperatura',articleFr:'une',articleEs:'una'},
          {id:'weather-degree',word:'degré',translation:'grado',articleFr:'un',articleEs:'un'},
          {id:'weather-thermometer',word:'thermomètre',translation:'termómetro',articleFr:'un',articleEs:'un'},
          {id:'weather-climate',word:'climat',translation:'clima',articleFr:'un',articleEs:'un'},
          {id:'weather-season',word:'saison',translation:'estación',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'weather-sky',
        title: 'Sol y cielo',
        entries: [
          {id:'weather-sun',word:'soleil',translation:'sol',articleFr:'un',articleEs:'un'},
          {id:'weather-sun-ray',word:'rayon de soleil',translation:'rayo de sol',articleFr:'un',articleEs:'un'},
          {id:'weather-sky',word:'ciel',translation:'cielo',articleFr:'un',articleEs:'un'},
          {id:'weather-cloud',word:'nuage',translation:'nube',articleFr:'un',articleEs:'una'},
          {id:'weather-cloudy-sky',word:'ciel couvert',translation:'cielo cubierto',articleFr:'un',articleEs:'un'},
          {id:'weather-clear-sky',word:'ciel dégagé',translation:'cielo despejado',articleFr:'un',articleEs:'un'},
          {id:'weather-clearing',word:'éclaircie',translation:'claro / apertura entre las nubes',articleFr:'une',articleEs:'un'},
          {id:'weather-rainbow',word:'arc-en-ciel',translation:'arcoíris',articleFr:'un',articleEs:'un'},
          {id:'weather-mist',word:'brume',translation:'bruma',articleFr:'une',articleEs:'una'},
          {id:'weather-fog',word:'brouillard',translation:'niebla',articleFr:'un',articleEs:'una'}
        ]
      },
      {
        id: 'weather-rain',
        title: 'Lluvia y agua atmosférica',
        entries: [
          {id:'weather-rain',word:'pluie',translation:'lluvia',articleFr:'une',articleEs:'una'},
          {id:'weather-shower',word:'averse',translation:'chaparrón',articleFr:'une',articleEs:'un'},
          {id:'weather-drizzle',word:'bruine',translation:'llovizna',articleFr:'une',articleEs:'una'},
          {id:'weather-drop',word:'goutte',translation:'gota',articleFr:'une',articleEs:'una'},
          {id:'weather-crachin',word:'crachin',translation:'lluvia fina',articleFr:'un',articleEs:'una'},
          {id:'weather-torrential-rain',word:'pluie torrentielle',translation:'lluvia torrencial',articleFr:'une',articleEs:'una'},
          {id:'weather-flood',word:'inondation',translation:'inundación',articleFr:'une',articleEs:'una'},
          {id:'weather-puddle',word:'flaque',translation:'charco',articleFr:'une',articleEs:'un'}
        ]
      },
      {
        id: 'weather-wind-storms',
        title: 'Viento y fenómenos atmosféricos',
        entries: [
          {id:'weather-wind',word:'vent',translation:'viento',articleFr:'un',articleEs:'un'},
          {id:'weather-breeze',word:'brise',translation:'brisa',articleFr:'une',articleEs:'una'},
          {id:'weather-gust',word:'rafale',translation:'ráfaga',articleFr:'une',articleEs:'una'},
          {id:'weather-storm',word:'tempête',translation:'tormenta / temporal',articleFr:'une',articleEs:'una'},
          {id:'weather-thunderstorm',word:'orage',translation:'tormenta eléctrica',articleFr:'un',articleEs:'una'},
          {id:'weather-lightning-flash',word:'éclair',translation:'relámpago',articleFr:'un',articleEs:'un'},
          {id:'weather-thunder',word:'coup de tonnerre',translation:'trueno',articleFr:'un',articleEs:'un'},
          {id:'weather-lightning',word:'foudre',translation:'rayo',articleFr:'la',articleEs:'el'},
          {id:'weather-cyclone',word:'cyclone',translation:'ciclón',articleFr:'un',articleEs:'un'},
          {id:'weather-hurricane',word:'ouragan',translation:'huracán',articleFr:'un',articleEs:'un'},
          {id:'weather-tornado',word:'tornade',translation:'tornado',articleFr:'une',articleEs:'un'}
        ]
      },
      {
        id: 'weather-snow-ice',
        title: 'Frío, nieve y hielo',
        entries: [
          {id:'weather-snow',word:'neige',translation:'nieve',articleFr:'la',articleEs:'la'},
          {id:'weather-snowflake',word:'flocon',translation:'copo',articleFr:'un',articleEs:'un'},
          {id:'weather-snowstorm',word:'tempête de neige',translation:'tormenta de nieve',articleFr:'une',articleEs:'una'},
          {id:'weather-hail',word:'grêle',translation:'granizo',articleFr:'la',articleEs:'el'},
          {id:'weather-hailstone',word:'grêlon',translation:'piedra de granizo',articleFr:'un',articleEs:'una'},
          {id:'weather-frost',word:'gelée',translation:'helada',articleFr:'une',articleEs:'una'},
          {id:'weather-black-ice',word:'verglas',translation:'hielo sobre la carretera',articleFr:'le',articleEs:'el'},
          {id:'weather-frost-rime',word:'givre',translation:'escarcha',articleFr:'le',articleEs:'la'},
          {id:'weather-ice-cube',word:'glaçon',translation:'cubito de hielo',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'weather-temperature',
        title: 'Temperatura y condiciones meteorológicas',
        entries: [
          {id:'weather-heat',word:'chaleur',translation:'calor',articleFr:'la',articleEs:'el'},
          {id:'weather-cold',word:'froid',translation:'frío',articleFr:'le',articleEs:'el'},
          {id:'weather-freshness',word:'fraîcheur',translation:'frescor',articleFr:'la',articleEs:'el'},
          {id:'weather-heatwave',word:'canicule',translation:'ola de calor',articleFr:'la',articleEs:'la'},
          {id:'weather-coldwave',word:'vague de froid',translation:'ola de frío',articleFr:'une',articleEs:'una'},
          {id:'weather-humidity',word:'humidité',translation:'humedad',articleFr:'l’',articleEs:'la'},
          {id:'weather-drought',word:'sécheresse',translation:'sequía',articleFr:'la',articleEs:'la'},
          {id:'weather-warm',word:'temps chaud',translation:'tiempo caluroso',articleFr:'un',articleEs:'un'},
          {id:'weather-cold-weather',word:'temps froid',translation:'tiempo frío',articleFr:'un',articleEs:'un'},
          {id:'weather-mild-weather',word:'temps doux',translation:'tiempo templado',articleFr:'un',articleEs:'un'},
          {id:'weather-humid-weather',word:'temps humide',translation:'tiempo húmedo',articleFr:'un',articleEs:'un'},
          {id:'weather-dry-weather',word:'temps sec',translation:'tiempo seco',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'weather-seasons-climates',
        title: 'Estaciones y clima',
        entries: [
          {id:'weather-spring',word:'printemps',translation:'primavera',articleFr:'le',articleEs:'la'},
          {id:'weather-summer',word:'été',translation:'verano',articleFr:'l’',articleEs:'el'},
          {id:'weather-autumn',word:'automne',translation:'otoño',articleFr:'l’',articleEs:'el'},
          {id:'weather-winter',word:'hiver',translation:'invierno',articleFr:'l’',articleEs:'el'},
          {id:'weather-tropical-climate',word:'climat tropical',translation:'clima tropical',articleFr:'un',articleEs:'un'},
          {id:'weather-desert-climate',word:'climat désertique',translation:'clima desértico',articleFr:'un',articleEs:'un'},
          {id:'weather-mediterranean-climate',word:'climat méditerranéen',translation:'clima mediterráneo',articleFr:'un',articleEs:'un'},
          {id:'weather-continental-climate',word:'climat continental',translation:'clima continental',articleFr:'un',articleEs:'un'},
          {id:'weather-polar-climate',word:'climat polaire',translation:'clima polar',articleFr:'un',articleEs:'un'},
          {id:'weather-humid-climate',word:'climat humide',translation:'clima húmedo',articleFr:'un',articleEs:'un'},
          {id:'weather-dry-climate',word:'climat sec',translation:'clima seco',articleFr:'un',articleEs:'un'}
        ]
      }
    ]
  };

  if (!window.COQ_VOCABULARY_DATABASE_API || typeof window.COQ_VOCABULARY_DATABASE_API.registerCategory !== 'function') {
    throw new Error('COQ Vocabulario: el registro de base de datos debe cargarse antes de las categorías.');
  }

  window.COQ_VOCABULARY_WEATHER = Object.freeze(category);
  window.COQ_VOCABULARY_DATABASE_API.registerCategory(category);
})();
