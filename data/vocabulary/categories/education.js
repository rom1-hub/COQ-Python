/* COQ — Vocabulario · Educación
 * Fuente de verdad del contenido de la categoría «Educación».
 */
(function () {
  'use strict';

  const category = {
    id: 'education',
    title: 'Educación',
    subcategories: [
      {
        id: 'education-places',
        title: 'Lugares y espacios educativos',
        entries: [
          {id:'education-school',word:'école',translation:'escuela',articleFr:'une',articleEs:'una'},
          {id:'education-kindergarten',word:'école maternelle',translation:'jardín de infancia',articleFr:'une',articleEs:'un'},
          {id:'education-primary-school',word:'école primaire',translation:'escuela primaria',articleFr:'une',articleEs:'una'},
          {id:'education-middle-school',word:'collège',translation:'escuela secundaria',articleFr:'un',articleEs:'una'},
          {id:'education-high-school',word:'lycée',translation:'instituto / liceo',articleFr:'un',articleEs:'un'},
          {id:'education-university',word:'université',translation:'universidad',articleFr:'une',articleEs:'una'},
          {id:'education-faculty',word:'faculté',translation:'facultad',articleFr:'une',articleEs:'una'},
          {id:'education-classroom',word:'salle de classe',translation:'aula',articleFr:'une',articleEs:'un'},
          {id:'education-playground',word:'cour de récréation',translation:'patio de recreo',articleFr:'une',articleEs:'un'},
          {id:'education-laboratory',word:'laboratoire',translation:'laboratorio',articleFr:'un',articleEs:'un'},
          {id:'education-computer-room',word:'salle informatique',translation:'sala de informática',articleFr:'une',articleEs:'una'},
          {id:'education-gym',word:'gymnase',translation:'gimnasio',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'education-people-professions',
        title: 'Personas y profesiones de la educación',
        entries: [
          {id:'education-student-male',word:'élève',translation:'alumno',articleFr:'un',articleEs:'un'},
          {id:'education-student-female',word:'élève',translation:'alumna',articleFr:'une',articleEs:'una'},
          {id:'education-university-student-male',word:'étudiant',translation:'estudiante',articleFr:'un',articleEs:'un'},
          {id:'education-university-student-female',word:'étudiante',translation:'estudiante',articleFr:'une',articleEs:'una'},
          {id:'education-professor-male',word:'professeur',translation:'profesor',articleFr:'un',articleEs:'un'},
          {id:'education-professor-female',word:'professeure',translation:'profesora',articleFr:'une',articleEs:'una'},
          {id:'education-teacher-male',word:'enseignant',translation:'docente / profesor',articleFr:'un',articleEs:'un'},
          {id:'education-teacher-female',word:'enseignante',translation:'docente / profesora',articleFr:'une',articleEs:'una'},
          {id:'education-primary-teacher-male',word:'instituteur',translation:'maestro',articleFr:'un',articleEs:'un'},
          {id:'education-primary-teacher-female',word:'institutrice',translation:'maestra',articleFr:'une',articleEs:'una'},
          {id:'education-director-male',word:'directeur',translation:'director',articleFr:'un',articleEs:'un'},
          {id:'education-director-female',word:'directrice',translation:'directora',articleFr:'une',articleEs:'una'},
          {id:'education-classmate-male',word:'camarade de classe',translation:'compañero de clase',articleFr:'un',articleEs:'un'},
          {id:'education-classmate-female',word:'camarade de classe',translation:'compañera de clase',articleFr:'une',articleEs:'una'},
          {id:'education-tutor-male',word:'professeur particulier',translation:'profesor particular',articleFr:'un',articleEs:'un'},
          {id:'education-tutor-female',word:'professeure particulière',translation:'profesora particular',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'education-school-materials',
        title: 'Material escolar',
        entries: [
          {id:'education-book',word:'livre',translation:'libro',articleFr:'un',articleEs:'un'},
          {id:'education-textbook',word:'manuel',translation:'manual / libro de texto',articleFr:'un',articleEs:'un'},
          {id:'education-notebook',word:'cahier',translation:'cuaderno',articleFr:'un',articleEs:'un'},
          {id:'education-notebook-small',word:'carnet',translation:'libreta',articleFr:'un',articleEs:'una'},
          {id:'education-folder-binder',word:'classeur',translation:'carpeta de anillas',articleFr:'un',articleEs:'una'},
          {id:'education-folder',word:'dossier',translation:'carpeta',articleFr:'un',articleEs:'una'},
          {id:'education-sheet',word:'feuille',translation:'folio',articleFr:'une',articleEs:'un'},
          {id:'education-pen',word:'stylo',translation:'bolígrafo',articleFr:'un',articleEs:'un'},
          {id:'education-pencil',word:'crayon',translation:'lápiz',articleFr:'un',articleEs:'un'},
          {id:'education-colored-pencil',word:'crayon de couleur',translation:'lápiz de color',articleFr:'un',articleEs:'un'},
          {id:'education-eraser',word:'gomme',translation:'goma',articleFr:'une',articleEs:'una'},
          {id:'education-sharpener',word:'taille-crayon',translation:'sacapuntas',articleFr:'un',articleEs:'un'},
          {id:'education-ruler',word:'règle',translation:'regla',articleFr:'une',articleEs:'una'},
          {id:'education-pencil-case',word:'trousse',translation:'estuche',articleFr:'une',articleEs:'un'},
          {id:'education-school-bag',word:'cartable',translation:'mochila escolar',articleFr:'un',articleEs:'una'},
          {id:'education-marker',word:'marqueur',translation:'marcador / rotulador',articleFr:'un',articleEs:'un'},
          {id:'education-highlighter',word:'surligneur',translation:'resaltador',articleFr:'un',articleEs:'un'},
          {id:'education-calculator',word:'calculatrice',translation:'calculadora',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'education-subjects',
        title: 'Asignaturas y áreas de estudio',
        entries: [
          {id:'education-subject',word:'matière',translation:'asignatura',articleFr:'une',articleEs:'una'},
          {id:'education-french',word:'français',translation:'francés',articleFr:'le',articleEs:'el'},
          {id:'education-spanish',word:'espagnol',translation:'español',articleFr:'l’',articleEs:'el'},
          {id:'education-english',word:'anglais',translation:'inglés',articleFr:'l’',articleEs:'el'},
          {id:'education-math',word:'mathématiques',translation:'matemáticas',articleFr:'les',articleEs:'las'},
          {id:'education-physics',word:'physique',translation:'física',articleFr:'la',articleEs:'la'},
          {id:'education-chemistry',word:'chimie',translation:'química',articleFr:'la',articleEs:'la'},
          {id:'education-biology',word:'biologie',translation:'biología',articleFr:'la',articleEs:'la'},
          {id:'education-history',word:'histoire',translation:'historia',articleFr:'l’',articleEs:'la'},
          {id:'education-geography',word:'géographie',translation:'geografía',articleFr:'la',articleEs:'la'},
          {id:'education-literature',word:'littérature',translation:'literatura',articleFr:'la',articleEs:'la'},
          {id:'education-art',word:'art',translation:'arte',articleFr:'l’',articleEs:'el'},
          {id:'education-music',word:'musique',translation:'música',articleFr:'la',articleEs:'la'},
          {id:'education-computing',word:'informatique',translation:'informática',articleFr:'l’',articleEs:'la'},
          {id:'education-physical-education',word:'éducation physique',translation:'educación física',articleFr:'l’',articleEs:'la'}
        ]
      },
      {
        id: 'education-classes-activities',
        title: 'Clases y actividades educativas',
        entries: [
          {id:'education-course',word:'cours',translation:'clase',articleFr:'un',articleEs:'una'},
          {id:'education-lesson',word:'leçon',translation:'lección',articleFr:'une',articleEs:'una'},
          {id:'education-exercise',word:'exercice',translation:'ejercicio',articleFr:'un',articleEs:'un'},
          {id:'education-homework',word:'devoir',translation:'tarea / deberes',articleFr:'un',articleEs:'una'},
          {id:'education-work',word:'travail',translation:'trabajo',articleFr:'un',articleEs:'un'},
          {id:'education-project',word:'projet',translation:'proyecto',articleFr:'un',articleEs:'un'},
          {id:'education-activity',word:'activité',translation:'actividad',articleFr:'une',articleEs:'una'},
          {id:'education-discussion',word:'discussion',translation:'discusión',articleFr:'une',articleEs:'una'},
          {id:'education-presentation',word:'présentation',translation:'presentación',articleFr:'une',articleEs:'una'},
          {id:'education-presentation-talk',word:'exposé',translation:'exposición',articleFr:'un',articleEs:'una'},
          {id:'education-exam',word:'examen',translation:'examen',articleFr:'un',articleEs:'un'},
          {id:'education-test',word:'contrôle',translation:'examen / control',articleFr:'un',articleEs:'un'},
          {id:'education-quiz',word:'test',translation:'prueba',articleFr:'un',articleEs:'una'},
          {id:'education-question',word:'question',translation:'pregunta',articleFr:'une',articleEs:'una'},
          {id:'education-answer',word:'réponse',translation:'respuesta',articleFr:'une',articleEs:'una'},
          {id:'education-correction',word:'correction',translation:'corrección',articleFr:'une',articleEs:'una'},
          {id:'education-grade',word:'note',translation:'nota / calificación',articleFr:'une',articleEs:'una'},
          {id:'education-result',word:'résultat',translation:'resultado',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'education-learning-actions',
        title: 'Acciones y aprendizaje',
        entries: [
          {id:'education-learn',word:'apprendre',translation:'aprender',articleFr:null,articleEs:null},
          {id:'education-study',word:'étudier',translation:'estudiar',articleFr:null,articleEs:null},
          {id:'education-teach',word:'enseigner',translation:'enseñar',articleFr:null,articleEs:null},
          {id:'education-read',word:'lire',translation:'leer',articleFr:null,articleEs:null},
          {id:'education-write',word:'écrire',translation:'escribir',articleFr:null,articleEs:null},
          {id:'education-listen',word:'écouter',translation:'escuchar',articleFr:null,articleEs:null},
          {id:'education-repeat',word:'répéter',translation:'repetir',articleFr:null,articleEs:null},
          {id:'education-review',word:'réviser',translation:'repasar',articleFr:null,articleEs:null},
          {id:'education-memorize',word:'mémoriser',translation:'memorizar',articleFr:null,articleEs:null},
          {id:'education-understand',word:'comprendre',translation:'comprender',articleFr:null,articleEs:null},
          {id:'education-explain',word:'expliquer',translation:'explicar',articleFr:null,articleEs:null},
          {id:'education-answer-verb',word:'répondre',translation:'responder',articleFr:null,articleEs:null},
          {id:'education-ask',word:'demander',translation:'preguntar / pedir',articleFr:null,articleEs:null},
          {id:'education-search',word:'chercher',translation:'buscar',articleFr:null,articleEs:null},
          {id:'education-do-exercise',word:'faire un exercice',translation:'hacer un ejercicio',articleFr:null,articleEs:null},
          {id:'education-do-homework',word:'faire ses devoirs',translation:'hacer los deberes',articleFr:null,articleEs:null},
          {id:'education-take-notes',word:'prendre des notes',translation:'tomar apuntes',articleFr:null,articleEs:null},
          {id:'education-take-exam',word:'passer un examen',translation:'hacer / presentarse a un examen',articleFr:null,articleEs:null}
        ]
      },
      {
        id: 'education-school-life',
        title: 'Organización y vida escolar',
        entries: [
          {id:'education-school-year',word:'année scolaire',translation:'año escolar',articleFr:'une',articleEs:'un'},
          {id:'education-semester',word:'semestre',translation:'semestre',articleFr:'un',articleEs:'un'},
          {id:'education-term',word:'trimestre',translation:'trimestre',articleFr:'un',articleEs:'un'},
          {id:'education-back-to-school',word:'rentrée scolaire',translation:'vuelta a clases',articleFr:'une',articleEs:'la'},
          {id:'education-school-holidays',word:'vacances scolaires',translation:'vacaciones escolares',articleFr:'les',articleEs:'las'},
          {id:'education-schedule',word:'emploi du temps',translation:'horario',articleFr:'un',articleEs:'un'},
          {id:'education-break',word:'pause',translation:'pausa',articleFr:'une',articleEs:'una'},
          {id:'education-online-course',word:'cours en ligne',translation:'clase en línea',articleFr:'un',articleEs:'una'},
          {id:'education-private-course',word:'cours particulier',translation:'clase particular',articleFr:'un',articleEs:'una'},
          {id:'education-diploma',word:'diplôme',translation:'diploma / título',articleFr:'un',articleEs:'un'},
          {id:'education-certificate',word:'certificat',translation:'certificado',articleFr:'un',articleEs:'un'},
          {id:'education-training',word:'formation',translation:'formación / capacitación',articleFr:'une',articleEs:'una'},
          {id:'education-registration',word:'inscription',translation:'inscripción / matrícula',articleFr:'une',articleEs:'una'},
          {id:'education-language-school',word:'école de langues',translation:'escuela de idiomas',articleFr:'une',articleEs:'una'}
        ]
      }
    ]
  };

  if (!window.COQ_VOCABULARY_DATABASE_API || typeof window.COQ_VOCABULARY_DATABASE_API.registerCategory !== 'function') {
    throw new Error('COQ Vocabulario: el registro de base de datos debe cargarse antes de las categorías.');
  }

  window.COQ_VOCABULARY_EDUCATION = Object.freeze(category);
  window.COQ_VOCABULARY_DATABASE_API.registerCategory(category);
})();
