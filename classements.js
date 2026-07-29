/* =========================================================
   NO WAY! — banque de « Classe-les »
   Le joueur remet quatre éléments dans le bon ordre.
   Structure : {t, c, u, i:[{l, v}]}
     t = thème · c = la consigne · u = l'unité affichée à la révélation
     i = les quatre éléments, dans un ordre quelconque
         l = étiquette courte · v = la valeur qui donne l'ordre
   L'ordre attendu est TOUJOURS du plus GRAND v au plus PETIT :
   les consignes sont rédigées en conséquence.
   Les écarts sont choisis pour qu'au moins une paire soit
   contre-intuitive — sans quoi il n'y a rien à jouer.
   Chargé avant index.html ; expose la globale `CLASSEMENTS`.
   ========================================================= */
const CLASSEMENTS=[

/* ---------- animaux ---------- */
{t:'animaux',c:"Du plus rapide au plus lent",u:"km/h",
 i:[{l:"Guépard",v:110},{l:"Cheval de course",v:70},{l:"Crocodile marin",v:17},{l:"Ours brun",v:48}]},
{t:'animaux',c:"Du plus lourd au plus léger",u:"kg",
 i:[{l:"Baleine bleue",v:150000},{l:"Éléphant d'Afrique",v:6000},{l:"Girafe",v:1200},{l:"Ours polaire",v:500}]},
{t:'animaux',c:"De la plus longue vie à la plus courte",u:"ans",
 i:[{l:"Tortue des Galápagos",v:150},{l:"Éléphant",v:70},{l:"Chat",v:15},{l:"Souris",v:2}]},
{t:'animaux',c:"Du plus grand nombre de cœurs au plus petit",u:"cœurs",
 i:[{l:"Ver de terre",v:5},{l:"Pieuvre",v:3},{l:"Humain",v:1},{l:"Éponge de mer",v:0}]},
{t:'animaux',c:"De la gestation la plus longue à la plus courte",u:"jours",
 i:[{l:"Éléphant",v:645},{l:"Baleine bleue",v:340},{l:"Chien",v:63},{l:"Hamster",v:16}]},
{t:'animaux',c:"Du plus de dents au moins de dents",u:"dents",
 i:[{l:"Escargot",v:14000},{l:"Requin (en bouche)",v:300},{l:"Chien",v:42},{l:"Humain adulte",v:32}]},
{t:'animaux',c:"Du saut le plus haut au plus bas, en proportion du corps",u:"× sa taille",
 i:[{l:"Puce",v:100},{l:"Sauterelle",v:20},{l:"Kangourou",v:2},{l:"Humain",v:1}]},
{t:'animaux',c:"Du plus gros cerveau au plus petit",u:"g",
 i:[{l:"Cachalot",v:7800},{l:"Éléphant",v:5000},{l:"Humain",v:1400},{l:"Chat",v:30}]},

/* ---------- géographie ---------- */
{t:'geo',c:"Du plus peuplé au moins peuplé",u:"millions d'habitants",
 i:[{l:"Inde",v:1430},{l:"États-Unis",v:340},{l:"Brésil",v:216},{l:"France",v:68}]},
{t:'geo',c:"Du plus vaste au plus petit",u:"millions de km²",
 i:[{l:"Russie",v:17.1},{l:"Canada",v:10},{l:"Brésil",v:8.5},{l:"Inde",v:3.3}]},
{t:'geo',c:"Du plus haut au plus bas",u:"m",
 i:[{l:"Everest",v:8849},{l:"Kilimandjaro",v:5895},{l:"Mont Blanc",v:4806},{l:"Fuji",v:3776}]},
{t:'geo',c:"Du fleuve le plus long au plus court",u:"km",
 i:[{l:"Nil",v:6650},{l:"Amazone",v:6400},{l:"Mississippi",v:3766},{l:"Danube",v:2850}]},
{t:'geo',c:"Du plus profond au moins profond",u:"m",
 i:[{l:"Fosse des Mariannes",v:10935},{l:"Lac Baïkal",v:1642},{l:"Grand Canyon",v:1800},{l:"Mer Baltique",v:459}]},
{t:'geo',c:"De la ville la plus au nord à la plus au sud",u:"° de latitude",
 i:[{l:"Oslo",v:59.9},{l:"Paris",v:48.9},{l:"New York",v:40.7},{l:"Le Caire",v:30}]},
{t:'geo',c:"Du désert le plus vaste au plus petit",u:"millions de km²",
 i:[{l:"Antarctique",v:14},{l:"Sahara",v:9.2},{l:"Désert d'Arabie",v:2.3},{l:"Gobi",v:1.3}]},
{t:'geo',c:"Du pays au plus de fuseaux horaires au moins",u:"fuseaux",
 i:[{l:"France",v:12},{l:"Russie",v:11},{l:"États-Unis",v:6},{l:"Brésil",v:4}]},

/* ---------- espace ---------- */
{t:'espace',c:"De la planète la plus grosse à la plus petite",u:"km de diamètre",
 i:[{l:"Jupiter",v:139820},{l:"Saturne",v:116460},{l:"Terre",v:12742},{l:"Mars",v:6779}]},
{t:'espace',c:"De la plus chaude à la plus froide",u:"°C en surface",
 i:[{l:"Vénus",v:465},{l:"Mercure (jour)",v:430},{l:"Terre",v:15},{l:"Mars",v:-63}]},
{t:'espace',c:"Du plus loin du Soleil au plus proche",u:"millions de km",
 i:[{l:"Neptune",v:4500},{l:"Jupiter",v:778},{l:"Mars",v:228},{l:"Vénus",v:108}]},
{t:'espace',c:"De la journée la plus longue à la plus courte",u:"heures terrestres",
 i:[{l:"Vénus",v:5832},{l:"Mercure",v:1408},{l:"Mars",v:24.6},{l:"Jupiter",v:9.9}]},
{t:'espace',c:"Du plus ancien au plus récent",u:"année",
 i:[{l:"Spoutnik",v:1957},{l:"Premier homme dans l'espace",v:1961},{l:"Apollo 11",v:1969},{l:"Station spatiale internationale",v:1998}],rev:1},
{t:'espace',c:"Du plus massif au moins massif",u:"× la masse de la Terre",
 i:[{l:"Soleil",v:333000},{l:"Jupiter",v:318},{l:"Neptune",v:17},{l:"Lune",v:0.012}]},

/* ---------- sciences ---------- */
{t:'sci',c:"Du plus chaud au plus froid",u:"°C",
 i:[{l:"Éclair",v:30000},{l:"Surface du Soleil",v:5500},{l:"Lave",v:1200},{l:"Four de cuisine",v:250}]},
{t:'sci',c:"Du plus rapide au plus lent",u:"km/h",
 i:[{l:"Lumière",v:1080000000},{l:"Son dans l'air",v:1235},{l:"Avion de ligne",v:900},{l:"Guépard",v:110}]},
{t:'sci',c:"Du plus dense au moins dense",u:"g/cm³",
 i:[{l:"Or",v:19.3},{l:"Fer",v:7.9},{l:"Eau",v:1},{l:"Liège",v:0.24}]},
{t:'sci',c:"De la plus longue durée de vie au plus court",u:"jours",
 i:[{l:"Globule rouge",v:120},{l:"Cellule de peau",v:35},{l:"Cellule d'estomac",v:4},{l:"Globule blanc",v:1}]},
{t:'sci',c:"Du plus petit au plus grand",u:"nanomètres",
 i:[{l:"Atome",v:0.1},{l:"Molécule d'ADN (largeur)",v:2},{l:"Virus",v:100},{l:"Bactérie",v:2000}],rev:1},
{t:'sci',c:"Du plus d'eau au moins d'eau",u:"% du poids",
 i:[{l:"Méduse",v:97},{l:"Concombre",v:96},{l:"Nouveau-né",v:78},{l:"Adulte",v:60}]},

/* ---------- histoire ---------- */
{t:'histo',c:"Du plus ancien au plus récent",u:"année",
 i:[{l:"Pyramide de Khéops",v:-2560},{l:"Grande Muraille (début)",v:-220},{l:"Colisée",v:80},{l:"Tour Eiffel",v:1889}],rev:1},
{t:'histo',c:"Du règne le plus long au plus court",u:"ans",
 i:[{l:"Louis XIV",v:72},{l:"Élisabeth II",v:70},{l:"Victoria",v:63},{l:"Napoléon Iᵉʳ",v:10}]},
{t:'histo',c:"De la plus ancienne invention à la plus récente",u:"année",
 i:[{l:"Imprimerie",v:1450},{l:"Machine à vapeur",v:1712},{l:"Téléphone",v:1876},{l:"Internet",v:1969}],rev:1},
{t:'histo',c:"De la guerre la plus longue à la plus courte",u:"années",
 i:[{l:"Guerre de Cent Ans",v:116},{l:"Guerre de Trente Ans",v:30},{l:"Seconde Guerre mondiale",v:6},{l:"Guerre des Six Jours",v:0.02}]},
{t:'histo',c:"De la civilisation la plus ancienne à la plus récente",u:"début, année",
 i:[{l:"Sumer",v:-4000},{l:"Égypte pharaonique",v:-3100},{l:"Rome",v:-753},{l:"Empire aztèque",v:1325}],rev:1},

/* ---------- techno ---------- */
{t:'techno',c:"Du plus ancien au plus récent",u:"année",
 i:[{l:"Premier courriel",v:1971},{l:"Premier site web",v:1991},{l:"Premier iPhone",v:2007},{l:"ChatGPT",v:2022}],rev:1},
{t:'techno',c:"Du plus de mémoire au moins",u:"octets",
 i:[{l:"Téléphone courant",v:256000000000},{l:"Disquette",v:1440000},{l:"Ordinateur d'Apollo 11",v:4096},{l:"Carte perforée",v:80}]},
{t:'techno',c:"Du réseau au plus d'utilisateurs au moins",u:"millions",
 i:[{l:"Facebook",v:3000},{l:"Instagram",v:2000},{l:"TikTok",v:1500},{l:"X",v:550}]},

/* ---------- cuisine ---------- */
{t:'cuisine',c:"Du plus calorique au moins calorique",u:"kcal / 100 g",
 i:[{l:"Huile d'olive",v:900},{l:"Chocolat noir",v:550},{l:"Pain",v:265},{l:"Pomme",v:52}]},
{t:'cuisine',c:"Du plus piquant au plus doux",u:"unités Scoville",
 i:[{l:"Carolina Reaper",v:2200000},{l:"Piment habanero",v:350000},{l:"Piment de Cayenne",v:40000},{l:"Piment d'Espelette",v:4000}]},
{t:'cuisine',c:"Du plus cher au moins cher",u:"€ / kg",
 i:[{l:"Safran",v:15000},{l:"Truffe blanche",v:4000},{l:"Caviar",v:2500},{l:"Vanille",v:500}]},
{t:'cuisine',c:"Du plus sucré au moins sucré",u:"g de sucre / 100 g",
 i:[{l:"Miel",v:82},{l:"Confiture",v:60},{l:"Soda",v:11},{l:"Lait",v:5}]},

/* ---------- sport ---------- */
{t:'sport',c:"De la balle la plus rapide à la plus lente",u:"km/h",
 i:[{l:"Volant de badminton",v:493},{l:"Balle de golf",v:340},{l:"Balle de tennis",v:263},{l:"Ballon de football",v:210}]},
{t:'sport',c:"Du terrain le plus grand au plus petit",u:"m de long",
 i:[{l:"Football",v:105},{l:"Rugby",v:100},{l:"Basket",v:28},{l:"Tennis",v:24}]},
{t:'sport',c:"Du plus de joueurs sur le terrain au moins",u:"joueurs par équipe",
 i:[{l:"Rugby à XV",v:15},{l:"Football",v:11},{l:"Handball",v:7},{l:"Basket",v:5}]},

/* ---------- pop, art, musique ---------- */
{t:'pop',c:"Du film le plus long au plus court",u:"minutes",
 i:[{l:"Autant en emporte le vent",v:238},{l:"Titanic",v:194},{l:"Le Parrain",v:175},{l:"Le Roi Lion",v:88}]},
{t:'art',c:"Du tableau le plus grand au plus petit",u:"cm de large",
 i:[{l:"Les Noces de Cana",v:990},{l:"Le Radeau de la Méduse",v:716},{l:"La Nuit étoilée",v:92},{l:"La Joconde",v:53}]},
{t:'musique',c:"De l'instrument le plus grave au plus aigu",u:"Hz, note la plus basse",
 i:[{l:"Piccolo",v:587},{l:"Violon",v:196},{l:"Violoncelle",v:65},{l:"Contrebasse",v:41}],rev:1},
{t:'musique',c:"De l'album le plus vendu au moins vendu",u:"millions d'exemplaires",
 i:[{l:"Thriller",v:70},{l:"Back in Black",v:50},{l:"The Dark Side of the Moon",v:45},{l:"Rumours",v:40}]},

/* ---------- langue et récits ---------- */
{t:'langue',c:"De la langue au plus de locuteurs natifs au moins",u:"millions",
 i:[{l:"Mandarin",v:940},{l:"Espagnol",v:485},{l:"Anglais",v:380},{l:"Français",v:80}]},
{t:'langue',c:"De l'alphabet au plus de lettres au moins",u:"lettres",
 i:[{l:"Khmer",v:74},{l:"Russe",v:33},{l:"Français",v:26},{l:"Hawaïen",v:13}]},
{t:'litt',c:"Du livre le plus vendu au moins vendu",u:"millions d'exemplaires",
 i:[{l:"Don Quichotte",v:500},{l:"Le Seigneur des anneaux",v:150},{l:"Le Petit Prince",v:140},{l:"Harry Potter à l'école des sorciers",v:120}]},
{t:'litt',c:"Du plus ancien au plus récent",u:"année",
 i:[{l:"L'Odyssée",v:-750},{l:"Don Quichotte",v:1605},{l:"Les Misérables",v:1862},{l:"1984",v:1949}],rev:1},
];
