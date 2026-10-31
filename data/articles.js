/* ═══════════════════════════════════════════════════════════════
   data/articles.js
   ─────────────────────────────────────────────────────────────
   ★ C'EST ICI QUE TU AJOUTES / MODIFIES TES ARTICLES.
   Chaque modification ici se reflète automatiquement sur le site
   via js/vitrine-articles.js — tu n'as rien d'autre à toucher.

   COMMENT AJOUTER UN ARTICLE :
   1. Copie le bloc modèle tout en bas du fichier
   2. Colle-le juste avant le "];" final (n'oublie pas la virgule
      après le bloc précédent)
   3. Remplis les champs
   4. Sauvegarde → l'article apparaît automatiquement sur le site

   IMPORTANT SÉCURITÉ :
   → N'insère jamais de balise <script> dans "contenu" : ce champ
     est affiché tel quel sur la page. N'y colle que du texte/HTML
     de mise en forme (titres, paragraphes, listes, tableaux...).
   ═══════════════════════════════════════════════════════════════ */

const ARTICLES = [

  /* ════════════════════════════════════════════════════════════
     Exemple d'article rédigé — Écoconstruction
     ════════════════════════════════════════════════════════════ */
  {
    id:          "eco-construction-btp",
    titre:       "L'écoconstruction dans le BTP : matériaux, techniques et enjeux pour l'Afrique",
    categorie:   "Développement Durable",
    date:        "10 Avril 2025",
    tempsLecture:"8 min de lecture",
    auteur:      "Amdane Tchakala",
    extrait:     "Découvrez comment l'écoconstruction révolutionne le secteur du BTP en Afrique — de la terre crue au bambou structural, des matériaux locaux aux techniques bioclimatiques.",
    couverture:  "", /* URL ou chemin d'image — laisser vide pour un fond dégradé automatique */
    lienPDF:     "", /* si tu préfères lier un PDF plutôt qu'un article rédigé, mets son URL ici */
    vedette:     true, /* true = grande carte mise en avant (un seul article à la fois) */
    tags: ["Écoconstruction", "Matériaux durables", "BTP Afrique", "Environnement"],

    contenu: `
      <p>Le secteur de la construction est responsable de <strong>près de 40&nbsp;% des émissions mondiales de CO₂</strong>. Face à l'urgence climatique et à la croissance démographique rapide du continent africain, l'écoconstruction n'est plus un luxe réservé aux pays riches — c'est une nécessité stratégique pour les ingénieurs de demain.</p>

      <h2>Qu'est-ce que l'écoconstruction ?</h2>
      <p>L'écoconstruction désigne l'ensemble des pratiques visant à <strong>réduire l'impact environnemental d'un bâtiment</strong> sur l'ensemble de son cycle de vie. Elle repose sur trois piliers&nbsp;:</p>
      <ul>
        <li><strong>L'efficacité énergétique</strong> : isolation, orientation solaire, ventilation naturelle</li>
        <li><strong>Les matériaux durables</strong> : biosourcés, géosourcés, recyclés ou locaux</li>
        <li><strong>La gestion des ressources</strong> : eau de pluie, énergie solaire, déchets de chantier</li>
      </ul>

      <div class="encart-info">
        <div class="encart-info-titre">📌 Chiffre clé</div>
        <p>En Afrique subsaharienne, <strong>70&nbsp;% des constructions</strong> utilisent des matériaux importés à forte empreinte carbone. Les matériaux locaux pourraient réduire ces émissions de 30 à 50&nbsp;%.</p>
      </div>

      <h2>Les matériaux adaptés au contexte africain</h2>
      <h3>1. La terre crue (BTC)</h3>
      <p>La <strong>Brique de Terre Comprimée</strong> est le matériau le plus prometteur pour l'Afrique de l'Ouest&nbsp;: produite localement sans cuisson, coût 30 à 50&nbsp;% inférieur au parpaing importé, empreinte carbone quasi nulle.</p>

      <h3>2. Le bambou structural</h3>
      <p>Souvent surnommé <em>"l'acier végétal"</em>, sa résistance en traction dépasse celle de l'acier doux, il pousse en 3 à 5 ans, et son empreinte carbone est négative.</p>

      <table>
        <tr><th>Matériau</th><th>Résistance</th><th>Coût relatif</th></tr>
        <tr><td>BTC</td><td>2–8 MPa</td><td>Très faible</td></tr>
        <tr><td>Béton Portland</td><td>20–40 MPa</td><td>Moyen</td></tr>
        <tr><td>Bambou structural</td><td>200–300 MPa (traction)</td><td>Faible</td></tr>
      </table>

      <h2>L'ingénieur civil face aux enjeux de demain</h2>
      <p>Pour nous, futurs ingénieurs, l'écoconstruction n'est pas qu'une tendance — c'est une <strong>compétence différenciante</strong>. Les bailleurs internationaux exigent de plus en plus des études d'impact environnemental.</p>

      <blockquote>
        <p>"La construction durable n'est pas un coût supplémentaire. C'est un investissement sur le cycle de vie du bâtiment."</p>
      </blockquote>

      <div class="article-cta">
        <div class="article-cta-texte">Télécharge ma <strong>feuille Excel de calcul thermique</strong> — gratuite.</div>
        <a href="https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing" target="_blank" rel="noopener noreferrer">Accéder au Drive →</a>
      </div>
    `
  },

  /* ════════════════════════════════════════════════════════════ */
  {
    id: "5-fonctions-excel-ingenieur",
    titre: "5 fonctions Excel indispensables pour l'ingénieur civil",
    categorie: "Excel BTP",
    date: "15 Mars 2025",
    tempsLecture: "5 min de lecture",
    auteur: "Amdane Tchakala",
    extrait: "RECHERCHEV, SOMME.SI, tableaux structurés, solveur... Ces fonctions transforment vos calculs de bureau d'études en outils professionnels.",
    couverture: "",
    lienPDF: "",
    vedette: false,
    tags: ["Excel", "BTP", "Productivité"],
    contenu: `
      <p>Excel est l'outil numéro un du bureau d'études en génie civil. Voici les 5 fonctions qui vont transformer votre pratique quotidienne.</p>
      <h2>1. RECHERCHEV / RECHERCHEX</h2>
      <p>Indispensable pour rapatrier automatiquement des données depuis vos tables de référence — matériaux, valeurs normatives, tarifs.</p>
      <h2>2. SOMME.SI.ENS</h2>
      <p>Pour vos métrés et devis, elle permet de <strong>sommer des quantités selon plusieurs critères</strong> simultanément.</p>
      <h2>3. Le Solveur</h2>
      <p>Peu connu des étudiants, il résout des problèmes d'optimisation sous contraintes&nbsp;: dimensionnement optimal, minimisation de coût.</p>
      <h2>4. Les Tableaux Structurés</h2>
      <p>Transformez vos plages en tableaux (Ctrl+T) pour des références dynamiques qui s'adaptent automatiquement.</p>
      <h2>5. Noms Définis + Validation</h2>
      <p>Nommer vos cellules rend vos formules lisibles et auditables.</p>
      <div class="article-cta">
        <div class="article-cta-texte">Retrouve mes <strong>feuilles Excel professionnelles</strong> sur Chariow.</div>
        <a href="https://qbqtcogf.mychariow.shop" target="_blank" rel="noopener noreferrer">Voir la boutique →</a>
      </div>
    `
  },

  /* ════════════════════════════════════════════════════════════ */
  {
    id: "cubature-terrassement",
    titre: "Cubature : calcul de volumes de terrassement",
    categorie: "Terrassement",
    date: "2 Mars 2025",
    tempsLecture: "6 min de lecture",
    auteur: "Amdane Tchakala",
    extrait: "Méthode complète pour calculer les volumes de déblais et remblais sur un projet linéaire, avec exemple numérique.",
    couverture: "",
    lienPDF: "",
    vedette: false,
    tags: ["Terrassement", "Topographie", "VRD"],
    contenu: `
      <p>Le calcul des volumes de terrassement est fondamental pour tout projet de voirie ou de plateforme. La méthode des <strong>profils en travers</strong> est la plus utilisée en pratique.</p>
      <h2>Principe</h2>
      <p>On découpe le projet en tranches, délimitées par des profils en travers&nbsp;: <strong>V = (d/6) × (S₁ + 4×Sm + S₂)</strong></p>
      <h2>Exemple numérique</h2>
      <table>
        <tr><th>Profil</th><th>Distance (m)</th><th>Surface (m²)</th></tr>
        <tr><td>P0</td><td>0</td><td>12.5</td></tr>
        <tr><td>P1 (médian)</td><td>25</td><td>18.3</td></tr>
        <tr><td>P2</td><td>50</td><td>15.7</td></tr>
      </table>
      <p>Résultat&nbsp;: V = (50/6) × (12.5 + 4×18.3 + 15.7) ≈ <strong>836 m³</strong></p>
      <div class="article-cta">
        <div class="article-cta-texte">Télécharge ma <strong>feuille de cubature</strong> automatique — gratuite.</div>
        <a href="https://drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF?usp=sharing" target="_blank" rel="noopener noreferrer">Accéder au Drive →</a>
      </div>
    `
  },

  /* ════════════════════════════════════════════════════════════ */
  {
    id: "semelles-fondations",
    titre: "Semelle isolée vs filante : critères de choix",
    categorie: "Fondations",
    date: "18 Fév. 2025",
    tempsLecture: "4 min de lecture",
    auteur: "Amdane Tchakala",
    extrait: "Quand choisir une semelle isolée plutôt qu'une semelle filante ? Les critères géotechniques et économiques expliqués simplement.",
    couverture: "",
    lienPDF: "",
    vedette: false,
    tags: ["Fondations", "Géotechnique", "Structure"],
    contenu: `
      <p>Le choix entre semelle isolée et filante dépend de plusieurs critères à analyser méthodiquement.</p>
      <h2>Semelle isolée</h2>
      <p>Pertinente quand le sol a une contrainte admissible élevée et que les poteaux sont espacés.</p>
      <h2>Semelle filante</h2>
      <p>Préférable sur sol médiocre ou poteaux rapprochés, pour répartir la charge sur une plus grande surface.</p>
      <div class="article-cta">
        <div class="article-cta-texte">Calcule tes semelles avec ma <strong>feuille Excel Eurocode 7</strong>.</div>
        <a href="https://qbqtcogf.mychariow.shop" target="_blank" rel="noopener noreferrer">Voir sur Chariow →</a>
      </div>
    `
  },

  /* ════════════════════════════════════════════════════════════ */
  {
    id: "etudiant-freelance",
    titre: "Étudiant ingénieur et freelance Excel : mon retour d'expérience",
    categorie: "Carrière",
    date: "5 Fév. 2025",
    tempsLecture: "5 min de lecture",
    auteur: "Amdane Tchakala",
    extrait: "Comment j'ai commencé à vendre des feuilles Excel tout en étant étudiant en génie civil — organisation et leçons apprises.",
    couverture: "",
    lienPDF: "",
    vedette: false,
    tags: ["Carrière", "Freelance", "Entrepreneuriat"],
    contenu: `
      <p>Quand j'ai commencé à créer des feuilles Excel pour mes cours, je n'imaginais pas qu'elles intéresseraient des professionnels.</p>
      <h2>L'organisation</h2>
      <p>Ma règle&nbsp;: <strong>les études passent en premier, toujours</strong>. Je ne prends des commandes que le week-end et pendant les vacances.</p>
      <h2>Ce que j'ai appris</h2>
      <ul>
        <li>La qualité avant la quantité</li>
        <li>La documentation est sous-estimée par la plupart</li>
        <li>Chariow simplifie tout le processus de vente</li>
      </ul>
      <div class="article-cta">
        <div class="article-cta-texte">Retrouve tous mes outils sur <strong>ma boutique Chariow</strong>.</div>
        <a href="https://qbqtcogf.mychariow.shop" target="_blank" rel="noopener noreferrer">Visiter la boutique →</a>
      </div>
    `
  }

  /* ════════════════════════════════════════════════════════════
     MODÈLE — Copie ce bloc pour ajouter un nouvel article
     ════════════════════════════════════════════════════════════
  ,{
    id:           "identifiant-unique-sans-espaces",
    titre:        "Titre complet de l'article",
    categorie:    "Catégorie",
    date:         "JJ Mois AAAA",
    tempsLecture: "X min de lecture",
    auteur:       "Amdane Tchakala",
    extrait:      "Résumé affiché sur la carte (2-3 lignes).",
    couverture:   "",
    lienPDF:      "",
    vedette:      false,
    tags: ["Tag1", "Tag2"],
    contenu: `
      <p>Ton texte ici...</p>
      <h2>Un titre de section</h2>
      <p>...</p>
    `
  }
  ════════════════════════════════════════════════════════════ */
];
