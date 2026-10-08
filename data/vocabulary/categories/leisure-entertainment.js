/* COQ — Ocio y entretenimiento */
(function () {
  'use strict';

  const category = {
    id: 'leisure-entertainment',
    title: 'Ocio y entretenimiento',
    subcategories: [
      {
        id: 'leisure-activities',
        title: 'Actividades de ocio',
        entries: [
          ['se-divertir','se divertir','divertirse'],
          ['samuser','s’amuser','divertirse'],
          ['se-détendre','se détendre','relajarse'],
          ['se-reposer','se reposer','descansar'],
          ['sortir','sortir','salir'],
          ['se-promener','se promener','pasear'],
          ['faire-une-promenade','faire une promenade','dar un paseo'],
          ['passer-du-temps','passer du temps','pasar tiempo'],
          ['passer-le-temps','passer le temps','pasar el tiempo'],
          ['jouer','jouer','jugar'],
          ['écouter-de-la-musique','écouter de la musique','escuchar música'],
          ['regarder-un-film','regarder un film','ver una película'],
          ['regarder-la-télévision','regarder la télévision','ver la televisión'],
          ['aller-au-cinéma','aller au cinéma','ir al cine'],
          ['aller-au-théâtre','aller au théâtre','ir al teatro'],
          ['aller-au-concert','aller au concert','ir al concierto'],
          ['danser','danser','bailar'],
          ['chanter','chanter','cantar'],
          ['faire-la-fête','faire la fête','salir de fiesta / festejar']
        ]
      },
      {
        id: 'cinema-television',
        title: 'Cine y televisión',
        entries: [
          ['film','un film','una película','un','una'],
          ['série','une série','una serie','une','una'],
          ['épisode','un épisode','un episodio','un','un'],
          ['documentaire','un documentaire','un documental','un','un'],
          ['dessin-animé','un dessin animé','una película de animación / dibujo animado','un','una'],
          ['comédie','une comédie','una comedia','une','una'],
          ['drame','un drame','un drama','un','un'],
          ['film-action','un film d’action','una película de acción','un','una'],
          ['film-horreur','un film d’horreur','una película de terror','un','una'],
          ['acteur','un acteur','un actor','un','un'],
          ['actrice','une actrice','una actriz','une','una'],
          ['réalisateur','un réalisateur','un director','un','un'],
          ['réalisatrice','une réalisatrice','una directora','une','una'],
          ['personnage','un personnage','un personaje','un','un'],
          ['scène','une scène','una escena','une','una'],
          ['scénario','un scénario','un guion','un','un'],
          ['écran','un écran','una pantalla','un','una'],
          ['émission','une émission','un programa','une','un'],
          ['chaîne','une chaîne','un canal','une','un']
        ]
      },
      {
        id: 'music',
        title: 'Música',
        entries: [
          ['musique','la musique','música','la','la'],
          ['chanson','une chanson','canción','une','una'],
          ['chanteur','un chanteur','cantante','un','un'],
          ['chanteuse','une chanteuse','cantante','une','una'],
          ['groupe','un groupe','grupo','un','un'],
          ['musicien','un musicien','músico','un','un'],
          ['musicienne','une musicienne','música','une','una'],
          ['instrument','un instrument','instrumento','un','un'],
          ['guitare','une guitare','guitarra','une','una'],
          ['piano','un piano','piano','un','un'],
          ['batterie','une batterie','batería','une','una'],
          ['violon','un violon','violín','un','un'],
          ['mélodie','une mélodie','melodía','une','una'],
          ['rythme','un rythme','ritmo','un','un'],
          ['album','un album','álbum','un','un'],
          ['concert-music','un concert','concierto','un','un'],
          ['festival-music','un festival','festival','un','un'],
          ['playlist','une playlist','lista de reproducción','une','una'],
          ['jouer-de-la-musique','jouer de la musique','tocar música']
        ]
      },
      {
        id: 'reading-literature',
        title: 'Lectura y literatura',
        entries: [
          ['livre','un livre','un libro','un','un'],
          ['roman','un roman','una novela','un','una'],
          ['histoire','une histoire','una historia','une','una'],
          ['conte','un conte','un cuento','un','un'],
          ['bande-dessinée','une bande dessinée','un cómic','une','un'],
          ['magazine','un magazine','una revista','un','una'],
          ['journal','un journal','un periódico','un','un'],
          ['auteur','un auteur','un autor','un','un'],
          ['auteure','une auteure','una autora','une','una'],
          ['écrivain','un écrivain','un escritor','un','un'],
          ['écrivaine','une écrivaine','una escritora','une','una'],
          ['lecteur','un lecteur','un lector','un','un'],
          ['lectrice','une lectrice','una lectora','une','una'],
          ['page','une page','una página','une','una'],
          ['chapitre','un chapitre','un capítulo','un','un'],
          ['bibliothèque','une bibliothèque','una biblioteca','une','una'],
          ['lire','lire','leer'],
          ['relire','relire','volver a leer'],
          ['feuilleter','feuilleter','hojear']
        ]
      },
      {
        id: 'games-entertainment',
        title: 'Juegos y entretenimiento',
        entries: [
          ['jeu','un jeu','un juego','un','un'],
          ['jeu-vidéo','un jeu vidéo','un videojuego','un','un'],
          ['console','une console','una consola','une','una'],
          ['jouer-aux-jeux-vidéo','jouer aux jeux vidéo','jugar a videojuegos'],
          ['joueur','un joueur','un jugador','un','un'],
          ['joueuse','une joueuse','una jugadora','une','una'],
          ['partie','une partie','una partida','une','una'],
          ['gagner','gagner','ganar'],
          ['perdre','perdre','perder'],
          ['jouet','un jouet','un juguete','un','un'],
          ['poupée','une poupée','una muñeca','une','una'],
          ['puzzle','un puzzle','un rompecabezas','un','un'],
          ['jeu-de-société','un jeu de société','un juego de mesa','un','un'],
          ['carte-à-jouer','une carte à jouer','una carta de juego','une','una'],
          ['cartes','les cartes','las cartas','les','las'],
          ['échecs','les échecs','el ajedrez','les','el'],
          ['jouer-aux-échecs','jouer aux échecs','jugar al ajedrez'],
          ['dé','un dé','un dado','un','un'],
          ['lancer-les-dés','lancer les dés','tirar los dados']
        ]
      },
      {
        id: 'outings-shows',
        title: 'Salidas y espectáculos',
        entries: [
          ['sortie','une sortie','una salida','une','una'],
          ['spectacle','un spectacle','un espectáculo','un','un'],
          ['représentation','une représentation','una función / representación','une','una'],
          ['théâtre','un théâtre','un teatro','un','un'],
          ['cinéma','un cinéma','un cine','un','un'],
          ['salle-de-spectacle','une salle de spectacle','una sala de espectáculos','une','una'],
          ['concert-outings','un concert','un concierto','un','un'],
          ['festival-outings','un festival','un festival','un','un'],
          ['exposition','une exposition','una exposición','une','una'],
          ['galerie','une galerie','una galería','une','una'],
          ['musée','un musée','un museo','un','un'],
          ['fête','une fête','una fiesta','une','una'],
          ['soirée','une soirée','una velada / noche','une','una'],
          ['événement','un événement','un evento','un','un'],
          ['billet','un billet','una entrada / billete','un','una'],
          ['entrée','une entrée','una entrada','une','una'],
          ['réserver','réserver','reservar'],
          ['assister-à','assister à','asistir a'],
          ['participer-à','participer à','participar en']
        ]
      }
    ].map((subcategory) => ({
      ...subcategory,
      entries: subcategory.entries.map(([id, word, translation, articleFr, articleEs]) => ({
        id: 'leisure-' + id,
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