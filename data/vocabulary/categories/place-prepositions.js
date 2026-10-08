/* COQ — Tiempo espacial · Preposiciones de lugar */
(function () {
  'use strict';

  const category = {
    id: 'place-prepositions',
    title: 'Preposiciones de lugar',
    subcategories: [
      {
        id: 'place-basic-location',
        title: 'Ubicación básica',
        entries: [
          ['a','à','en / a'],
          ['in','dans','en / dentro de'],
          ['on','sur','sobre / encima de'],
          ['under','sous','debajo de'],
          ['at-someones-place','chez','en casa de / en el lugar de'],
          ['near','près de','cerca de'],
          ['far-from','loin de','lejos de'],
          ['next-to','à côté de','al lado de / junto a'],
          ['near-someone','auprès de','junto a / cerca de'],
          ['around','autour de','alrededor de']
        ]
      },
      {
        id: 'place-inside-outside',
        title: 'Interior y exterior',
        entries: [
          ['inside-of','à l’intérieur de','dentro de'],
          ['inside','à l’intérieur','dentro'],
          ['outside-of','à l’extérieur de','fuera de'],
          ['outside','à l’extérieur','fuera'],
          ['outside-of-elsewhere','en dehors de','fuera de'],
          ['outside-of-domain','hors de','fuera de'],
          ['in-there','dedans','dentro'],
          ['out-there','dehors','fuera'],
          ['outside-area','au-dehors','en el exterior'],
          ['inside-area','au-dedans','en el interior']
        ]
      },
      {
        id: 'place-vertical-position',
        title: 'Posición vertical',
        entries: [
          ['above','au-dessus de','por encima de'],
          ['below','au-dessous de','por debajo de'],
          ['at-top-of','en haut de','en la parte superior de'],
          ['at-bottom-of','en bas de','en la parte inferior de'],
          ['right-at-top-of','tout en haut de','justo arriba de'],
          ['right-at-bottom-of','tout en bas de','justo abajo de'],
          ['at-top-of-summit','au sommet de','en la cima de'],
          ['at-base-of','à la base de','en la base de']
        ]
      },
      {
        id: 'place-front-back',
        title: 'Delante y detrás',
        entries: [
          ['in-front-of','devant','delante de'],
          ['behind','derrière','detrás de'],
          ['opposite-facing','en face de','enfrente de'],
          ['just-in-front-of','juste devant','justo delante de'],
          ['just-behind','juste derrière','justo detrás de'],
          ['facing','face à','frente a'],
          ['at-back-of','à l’arrière de','en la parte trasera de'],
          ['at-front-of','à l’avant de','en la parte delantera de']
        ]
      },
      {
        id: 'place-lateral-position',
        title: 'Lateralidad y posición relativa',
        entries: [
          ['right-of','à droite de','a la derecha de'],
          ['left-of','à gauche de','a la izquierda de'],
          ['on-right-side-of','sur la droite de','a la derecha de'],
          ['on-left-side-of','sur la gauche de','a la izquierda de'],
          ['on-side-of','du côté de','del lado de'],
          ['same-side-as','du même côté que','del mismo lado que'],
          ['other-side-of','de l’autre côté de','al otro lado de']
        ]
      },
      {
        id: 'place-between-around',
        title: 'Entre, en medio y alrededor',
        entries: [
          ['between','entre','entre'],
          ['among','parmi','entre / entre varios'],
          ['in-middle-of','au milieu de','en medio de'],
          ['in-center-of','au centre de','en el centro de'],
          ['in-middle','au milieu','en medio'],
          ['in-center','au centre','en el centro'],
          ['all-around','tout autour de','alrededor de / por todo alrededor de'],
          ['between-two','entre les deux','entre los dos']
        ]
      },
      {
        id: 'place-proximity-distance',
        title: 'Cercanía y distancia',
        entries: [
          ['nearby','à proximité de','cerca de'],
          ['a-few-meters-from','à quelques mètres de','a unos metros de'],
          ['at-a-distance-from','à distance de','a distancia de'],
          ['apart-from','à l’écart de','apartado de'],
          ['within-reach-of','à portée de','al alcance de'],
          ['nearby-adverb','à proximité','cerca'],
          ['at-a-distance','à distance','a distancia']
        ]
      },
      {
        id: 'place-contact-surface',
        title: 'Contacto y posición respecto a una superficie',
        entries: [
          ['against','contre','contra / junto a'],
          ['against-wall','contre le mur','contra la pared'],
          ['at-edge-of','au bord de','al borde de'],
          ['along','le long de','a lo largo de'],
          ['near-edge-of','près du bord de','cerca del borde de'],
          ['leaning-against','adossé à','apoyado contra'],
          ['stuck-to','collé à','pegado a'],
          ['placed-on','posé sur','colocado sobre']
        ]
      },
      {
        id: 'place-direction-movement',
        title: 'Dirección y desplazamiento espacial',
        entries: [
          ['towards','vers','hacia'],
          ['up-to','jusqu’à','hasta'],
          ['starting-from','à partir de','a partir de'],
          ['in-direction-of','en direction de','en dirección a'],
          ['coming-from','en provenance de','procedente de'],
          ['destination-of','à destination de','con destino a'],
          ['towards-outside','vers l’extérieur','hacia el exterior'],
          ['towards-inside','vers l’intérieur','hacia el interior']
        ]
      },
      {
        id: 'place-route-space',
        title: 'Recorrido y desplazamiento por un espacio',
        entries: [
          ['through','à travers','a través de'],
          ['through-formal','au travers de','a través de'],
          ['throughout-route','tout au long de','a lo largo de / durante todo el recorrido de'],
          ['from-one-end-to-other','d’un bout à l’autre de','de un extremo al otro de'],
          ['from-one-side-to-other','d’un côté à l’autre de','de un lado al otro de'],
          ['by-through','par','por / a través de'],
          ['passing-through','en passant par','pasando por'],
          ['when-passing','au passage de','al pasar por'],
          ['through-plural','à travers les','a través de los/las']
        ]
      }
    ].map((subcategory) => ({
      ...subcategory,
      entries: subcategory.entries.map(([id, word, translation]) => ({
        id: 'place-prep-' + id,
        word,
        translation
      }))
    }))
  };

  if (window.COQ_VOCABULARY_DATABASE_API) {
    window.COQ_VOCABULARY_DATABASE_API.registerCategory(category);
  }
})();