/*
  AFROTOK QUIZ — BANQUE DE QUESTIONS
  ----------------------------------
  50 questions sur l'Afrique subsaharienne.
  Modifie / ajoute / supprime librement, puis push sur GitHub Pages.

  Format attendu pour chaque question :
    {
      category: "musique" | "geographie" | "culture" | "football",
      question: "Texte de la question",
      options:  ["A", "B", "C", "D"],
      correct:  0   // index 0..3 de la bonne réponse
    }
*/

const QUESTIONS = [

  // ====== MUSIQUE (13) ======
  { category: "musique", question: "Qui est surnommée « Mama Africa » ?",
    options: ["Miriam Makeba", "Angélique Kidjo", "Cesária Évora", "Oumou Sangaré"], correct: 0 },

  { category: "musique", question: "Fela Kuti, pionnier de l'afrobeat, est originaire de quel pays ?",
    options: ["Ghana", "Nigeria", "Bénin", "Cameroun"], correct: 1 },

  { category: "musique", question: "De quel pays est originaire Youssou N'Dour ?",
    options: ["Mali", "Guinée", "Sénégal", "Gambie"], correct: 2 },

  { category: "musique", question: "Burna Boy, star de l'afrobeats, vient de quel pays ?",
    options: ["Afrique du Sud", "Kenya", "Ghana", "Nigeria"], correct: 3 },

  { category: "musique", question: "Salif Keïta, le « Prince albinos », est originaire de quel pays ?",
    options: ["Mali", "Guinée", "Burkina Faso", "Sénégal"], correct: 0 },

  { category: "musique", question: "Quel genre musical est né en Afrique du Sud dans les années 2010 ?",
    options: ["Afrobeats", "Amapiano", "Highlife", "Kwaito"], correct: 1 },

  { category: "musique", question: "Angélique Kidjo vient de quel pays ?",
    options: ["Togo", "Bénin", "Ghana", "Côte d'Ivoire"], correct: 1 },

  { category: "musique", question: "Tiken Jah Fakoly est originaire de quel pays ?",
    options: ["Mali", "Burkina Faso", "Côte d'Ivoire", "Guinée"], correct: 2 },

  { category: "musique", question: "Koffi Olomidé est une légende de la musique de quel pays ?",
    options: ["Congo-Brazzaville", "Angola", "Cameroun", "RD Congo"], correct: 3 },

  { category: "musique", question: "Diamond Platnumz est une superstar musicale de quel pays ?",
    options: ["Tanzanie", "Kenya", "Ouganda", "Rwanda"], correct: 0 },

  { category: "musique", question: "Le groupe Magic System vient de quel pays ?",
    options: ["Côte d'Ivoire", "Sénégal", "Cameroun", "Togo"], correct: 0 },

  { category: "musique", question: "Cesária Évora, la « diva aux pieds nus », était originaire de quel pays ?",
    options: ["Guinée-Bissau", "Cap-Vert", "São Tomé-et-Príncipe", "Angola"], correct: 1 },

  { category: "musique", question: "Quel instrument à cordes est emblématique des griots mandingues ?",
    options: ["Le balafon", "Le ngoni", "La kora", "La sanza"], correct: 2 },


  // ====== GÉOGRAPHIE / DRAPEAUX (13) ======
  { category: "geographie", question: "Quelle est la capitale du Sénégal ?",
    options: ["Abidjan", "Dakar", "Bamako", "Conakry"], correct: 1 },

  { category: "geographie", question: "Quelle est la capitale du Kenya ?",
    options: ["Kampala", "Dar es Salaam", "Nairobi", "Addis-Abeba"], correct: 2 },

  { category: "geographie", question: "Quel est le plus haut sommet d'Afrique ?",
    options: ["Mont Kenya", "Kilimandjaro", "Ras Dashen", "Mont Cameroun"], correct: 1 },

  { category: "geographie", question: "Quelle est la capitale du Ghana ?",
    options: ["Accra", "Lomé", "Cotonou", "Abuja"], correct: 0 },

  { category: "geographie", question: "Lagos est la plus grande ville de quel pays ?",
    options: ["Ghana", "Bénin", "Nigeria", "Cameroun"], correct: 2 },

  { category: "geographie", question: "La cité historique de Tombouctou se trouve dans quel pays ?",
    options: ["Mauritanie", "Niger", "Burkina Faso", "Mali"], correct: 3 },

  { category: "geographie", question: "Quelle est la capitale de l'Éthiopie ?",
    options: ["Asmara", "Addis-Abeba", "Khartoum", "Djibouti"], correct: 1 },

  { category: "geographie", question: "Quelle est la capitale du Rwanda ?",
    options: ["Bujumbura", "Kampala", "Kigali", "Goma"], correct: 2 },

  { category: "geographie", question: "Quelle est la langue officielle de l'Angola ?",
    options: ["Français", "Anglais", "Espagnol", "Portugais"], correct: 3 },

  { category: "geographie", question: "Quelle est la capitale du Cameroun ?",
    options: ["Douala", "Yaoundé", "Garoua", "Bafoussam"], correct: 1 },

  { category: "geographie", question: "Quel petit royaume est entièrement enclavé dans l'Afrique du Sud ?",
    options: ["Lesotho", "Eswatini", "Botswana", "Namibie"], correct: 0 },

  { category: "geographie", question: "Dans quels pays se trouvent principalement les chutes Victoria ?",
    options: ["Afrique du Sud et Mozambique", "Kenya et Tanzanie", "Zimbabwe et Zambie", "Malawi et Zambie"], correct: 2 },

  { category: "geographie", question: "Quel est le plus grand pays d'Afrique subsaharienne par superficie ?",
    options: ["Soudan", "Angola", "Afrique du Sud", "RD Congo"], correct: 3 },


  // ====== CULTURE / TRADITIONS / PROVERBES (12) ======
  { category: "culture", question: "Le tissu Kente, coloré et sacré, est originaire de quel pays ?",
    options: ["Ghana", "Nigeria", "Mali", "Sénégal"], correct: 0 },

  { category: "culture", question: "Le peuple Maasaï vit principalement dans quels pays ?",
    options: ["Ghana et Togo", "Kenya et Tanzanie", "Éthiopie et Somalie", "Ouganda et Rwanda"], correct: 1 },

  { category: "culture", question: "La langue wolof est principalement parlée dans quel pays ?",
    options: ["Mali", "Guinée", "Mauritanie", "Sénégal"], correct: 3 },

  { category: "culture", question: "Le peuple Zoulou est originaire de quel pays ?",
    options: ["Afrique du Sud", "Zimbabwe", "Botswana", "Mozambique"], correct: 0 },

  { category: "culture", question: "Qu'est-ce qu'un griot dans les cultures ouest-africaines ?",
    options: ["Un chef de village", "Un guérisseur", "Un conteur et historien", "Un forgeron"], correct: 2 },

  { category: "culture", question: "D'où vient la philosophie « Ubuntu » (je suis parce que nous sommes) ?",
    options: ["Éthiopie", "Kenya", "Nigeria", "Afrique du Sud"], correct: 3 },

  { category: "culture", question: "Le thiéboudiène, plat à base de riz et de poisson, est le plat national de :",
    options: ["Sénégal", "Côte d'Ivoire", "Mali", "Guinée"], correct: 0 },

  { category: "culture", question: "L'attiéké, semoule de manioc fermenté, vient de quel pays ?",
    options: ["Ghana", "Côte d'Ivoire", "Togo", "Bénin"], correct: 1 },

  { category: "culture", question: "Le djembé, tambour emblématique, est originaire de quelle région ?",
    options: ["Afrique centrale", "Afrique de l'Est", "Afrique de l'Ouest", "Afrique australe"], correct: 2 },

  { category: "culture", question: "Le boubou est :",
    options: ["Un plat traditionnel", "Un vêtement traditionnel", "Une danse", "Un instrument"], correct: 1 },

  { category: "culture", question: "Le mafé est un plat traditionnel à base de quelle sauce ?",
    options: ["Sauce tomate", "Sauce arachide", "Sauce gombo", "Sauce feuille"], correct: 1 },

  { category: "culture", question: "« Seul on va plus vite, ensemble on va plus loin » est un proverbe :",
    options: ["Zoulou", "Wolof", "Africain", "Éthiopien"], correct: 2 },


  // ====== FOOTBALL AFRICAIN (12) ======
  { category: "football", question: "Qui a remporté la CAN 2023 organisée en Côte d'Ivoire ?",
    options: ["Nigeria", "Côte d'Ivoire", "Afrique du Sud", "Sénégal"], correct: 1 },

  { category: "football", question: "Quel pays détient le record de titres en Coupe d'Afrique des Nations ?",
    options: ["Cameroun", "Ghana", "Égypte", "Nigeria"], correct: 2 },

  { category: "football", question: "Didier Drogba, légende du football, est originaire de :",
    options: ["Ghana", "Sénégal", "Cameroun", "Côte d'Ivoire"], correct: 3 },

  { category: "football", question: "Samuel Eto'o est une légende du football de quel pays ?",
    options: ["Cameroun", "Nigeria", "Gabon", "Togo"], correct: 0 },

  { category: "football", question: "Sadio Mané est originaire de quel pays ?",
    options: ["Mali", "Guinée", "Sénégal", "Côte d'Ivoire"], correct: 2 },

  { category: "football", question: "Seul Africain à avoir remporté le Ballon d'Or (1995), George Weah est de :",
    options: ["Libéria", "Ghana", "Sierra Leone", "Nigeria"], correct: 0 },

  { category: "football", question: "Roger Milla, star des Mondiaux 1990 et 1994, est une légende de :",
    options: ["Sénégal", "Nigeria", "Cameroun", "Ghana"], correct: 2 },

  { category: "football", question: "Qui a remporté la CAN 2021 (disputée en 2022) ?",
    options: ["Égypte", "Cameroun", "Burkina Faso", "Sénégal"], correct: 3 },

  { category: "football", question: "Mohamed Salah évolue dans quel club de Premier League ?",
    options: ["Chelsea", "Arsenal", "Liverpool", "Manchester United"], correct: 2 },

  { category: "football", question: "Dans quel club anglais Yaya Touré a-t-il brillé pendant près de 8 saisons ?",
    options: ["Arsenal", "Manchester City", "Chelsea", "Tottenham"], correct: 1 },

  { category: "football", question: "Asamoah Gyan est le meilleur buteur de l'histoire de quelle sélection ?",
    options: ["Nigeria", "Côte d'Ivoire", "Ghana", "Togo"], correct: 2 },

  { category: "football", question: "Thomas Partey, milieu d'Arsenal, est international avec quel pays ?",
    options: ["Nigeria", "Ghana", "Sénégal", "Cameroun"], correct: 1 }

];
