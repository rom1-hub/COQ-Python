/* COQ — Vocabulario · Cocina y preparación de alimentos */
(function () {
  'use strict';

  const category = {
    id: 'cooking-food-preparation',
    title: 'Cocina y preparación de alimentos',
    subcategories: [
      {
        id: 'cooking-kitchen-spaces',
        title: 'La cocina y sus espacios',
        entries: [
          ['cuisine','cuisine','cocina','une','una'],
          ['evier','évier','fregadero','un','un'],
          ['plan-travail','plan de travail','encimera','un','una'],
          ['placard','placard','armario','un','un'],
          ['etagere','étagère','estantería','une','una'],
          ['tiroir','tiroir','cajón','un','un'],
          ['refrigerateur','réfrigérateur','frigorífico','un','un'],
          ['congelateur','congélateur','congelador','un','un'],
          ['four','four','horno','un','un'],
          ['cuisiniere','cuisinière','cocina / estufa','une','una'],
          ['lave-vaisselle','lave-vaisselle','lavavajillas','un','un'],
          ['robinet','robinet','grifo','un','un'],
          ['poubelle','poubelle','papelera / cubo de basura','une','una'],
          ['hotte','hotte','campana extractora','une','una'],
          ['garde-manger','garde-manger','despensa','un','una']
        ]
      },
      {
        id: 'cooking-utensils',
        title: 'Utensilios de cocina',
        entries: [
          ['casserole','casserole','cacerola','une','una'],
          ['poele','poêle','sartén','une','una'],
          ['marmite','marmite','olla','une','una'],
          ['couvercle','couvercle','tapa','un','una'],
          ['couteau','couteau','cuchillo','un','un'],
          ['fourchette','fourchette','tenedor','une','un'],
          ['cuillere','cuillère','cuchara','une','una'],
          ['cuillere-soupe','cuillère à soupe','cuchara sopera','une','una'],
          ['cuillere-cafe','cuillère à café','cucharita','une','una'],
          ['spatule','spatule','espátula','une','una'],
          ['louche','louche','cucharón','une','un'],
          ['passoire','passoire','colador','une','un'],
          ['fouet','fouet','batidor','un','un'],
          ['rape','râpe','rallador','une','un'],
          ['eplucheur','éplucheur','pelador','un','un'],
          ['ouvre-boite','ouvre-boîte','abrelatas','un','un'],
          ['tire-bouchon','tire-bouchon','sacacorchos','un','un'],
          ['planche-decouper','planche à découper','tabla de cortar','une','una'],
          ['rouleau-patisserie','rouleau à pâtisserie','rodillo','un','un'],
          ['mortier','mortier','mortero','un','un']
        ]
      },
      {
        id: 'cooking-containers-prep-tableware',
        title: 'Recipientes y vajilla para preparar',
        entries: [
          ['bol','bol','bol','un','un'],
          ['saladier','saladier','ensaladera','un','una'],
          ['plat','plat','fuente','un','una'],
          ['moule','moule','molde','un','un'],
          ['assiette','assiette','plato','une','un'],
          ['verre-doseur','verre doseur','vaso medidor','un','un'],
          ['tasse','tasse','taza','une','una'],
          ['pichet','pichet','jarra','un','una'],
          ['bouteille','bouteille','botella','une','una'],
          ['bocal','bocal','tarro','un','un'],
          ['boite','boîte','caja / recipiente','une','una'],
          ['recipient','récipient','recipiente','un','un']
        ]
      },
      {
        id: 'cooking-ingredients-quantities',
        title: 'Ingredientes y cantidades',
        entries: [
          ['ingredient','ingrédient','ingrediente','un','un'],
          ['quantite','quantité','cantidad','une','una'],
          ['portion','portion','porción','une','una'],
          ['dose','dose','dosis','une','una'],
          ['kilo','kilo','kilo','un','un'],
          ['gramme','gramme','gramo','un','un'],
          ['litre','litre','litro','un','un'],
          ['millilitre','millilitre','mililitro','un','un'],
          ['pincee','pincée','pizca','une','una'],
          ['poignee','poignée','puñado','une','un'],
          ['tranche','tranche','rebanada','une','una'],
          ['morceau','morceau','trozo','un','un'],
          ['cuilleree','cuillerée','cucharada','une','una'],
          ['filet','filet','chorrito','un','un'],
          ['peu','peu','poco','un','un']
        ]
      },
      {
        id: 'cooking-preparation-cuts',
        title: 'Preparación y cortes',
        entries: [
          ['couper','couper','cortar'],
          ['decouper','découper','cortar / trocear'],
          ['trancher','trancher','cortar en rodajas'],
          ['eplucher','éplucher','pelar'],
          ['hacher','hacher','picar'],
          ['raper','râper','rallar'],
          ['ecraser','écraser','aplastar / triturar'],
          ['mixer','mixer','triturar / batir'],
          ['melanger','mélanger','mezclar'],
          ['remuer','remuer','remover'],
          ['verser','verser','verter'],
          ['ajouter','ajouter','añadir'],
          ['retirer','retirer','retirar'],
          ['remplir','remplir','llenar'],
          ['vider','vider','vaciar']
        ]
      },
      {
        id: 'cooking-cooking-techniques',
        title: 'Técnicas de cocción',
        entries: [
          ['cuire','cuire','cocinar / cocer'],
          ['faire-cuire','faire cuire','cocinar'],
          ['bouillir','bouillir','hervir'],
          ['faire-bouillir','faire bouillir','hacer hervir'],
          ['mijoter','mijoter','cocinar a fuego lento'],
          ['faire-revenir','faire revenir','sofreír'],
          ['frire','frire','freír'],
          ['faire-frire','faire frire','freír'],
          ['rotir','rôtir','asar'],
          ['griller','griller','asar a la parrilla'],
          ['cuire-au-four','cuire au four','cocinar al horno'],
          ['cuire-vapeur','cuire à la vapeur','cocinar al vapor'],
          ['pocher','pocher','escalfar'],
          ['blanchir','blanchir','blanquear'],
          ['carameliser','caraméliser','caramelizar']
        ]
      },
      {
        id: 'cooking-preparation-elaboration',
        title: 'Preparación y elaboración',
        entries: [
          ['recette','recette','receta','une','una'],
          ['preparation','préparation','preparación','une','una'],
          ['pate','pâte','masa','une','una'],
          ['sauce','sauce','salsa','une','una'],
          ['soupe','soupe','sopa','une','una'],
          ['creme','crème','crema','une','una'],
          ['bouillon','bouillon','caldo','un','un'],
          ['melange','mélange','mezcla','un','una'],
          ['marinade','marinade','adobo / marinada','une','una'],
          ['farce','farce','relleno','une','un'],
          ['garniture','garniture','guarnición','une','una'],
          ['pate-gateau','pâte à gâteau','masa para pastel','une','una'],
          ['pate-pain','pâte à pain','masa de pan','une','una'],
          ['assaisonner','assaisonner','sazonar'],
          ['preparer','préparer','preparar']
        ]
      },
      {
        id: 'cooking-seasonings-flavors',
        title: 'Condimentos y sabores',
        entries: [
          ['assaisonnement','assaisonnement','condimento','un','un'],
          ['epice','épice','especia','une','una'],
          ['herbe-aromatique','herbe aromatique','hierba aromática','une','una'],
          ['sel','sel','sal','un','una'],
          ['poivre','poivre','pimienta','un','una'],
          ['huile','huile','aceite','une','un'],
          ['vinaigre','vinaigre','vinagre','un','un'],
          ['moutarde','moutarde','mostaza','une','una'],
          ['sauce-piquante','sauce piquante','salsa picante','une','una'],
          ['gout','goût','sabor','un','un'],
          ['saveur','saveur','sabor','une','un'],
          ['arome','arôme','aroma','un','un'],
          ['sucre-adj','sucré','dulce'],
          ['sale-adj','salé','salado'],
          ['amer','amer','amargo'],
          ['acide','acide','ácido'],
          ['epice-adj','épicé','picante']
        ]
      },
      {
        id: 'cooking-baking-pastry',
        title: 'Horneado y repostería',
        entries: [
          ['patisserie','pâtisserie','producto de pastelería','une','un'],
          ['gateau','gâteau','pastel','un','un'],
          ['tarte','tarte','tarta','une','una'],
          ['biscuit','biscuit','galleta','un','una'],
          ['cookie','cookie','galleta','un','una'],
          ['pain','pain','pan','un','un'],
          ['brioche','brioche','brioche','une','un'],
          ['croissant','croissant','cruasán','un','un'],
          ['farine','farine','harina','une','una'],
          ['sucre','sucre','azúcar','un','un'],
          ['oeuf','œuf','huevo','un','un'],
          ['beurre','beurre','mantequilla','un','una'],
          ['levure','levure','levadura','une','una'],
          ['pate-feuilletee','pâte feuilletée','masa de hojaldre','une','una'],
          ['pate-brisee','pâte brisée','masa quebrada','une','una'],
          ['petrir','pétrir','amasar'],
          ['enfourner','enfourner','meter en el horno'],
          ['demouler','démouler','desmoldar']
        ]
      },
      {
        id: 'cooking-result-conservation',
        title: 'Resultado y conservación',
        entries: [
          ['cuisson','cuisson','cocción','une','una'],
          ['temperature','température','temperatura','une','una'],
          ['degre','degré','grado','un','un'],
          ['texture','texture','textura','une','una'],
          ['consistance','consistance','consistencia','une','una'],
          ['croute','croûte','corteza','une','una'],
          ['mie','mie','miga','une','una'],
          ['parfum','parfum','aroma','un','un'],
          ['reste','reste','resto','un','un'],
          ['conservation','conservation','conservación','une','una'],
          ['congeler','congeler','congelar'],
          ['decongeler','décongeler','descongelar'],
          ['conserver','conserver','conservar'],
          ['rechauffer','réchauffer','recalentar']
        ]
      }
    ].map((subcategory) => ({
      ...subcategory,
      entries: subcategory.entries.map(([id, word, translation, articleFr, articleEs]) => ({
        id: 'cooking-' + id,
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