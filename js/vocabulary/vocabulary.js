/*
 * COQ — Controlador de Vocabulario
 *
 * Arquitectura:
 * categoría → subcategoría → entradas → ejercicios universales
 *
 * Los ejercicios reutilizan exclusivamente las entradas de la
 * subcategoría seleccionada. No existen listas de vocabulario duplicadas
 * dentro de la lógica de ejercicios.
 */
(async function () {
  'use strict';

  const searchInput = document.getElementById('vocabularySearch');
  const results = document.getElementById('vocabularyResults');
  const browseButton = document.getElementById('vocabularyBrowse');
  const resetButton = document.getElementById('vocabularyReset');
  const topicsPanel = document.getElementById('vocabularyTopics');
  const learnContent = document.getElementById('vocabularyLearnContent');
  const practiceContent = document.getElementById('vocabularyPracticeContent');
  const exerciseTabs = document.getElementById('vocabularyExerciseTabs');

  if (!searchInput || !results || !browseButton || !resetButton || !topicsPanel ||
      !learnContent || !practiceContent || !exerciseTabs) return;

  const databaseReady = window.COQ_VOCABULARY_DATABASE_READY;
  if (!databaseReady || typeof databaseReady.then !== 'function') return;

  const database = await databaseReady;
  if (!database || !database.manifest) return;

  const searchService = window.COQ_VOCABULARY_SEARCH && window.COQ_VOCABULARY_SEARCH.create(database);
  if (!searchService) return;

  const databaseApi = window.COQ_VOCABULARY_DATABASE_API;
  if (!databaseApi || typeof databaseApi.loadCategory !== 'function' || typeof databaseApi.loadAll !== 'function') return;

  async function ensureAllLoaded() {
    await databaseApi.loadAll();
    searchService.refresh();
  }

  async function ensureCategoryLoaded(id) {
    const category = await databaseApi.loadCategory(id);
    searchService.refresh();
    return category;
  }

  const EXERCISES = [
    { id: 'match', label: 'Ejercicio 1', title: 'Asociar palabras', description: 'Elige la traducción de la palabra francesa.' },
    { id: 'write', label: 'Ejercicio 2', title: 'Escribir la palabra', description: 'Escribe en francés la palabra que aparece en español.' },
    { id: 'audio', label: 'Ejercicio 3', title: 'Escuchar y reconocer', description: 'Escucha la palabra y selecciona la forma escrita correcta.' }
  ];

  let selectedItem = null;
  let mode = 'learn';
  let activeExercise = 'match';

  const session = {
    questions: []
  };

  function getVocabularyAdapter() {
    const adapter = window.COQ_VOCABULARY_ADAPTER;
    if (!adapter || typeof adapter.adaptarPreguntaVocabulario !== 'function') {
      throw new Error('El adaptador de vocabulario no está disponible.');
    }
    return adapter;
  }

  function getVocabularyApi() {
    const api = window.COQ_API;
    if (!api || typeof api.generarEjercicioVocabularioDesdeBackend !== 'function') {
      throw new Error('El cliente API de vocabulario no está disponible.');
    }
    return api;
  }

  function escapeHtml(value) {
    return String(value == null ? '' : value).replace(/[&<>'"]/g, (char) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
    }[char]));
  }

  function normalize(value) {
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();
  }

  function shuffle(items) {
    const copy = items.slice();
    for (let i = copy.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function sampleEntries(entries, count = 15) {
    return shuffle(entries).slice(0, Math.min(count, entries.length));
  }

  function formatFrenchWord(entry) {
    const article = String(entry && entry.articleFr || '').trim();
    let word = String(entry && entry.word || '').trim();

    if (!article) return word;

    const normalizedArticle = normalize(article);
    const normalizedWord = normalize(word);

    if (normalizedWord === normalizedArticle) {
      word = '';
    } else if (normalizedWord.startsWith(normalizedArticle + ' ')) {
      word = word.slice(article.length).trim();
    } else if (/['’]$/.test(article) && normalizedWord.startsWith(normalizedArticle)) {
      word = word.slice(article.length).trim();
    }

    if (!word) return article;
    if (/['’]$/.test(article)) return article + word;
    return article + ' ' + word;
  }

  function displayWord(entry) {
    return escapeHtml(formatFrenchWord(entry));
  }

  function pronunciationButton(entry, label) {
    const phrase = formatFrenchWord(entry).trim();
    if (!phrase) return '';
    return `<button type="button" class="vocabulary-pronunciation-button"
      data-say="${escapeHtml(phrase)}"
      aria-label="${escapeHtml(label || ('Escuchar ' + phrase))}"
      title="Escuchar pronunciación">🔊</button>`;
  }

  function bindAudio(container) {
    if (window.Coqaudio && typeof window.Coqaudio.bind === 'function') {
      window.Coqaudio.bind(container);
    }
  }

  function getItems() {
    const items = [];

    database.categories.forEach((category) => {
      items.push({
        type: 'category',
        id: category.id,
        title: category.title,
        category: category.title,
        parent: null,
        data: category
      });

      (category.subcategories || []).forEach((subcategory) => {
        items.push({
          type: 'subcategory',
          id: subcategory.id,
          title: subcategory.title,
          category: category.title,
          parent: category,
          data: subcategory
        });
      });
    });

    return items;
  }

  function getCategoryById(id) {
    return database.categories.find((category) => category.id === id) || null;
  }

  function getSubcategoryById(id) {
    for (const category of database.categories) {
      const subcategory = (category.subcategories || []).find((item) => item.id === id);
      if (subcategory) return { category, subcategory };
    }
    return null;
  }

  function getSubcategoryNavigation(item) {
    if (!item || item.type !== 'subcategory' || !item.parent) return null;
    const subcategories = item.parent.subcategories || [];
    const index = subcategories.findIndex((subcategory) => subcategory.id === item.id);
    if (index < 0) return null;
    return { index, total: subcategories.length, previous: index > 0 ? subcategories[index - 1] : null, next: index < subcategories.length - 1 ? subcategories[index + 1] : null };
  }

  function navigateToVocabularyRoot() {
    selectedItem = null; searchInput.value = ''; results.innerHTML = '';
    searchInput.setAttribute('aria-expanded', 'false'); topicsPanel.innerHTML = '';
    topicsPanel.classList.add('hidden'); browseButton.setAttribute('aria-expanded', 'false');
    learnContent.innerHTML = ''; practiceContent.innerHTML = ''; exerciseTabs.innerHTML = '';
    exerciseTabs.classList.add('hidden');
  }

  function openAllCategories() {
    navigateToVocabularyRoot(); renderAllCategories();
    topicsPanel.classList.remove('hidden'); browseButton.setAttribute('aria-expanded', 'true');
    requestAnimationFrame(() => {
      const rect = topicsPanel.getBoundingClientRect();
      const top = Math.max(0, window.scrollY + rect.top - 200);
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }

  function vocabularyBreadcrumb(item) {
    if (!item) return '<nav class="vocabulary-breadcrumb" aria-label="Ubicación"><span>Vocabulario</span></nav>';
    if (item.type === 'category') return '<nav class="vocabulary-breadcrumb" aria-label="Ubicación"><button type="button" data-vocabulary-root>Vocabulario</button><span aria-hidden="true">›</span><strong>' + escapeHtml(item.title) + '</strong></nav>';
    if (item.type === 'subcategory') return '<nav class="vocabulary-breadcrumb" aria-label="Ubicación"><button type="button" data-vocabulary-root>Vocabulario</button><span aria-hidden="true">›</span><button type="button" data-vocabulary-category="' + escapeHtml(item.parent.id) + '">' + escapeHtml(item.parent.title) + '</button><span aria-hidden="true">›</span><strong>' + escapeHtml(item.title) + '</strong></nav>';
    return '';
  }

  function bindVocabularyNavigation(container) {
    const rootButton = container.querySelector('[data-vocabulary-root]');
    if (rootButton) rootButton.addEventListener('click', openAllCategories);
    const categoryButton = container.querySelector('[data-vocabulary-category]');
    if (categoryButton) categoryButton.addEventListener('click', () => selectCategoryById(categoryButton.dataset.vocabularyCategory));
    container.querySelectorAll('[data-subcategory-nav]').forEach((button) => button.addEventListener('click', () => selectSubcategoryById(button.dataset.subcategoryNav)));
    const categoriesButton = container.querySelector('[data-vocabulary-categories]');
    if (categoriesButton) categoriesButton.addEventListener('click', openAllCategories);
  }

  function subcategoryNavigation(item) {
    const navigation = getSubcategoryNavigation(item);
    if (!navigation) return '';
    return '<nav class="vocabulary-subcategory-navigation" aria-label="Navegación entre subcategorías">' +
      '<button type="button" class="btn secondary vocabulary-subcategory-nav-button vocabulary-subcategory-nav-button-previous" ' + (navigation.previous ? 'data-subcategory-nav="' + escapeHtml(navigation.previous.id) + '"' : 'disabled') + '><span class="vocabulary-nav-arrow" aria-hidden="true">←</span><span class="vocabulary-nav-label">' + (navigation.previous ? escapeHtml(navigation.previous.title) : 'Anterior') + '</span></button>' +
      '<button type="button" class="vocabulary-navigation-categories" data-vocabulary-categories>Todas las categorías</button>' +
      '<button type="button" class="btn blue vocabulary-subcategory-nav-button vocabulary-subcategory-nav-button-next" ' + (navigation.next ? 'data-subcategory-nav="' + escapeHtml(navigation.next.id) + '"' : 'disabled') + '><span class="vocabulary-nav-label">' + (navigation.next ? escapeHtml(navigation.next.title) : 'Siguiente') + '</span><span class="vocabulary-nav-arrow" aria-hidden="true">→</span></button>' +
    '</nav>';
  }

  function exerciseNavigation() {
    const currentIndex = EXERCISES.findIndex((exercise) => exercise.id === activeExercise);
    const previous = currentIndex > 0 ? EXERCISES[currentIndex - 1] : null;
    const next = currentIndex < EXERCISES.length - 1 ? EXERCISES[currentIndex + 1] : null;
    return '<nav class="vocabulary-exercise-navigation" aria-label="Navegación entre ejercicios">' +
      '<button type="button" class="btn secondary" data-exercise-nav="' + (previous ? previous.id : '') + '" ' + (previous ? '' : 'disabled') + '>← ' + (previous ? escapeHtml(previous.label) : 'Anterior') + '</button>' +
      '<span>Ejercicio ' + (currentIndex + 1) + ' de ' + EXERCISES.length + '</span>' +
      '<button type="button" class="btn blue" data-exercise-nav="' + (next ? next.id : '') + '" ' + (next ? '' : 'disabled') + '>' + (next ? escapeHtml(next.label) : 'Siguiente') + ' →</button>' +
    '</nav>';
  }

  function bindExerciseNavigation() {
    practiceContent.querySelectorAll('[data-exercise-nav]').forEach((button) => button.addEventListener('click', () => {
      if (!button.dataset.exerciseNav) return;
      activeExercise = button.dataset.exerciseNav;
      renderExerciseTabs();
      renderPracticeSubcategory(selectedItem);
      scrollVocabularyContentTop(practiceContent);
    }));
  }

  function scrollVocabularyContentTop(container) {
    if (!container) return;
    requestAnimationFrame(() => {
      const rect = container.getBoundingClientRect();
      const top = Math.max(0, window.scrollY + rect.top - 18);
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }
  function getEntries(item) {
    if (!item) return [];

    if (item.type === 'subcategory') {
      return Array.isArray(item.data.entries) ? item.data.entries : [];
    }

    if (item.type === 'category') {
      return (item.data.subcategories || []).flatMap((subcategory) =>
        Array.isArray(subcategory.entries) ? subcategory.entries : []
      );
    }

    return [];
  }

  function findWordMatches(query) {
    const groups = new Map();

    searchService.query(query)
      .filter((item) => item.type === 'entry')
      .forEach((item) => {
        const parent = getSubcategoryById(item.parentId);
        if (!parent) return;

        const entry = item.data;
        const key = normalize([
          formatFrenchWord(entry),
          entry.articleEs || '',
          entry.translation || ''
        ].join('|'));

        if (!groups.has(key)) {
          groups.set(key, {
            type: 'entry',
            id: item.id,
            title: item.title + ' / ' + item.translation,
            category: item.category,
            parent: parent.subcategory,
            categoryData: parent.category,
            data: entry,
            contexts: []
          });
        }

        groups.get(key).contexts.push({
          category: parent.category,
          subcategory: parent.subcategory
        });
      });

    return [...groups.values()];
  }
  function searchableItems(query) {
    const term = normalize(query);
    if (!term) return [];

    const structuralMatches = getItems().filter((item) =>
      normalize(`${item.title} ${item.category}`).includes(term)
    );

    return [...structuralMatches, ...findWordMatches(query)];
  }

  function selectItem(item) {
    selectedItem = item;
    results.innerHTML = '';
    searchInput.value = item.title;
    searchInput.setAttribute('aria-expanded', 'false');
    topicsPanel.classList.add('hidden');
    browseButton.setAttribute('aria-expanded', 'false');
    renderContent();
    scrollVocabularyContentTop(mode === 'practice' ? practiceContent : learnContent);
  }

  function selectSubcategoryById(id) {
    const found = getSubcategoryById(id);
    if (!found) return;

    selectItem({
      type: 'subcategory',
      id: found.subcategory.id,
      title: found.subcategory.title,
      category: found.category.title,
      parent: found.category,
      data: found.subcategory
    });
  }

  function selectCategoryById(id) {
    const category = getCategoryById(id);
    if (!category) return;

    selectItem({
      type: 'category',
      id: category.id,
      title: category.title,
      category: category.title,
      parent: null,
      data: category
    });
  }

  function selectEntry(item) {
    results.innerHTML = '';
    searchInput.setAttribute('aria-expanded', 'false');
    topicsPanel.classList.add('hidden');
    browseButton.setAttribute('aria-expanded', 'false');

    if (mode === 'practice' && item.parent) {
      const found = getSubcategoryById(item.parent.id);
      if (found) {
        selectedItem = {
          type: 'subcategory',
          id: found.subcategory.id,
          title: found.subcategory.title,
          category: found.category.title,
          parent: found.category,
          data: found.subcategory
        };
        searchInput.value = item.data.word;
        renderPracticeSubcategory(selectedItem);
        scrollVocabularyContentTop(practiceContent);
        return;
      }
    }

    selectedItem = item;
    searchInput.value = item.data.word;
    renderWordResult(item);
  }

  function resetVocabulary() {
    session.questions = [];
    selectedItem = null;
    mode = 'learn';
    activeExercise = 'match';

    searchInput.value = '';
    results.innerHTML = '';
    searchInput.setAttribute('aria-expanded', 'false');
    topicsPanel.innerHTML = '';
    topicsPanel.classList.add('hidden');
    browseButton.setAttribute('aria-expanded', 'false');
    learnContent.innerHTML = '';
    practiceContent.innerHTML = '';
    exerciseTabs.innerHTML = '';
    exerciseTabs.classList.add('hidden');

    document.querySelectorAll('[data-vocabulary-tab]').forEach((item) => {
      const active = item.dataset.vocabularyTab === 'learn';
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    });

    document.getElementById('vocabularyLearnPanel').classList.remove('hidden');
    document.getElementById('vocabularyPracticePanel').classList.add('hidden');
    searchInput.focus();
  }

  function renderEntries(entries) {
    if (!entries.length) {
      return '<p class="vocabulary-no-results">Este contenido todavía no tiene palabras cargadas.</p>';
    }

    return `<div class="vocabulary-entry-list">${entries.map((entry) => `
      <article class="vocabulary-entry">
        <div>
          <div class="vocabulary-entry-word">
            <strong>${entry.emoji ? escapeHtml(entry.emoji) + ' ' : ''}${displayWord(entry)}</strong>
            ${pronunciationButton(entry)}
          </div>
          <span>${escapeHtml(entry.articleEs || '')} ${escapeHtml(entry.translation || '')}</span>
        </div>
      </article>`).join('')}</div>`;
  }

  function renderLearn(item) {
    const title = escapeHtml(item.title);

    if (item.type === 'category') {
      const subcategories = item.data.subcategories || [];
      learnContent.innerHTML = `<div class="vocabulary-result-content">
        ${vocabularyBreadcrumb(item)}
        <div class="section-head">
          <div><span class="tag">Categoría</span><h2>${title}</h2></div>
          <p>Selecciona una subcategoría para ver su vocabulario.</p>
        </div>
        <div class="vocabulary-topics">
          ${subcategories.map((subcategory) => `
            <button type="button" class="vocabulary-topic-option" data-id="${escapeHtml(subcategory.id)}">
              <strong>${escapeHtml(subcategory.title)}</strong>
              <small>${(subcategory.entries || []).length} palabras</small>
            </button>`).join('')}
        </div>
      </div>`;
      bindSubcategoryButtons(learnContent);
      bindVocabularyNavigation(learnContent);
      return;
    }

    if (item.type === 'subcategory') {
      learnContent.innerHTML = `<div class="vocabulary-result-content">
        ${vocabularyBreadcrumb(item)}
        <div class="section-head">
          <div><span class="tag">Subcategoría</span><h2>${title}</h2></div>
          <p>${escapeHtml(item.parent.title)}</p>
        </div>
        ${renderEntries(getEntries(item))}
        ${subcategoryNavigation(item)}
      </div>`;
      bindAudio(learnContent);
      bindVocabularyNavigation(learnContent);
    }
  }

  function renderWordResult(item) {
    const entry = item.data;
    const contexts = Array.isArray(item.contexts) && item.contexts.length
      ? item.contexts
      : [{ category: item.categoryData || item.category, subcategory: item.parent }];

    const uniqueContexts = [];
    const seenContexts = new Set();
    contexts.forEach((context) => {
      const key = context.category.id + '|' + context.subcategory.id;
      if (!seenContexts.has(key)) {
        seenContexts.add(key);
        uniqueContexts.push(context);
      }
    });

    const categoryCount = new Set(uniqueContexts.map((context) => context.category.id)).size;

    learnContent.innerHTML = `<div class="vocabulary-result-content">
      ${uniqueContexts.length === 1 ? vocabularyBreadcrumb({ type: 'subcategory', id: uniqueContexts[0].subcategory.id, title: uniqueContexts[0].subcategory.title, parent: uniqueContexts[0].category }) : ''}
      <div class="section-head">
        <div><span class="tag">Palabra</span><h2>${escapeHtml(entry.word)}</h2></div>
        <p>${escapeHtml(uniqueContexts.length === 1 ? uniqueContexts[0].category.title : 'Selecciona el contexto que quieres consultar.')}</p>
      </div>
      <div class="vocabulary-entry-list">
        <article class="vocabulary-entry">
          <div class="vocabulary-entry-word">
            <strong>${entry.emoji ? escapeHtml(entry.emoji) + ' ' : ''}${displayWord(entry)}</strong>
            ${pronunciationButton(entry)}
          </div>
          <span>${escapeHtml(entry.articleEs || '')} ${escapeHtml(entry.translation || '')}</span>
        </article>
      </div>
      <div class="vocabulary-word-context">
        ${uniqueContexts.map((context) => `
          <button type="button" class="btn secondary vocabulary-word-context-button" data-word-subcategory="${escapeHtml(context.subcategory.id)}">
            <span class="vocabulary-nav-label">${escapeHtml(categoryCount > 1 ? context.category.title + ' · ' : '')}${escapeHtml(context.subcategory.title)}</span>
            <span class="vocabulary-nav-arrow" aria-hidden="true">→</span>
          </button>`).join('')}
      </div>
    </div>`;

    bindAudio(learnContent);
    bindVocabularyNavigation(learnContent);

    learnContent.querySelectorAll('[data-word-subcategory]').forEach((button) => {
      button.addEventListener('click', () => selectSubcategoryById(button.dataset.wordSubcategory));
    });

    practiceContent.innerHTML = '';
    exerciseTabs.innerHTML = '';
    exerciseTabs.classList.add('hidden');
  }
  function renderPracticeCategory(item) {
    practiceContent.innerHTML = `<div class="vocabulary-result-content">
      ${vocabularyBreadcrumb(item)}
      <div class="section-head">
        <div><span class="tag">Práctica</span><h2>${escapeHtml(item.title)}</h2></div>
        <p>Selecciona una subcategoría para practicar su vocabulario.</p>
      </div>
      <div class="vocabulary-topics">
        ${(item.data.subcategories || []).map((subcategory) => `
          <button type="button" class="vocabulary-topic-option" data-id="${escapeHtml(subcategory.id)}">
            <strong>${escapeHtml(subcategory.title)}</strong>
            <small>${(subcategory.entries || []).length} palabras</small>
          </button>`).join('')}
      </div>
    </div>`;
    bindSubcategoryButtons(practiceContent);
    bindVocabularyNavigation(practiceContent);
    exerciseTabs.innerHTML = '';
    exerciseTabs.classList.add('hidden');
  }

  function renderExerciseTabs() {
    exerciseTabs.innerHTML = EXERCISES.map((exercise, index) => `
      <button type="button"
        class="vocabulary-exercise-tab${exercise.id === activeExercise ? ' active' : ''}"
        role="tab"
        aria-selected="${String(exercise.id === activeExercise)}"
        aria-controls="vocabularyPracticeContent"
        data-exercise="${exercise.id}">
        <span>${exercise.label}</span>
        <small>${index + 1}</small>
      </button>`).join('');

    exerciseTabs.classList.remove('hidden');

    exerciseTabs.querySelectorAll('[data-exercise]').forEach((button) => {
      button.addEventListener('click', () => {
        const scrollPosition = window.scrollY;
        activeExercise = button.dataset.exercise;
        renderExerciseTabs();
        renderPracticeSubcategory(selectedItem);
        requestAnimationFrame(() => {
          window.scrollTo({ top: scrollPosition, behavior: 'auto' });
        });
      });
    });
  }

  function exerciseHeader(exercise) {
    return `<div class="vocabulary-exercise-head">
      <div>
        <span class="tag">${escapeHtml(exercise.label)}</span>
        <h2>${escapeHtml(exercise.title)}</h2>
      </div>
      <p>${escapeHtml(exercise.description)}</p>
    </div>`;
  }

  function feedbackHtml(correct, answer) {
    return correct
      ? '<div class="vocabulary-exercise-feedback correct" role="status">Correcto.</div>'
      : `<div class="vocabulary-exercise-feedback wrong" role="status">Incorrecto. Respuesta: <strong>${escapeHtml(answer)}</strong></div>`;
  }

  async function iniciarSesionPracticaVocabulario(item) {
    const entries = getEntries(item);
    if (!item || item.type !== 'subcategory' || !entries.length) {
      session.questions = [];
      return [];
    }

    const limite = Math.min(15, entries.length);
    const api = getVocabularyApi();
    const adapter = getVocabularyAdapter();

    try {
      const questions = await api.generarEjercicioVocabularioDesdeBackend({
        categoryId: item.parent.id,
        subcategoryId: item.id,
        type: 'multiple_choice',
        limite
      });

      session.questions = questions.map((question) =>
        adapter.adaptarPreguntaVocabulario(question)
      );

      return session.questions;
    } catch (error) {
      session.questions = [];
      practiceContent.innerHTML = `
        <div class="vocabulary-practice-card">
          <strong>No se pudo generar el ejercicio.</strong>
          <p>${escapeHtml(error.message || 'Error desconocido.')}</p>
        </div>`;
      console.error('[COQ VOCABULARIO]', error);
      return [];
    }
  }

  function renderMatchExercise(questions) {
    const selected = Array.isArray(questions) ? questions.slice() : [];
    if (!selected.length) return;

    let index = 0;
    let matched = 0;

    practiceContent.innerHTML = `${vocabularyBreadcrumb(selectedItem)}${exerciseHeader(EXERCISES[0])}
      <div class="vocabulary-exercise-meta">
        <span>${selected.length} palabras</span>
        <span class="vocabulary-match-progress">0 / ${selected.length} asociadas</span>
      </div>
      <div class="vocabulary-match-single" data-match-board>
        <div class="vocabulary-match-current">
          <span class="vocabulary-match-label">Español</span>
          <button type="button" class="vocabulary-match-card vocabulary-match-source" data-current-source disabled></button>
          <p class="vocabulary-match-instruction">Selecciona su palabra en francés.</p>
        </div>
        <div class="vocabulary-match-target-panel">
          <span class="vocabulary-match-label">Français</span>
          <div class="vocabulary-match-list" data-match-options></div>
        </div>
      </div>`;

    const source = practiceContent.querySelector('[data-current-source]');
    const options = practiceContent.querySelector('[data-match-options]');
    const progress = practiceContent.querySelector('.vocabulary-match-progress');

    function showQuestion() {
      const question = selected[index];
      source.textContent = question.prompt;
      source.dataset.matchId = question.id;

      options.innerHTML = shuffle(question.options).map((option) => `
        <button type="button" class="vocabulary-match-card vocabulary-match-target" data-answer="${escapeHtml(option)}">
          ${escapeHtml(option)}
        </button>`).join('');

      options.querySelectorAll('.vocabulary-match-target').forEach((target) => {
        target.addEventListener('click', () => {
          if (target.disabled) return;

          const correct = normalize(target.dataset.answer) === normalize(question.correctAnswer);

          if (correct) {
            target.disabled = true;
            target.classList.add('matched');
            source.classList.add('matched');
            matched += 1;
            progress.textContent = `${matched} / ${selected.length} asociadas`;

            window.setTimeout(() => {
              index += 1;
              if (index >= selected.length) finish();
              else {
                source.classList.remove('matched');
                showQuestion();
              }
            }, 450);
          } else {
            target.classList.add('wrong');
            window.setTimeout(() => target.classList.remove('wrong'), 400);
          }
        });
      });
    }

    function finish() {
      session.questions = [];
      practiceContent.querySelector('[data-match-board]').innerHTML = `
        <div class="vocabulary-exercise-final">
          <strong>Ejercicio terminado</strong>
          <p>Todas las parejas están asociadas.</p>
          <p>Resultado: ${matched} / ${selected.length}</p>
          <button type="button" class="btn secondary" data-restart-exercise>Generar otras palabras</button>
        </div>`;
      bindRestartButton();
    }

    showQuestion();
    bindRestartButton();
    practiceContent.insertAdjacentHTML('beforeend', exerciseNavigation());
    bindVocabularyNavigation(practiceContent);
    bindExerciseNavigation();
  }

  function renderWriteExercise(entries) {
    const selected = sampleEntries(entries);
    let index = 0;
    let correctCount = 0;

    practiceContent.innerHTML = `${vocabularyBreadcrumb(selectedItem)}${exerciseHeader(EXERCISES[1])}
      <div class="vocabulary-exercise-meta">
        <span>${selected.length} palabras</span>
        <span class="vocabulary-write-progress">1 / ${selected.length}</span>
      </div>
      <div class="vocabulary-write-card">
        <span class="vocabulary-write-label">Escribe en francés:</span>
        <strong class="vocabulary-write-prompt"></strong>
        <p class="vocabulary-write-instruction">
          <span>Escribe la palabra en francés.</span>
          <span>Si es un sustantivo, traduce también el artículo que aparece con la palabra.</span>
          <span>Si es un adjetivo, escribe solo el adjetivo.</span>
        </p>
        <input id="vocabularyWriteInput" class="vocabulary-write-input" type="text" autocomplete="off" spellcheck="false">
        <button type="button" class="btn primary" data-check-write>Comprobar</button>
        <div class="vocabulary-write-feedback" aria-live="polite"></div>
      </div>`;

    const prompt = practiceContent.querySelector('.vocabulary-write-prompt');
    const input = practiceContent.querySelector('.vocabulary-write-input');
    const check = practiceContent.querySelector('[data-check-write]');
    const feedback = practiceContent.querySelector('.vocabulary-write-feedback');
    const progress = practiceContent.querySelector('.vocabulary-write-progress');

    function showQuestion() {
      const entry = selected[index];
      prompt.textContent = [entry.articleEs, entry.translation].filter(Boolean).join(' ');
      input.value = '';
      input.disabled = false;
      check.disabled = false;
      feedback.innerHTML = '';
      input.focus();
      progress.textContent = `${index + 1} / ${selected.length}`;
    }

    function finish() {
      practiceContent.querySelector('.vocabulary-write-card').innerHTML = `
        <div class="vocabulary-exercise-final">
          <strong>Ejercicio terminado</strong>
          <p>Resultado: ${correctCount} / ${selected.length}</p>
          <button type="button" class="btn secondary" data-restart-exercise>Generar otras palabras</button>
        </div>`;
      bindRestartButton();
    }

    function submit() {
      if (input.disabled) return;

      const entry = selected[index];
      const answer = normalize(input.value);
      const expected = normalize(formatFrenchWord(entry));
      const correct = answer === expected;

      if (correct) {
        correctCount += 1;
        feedback.innerHTML = feedbackHtml(true, formatFrenchWord(entry));
      } else {
        feedback.innerHTML = feedbackHtml(false, formatFrenchWord(entry));
      }

      input.disabled = true;
      check.disabled = true;

      window.setTimeout(() => {
        index += 1;
        if (index >= selected.length) finish();
        else showQuestion();
      }, 900);
    }

    check.addEventListener('click', submit);
    input.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') submit();
    });

    showQuestion();
    practiceContent.insertAdjacentHTML('beforeend', exerciseNavigation());
    bindVocabularyNavigation(practiceContent);
    bindExerciseNavigation();
  }

  function buildAudioOptions(entry, entries) {
    const distractors = shuffle(entries.filter((item) => item.id !== entry.id)).slice(0, Math.min(3, entries.length - 1));
    return shuffle([entry, ...distractors]);
  }

  function renderAudioExercise(entries) {
    const selected = sampleEntries(entries);
    let index = 0;
    let correctCount = 0;

    practiceContent.innerHTML = `${vocabularyBreadcrumb(selectedItem)}${exerciseHeader(EXERCISES[2])}
      <div class="vocabulary-exercise-meta"><span>${selected.length} palabras</span><span class="vocabulary-audio-progress">1 / ${selected.length}</span></div>
      <div class="vocabulary-audio-card">
        <p>Escucha y selecciona la palabra correcta.</p>
        <button type="button" class="vocabulary-audio-button" data-audio-play aria-label="Reproducir palabra">▶ Escuchar</button>
        <div class="vocabulary-audio-options" data-audio-options></div>
        <div class="vocabulary-audio-feedback" aria-live="polite"></div>
      </div>`;

    const play = practiceContent.querySelector('[data-audio-play]');
    const options = practiceContent.querySelector('[data-audio-options]');
    const feedback = practiceContent.querySelector('.vocabulary-audio-feedback');
    const progress = practiceContent.querySelector('.vocabulary-audio-progress');

    function speakCurrent() {
      const entry = selected[index];
      if (window.Coqaudio && typeof window.Coqaudio.speak === 'function') {
        const phrase = formatFrenchWord(entry);
        window.Coqaudio.speak(phrase);
      } else if ('speechSynthesis' in window) {
        const phrase = formatFrenchWord(entry);
        const utterance = new SpeechSynthesisUtterance(phrase);
        utterance.lang = 'fr-FR';
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
      }
    }

    function showQuestion() {
      const entry = selected[index];
      progress.textContent = `${index + 1} / ${selected.length}`;
      feedback.innerHTML = '';
      options.innerHTML = buildAudioOptions(entry, selected).map((option) => `
        <button type="button" class="vocabulary-audio-option" data-answer-id="${escapeHtml(option.id)}">
          ${displayWord(option)}
        </button>`).join('');
      options.querySelectorAll('[data-answer-id]').forEach((button) => {
        button.addEventListener('click', () => {
          if (button.disabled) return;
          const correct = button.dataset.answerId === entry.id;
          if (correct) correctCount += 1;
          options.querySelectorAll('button').forEach((item) => { item.disabled = true; });
          button.classList.add(correct ? 'correct' : 'wrong');
          if (!correct) {
            const right = options.querySelector(`[data-answer-id="${CSS.escape(entry.id)}"]`);
            if (right) right.classList.add('correct');
          }
          feedback.innerHTML = feedbackHtml(correct, formatFrenchWord(entry));
          window.setTimeout(() => {
            index += 1;
            if (index >= selected.length) finish();
            else showQuestion();
          }, 850);
        });
      });
    }

    function finish() {
      practiceContent.querySelector('.vocabulary-audio-card').innerHTML = `
        <div class="vocabulary-exercise-final">
          <strong>Ejercicio terminado</strong>
          <p>Resultado: ${correctCount} / ${selected.length}</p>
          <button type="button" class="btn secondary" data-restart-exercise>Generar otras palabras</button>
        </div>`;
      bindRestartButton();
    }

    play.addEventListener('click', speakCurrent);
    showQuestion();
    practiceContent.insertAdjacentHTML('beforeend', exerciseNavigation());
    bindVocabularyNavigation(practiceContent);
    bindExerciseNavigation();
  }

  async function renderPracticeSubcategory(item) {
    if (!item || item.type !== 'subcategory') return;

    const entries = getEntries(item);
    if (!entries.length) {
      session.questions = [];
      exerciseTabs.classList.add('hidden');
      practiceContent.innerHTML = '<div class="vocabulary-practice-card"><strong>Sin vocabulario</strong><p>Esta subcategoría todavía no tiene palabras cargadas.</p></div>';
      return;
    }

    renderExerciseTabs();

    if (activeExercise === 'match') {
      practiceContent.innerHTML = '<div class="vocabulary-practice-card"><p>Generando ejercicio…</p></div>';
      const questions = await iniciarSesionPracticaVocabulario(item);
      if (questions.length) renderMatchExercise(session.questions);
      return;
    }

    session.questions = [];

    if (activeExercise === 'write') renderWriteExercise(entries);
    else if (activeExercise === 'audio') renderAudioExercise(entries);
    else renderMatchExercise(session.questions);
  }

  function renderPractice(item) {
    if (item.type === 'category') {
      renderPracticeCategory(item);
      return;
    }

    if (item.type === 'subcategory') {
      renderPracticeSubcategory(item);
    }
  }

  function bindRestartButton() {
    const button = practiceContent.querySelector('[data-restart-exercise]');
    if (button) button.addEventListener('click', () => renderPracticeSubcategory(selectedItem));
  }

  function bindSubcategoryButtons(container) {
    container.querySelectorAll('[data-id]').forEach((button) => {
      button.addEventListener('click', () => selectSubcategoryById(button.dataset.id));
    });
  }

  function renderContent() {
    if (!selectedItem) return;

    if (selectedItem.type === 'entry') {
      if (mode === 'practice' && selectedItem.parent) {
        const found = getSubcategoryById(selectedItem.parent.id);
        if (found) {
          const entryWord = selectedItem.data.word;
          selectedItem = {
            type: 'subcategory',
            id: found.subcategory.id,
            title: found.subcategory.title,
            category: found.category.title,
            parent: found.category,
            data: found.subcategory
          };
          searchInput.value = entryWord;
          renderPracticeSubcategory(selectedItem);
          return;
        }
      }

      renderWordResult(selectedItem);
      return;
    }

    if (mode === 'learn') renderLearn(selectedItem);
    else renderPractice(selectedItem);
  }

  function resultContextKey(item) {
    if (!item || item.type !== 'entry') return '';
    return normalize(item.data.word);
  }

  function shouldShowEntryContext(item, entryMatches) {
    if (!item || item.type !== 'entry') return false;

    const key = resultContextKey(item);
    return entryMatches.filter((match) => resultContextKey(match) === key).length > 1;
  }

  function renderEntryResult(item, index) {
    const entry = item.data;
    const word = formatFrenchWord(entry);
    const translation = [entry.articleEs, entry.translation].filter(Boolean).join(' ');

    const contexts = Array.isArray(item.contexts) ? item.contexts : [];
    const uniqueContexts = [];
    const seenContexts = new Set();

    contexts.forEach((context) => {
      if (!context || !context.category || !context.subcategory) return;

      const key = context.category.id + '|' + context.subcategory.id;
      if (seenContexts.has(key)) return;

      seenContexts.add(key);
      uniqueContexts.push(context);
    });

    const contextHtml = uniqueContexts.length
      ? `<div class="vocabulary-result-context" aria-label="Categoría y subcategoría">
          ${uniqueContexts.map((context, contextIndex) => `
            ${contextIndex > 0 ? '<span class="vocabulary-result-context-separator"> / </span>' : ''}
            <span>${escapeHtml(context.category.title)} · ${escapeHtml(context.subcategory.title)}</span>
          `).join('')}
        </div>`
      : '';

    return `<button type="button" class="vocabulary-result vocabulary-result-entry" data-result-index="${index}">
      <span class="vocabulary-result-main">
        <strong>${entry.emoji ? escapeHtml(entry.emoji) + ' ' : ''}${escapeHtml(word)}</strong>
        <span class="vocabulary-result-separator">/</span>
        <span class="vocabulary-result-translation">${escapeHtml(translation)}</span>
      </span>
      ${contextHtml}
    </button>`;
  }

  async function renderResults(query) {
    const term = normalize(query);
    if (!term) {
      results.innerHTML = '';
      searchInput.setAttribute('aria-expanded', 'false');
      return;
    }

    await ensureAllLoaded();
    if (normalize(searchInput.value) !== term) return;

    const matches = searchableItems(query);

    if (!matches.length) {
      results.innerHTML = '<div class="vocabulary-no-results">No hay coincidencias.</div>';
      searchInput.setAttribute('aria-expanded', 'true');
      return;
    }

    results.innerHTML = matches.map((item, index) => {
      if (item.type === 'entry') {
        return renderEntryResult(item, index);
      }

      return `<button type="button" class="vocabulary-result" data-result-index="${index}">
        <strong>${escapeHtml(item.title)}</strong>
        <small>${escapeHtml(item.category)}</small>
      </button>`;
    }).join('');

    results.querySelectorAll('[data-result-index]').forEach((button) => {
      button.addEventListener('click', () => {
        const item = matches[Number(button.dataset.resultIndex)];
        if (item.type === 'entry') selectEntry(item);
        else selectItem(item);
      });
    });

    searchInput.setAttribute('aria-expanded', 'true');
  }

  function renderAllCategories() {
    topicsPanel.innerHTML = database.manifest.map((descriptor) => `
      <section class="vocabulary-category-group">
        <button type="button" class="vocabulary-category-option" data-category-id="${escapeHtml(descriptor.id)}" aria-expanded="false">
          <strong>${escapeHtml(descriptor.title)}</strong><span aria-hidden="true">▾</span>
        </button>
        <div class="vocabulary-subcategories hidden" data-subcategories-for="${escapeHtml(descriptor.id)}"></div>
      </section>`).join('');

    topicsPanel.querySelectorAll('[data-category-id]').forEach((button) => {
      button.addEventListener('click', async () => {
        const categoryId = button.dataset.categoryId;
        const subcategories = topicsPanel.querySelector(`[data-subcategories-for="${CSS.escape(categoryId)}"]`);
        if (!subcategories) return;

        const open = !subcategories.classList.contains('hidden');
        if (open) {
          subcategories.classList.add('hidden');
          button.setAttribute('aria-expanded', 'false');
          return;
        }

        button.disabled = true;
        try {
          const category = await ensureCategoryLoaded(categoryId);
          subcategories.innerHTML = (category.subcategories || []).map((subcategory) => `
            <button type="button" class="vocabulary-topic-option" data-id="${escapeHtml(subcategory.id)}">
              <strong>${escapeHtml(subcategory.title)}</strong>
              <small>${(subcategory.entries || []).length} palabras</small>
            </button>`).join('');
          bindSubcategoryButtons(subcategories);
          subcategories.classList.remove('hidden');
          button.setAttribute('aria-expanded', 'true');
        } catch (error) {
          subcategories.innerHTML = '<p class="vocabulary-no-results">No se pudo cargar esta categoría.</p>';
          subcategories.classList.remove('hidden');
          button.setAttribute('aria-expanded', 'true');
          console.error(error);
        } finally {
          button.disabled = false;
        }
      });
    });
  }

  searchInput.addEventListener('input', () => {
    if (!searchInput.value.trim()) {
      results.innerHTML = '';
      searchInput.setAttribute('aria-expanded', 'false');
      return;
    }
    renderResults(searchInput.value).catch((error) => {
      results.innerHTML = '<div class="vocabulary-no-results">No se pudo realizar la búsqueda.</div>';
      searchInput.setAttribute('aria-expanded', 'true');
      console.error(error);
    });
  });

  browseButton.addEventListener('click', () => {
    const open = !topicsPanel.classList.contains('hidden');
    topicsPanel.classList.toggle('hidden', open);
    browseButton.setAttribute('aria-expanded', String(!open));
    if (!open) renderAllCategories();
  });

  resetButton.addEventListener('click', resetVocabulary);

  document.querySelectorAll('[data-vocabulary-tab]').forEach((button) => {
    button.addEventListener('click', () => {
      mode = button.dataset.vocabularyTab;

      document.querySelectorAll('[data-vocabulary-tab]').forEach((item) => {
        const active = item === button;
        item.classList.toggle('active', active);
        item.setAttribute('aria-selected', String(active));
      });

      document.getElementById('vocabularyLearnPanel').classList.toggle('hidden', mode !== 'learn');
      document.getElementById('vocabularyPracticePanel').classList.toggle('hidden', mode !== 'practice');

      renderContent();
    });
  });
})();
