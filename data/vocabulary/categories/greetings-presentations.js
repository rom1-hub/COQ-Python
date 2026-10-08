/* COQ — Saludos y presentaciones */
(function () {
  'use strict';

  const category = {
    id: 'greetings-presentations',
    title: 'Saludos y presentaciones',
    subcategories: [
      {
        id: 'greetings-basic',
        title: 'Saludos básicos',
        entries: [
          { id:'greeting-bonjour', word:'bonjour', translation:'buenos días', emoji:'☀️' },
          { id:'greeting-salut', word:'salut', translation:'hola', emoji:'👋' },
          { id:'greeting-bonsoir', word:'bonsoir', translation:'buenas tardes / buenas noches', emoji:'🌆' },
          { id:'greeting-bonne-nuit', word:'bonne nuit', translation:'buenas noches', emoji:'🌙' },
          { id:'greeting-bienvenue', word:'bienvenue', translation:'bienvenido / bienvenida', emoji:'🏠' },
          { id:'greeting-enchante-m', word:'enchanté', translation:'encantado (masculino)', emoji:'🤝' },
          { id:'greeting-enchantee-f', word:'enchantée', translation:'encantada (femenino)', emoji:'🤝' },
          { id:'greeting-ravi-de-vous-rencontrer-m', word:'ravi de vous rencontrer', translation:'encantado de conocerle (masculino)', emoji:'🤝' },
          { id:'greeting-ravie-de-vous-rencontrer-f', word:'ravie de vous rencontrer', translation:'encantada de conocerle (femenino)', emoji:'🤝' },
          { id:'greeting-heureux-de-vous-rencontrer-m', word:'heureux de vous rencontrer', translation:'encantado de conocerle (masculino)', emoji:'🤝' },
          { id:'greeting-heureuse-de-vous-rencontrer-f', word:'heureuse de vous rencontrer', translation:'encantada de conocerle (femenino)', emoji:'🤝' },
          { id:'greeting-coucou', word:'coucou', translation:'hola (para alguien muy cercano)', emoji:'😊' }
        ]
      },
      {
        id: 'greetings-farewells',
        title: 'Despedidas',
        entries: [
          { id:'farewell-au-revoir', word:'au revoir', translation:'adiós / hasta luego', emoji:'👋' },
          { id:'farewell-a-bientot', word:'à bientôt', translation:'hasta pronto', emoji:'🔜' },
          { id:'farewell-a-plus-tard', word:'à plus tard', translation:'hasta luego', emoji:'👋' },
          { id:'farewell-a-tout-a-lheure', word:'à tout à l’heure', translation:'hasta luego', emoji:'👋' },
          { id:'farewell-a-demain', word:'à demain', translation:'hasta mañana', emoji:'🌙' },
          { id:'farewell-a-lundi', word:'à lundi', translation:'hasta el lunes', emoji:'📅' },
          { id:'farewell-a-la-prochaine', word:'à la prochaine', translation:'hasta la próxima', emoji:'👋' },
          { id:'farewell-bonne-journee', word:'bonne journée', translation:'que tenga un buen día', emoji:'☀️' },
          { id:'farewell-bonne-soiree', word:'bonne soirée', translation:'que pase una buena tarde / noche', emoji:'🌆' },
          { id:'farewell-bon-week-end', word:'bon week-end', translation:'buen fin de semana', emoji:'📅' },
          { id:'farewell-a-plus', word:'à plus', translation:'hasta luego', emoji:'👋' },
          { id:'farewell-salut', word:'salut', translation:'adiós / hasta luego', emoji:'👋' }
        ]
      },
      {
        id: 'greetings-how-are-you',
        title: 'Preguntar y decir cómo está alguien',
        entries: [
          { id:'how-ca-va', word:'ça va ?', translation:'¿cómo estás? / ¿qué tal? (1.ª forma)', emoji:'🙂' },
          { id:'how-comment-allez-vous', word:'comment allez-vous ?', translation:'¿cómo está usted?', emoji:'🙂' },
          { id:'how-comment-vas-tu', word:'comment vas-tu ?', translation:'¿cómo estás?', emoji:'🙂' },
          { id:'how-comment-ca-va', word:'comment ça va ?', translation:'¿cómo estás? / ¿qué tal? (2.ª forma)', emoji:'🙂' },
          { id:'how-tu-vas-bien', word:'tu vas bien ?', translation:'¿estás bien?', emoji:'🙂' },
          { id:'how-vous-allez-bien', word:'vous allez bien ?', translation:'¿está usted bien?', emoji:'🙂' },
          { id:'how-ca-va-bien', word:'ça va bien', translation:'estoy bien / todo va bien', emoji:'🙂' },
          { id:'how-ca-va-tres-bien', word:'ça va très bien', translation:'estoy muy bien', emoji:'😄' },
          { id:'how-ca-va-mal', word:'ça va mal', translation:'estoy mal', emoji:'🙁' },
          { id:'how-comme-ci-comme-ca', word:'comme ci, comme ça', translation:'así así', emoji:'😐' },
          { id:'how-bof', word:'bof', translation:'más o menos', emoji:'😐' },
          { id:'how-pas-mal', word:'pas mal', translation:'no está mal', emoji:'🙂' }
        ]
      },
      {
        id: 'greetings-introduce-yourself',
        title: 'Presentarse',
        entries: [
          { id:'intro-je-mappelle', word:"je m'appelle", translation:'me llamo', emoji:'🙋' },
          { id:'intro-mon-nom-est', word:'mon nom est', translation:'mi nombre es', emoji:'🪪' },
          { id:'intro-moi-cest', word:"moi, c'est", translation:'yo soy / yo me llamo', emoji:'🙋' },
          { id:'intro-je-suis', word:'je suis', translation:'soy', emoji:'🙋' },
          { id:'intro-permettez-moi-de-me-presenter', word:'permettez-moi de me présenter', translation:'permítame presentarme', emoji:'🙋' },
          { id:'intro-je-vous-presente', word:'je vous présente', translation:'le presento a', emoji:'🤝' },
          { id:'intro-je-te-presente', word:'je te présente', translation:'te presento a', emoji:'🤝' },
          { id:'intro-voici', word:'voici', translation:'este / esta es', emoji:'👉' },
          { id:'intro-enchante-faire-votre-connaissance-m', word:'enchanté de faire votre connaissance', translation:'encantado de conocerle (masculino)', emoji:'🤝' },
          { id:'intro-enchantee-faire-votre-connaissance-f', word:'enchantée de faire votre connaissance', translation:'encantada de conocerle (femenino)', emoji:'🤝' }
        ]
      },
      {
        id: 'greetings-name-identity',
        title: 'Preguntar por el nombre y la identidad',
        entries: [
          { id:'identity-comment-vous-appelez-vous', word:'comment vous appelez-vous ?', translation:'¿cómo se llama?', emoji:'❓' },
          { id:'identity-comment-tu-tappelles', word:"comment tu t'appelles ?", translation:'¿cómo te llamas?', emoji:'❓' },
          { id:'identity-quel-est-votre-nom', word:'quel est votre nom ?', translation:'¿cuál es su nombre?', emoji:'❓' },
          { id:'identity-quel-est-ton-nom', word:'quel est ton nom ?', translation:'¿cuál es tu nombre?', emoji:'❓' },
          { id:'identity-qui-etes-vous', word:'qui êtes-vous ?', translation:'¿quién es usted?', emoji:'❓' },
          { id:'identity-qui-es-tu', word:'qui es-tu ?', translation:'¿quién eres?', emoji:'❓' },
          { id:'identity-vous-etes-qui', word:'vous êtes qui ?', translation:'¿quién es usted? / ¿quién eres?', emoji:'❓' },
          { id:'identity-tu-es-qui', word:'tu es qui ?', translation:'¿quién eres?', emoji:'❓' }
        ]
      },
      {
        id: 'greetings-present-others',
        title: 'Presentar a otras personas',
        entries: [
          { id:'present-voici-mon-ami', word:'voici mon ami', translation:'este es mi amigo', emoji:'👨' },
          { id:'present-voici-mon-amie', word:'voici mon amie', translation:'esta es mi amiga', emoji:'👩' },
          { id:'present-je-vous-presente-mon-ami', word:'je vous présente mon ami', translation:'le presento a mi amigo', emoji:'🤝' },
          { id:'present-je-vous-presente-mon-amie', word:'je vous présente mon amie', translation:'le presento a mi amiga', emoji:'🤝' },
          { id:'present-je-te-presente-mon-ami', word:'je te présente mon ami', translation:'te presento a mi amigo', emoji:'🤝' },
          { id:'present-je-te-presente-mon-amie', word:'je te présente mon amie', translation:'te presento a mi amiga', emoji:'🤝' },
          { id:'present-cest-mon-frere', word:"c'est mon frère", translation:'es mi hermano', emoji:'👨' },
          { id:'present-cest-ma-soeur', word:"c'est ma sœur", translation:'es mi hermana', emoji:'👩' },
          { id:'present-cest-mon-collegue', word:"c'est mon collègue", translation:'es mi compañero de trabajo', emoji:'👨‍💼' },
          { id:'present-cest-ma-collegue', word:"c'est ma collègue", translation:'es mi compañera de trabajo', emoji:'👩‍💼' }
        ]
      },
      {
        id: 'greetings-meet-contact',
        title: 'Conocer y establecer contacto',
        entries: [
          { id:'contact-faire-connaissance', word:'faire connaissance', translation:'conocerse / entablar conocimiento', emoji:'🤝' },
          { id:'contact-ravi-faire-votre-connaissance-m', word:'ravi de faire votre connaissance', translation:'encantado de conocerle (masculino)', emoji:'🤝' },
          { id:'contact-ravie-faire-votre-connaissance-f', word:'ravie de faire votre connaissance', translation:'encantada de conocerle (femenino)', emoji:'🤝' },
          { id:'contact-ravi-faire-ta-connaissance-m', word:'ravi de faire ta connaissance', translation:'encantado de conocerte (masculino)', emoji:'🤝' },
          { id:'contact-ravie-faire-ta-connaissance-f', word:'ravie de faire ta connaissance', translation:'encantada de conocerte (femenino)', emoji:'🤝' },
          { id:'contact-content-vous-rencontrer-m', word:'content de vous rencontrer', translation:'contento de conocerle (masculino)', emoji:'😊' },
          { id:'contact-contente-vous-rencontrer-f', word:'contente de vous rencontrer', translation:'contenta de conocerle (femenino)', emoji:'😊' },
          { id:'contact-content-te-rencontrer-m', word:'content de te rencontrer', translation:'contento de conocerte (masculino)', emoji:'😊' },
          { id:'contact-contente-te-rencontrer-f', word:'contente de te rencontrer', translation:'contenta de conocerte (femenino)', emoji:'😊' },
          { id:'contact-ca-fait-plaisir-de-vous-voir', word:'ça fait plaisir de vous voir', translation:'me alegra verle', emoji:'😊' },
          { id:'contact-ca-fait-plaisir-de-te-voir', word:'ça fait plaisir de te voir', translation:'me alegra verte', emoji:'😊' },
          { id:'contact-on-se-connait', word:'on se connaît ?', translation:'¿nos conocemos?', emoji:'❓' }
        ]
      },
      {
        id: 'greetings-courtesy-contact',
        title: 'Fórmulas de cortesía y contacto',
        entries: [
          { id:'courtesy-sil-vous-plait', word:"s'il vous plaît", translation:'por favor', emoji:'🙏' },
          { id:'courtesy-sil-te-plait', word:"s'il te plaît", translation:'por favor', emoji:'🙏' },
          { id:'courtesy-merci', word:'merci', translation:'gracias', emoji:'🙏' },
          { id:'courtesy-merci-beaucoup', word:'merci beaucoup', translation:'muchas gracias', emoji:'🙏' },
          { id:'courtesy-de-rien', word:'de rien', translation:'de nada', emoji:'😊' },
          { id:'courtesy-avec-plaisir', word:'avec plaisir', translation:'con mucho gusto', emoji:'😊' },
          { id:'courtesy-je-vous-en-prie', word:'je vous en prie', translation:'de nada / por favor', emoji:'🙏' },
          { id:'courtesy-excusez-moi', word:'excusez-moi', translation:'disculpe', emoji:'🙏' },
          { id:'courtesy-excuse-moi', word:'excuse-moi', translation:'disculpa', emoji:'🙏' },
          { id:'courtesy-pardon', word:'pardon', translation:'perdón / disculpe', emoji:'🙏' },
          { id:'courtesy-desole-m', word:'désolé', translation:'lo siento (masculino)', emoji:'🙏' },
          { id:'courtesy-desolee-f', word:'désolée', translation:'lo siento (femenino)', emoji:'🙏' },
          { id:'courtesy-tu-habites-ou', word:'tu habites où ?', translation:'¿dónde vives?', emoji:'🏠' },
          { id:'courtesy-vous-habitez-ou', word:'vous habitez où ?', translation:'¿dónde vive?', emoji:'🏠' },
          { id:'courtesy-jhabite-a', word:"j'habite à", translation:'vivo en', emoji:'🏠' }
        ]
      }
    ]
  };

  if (window.COQ_VOCABULARY_DATABASE_API) {
    window.COQ_VOCABULARY_DATABASE_API.registerCategory(category);
  }
})();