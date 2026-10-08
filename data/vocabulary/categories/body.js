/* COQ — Vocabulario · Cuerpo y persona
 *
 * Fuente de verdad del contenido de la categoría «Cuerpo y persona».
 * Esta versión modifica únicamente el contenido de la categoría.
 * No modifica el contrato ni la lógica del sistema de vocabulario.
 */
(function () {
  'use strict';

  const category = {
    id: 'body-person',
    title: 'Cuerpo y persona',
    subcategories: [
      {
        id: 'body-head-face',
        title: 'Cabeza y cara',
        entries: [
          { id:'body-head', word:'tête', translation:'cabeza', articleFr:'une', articleEs:'una' },
          { id:'body-face', word:'visage', translation:'cara / rostro', articleFr:'un', articleEs:'una' },
          { id:'body-hair', word:'cheveux', translation:'pelo / cabello', articleFr:'des', articleEs:'el' },
          { id:'body-forehead', word:'front', translation:'frente', articleFr:'un', articleEs:'una' },
          { id:'body-eyebrow', word:'sourcil', translation:'ceja', articleFr:'un', articleEs:'una' },
          { id:'body-eyelash', word:'cil', translation:'pestaña', articleFr:'un', articleEs:'una' },
          { id:'body-eye', word:'œil', translation:'ojo', articleFr:'un', articleEs:'un' },
          { id:'body-eyelid', word:'paupière', translation:'párpado', articleFr:'une', articleEs:'un' },
          { id:'body-ear', word:'oreille', translation:'oreja', articleFr:'une', articleEs:'una' },
          { id:'body-nose', word:'nez', translation:'nariz', articleFr:'un', articleEs:'una' },
          { id:'body-cheek', word:'joue', translation:'mejilla', articleFr:'une', articleEs:'una' },
          { id:'body-mouth', word:'bouche', translation:'boca', articleFr:'une', articleEs:'una' },
          { id:'body-lip', word:'lèvre', translation:'labio', articleFr:'une', articleEs:'un' },
          { id:'body-tooth', word:'dent', translation:'diente', articleFr:'une', articleEs:'un' },
          { id:'body-tongue', word:'langue', translation:'lengua', articleFr:'une', articleEs:'una' },
          { id:'body-chin', word:'menton', translation:'barbilla / mentón', articleFr:'un', articleEs:'una' },
          { id:'body-jaw', word:'mâchoire', translation:'mandíbula', articleFr:'une', articleEs:'una' },
          { id:'body-beard', word:'barbe', translation:'barba', articleFr:'une', articleEs:'una' },
          { id:'body-moustache', word:'moustache', translation:'bigote', articleFr:'une', articleEs:'un' },
          { id:'body-skull', word:'crâne', translation:'cráneo', articleFr:'un', articleEs:'un' },
          { id:'body-nape', word:'nuque', translation:'nuca', articleFr:'une', articleEs:'una' },
          { id:'body-skin', word:'peau', translation:'piel', articleFr:'une', articleEs:'una' },
          { id:'body-wrinkle', word:'ride', translation:'arruga', articleFr:'une', articleEs:'una' },
          { id:'body-throat', word:'gorge', translation:'garganta', articleFr:'une', articleEs:'una' }
        ]
      },
      {
        id: 'body-general',
        title: 'Cuerpo',
        entries: [
          { id:'body-body', word:'corps', translation:'cuerpo', articleFr:'un', articleEs:'un' },
          { id:'body-neck', word:'cou', translation:'cuello', articleFr:'un', articleEs:'un' },
          { id:'body-shoulder', word:'épaule', translation:'hombro', articleFr:'une', articleEs:'un' },
          { id:'body-chest', word:'poitrine', translation:'pecho', articleFr:'une', articleEs:'un' },
          { id:'body-breast', word:'sein', translation:'seno / pecho', articleFr:'un', articleEs:'un' },
          { id:'body-back', word:'dos', translation:'espalda', articleFr:'un', articleEs:'una' },
          { id:'body-belly', word:'ventre', translation:'vientre / barriga', articleFr:'un', articleEs:'un' },
          { id:'body-navel', word:'nombril', translation:'ombligo', articleFr:'un', articleEs:'un' },
          { id:'body-waist', word:'taille', translation:'estatura / cintura / talla', articleFr:'une', articleEs:'una' },
          { id:'body-hip', word:'hanche', translation:'cadera', articleFr:'une', articleEs:'una' },
          { id:'body-pelvis', word:'bassin', translation:'pelvis', articleFr:'un', articleEs:'una' },
          { id:'body-abdomen', word:'abdomen', translation:'abdomen', articleFr:'un', articleEs:'un' },
          { id:'body-stomach', word:'estomac', translation:'estómago', articleFr:'un', articleEs:'un' },
          { id:'body-liver', word:'foie', translation:'hígado', articleFr:'un', articleEs:'un' },
          { id:'body-kidney', word:'rein', translation:'riñón', articleFr:'un', articleEs:'un' },
          { id:'body-intestine', word:'intestin', translation:'intestino', articleFr:'un', articleEs:'un' },
          { id:'body-muscle', word:'muscle', translation:'músculo', articleFr:'un', articleEs:'un' },
          { id:'body-bone', word:'os', translation:'hueso', articleFr:'un', articleEs:'un' },
          { id:'body-skeleton', word:'squelette', translation:'esqueleto', articleFr:'un', articleEs:'un' },
          { id:'body-blood', word:'sang', translation:'sangre', articleFr:'du', articleEs:'—' },
          { id:'body-heart', word:'cœur', translation:'corazón', articleFr:'un', articleEs:'un' },
          { id:'body-lung', word:'poumon', translation:'pulmón', articleFr:'un', articleEs:'un' }
        ]
      },
      {
        id: 'body-hands-arms-feet',
        title: 'Manos, brazos y pies',
        entries: [
          { id:'body-arm', word:'bras', translation:'brazo', articleFr:'un', articleEs:'un' },
          { id:'body-forearm', word:'avant-bras', translation:'antebrazo', articleFr:'un', articleEs:'un' },
          { id:'body-elbow', word:'coude', translation:'codo', articleFr:'un', articleEs:'un' },
          { id:'body-wrist', word:'poignet', translation:'muñeca', articleFr:'un', articleEs:'una' },
          { id:'body-hand', word:'main', translation:'mano', articleFr:'une', articleEs:'una' },
          { id:'body-palm', word:'paume', translation:'palma', articleFr:'une', articleEs:'una' },
          { id:'body-hand-back', word:'dos de la main', translation:'dorso de la mano', articleFr:'un', articleEs:'el' },
          { id:'body-finger', word:'doigt', translation:'dedo', articleFr:'un', articleEs:'un' },
          { id:'body-thumb', word:'pouce', translation:'pulgar', articleFr:'un', articleEs:'un' },
          { id:'body-index-finger', word:'index', translation:'índice', articleFr:'un', articleEs:'un' },
          { id:'body-middle-finger', word:'majeur', translation:'dedo medio', articleFr:'un', articleEs:'un' },
          { id:'body-ring-finger', word:'annulaire', translation:'anular', articleFr:'un', articleEs:'un' },
          { id:'body-little-finger', word:'auriculaire', translation:'meñique', articleFr:'un', articleEs:'un' },
          { id:'body-fingernail', word:'ongle', translation:'uña', articleFr:'un', articleEs:'una' },
          { id:'body-fist', word:'poing', translation:'puño', articleFr:'un', articleEs:'un' },
          { id:'body-foot', word:'pied', translation:'pie', articleFr:'un', articleEs:'un' },
          { id:'body-sole', word:'plante du pied', translation:'planta del pie', articleFr:'une', articleEs:'una' },
          { id:'body-heel', word:'talon', translation:'talón', articleFr:'un', articleEs:'un' },
          { id:'body-toe', word:'orteil', translation:'dedo del pie', articleFr:'un', articleEs:'un' },
          { id:'body-foot-nail', word:'ongle de pied', translation:'uña del pie', articleFr:'un', articleEs:'una' }
        ]
      },
      {
        id: 'body-person',
        title: 'Persona',
        entries: [
          { id:'person-person', word:'personne', translation:'persona', articleFr:'une', articleEs:'una' },
          { id:'person-man', word:'homme', translation:'hombre', articleFr:'un', articleEs:'un' },
          { id:'person-woman', word:'femme', translation:'mujer', articleFr:'une', articleEs:'una' },
          { id:'person-child', word:'enfant', translation:'niño / niña', articleFr:'un', articleEs:'un / una' },
          { id:'person-baby', word:'bébé', translation:'bebé', articleFr:'un', articleEs:'un / una' },
          { id:'person-boy', word:'garçon', translation:'niño / chico', articleFr:'un', articleEs:'un' },
          { id:'person-adult', word:'adulte', translation:'adulto / adulta', articleFr:'un / une', articleEs:'un / una' },
          { id:'person-young-person', word:'jeune', translation:'joven', articleFr:'un / une', articleEs:'un / una' },
          { id:'person-elderly-person', word:'personne âgée', translation:'persona mayor', articleFr:'une', articleEs:'una' },
          { id:'person-neighbor', word:'voisin', translation:'vecino', articleFr:'un', articleEs:'un' },
          { id:'person-neighbor-female', word:'voisine', translation:'vecina', articleFr:'une', articleEs:'una' },
          { id:'person-couple', word:'couple', translation:'pareja', articleFr:'un', articleEs:'una' },
          { id:'person-individual', word:'individu', translation:'individuo / persona', articleFr:'un', articleEs:'un' }
        ]
      },
      {
        id: 'body-senses',
        title: 'Los sentidos',
        entries: [
          { id:'sense-sight', word:'vue', translation:'vista', articleFr:'la', articleEs:'la' },
          { id:'sense-hearing', word:'ouïe', translation:'oído', articleFr:'l’', articleEs:'el' },
          { id:'sense-smell', word:'odorat', translation:'olfato', articleFr:'l’', articleEs:'el' },
          { id:'sense-taste', word:'goût', translation:'gusto', articleFr:'le', articleEs:'el' },
          { id:'sense-touch', word:'toucher', translation:'tacto', articleFr:'le', articleEs:'el' },
          { id:'sense-smell-odor', word:'odeur', translation:'olor', articleFr:'une', articleEs:'un' },
          { id:'sense-scent', word:'parfum', translation:'aroma / perfume', articleFr:'un', articleEs:'un' },
          { id:'sense-sound', word:'son', translation:'sonido', articleFr:'un', articleEs:'un' },
          { id:'sense-noise', word:'bruit', translation:'ruido', articleFr:'un', articleEs:'un' },
          { id:'sense-voice', word:'voix', translation:'voz', articleFr:'une', articleEs:'una' },
          { id:'sense-light', word:'lumière', translation:'luz', articleFr:'une', articleEs:'una' },
          { id:'sense-taste-flavor', word:'saveur', translation:'sabor', articleFr:'une', articleEs:'un' },
          { id:'sense-sweetness', word:'douceur', translation:'dulzura / suavidad', articleFr:'une', articleEs:'una' },
          { id:'sense-bitterness', word:'amertume', translation:'amargor', articleFr:'une', articleEs:'un' },
          { id:'sense-acidity', word:'acidité', translation:'acidez', articleFr:'une', articleEs:'una' },
          { id:'sense-acid', word:'goût acide', translation:'sabor ácido', articleFr:'un', articleEs:'un' },
          { id:'sense-color', word:'couleur', translation:'color', articleFr:'une', articleEs:'un' },
          { id:'sense-flavor', word:'arôme', translation:'aroma / sabor', articleFr:'un', articleEs:'un' },
          { id:'sense-texture', word:'texture', translation:'textura', articleFr:'une', articleEs:'una' },
          { id:'sense-contact', word:'contact', translation:'contacto', articleFr:'un', articleEs:'un' }
        ]
      },
      {
        id: 'body-age-appearance',
        title: 'Edad, apariencia y descripción',
        entries: [
          { id:'person-age', word:'âge', translation:'edad', articleFr:'un', articleEs:'una' },
          { id:'person-appearance', word:'apparence', translation:'apariencia', articleFr:'une', articleEs:'una' },
          { id:'person-beauty', word:'beauté', translation:'belleza', articleFr:'une', articleEs:'una' },
          { id:'person-ugliness', word:'laideur', translation:'fealdad', articleFr:'une', articleEs:'una' },
          { id:'person-weight', word:'poids', translation:'peso', articleFr:'un', articleEs:'un' },
          { id:'person-height', word:'hauteur', translation:'altura', articleFr:'une', articleEs:'una' },
          { id:'person-shape', word:'forme', translation:'forma', articleFr:'une', articleEs:'una' },
          { id:'person-face-shape', word:'forme du visage', translation:'forma de la cara', articleFr:'une', articleEs:'una' },
          { id:'person-look', word:'allure', translation:'aspect / apariencia', articleFr:'une', articleEs:'una' },
          { id:'person-style', word:'style', translation:'estilo', articleFr:'un', articleEs:'un' },
          { id:'person-expression', word:'expression', translation:'expresión', articleFr:'une', articleEs:'una' },
          { id:'person-smile', word:'sourire', translation:'sonrisa', articleFr:'un', articleEs:'una' },
          { id:'person-laugh', word:'rire', translation:'risa', articleFr:'un', articleEs:'una' },
          { id:'person-tear', word:'larme', translation:'lágrima', articleFr:'une', articleEs:'una' },
          { id:'person-birth', word:'naissance', translation:'nacimiento', articleFr:'une', articleEs:'un' },
          { id:'person-youth', word:'jeunesse', translation:'juventud', articleFr:'une', articleEs:'la' },
          { id:'person-adulthood', word:'âge adulte', translation:'edad adulta', articleFr:'un', articleEs:'la' },
          { id:'person-old-age', word:'vieillesse', translation:'vejez', articleFr:'une', articleEs:'la' },
          { id:'person-silhouette', word:'silhouette', translation:'silueta', articleFr:'une', articleEs:'una' }
        ]
      },
      {
        id: 'body-personal-data',
        title: 'Persona y datos personales',
        entries: [
          { id:'personal-first-name', word:'prénom', translation:'nombre', articleFr:'un', articleEs:'un' },
          { id:'personal-last-name', word:'nom', translation:'apellido / nombre', articleFr:'un', articleEs:'un' },
          { id:'personal-address', word:'adresse', translation:'dirección', articleFr:'une', articleEs:'una' },
          { id:'personal-phone', word:'numéro de téléphone', translation:'número de teléfono', articleFr:'un', articleEs:'un' },
          { id:'personal-email', word:'adresse e-mail', translation:'dirección de correo electrónico', articleFr:'une', articleEs:'una' },
          { id:'personal-country', word:'pays', translation:'país', articleFr:'un', articleEs:'un' },
          { id:'personal-nationality', word:'nationalité', translation:'nacionalidad', articleFr:'une', articleEs:'una' },
          { id:'personal-place-of-birth', word:'lieu de naissance', translation:'lugar de nacimiento', articleFr:'un', articleEs:'un' },
          { id:'personal-date-of-birth', word:'date de naissance', translation:'fecha de nacimiento', articleFr:'une', articleEs:'una' },
          { id:'personal-birthday', word:'anniversaire', translation:'cumpleaños', articleFr:'un', articleEs:'un' },
          { id:'personal-marital-status', word:'état civil', translation:'estado civil', articleFr:'un', articleEs:'un' },
          { id:'personal-profession', word:'profession', translation:'profesión', articleFr:'une', articleEs:'una' },
          { id:'personal-name', word:'identité', translation:'identidad', articleFr:'une', articleEs:'una' },
          { id:'personal-national-id', word:'carte d’identité', translation:'documento de identidad', articleFr:'une', articleEs:'una' },
          { id:'personal-passport', word:'passeport', translation:'pasaporte', articleFr:'un', articleEs:'un' },
          { id:'personal-signature', word:'signature', translation:'firma', articleFr:'une', articleEs:'una' },
          { id:'personal-photo', word:'photo', translation:'foto', articleFr:'une', articleEs:'una' },
          { id:'personal-coordinates', word:'coordonnées', translation:'datos de contacto', articleFr:'les', articleEs:'los' },
          { id:'personal-postal-code', word:'code postal', translation:'código postal', articleFr:'un', articleEs:'un' },
          { id:'personal-domicile', word:'domicile', translation:'domicilio', articleFr:'un', articleEs:'un' }
        ]
      }
    ]
  };

  if (!window.COQ_VOCABULARY_DATABASE_API || typeof window.COQ_VOCABULARY_DATABASE_API.registerCategory !== 'function') {
    throw new Error('COQ Vocabulario: el registro de base de datos debe cargarse antes de las categorías.');
  }

  window.COQ_VOCABULARY_BODY_PERSON = Object.freeze(category);
  window.COQ_VOCABULARY_DATABASE_API.registerCategory(category);
})();