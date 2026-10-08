/* COQ — Números cardinales y ordinales */
(function () {
  'use strict';

  const makeEntries = (prefix, pairs) => pairs.map(([word, translation], index) => ({
    id: 'numbers-' + prefix + '-' + String(index + 1).padStart(2, '0'),
    word,
    translation
  }));

  const category = {
    id: 'numbers-cardinal-ordinal',
    title: 'Números cardinales y ordinales',
    subcategories: [
      {
        id: 'cardinal-0-19',
        title: 'Cardinales 0–19',
        entries: makeEntries('cardinal-0-19', [
          ['zéro','cero'],['un','uno'],['deux','dos'],['trois','tres'],['quatre','cuatro'],
          ['cinq','cinco'],['six','seis'],['sept','siete'],['huit','ocho'],['neuf','nueve'],
          ['dix','diez'],['onze','once'],['douze','doce'],['treize','trece'],['quatorze','catorce'],
          ['quinze','quince'],['seize','dieciséis'],['dix-sept','diecisiete'],['dix-huit','dieciocho'],['dix-neuf','diecinueve']
        ])
      },
      {
        id: 'cardinal-20-39',
        title: 'Cardinales 20–39',
        entries: makeEntries('cardinal-20-39', [
          ['vingt','veinte'],['vingt et un','veintiuno'],['vingt-deux','veintidós'],['vingt-trois','veintitrés'],
          ['vingt-quatre','veinticuatro'],['vingt-cinq','veinticinco'],['vingt-six','veintiséis'],['vingt-sept','veintisiete'],
          ['vingt-huit','veintiocho'],['vingt-neuf','veintinueve'],['trente','treinta'],['trente et un','treinta y uno'],
          ['trente-deux','treinta y dos'],['trente-trois','treinta y tres'],['trente-quatre','treinta y cuatro'],
          ['trente-cinq','treinta y cinco'],['trente-six','treinta y seis'],['trente-sept','treinta y siete'],
          ['trente-huit','treinta y ocho'],['trente-neuf','treinta y nueve']
        ])
      },
      {
        id: 'cardinal-40-59',
        title: 'Cardinales 40–59',
        entries: makeEntries('cardinal-40-59', [
          ['quarante','cuarenta'],['quarante et un','cuarenta y uno'],['quarante-deux','cuarenta y dos'],
          ['quarante-trois','cuarenta y tres'],['quarante-quatre','cuarenta y cuatro'],['quarante-cinq','cuarenta y cinco'],
          ['quarante-six','cuarenta y seis'],['quarante-sept','cuarenta y siete'],['quarante-huit','cuarenta y ocho'],
          ['quarante-neuf','cuarenta y nueve'],['cinquante','cincuenta'],['cinquante et un','cincuenta y uno'],
          ['cinquante-deux','cincuenta y dos'],['cinquante-trois','cincuenta y tres'],['cinquante-quatre','cincuenta y cuatro'],
          ['cinquante-cinq','cincuenta y cinco'],['cinquante-six','cincuenta y seis'],['cinquante-sept','cincuenta y siete'],
          ['cinquante-huit','cincuenta y ocho'],['cinquante-neuf','cincuenta y nueve']
        ])
      },
      {
        id: 'cardinal-60-79',
        title: 'Cardinales 60–79',
        entries: makeEntries('cardinal-60-79', [
          ['soixante','sesenta'],['soixante et un','sesenta y uno'],['soixante-deux','sesenta y dos'],
          ['soixante-trois','sesenta y tres'],['soixante-quatre','sesenta y cuatro'],['soixante-cinq','sesenta y cinco'],
          ['soixante-six','sesenta y seis'],['soixante-sept','sesenta y siete'],['soixante-huit','sesenta y ocho'],
          ['soixante-neuf','sesenta y nueve'],['soixante-dix','setenta'],['soixante et onze','setenta y uno'],
          ['soixante-douze','setenta y dos'],['soixante-treize','setenta y tres'],['soixante-quatorze','setenta y cuatro'],
          ['soixante-quinze','setenta y cinco'],['soixante-seize','setenta y seis'],['soixante-dix-sept','setenta y siete'],
          ['soixante-dix-huit','setenta y ocho'],['soixante-dix-neuf','setenta y nueve']
        ])
      },
      {
        id: 'cardinal-80-99',
        title: 'Cardinales 80–99',
        entries: makeEntries('cardinal-80-99', [
          ['quatre-vingts','ochenta'],['quatre-vingt-un','ochenta y uno'],['quatre-vingt-deux','ochenta y dos'],
          ['quatre-vingt-trois','ochenta y tres'],['quatre-vingt-quatre','ochenta y cuatro'],['quatre-vingt-cinq','ochenta y cinco'],
          ['quatre-vingt-six','ochenta y seis'],['quatre-vingt-sept','ochenta y siete'],['quatre-vingt-huit','ochenta y ocho'],
          ['quatre-vingt-neuf','ochenta y nueve'],['quatre-vingt-dix','noventa'],['quatre-vingt-onze','noventa y uno'],
          ['quatre-vingt-douze','noventa y dos'],['quatre-vingt-treize','noventa y tres'],['quatre-vingt-quatorze','noventa y cuatro'],
          ['quatre-vingt-quinze','noventa y cinco'],['quatre-vingt-seize','noventa y seis'],['quatre-vingt-dix-sept','noventa y siete'],
          ['quatre-vingt-dix-huit','noventa y ocho'],['quatre-vingt-dix-neuf','noventa y nueve']
        ])
      },
      {
        id: 'cardinal-round-numbers',
        title: 'Cardinales redondos',
        entries: makeEntries('cardinal-round', [
          ['cent','cien'],['deux cents','doscientos'],['trois cents','trescientos'],['quatre cents','cuatrocientos'],
          ['cinq cents','quinientos'],['six cents','seiscientos'],['sept cents','setecientos'],['huit cents','ochocientos'],
          ['neuf cents','novecientos'],['mille','mil'],['dix mille','diez mil'],['cent mille','cien mil'],
          ['un million','un millón'],['dix millions','diez millones'],['un milliard','mil millones']
        ])
      },
      {
        id: 'ordinal-1-19',
        title: 'Ordinales 1–19',
        entries: makeEntries('ordinal-1-19', [
          ['premier','primero'],['première','primera'],['deuxième','segundo'],['troisième','tercero'],
          ['quatrième','cuarto'],['cinquième','quinto'],['sixième','sexto'],['septième','séptimo'],
          ['huitième','octavo'],['neuvième','noveno'],['dixième','décimo'],['onzième','undécimo'],
          ['douzième','duodécimo'],['treizième','decimotercero'],['quatorzième','decimocuarto'],
          ['quinzième','decimoquinto'],['seizième','decimosexto'],['dix-septième','decimoséptimo'],
          ['dix-huitième','decimoctavo'],['dix-neuvième','decimonoveno']
        ])
      },
      {
        id: 'ordinal-tens-and-1000',
        title: 'Ordinales de las decenas y 1000',
        entries: makeEntries('ordinal-tens-and-1000', [
          ['vingtième','vigésimo'],['trentième','trigésimo'],['quarantième','cuadragésimo'],
          ['cinquantième','quincuagésimo'],['soixantième','sexagésimo'],['soixante-dixième','septuagésimo'],
          ['quatre-vingtième','octogésimo'],['quatre-vingt-dixième','nonagésimo'],['centième','centésimo'],
          ['millième','milésimo']
        ])
      }
    ]
  };

  if (window.COQ_VOCABULARY_DATABASE_API) {
    window.COQ_VOCABULARY_DATABASE_API.registerCategory(category);
  }
})();