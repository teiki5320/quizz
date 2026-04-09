/*
  AFROTOK QUIZ  —  BANQUE DE QUESTIONS
  =====================================
  Afrique SUBSAHARIENNE uniquement.

  Format d'une question :
    {
      category:    "musique" | "geographie" | "culture" | "football" |
                   "gastronomie" | "cinema" | "histoire" | "destinations" |
                   "faune" | "telerealite" | "devinettes",
      question:    "Texte de la question",
      options:     ["A", "B", "C", "D"],
      correct:     0,   // index 0..3 de la bonne réponse
      description: "Courte explication affichée au moment de la révélation."
    }

  Pour enrichir le quiz, ajoute simplement de nouvelles entrées à la suite.
*/

const QUESTIONS = [

  { category: "musique",
    question: "Qui est surnommée « Mama Africa » ?",
    options: ["Miriam Makeba", "Angélique Kidjo", "Cesária Évora", "Oumou Sangaré"],
    correct: 0,
    description: "Miriam Makeba (1932-2008), chanteuse sud-africaine, icône mondiale de la lutte contre l'apartheid." },

  { category: "geographie",
    question: "Quelle est la capitale du Sénégal ?",
    options: ["Abidjan", "Dakar", "Bamako", "Conakry"],
    correct: 1,
    description: "Dakar, située sur la presqu'île du Cap-Vert, est la ville la plus à l'ouest du continent africain." },

  { category: "culture",
    question: "Le tissu Kente, coloré et sacré, est originaire de quel pays ?",
    options: ["Ghana", "Nigeria", "Mali", "Sénégal"],
    correct: 0,
    description: "Tissé par le peuple Ashanti au Ghana depuis le XVIIe siècle, chaque motif et couleur du Kente a une signification précise." },

  { category: "football",
    question: "Qui a remporté la CAN 2023 organisée en Côte d'Ivoire ?",
    options: ["Nigeria", "Côte d'Ivoire", "Afrique du Sud", "Sénégal"],
    correct: 1,
    description: "La Côte d'Ivoire a remporté sa 3e CAN à domicile en battant le Nigeria 2-1 en finale, le 11 février 2024." },

  { category: "gastronomie",
    question: "Le thiéboudiène est le plat national de quel pays ?",
    options: ["Mali", "Sénégal", "Côte d'Ivoire", "Guinée"],
    correct: 1,
    description: "Riz au poisson et légumes, le thiéboudiène sénégalais est inscrit au patrimoine culturel immatériel de l'UNESCO depuis 2021." },

  { category: "cinema",
    question: "Quel est le surnom de l'industrie cinématographique nigériane ?",
    options: ["Nollywood", "Afriwood", "Lagoswood", "Naijawood"],
    correct: 0,
    description: "Nollywood, basée à Lagos, est la 2e industrie cinématographique mondiale en nombre de films, derrière Bollywood." },

  { category: "histoire",
    question: "Quel empereur du Mali du XIVe siècle est considéré comme l'homme le plus riche de l'histoire ?",
    options: ["Soundiata Keïta", "Askia Mohammed", "Mansa Moussa", "Almamy Samory"],
    correct: 2,
    description: "Mansa Moussa (1280-1337), empereur de l'empire du Mali. Son pèlerinage à La Mecque en 1324 fit littéralement chuter le cours de l'or." },

  { category: "destinations",
    question: "Sur quel archipel tanzanien se trouve Stone Town, inscrite à l'UNESCO ?",
    options: ["Comores", "Zanzibar", "Seychelles", "Mafia"],
    correct: 1,
    description: "Zanzibar, archipel au large de la Tanzanie, est célèbre pour ses plages, ses épices et son héritage swahili." },

  { category: "faune",
    question: "Quel est l'animal terrestre le plus rapide au monde, emblème des savanes africaines ?",
    options: ["Le léopard", "Le lion", "Le guépard", "L'antilope"],
    correct: 2,
    description: "Le guépard (Acinonyx jubatus) atteint 110 km/h en pointe. On le trouve surtout en Afrique de l'Est et australe." },

  { category: "telerealite",
    question: "Quelle téléréalité nigériane est l'une des plus suivies d'Afrique ?",
    options: ["Big Brother Naija", "The Voice Afrique", "Africa's Got Talent", "Lagos Housewives"],
    correct: 0,
    description: "Big Brother Naija (BBNaija) enferme des candidats pendant plusieurs semaines pour un prix pouvant dépasser 100 millions de nairas." },

  { category: "devinettes",
    question: "Je traverse Kinshasa et Brazzaville et je suis le fleuve au plus grand débit d'Afrique. Qui suis-je ?",
    options: ["Le Niger", "Le Zambèze", "Le Congo", "Le Sénégal"],
    correct: 2,
    description: "Le fleuve Congo, long de 4700 km, possède le plus grand débit d'Afrique (~40 000 m³/s) et le 2e au monde après l'Amazone." }

];
