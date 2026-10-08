const fs = require('fs');
const vm = require('vm');

const files = [
  'data/verbs/verbs.js',
  'data/verbs/verbs-extended.js',
  'data/verbs/family-catalog.js',
  'data/verbs/canonical-model.js',
  'data/verbs/patterns.js',
  'js/conjugaison/pattern-registry.js'
];

const context = { window: {}, console };
vm.createContext(context);
files.forEach(file => vm.runInContext(fs.readFileSync(file, 'utf8'), context, { filename: file }));

const rawVerbs = context.window.COQ_VERBS || {};
const model = context.window.COQ_CONJ_DATA_MODEL;
const families = context.window.COQ_VERB_FAMILIES || {};
const familyCatalog = context.window.COQ_VERB_FAMILY_CATALOG || {};
const familyIndex = context.window.COQ_VERB_FAMILY_INDEX || {};
const patterns = context.window.COQ_VERB_PATTERNS || {};
const registry = context.window.COQ_PATTERN_REGISTRY;

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(model && model.records && typeof model.get === 'function', 'Canonical data model is missing');
assert(registry && typeof registry.get === 'function', 'Pattern registry is missing');

const familyVerbOwners = new Map();
Object.entries(families).forEach(([id, family]) => {
  assert(family && family.id, 'Family must have an id');
  assert(family.id === id, `Family key/id mismatch for ${id}: got ${family.id}`);
  assert(Array.isArray(family.verbs), `Family ${id} must declare a verbs array`);
  assert(typeof family.patternId === 'string' && family.patternId, `Family ${family.id} has no patternId`);
  assert(Number.isFinite(Number(family.groupe)), `Family ${family.id} has no valid groupe`);
  assert(patterns[family.patternId], `Family ${family.id} points to unknown pattern ${family.patternId}`);
  assert(registry.get(family.patternId), `Family ${family.id} points to pattern without registry generator: ${family.patternId}`);
  family.verbs.forEach(verb => {
    assert(!familyVerbOwners.has(verb), `Duplicate family ownership for ${verb}`);
    familyVerbOwners.set(verb, family.id);
  });
});

Object.keys(rawVerbs).forEach(key => {
  const record = model.get(key);
  assert(record, `Missing canonical record for ${key}`);
  assert(record.id === (rawVerbs[key].id || key), `Canonical id mismatch for ${key}`);
  assert(record.infinitif, `Missing infinitif for ${key}`);
  assert(record.infinitifBase, `Missing infinitifBase for ${key}`);
  assert(Number.isFinite(record.groupe), `Missing numeric groupe for ${key}`);
  assert(record.familyId && families[record.familyId], `Missing/unknown family for ${key}`);
  assert((families[record.familyId].verbs || []).includes(key), `Family ownership missing for ${key}: ${record.familyId}`);
  assert(record.patternId && patterns[record.patternId], `Missing/unknown pattern for ${key}`);
  assert(families[record.familyId].patternId === record.patternId, `Family/pattern mismatch for ${key}`);
  assert(Number(families[record.familyId].groupe) === record.groupe, `Family/groupe mismatch for ${key}`);
  assert(Number(patterns[record.patternId].groupe) === record.groupe, `Pattern/groupe mismatch for ${key}`);
  assert(registry.get(record.patternId), `Pattern without generator for ${key}: ${record.patternId}`);
  assert(record.construction === 'non-pronominale' || record.construction === 'pronominale', `Invalid construction for ${key}`);
  assert(typeof record.pronominal === 'boolean', `Invalid pronominal flag for ${key}`);
  assert(record.pronominal === (record.construction === 'pronominale'), `Construction/pronominal mismatch for ${key}`);
  assert(!Object.prototype.hasOwnProperty.call(record, 'formes'), `Legacy formes leaked into canonical record for ${key}`);

  if (record.pronominal) {
    assert(record.baseVerbId, `Pronominal verb ${key} has no baseVerbId`);
    const baseRecord = model.get(record.baseVerbId);
    assert(baseRecord, `Pronominal verb ${key} points to unknown base verb ${record.baseVerbId}`);
    assert(baseRecord.pronominal === false, `Pronominal base verb ${record.baseVerbId} is itself pronominal`);
    assert(baseRecord.infinitif === record.infinitifBase, `Pronominal/base infinitif mismatch for ${key}`);
    assert(record.formeNonPronominale === baseRecord.infinitif, `Pronominal/non-pronominal form mismatch for ${key}`);
    assert(baseRecord.familyId === record.familyId, `Pronominal/base family mismatch for ${key}`);
    assert(baseRecord.patternId === record.patternId, `Pronominal/base pattern mismatch for ${key}`);
    assert(baseRecord.groupe === record.groupe, `Pronominal/base groupe mismatch for ${key}`);
  } else {
    assert(record.baseVerbId === null, `Non-pronominal verb ${key} unexpectedly has baseVerbId`);
    assert(record.infinitifBase === record.infinitif, `Non-pronominal/base infinitif mismatch for ${key}`);
  }
});

Object.entries(families).forEach(([id, family]) => {
  family.verbs.forEach(verb => {
    assert(rawVerbs[verb], `Family ${id} references unknown verb ${verb}`);
    const record = model.get(verb);
    assert(record.familyId === id, `Canonical family mismatch for ${verb}: expected ${id}, got ${record.familyId}`);
  });
});

const catalogVerbOwners = new Map();
Object.entries(familyCatalog).forEach(([verb, entry]) => {
  assert(entry && families[entry.familyId], `Catalog entry ${verb} points to unknown family ${entry.familyId}`);
  assert(entry.patternId === families[entry.familyId].patternId, `Catalog pattern mismatch for ${verb}`);
  assert(familyIndex[entry.familyId] && familyIndex[entry.familyId].includes(verb), `Family index missing catalog verb ${verb}`);
  assert(!catalogVerbOwners.has(verb), `Duplicate catalog ownership for ${verb}`);
  catalogVerbOwners.set(verb, entry.familyId);
});
Object.entries(familyIndex).forEach(([familyId, verbs]) => {
  assert(families[familyId], `Family index references unknown family ${familyId}`);
  verbs.forEach(verb => {
    assert(familyCatalog[verb], `Family index verb ${verb} is missing from family catalog`);
    assert(familyCatalog[verb].familyId === familyId, `Family index/catalog mismatch for ${verb}`);
  });
});

Object.entries(patterns).forEach(([patternId]) => {
  const owners = Object.values(families).filter(family => family.patternId === patternId);
  assert(owners.length >= 1, `Pattern ${patternId} must belong to at least one family; found ${owners.length}`);
});

const registryGenerators = registry.generators || {};
Object.keys(registryGenerators).forEach(patternId => {
  assert(patterns[patternId], `Registry generator ${patternId} has no official pattern definition`);
  assert(typeof registryGenerators[patternId] === 'function', `Registry generator ${patternId} is not callable`);
});
Object.keys(patterns).forEach(patternId => {
  assert(Object.prototype.hasOwnProperty.call(registryGenerators, patternId), `Official pattern ${patternId} has no registry generator`);
  assert(typeof registryGenerators[patternId] === 'function', `Official pattern ${patternId} registry generator is not callable`);
});

console.log(`✓ Canonical integrity regression passed (${Object.keys(rawVerbs).length} verbs, ${Object.keys(families).length} families, ${Object.keys(patterns).length} patterns).`);
