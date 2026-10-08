/* COQ — Vocabulario · Ciencia
 * Fuente de verdad del contenido de la categoría «Ciencia».
 */
(function () {
  'use strict';

  const category = {
    id: 'science',
    title: 'Ciencia',
    subcategories: [
      { id:'science-research', title:'Ciencia e investigación', entries:[
        {id:'science-science',word:'science',translation:'ciencia',articleFr:'la',articleEs:'la'},
        {id:'science-scientist-m',word:'scientifique',translation:'científico',articleFr:'un',articleEs:'un'},
        {id:'science-scientist-f',word:'scientifique',translation:'científica',articleFr:'une',articleEs:'una'},
        {id:'science-research',word:'recherche',translation:'investigación',articleFr:'la',articleEs:'la'},
        {id:'science-researcher-m',word:'chercheur',translation:'investigador',articleFr:'un',articleEs:'un'},
        {id:'science-researcher-f',word:'chercheuse',translation:'investigadora',articleFr:'une',articleEs:'una'},
        {id:'science-discovery',word:'découverte',translation:'descubrimiento',articleFr:'une',articleEs:'un'},
        {id:'science-knowledge',word:'connaissance',translation:'conocimiento',articleFr:'une',articleEs:'un'},
        {id:'science-theory',word:'théorie',translation:'teoría',articleFr:'une',articleEs:'una'},
        {id:'science-hypothesis',word:'hypothèse',translation:'hipótesis',articleFr:'une',articleEs:'una'},
        {id:'science-method',word:'méthode',translation:'método',articleFr:'une',articleEs:'un'},
        {id:'science-experiment',word:'expérience',translation:'experimento',articleFr:'une',articleEs:'un'},
        {id:'science-observation',word:'observation',translation:'observación',articleFr:'une',articleEs:'una'},
        {id:'science-proof',word:'preuve',translation:'prueba / evidencia',articleFr:'une',articleEs:'una'},
        {id:'science-result',word:'résultat',translation:'resultado',articleFr:'un',articleEs:'un'}
      ]},
      { id:'science-lab', title:'Laboratorio y experimentación', entries:[
        {id:'science-laboratory',word:'laboratoire',translation:'laboratorio',articleFr:'un',articleEs:'un'},
        {id:'science-sample',word:'échantillon',translation:'muestra',articleFr:'un',articleEs:'una'},
        {id:'science-specimen',word:'spécimen',translation:'espécimen',articleFr:'un',articleEs:'un'},
        {id:'science-instrument',word:'instrument',translation:'instrumento',articleFr:'un',articleEs:'un'},
        {id:'science-microscope',word:'microscope',translation:'microscopio',articleFr:'un',articleEs:'un'},
        {id:'science-test-tube',word:'éprouvette',translation:'tubo de ensayo',articleFr:'une',articleEs:'un'},
        {id:'science-tube-a-essai',word:'tube à essai',translation:'tubo de ensayo',articleFr:'un',articleEs:'un'},
        {id:'science-beaker',word:'bécher',translation:'vaso de precipitados',articleFr:'un',articleEs:'un'},
        {id:'science-pipette',word:'pipette',translation:'pipeta',articleFr:'une',articleEs:'una'},
        {id:'science-substance',word:'substance',translation:'sustancia',articleFr:'une',articleEs:'una'},
        {id:'science-reaction',word:'réaction',translation:'reacción',articleFr:'une',articleEs:'una'},
        {id:'science-measurement',word:'mesure',translation:'medición',articleFr:'une',articleEs:'una'},
        {id:'science-protocol',word:'protocole',translation:'protocolo',articleFr:'un',articleEs:'un'}
      ]},
      { id:'science-physics', title:'Física', entries:[
        {id:'science-physics',word:'physique',translation:'física',articleFr:'la',articleEs:'la'},
        {id:'science-matter',word:'matière',translation:'materia',articleFr:'la',articleEs:'la'},
        {id:'science-energy',word:'énergie',translation:'energía',articleFr:'l’',articleEs:'la'},
        {id:'science-force',word:'force',translation:'fuerza',articleFr:'une',articleEs:'una'},
        {id:'science-motion',word:'mouvement',translation:'movimiento',articleFr:'un',articleEs:'un'},
        {id:'science-speed',word:'vitesse',translation:'velocidad',articleFr:'la',articleEs:'la'},
        {id:'science-mass',word:'masse',translation:'masa',articleFr:'une',articleEs:'una'},
        {id:'science-weight',word:'poids',translation:'peso',articleFr:'un',articleEs:'un'},
        {id:'science-pressure',word:'pression',translation:'presión',articleFr:'une',articleEs:'la'},
        {id:'science-temperature',word:'température',translation:'temperatura',articleFr:'une',articleEs:'la'},
        {id:'science-heat',word:'chaleur',translation:'calor',articleFr:'la',articleEs:'el'},
        {id:'science-sound',word:'son',translation:'sonido',articleFr:'le',articleEs:'el'},
        {id:'science-light',word:'lumière',translation:'luz',articleFr:'la',articleEs:'la'},
        {id:'science-electricity',word:'électricité',translation:'electricidad',articleFr:'l’',articleEs:'la'},
        {id:'science-magnetic-field',word:'champ magnétique',translation:'campo magnético',articleFr:'un',articleEs:'un'}
      ]},
      { id:'science-chemistry', title:'Química', entries:[
        {id:'science-chemistry',word:'chimie',translation:'química',articleFr:'la',articleEs:'la'},
        {id:'science-chemical-element',word:'élément chimique',translation:'elemento químico',articleFr:'un',articleEs:'un'},
        {id:'science-atom',word:'atome',translation:'átomo',articleFr:'un',articleEs:'un'},
        {id:'science-molecule',word:'molécule',translation:'molécula',articleFr:'une',articleEs:'una'},
        {id:'science-proton',word:'proton',translation:'protón',articleFr:'un',articleEs:'un'},
        {id:'science-neutron',word:'neutron',translation:'neutrón',articleFr:'un',articleEs:'un'},
        {id:'science-electron',word:'électron',translation:'electrón',articleFr:'un',articleEs:'un'},
        {id:'science-compound',word:'composé',translation:'compuesto',articleFr:'un',articleEs:'un'},
        {id:'science-chemical-bond',word:'liaison chimique',translation:'enlace químico',articleFr:'une',articleEs:'un'},
        {id:'science-chemical-reaction',word:'réaction chimique',translation:'reacción química',articleFr:'une',articleEs:'una'},
        {id:'science-acid',word:'acide',translation:'ácido',articleFr:'un',articleEs:'un'},
        {id:'science-base',word:'base',translation:'base',articleFr:'une',articleEs:'una'},
        {id:'science-solution',word:'solution',translation:'solución',articleFr:'une',articleEs:'una'},
        {id:'science-gas',word:'gaz',translation:'gas',articleFr:'un',articleEs:'un'},
        {id:'science-liquid',word:'liquide',translation:'líquido',articleFr:'un',articleEs:'un'}
      ]},
      { id:'science-biology', title:'Biología', entries:[
        {id:'science-biology',word:'biologie',translation:'biología',articleFr:'la',articleEs:'la'},
        {id:'science-organism',word:'organisme',translation:'organismo',articleFr:'un',articleEs:'un'},
        {id:'science-cell',word:'cellule',translation:'célula',articleFr:'une',articleEs:'una'},
        {id:'science-tissue',word:'tissu',translation:'tejido',articleFr:'un',articleEs:'un'},
        {id:'science-organ',word:'organe',translation:'órgano',articleFr:'un',articleEs:'un'},
        {id:'science-living-organism',word:'organisme vivant',translation:'organismo vivo',articleFr:'un',articleEs:'un'},
        {id:'science-species',word:'espèce',translation:'especie',articleFr:'une',articleEs:'una'},
        {id:'science-gene',word:'gène',translation:'gen',articleFr:'un',articleEs:'un'},
        {id:'science-dna',word:'ADN',translation:'ADN',articleFr:'l’',articleEs:'el'},
        {id:'science-protein',word:'protéine',translation:'proteína',articleFr:'une',articleEs:'una'},
        {id:'science-chromosome',word:'chromosome',translation:'cromosoma',articleFr:'un',articleEs:'un'},
        {id:'science-evolution',word:'évolution',translation:'evolución',articleFr:'l’',articleEs:'la'},
        {id:'science-mutation',word:'mutation',translation:'mutación',articleFr:'une',articleEs:'una'},
        {id:'science-ecosystem',word:'écosystème',translation:'ecosistema',articleFr:'un',articleEs:'un'}
      ]},
      { id:'science-earth', title:'Ciencias de la Tierra', entries:[
        {id:'science-earth-sciences',word:'sciences de la Terre',translation:'ciencias de la Tierra',articleFr:'les',articleEs:'las'},
        {id:'science-geology',word:'géologie',translation:'geología',articleFr:'la',articleEs:'la'},
        {id:'science-geologist',word:'géologue',translation:'geólogo',articleFr:'un',articleEs:'un'},
        {id:'science-rock',word:'roche',translation:'roca',articleFr:'une',articleEs:'una'},
        {id:'science-mineral',word:'minéral',translation:'mineral',articleFr:'un',articleEs:'un'},
        {id:'science-continent',word:'continent',translation:'continente',articleFr:'un',articleEs:'un'},
        {id:'science-tectonic-plate',word:'plaque tectonique',translation:'placa tectónica',articleFr:'une',articleEs:'una'},
        {id:'science-volcano',word:'volcan',translation:'volcán',articleFr:'un',articleEs:'un'},
        {id:'science-earthquake',word:'séisme',translation:'terremoto',articleFr:'un',articleEs:'un'},
        {id:'science-earthquake-alt',word:'tremblement de terre',translation:'terremoto',articleFr:'un',articleEs:'un'},
        {id:'science-fault',word:'faille',translation:'falla',articleFr:'une',articleEs:'una'},
        {id:'science-fossil',word:'fossile',translation:'fósil',articleFr:'un',articleEs:'un'},
        {id:'science-layer',word:'couche',translation:'capa / estrato',articleFr:'une',articleEs:'una'},
        {id:'science-relief',word:'relief',translation:'relieve',articleFr:'le',articleEs:'el'}
      ]},
      { id:'science-math-statistics', title:'Matemáticas y estadística', entries:[
        {id:'science-mathematics',word:'mathématiques',translation:'matemáticas',articleFr:'les',articleEs:'las'},
        {id:'science-number',word:'nombre',translation:'número',articleFr:'un',articleEs:'un'},
        {id:'science-digit',word:'chiffre',translation:'cifra',articleFr:'un',articleEs:'una'},
        {id:'science-equation',word:'équation',translation:'ecuación',articleFr:'une',articleEs:'una'},
        {id:'science-calculation',word:'calcul',translation:'cálculo',articleFr:'un',articleEs:'un'},
        {id:'science-formula',word:'formule',translation:'fórmula',articleFr:'une',articleEs:'una'},
        {id:'science-variable',word:'variable',translation:'variable',articleFr:'une',articleEs:'una'},
        {id:'science-proportion',word:'proportion',translation:'proporción',articleFr:'une',articleEs:'una'},
        {id:'science-percentage',word:'pourcentage',translation:'porcentaje',articleFr:'un',articleEs:'un'},
        {id:'science-average',word:'moyenne',translation:'media / promedio',articleFr:'une',articleEs:'una'},
        {id:'science-statistic',word:'statistique',translation:'estadística',articleFr:'une',articleEs:'una'},
        {id:'science-data',word:'donnée',translation:'dato',articleFr:'une',articleEs:'un'},
        {id:'science-graph',word:'graphique',translation:'gráfico',articleFr:'un',articleEs:'un'},
        {id:'science-probability',word:'probabilité',translation:'probabilidad',articleFr:'une',articleEs:'una'}
      ]},
      { id:'science-ecology-environment', title:'Medio ambiente y ecología científica', entries:[
        {id:'science-ecology',word:'écologie',translation:'ecología',articleFr:'l’',articleEs:'la'},
        {id:'science-ecologist',word:'écologue',translation:'ecólogo',articleFr:'un',articleEs:'un'},
        {id:'science-biodiversity',word:'biodiversité',translation:'biodiversidad',articleFr:'la',articleEs:'la'},
        {id:'science-habitat',word:'habitat',translation:'hábitat',articleFr:'un',articleEs:'un'},
        {id:'science-population',word:'population',translation:'población',articleFr:'une',articleEs:'una'},
        {id:'science-community',word:'communauté',translation:'comunidad',articleFr:'une',articleEs:'una'},
        {id:'science-food-chain',word:'chaîne alimentaire',translation:'cadena alimentaria',articleFr:'une',articleEs:'una'},
        {id:'science-natural-resource',word:'ressource naturelle',translation:'recurso natural',articleFr:'une',articleEs:'un'},
        {id:'science-climate-change',word:'changement climatique',translation:'cambio climático',articleFr:'un',articleEs:'un'},
        {id:'science-greenhouse-gas',word:'gaz à effet de serre',translation:'gas de efecto invernadero',articleFr:'un',articleEs:'un'},
        {id:'science-global-warming',word:'réchauffement climatique',translation:'calentamiento global',articleFr:'le',articleEs:'el'},
        {id:'science-invasive-species',word:'espèce invasive',translation:'especie invasora',articleFr:'une',articleEs:'una'},
        {id:'science-threatened-species',word:'espèce menacée',translation:'especie amenazada',articleFr:'une',articleEs:'una'}
      ]},
      { id:'science-technology-innovation', title:'Ciencia, tecnología e innovación', entries:[
        {id:'science-innovation',word:'innovation',translation:'innovación',articleFr:'l’',articleEs:'la'},
        {id:'science-technology',word:'technologie',translation:'tecnología',articleFr:'une',articleEs:'una'},
        {id:'science-invention',word:'invention',translation:'invento',articleFr:'une',articleEs:'un'},
        {id:'science-patent',word:'brevet',translation:'patente',articleFr:'un',articleEs:'una'},
        {id:'science-development',word:'développement',translation:'desarrollo',articleFr:'un',articleEs:'un'},
        {id:'science-application',word:'application',translation:'aplicación',articleFr:'une',articleEs:'una'},
        {id:'science-device',word:'dispositif',translation:'dispositivo',articleFr:'un',articleEs:'un'},
        {id:'science-model',word:'modèle',translation:'modelo',articleFr:'un',articleEs:'un'},
        {id:'science-simulation',word:'simulation',translation:'simulación',articleFr:'une',articleEs:'una'},
        {id:'science-ai',word:'intelligence artificielle',translation:'inteligencia artificial',articleFr:'une',articleEs:'una'},
        {id:'science-algorithm',word:'algorithme',translation:'algoritmo',articleFr:'un',articleEs:'un'},
        {id:'science-database',word:'base de données',translation:'base de datos',articleFr:'une',articleEs:'una'}
      ]},
      { id:'science-life-medical', title:'Medicina y ciencias de la vida', entries:[
        {id:'science-anatomy',word:'anatomie',translation:'anatomía',articleFr:'l’',articleEs:'la'},
        {id:'science-physiology',word:'physiologie',translation:'fisiología',articleFr:'la',articleEs:'la'},
        {id:'science-genetics',word:'génétique',translation:'genética',articleFr:'la',articleEs:'la'},
        {id:'science-microbiology',word:'microbiologie',translation:'microbiología',articleFr:'la',articleEs:'la'},
        {id:'science-neurology',word:'neurologie',translation:'neurología',articleFr:'la',articleEs:'la'},
        {id:'science-microorganism',word:'micro-organisme',translation:'microorganismo',articleFr:'un',articleEs:'un'},
        {id:'science-bacterium',word:'bactérie',translation:'bacteria',articleFr:'une',articleEs:'una'},
        {id:'science-virus',word:'virus',translation:'virus',articleFr:'un',articleEs:'un'},
        {id:'science-parasite',word:'parasite',translation:'parásito',articleFr:'un',articleEs:'un'},
        {id:'science-neuron',word:'neurone',translation:'neurona',articleFr:'un',articleEs:'una'},
        {id:'science-antibody',word:'anticorps',translation:'anticuerpo',articleFr:'un',articleEs:'un'},
        {id:'science-vaccine',word:'vaccin',translation:'vacuna',articleFr:'un',articleEs:'una'}
      ]}
    ]
  };

  if (!window.COQ_VOCABULARY_DATABASE_API || typeof window.COQ_VOCABULARY_DATABASE_API.registerCategory !== 'function') {
    throw new Error('COQ Vocabulario: el registro de base de datos debe cargarse antes de las categorías.');
  }

  window.COQ_VOCABULARY_SCIENCE = Object.freeze(category);
  window.COQ_VOCABULARY_DATABASE_API.registerCategory(category);
})();
