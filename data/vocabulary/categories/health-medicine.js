/* COQ — Vocabulario · Salud y medicina
 * Fuente de verdad del contenido de la categoría «Salud y medicina».
 */
(function () {
  'use strict';

  const category = {
    id: 'health-medicine',
    title: 'Salud y medicina',
    subcategories: [
      {
        id: 'health-symptoms',
        title: 'Síntomas y molestias',
        entries: [
          {id:'health-symptoms-pain',word:'douleur',translation:'dolor',articleFr:'une',articleEs:'un'},
          {id:'health-symptoms-headache',word:'mal de tête',translation:'dolor de cabeza',articleFr:'un',articleEs:'un'},
          {id:'health-symptoms-stomachache',word:'mal de ventre',translation:'dolor de barriga',articleFr:'un',articleEs:'un'},
          {id:'health-symptoms-sore-throat',word:'mal de gorge',translation:'dolor de garganta',articleFr:'un',articleEs:'un'},
          {id:'health-symptoms-backache',word:'mal de dos',translation:'dolor de espalda',articleFr:'un',articleEs:'un'},
          {id:'health-symptoms-fever',word:'fièvre',translation:'fiebre',articleFr:'une',articleEs:'una'},
          {id:'health-symptoms-cough',word:'toux',translation:'tos',articleFr:'une',articleEs:'una'},
          {id:'health-symptoms-cold',word:'rhume',translation:'resfriado',articleFr:'un',articleEs:'un'},
          {id:'health-symptoms-stuffy-nose',word:'nez bouché',translation:'nariz congestionada',articleFr:'un',articleEs:'una'},
          {id:'health-symptoms-sneeze',word:'éternuement',translation:'estornudo',articleFr:'un',articleEs:'un'},
          {id:'health-symptoms-dizziness',word:'vertige',translation:'mareo',articleFr:'un',articleEs:'un'},
          {id:'health-symptoms-nausea',word:'nausée',translation:'náusea',articleFr:'une',articleEs:'una'},
          {id:'health-symptoms-vomiting',word:'vomissement',translation:'vómito',articleFr:'un',articleEs:'un'},
          {id:'health-symptoms-diarrhea',word:'diarrhée',translation:'diarrea',articleFr:'une',articleEs:'una'},
          {id:'health-symptoms-constipation',word:'constipation',translation:'estreñimiento',articleFr:'une',articleEs:'un'},
          {id:'health-symptoms-fatigue',word:'fatigue',translation:'cansancio',articleFr:'une',articleEs:'un'},
          {id:'health-symptoms-weakness',word:'faiblesse',translation:'debilidad',articleFr:'une',articleEs:'una'},
          {id:'health-symptoms-itching',word:'démangeaison',translation:'picor',articleFr:'une',articleEs:'un'},
          {id:'health-symptoms-redness',word:'rougeur',translation:'enrojecimiento',articleFr:'une',articleEs:'un'},
          {id:'health-symptoms-swelling',word:'gonflement',translation:'hinchazón',articleFr:'un',articleEs:'una'},
          {id:'health-symptoms-injury',word:'blessure',translation:'lesión / herida',articleFr:'une',articleEs:'una'},
          {id:'health-symptoms-burn',word:'brûlure',translation:'quemadura',articleFr:'une',articleEs:'una'},
          {id:'health-symptoms-cut',word:'coupure',translation:'corte',articleFr:'une',articleEs:'un'},
          {id:'health-symptoms-wound',word:'plaie',translation:'herida',articleFr:'une',articleEs:'una'},
          {id:'health-symptoms-bleeding',word:'saignement',translation:'sangrado',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'health-diseases',
        title: 'Enfermedades y problemas de salud',
        entries: [
          {id:'health-diseases-disease',word:'maladie',translation:'enfermedad',articleFr:'une',articleEs:'una'},
          {id:'health-diseases-infection',word:'infection',translation:'infección',articleFr:'une',articleEs:'una'},
          {id:'health-diseases-flu',word:'grippe',translation:'gripe',articleFr:'une',articleEs:'una'},
          {id:'health-diseases-cold',word:'rhume',translation:'resfriado',articleFr:'un',articleEs:'un'},
          {id:'health-diseases-angina',word:'angine',translation:'angina / infección de garganta',articleFr:'une',articleEs:'una'},
          {id:'health-diseases-bronchitis',word:'bronchite',translation:'bronquitis',articleFr:'une',articleEs:'una'},
          {id:'health-diseases-pneumonia',word:'pneumonie',translation:'neumonía',articleFr:'une',articleEs:'una'},
          {id:'health-diseases-allergy',word:'allergie',translation:'alergia',articleFr:'une',articleEs:'una'},
          {id:'health-diseases-asthma',word:'asthme',translation:'asma',articleFr:'un',articleEs:'un'},
          {id:'health-diseases-migraine',word:'migraine',translation:'migraña',articleFr:'une',articleEs:'una'},
          {id:'health-diseases-diabetes',word:'diabète',translation:'diabetes',articleFr:'un',articleEs:'una'},
          {id:'health-diseases-hypertension',word:'hypertension',translation:'hipertensión',articleFr:'une',articleEs:'una'},
          {id:'health-diseases-hypotension',word:'hypotension',translation:'hipotensión',articleFr:'une',articleEs:'una'},
          {id:'health-diseases-fracture',word:'fracture',translation:'fractura',articleFr:'une',articleEs:'una'},
          {id:'health-diseases-sprain',word:'entorse',translation:'esguince',articleFr:'une',articleEs:'un'},
          {id:'health-diseases-wound',word:'plaie',translation:'herida',articleFr:'une',articleEs:'una'},
          {id:'health-diseases-burn',word:'brûlure',translation:'quemadura',articleFr:'une',articleEs:'una'},
          {id:'health-diseases-poisoning',word:'intoxication',translation:'intoxicación',articleFr:'une',articleEs:'una'},
          {id:'health-diseases-dehydration',word:'déshydratation',translation:'deshidratación',articleFr:'une',articleEs:'una'},
          {id:'health-diseases-inflammation',word:'inflammation',translation:'inflamación',articleFr:'une',articleEs:'una'},
          {id:'health-diseases-chronic-pain',word:'douleur chronique',translation:'dolor crónico',articleFr:'une',articleEs:'un'},
          {id:'health-diseases-chronic-disease',word:'maladie chronique',translation:'enfermedad crónica',articleFr:'une',articleEs:'una'},
          {id:'health-diseases-cardiovascular',word:'maladie cardiovasculaire',translation:'enfermedad cardiovascular',articleFr:'une',articleEs:'una'},
          {id:'health-diseases-respiratory',word:'problème respiratoire',translation:'problema respiratorio',articleFr:'un',articleEs:'un'},
          {id:'health-diseases-digestive',word:'problème digestif',translation:'problema digestivo',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'health-professionals',
        title: 'Profesionales de la salud',
        entries: [
          {id:'health-professionals-doctor-m',word:'médecin',translation:'médico',articleFr:'un',articleEs:'un'},
          {id:'health-professionals-doctor-f',word:'médecin',translation:'médica',articleFr:'une',articleEs:'una'},
          {id:'health-professionals-generalist-m',word:'généraliste',translation:'médico general',articleFr:'un',articleEs:'un'},
          {id:'health-professionals-generalist-f',word:'généraliste',translation:'médica general',articleFr:'une',articleEs:'una'},
          {id:'health-professionals-specialist-m',word:'spécialiste',translation:'especialista',articleFr:'un',articleEs:'un'},
          {id:'health-professionals-specialist-f',word:'spécialiste',translation:'especialista',articleFr:'une',articleEs:'una'},
          {id:'health-professionals-surgeon-m',word:'chirurgien',translation:'cirujano',articleFr:'un',articleEs:'un'},
          {id:'health-professionals-surgeon-f',word:'chirurgienne',translation:'cirujana',articleFr:'une',articleEs:'una'},
          {id:'health-professionals-nurse-m',word:'infirmier',translation:'enfermero',articleFr:'un',articleEs:'un'},
          {id:'health-professionals-nurse-f',word:'infirmière',translation:'enfermera',articleFr:'une',articleEs:'una'},
          {id:'health-professionals-dentist',word:'dentiste',translation:'dentista',articleFr:'un',articleEs:'un'},
          {id:'health-professionals-pharmacist-m',word:'pharmacien',translation:'farmacéutico',articleFr:'un',articleEs:'un'},
          {id:'health-professionals-pharmacist-f',word:'pharmacienne',translation:'farmacéutica',articleFr:'une',articleEs:'una'},
          {id:'health-professionals-physiotherapist-m',word:'kinésithérapeute',translation:'fisioterapeuta',articleFr:'un',articleEs:'un'},
          {id:'health-professionals-physiotherapist-f',word:'kinésithérapeute',translation:'fisioterapeuta',articleFr:'une',articleEs:'una'},
          {id:'health-professionals-psychologist-m',word:'psychologue',translation:'psicólogo',articleFr:'un',articleEs:'un'},
          {id:'health-professionals-psychologist-f',word:'psychologue',translation:'psicóloga',articleFr:'une',articleEs:'una'},
          {id:'health-professionals-vet-m',word:'vétérinaire',translation:'veterinario',articleFr:'un',articleEs:'un'},
          {id:'health-professionals-vet-f',word:'vétérinaire',translation:'veterinaria',articleFr:'une',articleEs:'una'},
          {id:'health-professionals-paramedic',word:'ambulancier',translation:'técnico de emergencias / ambulanciero',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'health-places',
        title: 'Lugares y servicios médicos',
        entries: [
          {id:'health-places-hospital',word:'hôpital',translation:'hospital',articleFr:'un',articleEs:'un'},
          {id:'health-places-clinic',word:'clinique',translation:'clínica',articleFr:'une',articleEs:'una'},
          {id:'health-places-medical-office',word:'cabinet médical',translation:'consulta médica',articleFr:'un',articleEs:'una'},
          {id:'health-places-dental-office',word:'cabinet dentaire',translation:'clínica dental',articleFr:'un',articleEs:'una'},
          {id:'health-places-pharmacy',word:'pharmacie',translation:'farmacia',articleFr:'une',articleEs:'una'},
          {id:'health-places-health-center',word:'centre de santé',translation:'centro de salud',articleFr:'un',articleEs:'un'},
          {id:'health-places-medical-center',word:'centre médical',translation:'centro médico',articleFr:'un',articleEs:'un'},
          {id:'health-places-emergency',word:'urgences',translation:'urgencias',articleFr:'les',articleEs:'las'},
          {id:'health-places-waiting-room',word:'salle d’attente',translation:'sala de espera',articleFr:'une',articleEs:'una'},
          {id:'health-places-consultation-room',word:'salle de consultation',translation:'sala de consulta',articleFr:'une',articleEs:'una'},
          {id:'health-places-operating-room',word:'salle d’opération',translation:'quirófano',articleFr:'une',articleEs:'un'},
          {id:'health-places-laboratory',word:'laboratoire',translation:'laboratorio',articleFr:'un',articleEs:'un'},
          {id:'health-places-maternity',word:'maternité',translation:'maternidad',articleFr:'une',articleEs:'una'},
          {id:'health-places-medical-service',word:'service médical',translation:'servicio médico',articleFr:'un',articleEs:'un'},
          {id:'health-places-emergency-service',word:'service d’urgence',translation:'servicio de urgencias',articleFr:'un',articleEs:'un'},
          {id:'health-places-ambulance',word:'ambulance',translation:'ambulancia',articleFr:'une',articleEs:'una'},
          {id:'health-places-vaccination-center',word:'centre de vaccination',translation:'centro de vacunación',articleFr:'un',articleEs:'un'},
          {id:'health-places-retirement-home',word:'maison de retraite',translation:'residencia de mayores',articleFr:'une',articleEs:'una'},
          {id:'health-places-rehab-center',word:'centre de rééducation',translation:'centro de rehabilitación',articleFr:'un',articleEs:'un'},
          {id:'health-places-radiology',word:'service de radiologie',translation:'servicio de radiología',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'health-medications',
        title: 'Medicamentos y tratamientos',
        entries: [
          {id:'health-medications-medicine',word:'médicament',translation:'medicamento',articleFr:'un',articleEs:'un'},
          {id:'health-medications-treatment',word:'traitement',translation:'tratamiento',articleFr:'un',articleEs:'un'},
          {id:'health-medications-prescription',word:'ordonnance',translation:'receta médica',articleFr:'une',articleEs:'una'},
          {id:'health-medications-tablet',word:'comprimé',translation:'comprimido',articleFr:'un',articleEs:'un'},
          {id:'health-medications-pill',word:'pilule',translation:'pastilla',articleFr:'une',articleEs:'una'},
          {id:'health-medications-capsule',word:'gélule',translation:'cápsula',articleFr:'une',articleEs:'una'},
          {id:'health-medications-syrup',word:'sirop',translation:'jarabe',articleFr:'un',articleEs:'un'},
          {id:'health-medications-cream',word:'crème',translation:'crema',articleFr:'une',articleEs:'una'},
          {id:'health-medications-ointment',word:'pommade',translation:'pomada',articleFr:'une',articleEs:'una'},
          {id:'health-medications-drops',word:'gouttes',translation:'gotas',articleFr:'des',articleEs:'unas'},
          {id:'health-medications-injection',word:'injection',translation:'inyección',articleFr:'une',articleEs:'una'},
          {id:'health-medications-vaccine',word:'vaccin',translation:'vacuna',articleFr:'un',articleEs:'una'},
          {id:'health-medications-antibiotic',word:'antibiotique',translation:'antibiótico',articleFr:'un',articleEs:'un'},
          {id:'health-medications-painkiller',word:'antidouleur',translation:'analgésico',articleFr:'un',articleEs:'un'},
          {id:'health-medications-anti-inflammatory',word:'anti-inflammatoire',translation:'antiinflamatorio',articleFr:'un',articleEs:'un'},
          {id:'health-medications-disinfectant',word:'désinfectant',translation:'desinfectante',articleFr:'un',articleEs:'un'},
          {id:'health-medications-bandage-strip',word:'pansement',translation:'tirita / apósito',articleFr:'un',articleEs:'una'},
          {id:'health-medications-compress',word:'compresse',translation:'compresa',articleFr:'une',articleEs:'una'},
          {id:'health-medications-bandage',word:'bandage',translation:'vendaje',articleFr:'un',articleEs:'un'},
          {id:'health-medications-splint',word:'attelle',translation:'férula',articleFr:'une',articleEs:'una'},
          {id:'health-medications-crutch',word:'béquille',translation:'muleta',articleFr:'une',articleEs:'una'},
          {id:'health-medications-cast',word:'plâtre',translation:'escayola',articleFr:'un',articleEs:'una'},
          {id:'health-medications-syringe',word:'seringue',translation:'jeringa',articleFr:'une',articleEs:'una'},
          {id:'health-medications-thermometer',word:'thermomètre',translation:'termómetro',articleFr:'un',articleEs:'un'},
          {id:'health-medications-take-medicine',word:'prendre un médicament',translation:'tomar un medicamento'}
        ]
      },
      {
        id: 'health-consultations',
        title: 'Consultas, pruebas y diagnóstico',
        entries: [
          {id:'health-consultations-consultation',word:'consultation',translation:'consulta',articleFr:'une',articleEs:'una'},
          {id:'health-consultations-appointment',word:'rendez-vous médical',translation:'cita médica',articleFr:'un',articleEs:'una'},
          {id:'health-consultations-diagnosis',word:'diagnostic',translation:'diagnóstico',articleFr:'un',articleEs:'un'},
          {id:'health-consultations-medical-exam',word:'examen médical',translation:'examen médico',articleFr:'un',articleEs:'un'},
          {id:'health-consultations-analysis',word:'analyse',translation:'análisis',articleFr:'une',articleEs:'un'},
          {id:'health-consultations-blood-test',word:'prise de sang',translation:'análisis de sangre',articleFr:'une',articleEs:'un'},
          {id:'health-consultations-urine-test',word:'analyse d’urine',translation:'análisis de orina',articleFr:'une',articleEs:'un'},
          {id:'health-consultations-xray',word:'radiographie',translation:'radiografía',articleFr:'une',articleEs:'una'},
          {id:'health-consultations-ultrasound',word:'échographie',translation:'ecografía',articleFr:'une',articleEs:'una'},
          {id:'health-consultations-scan',word:'scanner',translation:'escáner / TAC',articleFr:'un',articleEs:'un'},
          {id:'health-consultations-mri',word:'IRM',translation:'resonancia magnética',articleFr:'une',articleEs:'una'},
          {id:'health-consultations-ecg',word:'électrocardiogramme',translation:'electrocardiograma',articleFr:'un',articleEs:'un'},
          {id:'health-consultations-blood-pressure',word:'tension artérielle',translation:'presión arterial',articleFr:'une',articleEs:'una'},
          {id:'health-consultations-result',word:'résultat',translation:'resultado',articleFr:'un',articleEs:'un'},
          {id:'health-consultations-medical-record',word:'dossier médical',translation:'historial médico',articleFr:'un',articleEs:'un'},
          {id:'health-consultations-history',word:'antécédent médical',translation:'antecedente médico',articleFr:'un',articleEs:'un'},
          {id:'health-consultations-routine-exam',word:'examen de routine',translation:'examen rutinario',articleFr:'un',articleEs:'un'},
          {id:'health-consultations-checkup',word:'contrôle médical',translation:'control médico',articleFr:'un',articleEs:'un'},
          {id:'health-consultations-operation',word:'opération',translation:'operación',articleFr:'une',articleEs:'una'},
          {id:'health-consultations-procedure',word:'intervention',translation:'intervención',articleFr:'une',articleEs:'una'},
          {id:'health-consultations-anesthesia',word:'anesthésie',translation:'anestesia',articleFr:'une',articleEs:'una'},
          {id:'health-consultations-surgery',word:'chirurgie',translation:'cirugía',articleFr:'une',articleEs:'una'},
          {id:'health-consultations-hospitalization',word:'hospitalisation',translation:'hospitalización',articleFr:'une',articleEs:'una'},
          {id:'health-consultations-follow-up',word:'suivi médical',translation:'seguimiento médico',articleFr:'un',articleEs:'un'},
          {id:'health-consultations-have-exam',word:'faire un examen',translation:'hacerse un examen'}
        ]
      },
      {
        id: 'health-emergency-first-aid',
        title: 'Urgencias y primeros auxilios',
        entries: [
          {id:'health-emergency-emergency',word:'urgence',translation:'emergencia',articleFr:'une',articleEs:'una'},
          {id:'health-emergency-first-aid',word:'premiers secours',translation:'primeros auxilios',articleFr:'les',articleEs:'los'},
          {id:'health-emergency-accident',word:'accident',translation:'accidente',articleFr:'un',articleEs:'un'},
          {id:'health-emergency-victim',word:'victime',translation:'víctima',articleFr:'une',articleEs:'una'},
          {id:'health-emergency-help',word:'secours',translation:'auxilio',articleFr:'un',articleEs:'un'},
          {id:'health-emergency-call-help',word:'appeler les secours',translation:'llamar a emergencias'},
          {id:'health-emergency-call-ambulance',word:'appeler une ambulance',translation:'llamar a una ambulancia'},
          {id:'health-emergency-rescue',word:'secourir',translation:'socorrer'},
          {id:'health-emergency-save',word:'sauver',translation:'salvar'},
          {id:'health-emergency-resuscitate',word:'réanimer',translation:'reanimar'},
          {id:'health-emergency-resuscitation',word:'réanimation',translation:'reanimación',articleFr:'une',articleEs:'una'},
          {id:'health-emergency-cardiac-arrest',word:'arrêt cardiaque',translation:'paro cardíaco',articleFr:'un',articleEs:'un'},
          {id:'health-emergency-unconsciousness',word:'perte de connaissance',translation:'pérdida de conocimiento',articleFr:'une',articleEs:'una'},
          {id:'health-emergency-fainting',word:'malaise',translation:'malestar / desmayo',articleFr:'un',articleEs:'un'},
          {id:'health-emergency-hemorrhage',word:'hémorragie',translation:'hemorragia',articleFr:'une',articleEs:'una'},
          {id:'health-emergency-bleeding',word:'saignement',translation:'sangrado',articleFr:'un',articleEs:'un'},
          {id:'health-emergency-wound',word:'plaie',translation:'herida',articleFr:'une',articleEs:'una'},
          {id:'health-emergency-burn',word:'brûlure',translation:'quemadura',articleFr:'une',articleEs:'una'},
          {id:'health-emergency-fracture',word:'fracture',translation:'fractura',articleFr:'une',articleEs:'una'},
          {id:'health-emergency-defibrillator',word:'défibrillateur',translation:'desfibrilador',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'health-hygiene-prevention',
        title: 'Higiene, prevención y hábitos saludables',
        entries: [
          {id:'health-prevention-hygiene',word:'hygiène',translation:'higiene',articleFr:'l’',articleEs:'la'},
          {id:'health-prevention-health',word:'santé',translation:'salud',articleFr:'la',articleEs:'la'},
          {id:'health-prevention-prevention',word:'prévention',translation:'prevención',articleFr:'la',articleEs:'la'},
          {id:'health-prevention-habit',word:'habitude',translation:'hábito',articleFr:'une',articleEs:'un'},
          {id:'health-prevention-balanced-diet',word:'alimentation équilibrée',translation:'alimentación equilibrada',articleFr:'une',articleEs:'una'},
          {id:'health-prevention-physical-activity',word:'activité physique',translation:'actividad física',articleFr:'une',articleEs:'una'},
          {id:'health-prevention-physical-exercise',word:'exercice physique',translation:'ejercicio físico',articleFr:'un',articleEs:'un'},
          {id:'health-prevention-sleep',word:'sommeil',translation:'sueño',articleFr:'le',articleEs:'el'},
          {id:'health-prevention-rest',word:'repos',translation:'descanso',articleFr:'le',articleEs:'el'},
          {id:'health-prevention-break',word:'pause',translation:'pausa',articleFr:'une',articleEs:'una'},
          {id:'health-prevention-wash-hands',word:'se laver les mains',translation:'lavarse las manos'},
          {id:'health-prevention-brush-teeth',word:'se brosser les dents',translation:'cepillarse los dientes'},
          {id:'health-prevention-shower',word:'prendre une douche',translation:'ducharse'},
          {id:'health-prevention-sleep-verb',word:'dormir',translation:'dormir'},
          {id:'health-prevention-rest-verb',word:'se reposer',translation:'descansar'},
          {id:'health-prevention-sport',word:'faire du sport',translation:'hacer deporte'},
          {id:'health-prevention-eat-healthily',word:'manger sainement',translation:'comer sano'},
          {id:'health-prevention-drink-water',word:'boire de l’eau',translation:'beber agua'},
          {id:'health-prevention-avoid',word:'éviter',translation:'evitar'},
          {id:'health-prevention-prevent',word:'prévenir',translation:'prevenir'},
          {id:'health-prevention-protect',word:'protéger',translation:'proteger'},
          {id:'health-prevention-vaccinate',word:'se vacciner',translation:'vacunarse'},
          {id:'health-prevention-vaccination',word:'vaccination',translation:'vacunación',articleFr:'une',articleEs:'una'},
          {id:'health-prevention-medical-check',word:'contrôle médical',translation:'control médico',articleFr:'un',articleEs:'un'},
          {id:'health-prevention-medical-visit',word:'visite médicale',translation:'revisión médica',articleFr:'une',articleEs:'una'}
        ]
      }
    ]
  };

  if (!window.COQ_VOCABULARY_DATABASE_API || typeof window.COQ_VOCABULARY_DATABASE_API.registerCategory !== 'function') {
    throw new Error('COQ Vocabulario: el registro de base de datos debe cargarse antes de las categorías.');
  }

  window.COQ_VOCABULARY_HEALTH_MEDICINE = Object.freeze(category);
  window.COQ_VOCABULARY_DATABASE_API.registerCategory(category);
})();