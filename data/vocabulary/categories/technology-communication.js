/* COQ — Vocabulario · Tecnología y comunicación */
(function () {
  'use strict';

  const category = {
    id: 'technology-communication',
    title: 'Tecnología y comunicación',
    subcategories: [
      {
        id: 'tech-devices',
        title: 'Informática y dispositivos',
        entries: [
          ['ordinateur','ordinateur','ordenador','un','un'],
          ['ordinateur-portable','ordinateur portable','ordenador portátil','un','un'],
          ['tablette','tablette','tableta','une','una'],
          ['telephone-portable','téléphone portable','teléfono móvil','un','un'],
          ['smartphone','smartphone','smartphone','un','un'],
          ['ecran','écran','pantalla','un','una'],
          ['clavier','clavier','teclado','un','un'],
          ['souris','souris','ratón','une','un'],
          ['imprimante','imprimante','impresora','une','una'],
          ['casque','casque','auriculares','un','unos'],
          ['haut-parleur','haut-parleur','altavoz','un','un'],
          ['webcam','webcam','cámara web','une','una'],
          ['chargeur','chargeur','cargador','un','un'],
          ['batterie','batterie','batería','une','una'],
          ['cable','câble','cable','un','un']
        ]
      },
      {
        id: 'tech-internet',
        title: 'Internet y navegación',
        entries: [
          ['internet','Internet','internet'],
          ['site-web','site web','sitio web','un','un'],
          ['page-web','page web','página web','une','una'],
          ['lien','lien','enlace','un','un'],
          ['moteur-de-recherche','moteur de recherche','motor de búsqueda','un','un'],
          ['navigateur','navigateur','navegador','un','un'],
          ['compte','compte','cuenta','un','una'],
          ['profil','profil','perfil','un','el'],
          ['mot-de-passe','mot de passe','contraseña','un','una'],
          ['adresse-electronique','adresse électronique','dirección de correo electrónico','une','la'],
          ['reseau','réseau','red','un','una'],
          ['connexion','connexion','conexión','une','una'],
          ['telechargement','téléchargement','descarga','un','una'],
          ['fichier','fichier','archivo','un','un'],
          ['dossier','dossier','carpeta','un','una']
        ]
      },
      {
        id: 'tech-digital-communication',
        title: 'Comunicación digital',
        entries: [
          ['message','message','mensaje','un','un'],
          ['courriel','courriel','correo electrónico','un','un'],
          ['sms','SMS','SMS','un','un'],
          ['appel','appel','llamada','un','una'],
          ['appel-video','appel vidéo','videollamada','un','una'],
          ['conversation','conversation','conversación','une','una'],
          ['notification','notification','notificación','une','una'],
          ['piece-jointe','pièce jointe','archivo adjunto','une','un'],
          ['destinataire','destinataire','destinatario','un','un'],
          ['destinataire-f','destinataire','destinataria','une','una'],
          ['expediteur','expéditeur','remitente','un','un'],
          ['expeditrice','expéditrice','remitente','une','una'],
          ['envoyer','envoyer','enviar'],
          ['recevoir','recevoir','recibir'],
          ['repondre','répondre','responder'],
          ['transferer','transférer','reenviar'],
          ['telecharger','télécharger','descargar']
        ]
      },
      {
        id: 'tech-social-networks',
        title: 'Redes sociales',
        entries: [
          ['reseau-social','réseau social','red social','un','una'],
          ['publication','publication','publicación','une','una'],
          ['commentaire','commentaire','comentario','un','un'],
          ['photo-de-profil','photo de profil','foto de perfil','une','una'],
          ['abonne-m','abonné','seguidor','un','el'],
          ['abonne-f','abonnée','seguidora','une','la'],
          ['influenceur','influenceur','influencer','un','el'],
          ['influenceuse','influenceuse','influencer','une','la'],
          ['createur-contenu','créateur de contenu','creador de contenido','un','el'],
          ['creatrice-contenu','créatrice de contenu','creadora de contenido','une','la'],
          ['partage','partage','contenido compartido','un','un'],
          ['jaime','« j’aime »','« me gusta »','un','un'],
          ['publier','publier','publicar'],
          ['partager','partager','compartir'],
          ['suivre','suivre','seguir'],
          ['sabonner','s’abonner','suscribirse']
        ]
      },
      {
        id: 'tech-software-apps',
        title: 'Programas y aplicaciones',
        entries: [
          ['logiciel','logiciel','software / programa','un','un'],
          ['application','application','aplicación','une','una'],
          ['programme','programme','programa','un','un'],
          ['mise-a-jour','mise à jour','actualización','une','una'],
          ['version','version','versión','une','una'],
          ['systeme-exploitation','système d’exploitation','sistema operativo','un','un'],
          ['icone','icône','icono','une','un'],
          ['menu','menu','menú','un','un'],
          ['bouton','bouton','botón','un','un'],
          ['fenetre','fenêtre','ventana','une','una'],
          ['installer','installer','instalar'],
          ['desinstaller','désinstaller','desinstalar'],
          ['mettre-a-jour','mettre à jour','actualizar'],
          ['ouvrir','ouvrir','abrir'],
          ['fermer','fermer','cerrar']
        ]
      },
      {
        id: 'tech-data-storage',
        title: 'Datos, archivos y almacenamiento',
        entries: [
          ['donnee','donnée','dato','une','un'],
          ['document','document','documento','un','un'],
          ['image','image','imagen','une','una'],
          ['video','vidéo','vídeo','une','un'],
          ['audio','audio','audio','un','un'],
          ['fichier-pdf','fichier PDF','archivo PDF','un','un'],
          ['copie','copie','copia','une','una'],
          ['sauvegarde','sauvegarde','copia de seguridad','une','una'],
          ['stockage','stockage','almacenamiento','un','un'],
          ['disque-dur','disque dur','disco duro','un','un'],
          ['cle-usb','clé USB','memoria USB','une','una'],
          ['enregistrer','enregistrer','guardar'],
          ['supprimer','supprimer','eliminar'],
          ['copier','copier','copiar'],
          ['coller','coller','pegar']
        ]
      },
      {
        id: 'tech-security-privacy',
        title: 'Seguridad y privacidad digital',
        entries: [
          ['securite','sécurité','seguridad','une','una'],
          ['confidentialite','confidentialité','privacidad','une','una'],
          ['virus','virus','virus','un','un'],
          ['antivirus','antivirus','antivirus','un','un'],
          ['piratage','piratage','pirateo / hackeo','un','un'],
          ['pirate-informatique','pirate informatique','hacker','un','un'],
          ['arnaque','arnaque','estafa','une','una'],
          ['fraude','fraude','fraude','une','una'],
          ['risque','risque','riesgo','un','un'],
          ['autorisation','autorisation','autorización','une','una'],
          ['acces','accès','acceso','un','un'],
          ['bloquer','bloquer','bloquear'],
          ['proteger','protéger','proteger'],
          ['verifier','vérifier','verificar'],
          ['se-connecter','se connecter','iniciar sesión / conectarse'],
          ['se-deconnecter','se déconnecter','cerrar sesión / desconectarse']
        ]
      },
      {
        id: 'tech-actions-concepts',
        title: 'Acciones y conceptos tecnológicos',
        entries: [
          ['communiquer','communiquer','comunicar(se)'],
          ['contacter','contacter','contactar'],
          ['rechercher','rechercher','buscar'],
          ['cliquer','cliquer','hacer clic'],
          ['selectionner','sélectionner','seleccionar'],
          ['saisir','saisir','introducir'],
          ['taper','taper','escribir / teclear'],
          ['imprimer','imprimer','imprimir'],
          ['scanner','scanner','escanear'],
          ['sauvegarder','sauvegarder','guardar'],
          ['connecter','connecter','conectar'],
          ['deconnecter','déconnecter','desconectar'],
          ['recherche','recherche','búsqueda','une','una'],
          ['utilisateur-m','utilisateur','usuario','un','un'],
          ['utilisatrice','utilisatrice','usuaria','une','una']
        ]
      }
    ].map((subcategory) => ({
      ...subcategory,
      entries: subcategory.entries.map(([id, word, translation, articleFr, articleEs]) => ({
        id: 'tech-' + id,
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