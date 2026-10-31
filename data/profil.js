/* ═══════════════════════════════════════════════════════════════
   data/profil.js
   ─────────────────────────────────────────────────────────────
   ★ C'EST ICI QUE TU MODIFIES TON NOM, TA PHOTO, TES CONTACTS,
      TA BIO, TES COMPÉTENCES ET TES SERVICES.
   Aucune autre partie du code n'a besoin d'être touchée pour ça.
   ═══════════════════════════════════════════════════════════════ */

const PROFIL = {

  /* ── Identité ───────────────────────────────────────────────
     "photo" : chemin vers ton fichier photo dans /assets/photo/
     Laisse "" si tu n'as pas encore de photo → un cadre neutre
     s'affichera automatiquement à la place.                    */
  prenom:      "Amdane",
  nom:         "Tchakala",
  nomComplet:  "TCHAKALA Amdane",
  titre:       "Étudiant Ingénieur en Génie Civil",
  photo:       "", /* ex: "assets/photo/amdane.jpg" */

  slogan: "Je conçois des feuilles de calcul Excel sur mesure pour les " +
          "professionnels du BTP, et je partage mes connaissances à " +
          "travers des articles techniques concrets.",

  statutDisponible: true,           /* false = masque le badge "Disponible" */
  statutTexte: "Disponible pour missions · Génie Civil",

  anneesFormation: "3+",

  /* ── Chiffres clés affichés dans le hero ───────────────────── */
  statistiques: [
    { nombre: 24, suffixe: "+", label: "Outils Excel" },
    { nombre: 12, suffixe: "",  label: "Ressources gratuites" },
    { nombre: 5,  suffixe: "",  label: "Articles publiés" }
  ],

  /* ── Contacts (informations officielles) ───────────────────── */
  email:            "amdanetchakala2@gmail.com",
  whatsappNumero:   "+22870182109",   /* format international, sans espace */
  whatsappMessage:  "Bonjour Amdane, je vous contacte depuis votre site.",
  linkedin:         "https://www.linkedin.com/in/amdane-tchakala",
  drive:            "https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing",
  chariow:          "https://qbqtcogf.mychariow.shop",

  /* ── Section "À propos" ────────────────────────────────────── */
  bio: [
    "Je suis étudiant en <strong>génie civil</strong>, passionné par le calcul " +
    "de structure, la mécanique des sols et l'automatisation des tâches " +
    "répétitives en bureau d'études. Ma conviction&nbsp;: un bon ingénieur " +
    "doit aussi maîtriser ses outils numériques.",

    "C'est pourquoi je conçois des <strong>feuilles de calcul Excel " +
    "professionnelles</strong> — claires, robustes, documentées — pour les " +
    "ingénieurs, conducteurs de travaux et étudiants du BTP. Certaines sont " +
    "gratuites, d'autres disponibles sur <strong>Chariow</strong>."
  ],

  competences: [
    "Béton armé", "Terrassement", "Excel avancé / VBA",
    "AutoCAD", "Mécanique des sols", "Dimensionnement",
    "Devis & Métrés", "Eurocode 2 / 7",
    "Analyse par Éléments Finis", "Modélisation BIM 3D/4D"
  ],

  /* ── Section "Services" ─────────────────────────────────────── */
  services: [
    {
      numero: "01",
      titre: "Feuille Excel Sur Mesure",
      description: "Vous décrivez votre besoin de calcul, je conçois une " +
                    "feuille Excel professionnelle adaptée — avec " +
                    "documentation et support inclus."
    },
    {
      numero: "02",
      titre: "Conseil Technique BTP",
      description: "Révision de calculs, aide au dimensionnement, " +
                    "vérification de métrés. Un regard technique " +
                    "rigoureux sur vos dossiers."
    },
    {
      numero: "03",
      titre: "Formation Excel BTP",
      description: "Cours personnalisés pour automatiser vos calculs de " +
                    "structure, terrassement et devis. Niveau débutant " +
                    "à avancé."
    }
  ],

  /* ── Sujets proposés dans le formulaire de contact ─────────── */
  sujetsFormulaire: [
    { valeur: "commande-excel", libelle: "Commande Excel sur mesure" },
    { valeur: "conseil-btp",    libelle: "Conseil technique BTP" },
    { valeur: "formation",      libelle: "Formation Excel BTP" },
    { valeur: "partenariat",    libelle: "Partenariat / Collaboration" },
    { valeur: "autre",          libelle: "Autre demande" }
  ],

  /* ── SEO (référencement) ───────────────────────────────────── */
  seoTitre:       "Amdane Tchakala · Ingénieur Génie Civil & Outils BTP",
  seoDescription: "Étudiant ingénieur en génie civil au Togo. Feuilles de " +
                   "calcul Excel BTP sur mesure, articles techniques, " +
                   "ressources gratuites téléchargeables.",

  anneeCreationSite: 2025
};
