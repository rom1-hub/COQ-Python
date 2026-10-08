/* COQ — Vocabulario · Trabajo y profesiones
 * Fuente de verdad del contenido de la categoría «Trabajo y profesiones».
 */
(function () {
  'use strict';

  const category = {
    id: 'work-professions',
    title: 'Trabajo y profesiones',
    subcategories: [
      {
        id: 'work-health-science-technology',
        title: 'Salud, ciencia y tecnología',
        entries: [
          {id:'work-doctor-male',word:'médecin',translation:'médico',articleFr:'un',articleEs:'un'},
          {id:'work-doctor-female',word:'médecin',translation:'médica',articleFr:'une',articleEs:'una'},
          {id:'work-nurse-male',word:'infirmier',translation:'enfermero',articleFr:'un',articleEs:'un'},
          {id:'work-nurse-female',word:'infirmière',translation:'enfermera',articleFr:'une',articleEs:'una'},
          {id:'work-dentist-male',word:'dentiste',translation:'dentista',articleFr:'un',articleEs:'un'},
          {id:'work-dentist-female',word:'dentiste',translation:'dentista',articleFr:'une',articleEs:'una'},
          {id:'work-pharmacist-male',word:'pharmacien',translation:'farmacéutico',articleFr:'un',articleEs:'un'},
          {id:'work-pharmacist-female',word:'pharmacienne',translation:'farmacéutica',articleFr:'une',articleEs:'una'},
          {id:'work-lawyer-male',word:'avocat',translation:'abogado',articleFr:'un',articleEs:'un'},
          {id:'work-lawyer-female',word:'avocate',translation:'abogada',articleFr:'une',articleEs:'una'},
          {id:'work-judge-male',word:'juge',translation:'juez',articleFr:'un',articleEs:'un'},
          {id:'work-judge-female',word:'juge',translation:'jueza',articleFr:'une',articleEs:'una'},
          {id:'work-scientist-male',word:'scientifique',translation:'científico',articleFr:'un',articleEs:'un'},
          {id:'work-scientist-female',word:'scientifique',translation:'científica',articleFr:'une',articleEs:'una'},
          {id:'work-researcher-male',word:'chercheur',translation:'investigador',articleFr:'un',articleEs:'un'},
          {id:'work-researcher-female',word:'chercheuse',translation:'investigadora',articleFr:'une',articleEs:'una'},
          {id:'work-engineer-male',word:'ingénieur',translation:'ingeniero',articleFr:'un',articleEs:'un'},
          {id:'work-engineer-female',word:'ingénieure',translation:'ingeniera',articleFr:'une',articleEs:'una'},
          {id:'work-computer-scientist-male',word:'informaticien',translation:'informático',articleFr:'un',articleEs:'un'},
          {id:'work-computer-scientist-female',word:'informaticienne',translation:'informática',articleFr:'une',articleEs:'una'},
          {id:'work-programmer-male',word:'programmeur',translation:'programador',articleFr:'un',articleEs:'un'},
          {id:'work-programmer-female',word:'programmeuse',translation:'programadora',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'work-communication-administration-commerce',
        title: 'Comunicación, administración y comercio',
        entries: [
          {id:'work-journalist-male',word:'journaliste',translation:'periodista',articleFr:'un',articleEs:'un'},
          {id:'work-journalist-female',word:'journaliste',translation:'periodista',articleFr:'une',articleEs:'una'},
          {id:'work-writer-male',word:'écrivain',translation:'escritor',articleFr:'un',articleEs:'un'},
          {id:'work-writer-female',word:'écrivaine',translation:'escritora',articleFr:'une',articleEs:'una'},
          {id:'work-translator-male',word:'traducteur',translation:'traductor',articleFr:'un',articleEs:'un'},
          {id:'work-translator-female',word:'traductrice',translation:'traductora',articleFr:'une',articleEs:'una'},
          {id:'work-interpreter-male',word:'interprète',translation:'intérprete',articleFr:'un',articleEs:'un'},
          {id:'work-interpreter-female',word:'interprète',translation:'intérprete',articleFr:'une',articleEs:'una'},
          {id:'work-accountant-male',word:'comptable',translation:'contable',articleFr:'un',articleEs:'un'},
          {id:'work-accountant-female',word:'comptable',translation:'contable',articleFr:'une',articleEs:'una'},
          {id:'work-banker-male',word:'banquier',translation:'banquero',articleFr:'un',articleEs:'un'},
          {id:'work-banker-female',word:'banquière',translation:'banquera',articleFr:'une',articleEs:'una'},
          {id:'work-salesperson-male',word:'vendeur',translation:'vendedor',articleFr:'un',articleEs:'un'},
          {id:'work-salesperson-female',word:'vendeuse',translation:'vendedora',articleFr:'une',articleEs:'una'},
          {id:'work-merchant-male',word:'commerçant',translation:'comerciante',articleFr:'un',articleEs:'un'},
          {id:'work-merchant-female',word:'commerçante',translation:'comerciante',articleFr:'une',articleEs:'una'},
          {id:'work-cashier-male',word:'caissier',translation:'cajero',articleFr:'un',articleEs:'un'},
          {id:'work-cashier-female',word:'caissière',translation:'cajera',articleFr:'une',articleEs:'una'},
          {id:'work-employee-male',word:'employé',translation:'empleado',articleFr:'un',articleEs:'un'},
          {id:'work-employee-female',word:'employée',translation:'empleada',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'work-food-agriculture-trades',
        title: 'Alimentación, agricultura y oficios',
        entries: [
          {id:'work-waiter-male',word:'serveur',translation:'camarero',articleFr:'un',articleEs:'un'},
          {id:'work-waiter-female',word:'serveuse',translation:'camarera',articleFr:'une',articleEs:'una'},
          {id:'work-cook-male',word:'cuisinier',translation:'cocinero',articleFr:'un',articleEs:'un'},
          {id:'work-cook-female',word:'cuisinière',translation:'cocinera',articleFr:'une',articleEs:'una'},
          {id:'work-baker-male',word:'boulanger',translation:'panadero',articleFr:'un',articleEs:'un'},
          {id:'work-baker-female',word:'boulangère',translation:'panadera',articleFr:'une',articleEs:'una'},
          {id:'work-pastry-chef-male',word:'pâtissier',translation:'pastelero',articleFr:'un',articleEs:'un'},
          {id:'work-pastry-chef-female',word:'pâtissière',translation:'pastelera',articleFr:'une',articleEs:'una'},
          {id:'work-farmer-male',word:'agriculteur',translation:'agricultor',articleFr:'un',articleEs:'un'},
          {id:'work-farmer-female',word:'agricultrice',translation:'agricultora',articleFr:'une',articleEs:'una'},
          {id:'work-gardener-male',word:'jardinier',translation:'jardinero',articleFr:'un',articleEs:'un'},
          {id:'work-gardener-female',word:'jardinière',translation:'jardinera',articleFr:'une',articleEs:'una'},
          {id:'work-mechanic-male',word:'mécanicien',translation:'mecánico',articleFr:'un',articleEs:'un'},
          {id:'work-mechanic-female',word:'mécanicienne',translation:'mecánica',articleFr:'une',articleEs:'una'},
          {id:'work-electrician-male',word:'électricien',translation:'electricista',articleFr:'un',articleEs:'un'},
          {id:'work-electrician-female',word:'électricienne',translation:'electricista',articleFr:'une',articleEs:'una'},
          {id:'work-plumber-male',word:'plombier',translation:'fontanero',articleFr:'un',articleEs:'un'},
          {id:'work-plumber-female',word:'plombière',translation:'fontanera',articleFr:'une',articleEs:'una'},
          {id:'work-hairdresser-male',word:'coiffeur',translation:'peluquero',articleFr:'un',articleEs:'un'},
          {id:'work-hairdresser-female',word:'coiffeuse',translation:'peluquera',articleFr:'une',articleEs:'una'},
          {id:'work-dressmaker-male',word:'couturier',translation:'modisto',articleFr:'un',articleEs:'un'},
          {id:'work-dressmaker-female',word:'couturière',translation:'modista',articleFr:'une',articleEs:'una'},
          {id:'work-craftsman-male',word:'artisan',translation:'artesano',articleFr:'un',articleEs:'un'},
          {id:'work-craftsman-female',word:'artisane',translation:'artesana',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'work-security-transport-arts',
        title: 'Seguridad, transporte y artes',
        entries: [
          {id:'work-police-officer-male',word:'policier',translation:'policía',articleFr:'un',articleEs:'un'},
          {id:'work-police-officer-female',word:'policière',translation:'policía',articleFr:'une',articleEs:'una'},
          {id:'work-firefighter-male',word:'pompier',translation:'bombero',articleFr:'un',articleEs:'un'},
          {id:'work-firefighter-female',word:'pompière',translation:'bombera',articleFr:'une',articleEs:'una'},
          {id:'work-soldier-male',word:'soldat',translation:'soldado',articleFr:'un',articleEs:'un'},
          {id:'work-soldier-female',word:'soldat',translation:'soldada',articleFr:'une',articleEs:'una'},
          {id:'work-driver-male',word:'chauffeur',translation:'conductor / chófer',articleFr:'un',articleEs:'un'},
          {id:'work-driver-female',word:'chauffeuse',translation:'conductora / chófer',articleFr:'une',articleEs:'una'},
          {id:'work-pilot-male',word:'pilote',translation:'piloto',articleFr:'un',articleEs:'un'},
          {id:'work-pilot-female',word:'pilote',translation:'piloto',articleFr:'une',articleEs:'una'},
          {id:'work-artist-male',word:'artiste',translation:'artista',articleFr:'un',articleEs:'un'},
          {id:'work-artist-female',word:'artiste',translation:'artista',articleFr:'une',articleEs:'una'},
          {id:'work-photographer-male',word:'photographe',translation:'fotógrafo',articleFr:'un',articleEs:'un'},
          {id:'work-photographer-female',word:'photographe',translation:'fotógrafa',articleFr:'une',articleEs:'una'},
          {id:'work-musician-male',word:'musicien',translation:'músico',articleFr:'un',articleEs:'un'},
          {id:'work-musician-female',word:'musicienne',translation:'música',articleFr:'une',articleEs:'una'},
          {id:'work-actor-male',word:'acteur',translation:'actor',articleFr:'un',articleEs:'un'},
          {id:'work-actor-female',word:'actrice',translation:'actriz',articleFr:'une',articleEs:'una'},
          {id:'work-singer-male',word:'chanteur',translation:'cantante',articleFr:'un',articleEs:'un'},
          {id:'work-singer-female',word:'chanteuse',translation:'cantante',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'work-workplaces',
        title: 'Lugares de trabajo',
        entries: [
          {id:'work-office',word:'bureau',translation:'oficina',articleFr:'un',articleEs:'una'},
          {id:'work-company',word:'entreprise',translation:'empresa',articleFr:'une',articleEs:'una'},
          {id:'work-company-society',word:'société',translation:'empresa / sociedad',articleFr:'une',articleEs:'una'},
          {id:'work-factory',word:'usine',translation:'fábrica',articleFr:'une',articleEs:'una'},
          {id:'work-workshop',word:'atelier',translation:'taller',articleFr:'un',articleEs:'un'},
          {id:'work-commerce',word:'commerce',translation:'comercio',articleFr:'un',articleEs:'un'},
          {id:'work-office-practice',word:'cabinet',translation:'despacho / consultorio',articleFr:'un',articleEs:'un'},
          {id:'work-construction-site',word:'chantier',translation:'obra / construcción',articleFr:'un',articleEs:'una'},
          {id:'work-agency',word:'agence',translation:'agencia',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'work-employment-recruitment',
        title: 'Empleo y contratación',
        entries: [
          {id:'work-job',word:'emploi',translation:'empleo',articleFr:'un',articleEs:'un'},
          {id:'work-profession',word:'métier',translation:'oficio / profesión',articleFr:'un',articleEs:'un'},
          {id:'work-position',word:'poste',translation:'puesto de trabajo',articleFr:'un',articleEs:'un'},
          {id:'work-full-time-job',word:'emploi à temps plein',translation:'empleo a tiempo completo',articleFr:'un',articleEs:'un'},
          {id:'work-part-time-job',word:'emploi à temps partiel',translation:'empleo a tiempo parcial',articleFr:'un',articleEs:'un'},
          {id:'work-contract',word:'contrat',translation:'contrato',articleFr:'un',articleEs:'un'},
          {id:'work-employment-contract',word:'contrat de travail',translation:'contrato de trabajo',articleFr:'un',articleEs:'un'},
          {id:'work-employer-male',word:'employeur',translation:'empleador',articleFr:'un',articleEs:'un'},
          {id:'work-employer-female',word:'employeuse',translation:'empleadora',articleFr:'une',articleEs:'una'},
          {id:'work-employee-male-2',word:'salarié',translation:'empleado / asalariado',articleFr:'un',articleEs:'un'},
          {id:'work-employee-female-2',word:'salariée',translation:'empleada / asalariada',articleFr:'une',articleEs:'una'},
          {id:'work-candidate-male',word:'candidat',translation:'candidato',articleFr:'un',articleEs:'un'},
          {id:'work-candidate-female',word:'candidate',translation:'candidata',articleFr:'une',articleEs:'una'},
          {id:'work-recruitment',word:'recrutement',translation:'contratación / reclutamiento',articleFr:'un',articleEs:'un'},
          {id:'work-application',word:'candidature',translation:'candidatura / solicitud de empleo',articleFr:'une',articleEs:'una'},
          {id:'work-job-interview',word:'entretien d’embauche',translation:'entrevista de trabajo',articleFr:'un',articleEs:'una'},
          {id:'work-cv',word:'CV',translation:'currículum',articleFr:'un',articleEs:'un'},
          {id:'work-cover-letter',word:'lettre de motivation',translation:'carta de presentación',articleFr:'une',articleEs:'una'},
          {id:'work-salary',word:'salaire',translation:'salario',articleFr:'un',articleEs:'un'},
          {id:'work-remuneration',word:'rémunération',translation:'remuneración',articleFr:'une',articleEs:'una'},
          {id:'work-bonus',word:'prime',translation:'bonificación / prima',articleFr:'une',articleEs:'una'},
          {id:'work-promotion',word:'promotion',translation:'ascenso / promoción',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'work-professional-organization',
        title: 'Organización profesional',
        entries: [
          {id:'work-team',word:'équipe',translation:'equipo',articleFr:'une',articleEs:'un'},
          {id:'work-boss-male',word:'chef',translation:'jefe',articleFr:'un',articleEs:'un'},
          {id:'work-boss-female',word:'cheffe',translation:'jefa',articleFr:'une',articleEs:'una'},
          {id:'work-owner-boss-male',word:'patron',translation:'jefe / patrón',articleFr:'un',articleEs:'un'},
          {id:'work-owner-boss-female',word:'patronne',translation:'jefa / patrona',articleFr:'une',articleEs:'una'},
          {id:'work-manager-male',word:'responsable',translation:'responsable',articleFr:'un',articleEs:'un'},
          {id:'work-manager-female',word:'responsable',translation:'responsable',articleFr:'une',articleEs:'una'},
          {id:'work-manager2-male',word:'manager',translation:'gerente / responsable',articleFr:'un',articleEs:'un'},
          {id:'work-manager2-female',word:'manager',translation:'gerente / responsable',articleFr:'une',articleEs:'una'},
          {id:'work-client-male',word:'client',translation:'cliente',articleFr:'un',articleEs:'un'},
          {id:'work-client-female',word:'cliente',translation:'clienta',articleFr:'une',articleEs:'una'},
          {id:'work-supplier-male',word:'fournisseur',translation:'proveedor',articleFr:'un',articleEs:'un'},
          {id:'work-supplier-female',word:'fournisseuse',translation:'proveedora',articleFr:'une',articleEs:'una'},
          {id:'work-meeting',word:'réunion',translation:'reunión',articleFr:'une',articleEs:'una'},
          {id:'work-task',word:'tâche',translation:'tarea',articleFr:'une',articleEs:'una'},
          {id:'work-responsibility',word:'responsabilité',translation:'responsabilidad',articleFr:'une',articleEs:'una'},
          {id:'work-objective',word:'objectif',translation:'objetivo',articleFr:'un',articleEs:'un'},
          {id:'work-deadline',word:'délai',translation:'plazo',articleFr:'un',articleEs:'un'}
        ]
      },
      {
        id: 'work-actions',
        title: 'Acciones en el trabajo',
        entries: [
          {id:'work-work',word:'travailler',translation:'trabajar',articleFr:null,articleEs:null},
          {id:'work-hire',word:'embaucher',translation:'contratar',articleFr:null,articleEs:null},
          {id:'work-fire',word:'licencier',translation:'despedir',articleFr:null,articleEs:null},
          {id:'work-resign',word:'démissionner',translation:'renunciar',articleFr:null,articleEs:null},
          {id:'work-recruit',word:'recruter',translation:'contratar / reclutar',articleFr:null,articleEs:null},
          {id:'work-apply',word:'postuler',translation:'solicitar un empleo',articleFr:null,articleEs:null},
          {id:'work-candidate-verb',word:'candidater',translation:'presentar una candidatura',articleFr:null,articleEs:null},
          {id:'work-manage',word:'gérer',translation:'gestionar',articleFr:null,articleEs:null},
          {id:'work-lead',word:'diriger',translation:'dirigir',articleFr:null,articleEs:null},
          {id:'work-organize',word:'organiser',translation:'organizar',articleFr:null,articleEs:null},
          {id:'work-plan',word:'planifier',translation:'planificar',articleFr:null,articleEs:null},
          {id:'work-participate',word:'participer',translation:'participar',articleFr:null,articleEs:null},
          {id:'work-collaborate',word:'collaborer',translation:'colaborar',articleFr:null,articleEs:null},
          {id:'work-communicate',word:'communiquer',translation:'comunicarse',articleFr:null,articleEs:null},
          {id:'work-answer',word:'répondre',translation:'responder',articleFr:null,articleEs:null},
          {id:'work-call',word:'téléphoner',translation:'llamar por teléfono',articleFr:null,articleEs:null},
          {id:'work-send',word:'envoyer',translation:'enviar',articleFr:null,articleEs:null},
          {id:'work-receive',word:'recevoir',translation:'recibir',articleFr:null,articleEs:null},
          {id:'work-sign',word:'signer',translation:'firmar',articleFr:null,articleEs:null},
          {id:'work-earn',word:'gagner',translation:'ganar',articleFr:null,articleEs:null},
          {id:'work-pay',word:'payer',translation:'pagar',articleFr:null,articleEs:null},
          {id:'work-sell',word:'vendre',translation:'vender',articleFr:null,articleEs:null},
          {id:'work-buy',word:'acheter',translation:'comprar',articleFr:null,articleEs:null}
        ]
      },
      {
        id: 'work-working-conditions',
        title: 'Condiciones laborales',
        entries: [
          {id:'work-unemployment',word:'chômage',translation:'desempleo',articleFr:'le',articleEs:'el'},
          {id:'work-unemployed-male',word:'chômeur',translation:'desempleado',articleFr:'un',articleEs:'un'},
          {id:'work-unemployed-female',word:'chômeuse',translation:'desempleada',articleFr:'une',articleEs:'una'},
          {id:'work-retirement',word:'retraite',translation:'jubilación',articleFr:'la',articleEs:'la'},
          {id:'work-retired-male',word:'retraité',translation:'jubilado',articleFr:'un',articleEs:'un'},
          {id:'work-retired-female',word:'retraitée',translation:'jubilada',articleFr:'une',articleEs:'una'},
          {id:'work-leave',word:'congé',translation:'permiso / licencia',articleFr:'un',articleEs:'un'},
          {id:'work-paid-leave',word:'congé payé',translation:'permiso pagado',articleFr:'un',articleEs:'un'},
          {id:'work-holiday',word:'jour férié',translation:'día festivo',articleFr:'un',articleEs:'un'},
          {id:'work-strike',word:'grève',translation:'huelga',articleFr:'une',articleEs:'una'},
          {id:'work-union',word:'syndicat',translation:'sindicato',articleFr:'un',articleEs:'un'},
          {id:'work-career',word:'carrière',translation:'carrera profesional',articleFr:'une',articleEs:'una'},
          {id:'work-professional-experience',word:'expérience professionnelle',translation:'experiencia profesional',articleFr:'une',articleEs:'una'},
          {id:'work-skill',word:'compétence',translation:'competencia / habilidad',articleFr:'une',articleEs:'una'},
          {id:'work-professional-training',word:'formation professionnelle',translation:'formación profesional',articleFr:'une',articleEs:'una'}
        ]
      },
      {
        id: 'work-business-activity',
        title: 'Empresa y actividad profesional',
        entries: [
          {id:'work-individual-company',word:'entreprise individuelle',translation:'empresa individual',articleFr:'une',articleEs:'una'},
          {id:'work-small-company',word:'petite entreprise',translation:'pequeña empresa',articleFr:'une',articleEs:'una'},
          {id:'work-large-company',word:'grande entreprise',translation:'gran empresa',articleFr:'une',articleEs:'una'},
          {id:'work-professional-activity',word:'activité professionnelle',translation:'actividad profesional',articleFr:'une',articleEs:'una'},
          {id:'work-business-sector',word:'secteur d’activité',translation:'sector de actividad',articleFr:'un',articleEs:'un'},
          {id:'work-entrepreneur-male',word:'entrepreneur',translation:'empresario',articleFr:'un',articleEs:'un'},
          {id:'work-entrepreneur-female',word:'entrepreneuse',translation:'empresaria',articleFr:'une',articleEs:'una'},
          {id:'work-self-employed-male',word:'indépendant',translation:'trabajador autónomo',articleFr:'un',articleEs:'un'},
          {id:'work-self-employed-female',word:'indépendante',translation:'trabajadora autónoma',articleFr:'une',articleEs:'una'}
        ]
      }
    ]
  };

  if (!window.COQ_VOCABULARY_DATABASE_API || typeof window.COQ_VOCABULARY_DATABASE_API.registerCategory !== 'function') {
    throw new Error('COQ Vocabulario: el registro de base de datos debe cargarse antes de las categorías.');
  }

  window.COQ_VOCABULARY_WORK_PROFESSIONS = Object.freeze(category);
  window.COQ_VOCABULARY_DATABASE_API.registerCategory(category);
})();
