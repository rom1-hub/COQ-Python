/* COQ — Conectores */
(function () {
  'use strict';

  const category = {
    id: 'connectors',
    title: 'Conectores',
    subcategories: [
      {
        id: 'connectors-addition',
        title: 'Adición',
        entries: [
          ['et','et','y'],['aussi','aussi','también'],['egalement','également','también / igualmente'],
          ['de-plus','de plus','además'],['en-plus','en plus','además'],['de-meme','de même','del mismo modo / igualmente'],
          ['ainsi-que','ainsi que','así como'],['en-outre','en outre','además']
        ]
      },
      {
        id: 'connectors-contrast',
        title: 'Oposición y contraste',
        entries: [
          ['mais','mais','pero'],['cependant','cependant','sin embargo'],['pourtant','pourtant','sin embargo / no obstante'],
          ['toutefois','toutefois','no obstante'],['neanmoins','néanmoins','no obstante'],['en-revanche','en revanche','en cambio'],
          ['au-contraire','au contraire','al contrario'],['par-contre','par contre','en cambio'],
          ['alors-que','alors que','mientras que'],['tandis-que','tandis que','mientras que']
        ]
      },
      {
        id: 'connectors-cause',
        title: 'Causa y explicación',
        entries: [
          ['parce-que-1','parce que','porque (1.ª forma)'],['car-2','car','porque (2.ª forma)'],
          ['puisque','puisque','puesto que / ya que'],['comme','comme','como / puesto que'],
          ['etant-donne-que','étant donné que','dado que'],['grace-a','grâce à','gracias a'],
          ['a-cause-de','à cause de','a causa de'],['en-raison-de','en raison de','debido a']
        ]
      },
      {
        id: 'connectors-consequence',
        title: 'Consecuencia y resultado',
        entries: [
          ['donc','donc','por lo tanto / así que'],['alors','alors','entonces'],['ainsi','ainsi','así / de este modo'],
          ['c-est-pourquoi','c’est pourquoi','por eso'],['par-consequent','par conséquent','por consiguiente'],
          ['de-sorte-que','de sorte que','de modo que'],['si-bien-que','si bien que','de modo que'],
          ['tellement-que','tellement… que','tan/tanto… que']
        ]
      },
      {
        id: 'connectors-condition',
        title: 'Condición',
        entries: [
          ['si-condition','si','si'],['a-condition-que','à condition que','con la condición de que'],
          ['a-moins-que','à moins que','a menos que'],['pourvu-que','pourvu que','con tal de que'],
          ['dans-le-cas-ou','dans le cas où','en caso de que'],['a-condition-de','à condition de','con la condición de'],
          ['sauf-si','sauf si','salvo si']
        ]
      },
      {
        id: 'connectors-purpose',
        title: 'Finalidad',
        entries: [
          ['pour-purpose','pour','para'],['pour-que','pour que','para que'],['afin-de','afin de','con el fin de'],
          ['afin-que','afin que','para que'],['dans-le-but-de','dans le but de','con el objetivo de'],
          ['de-peur-de','de peur de','por miedo a'],['de-peur-que','de peur que','por miedo a que']
        ]
      },
      {
        id: 'connectors-time-sequence',
        title: 'Tiempo y sucesión',
        entries: [
          ['d-abord','d’abord','primero / en primer lugar'],['puis','puis','luego'],['ensuite','ensuite','después'],
          ['apres','après','después'],['enfin','enfin','finalmente'],['avant-de','avant de','antes de'],
          ['avant-que','avant que','antes de que'],['apres-avoir-1','après avoir','después de haber (1.ª forma)'],
          ['apres-etre-2','après être','después de haber (2.ª forma)'],['pendant-que','pendant que','mientras'],
          ['lorsque','lorsque','cuando'],['quand','quand','cuando'],['des-que','dès que','en cuanto'],
          ['aussitot-que','aussitôt que','tan pronto como'],['depuis-que','depuis que','desde que'],
          ['jusqu-a-ce-que','jusqu’à ce que','hasta que']
        ]
      },
      {
        id: 'connectors-example-reformulation-conclusion',
        title: 'Ejemplo, reformulación y conclusión',
        entries: [
          ['par-exemple','par exemple','por ejemplo'],['notamment','notamment','especialmente / en particular'],
          ['c-est-a-dire','c’est-à-dire','es decir'],['autrement-dit','autrement dit','dicho de otro modo'],
          ['en-d-autres-termes','en d’autres termes','en otras palabras'],['en-effet','en effet','en efecto'],
          ['en-conclusion','en conclusion','en conclusión'],['en-resume','en résumé','en resumen'],
          ['pour-resumer','pour résumer','para resumir'],['en-bref','en bref','en resumen / brevemente']
        ]
      }
    ].map((subcategory) => ({
      ...subcategory,
      entries: subcategory.entries.map(([id, word, translation]) => ({
        id: 'connector-' + id,
        word,
        translation
      }))
    }))
  };

  if (window.COQ_VOCABULARY_DATABASE_API) {
    window.COQ_VOCABULARY_DATABASE_API.registerCategory(category);
  }
})();