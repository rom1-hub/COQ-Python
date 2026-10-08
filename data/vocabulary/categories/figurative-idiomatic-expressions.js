/* COQ — Expresiones figuradas e idiomáticas */
(function () {
  'use strict';

  const category = {
    id: 'figurative-idiomatic-expressions',
    title: 'Expresiones figuradas e idiomáticas',
    subcategories: [
      {
        id: 'relations-behavior',
        title: 'Relaciones, personas y comportamiento',
        entries: [
          ['poser-un-lapin','poser un lapin','dejar plantado a alguien'],
          ['faire-connaissance','faire connaissance','conocerse'],
          ['se-mettre-dans-la-peau','se mettre dans la peau de quelqu’un','ponerse en el lugar de alguien'],
          ['etre-dans-les-petits-papiers','être dans les petits papiers de quelqu’un','estar en gracia de alguien'],
          ['avoir-quelqu-un-dans-le-nez','avoir quelqu’un dans le nez','tenerle manía a alguien'],
          ['ne-pas-pouvoir-voir-en-peinture','ne pas pouvoir voir quelqu’un en peinture','no poder ni ver a alguien'],
          ['faire-bande-a-part','faire bande à part','ir por separado'],
          ['tirer-les-vers-du-nez','tirer les vers du nez','sacarle información a alguien'],
          ['mettre-quelqu-un-a-l-aise','mettre quelqu’un à l’aise','hacer que alguien se sienta cómodo'],
          ['tenir-compagnie','tenir compagnie','hacer compañía'],
          ['se-foutre-de-quelqu-un','se foutre de quelqu’un','burlarse de alguien / que alguien te importe un bledo'],
          ['tomber-sur-quelqu-un','tomber sur quelqu’un','encontrarse con alguien por casualidad'],
          ['mettre-un-rateau','mettre un râteau','rechazar a alguien / dar calabazas'],
          ['casser-les-oreilles','casser les oreilles','molestar / hacer ruido insoportable']
        ]
      },
      {
        id: 'emotions-moods',
        title: 'Emociones y estados de ánimo',
        entries: [
          ['broyer-du-noir','broyer du noir','estar deprimido / estar de bajón'],
          ['avoir-le-moral-dans-les-chaussettes','avoir le moral dans les chaussettes','estar de bajón'],
          ['etre-aux-anges','être aux anges','estar encantado / estar en las nubes'],
          ['etre-de-mauvaise-humeur','être de mauvaise humeur','estar de mal humor'],
          ['etre-de-bonne-humeur','être de bonne humeur','estar de buen humor'],
          ['prendre-son-mal-en-patience','prendre son mal en patience','armarse de paciencia'],
          ['avoir-le-coeur-gros','avoir le cœur gros','estar triste / tener el corazón apesadumbrado'],
          ['avoir-le-coeur-leger','avoir le cœur léger','sentirse aliviado / despreocupado'],
          ['etre-rouge-de-honte','être rouge de honte','estar rojo de vergüenza'],
          ['etre-vert-de-rage','être vert de rage','estar verde de rabia'],
          ['avoir-un-coup-de-foudre','avoir un coup de foudre','enamorarse a primera vista / sentir un flechazo'],
          ['humour-noir','l’humour noir','humor negro']
        ]
      },
      {
        id: 'daily-life-events',
        title: 'Vida cotidiana y acontecimientos',
        entries: [
          ['pendre-la-cremaillere','pendre la crémaillère','hacer una fiesta de inauguración de una casa'],
          ['faire-une-nuit-blanche','faire une nuit blanche','pasar una noche en vela'],
          ['faire-la-grasse-matinee','faire la grasse matinée','dormir hasta tarde'],
          ['tomber-dans-les-pommes','tomber dans les pommes','desmayarse'],
          ['avoir-un-coup-de-barre','avoir un coup de barre','tener un bajón de energía'],
          ['prendre-un-pot','prendre un pot','tomar algo juntos'],
          ['faire-les-quatre-cents-coups','faire les quatre cents coups','hacer de las suyas'],
          ['mettre-les-pieds-dans-le-plat','mettre les pieds dans le plat','meter la pata'],
          ['faire-tout-un-plat','faire tout un plat de quelque chose','hacer un drama de algo'],
          ['mettre-les-petits-plats-dans-les-grands','mettre les petits plats dans les grands','esmerarse / poner toda la carne en el asador'],
          ['avoir-des-fourmis-dans-les-jambes','avoir des fourmis dans les jambes','tener hormigueo en las piernas']
        ]
      },
      {
        id: 'difficulties-problems',
        title: 'Dificultades, problemas y situaciones',
        entries: [
          ['etre-dans-le-petrin','être dans le pétrin','estar en un buen lío'],
          ['etre-au-pied-du-mur','être au pied du mur','estar contra las cuerdas / estar ante una situación límite'],
          ['se-mettre-dans-de-beaux-draps','se mettre dans de beaux draps','meterse en un buen lío'],
          ['sortir-du-petrin','sortir du pétrin','salir del apuro'],
          ['tourner-en-rond','tourner en rond','dar vueltas sin avanzar'],
          ['faire-fausse-route','faire fausse route','equivocarse de camino / ir por mal camino'],
          ['mettre-la-charrue-avant-les-boeufs','mettre la charrue avant les bœufs','poner el carro delante de los bueyes'],
          ['jeter-de-l-huile-sur-le-feu','jeter de l’huile sur le feu','echar leña al fuego'],
          ['mettre-de-l-eau-dans-son-vin','mettre de l’eau dans son vin','moderar sus exigencias'],
          ['mettre-du-beurre-dans-les-epinards','mettre du beurre dans les épinards','mejorar la situación económica / conseguir un ingreso extra']
        ]
      },
      {
        id: 'communication-language',
        title: 'Comunicación, comprensión y secretos',
        entries: [
          ['donner-sa-langue-au-chat','donner sa langue au chat','darse por vencido / no saber la respuesta'],
          ['mettre-les-points-sur-les-i','mettre les points sur les i','dejar las cosas claras'],
          ['tourner-autour-du-pot','tourner autour du pot','andarse con rodeos'],
          ['parler-a-tort-et-a-travers','parler à tort et à travers','hablar sin ton ni son'],
          ['raconter-des-salades','raconter des salades','contar mentiras / inventar historias'],
          ['dire-ses-quatre-verites','dire ses quatre vérités à quelqu’un','decirle a alguien sus cuatro verdades'],
          ['tenir-sa-langue','tenir sa langue','mantener la boca cerrada'],
          ['avoir-la-langue-bien-pendue','avoir la langue bien pendue','tener mucha facilidad para hablar'],
          ['avoir-un-mot-sur-le-bout-de-la-langue','avoir un mot sur le bout de la langue','tener una palabra en la punta de la lengua'],
          ['passer-un-coup-de-fil','passer un coup de fil','hacer una llamada telefónica'],
          ['jeter-un-oeil','jeter un œil sur quelque chose','echar un vistazo a algo'],
          ['mettre-les-bouchees-doubles','mettre les bouchées doubles','redoblar los esfuerzos'],
          ['appeler-un-chat-un-chat','appeler un chat un chat','llamar a las cosas por su nombre'],
          ['chercher-midi-a-quatorze-heures','chercher midi à quatorze heures','buscarle tres pies al gato'],
          ['couper-les-cheveux-en-quatre','couper les cheveux en quatre','hilar demasiado fino']
        ]
      },
      {
        id: 'money-success-effort',
        title: 'Dinero, éxito, trabajo y esfuerzo',
        entries: [
          ['couter-les-yeux-de-la-tete','coûter les yeux de la tête','costar un ojo de la cara'],
          ['couter-un-bras','coûter un bras','costar un dineral'],
          ['jeter-l-argent-par-les-fenetres','jeter l’argent par les fenêtres','tirar el dinero'],
          ['vivre-au-dessus-de-ses-moyens','vivre au-dessus de ses moyens','vivir por encima de sus posibilidades'],
          ['mettre-la-main-a-la-pate','mettre la main à la pâte','poner manos a la obra'],
          ['faire-quelque-chose-les-doigts-dans-le-nez','faire quelque chose les doigts dans le nez','hacer algo con los ojos cerrados / muy fácilmente'],
          ['se-couper-en-quatre','se couper en quatre','desvivirse por alguien / hacer todo lo posible'],
          ['retrousser-ses-manches','retrousser ses manches','ponerse manos a la obra'],
          ['travailler-d-arrache-pied','travailler d’arrache-pied','trabajar duramente'],
          ['faire-des-pieds-et-des-mains','faire des pieds et des mains','hacer todo lo posible'],
          ['avoir-du-pain-sur-la-planche','avoir du pain sur la planche','tener mucho trabajo'],
          ['faire-d-une-pierre-deux-coups','faire d’une pierre deux coups','matar dos pájaros de un tiro'],
          ['avoir-plusieurs-cordes-a-son-arc','avoir plusieurs cordes à son arc','tener varios recursos'],
          ['tirer-son-epingle-du-jeu','tirer son épingle du jeu','salir airoso de una situación'],
          ['prendre-le-taureau-par-les-cornes','prendre le taureau par les cornes','coger el toro por los cuernos'],
          ['jeter-l-eponge','jeter l’éponge','tirar la toalla'],
          ['baisser-les-bras','baisser les bras','darse por vencido'],
          ['tenir-le-coup','tenir le coup','aguantar'],
          ['ne-pas-etre-sorti-de-l-auberge','ne pas être sorti de l’auberge','no haber salido todavía del problema']
        ]
      }
    ].map((subcategory) => ({
      ...subcategory,
      entries: subcategory.entries.map(([id, word, translation]) => ({
        id: 'idiom-' + id,
        word,
        translation
      }))
    }))
  };

  if (window.COQ_VOCABULARY_DATABASE_API) {
    window.COQ_VOCABULARY_DATABASE_API.registerCategory(category);
  }
})();