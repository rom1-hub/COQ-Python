/* COQ — Vida cotidiana y rutinas */
(function () {
  'use strict';

  const category = {
    id: 'daily-life-routines',
    title: 'Vida cotidiana y rutinas',
    subcategories: [
      {
        id: 'daily-routine',
        title: 'Rutina diaria',
        entries: [
          ['se-réveiller','se réveiller','despertarse'],
          ['se-lever','se lever','levantarse'],
          ['se-coucher','se coucher','acostarse'],
          ['dormir','dormir','dormir'],
          ['se-rendormir','se rendormir','volver a dormirse'],
          ['se-préparer','se préparer','prepararse'],
          ['shabiller','s’habiller','vestirse'],
          ['se-déshabiller','se déshabiller','desvestirse'],
          ['se-laver','se laver','lavarse'],
          ['se-brosser-les-dents','se brosser les dents','cepillarse los dientes'],
          ['se-coiffer','se coiffer','peinarse'],
          ['se-raser','se raser','afeitarse'],
          ['se-maquiller','se maquiller','maquillarse'],
          ['se-parfumer','se parfumer','perfumarse'],
          ['se-sécher','se sécher','secarse'],
          ['se-dépêcher','se dépêcher','darse prisa'],
          ['prendre-son-temps','prendre son temps','tomarse su tiempo'],
          ['commencer','commencer','empezar'],
          ['finir','finir','terminar'],
          ['continuer','continuer','continuar'],
          ['arrêter','arrêter','parar / dejar de'],
          ['rentrer','rentrer','volver / regresar'],
          ['sortir','sortir','salir'],
          ['rester','rester','quedarse'],
          ['partir','partir','irse / partir'],
          ['arriver','arriver','llegar'],
          ['attendre','attendre','esperar']
        ]
      },
      {
        id: 'daily-household-tasks',
        title: 'Tareas domésticas cotidianas',
        entries: [
          ['faire-le-ménage','faire le ménage','limpiar la casa'],
          ['faire-la-vaisselle','faire la vaisselle','lavar los platos'],
          ['faire-la-lessive','faire la lessive','hacer la colada'],
          ['repasser','repasser','planchar'],
          ['ranger','ranger','ordenar'],
          ['nettoyer','nettoyer','limpiar'],
          ['balayer','balayer','barrer'],
          ['passer-laspirateur','passer l’aspirateur','pasar la aspiradora'],
          ['vider','vider','vaciar'],
          ['remplir','remplir','llenar'],
          ['jeter','jeter','tirar'],
          ['trier','trier','clasificar'],
          ['plier','plier','doblar'],
          ['étendre-le-linge','étendre le linge','tender la ropa'],
          ['arroser','arroser','regar'],
          ['nourrir','nourrir','alimentar'],
          ['faire-les-courses','faire les courses','hacer las compras'],
          ['préparer-le-repas','préparer le repas','preparar la comida'],
          ['mettre-la-table','mettre la table','poner la mesa'],
          ['débarrasser-la-table','débarrasser la table','quitar la mesa']
        ]
      },
      {
        id: 'daily-organization',
        title: 'Organización y gestión cotidiana',
        entries: [
          ['sorganiser','s’organiser','organizarse'],
          ['organiser','organiser','organizar'],
          ['planifier','planifier','planificar'],
          ['prévoir','prévoir','prever / planear'],
          ['décider','décider','decidir'],
          ['choisir','choisir','elegir'],
          ['oublier','oublier','olvidar'],
          ['se-souvenir','se souvenir','acordarse / recordar'],
          ['se-rappeler','se rappeler','recordar'],
          ['vérifier','vérifier','comprobar'],
          ['chercher','chercher','buscar'],
          ['trouver','trouver','encontrar'],
          ['perdre','perdre','perder'],
          ['retrouver','retrouver','volver a encontrar'],
          ['préparer','préparer','preparar'],
          ['utiliser','utiliser','utilizar'],
          ['avoir-besoin-de','avoir besoin de','necesitar']
        ]
      },
      {
        id: 'daily-movement-time',
        title: 'Desplazamientos y momentos del día',
        entries: [
          ['se-déplacer','se déplacer','desplazarse'],
          ['marcher','marcher','caminar'],
          ['traverser','traverser','cruzar'],
          ['tourner','tourner','girar'],
          ['monter','monter','subir'],
          ['descendre','descendre','bajar'],
          ['avancer','avancer','avanzar'],
          ['reculer','reculer','retroceder'],
          ['suivre','suivre','seguir'],
          ['accompagner','accompagner','acompañar'],
          ['rejoindre','rejoindre','reunirse con / alcanzar'],
          ['rencontrer','rencontrer','encontrarse con'],
          ['passer','passer','pasar'],
          ['être-en-retard','être en retard','llegar tarde / estar retrasado'],
          ['le-matin','le matin','la mañana'],
          ['le-midi','le midi','el mediodía'],
          ['laprès-midi','l’après-midi','la tarde'],
          ['le-soir','le soir','la tarde-noche / la noche'],
          ['la-nuit','la nuit','la noche'],
          ['tôt','tôt','temprano'],
          ['tard','tard','tarde']
        ]
      }
    ].map((subcategory) => ({
      ...subcategory,
      entries: subcategory.entries.map(([id, word, translation]) => ({
        id: 'daily-life-' + id,
        word,
        translation
      }))
    }))
  };

  if (window.COQ_VOCABULARY_DATABASE_API) {
    window.COQ_VOCABULARY_DATABASE_API.registerCategory(category);
  }
})();