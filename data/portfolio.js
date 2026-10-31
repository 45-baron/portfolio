/* ═══════════════════════════════════════════════════════════════
   data/portfolio.js — ★ TU MODIFIES TES RÉALISATIONS ET TON PARCOURS ICI
   (Pas de noms de projets : seulement le type de travail.)
   "image" : chemin d'une photo, ex "/assets/projets/route.jpg". Laisse "" sinon.
   ═══════════════════════════════════════════════════════════════ */
const REALISATIONS = [
  { cat: "Routes", titre: "Plans de route",
    texte: "Reprise de fichiers AutoCAD : bornes kilométriques, profils en long, repérage des PK.", tags: ["AutoCAD", "Profil en long"], image: "" },
  { cat: "Routes", titre: "Modèle 3D de route",
    texte: "Surface, tracé, profils et cubatures sous Civil 3D, à partir d'un plan et de points altimétriques.", tags: ["Civil 3D", "Cubatures"], image: "" },
  { cat: "Ouvrages", titre: "Dalots et caniveaux",
    texte: "Dessin, ferraillage, nomenclature des aciers et métré.", tags: ["AutoCAD", "Béton armé"], image: "" },
  { cat: "Eau", titre: "Stations de traitement d'eau",
    texte: "Métré sur site et modification des plans.", tags: ["Métré", "AutoCAD"], image: "" },
  { cat: "Métré", titre: "Quantitatifs",
    texte: "Métré d'ouvrages et vérification avec des feuilles Excel.", tags: ["Excel", "Devis"], image: "" },
  { cat: "Calcul", titre: "Béton armé BAEL 91",
    texte: "Classeurs Excel : poutres continues, descente de charges, semelles, synthèse des aciers.", tags: ["Excel", "BAEL 91"], image: "" }
];

const PARCOURS = [
  { quand: "Stage", titre: "Bureau d'études, Lomé",
    texte: "Traitement de fichiers AutoCAD de routes, métrés sur site, plans d'ouvrages hydrauliques." },
  { quand: "Formation", titre: "Génie civil",  /* ★ ajoute ici ton école et tes dates dans le texte ci-dessous */
    texte: "Structures, béton armé (BAEL 91, Eurocodes), mécanique des sols, éléments finis." },
  { quand: "En parallèle", titre: "Outils Excel et articles",
    texte: "Feuilles de calcul pour le BTP et articles techniques." }
];
const COMPETENCES = ["AutoCAD", "Civil 3D", "Excel / VBA", "Métré", "Béton armé", "Éléments finis", "Eurocode 2 / 7"];
