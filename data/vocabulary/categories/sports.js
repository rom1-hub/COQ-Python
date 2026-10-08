/* COQ — Deportes */
(function () {
  'use strict';

  const category = {
    id: 'sports',
    title: 'Deportes',
    subcategories: [
      {
        id: 'sports-disciplines',
        title: 'Deportes y disciplinas',
        entries: [
          ['football','football','fútbol','un','el'],
          ['basket-ball','basket-ball','baloncesto','un','el'],
          ['tennis','tennis','tenis','un','el'],
          ['tennis-de-table','tennis de table','tenis de mesa','un','el'],
          ['padel','padel','pádel','un','el'],
          ['volley-ball','volley-ball','voleibol','un','el'],
          ['rugby','rugby','rugby','un','el'],
          ['handball','handball','balonmano','un','el'],
          ['badminton','badminton','bádminton','un','el'],
          ['hockey','hockey','hockey','un','el'],
          ['golf','golf','golf','un','el'],
          ['natation','natation','natación','une','la'],
          ['athletisme','athlétisme','atletismo','un','el'],
          ['gymnastique','gymnastique','gimnasia','une','la'],
          ['cyclisme','cyclisme','ciclismo','un','el'],
          ['escalade','escalade','escalada','une','la'],
          ['equitation','équitation','equitación','une','la'],
          ['boxe','boxe','boxeo','une','el'],
          ['judo','judo','judo','un','el'],
          ['karate','karaté','karate','un','el'],
          ['voile','voile','vela','une','la'],
          ['aviron','aviron','remo','un','el'],
          ['surf','surf','surf','un','el']
        ]
      },
      {
        id: 'sports-winter',
        title: 'Deportes de invierno',
        entries: [
          ['ski-alpin','ski alpin','esquí alpino','un','el'],
          ['ski-de-fond','ski de fond','esquí de fondo','un','el'],
          ['ski-freestyle','ski freestyle','esquí acrobático','un','el'],
          ['snowboard','snowboard','snowboard','un','el'],
          ['biathlon','biathlon','biatlón','un','el'],
          ['saut-a-ski','saut à ski','salto de esquí','un','el'],
          ['combine-nordique','combiné nordique','combinada nórdica','un','la'],
          ['ski-de-vitesse','ski de vitesse','esquí de velocidad','un','el'],
          ['ski-de-randonnee','ski de randonnée','esquí de travesía','un','el'],
          ['patinage-artistique','patinage artistique','patinaje artístico','un','el'],
          ['patinage-de-vitesse','patinage de vitesse','patinaje de velocidad','un','el'],
          ['hockey-sur-glace','hockey sur glace','hockey sobre hielo','un','el'],
          ['curling','curling','curling','un','el'],
          ['luge','luge','luge','une','el'],
          ['bobsleigh','bobsleigh','bobsleigh','un','el'],
          ['skeleton','skeleton','skeleton','un','el']
        ]
      },
      {
        id: 'sports-people',
        title: 'Personas y participantes',
        entries: [
          ['sportif','sportif','deportista','un','el'],
          ['sportive','sportive','deportista','une','la'],
          ['joueur','joueur','jugador','un','el'],
          ['joueuse','joueuse','jugadora','une','la'],
          ['athlete-m','athlète','atleta','un','el'],
          ['athlete-f','athlète','atleta','une','la'],
          ['entraineur','entraîneur','entrenador','un','el'],
          ['entraineuse','entraîneuse','entrenadora','une','la'],
          ['arbitre-m','arbitre','árbitro','un','el'],
          ['arbitre-f','arbitre','árbitra','une','la'],
          ['capitaine-m','capitaine','capitán','un','el'],
          ['capitaine-f','capitaine','capitana','une','la'],
          ['champion','champion','campeón','un','el'],
          ['championne','championne','campeona','une','la'],
          ['debutant','débutant','principiante','un','el'],
          ['debutante','débutante','principiante','une','la'],
          ['professionnel','professionnel','profesional','un','el'],
          ['professionnelle','professionnelle','profesional','une','la'],
          ['supporter','supporter','aficionado','un','el'],
          ['supportrice','supportrice','aficionada','une','la']
        ]
      },
      {
        id: 'sports-competition',
        title: 'Competición y partidos',
        entries: [
          ['match','match','partido','un','el'],
          ['competition','compétition','competición','une','la'],
          ['championnat','championnat','campeonato','un','el'],
          ['tournoi','tournoi','torneo','un','el'],
          ['course','course','carrera','une','la'],
          ['epreuve','épreuve','prueba','une','la'],
          ['finale','finale','final','une','la'],
          ['demi-finale','demi-finale','semifinal','une','la'],
          ['quart-de-finale','quart de finale','cuartos de final','un','los'],
          ['victoire','victoire','victoria','une','la'],
          ['defaite','défaite','derrota','une','la'],
          ['classement','classement','clasificación','un','el'],
          ['score','score','marcador','un','el'],
          ['resultat','résultat','resultado','un','el'],
          ['record','record','récord','un','el'],
          ['medaille','médaille','medalla','une','la'],
          ['coupe','coupe','copa','une','la'],
          ['trophee','trophée','trofeo','un','el']
        ]
      },
      {
        id: 'sports-equipment',
        title: 'Equipamiento y material deportivo',
        entries: [
          ['ballon','ballon','balón','un','el'],
          ['raquette','raquette','raqueta','une','la'],
          ['filet','filet','red','un','la'],
          ['casque','casque','casco','un','el'],
          ['chaussures-de-sport','chaussures de sport','zapatillas deportivas','des','las'],
          ['maillot','maillot','camiseta deportiva','un','la'],
          ['short','short','pantalón corto deportivo','un','el'],
          ['gants','gants','guantes','des','los'],
          ['lunettes-de-natation','lunettes de natation','gafas de natación','des','las'],
          ['baton','bâton','bastón','un','el'],
          ['crosse','crosse','stick','une','el'],
          ['tapis','tapis','colchoneta','un','la'],
          ['halteres','haltères','pesas','des','las'],
          ['corde-a-sauter','corde à sauter','cuerda para saltar','une','la']
        ]
      },
      {
        id: 'sports-facilities',
        title: 'Lugares e instalaciones deportivas',
        entries: [
          ['stade','stade','estadio','un','el'],
          ['terrain','terrain','campo / cancha','un','el'],
          ['court','court','pista','un','la'],
          ['piscine','piscine','piscina','une','la'],
          ['salle-de-sport','salle de sport','gimnasio','une','el'],
          ['piste','piste','pista','une','la'],
          ['gymnase','gymnase','polideportivo','un','el'],
          ['patinoire','patinoire','pista de hielo','une','la'],
          ['vestiaire','vestiaire','vestuario','un','el'],
          ['tribunes','tribunes','gradas','les','las']
        ]
      },
      {
        id: 'sports-actions',
        title: 'Acciones deportivas',
        entries: [
          ['entrainer','s’entraîner','entrenarse'],
          ['participer','participer','participar'],
          ['gagner','gagner','ganar'],
          ['perdre','perdre','perder'],
          ['battre','battre','vencer / derrotar'],
          ['marquer','marquer','marcar'],
          ['tirer','tirer','tirar / disparar'],
          ['lancer','lancer','lanzar'],
          ['sauter','sauter','saltar'],
          ['nager','nager','nadar'],
          ['pedaler','pédaler','pedalear'],
          ['grimper','grimper','escalar / subir'],
          ['dribbler','dribbler','regatear'],
          ['passer','passer','pasar'],
          ['defendre','défendre','defender'],
          ['attaquer','attaquer','atacar'],
          ['arbitrer','arbitrer','arbitrar'],
          ['encourager','encourager','animar'],
          ['disputer','disputer','disputar'],
          ['se-qualifier','se qualifier','clasificarse']
        ]
      },
      {
        id: 'sports-rules-performance',
        title: 'Reglas, puntuación y rendimiento',
        entries: [
          ['regle','règle','regla','une','la'],
          ['faute','faute','falta','une','la'],
          ['point','point','punto','un','el'],
          ['but','but','gol','un','el'],
          ['penalty','penalty','penalti','un','el'],
          ['carton-jaune','carton jaune','tarjeta amarilla','un','la'],
          ['carton-rouge','carton rouge','tarjeta roja','un','la'],
          ['temps-reglementaire','temps réglementaire','tiempo reglamentario','un','el'],
          ['prolongation','prolongation','prórroga','une','la'],
          ['tirs-au-but','tirs au but','penaltis','des','los'],
          ['entrainement','entraînement','entrenamiento','un','el'],
          ['performance','performance','rendimiento','une','el'],
          ['niveau','niveau','nivel','un','el'],
          ['forme','forme','forma física','une','la'],
          ['endurance','endurance','resistencia','une','la'],
          ['force','force','fuerza','une','la']
        ]
      }
    ].map((subcategory) => ({
      ...subcategory,
      entries: subcategory.entries.map(([id, word, translation, articleFr, articleEs]) => ({
        id: 'sports-' + id,
        word,
        translation,
        ...(articleFr ? {articleFr} : {}),
        ...(articleEs ? {articleEs} : {})
      }))
    }))
  };

  if (window.COQ_VOCABULARY_DATABASE_API) {
    window.COQ_VOCABULARY_DATABASE_API.registerCategory(category);
  }
})();