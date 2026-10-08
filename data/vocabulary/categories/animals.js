/* 
 * COQ — Vocabulario · Animales
 *
 * Fuente de verdad del contenido de la categoría «Animales».
 * Estructura única: categoría → subcategoría → entrada.
 *
 * Cada entrada aparece una sola vez en toda la categoría.
 * No contiene temas, definiciones ni lógica de interfaz.
 * Cada entrada incluye artículo francés y artículo español.
 */
(function () {
  'use strict';

  const animals = {
    id: 'animals',
    title: 'Animales',
    subcategories: [
      {
        id: 'animals-domestic',
        title: 'Animales domésticos',
        entries: [
{ id: 'animal-dog', word: 'chien', translation: 'perro', articleFr: 'un', articleEs: 'un' , emoji: '🐶' },
{ id: 'animal-cat', word: 'chat', translation: 'gato', articleFr: 'un', articleEs: 'un' , emoji: '🐱' },
{ id: 'animal-rabbit', word: 'lapin', translation: 'conejo', articleFr: 'un', articleEs: 'un' , emoji: '🐰' },
{ id: 'animal-hamster', word: 'hamster', translation: 'hámster', articleFr: 'un', articleEs: 'un' , emoji: '🐹' },
{ id: 'animal-guinea-pig', word: 'cochon d’Inde', translation: 'cobaya', articleFr: 'un', articleEs: 'una' , emoji: null },
{ id: 'animal-parakeet', word: 'perruche', translation: 'periquito', articleFr: 'une', articleEs: 'un' , emoji: null },
{ id: 'animal-canary', word: 'canari', translation: 'canario', articleFr: 'un', articleEs: 'un' , emoji: null },
{ id: 'animal-goldfish', word: 'poisson rouge', translation: 'pez dorado', articleFr: 'un', articleEs: 'un' , emoji: null },
{ id: 'animal-mouse', word: 'souris', translation: 'ratón', articleFr: 'une', articleEs: 'un' , emoji: '🐭' },
{ id: 'animal-rat', word: 'rat', translation: 'rata', articleFr: 'un', articleEs: 'una' , emoji: '🐀' },
{ id: 'animal-ferret', word: 'furet', translation: 'hurón', articleFr: 'un', articleEs: 'un' , emoji: null },
{ id: 'animal-parrot', word: 'perroquet', translation: 'loro', articleFr: 'un', articleEs: 'un' , emoji: '🦜' },
          { id: 'animal-chinchilla', word: 'chinchilla', translation: 'chinchilla', articleFr: 'un', articleEs: 'una' },
          { id: 'animal-hedgehog', word: 'hérisson', translation: 'erizo', articleFr: 'un', articleEs: 'un' },
{ id: 'animal-spider', word: 'araignée', translation: 'araña', articleFr: 'une', articleEs: 'una' , emoji: '🕷️' },
        ]
      },
      {
        id: 'animals-farm',
        title: 'Animales de granja / del campo',
        entries: [
{ id: 'animal-cow', word: 'vache', translation: 'vaca', articleFr: 'une', articleEs: 'una' , emoji: '🐄' },
          { id: 'animal-ox', word: 'bœuf', translation: 'buey', articleFr: 'un', articleEs: 'un' },
{ id: 'animal-bull', word: 'taureau', translation: 'toro', articleFr: 'un', articleEs: 'un' , emoji: '🐂' },
{ id: 'animal-calf', word: 'veau', translation: 'ternero', articleFr: 'un', articleEs: 'un' , emoji: null },
{ id: 'animal-horse', word: 'cheval', translation: 'caballo', articleFr: 'un', articleEs: 'un' , emoji: '🐴' },
          { id: 'animal-mare', word: 'jument', translation: 'yegua', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-foal', word: 'poulain', translation: 'potro', articleFr: 'un', articleEs: 'un' },
{ id: 'animal-donkey', word: 'âne', translation: 'burro', articleFr: 'un', articleEs: 'un' , emoji: '🫏' },
{ id: 'animal-goat', word: 'chèvre', translation: 'cabra', articleFr: 'une', articleEs: 'una' , emoji: '🐐' },
          { id: 'animal-billy-goat', word: 'bouc', translation: 'macho cabrío', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-kid', word: 'chevreau', translation: 'cabrito', articleFr: 'un', articleEs: 'un' },
{ id: 'animal-sheep', word: 'mouton', translation: 'cordero', articleFr: 'un', articleEs: 'un' , emoji: '🐑' },
          { id: 'animal-ewe', word: 'brebis', translation: 'oveja', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-ram', word: 'bélier', translation: 'carnero', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-lamb', word: 'agneau', translation: 'corderito', articleFr: 'un', articleEs: 'un' },
{ id: 'animal-pig', word: 'cochon', translation: 'cerdo', articleFr: 'un', articleEs: 'un' , emoji: '🐖' },
          { id: 'animal-sow', word: 'truie', translation: 'cerda', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-piglet', word: 'porcelet', translation: 'lechón', articleFr: 'un', articleEs: 'un' },
{ id: 'animal-hen', word: 'poule', translation: 'gallina', articleFr: 'une', articleEs: 'una' , emoji: '🐔' },
{ id: 'animal-rooster', word: 'coq', translation: 'gallo', articleFr: 'un', articleEs: 'un' , emoji: '🐓' },
          { id: 'animal-chick', word: 'poussin', translation: 'pollito', articleFr: 'un', articleEs: 'un' },
{ id: 'animal-duck', word: 'canard', translation: 'pato', articleFr: 'un', articleEs: 'un' , emoji: '🦆' },
          { id: 'animal-female-duck', word: 'cane', translation: 'pata', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-duckling', word: 'caneton', translation: 'patito', articleFr: 'un', articleEs: 'un' },
{ id: 'animal-goose', word: 'oie', translation: 'oca', articleFr: 'une', articleEs: 'una' , emoji: '🪿' },
          { id: 'animal-turkey-male', word: 'dindon', translation: 'pavo', articleFr: 'un', articleEs: 'un' },
{ id: 'animal-turkey-female', word: 'dinde', translation: 'pava / pavo', articleFr: 'une', articleEs: 'una' , emoji: '🦃' },
{ id: 'animal-snail', word: 'escargot', translation: 'caracol', articleFr: 'un', articleEs: 'un' , emoji: '🐌' },
          { id: 'animal-slug', word: 'limace', translation: 'babosa', articleFr: 'une', articleEs: 'una' }
        ]
      },
      {
        id: 'animals-wild',
        title: 'Animales salvajes',
        entries: [
{ id: 'animal-lion', word: 'lion', translation: 'león', articleFr: 'un', articleEs: 'un' , emoji: '🦁' },
{ id: 'animal-tiger', word: 'tigre', translation: 'tigre', articleFr: 'un', articleEs: 'un' , emoji: '🐯' },
{ id: 'animal-leopard', word: 'léopard', translation: 'leopardo', articleFr: 'un', articleEs: 'un' , emoji: '🐆' },
{ id: 'animal-cheetah', word: 'guépard', translation: 'guepardo', articleFr: 'un', articleEs: 'un' , emoji: null },
          { id: 'animal-jaguar', word: 'jaguar', translation: 'jaguar', articleFr: 'un', articleEs: 'un' },
{ id: 'animal-wolf', word: 'loup', translation: 'lobo', articleFr: 'un', articleEs: 'un' , emoji: '🐺' },
{ id: 'animal-fox', word: 'renard', translation: 'zorro', articleFr: 'un', articleEs: 'un' , emoji: '🦊' },
{ id: 'animal-bear', word: 'ours', translation: 'oso', articleFr: 'un', articleEs: 'un' , emoji: '🐻' },
{ id: 'animal-elephant', word: 'éléphant', translation: 'elefante', articleFr: 'un', articleEs: 'un' , emoji: '🐘' },
{ id: 'animal-giraffe', word: 'girafe', translation: 'jirafa', articleFr: 'une', articleEs: 'una' , emoji: '🦒' },
{ id: 'animal-zebra', word: 'zèbre', translation: 'cebra', articleFr: 'un', articleEs: 'una' , emoji: '🦓' },
{ id: 'animal-rhinoceros', word: 'rhinocéros', translation: 'rinoceronte', articleFr: 'un', articleEs: 'un' , emoji: '🦏' },
{ id: 'animal-hippopotamus', word: 'hippopotame', translation: 'hipopótamo', articleFr: 'un', articleEs: 'un' , emoji: '🦛' },
{ id: 'animal-gorilla', word: 'gorille', translation: 'gorila', articleFr: 'un', articleEs: 'un' , emoji: '🦍' },
          { id: 'animal-chimpanzee', word: 'chimpanzé', translation: 'chimpancé', articleFr: 'un', articleEs: 'un' },
{ id: 'animal-monkey', word: 'singe', translation: 'mono', articleFr: 'un', articleEs: 'un' , emoji: '🐒' },
{ id: 'animal-kangaroo', word: 'kangourou', translation: 'canguro', articleFr: 'un', articleEs: 'un' , emoji: '🦘' },
{ id: 'animal-panda', word: 'panda', translation: 'panda', articleFr: 'un', articleEs: 'un' , emoji: '🐼' },
{ id: 'animal-koala', word: 'koala', translation: 'koala', articleFr: 'un', articleEs: 'un' , emoji: '🐨' },
{ id: 'animal-deer', word: 'cerf', translation: 'ciervo', articleFr: 'un', articleEs: 'un' , emoji: '🦌' },
          { id: 'animal-roebuck', word: 'chevreuil', translation: 'corzo', articleFr: 'un', articleEs: 'un' },
{ id: 'animal-wild-boar', word: 'sanglier', translation: 'jabalí', articleFr: 'un', articleEs: 'un' , emoji: '🐗' },
{ id: 'animal-hyena', word: 'hyène', translation: 'hiena', articleFr: 'une', articleEs: 'una' , emoji: null },
          { id: 'animal-jackal', word: 'chacal', translation: 'chacal', articleFr: 'un', articleEs: 'un' },
{ id: 'animal-crocodile', word: 'crocodile', translation: 'cocodrilo', articleFr: 'un', articleEs: 'un' , emoji: '🐊' },
{ id: 'animal-scorpion', word: 'scorpion', translation: 'escorpión', articleFr: 'un', articleEs: 'un' , emoji: '🦂' },
        ]
      },
      {
        id: 'animals-marine',
        title: 'Animales marinos',
        entries: [
{ id: 'animal-shark', word: 'requin', translation: 'tiburón', articleFr: 'un', articleEs: 'un' , emoji: '🦈' },
{ id: 'animal-dolphin', word: 'dauphin', translation: 'delfín', articleFr: 'un', articleEs: 'un' , emoji: '🐬' },
{ id: 'animal-whale', word: 'baleine', translation: 'ballena', articleFr: 'une', articleEs: 'una' , emoji: '🐋' },
{ id: 'animal-orca', word: 'orque', translation: 'orca', articleFr: 'une', articleEs: 'una' , emoji: '🫍' },
{ id: 'animal-seahorse', word: 'hippocampe', translation: 'caballito de mar', articleFr: 'un', articleEs: 'un' , emoji: null },
{ id: 'animal-octopus', word: 'pieuvre', translation: 'pulpo', articleFr: 'une', articleEs: 'un' , emoji: '🐙' },
{ id: 'animal-squid', word: 'calmar', translation: 'calamar', articleFr: 'un', articleEs: 'un' , emoji: '🦑' },
{ id: 'animal-jellyfish', word: 'méduse', translation: 'medusa', articleFr: 'une', articleEs: 'una' , emoji: '🪼' },
{ id: 'animal-crab', word: 'crabe', translation: 'cangrejo', articleFr: 'un', articleEs: 'un' , emoji: '🦀' },
{ id: 'animal-lobster', word: 'homard', translation: 'bogavante', articleFr: 'un', articleEs: 'un' , emoji: '🦞' },
{ id: 'animal-shrimp', word: 'crevette', translation: 'gamba', articleFr: 'une', articleEs: 'una' , emoji: '🦐' },
{ id: 'animal-starfish', word: 'étoile de mer', translation: 'estrella de mar', articleFr: 'une', articleEs: 'una' , emoji: null },
          { id: 'animal-sea-turtle', word: 'tortue marine', translation: 'tortuga marina', articleFr: 'une', articleEs: 'una' , emoji: null },
{ id: 'animal-seal', word: 'phoque', translation: 'foca', articleFr: 'un', articleEs: 'una' , emoji: '🦭' },
          { id: 'animal-walrus', word: 'morse', translation: 'morsa', articleFr: 'un', articleEs: 'una' },
{ id: 'animal-sea-lion', word: 'otarie', translation: 'león marino', articleFr: 'une', articleEs: 'un' , emoji: null },
          { id: 'animal-ray', word: 'raie', translation: 'raya', articleFr: 'une', articleEs: 'una' },
{ id: 'animal-eel', word: 'anguille', translation: 'anguila', articleFr: 'une', articleEs: 'una' , emoji: null },
          { id: 'animal-cod', word: 'morue', translation: 'bacalao', articleFr: 'une', articleEs: 'un' },
{ id: 'animal-tuna', word: 'thon', translation: 'atún', articleFr: 'un', articleEs: 'un' , emoji: null },
{ id: 'animal-salmon', word: 'saumon', translation: 'salmón', articleFr: 'un', articleEs: 'un' , emoji: null },
          { id: 'animal-sardine', word: 'sardine', translation: 'sardina', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-anchovy', word: 'anchois', translation: 'anchoa', articleFr: 'un', articleEs: 'una' },
{ id: 'animal-oyster', word: 'huître', translation: 'ostra', articleFr: 'une', articleEs: 'una' , emoji: '🦪' },
{ id: 'animal-mussel', word: 'moule', translation: 'mejillón', articleFr: 'une', articleEs: 'un' , emoji: null },
        ]
      },
      {
        id: 'animals-birds',
        title: 'Aves',
        entries: [
{ id: 'animal-eagle', word: 'aigle', translation: 'águila', articleFr: 'un', articleEs: 'un' , emoji: '🦅' },
{ id: 'animal-owl', word: 'hibou', translation: 'búho', articleFr: 'un', articleEs: 'un' , emoji: '🦉' },
{ id: 'animal-snowy-owl', word: 'chouette', translation: 'lechuza', articleFr: 'une', articleEs: 'una' , emoji: '🦉' },
{ id: 'animal-pigeon', word: 'pigeon', translation: 'paloma', articleFr: 'un', articleEs: 'una' , emoji: null },
          { id: 'animal-sparrow', word: 'moineau', translation: 'gorrión', articleFr: 'un', articleEs: 'un' },
{ id: 'animal-seagull', word: 'mouette', translation: 'gaviota', articleFr: 'une', articleEs: 'una' , emoji: null },
          { id: 'animal-pelican', word: 'pélican', translation: 'pelícano', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-penguin', word: 'manchot', translation: 'pingüino', articleFr: 'un', articleEs: 'un' },
{ id: 'animal-swan', word: 'cygne', translation: 'cisne', articleFr: 'un', articleEs: 'un' , emoji: '🦢' },
{ id: 'animal-flamingo', word: 'flamant rose', translation: 'flamenco', articleFr: 'un', articleEs: 'un' , emoji: '🦩' },
          { id: 'animal-stork', word: 'cigogne', translation: 'cigüeña', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-swallow', word: 'hirondelle', translation: 'golondrina', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-turtle-dove', word: 'tourterelle', translation: 'tórtola', articleFr: 'une', articleEs: 'una' },
{ id: 'animal-peacock', word: 'paon', translation: 'pavo real', articleFr: 'un', articleEs: 'un' , emoji: '🦚' },
{ id: 'animal-ostrich', word: 'autruche', translation: 'avestruz', articleFr: 'une', articleEs: 'un' , emoji: '🦤' },
          { id: 'animal-vulture', word: 'vautour', translation: 'buitre', articleFr: 'un', articleEs: 'un' },
{ id: 'animal-falcon', word: 'faucon', translation: 'halcón', articleFr: 'un', articleEs: 'un' , emoji: null },
          { id: 'animal-hummingbird', word: 'colibri', translation: 'colibrí', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-woodpecker', word: 'pic', translation: 'pájaro carpintero', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-heron', word: 'héron', translation: 'garza', articleFr: 'un', articleEs: 'una' },
{ id: 'animal-crow', word: 'corbeau', translation: 'cuervo', articleFr: 'un', articleEs: 'un' , emoji: null },
          { id: 'animal-blackbird', word: 'merle', translation: 'mirlo', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-nightingale', word: 'rossignol', translation: 'ruiseñor', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-magpie', word: 'pie', translation: 'urraca', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-toucan', word: 'toucan', translation: 'tucán', articleFr: 'un', articleEs: 'un' }
        ]
      },
      {
        id: 'animals-insects',
        title: 'Insectos',
        entries: [
{ id: 'animal-ant', word: 'fourmi', translation: 'hormiga', articleFr: 'une', articleEs: 'una' , emoji: '🐜' },
{ id: 'animal-bee', word: 'abeille', translation: 'abeja', articleFr: 'une', articleEs: 'una' , emoji: '🐝' },
{ id: 'animal-wasp', word: 'guêpe', translation: 'avispa', articleFr: 'une', articleEs: 'una' , emoji: null },
{ id: 'animal-hornet', word: 'frelon', translation: 'avispón', articleFr: 'un', articleEs: 'un' , emoji: null },
{ id: 'animal-fly', word: 'mouche', translation: 'mosca', articleFr: 'une', articleEs: 'una' , emoji: '🪰' },
{ id: 'animal-mosquito', word: 'moustique', translation: 'mosquito', articleFr: 'un', articleEs: 'un' , emoji: '🦟' },
{ id: 'animal-butterfly', word: 'papillon', translation: 'mariposa', articleFr: 'un', articleEs: 'una' , emoji: '🦋' },
          { id: 'animal-moth', word: 'papillon de nuit', translation: 'polilla', articleFr: 'un', articleEs: 'una' },
{ id: 'animal-beetle', word: 'scarabée', translation: 'escarabajo', articleFr: 'un', articleEs: 'un' , emoji: '🪲' },
{ id: 'animal-ladybug', word: 'coccinelle', translation: 'mariquita', articleFr: 'une', articleEs: 'una' , emoji: '🐞' },
{ id: 'animal-grasshopper', word: 'sauterelle', translation: 'saltamontes', articleFr: 'une', articleEs: 'un' , emoji: '🦗' },
          { id: 'animal-field-cricket', word: 'criquet', translation: 'grillo de campo', articleFr: 'un', articleEs: 'un' },
{ id: 'animal-dragonfly', word: 'libellule', translation: 'libélula', articleFr: 'une', articleEs: 'una' , emoji: null },
          { id: 'animal-flea', word: 'puce', translation: 'pulga', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-louse', word: 'pou', translation: 'piojo', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-bedbug', word: 'punaise', translation: 'chinche', articleFr: 'une', articleEs: 'una' },
{ id: 'animal-cockroach', word: 'cafard', translation: 'cucaracha', articleFr: 'un', articleEs: 'una' , emoji: '🪳' },
          { id: 'animal-praying-mantis', word: 'mante religieuse', translation: 'mantis religiosa', articleFr: 'une', articleEs: 'una' },
{ id: 'animal-caterpillar', word: 'chenille', translation: 'oruga', articleFr: 'une', articleEs: 'una' , emoji: '🐛' },
          { id: 'animal-cicada', word: 'cigale', translation: 'cigarra', articleFr: 'une', articleEs: 'una' },
{ id: 'animal-cricket', word: 'grillon', translation: 'grillo', articleFr: 'un', articleEs: 'un' , emoji: '🦗' },
          { id: 'animal-termite', word: 'termite', translation: 'termita', articleFr: 'un', articleEs: 'una' },
          { id: 'animal-silkworm', word: 'ver à soie', translation: 'gusano de seda', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-firefly', word: 'luciole', translation: 'luciérnaga', articleFr: 'une', articleEs: 'una' }
        ]
      },
      {
        id: 'animals-reptiles-amphibians',
        title: 'Reptiles y anfibios',
        entries: [
          { id: 'animal-viper', word: 'vipère', translation: 'víbora', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-king-cobra', word: 'cobra royal', translation: 'cobra real', articleFr: 'un', articleEs: 'una' },
          { id: 'animal-cobra', word: 'cobra', translation: 'cobra', articleFr: 'un', articleEs: 'una' },
{ id: 'animal-alligator', word: 'alligator', translation: 'caimán', articleFr: 'un', articleEs: 'un' , emoji: null },
{ id: 'animal-iguana', word: 'iguane', translation: 'iguana', articleFr: 'un', articleEs: 'una' , emoji: '🦎' },
          { id: 'animal-monitor-lizard', word: 'varan', translation: 'varano', articleFr: 'un', articleEs: 'un' },
{ id: 'animal-chameleon', word: 'caméléon', translation: 'camaleón', articleFr: 'un', articleEs: 'un' , emoji: '🦎' },
{ id: 'animal-gecko', word: 'gecko', translation: 'geco', articleFr: 'un', articleEs: 'un' , emoji: '🦎' },
{ id: 'animal-lizard', word: 'lézard', translation: 'lagarto / lagartija', articleFr: 'un', articleEs: 'un / una' , emoji: '🦎' },
          { id: 'animal-python', word: 'python', translation: 'pitón', articleFr: 'un', articleEs: 'una' },
          { id: 'animal-boa-constrictor', word: 'boa constricteur', translation: 'boa constrictora', articleFr: 'un', articleEs: 'una' },
          { id: 'animal-boa', word: 'boa', translation: 'boa', articleFr: 'un', articleEs: 'una' },
          { id: 'animal-rattlesnake', word: 'serpent à sonnette', translation: 'serpiente de cascabel', articleFr: 'un', articleEs: 'una' },
{ id: 'animal-turtle', word: 'tortue', translation: 'tortuga', articleFr: 'une', articleEs: 'una' , emoji: '🐢' },
{ id: 'animal-frog', word: 'grenouille', translation: 'rana', articleFr: 'une', articleEs: 'una' , emoji: '🐸' },
{ id: 'animal-toad', word: 'crapaud', translation: 'sapo', articleFr: 'un', articleEs: 'un' , emoji: null },
          { id: 'animal-tree-frog', word: 'rainette', translation: 'ranita', articleFr: 'une', articleEs: 'una' },
{ id: 'animal-salamander', word: 'salamandre', translation: 'salamandra', articleFr: 'une', articleEs: 'una' , emoji: null },
          { id: 'animal-newt', word: 'triton', translation: 'tritón', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-axolotl', word: 'axolotl', translation: 'ajolote', articleFr: 'un', articleEs: 'un' },
{ id: 'animal-snake', word: 'serpent', translation: 'serpiente', articleFr: 'un', articleEs: 'una' , emoji: '🐍' },
          { id: 'animal-snake-female', word: 'couleuvre', translation: 'culebra', articleFr: 'une', articleEs: 'una' }
        ]
      },
      {
        id: 'animals-accessories-care',
        title: 'Accesorios y cuidado',
        entries: [
          { id: 'animal-collar', word: 'collier', translation: 'collar', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-leash', word: 'laisse', translation: 'correa', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-harness', word: 'harnais', translation: 'arnés', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-medal', word: 'médaille', translation: 'medalla', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-muzzle', word: 'muselière', translation: 'bozal', articleFr: 'une', articleEs: 'un' },
          { id: 'animal-brush', word: 'brosse', translation: 'cepillo', articleFr: 'une', articleEs: 'un' },
          { id: 'animal-shampoo', word: 'shampoing', translation: 'champú', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-towel', word: 'serviette', translation: 'toalla', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-claw-clipper', word: 'coupe-griffes', translation: 'cortaúñas / cortagarras', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-tick-tweezers', word: 'pince à tiques', translation: 'pinza para garrapatas', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-waste-bag', word: 'sac à déjections', translation: 'bolsa para excrementos', articleFr: 'un', articleEs: 'una' },
          { id: 'animal-litter', word: 'litière', translation: 'arena para gatos', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-litter-box', word: 'bac à litière', translation: 'arenero', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-litter-scoop', word: 'pelle à litière', translation: 'pala para arena', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-mat', word: 'tapis pour animaux', translation: 'alfombra para animales', articleFr: 'un', articleEs: 'una' },
          { id: 'animal-blanket', word: 'couverture', translation: 'manta', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-cushion', word: 'coussin', translation: 'cojín', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-toy', word: 'jouet', translation: 'juguete', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-ball', word: 'balle', translation: 'pelota', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-rope', word: 'corde', translation: 'cuerda', articleFr: 'une', articleEs: 'una' }
        ]
      },
      {
        id: 'animals-food',
        title: 'Alimentación',
        entries: [
          { id: 'animal-feeding-bowl', word: 'gamelle', translation: 'comedero', articleFr: 'une', articleEs: 'un' },
          { id: 'animal-bowl', word: 'bol', translation: 'cuenco', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-water-trough', word: 'abreuvoir', translation: 'bebedero', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-feeder', word: 'mangeoire', translation: 'comedero para animales', articleFr: 'une', articleEs: 'un' },
          { id: 'animal-water-dispenser', word: 'distributeur d’eau', translation: 'dispensador de agua', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-kibble', word: 'croquettes', translation: 'croquetas / pienso', articleFr: 'des', articleEs: 'unas' },
          { id: 'animal-wet-food', word: 'pâtée', translation: 'comida húmeda', articleFr: 'de la', articleEs: '—' },
          { id: 'animal-treat', word: 'friandise', translation: 'golosina / premio', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-chew-bone', word: 'os à mâcher', translation: 'hueso para masticar', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-chew-stick', word: 'bâtonnet à mâcher', translation: 'barrita para masticar', articleFr: 'un', articleEs: 'una' },
          { id: 'animal-kibble-bag', word: 'sac de croquettes', translation: 'bolsa de pienso', articleFr: 'un', articleEs: 'una' },
          { id: 'animal-wet-food-can', word: 'boîte de pâtée', translation: 'lata de comida húmeda', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-bird-feeder', word: 'mangeoire à oiseaux', translation: 'comedero para aves', articleFr: 'une', articleEs: 'un' },
          { id: 'animal-bird-waterer', word: 'abreuvoir à oiseaux', translation: 'bebedero para aves', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-food-container', word: 'récipient', translation: 'recipiente', articleFr: 'un', articleEs: 'un' }
        ]
      },
      {
        id: 'animals-habitat',
        title: 'Hábitat y alojamiento',
        entries: [
          { id: 'animal-doghouse', word: 'niche', translation: 'caseta', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-cage', word: 'cage', translation: 'jaula', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-aquarium', word: 'aquarium', translation: 'acuario', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-terrarium', word: 'terrarium', translation: 'terrario', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-basket', word: 'panier', translation: 'cama / cesta', articleFr: 'un', articleEs: 'una' },
          { id: 'animal-cabin', word: 'cabane', translation: 'casita', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-enclosure', word: 'enclos', translation: 'recinto', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-fence', word: 'clôture', translation: 'valla', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-perch', word: 'perchoir', translation: 'percha', articleFr: 'un', articleEs: 'una' },
          { id: 'animal-nest', word: 'nid', translation: 'nido', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-birdhouse', word: 'maison pour oiseaux', translation: 'casa para pájaros', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-wheel', word: 'roue', translation: 'rueda', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-tunnel', word: 'tunnel', translation: 'túnel', articleFr: 'un', articleEs: 'un' },
          { id: 'animal-hideout', word: 'cachette', translation: 'escondite', articleFr: 'une', articleEs: 'un' },
          { id: 'animal-transport-bag', word: 'sac de transport', translation: 'bolsa de transporte', articleFr: 'un', articleEs: 'una' },
          { id: 'animal-transport-crate', word: 'caisse de transport', translation: 'caja de transporte', articleFr: 'une', articleEs: 'una' },
          { id: 'animal-pet-park', word: 'parc pour animaux', translation: 'parque para animales', articleFr: 'un', articleEs: 'un' }
        ]
      }
    ]
  };

  if (!window.COQ_VOCABULARY_DATABASE_API || typeof window.COQ_VOCABULARY_DATABASE_API.registerCategory !== 'function') {
    throw new Error('COQ Vocabulario: el registro de base de datos debe cargarse antes de las categorías.');
  }

  window.COQ_VOCABULARY_ANIMALS = Object.freeze(animals);
  window.COQ_VOCABULARY_DATABASE_API.registerCategory(animals);
})();
