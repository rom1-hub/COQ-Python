#!/usr/bin/env node
/* COQ — Migración de catálogos de verbos JS → JSON canónico.
 *
 * Fuente:
 *   data/verbs/local-database.js
 *   data/verbs/family-catalog.js
 *   data/verbs/patterns.js
 *   data/verbs/tense-rules.js
 *
 * Salida:
 *   backend/data/verbs/verbs.json
 *   backend/data/verbs/families.json
 *   backend/data/verbs/patterns.json
 *   backend/data/verbs/tense-rules.json
 *
 * Este script no genera lógica de conjugación. Solo normaliza datos declarativos.
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const SOURCE_DIR = path.join(ROOT, 'data', 'verbs');
const OUTPUT_DIR = path.join(ROOT, 'backend', 'data', 'verbs');

function loadWindow(fileName) {
  const file = path.join(SOURCE_DIR, fileName);
  if (!fs.existsSync(file)) {
    throw new Error(`No existe la fuente requerida: ${file}`);
  }

  const context = { window: {} };
  vm.runInNewContext(
    fs.readFileSync(file, 'utf8'),
    context,
    { filename: file, timeout: 30000 }
  );
  return context.window;
}

function writeJson(fileName, value) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  const target = path.join(OUTPUT_DIR, fileName);
  fs.writeFileSync(
    target,
    JSON.stringify(value, null, 2) + '\n',
    'utf8'
  );
}

function requireObject(value, label) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    throw new Error(`${label} debe ser un objeto.`);
  }
  return value;
}

const database = loadWindow('local-database.js');
const familyWindow = loadWindow('family-catalog.js');
const patternWindow = loadWindow('patterns.js');
const tenseWindow = loadWindow('tense-rules.js');

const sourceVerbs = requireObject(database.COQ_VERBS, 'COQ_VERBS');
const sourceFamilies = requireObject(
  familyWindow.COQ_VERB_FAMILIES,
  'COQ_VERB_FAMILIES'
);
const sourcePatterns = requireObject(
  patternWindow.COQ_VERB_PATTERNS,
  'COQ_VERB_PATTERNS'
);
const sourceTenses = requireObject(
  tenseWindow.COQ_TENSE_RULES,
  'COQ_TENSE_RULES'
);

const familyByVerb = {};

for (const [familyId, family] of Object.entries(sourceFamilies)) {
  if (family.id !== familyId) {
    throw new Error(
      `La familia '${familyId}' declara id='${family.id}'.`
    );
  }

  if (!Array.isArray(family.verbs)) {
    throw new Error(
      `La familia '${familyId}' no contiene una lista de verbos válida.`
    );
  }

  for (const infinitif of family.verbs) {
    if (familyByVerb[infinitif]) {
      throw new Error(
        `Un verbo pertenece a más de una familia: ${infinitif}.`
      );
    }

    familyByVerb[infinitif] = {
      familyId,
      patternId: family.patternId,
    };
  }
}

const verbs = {};
const missingFamily = [];
const groupMismatches = [];

for (const [key, source] of Object.entries(sourceVerbs)) {
  const infinitif = source.infinitif || key;
  const relation = familyByVerb[infinitif];
  const id = source.id || key;

  if (!source.formes || typeof source.formes !== 'object') {
    throw new Error(
      `El verbo '${infinitif}' no contiene un bloque 'formes' válido para la regresión legacy.`
    );
  }

  if (!Number.isInteger(source.groupe) || ![1, 2, 3].includes(source.groupe)) {
    throw new Error(
      `El verbo '${infinitif}' tiene un grupo nativo inválido: '${source.groupe}'.`
    );
  }

  let groupe = source.groupe;
  let familyId = null;
  let patternId = null;

  if (relation) {
    if (!sourcePatterns[relation.patternId]) {
      throw new Error(
        `El verbo '${infinitif}' referencia el patrón inexistente '${relation.patternId}'.`
      );
    }

    const canonicalGroup = sourcePatterns[relation.patternId].groupe;

    if (
      Number.isInteger(source.groupe) &&
      Number.isInteger(canonicalGroup) &&
      source.groupe !== canonicalGroup
    ) {
      groupMismatches.push({
        infinitif,
        source: source.groupe,
        canonical: canonicalGroup,
      });
    }

    groupe = canonicalGroup;
    familyId = relation.familyId;
    patternId = relation.patternId;
  } else {
    missingFamily.push(infinitif);
  }

  if (verbs[id]) {
    throw new Error(
      `ID de verbo duplicado durante la migración: '${id}'.`
    );
  }

  verbs[id] = {
    id,
    infinitif,
    infinitif_base: source.infinitif_base || source.verbeBase || infinitif,
    groupe,
    familyId,
    patternId,
    sub_category: source.sub_category ?? null,
    auxiliaire: source.auxiliaire ?? null,
    auxiliaires: Array.isArray(source.auxiliaires)
      ? source.auxiliaires
      : source.auxiliaire
        ? [source.auxiliaire]
        : [],
    pronominal: source.pronominal === true,
    construction: source.construction ?? null,
    participePasse: source.participePasse ?? null,
    verbeBase: source.verbeBase ?? null,
    formePronominale: source.formePronominale ?? null,
    formeNonPronominale: source.formeNonPronominale ?? null,
    variantes: source.variantes ?? null,
    exceptions: source.exceptions ?? null,
    source: source.source ?? null,

    // Transitional regression source. The final Python engine will
    // eventually replace these stored forms.
    _legacy_formes: source.formes,
  };
}

if (missingFamily.length) {
  console.warn(
    `[COQ] ${missingFamily.length} verbos no tienen familia canónica explícita; se incluyen con familyId/patternId=null y sus formas legacy.`
  );
}

const families = {};
for (const [id, family] of Object.entries(sourceFamilies)) {
  families[id] = {
    id: family.id,
    patternId: family.patternId,
    groupe: family.groupe,
  };
}

const patterns = {};
for (const [id, pattern] of Object.entries(sourcePatterns)) {
  patterns[id] = {
    id,
    groupe: pattern.groupe,
    description: pattern.description ?? null,
  };
}

const tenseRules = {};
for (const [id, rule] of Object.entries(sourceTenses)) {
  tenseRules[id] = {
    id,
    type: rule.type,
    mode: rule.mode ?? null,
    auxiliaireTemps: rule.auxiliaireTemps ?? null,
    participe: rule.participe ?? null,
    order: rule.order,
  };
}

writeJson('verbs.json', verbs);
writeJson('families.json', families);
writeJson('patterns.json', patterns);
writeJson('tense-rules.json', tenseRules);

console.log(
  JSON.stringify(
    {
      verbs: Object.keys(verbs).length,
      families: Object.keys(families).length,
      patterns: Object.keys(patterns).length,
      tenseRules: Object.keys(tenseRules).length,
      groupMismatches: groupMismatches.length,
      unmappedSourceVerbs: missingFamily.length,
      outputDir: OUTPUT_DIR,
    },
    null,
    2
  )
);
