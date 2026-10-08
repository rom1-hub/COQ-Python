/* COQ — Adverbios más usados */
(function () {
  'use strict';

  const category = {
    id: 'common-adverbs',
    title: 'Adverbios más usados',
    subcategories: [
      {
        id: 'adverbs-place',
        title: 'Lugar',
        entries: [
          ['ici','ici','aquí'],['là','là','ahí / allí'],['la-bas','là-bas','allí / allá'],
          ['ailleurs','ailleurs','en otro lugar'],['partout','partout','en todas partes'],
          ['nulle-part','nulle part','en ninguna parte'],['quelque-part','quelque part','en algún lugar'],
          ['dedans','dedans','dentro / adentro'],['dehors','dehors','fuera / afuera'],
          ['dessus','dessus','encima'],['dessous','dessous','debajo'],['devant','devant','delante'],
          ['derriere','derrière','detrás'],['pres','près','cerca'],['loin','loin','lejos'],
          ['autour','autour','alrededor']
        ]
      },
      {
        id: 'adverbs-time',
        title: 'Tiempo',
        entries: [
          ['maintenant','maintenant','ahora'],['aujourd-hui','aujourd’hui','hoy'],['demain','demain','mañana'],
          ['hier','hier','ayer'],['bientot','bientôt','pronto'],['tard','tard','tarde'],['tot','tôt','temprano'],
          ['deja','déjà','ya'],['encore','encore','todavía / aún'],['desormais','désormais','de ahora en adelante'],
          ['dorenavant','dorénavant','en adelante'],['auparavant','auparavant','anteriormente'],
          ['ensuite','ensuite','después / luego'],['enfin','enfin','finalmente / por fin'],
          ['aussitot','aussitôt','inmediatamente'],['immediatement','immédiatement','inmediatamente'],
          ['recemment','récemment','recientemente']
        ]
      },
      {
        id: 'adverbs-frequency',
        title: 'Frecuencia',
        entries: [
          ['toujours','toujours','siempre'],['souvent','souvent','a menudo'],['parfois','parfois','a veces'],
          ['quelquefois','quelquefois','algunas veces'],['rarement','rarement','raramente'],
          ['habituellement','habituellement','habitualmente'],['generalement','généralement','generalmente'],
          ['normalement','normalement','normalmente'],['quotidiennement','quotidiennement','diariamente'],
          ['regulierement','régulièrement','regularmente'],['occasionnellement','occasionnellement','ocasionalmente'],
          ['jamais','jamais','nunca'],['constamment','constamment','constantemente'],
          ['frequemment','fréquemment','frecuentemente'],['parfois-de-temps-en-temps','de temps en temps','de vez en cuando']
        ]
      },
      {
        id: 'adverbs-quantity-intensity',
        title: 'Cantidad e intensidad',
        entries: [
          ['tres','très','muy'],['trop','trop','demasiado'],['assez','assez','bastante'],
          ['beaucoup','beaucoup','mucho'],['peu','peu','poco'],['plus','plus','más'],['moins','moins','menos'],
          ['davantage','davantage','más'],['tellement','tellement','tanto / tan'],['autant','autant','tanto'],
          ['presque','presque','casi'],['environ','environ','aproximadamente'],['a-peine','à peine','apenas'],
          ['completement','complètement','completamente'],['totalement','totalement','totalmente'],
          ['partiellement','partiellement','parcialmente'],['extremement','extrêmement','extremadamente']
        ]
      },
      {
        id: 'adverbs-manner',
        title: 'Modo y manera',
        entries: [
          ['bien','bien','bien'],['mal','mal','mal'],['vite','vite','rápido / rápidamente'],
          ['lentement','lentement','lentamente'],['facilement','facilement','fácilmente'],
          ['difficilement','difficilement','difícilmente'],['simplement','simplement','simplemente'],
          ['serieusement','sérieusement','seriamente'],['vraiment','vraiment','realmente'],
          ['exactement','exactement','exactamente'],['surtout','surtout','sobre todo'],
          ['ensemble','ensemble','juntos'],['autrement','autrement','de otro modo'],
          ['ainsi','ainsi','así'],['volontiers','volontiers','con gusto'],
          ['exprès','exprès','a propósito'],['intentionnellement','intentionnellement','intencionadamente']
        ]
      },
      {
        id: 'adverbs-affirmation-negation-doubt',
        title: 'Afirmación, negación y duda',
        entries: [
          ['oui','oui','sí'],['non','non','no'],['si','si','sí (en respuesta a una negación)'],
          ['certainement','certainement','ciertamente / seguramente'],['surement','sûrement','seguramente'],
          ['probablement','probablement','probablemente'],['peut-etre','peut-être','quizás / tal vez'],
          ['sans-doute','sans doute','sin duda / probablemente'],['evidemment','évidemment','evidentemente'],
          ['apparemment','apparemment','aparentemente'],['effectivement','effectivement','efectivamente'],
          ['vraisemblablement','vraisemblablement','probablemente'],['absolument','absolument','absolutamente'],
          ['certainement-pas','certainement pas','de ninguna manera'],['nullement','nullement','de ninguna manera']
        ]
      },
      {
        id: 'adverbs-opinion-attitude',
        title: 'Opinión y actitud',
        entries: [
          ['personnellement','personnellement','personalmente'],['franchement','franchement','sinceramente'],
          ['heureusement','heureusement','afortunadamente / por suerte'],
          ['malheureusement','malheureusement','desgraciadamente / por desgracia'],
          ['naturellement','naturellement','naturalmente'],['sincèrement','sincèrement','sinceramente'],['curieusement','curieusement','curiosamente'],
          ['notamment','notamment','especialmente / en particular'],
          ['particulierement','particulièrement','particularmente'],
          ['principalement','principalement','principalmente'],['globalement','globalement','en general'],
          ['visiblement','visiblement','visiblemente']
        ]
      },
      {
        id: 'adverbs-degree-comparison-approximation',
        title: 'Grado, comparación y aproximación',
        entries: [
          ['plutot','plutôt','más bien'],['aussi','aussi','también / tan'],['egalement','également','igualmente / también'],
          ['seulement','seulement','solamente'],['uniquement','uniquement','únicamente'],
          ['beaucoup-plus','beaucoup plus','mucho más'],
          ['beaucoup-moins','beaucoup moins','mucho menos'],['un-peu','un peu','un poco'],
          
          ['quasiment','quasiment','casi / prácticamente'],['pratiquement','pratiquement','prácticamente'],
          ['a-peu-pres','à peu près','más o menos / aproximadamente'],
          ['de-plus-en-plus','de plus en plus','cada vez más'],['de-moins-en-moins','de moins en moins','cada vez menos']
        ]
      }
    ].map((subcategory) => ({
      ...subcategory,
      entries: subcategory.entries.map(([id, word, translation]) => ({
        id: 'adverb-' + id,
        word,
        translation
      }))
    }))
  };

  if (window.COQ_VOCABULARY_DATABASE_API) {
    window.COQ_VOCABULARY_DATABASE_API.registerCategory(category);
  }
})();