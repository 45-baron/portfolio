/* ═══════════════════════════════════════════════════════════════
   js/vitrine-articles.js
   ─────────────────────────────────────────────────────────────
   Ce fichier lit data/articles.js et construit automatiquement :
     1. La grille d'articles sur la page d'accueil
     2. La page complète qui s'ouvre au clic sur "Lire l'article"

   Tu n'as JAMAIS besoin de modifier ce fichier : ajoute tes
   articles dans data/articles.js, ce script s'occupe du reste.
   ═══════════════════════════════════════════════════════════════ */

const VitrineArticles = {

  /* Construit les cartes d'articles dans la grille de la page d'accueil */
  afficherGrille() {
    const grille = document.getElementById('grille-articles');
    if (!grille) return;

    grille.innerHTML = '';

    ARTICLES.forEach(article => {
      const carte = document.createElement('article');
      carte.className = 'carte-article' + (article.vedette ? ' article-vedette' : '');
      carte.setAttribute('role', 'listitem');
      carte.setAttribute('tabindex', '0');
      carte.setAttribute('aria-label', 'Lire l\'article : ' + article.titre);

      carte.innerHTML = `
        <span class="article-cat">${Securite.echapper(article.categorie)}</span>
        <div class="article-date">${Securite.echapper(article.date)}</div>
        <h3 class="article-titre">${Securite.echapper(article.titre)}</h3>
        <p class="article-extrait">${Securite.echapper(article.extrait)}</p>
        <div class="article-lire" aria-hidden="true">Lire l'article →</div>
      `;

      /* Ouverture au clic ET au clavier (accessibilité) —
         addEventListener plutôt que onclick="" : plus sûr avec une
         politique de sécurité stricte (CSP) et plus facile à lire. */
      carte.addEventListener('click', () => this.ouvrirArticle(article.id));
      carte.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.ouvrirArticle(article.id);
        }
      });

      grille.appendChild(carte);
    });
  },

  /* Ouvre la page complète d'un article (ou son PDF s'il en a un).
     depuisURL = true quand l'ouverture vient d'un lien partagé ou du
     bouton précédent du navigateur : dans ce cas on ne modifie pas
     l'URL, elle est déjà correcte. */
  ouvrirArticle(id, { depuisURL = false } = {}) {
    const article = ARTICLES.find(a => a.id === id);
    if (!article) return;

    /* Si un PDF est renseigné : on l'ouvre dans un nouvel onglet
       sécurisé plutôt que d'afficher l'article rédigé. */
    if (article.lienPDF && article.lienPDF.trim() !== '') {
      if (Securite.urlSure(article.lienPDF)) {
        window.open(article.lienPDF, '_blank', 'noopener,noreferrer');
      }
      return;
    }

    const page = document.getElementById('page-article');
    if (!page) return;

    /* Couverture */
    const zoneCouverture = page.querySelector('.page-article-couverture-zone');
    if (article.couverture && article.couverture.trim() !== '') {
      zoneCouverture.innerHTML = `<img src="${Securite.echapper(Securite.cheminAbsolu(article.couverture))}"
        alt="Couverture : ${Securite.echapper(article.titre)}"
        class="page-article-couverture" loading="lazy">`;
    } else {
      zoneCouverture.innerHTML = `<div class="couverture-placeholder" aria-hidden="true">
        <span class="meta-icone">${Icones.etincelle(15)}</span> ${Securite.echapper(article.categorie)}</div>`;
    }

    /* Champs texte (échappés — sécurité même si la source est interne) */
    page.querySelector('.page-article-cat-txt').textContent    = article.categorie;
    page.querySelector('.page-article-titre').textContent      = article.titre;
    page.querySelector('.page-article-date').textContent       = article.date;
    page.querySelector('.page-article-temps').textContent      = article.tempsLecture;
    page.querySelector('.page-article-auteur').textContent     = article.auteur;

    /* Contenu de l'article : ce HTML vient de data/articles.js,
       un fichier que TOI seul modifies (pas une entrée visiteur).
       C'est pourquoi innerHTML est acceptable ici — voir le
       rappel de sécurité en haut de data/articles.js. */
    page.querySelector('.contenu-article').innerHTML = article.contenu;

    /* Tags */
    const zoneTags = page.querySelector('.article-tags');
    zoneTags.innerHTML = (article.tags || [])
      .map(t => `<span class="article-tag">${Securite.echapper(t)}</span>`)
      .join('');

    /* Affichage */
    page.classList.add('ouverte');
    document.body.style.overflow = 'hidden';
    page.scrollTop = 0;

    /* Lien direct et partageable : ex. https://tonsite.com/article/eco-construction-btp
       Un visiteur qui ouvre ce lien atterrit directement sur l'article,
       au lieu de la page d'accueil — c'est ce qui manquait avant. */
    if (!depuisURL) {
      history.pushState({ article: id }, '', '/article/' + encodeURIComponent(id));
    }

    setTimeout(() => page.querySelector('.bouton-retour')?.focus(), 100);
    this._activerProgressionLecture(page);
  },

  /* Ferme la page article et revient à l'accueil */
  fermerArticle({ depuisURL = false } = {}) {
    const page = document.getElementById('page-article');
    if (!page) return;
    page.classList.remove('ouverte');
    document.body.style.overflow = '';

    if (!depuisURL && window.location.pathname.startsWith('/article/')) {
      history.pushState(null, '', '/recherche');
    }
  },

  /* Vérifie si l'URL actuelle pointe vers un article (lien partagé,
     rafraîchissement de page, ou navigation avant/arrière) et ouvre
     ou ferme la page en conséquence. */
  _synchroniserAvecURL() {
    const correspondance = window.location.pathname.match(/^\/article\/([^/]+)\/?$/);
    if (correspondance) {
      const id = decodeURIComponent(correspondance[1]);
      if (ARTICLES.some(a => a.id === id)) {
        this.ouvrirArticle(id, { depuisURL: true });
        return;
      }
    }
    const page = document.getElementById('page-article');
    if (page?.classList.contains('ouverte')) {
      this.fermerArticle({ depuisURL: true });
    }
  },

  /* Barre de progression de lecture propre à la page article */
  _activerProgressionLecture(page) {
    const barre = page.querySelector('.page-article-progression');
    if (!barre) return;
    page.onscroll = () => {
      const max = page.scrollHeight - page.clientHeight;
      const pourcentage = max > 0 ? (page.scrollTop / max) * 100 : 0;
      barre.style.width = Math.min(pourcentage, 100) + '%';
    };
  },

  /* Initialisation : construit la grille + branche le bouton retour
     + gère les liens directs vers un article (partage, actualisation,
     navigation précédent/suivant du navigateur) */
  init() {
    this.afficherGrille();
    document.querySelector('.bouton-retour')
      ?.addEventListener('click', () => this.fermerArticle());
    window.addEventListener('popstate', () => this._synchroniserAvecURL());
    this._synchroniserAvecURL();
  }
};
