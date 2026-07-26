/* =========================================================
   NO WAY! — mode CURSEUR (« à vue de nez »)
   Chaque question a une réponse CHIFFRÉE : le joueur place un
   curseur sur une échelle, et marque d'autant plus de points
   qu'il en est proche.
   Structure : {q, n, min, max, u, e, t}
     q = énoncé · n = bonne réponse (nombre) · min/max = bornes de l'échelle
     u = unité affichée · e = explication · t = thème (pastille)
   Chargé avant curseur.html ; expose la globale `QC`.
   ========================================================= */
const QC = [
/* ---------- Terre ---------- */
{t:'geo',q:"Combien de jours la Belgique a-t-elle tenu sans gouvernement ?",n:541,min:0,max:1000,u:"jours",e:"541 jours entre 2010 et 2011. Les poubelles ont continué d'être ramassées, les trains de rouler : personne n'a vraiment remarqué."},
{t:'geo',q:"Quelle est la largeur moyenne du Chili ?",n:177,min:0,max:800,u:"km",e:"177 km de large pour 4 300 km de long. Le pays est plus étroit que la distance Paris-Lyon, mais s'étire sur un huitième du globe."},
{t:'geo',q:"À quelle altitude siège le gouvernement bolivien, à La Paz ?",n:3640,min:0,max:6000,u:"m",e:"3 640 m. Les moteurs y perdent un tiers de leur puissance et les visiteurs, leur souffle en montant un escalier."},
{t:'geo',q:"Quelle distance sépare les États-Unis de la Russie au point le plus proche ?",n:4,min:0,max:40,u:"km",e:"Moins de 4 km entre les deux îles Diomède. En hiver on pourrait presque traverser à pied — sauf que la ligne de changement de date passe entre les deux : 21 heures d'écart."},
{t:'geo',q:"Combien de lacs compte le Canada ?",n:2000000,min:0,max:4000000,u:"lacs",e:"Environ deux millions, soit plus que tout le reste du monde réuni. Héritage direct du rabotage des glaciers."},
{t:'geo',q:"Combien d'habitants compte le Vatican ?",n:800,min:0,max:5000,u:"habitants",e:"Environ 800 résidents, dont une large majorité de religieux. Le plus petit État du monde tient dans un rectangle qu'on traverse à pied en vingt minutes."},
{t:'geo',q:"De combien de minutes le Népal décale-t-il son heure sur ses voisins ?",n:45,min:0,max:120,u:"minutes",e:"45 minutes : l'un des rares pays au monde calé au quart d'heure, sur le méridien d'une montagne proche de Katmandou."},
{t:'geo',q:"Combien d'îles le Japon a-t-il recensées lors de son recomptage de 2023 ?",n:14125,min:0,max:30000,u:"îles",e:"14 125, soit plus du double du chiffre officiel précédent. Les cartes numériques ont simplement révélé des milliers d'îlots jamais comptés."},
{t:'geo',q:"Quelle est la profondeur du lac Baïkal ?",n:1642,min:0,max:3000,u:"m",e:"1 642 m : on pourrait y empiler cinq tours Eiffel. Il contient à lui seul près d'un cinquième de l'eau douce liquide de la planète."},
{t:'geo',q:"De combien la rive de la mer Morte se situe-t-elle sous le niveau de la mer ?",n:430,min:0,max:1000,u:"m",e:"Environ 430 m sous le niveau de la mer, le point émergé le plus bas du globe. Et il continue de descendre d'un mètre par an."},

/* ---------- Hier ---------- */
{t:'histo',q:"Combien de temps a duré la guerre la plus courte de l'histoire ?",n:38,min:0,max:180,u:"minutes",e:"38 minutes, à Zanzibar en 1896. Le temps d'un bombardement : le café des officiers n'avait pas refroidi."},
{t:'histo',q:"Combien d'années a duré la guerre de Cent Ans ?",n:116,min:0,max:200,u:"ans",e:"116 ans, entrecoupés de longues trêves. Le nom a été inventé bien plus tard par des historiens qui cherchaient à faire simple."},
{t:'histo',q:"Combien de personnes a tuées l'inondation de mélasse de Boston, en 1919 ?",n:21,min:0,max:100,u:"morts",e:"21 morts. Un réservoir a lâché et une vague de mélasse de huit mètres a dévalé les rues à 50 km/h. L'odeur de sucre a hanté le quartier pendant des décennies."},
{t:'histo',q:"Combien pesait l'armure complète d'un chevalier en combat ?",n:25,min:0,max:80,u:"kg",e:"Entre 20 et 25 kg, répartis sur tout le corps. Assez léger pour courir, monter à cheval et se relever seul : les films exagèrent largement."},
{t:'histo',q:"Combien de jours durait une momification égyptienne ?",n:70,min:0,max:200,u:"jours",e:"70 jours, une durée rituelle fixe, dont quarante de séchage au natron. Pas un de plus, pas un de moins."},
{t:'histo',q:"Quelle était la hauteur d'origine de la pyramide de Khéops ?",n:146,min:0,max:300,u:"m",e:"146 m. Elle est restée la plus haute construction humaine pendant près de 4 000 ans, jusqu'aux cathédrales gothiques."},
{t:'histo',q:"Quelle hauteur atteint le mont Testaccio, à Rome, fait de poteries brisées ?",n:35,min:0,max:100,u:"m",e:"35 m de haut, uniquement des amphores cassées. Les Romains empilaient méthodiquement leurs pots à huile usagés : c'est la plus vieille décharge organisée du monde."},

/* ---------- Cerveau ---------- */
{t:'sci',q:"Combien de temps la lumière met-elle à s'échapper du cœur du Soleil ?",n:100000,min:0,max:200000,u:"ans",e:"Environ 100 000 ans à rebondir de particule en particule. Puis seulement 8 minutes pour parcourir les 150 millions de km jusqu'à nous."},
{t:'sci',q:"À quelle vitesse file l'influx nerveux le plus rapide du corps humain ?",n:430,min:0,max:800,u:"km/h",e:"Jusqu'à 430 km/h, plus vite qu'un TGV. C'est pour ça que la main se retire de la plaque brûlante avant même que la douleur soit perçue."},
{t:'sci',q:"Combien de fois le cœur humain bat-il au cours d'une vie ?",n:2500000000,min:0,max:5000000000,u:"battements",e:"Environ 2,5 milliards. Curiosité : la plupart des mammifères, de la souris à la baleine, tournent autour du même total — ils le dépensent juste plus ou moins vite."},
{t:'sci',q:"Quelle tension peut produire une anguille électrique ?",n:600,min:0,max:1200,u:"volts",e:"Jusqu'à 600 volts, cinq fois une prise de courant. Elle s'en sert aussi comme radar, en envoyant de petites décharges pour cartographier l'eau trouble."},
{t:'sci',q:"À quelle température le gallium, un métal, fond-il ?",n:30,min:0,max:100,u:"°C",e:"Environ 30 °C : une cuillère en gallium fond dans une tasse de thé. Les chimistes adorent la blague, moins les invités."},
{t:'sci',q:"Combien de temps s'écoule entre deux gouttes dans la célèbre expérience de la poix ?",n:9,min:0,max:25,u:"ans",e:"Environ 9 ans par goutte. Lancée en 1927, l'expérience tourne toujours — et le chercheur qui la surveillait est mort sans jamais avoir vu tomber une seule goutte en direct."},
{t:'sci',q:"Combien de fois la dose de radiation mortelle pour l'homme un tardigrade encaisse-t-il ?",n:1000,min:0,max:2000,u:"fois",e:"Environ 1 000 fois. Il survit aussi au vide spatial, à −272 °C et à des décennies de déshydratation. Il mesure moins d'un millimètre."},

/* ---------- Là-haut ---------- */
{t:'espace',q:"À quelle vitesse la Station spatiale internationale file-t-elle autour de la Terre ?",n:27600,min:0,max:50000,u:"km/h",e:"27 600 km/h, soit un tour complet en 90 minutes. À cette allure, Paris-New York prendrait douze minutes."},
{t:'espace',q:"Combien de levers de soleil les astronautes de l'ISS voient-ils par jour ?",n:16,min:0,max:40,u:"levers",e:"16 par jour. Pour dormir, ils s'attachent dans un sac et se bandent les yeux : leur horloge biologique reste calée sur Greenwich."},
{t:'espace',q:"Quel est le record de séjour continu dans l'espace ?",n:437,min:0,max:800,u:"jours",e:"437 jours d'affilée pour Valeri Poliakov, à bord de Mir. Il est parti d'Union soviétique et rentré dans une Russie qui n'existait pas à son départ."},
{t:'espace',q:"Quel pourcentage de la gravité terrestre règne à l'altitude de l'ISS ?",n:90,min:0,max:100,u:"%",e:"90 %. Les astronautes ne flottent pas parce qu'il n'y a plus de gravité, mais parce qu'ils sont en chute libre permanente autour de la Terre."},
{t:'espace',q:"Combien de temps Armstrong et Aldrin ont-ils marché sur la Lune ?",n:151,min:0,max:400,u:"minutes",e:"2 h 31 dehors, pas plus. Après des années de préparation et 380 000 km de voyage, la sortie a duré le temps d'un film."},
{t:'espace',q:"Quelle température règne à la surface de Vénus ?",n:465,min:0,max:800,u:"°C",e:"465 °C, de jour comme de nuit, partout sur la planète. C'est plus chaud que Mercure, pourtant deux fois plus proche du Soleil : l'effet de serre y est total."},

/* ---------- Bêtes ---------- */
{t:'animaux',q:"Combien de temps vit un requin du Groenland ?",n:400,min:0,max:600,u:"ans",e:"Environ 400 ans. Certains individus nageaient déjà quand Louis XIV régnait — et ils n'atteignent la maturité sexuelle qu'à 150 ans."},
{t:'animaux',q:"À quelle fréquence bat le cœur d'un colibri en plein vol ?",n:1200,min:0,max:2000,u:"battements/min",e:"Jusqu'à 1 200 battements par minute. La nuit, pour ne pas mourir d'épuisement, il tombe en torpeur et son cœur descend à 50."},
{t:'animaux',q:"Combien de pattes compte le mille-pattes record du monde ?",n:1306,min:0,max:2000,u:"pattes",e:"1 306 pattes pour une espèce trouvée en Australie en 2021 — la première à mériter vraiment son nom. Elle vit à 60 m sous terre et est aveugle."},
{t:'animaux',q:"Combien de kilomètres une sterne arctique parcourt-elle chaque année ?",n:90000,min:0,max:150000,u:"km",e:"Environ 90 000 km entre Arctique et Antarctique. Sur une vie, cela représente trois allers-retours Terre-Lune."},
{t:'animaux',q:"Combien de dents un escargot possède-t-il ?",n:14000,min:0,max:30000,u:"dents",e:"Environ 14 000, alignées sur une langue râpeuse appelée radula. Il ne mâche pas : il râpe."},
{t:'animaux',q:"Combien pèse la langue d'une baleine bleue ?",n:2700,min:0,max:6000,u:"kg",e:"2 700 kg, le poids d'un éléphant. Un être humain pourrait tenir debout dans son aorte."},
{t:'animaux',q:"Combien d'œufs une femelle poisson-lune peut-elle pondre en une saison ?",n:300000000,min:0,max:500000000,u:"œufs",e:"Jusqu'à 300 millions, un record chez les vertébrés. Statistiquement, deux survivront."},

/* ---------- Miam ---------- */
{t:'cuisine',q:"Combien de litres de bière recevaient chaque jour les bâtisseurs des pyramides ?",n:4,min:0,max:10,u:"litres",e:"Environ 4 litres par jour, versés en guise de salaire. C'était une boisson nourrissante et plus sûre que l'eau du Nil."},
{t:'cuisine',q:"Combien d'unités Scoville atteint le piment Pepper X ?",n:2693000,min:0,max:5000000,u:"unités",e:"2 693 000 unités, environ mille fois un jalapeño. Son créateur dit avoir passé trois heures et demie au sol, pris de crampes."},
{t:'cuisine',q:"Combien de graines porte une fraise en moyenne ?",n:200,min:0,max:500,u:"graines",e:"Environ 200 — et ce ne sont pas des graines mais de minuscules fruits secs. La fraise elle-même n'est donc pas un fruit au sens botanique."},
{t:'cuisine',q:"Combien s'est vendu le melon Yubari le plus cher du monde ?",n:45000,min:0,max:100000,u:"dollars",e:"45 000 dollars la paire, lors d'une enchère au Japon. Ces melons sont massés, coiffés d'un petit chapeau contre le soleil et vendus comme des cadeaux de prestige."},
{t:'cuisine',q:"Après combien d'années du miel retrouvé en Égypte était-il encore comestible ?",n:3000,min:0,max:6000,u:"ans",e:"Plus de 3 000 ans. Trop acide et trop pauvre en eau pour les bactéries, le miel est l'un des rares aliments qui ne périment jamais."},

/* ---------- Machines ---------- */
{t:'techno',q:"Combien de bitcoins ont servi à payer deux pizzas en 2010 ?",n:10000,min:0,max:20000,u:"bitcoins",e:"10 000 bitcoins pour deux pizzas — la première transaction commerciale en cryptomonnaie. Les développeurs fêtent encore ce jour-là, avec un goût amer."},
{t:'techno',q:"Combien pesait le tout premier téléphone portable commercialisé ?",n:1100,min:0,max:3000,u:"grammes",e:"1,1 kg pour le DynaTAC de 1983, avec 30 minutes d'autonomie et 10 heures de charge. Il coûtait l'équivalent d'une petite voiture."},
{t:'techno',q:"Combien de temps a duré le premier vol des frères Wright ?",n:12,min:0,max:60,u:"secondes",e:"12 secondes et 37 mètres — moins que l'envergure d'un avion de ligne moderne. Le quatrième vol du même jour a tenu 59 secondes."},
{t:'techno',q:"Après combien de jours de vol continu un bug forçait-il à redémarrer le Boeing 787 ?",n:248,min:0,max:500,u:"jours",e:"248 jours : un compteur interne débordait et pouvait couper toute l'alimentation électrique en plein vol. Le correctif officiel a d'abord été « éteindre et rallumer l'avion »."},
{t:'techno',q:"Combien Knight Capital a-t-elle perdu en 45 minutes à cause d'un bug, en 2012 ?",n:440,min:0,max:1000,u:"millions de dollars",e:"440 millions de dollars en trois quarts d'heure. Un vieux code réactivé par erreur s'est mis à acheter haut et vendre bas, en boucle, tout seul."},
{t:'techno',q:"Depuis combien d'années brûle l'ampoule centenaire de Livermore ?",n:125,min:0,max:200,u:"ans",e:"Allumée depuis 1901, elle a survécu à trois webcams chargées de la surveiller. Filament épais et jamais éteinte : le secret de sa longévité."},

/* ---------- WTF ---------- */
{t:'wtf',q:"Combien d'années a duré le plus long hoquet jamais enregistré ?",n:68,min:0,max:100,u:"ans",e:"68 ans, de 1922 à 1990, pour l'Américain Charles Osborne. Il a eu une vie normale, deux mariages et huit enfants — en hoquetant."},
{t:'wtf',q:"Quelle longueur atteignaient les ongles d'une seule main de Shridhar Chillal ?",n:9,min:0,max:15,u:"mètres",e:"9 mètres cumulés sur cinq doigts, après 66 ans sans les couper. Sa main gauche est devenue inutilisable et il dormait sans bouger."},
{t:'wtf',q:"Combien de Big Mac Don Gorske a-t-il mangés dans sa vie ?",n:34000,min:0,max:50000,u:"Big Mac",e:"Plus de 34 000, un par jour depuis 1972. Son taux de cholestérol est normal et il a gardé toutes ses dents."},
{t:'wtf',q:"Combien de personnes ont été prises dans l'épidémie de danse de Strasbourg en 1518 ?",n:400,min:0,max:1000,u:"personnes",e:"Environ 400. Elles ont dansé des jours durant, certaines jusqu'à l'épuisement. Les autorités, croyant à un remède, ont fait venir des musiciens pour les accompagner."},
{t:'wtf',q:"Combien d'émeus l'armée australienne a-t-elle abattus pendant la « guerre des émeus » ?",n:986,min:0,max:5000,u:"émeus",e:"986 sur les 20 000 visés, pour 10 000 cartouches. Les oiseaux se dispersaient dès les premiers tirs : l'armée a battu en retraite."},
{t:'wtf',q:"Combien de mois a vécu Mike, le poulet sans tête ?",n:18,min:0,max:36,u:"mois",e:"18 mois. La hache avait épargné une oreille et l'essentiel du tronc cérébral. Son propriétaire le nourrissait à la pipette et l'exhibait dans les foires."},

/* ---------- Terrain ---------- */
{t:'sport',q:"Combien de rounds a duré le plus long combat de boxe officiel ?",n:110,min:0,max:200,u:"rounds",e:"110 rounds en 1893, plus de sept heures. Les deux boxeurs étaient trop épuisés pour continuer : le match a été déclaré nul et personne n'a touché la bourse."},
{t:'sport',q:"À quel âge le plus vieux médaillé olympique a-t-il décroché sa médaille ?",n:72,min:0,max:100,u:"ans",e:"72 ans, pour le tireur suédois Oscar Swahn en 1920. Il s'était déjà qualifié pour les Jeux suivants, à 76 ans, mais la maladie l'en a empêché."},
{t:'sport',q:"Combien de temps a duré le plus long échange de tennis de table, pour un seul point ?",n:132,min:0,max:300,u:"minutes",e:"2 h 12 pour un unique point, en 1936. Les deux joueurs se contentaient de renvoyer sans jamais attaquer. La règle du temps limite est née de ce match."},
{t:'sport',q:"En combien de temps Abebe Bikila a-t-il gagné le marathon de Rome, pieds nus ?",n:135,min:0,max:300,u:"minutes",e:"2 h 15 et un record du monde, sans chaussures. Les siennes le blessaient : il a préféré courir comme il s'entraînait, sur les pavés de la voie Appienne."},

/* ---------- Pop ---------- */
{t:'pop',q:"Combien d'exemplaires de l'album Thriller ont été vendus ?",n:70,min:0,max:150,u:"millions",e:"Environ 70 millions, record absolu. À sa sortie, il se vendait un million d'exemplaires par semaine."},
{t:'pop',q:"Combien de figurants ont participé à la scène des funérailles du film Gandhi ?",n:300000,min:0,max:500000,u:"figurants",e:"Environ 300 000 personnes, un record jamais battu. La scène a été tournée en une seule journée, à la date anniversaire des vraies funérailles."},
{t:'pop',q:"Quel était le budget du film d'horreur le plus rentable de l'histoire, Paranormal Activity ?",n:15000,min:0,max:100000,u:"dollars",e:"15 000 dollars, tourné dans la maison du réalisateur en une semaine. Il a rapporté près de 200 millions."},

/* ---------- Récits ---------- */
{t:'litt',q:"Combien d'éditeurs ont refusé le premier Harry Potter ?",n:12,min:0,max:30,u:"éditeurs",e:"12 refus avant que Bloomsbury n'accepte — sur les conseils de la fille de huit ans du patron, qui avait lu le premier chapitre."},
{t:'litt',q:"Combien de mots compte « À la recherche du temps perdu » ?",n:1267000,min:0,max:2000000,u:"mots",e:"Environ 1 267 000 mots, l'un des plus longs romans jamais publiés. À raison d'une page par jour, il faut plus de sept ans pour le lire."},
{t:'litt',q:"Combien de mois la Joconde est-elle restée disparue après son vol en 1911 ?",n:28,min:0,max:60,u:"mois",e:"28 mois. Le voleur l'avait cachée sous son lit à Paris. Paradoxe : c'est ce vol qui a rendu le tableau mondialement célèbre."},

/* ---------- Pinceau ---------- */
{t:'art',q:"Combien s'est vendu le Salvator Mundi, tableau le plus cher du monde ?",n:450,min:0,max:700,u:"millions de dollars",e:"450 millions de dollars en 2017. Il avait été racheté 1 000 dollars en 2005, alors qu'on le croyait peint par un simple élève de Léonard."},
{t:'art',q:"Combien Abu Dhabi a-t-elle payé pour utiliser le nom « Louvre » ?",n:400,min:0,max:1000,u:"millions d'euros",e:"400 millions d'euros pour trente ans, plus les prêts d'œuvres. Le nom d'un musée valait à lui seul plus que la plupart des tableaux qu'il abrite."},
{t:'art',q:"Combien s'est vendue la banane scotchée au mur de Maurizio Cattelan ?",n:120000,min:0,max:500000,u:"dollars",e:"120 000 dollars — pour un certificat d'authenticité et le mode d'emploi. Un artiste l'a mangée pendant l'exposition : l'œuvre a simplement été remplacée."},

/* ---------- Mots ---------- */
{t:'langue',q:"Combien de lettres compte « anticonstitutionnellement » ?",n:25,min:0,max:50,u:"lettres",e:"25 lettres, longtemps le mot le plus long du dictionnaire courant. Les termes chimiques, eux, dépassent allègrement la centaine."},
{t:'langue',q:"Combien de membres compte l'Académie française ?",n:40,min:0,max:100,u:"membres",e:"40, depuis Richelieu en 1635. On ne devient académicien qu'à la mort d'un autre — d'où le surnom d'« immortels »."},
{t:'langue',q:"Combien de mots compte environ le Petit Robert ?",n:60000,min:0,max:150000,u:"mots",e:"Environ 60 000. Le français en compterait des centaines de milliers au total, mais une conversation courante en utilise moins de 3 000."},

/* ---------- Sons ---------- */
{t:'musique',q:"Combien de personnes ont assisté au plus grand concert de l'histoire ?",n:3500000,min:0,max:6000000,u:"personnes",e:"3,5 millions sur la plage de Copacabana pour Rod Stewart, au Nouvel An 1994. La foule dépassait la population de nombreux pays."},
{t:'musique',q:"Quel niveau sonore atteint une vuvuzela à un mètre ?",n:127,min:0,max:200,u:"décibels",e:"127 décibels, plus qu'un marteau-piqueur ou une tronçonneuse. Les médecins ont recommandé des bouchons d'oreilles pendant la Coupe du monde 2010."}
];
