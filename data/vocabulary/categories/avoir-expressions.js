/* COQ — Vocabulario · Expresiones con avoir */
(function () {
  'use strict';

  const category = {
    id: 'avoir-expressions',
    title: 'Expresiones con avoir',
    subcategories: [
      {
        id: 'avoir-age-life-stages',
        title: 'Edad y etapas de la vida',
        entries: [
          ['have-one-year','avoir un an','tener un año'],
          ['have-twenty-years','avoir vingt ans','tener veinte años'],
          ['have-the-age-of','avoir l’âge de','tener la edad de'],
          ['have-required-age','avoir l’âge requis','tener la edad requerida'],
          ['have-adult-age','avoir l’âge adulte','tener edad adulta'],
          ['have-a-certain-age','avoir un certain âge','tener cierta edad']
        ]
      },
      {
        id: 'avoir-needs-physical-states',
        title: 'Necesidades y estados físicos',
        entries: [
          ['be-hungry','avoir faim','tener hambre'],
          ['be-thirsty','avoir soif','tener sed'],
          ['be-sleepy','avoir sommeil','tener sueño'],
          ['be-hot','avoir chaud','tener calor'],
          ['be-cold','avoir froid','tener frío'],
          ['be-in-pain','avoir mal','tener dolor'],
          ['have-headache','avoir mal à la tête','tener dolor de cabeza'],
          ['have-stomachache','avoir mal au ventre','tener dolor de barriga'],
          ['have-backache','avoir mal au dos','tener dolor de espalda'],
          ['need','avoir besoin de','necesitar']
        ]
      },
      {
        id: 'avoir-sensations-perceptions',
        title: 'Sensaciones y percepciones',
        entries: [
          ['be-afraid','avoir peur','tener miedo'],
          ['be-ashamed','avoir honte','tener vergüenza'],
          ['be-lucky','avoir de la chance','tener suerte'],
          ['be-unlucky','avoir de la malchance','tener mala suerte'],
          ['have-impression','avoir l’impression de','tener la impresión de'],
          ['look-seem','avoir l’air de','parecer / tener aspecto de'],
          ['have-feeling','avoir le sentiment de','tener la sensación de'],
          ['be-aware','avoir conscience de','ser consciente de'],
          ['know-be-aware-of','avoir connaissance de','tener conocimiento de']
        ]
      },
      {
        id: 'avoir-need-obligation-possibility',
        title: 'Necesidad, obligación y posibilidad',
        entries: [
          ['have-to','avoir à','tener que'],
          ['have-right-to','avoir le droit de','tener derecho a'],
          ['have-duty-to','avoir le devoir de','tener el deber de'],
          ['have-possibility-to','avoir la possibilité de','tener la posibilidad de'],
          ['have-opportunity-to','avoir l’occasion de','tener la oportunidad de'],
          ['be-interested-in','avoir intérêt à','tener interés en / más vale'],
          ['have-choice','avoir le choix','tener elección'],
          ['have-time-to','avoir le temps de','tener tiempo de']
        ]
      },
      {
        id: 'avoir-feelings-confidence',
        title: 'Miedo, confianza y sentimientos',
        entries: [
          ['have-confidence-in','avoir confiance en','tener confianza en'],
          ['have-self-confidence','avoir confiance en soi','tener confianza en uno mismo'],
          ['have-hope','avoir de l’espoir','tener esperanza'],
          ['have-courage','avoir du courage','tener valor'],
          ['have-patience','avoir de la patience','tener paciencia'],
          ['feel-sorrow','avoir de la peine','estar apenado / sentir pena'],
          ['take-pleasure','avoir du plaisir','disfrutar / sentir placer'],
          ['have-compassion','avoir de la compassion','tener compasión']
        ]
      },
      {
        id: 'avoir-desire-intention',
        title: 'Deseo, intención y ganas',
        entries: [
          ['want-feel-like','avoir envie de','tener ganas de'],
          ['want-that','avoir envie que','tener ganas de que'],
          ['intend-to','avoir l’intention de','tener la intención de'],
          ['look-forward-to','avoir hâte de','tener ganas de / estar deseando'],
          ['have-objective','avoir pour objectif de','tener como objetivo'],
          ['have-goal','avoir pour but de','tener como objetivo'],
          ['desire-to','avoir le désir de','tener el deseo de']
        ]
      },
      {
        id: 'avoir-success-results',
        title: 'Éxito, fracaso y resultados',
        entries: [
          ['have-success','avoir du succès','tener éxito'],
          ['have-success-achievement','avoir de la réussite','tener éxito'],
          ['have-good-results','avoir de bons résultats','obtener buenos resultados'],
          ['have-bad-results','avoir de mauvais résultats','obtener malos resultados'],
          ['get-good-grade','avoir une bonne note','sacar una buena nota'],
          ['get-bad-grade','avoir une mauvaise note','sacar una mala nota'],
          ['be-right','avoir raison','tener razón'],
          ['be-wrong','avoir tort','estar equivocado'],
          ['win-case','avoir gain de cause','obtener satisfacción / conseguir que se reconozca su derecho']
        ]
      },
      {
        id: 'avoir-agreement-relations',
        title: 'Acuerdo, opinión y relación con los demás',
        entries: [
          ['be-right-to','avoir raison de','tener razón al'],
          ['be-wrong-to','avoir tort de','equivocarse al'],
          ['have-something-against','avoir quelque chose contre','tener algo en contra de'],
          ['have-relations-with','avoir des relations avec','tener relaciones con'],
          ['respect-for','avoir du respect pour','tener respeto por'],
          ['esteem-for','avoir de l’estime pour','tener estima por']
        ]
      },
      {
        id: 'avoir-situations-access',
        title: 'Situaciones, acontecimientos y acceso',
        entries: [
          ['take-place','avoir lieu','tener lugar'],
          ['take-place-at','avoir lieu à','tener lugar en'],
          ['take-place-on','avoir lieu le','tener lugar el'],
          ['have-access-to','avoir accès à','tener acceso a'],
          ['have-recourse-to','avoir recours à','recurrir a'],
          ['have-something-to-do','avoir quelque chose à faire','tener algo que hacer'],
          ['have-something-to-say','avoir quelque chose à dire','tener algo que decir']
        ]
      },
      {
        id: 'avoir-common-expressions',
        title: 'Expresiones frecuentes con avoir',
        entries: [
          ['have-beau','avoir beau','por más que / aunque'],
          ['have-beau-do','avoir beau faire','por más que hacer'],
          ['be-used-to','avoir l’habitude de','tener la costumbre de'],
          ['tend-to','avoir tendance à','tender a'],
          ['have-difficulty','avoir du mal à','tener dificultad para'],
          ['have-heart-to','avoir à cœur de','tener mucho interés en / empeñarse en'],
          ['have-right-to-receive','avoir droit à','tener derecho a / recibir'],
          ['have-deal','avoir affaire','tener que tratar'],
          ['have-beau-say','avoir beau dire','por más que diga']
        ]
      }
    ].map((subcategory) => ({
      ...subcategory,
      entries: subcategory.entries.map(([id, word, translation]) => ({
        id: 'avoir-' + id,
        word,
        translation
      }))
    }))
  };

  if (window.COQ_VOCABULARY_DATABASE_API) {
    window.COQ_VOCABULARY_DATABASE_API.registerCategory(category);
  }
})();