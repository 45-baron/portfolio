/* ═══════════════════════════════════════════════════════════════
   data/vitrine-liens-docs.js
   ─────────────────────────────────────────────────────────────
   ★ C'EST ICI QUE TU AJOUTES TES OUTILS EXCEL (payants sur
      Chariow) ET TES RESSOURCES GRATUITES (PDF/Excel/Word sur
      ton Drive).

   COMMENT AJOUTER UN OUTIL EXCEL :
   → type: "premium" si vendu sur Chariow (mets le lien du produit)
   → type: "gratuit" si téléchargeable directement (mets le lien Drive)

   COMMENT HÉBERGER UN FICHIER SUR GOOGLE DRIVE :
   1. Upload ton fichier sur Drive
   2. Clic droit → Partager → "Tout le monde avec le lien"
   3. Copie le lien et colle-le dans "lien" ci-dessous
   ═══════════════════════════════════════════════════════════════ */

/* ─── OUTILS EXCEL (vitrine payante + gratuite) ──────────────── */
const OUTILS_EXCEL = [

  {
    id:    "semelle-filante-ec7",
    titre: "Dimensionnement Semelle Filante",
    description: "Calcul automatique selon Eurocode 7 — charge admissible, tassement, contrainte de sol. Vérifications ELU/ELS intégrées.",
    type:  "premium",
    prix:  "3 500 XOF",
    lien:  "https://qbqtcogf.mychariow.shop",
    icone: "📐"
  },
  {
    id:    "poutre-ba-simple",
    titre: "Calcul Poutre BA Simple",
    description: "Moment fléchissant, armatures longitudinales et transversales selon Eurocode 2. Commentaires pédagogiques inclus.",
    type:  "gratuit",
    lien:  "https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing",
    icone: "🏗️"
  },
  {
    id:    "devis-quantitatif",
    titre: "Devis Quantitatif & Estimatif",
    description: "Template complet pour le chiffrage BTP : fouilles, maçonnerie, charpente, finitions. Totaux automatiques par lot.",
    type:  "premium",
    prix:  "5 000 XOF",
    lien:  "https://qbqtcogf.mychariow.shop",
    icone: "📊"
  },
  {
    id:    "terrassement-volumes",
    titre: "Calcul Volume Terrassement",
    description: "Cubature par profils en travers — déblais/remblais. Résultats en m³ avec récapitulatif par lot.",
    type:  "gratuit",
    lien:  "https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing",
    icone: "🧱"
  },
  {
    id:    "planning-gantt",
    titre: "Planning Chantier — Gantt",
    description: "Planning travaux interactif avec jalons, ressources, chemin critique et alertes automatiques de retard.",
    type:  "premium",
    prix:  "4 200 XOF",
    lien:  "https://qbqtcogf.mychariow.shop",
    icone: "📅"
  },
  {
    id:    "dosages-beton",
    titre: "Fiche Dosages Béton",
    description: "Compositions béton courant, armé et de propreté selon résistance cible fc28. Vérification du rapport E/C.",
    type:  "gratuit",
    lien:  "https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing",
    icone: "🔩"
  }

  /* ─── MODÈLE — Copie ce bloc pour ajouter un outil ──────────
  ,{
    id: "identifiant-unique",
    titre: "Nom de l'outil",
    description: "Description en 2-3 lignes.",
    type: "premium",       // "premium" ou "gratuit"
    prix: "XXXX XOF",      // uniquement si type = premium
    lien: "URL_CHARIOW_OU_DRIVE",
    icone: "📐"
  }
  ─────────────────────────────────────────────────────────── */
];


/* ─── RESSOURCES GRATUITES (PDF / Excel / Word) ──────────────── */
const RESSOURCES = [

  {
    id: "feuille-poutre-ba",
    titre: "Feuille Calcul Poutre BA",
    description: "Calcul des armatures selon Eurocode 2 — adapté aux cours et projets BTP.",
    format: "excel",
    lien: "https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing"
  },
  {
    id: "guide-metres",
    titre: "Guide Métrés & Devis BTP",
    description: "20 pages — méthodes, unités, astuces de chiffrage pour les étudiants en BTP.",
    format: "pdf",
    lien: "https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing"
  },
  {
    id: "terrassement-xl",
    titre: "Calcul Volume Terrassement",
    description: "Déblais/remblais automatiques avec profils en travers — résultats en m³.",
    format: "excel",
    lien: "https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing"
  },
  {
    id: "fiche-beton",
    titre: "Fiches Béton — Dosages",
    description: "Compositions courantes — béton armé, de propreté, haute résistance.",
    format: "pdf",
    lien: "https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing"
  },
  {
    id: "rapport-chantier",
    titre: "Modèle Rapport de Chantier",
    description: "Template Word professionnel pour vos rapports journaliers ou hebdomadaires.",
    format: "word",
    lien: "https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing"
  },
  {
    id: "dosages-beton-xl",
    titre: "Fiche Dosages Béton Excel",
    description: "Calcul automatique du dosage selon fc28 — avec vérification du rapport E/C.",
    format: "excel",
    lien: "https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing"
  }

  /* ─── MODÈLE — Copie ce bloc pour ajouter une ressource ─────
  ,{
    id: "identifiant-unique",
    titre: "Nom du fichier",
    description: "Description courte du contenu.",
    format: "excel",   // "excel" | "pdf" | "word"
    lien: "URL_DIRECTE_DE_TÉLÉCHARGEMENT"
  }
  ─────────────────────────────────────────────────────────── */
];
