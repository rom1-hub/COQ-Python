/* COQ — Vocabulario · Ropa */
(function () {
  'use strict';
  const category = {
    id:'clothing', title:'Ropa', subcategories:[
      {id:'clothing-main',title:'Prendas de vestir',entries:[
        {id:'clothing-pants',word:'pantalon',translation:'pantalón',articleFr:'un',articleEs:'un'},
        {id:'clothing-jeans',word:'jean',translation:'vaquero / jean',articleFr:'un',articleEs:'un'},
        {id:'clothing-shorts',word:'short',translation:'pantalón corto',articleFr:'un',articleEs:'un'},
        {id:'clothing-skirt',word:'jupe',translation:'falda',articleFr:'une',articleEs:'una'},
        {id:'clothing-dress',word:'robe',translation:'vestido',articleFr:'une',articleEs:'un'},
        {id:'clothing-shirt',word:'chemise',translation:'camisa',articleFr:'une',articleEs:'una'},
        {id:'clothing-blouse',word:'chemisier',translation:'blusa',articleFr:'un',articleEs:'una'},
        {id:'clothing-tshirt',word:'t-shirt',translation:'camiseta',articleFr:'un',articleEs:'una'},
        {id:'clothing-tank-top',word:'débardeur',translation:'camiseta de tirantes',articleFr:'un',articleEs:'una'},
        {id:'clothing-sweater',word:'pull',translation:'suéter / jersey',articleFr:'un',articleEs:'un'},
        {id:'clothing-sweatshirt',word:'sweat',translation:'sudadera',articleFr:'un',articleEs:'una'},
        {id:'clothing-cardigan',word:'gilet',translation:'cárdigan / chaleco',articleFr:'un',articleEs:'un'},
        {id:'clothing-jacket',word:'veste',translation:'chaqueta',articleFr:'une',articleEs:'una'},
        {id:'clothing-coat',word:'manteau',translation:'abrigo',articleFr:'un',articleEs:'un'},
        {id:'clothing-raincoat',word:'imperméable',translation:'impermeable',articleFr:'un',articleEs:'un'},
        {id:'clothing-suit',word:'costume',translation:'traje',articleFr:'un',articleEs:'un'},
        {id:'clothing-womens-suit',word:'tailleur',translation:'traje de mujer',articleFr:'un',articleEs:'un'},
        {id:'clothing-pajamas',word:'pyjama',translation:'pijama',articleFr:'un',articleEs:'un'},
        {id:'clothing-swimsuit',word:'maillot de bain',translation:'traje de baño',articleFr:'un',articleEs:'un'},
        {id:'clothing-garment',word:'vêtement',translation:'prenda de vestir',articleFr:'un',articleEs:'una'}
      ]},
      {id:'clothing-underwear',title:'Ropa interior',entries:[
        {id:'clothing-bra',word:'soutien-gorge',translation:'sujetador',articleFr:'un',articleEs:'un'},
        {id:'clothing-panties',word:'culotte',translation:'bragas / bombacha',articleFr:'une',articleEs:'unas'},
        {id:'clothing-briefs',word:'slip',translation:'calzoncillo',articleFr:'un',articleEs:'un'},
        {id:'clothing-underwear-boxer',word:'caleçon',translation:'bóxer / calzoncillo',articleFr:'un',articleEs:'un'},
        {id:'clothing-boxer',word:'boxer',translation:'bóxer',articleFr:'un',articleEs:'un'},
        {id:'clothing-socks',word:'chaussettes',translation:'calcetines',articleFr:'des',articleEs:'unos'},
        {id:'clothing-tights',word:'collants',translation:'medias pantis',articleFr:'des',articleEs:'unas'},
        {id:'clothing-stocking',word:'bas',translation:'media',articleFr:'un',articleEs:'una'}
      ]},
      {id:'clothing-shoes',title:'Calzado',entries:[
        {id:'clothing-shoe',word:'chaussure',translation:'zapato',articleFr:'une',articleEs:'un'},
        {id:'clothing-sneaker',word:'basket',translation:'zapatilla deportiva',articleFr:'une',articleEs:'una'},
        {id:'clothing-boot',word:'botte',translation:'bota',articleFr:'une',articleEs:'una'},
        {id:'clothing-ankle-boot',word:'bottine',translation:'botín',articleFr:'une',articleEs:'un'},
        {id:'clothing-sandal',word:'sandale',translation:'sandalia',articleFr:'une',articleEs:'una'},
        {id:'clothing-flip-flop',word:'tong',translation:'chancla',articleFr:'une',articleEs:'una'},
        {id:'clothing-slipper',word:'pantoufle',translation:'zapatilla de casa',articleFr:'une',articleEs:'una'},
        {id:'clothing-heels',word:'chaussures à talons',translation:'tacones',articleFr:'des',articleEs:'unos'},
        {id:'clothing-sole',word:'semelle',translation:'suela',articleFr:'une',articleEs:'una'},
        {id:'clothing-shoelace',word:'lacet',translation:'cordón',articleFr:'un',articleEs:'un'}
      ]},
      {id:'clothing-accessories',title:'Accesorios',entries:[
        {id:'clothing-bag',word:'sac',translation:'bolso',articleFr:'un',articleEs:'un'},
        {id:'clothing-handbag',word:'sac à main',translation:'bolso de mano',articleFr:'un',articleEs:'un'},
        {id:'clothing-belt',word:'ceinture',translation:'cinturón',articleFr:'une',articleEs:'un'},
        {id:'clothing-scarf',word:'écharpe',translation:'bufanda',articleFr:'une',articleEs:'una'},
        {id:'clothing-foulard',word:'foulard',translation:'pañuelo',articleFr:'un',articleEs:'un'},
        {id:'clothing-hat',word:'chapeau',translation:'sombrero',articleFr:'un',articleEs:'un'},
        {id:'clothing-cap',word:'casquette',translation:'gorra',articleFr:'une',articleEs:'una'},
        {id:'clothing-beanie',word:'bonnet',translation:'gorro',articleFr:'un',articleEs:'un'},
        {id:'clothing-gloves',word:'gants',translation:'guantes',articleFr:'des',articleEs:'unos'},
        {id:'clothing-tie',word:'cravate',translation:'corbata',articleFr:'une',articleEs:'una'},
        {id:'clothing-bow-tie',word:'nœud papillon',translation:'pajarita',articleFr:'un',articleEs:'una'},
        {id:'clothing-watch',word:'montre',translation:'reloj',articleFr:'une',articleEs:'un'},
        {id:'clothing-glasses',word:'lunettes',translation:'gafas',articleFr:'des',articleEs:'unas'},
        {id:'clothing-sunglasses',word:'lunettes de soleil',translation:'gafas de sol',articleFr:'des',articleEs:'unas'}
      ]},
      {id:'clothing-materials',title:'Materiales y tejidos',entries:[
        {id:'clothing-cotton',word:'coton',translation:'algodón',articleFr:'le',articleEs:'el'},
        {id:'clothing-wool',word:'laine',translation:'lana',articleFr:'la',articleEs:'la'},
        {id:'clothing-silk',word:'soie',translation:'seda',articleFr:'la',articleEs:'la'},
        {id:'clothing-linen',word:'lin',translation:'lino',articleFr:'le',articleEs:'el'},
        {id:'clothing-leather',word:'cuir',translation:'cuero',articleFr:'le',articleEs:'el'},
        {id:'clothing-denim',word:'denim',translation:'denim / tejido vaquero',articleFr:'le',articleEs:'el'},
        {id:'clothing-polyester',word:'polyester',translation:'poliéster',articleFr:'le',articleEs:'el'},
        {id:'clothing-fabric',word:'tissu',translation:'tela / tejido',articleFr:'le',articleEs:'la'},
        {id:'clothing-material',word:'matière',translation:'material / tejido',articleFr:'la',articleEs:'el'}
      ]},
      {id:'clothing-size-features',title:'Tallas, medidas y características',entries:[
        {id:'clothing-size',word:'taille',translation:'talla',articleFr:'une',articleEs:'una'},
        {id:'clothing-small-size',word:'petite taille',translation:'talla pequeña',articleFr:'une',articleEs:'una'},
        {id:'clothing-large-size',word:'grande taille',translation:'talla grande',articleFr:'une',articleEs:'una'},
        {id:'clothing-size-s',word:'taille S',translation:'talla S',articleFr:'la',articleEs:'la'},
        {id:'clothing-size-m',word:'taille M',translation:'talla M',articleFr:'la',articleEs:'la'},
        {id:'clothing-size-l',word:'taille L',translation:'talla L',articleFr:'la',articleEs:'la'},
        {id:'clothing-size-xl',word:'taille XL',translation:'talla XL',articleFr:'la',articleEs:'la'},
        {id:'clothing-tight',word:'serré',translation:'ajustado'},
        {id:'clothing-loose',word:'large',translation:'holgado / ancho'},
        {id:'clothing-short',word:'court',translation:'corto'},
        {id:'clothing-long',word:'long',translation:'largo'},
        {id:'clothing-light',word:'léger',translation:'ligero'},
        {id:'clothing-thick',word:'épais',translation:'grueso'},
        {id:'clothing-thin',word:'fin',translation:'fino'},
        {id:'clothing-short-sleeves',word:'à manches courtes',translation:'de manga corta'},
        {id:'clothing-long-sleeves',word:'à manches longues',translation:'de manga larga'}
      ]},
      {id:'clothing-dressing-actions',title:'Vestirse y acciones relacionadas',entries:[
        {id:'clothing-dress-action',word:'s’habiller',translation:'vestirse'},
        {id:'clothing-undress',word:'se déshabiller',translation:'desvestirse'},
        {id:'clothing-put-on',word:'mettre',translation:'ponerse'},
        {id:'clothing-take-off',word:'enlever',translation:'quitarse'},
        {id:'clothing-wear',word:'porter',translation:'llevar / usar'},
        {id:'clothing-try-on',word:'essayer',translation:'probarse'},
        {id:'clothing-change',word:'changer de vêtements',translation:'cambiarse de ropa'},
        {id:'clothing-change-oneself',word:'se changer',translation:'cambiarse'},
        {id:'clothing-button',word:'boutonner',translation:'abotonar'},
        {id:'clothing-unbutton',word:'déboutonner',translation:'desabotonar'},
        {id:'clothing-fasten',word:'attacher',translation:'atar / sujetar'},
        {id:'clothing-tie-action',word:'nouer',translation:'anudar'},
        {id:'clothing-slip-on',word:'enfiler',translation:'ponerse / introducirse una prenda'},
        {id:'clothing-adjust',word:'ajuster',translation:'ajustar'}
      ]},
      {id:'clothing-care',title:'Cuidado y mantenimiento de la ropa',entries:[
        {id:'clothing-wash',word:'laver',translation:'lavar'},
        {id:'clothing-dry',word:'sécher',translation:'secar'},
        {id:'clothing-iron-action',word:'repasser',translation:'planchar'},
        {id:'clothing-fold',word:'plier',translation:'doblar'},
        {id:'clothing-tidy',word:'ranger',translation:'guardar / ordenar'},
        {id:'clothing-clean',word:'nettoyer',translation:'limpiar'},
        {id:'clothing-stain-remove',word:'détacher',translation:'quitar una mancha'},
        {id:'clothing-stain',word:'tache',translation:'mancha',articleFr:'une',articleEs:'una'},
        {id:'clothing-washing-machine',word:'machine à laver',translation:'lavadora',articleFr:'une',articleEs:'una'},
        {id:'clothing-dryer',word:'sèche-linge',translation:'secadora',articleFr:'un',articleEs:'una'},
        {id:'clothing-iron',word:'fer à repasser',translation:'plancha',articleFr:'un',articleEs:'una'},
        {id:'clothing-ironing-board',word:'planche à repasser',translation:'tabla de planchar',articleFr:'une',articleEs:'una'},
        {id:'clothing-laundry-detergent',word:'lessive',translation:'detergente para la ropa',articleFr:'une',articleEs:'un'},
        {id:'clothing-hanger',word:'cintre',translation:'percha',articleFr:'un',articleEs:'una'},
        {id:'clothing-dry-cleaner',word:'pressing',translation:'tintorería',articleFr:'un',articleEs:'una'}
      ]}
    ]
  };
  if (!window.COQ_VOCABULARY_DATABASE_API) throw new Error('COQ Vocabulario: registro no disponible.');
  window.COQ_VOCABULARY_DATABASE_API.registerCategory(Object.freeze(category));
})();