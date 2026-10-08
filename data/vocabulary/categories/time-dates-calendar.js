/* COQ — Tiempo, fechas y calendario */
(function () {
  'use strict';

  const category = {
    id: 'time-dates-calendar',
    title: 'Tiempo, fechas y calendario',
    subcategories: [
      {
        id: 'time-units',
        title: 'Unidades de tiempo',
        entries: [
          ['second','seconde','segundo','une','un'],
          ['minute','minute','minuto','une','un'],
          ['hour','heure','hora','une','una'],
          ['quarter-hour','quart d’heure','cuarto de hora','un','un'],
          ['half-hour','demi-heure','media hora','une','una'],
          ['day-duration','journée','día','une','un'],
          ['day-calendar','jour','día','un','un'],
          ['night','nuit','noche','une','una'],
          ['week','semaine','semana','une','una'],
          ['weekend','week-end','fin de semana','un','un'],
          ['fortnight','quinzaine','quincena','une','una'],
          ['month','mois','mes','un','un'],
          ['quarter','trimestre','trimestre','un','un'],
          ['semester','semestre','semestre','un','un'],
          ['year','année','año','une','un'],
          ['decade','décennie','década','une','una'],
          ['century','siècle','siglo','un','un'],
          ['millennium','millénaire','milenio','un','un'],
          ['period','période','período','une','un'],
          ['duration','durée','duración','une','una'],
          ['instant','instant','instante','un','un'],
          ['moment','moment','momento','un','un'],
          ['eternity','éternité','eternidad','une','una']
        ]
      },
      {
        id: 'weekdays',
        title: 'Días de la semana',
        entries: [
          ['monday','lundi','lunes'],
          ['tuesday','mardi','martes'],
          ['wednesday','mercredi','miércoles'],
          ['thursday','jeudi','jueves'],
          ['friday','vendredi','viernes'],
          ['saturday','samedi','sábado'],
          ['sunday','dimanche','domingo'],
          ['working-day','jour ouvrable','día laborable','un','un'],
          ['public-holiday','jour férié','día festivo','un','un'],
          ['weekday','jour de semaine','día de semana','un','un'],
          ['rest-day','jour de repos','día de descanso','un','un'],
          ['day-off','jour de congé','día libre','un','un'],
          ['next-day','lendemain','día siguiente','le','el'],
          ['day-before','veille','día anterior / víspera','la','el'],
          ['today','aujourd’hui','hoy'],
          ['tomorrow','demain','mañana'],
          ['day-after-tomorrow','après-demain','pasado mañana'],
          ['yesterday','hier','ayer'],
          ['day-before-yesterday','avant-hier','anteayer']
        ]
      },
      {
        id: 'months',
        title: 'Meses del año',
        entries: [
          ['january','janvier','enero'],
          ['february','février','febrero'],
          ['march','mars','marzo'],
          ['april','avril','abril'],
          ['may','mai','mayo'],
          ['june','juin','junio'],
          ['july','juillet','julio'],
          ['august','août','agosto'],
          ['september','septembre','septiembre'],
          ['october','octobre','octubre'],
          ['november','novembre','noviembre'],
          ['december','décembre','diciembre'],
          ['beginning-of-month','début du mois','principio del mes','le','el'],
          ['middle-of-month','milieu du mois','mitad del mes','le','la'],
          ['end-of-month','fin du mois','final del mes','la','el'],
          ['last-month','mois dernier','mes pasado','le','el'],
          ['this-month','mois-ci','este mes','ce','este'],
          ['next-month','mois prochain','mes próximo','le','el'],
          ['following-month','mois suivant','mes siguiente','le','el'],
          ['previous-month','mois précédent','mes anterior','le','el']
        ]
      },
      {
        id: 'clock-hours',
        title: 'Horas y reloj',
        entries: [
          ['clock','horloge','reloj','une','un'],
          ['watch','montre','reloj','une','un'],
          ['exact-hour','heure exacte','hora exacta','une','una'],
          ['precise-hour','heure précise','hora precisa','une','una'],
          ['morning-hour','heure du matin','hora de la mañana','une','una'],
          ['afternoon-hour','heure de l’après-midi','hora de la tarde','une','una'],
          ['evening-hour','heure du soir','hora de la noche','une','una'],
          ['noon','midi','mediodía'],
          ['midnight','minuit','medianoche'],
          ['quarter-past','heure et quart','y cuarto','une','una'],
          ['half-past','heure et demie','hora y media','une','una'],
          ['quarter-to','heure moins le quart','menos cuarto','une','una'],
          ['on-the-hour','heure pleine','hora en punto','une','una'],
          ['quiet-hour','heure creuse','hora de poca actividad','une','una'],
          ['rush-hour','heure de pointe','hora punta','une','una'],
          ['schedule','horaire','horario','un','un'],
          ['time-slot','créneau horaire','franja horaria','un','una'],
          ['time-zone','fuseau horaire','huso horario','un','un'],
          ['time-difference','décalage horaire','diferencia horaria','un','una'],
          ['local-time','heure locale','hora local','l’','la'],
          ['summer-time','heure d’été','horario de verano','l’','el'],
          ['winter-time','heure d’hiver','horario de invierno','l’','el']
        ]
      },
      {
        id: 'dates-calendar',
        title: 'Fechas y calendario',
        entries: [
          ['date','date','fecha','une','una'],
          ['calendar','calendrier','calendario','un','un'],
          ['calendar-year','année civile','año natural','une','un'],
          ['leap-year','année bissextile','año bisiesto','une','un'],
          ['calendar-week','semaine du calendrier','semana del calendario','une','una'],
          ['beginning-of-year','début de l’année','principio del año','le','el'],
          ['middle-of-year','milieu de l’année','mitad del año','le','la'],
          ['end-of-year','fin de l’année','final del año','la','el'],
          ['start-date','date de début','fecha de inicio','une','una'],
          ['end-date','date de fin','fecha de finalización','une','una'],
          ['deadline-date','date limite','fecha límite','une','una'],
          ['due-date','échéance','vencimiento / fecha límite','une','un'],
          ['birthday','anniversaire','cumpleaños','un','un'],
          ['anniversary-date','date d’anniversaire','fecha de aniversario','une','una'],
          ['birth-date','date de naissance','fecha de nacimiento','une','una'],
          ['celebration','fête','festividad','une','una'],
          ['national-holiday','fête nationale','fiesta nacional','une','una']
        ]
      },
      {
        id: 'moments-periods',
        title: 'Momentos y períodos',
        entries: [
          ['era','époque','época','une','una'],
          ['age-era','ère','era','une','una'],
          ['beginning','début','comienzo','un','un'],
          ['commencement','commencement','comienzo','un','un'],
          ['middle','milieu','mitad','un','una'],
          ['end','fin','final','une','un'],
          ['beginning-of-day','début de journée','comienzo del día','un','un'],
          ['end-of-day','fin de journée','final del día','une','un'],
          ['beginning-of-week','début de semaine','comienzo de semana','un','un'],
          ['end-of-week','fin de semaine','final de semana','un','un'],
          ['present','présent','presente','le','el'],
          ['past','passé','pasado','le','el'],
          ['future','futur','futuro','le','el'],
          ['present-moment','moment présent','momento presente','le','el']
        ]
      },
      {
        id: 'frequency',
        title: 'Frecuencia',
        entries: [
          ['once','fois','vez','une','una'],
          ['twice','deux fois','dos veces'],
          ['several-times','plusieurs fois','varias veces'],
          ['first-time','première fois','primera vez','la','la'],
          ['last-time','dernière fois','última vez','la','la'],
          ['once-a-day','fois par jour','vez al día','une','una'],
          ['once-a-week','fois par semaine','vez por semana','une','una'],
          ['once-a-month','fois par mois','vez al mes','une','una'],
          ['once-a-year','fois par an','vez al año','une','una'],
          ['every-day','chaque jour','cada día'],
          ['every-week','chaque semaine','cada semana'],
          ['every-month','chaque mois','cada mes'],
          ['every-year','chaque année','cada año'],
          ['every-day-plural','tous les jours','todos los días'],
          ['every-week-plural','toutes les semaines','todas las semanas'],
          ['every-month-plural','tous les mois','todos los meses'],
          ['every-year-plural','tous les ans','todos los años'],
          ['from-time-to-time','de temps en temps','de vez en cuando'],
          ['sometimes','parfois','a veces'],
          ['often','souvent','a menudo'],
          ['rarely','rarement','raramente'],
          ['always','toujours','siempre'],
          ['never','jamais','nunca'],
          ['usually','habituellement','habitualmente']
        ]
      },
      {
        id: 'duration-continuity',
        title: 'Duración y continuidad',
        entries: [
          ['delay-period','délai','plazo','un','un'],
          ['delay-lateness','retard','retraso','un','un'],
          ['advance','avance','adelanto','une','un'],
          ['break','pause','pausa','une','una'],
          ['interruption','interruption','interrupción','une','una'],
          ['continuation','continuation','continuación','une','una'],
          ['limited-duration','durée limitée','duración limitada','une','una'],
          ['indefinite-duration','durée indéterminée','duración indefinida','une','una'],
          ['short-moment','court moment','breve momento','un','un'],
          ['long-moment','long moment','largo rato','un','un'],
          ['few-minutes','quelques minutes','unos minutos'],
          ['few-hours','quelques heures','unas horas'],
          ['few-days','quelques jours','unos días'],
          ['several-weeks','plusieurs semaines','varias semanas'],
          ['several-months','plusieurs mois','varios meses']
        ]
      },
      {
        id: 'temporal-relations',
        title: 'Relaciones temporales',
        entries: [
          ['now','maintenant','ahora'],
          ['currently','actuellement','actualmente'],
          ['soon','bientôt','pronto'],
          ['later','plus tard','más tarde'],
          ['earlier','plus tôt','más temprano'],
          ['previously','auparavant','anteriormente'],
          ['before','avant','antes / antes de'],
          ['after','après','después / después de'],
          ['then-after','ensuite','después / luego'],
          ['then','puis','luego'],
          ['since','depuis','desde / desde hace'],
          ['during','pendant','durante'],
          ['during-formal','durant','durante'],
          ['until','jusqu’à','hasta'],
          ['from','dès','desde / a partir de'],
          ['formerly','autrefois','antiguamente / en otro tiempo'],
          ['recently','récemment','recientemente'],
          ['lately','dernièrement','últimamente'],
          ['soon-formal','prochainement','próximamente'],
          ['immediately','immédiatement','inmediatamente'],
          ['finally','finalement','finalmente']
        ]
      },
      {
        id: 'temporal-order',
        title: 'Orden y relación temporal',
        entries: [
          ['first','premier','primero','le','el'],
          ['second-ordinal','deuxième','segundo','le','el'],
          ['third-ordinal','troisième','tercero','le','el'],
          ['last-ordinal','dernier','último','le','el'],
          ['following','suivant','siguiente','le','el'],
          ['previous','précédent','anterior','le','el'],
          ['next','prochain','próximo','le','el'],
          ['last-day','dernier jour','último día','le','el'],
          ['first-day','premier jour','primer día','le','el'],
          ['following-time','fois suivante','vez siguiente','la','la'],
          ['previous-time','fois précédente','vez anterior','la','la'],
          ['same-day','jour même','mismo día','le','el'],
          ['following-week','semaine suivante','semana siguiente','la','la'],
          ['previous-week','semaine précédente','semana anterior','la','la'],
          ['following-year','année suivante','año siguiente','l’','el'],
          ['previous-year','année précédente','año anterior','l’','el']
        ]
      }
    ].map((subcategory) => ({
      ...subcategory,
      entries: subcategory.entries.map(([id, word, translation, articleFr, articleEs]) => ({
        id: 'time-calendar-' + id,
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