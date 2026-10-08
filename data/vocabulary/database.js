/*
 * COQ — Registro y cargador de la base de datos de Vocabulario
 *
 * Arquitectura:
 * - El manifiesto contiene únicamente metadatos de navegación y rutas.
 * - Las categorías se cargan bajo demanda.
 * - Cada categoría se valida al registrarse.
 * - El índice de búsqueda se actualiza únicamente con categorías cargadas.
 *
 * Camino:
 * manifiesto → categoría → subcategoría → entrada
 */
(function () {
  'use strict';

  const MANIFEST = Object.freeze([
    Object.freeze({id:'greetings-presentations',title:'Saludos y presentaciones',src:'../data/vocabulary/categories/greetings-presentations.js?v=20260922-2'}),
    Object.freeze({id:'numbers-cardinal-ordinal',title:'Números cardinales y ordinales',src:'../data/vocabulary/categories/numbers-cardinal-ordinal.js?v=20260922-1'}),
    Object.freeze({id:'family-relations',title:'Familia y relaciones',src:'../data/vocabulary/categories/family-relations.js?v=20260919-1'}),
    Object.freeze({id:'body-person',title:'Cuerpo y persona',src:'../data/vocabulary/categories/body.js?v=20260919-6'}),
    Object.freeze({id:'house',title:'Casa',src:'../data/vocabulary/categories/house.js?v=20260920-8'}),
    Object.freeze({id:'daily-life-routines',title:'Vida cotidiana y rutinas',src:'../data/vocabulary/categories/daily-life-routines.js?v=20260921-1'}),
    Object.freeze({id:'time-dates-calendar',title:'Tiempo, fechas y calendario',src:'../data/vocabulary/categories/time-dates-calendar.js?v=20260922-1'}),
    Object.freeze({id:'food',title:'Alimentación',src:'../data/vocabulary/categories/food.js?v=20260920-9'}),
    Object.freeze({id:'clothing',title:'Ropa',src:'../data/vocabulary/categories/clothing.js?v=20260920-8'}),
    Object.freeze({id:'city',title:'Ciudad',src:'../data/vocabulary/categories/city.js?v=20260920-10'}),
    Object.freeze({id:'place-prepositions',title:'Preposiciones de lugar',src:'../data/vocabulary/categories/place-prepositions.js?v=20260922-2'}),
    Object.freeze({id:'common-adverbs',title:'Adverbios más usados',src:'../data/vocabulary/categories/common-adverbs.js?v=20260922-1'}),
    Object.freeze({id:'animals',title:'Animales',src:'../data/vocabulary/categories/animals.js?v=20260919-arch'}),
    Object.freeze({id:'weather-climate',title:'Clima y tiempo',src:'../data/vocabulary/categories/weather-climate.js?v=20260920-1'}),
    Object.freeze({id:'shopping-commerce',title:'Compras y comercio',src:'../data/vocabulary/categories/shopping-commerce.js?v=20260920-1'}),
    Object.freeze({id:'money-banking',title:'Dinero y banca',src:'../data/vocabulary/categories/money-banking.js?v=20260920-1'}),
    Object.freeze({id:'transport',title:'Transporte y desplazamientos',src:'../data/vocabulary/categories/transport.js?v=20260919-1'}),
    Object.freeze({id:'travel-tourism',title:'Viajes y turismo',src:'../data/vocabulary/categories/travel-tourism.js?v=20260919-1'}),
    Object.freeze({id:'leisure-entertainment',title:'Ocio y entretenimiento',src:'../data/vocabulary/categories/leisure-entertainment.js?v=20260921-1'}),
    Object.freeze({id:'sports',title:'Deportes',src:'../data/vocabulary/categories/sports.js?v=20260921-2'}),
    Object.freeze({id:'cooking-food-preparation',title:'Cocina y preparación de alimentos',src:'../data/vocabulary/categories/cooking-food-preparation.js?v=20260922-1'}),
    Object.freeze({id:'nature',title:'Naturaleza',src:'../data/vocabulary/categories/nature.js?v=20260922-3'}),
    Object.freeze({id:'education',title:'Educación',src:'../data/vocabulary/categories/education.js?v=20260920-1'}),
    Object.freeze({id:'work-professions',title:'Trabajo y profesiones',src:'../data/vocabulary/categories/work-professions.js?v=20260920-1'}),
    Object.freeze({id:'health-medicine',title:'Salud y medicina',src:'../data/vocabulary/categories/health-medicine.js?v=20260920-1'}),
    Object.freeze({id:'technology-communication',title:'Tecnología y comunicación',src:'../data/vocabulary/categories/technology-communication.js?v=20260922-2'}),
    Object.freeze({id:'emotions-feelings',title:'Emociones y sentimientos',src:'../data/vocabulary/categories/emotions-feelings.js?v=20260922-1'}),
    Object.freeze({id:'avoir-expressions',title:'Expresiones con avoir',src:'../data/vocabulary/categories/avoir-expressions.js?v=20260922-1'}),
    Object.freeze({id:'society-social-life',title:'Sociedad y vida social',src:'../data/vocabulary/categories/society-social-life.js?v=20260922-1'}),
    Object.freeze({id:'connectors',title:'Conectores',src:'../data/vocabulary/categories/connectors.js?v=20260922-1'}),
    Object.freeze({id:'figurative-idiomatic-expressions',title:'Expresiones figuradas e idiomáticas',src:'../data/vocabulary/categories/figurative-idiomatic-expressions.js?v=20260922-1'}),
    Object.freeze({id:'politics',title:'Política',src:'../data/vocabulary/categories/politics.js?v=20260923-1'}),
    Object.freeze({id:'science',title:'Ciencia',src:'../data/vocabulary/categories/science.js?v=20260923-1'}),
    Object.freeze({id:'planets-space',title:'Planetas y el espacio',src:'../data/vocabulary/categories/planets-space.js?v=20260922-1'}),
  ]);

  const registry = new Map();
  const loadCache = new Map();

  function assertString(value,label,required=true){
    if(required&&(!value||typeof value!=='string'))throw new Error('Vocabulario: '+label+' inválido.');
    if(!required&&value!=null&&typeof value!=='string')throw new Error('Vocabulario: '+label+' debe ser texto o null.');
  }
  function assertEntry(entry,subcategoryId){
    if(!entry||typeof entry!=='object')throw new Error('Vocabulario: entrada inválida en "'+subcategoryId+'".');
    assertString(entry.id,'id de entrada'); assertString(entry.word,'palabra de "'+entry.id+'"'); assertString(entry.translation,'traducción de "'+entry.id+'"');
    assertString(entry.articleFr,'articleFr de "'+entry.id+'"',false); assertString(entry.articleEs,'articleEs de "'+entry.id+'"',false);
    if(entry.emoji!=null&&typeof entry.emoji!=='string')throw new Error('Vocabulario: emoji de "'+entry.id+'" debe ser texto o null.');
  }
  function assertCategory(category){
    if(!category||typeof category!=='object')throw new Error('Vocabulario: categoría inválida.');
    assertString(category.id,'id de categoría'); assertString(category.title,'título de categoría');
    if(!Array.isArray(category.subcategories))throw new Error('Vocabulario: la categoría "'+category.id+'" no tiene subcategorías válidas.');
    const subcategoryIds=new Set(),entryIds=new Set();
    category.subcategories.forEach((subcategory)=>{
      if(!subcategory||typeof subcategory!=='object')throw new Error('Vocabulario: subcategoría inválida en "'+category.id+'".');
      assertString(subcategory.id,'id de subcategoría'); assertString(subcategory.title,'título de subcategoría "'+subcategory.id+'"');
      if(subcategoryIds.has(subcategory.id))throw new Error('Vocabulario: id de subcategoría duplicado: "'+subcategory.id+'".');
      subcategoryIds.add(subcategory.id);
      if(!Array.isArray(subcategory.entries))throw new Error('Vocabulario: "'+subcategory.id+'" no tiene entries válidas.');
      subcategory.entries.forEach((entry)=>{assertEntry(entry,subcategory.id);if(entryIds.has(entry.id))throw new Error('Vocabulario: id de entrada duplicado en "'+category.id+'": "'+entry.id+'".');entryIds.add(entry.id);});
    });
    return category;
  }
  function validateLoadedRegistry(){
    const categoryIds=new Set(),subcategoryIds=new Set(),entryIds=new Set();
    registry.forEach((category)=>{
      assertCategory(category);
      if(categoryIds.has(category.id))throw new Error('Vocabulario: id de categoría duplicado: "'+category.id+'".'); categoryIds.add(category.id);
      (category.subcategories||[]).forEach((subcategory)=>{
        if(subcategoryIds.has(subcategory.id))throw new Error('Vocabulario: id de subcategoría duplicado globalmente: "'+subcategory.id+'".'); subcategoryIds.add(subcategory.id);
        (subcategory.entries||[]).forEach((entry)=>{if(entryIds.has(entry.id))throw new Error('Vocabulario: id de entrada duplicado globalmente: "'+entry.id+'".');entryIds.add(entry.id);});
      });
    });
  }
  function registerCategory(category){
    assertCategory(category);
    const descriptor=MANIFEST.find((item)=>item.id===category.id);
    if(!descriptor)throw new Error('Vocabulario: la categoría "'+category.id+'" no existe en el manifiesto.');
    const previous=registry.get(category.id);
    if(previous&&previous!==category)throw new Error('Vocabulario: la categoría "'+category.id+'" fue registrada más de una vez.');
    registry.set(category.id,category); validateLoadedRegistry(); return category;
  }
  function loadScript(src){
    if(loadCache.has(src))return loadCache.get(src);
    const promise=new Promise((resolve,reject)=>{const script=document.createElement('script');script.src=src;script.async=true;script.onload=()=>resolve();script.onerror=()=>{loadCache.delete(src);reject(new Error('No se pudo cargar el módulo de vocabulario: '+src));};document.head.appendChild(script);});
    loadCache.set(src,promise); return promise;
  }
  function getLoadedCategories(){return Object.freeze(MANIFEST.map((item)=>registry.get(item.id)).filter(Boolean));}
  function formatFrenchWord(entry){
    const article=String(entry&&entry.articleFr||'').trim();
    let word=String(entry&&entry.word||'').trim();
    if(!article)return word;
    const normalizedArticle=article.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
    const normalizedWord=word.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
    if(normalizedWord===normalizedArticle){
      word='';
    }else if(normalizedWord.startsWith(normalizedArticle+' ')){
      word=word.slice(article.length).trim();
    }else if(/['’]$/.test(article)&&normalizedWord.startsWith(normalizedArticle)){
      word=word.slice(article.length).trim();
    }
    if(!word)return article;
    if(/['’]$/.test(article))return article+word;
    return article+' '+word;
  }

  function buildSearchIndex(categories){
    const index=[];
    categories.forEach((category)=>{
      index.push({type:'category',id:category.id,title:category.title,category:category.title,parentId:null,data:category});
      (category.subcategories||[]).forEach((subcategory)=>{
        index.push({type:'subcategory',id:subcategory.id,title:subcategory.title,category:category.title,parentId:category.id,data:subcategory});
        (subcategory.entries||[]).forEach((entry)=>index.push({type:'entry',id:entry.id,title:formatFrenchWord(entry),translation:[entry.articleEs,entry.translation].filter(Boolean).join(' '),category:category.title+' · '+subcategory.title,parentId:subcategory.id,categoryId:category.id,data:entry}));
      });
    }); return Object.freeze(index);
  }
  const database={version:'5.3.0',schemaVersion:'1.1',categories:[],index:[],manifest:MANIFEST,loadCategory,loadAll,getLoadedCategories};
  function refreshDatabaseIndex(){const categories=getLoadedCategories();database.categories=categories;database.index=buildSearchIndex(categories);return database;}
  async function loadCategory(id){
    const descriptor=MANIFEST.find((item)=>item.id===id); if(!descriptor)throw new Error('Vocabulario: categoría no registrada en el catálogo: "'+id+'".');
    if(!registry.has(id))await loadScript(descriptor.src);
    const category=registry.get(id); if(!category)throw new Error('Vocabulario: el módulo "'+id+'" no registró ninguna categoría.');
    refreshDatabaseIndex(); return Object.freeze(category);
  }
  async function loadAll(){await Promise.all(MANIFEST.map((item)=>loadCategory(item.id)));validateLoadedRegistry();refreshDatabaseIndex();return database.categories;}
  window.COQ_VOCABULARY_DATABASE=database;
  window.COQ_VOCABULARY_DATABASE_API=Object.freeze({manifest:MANIFEST,registerCategory,loadCategory,loadAll,getLoadedCategories,refreshDatabaseIndex});
  window.COQ_VOCABULARY_DATABASE_READY=Promise.resolve(database);
})();
