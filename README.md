# Site personnel — TCHAKALA Amdane

Site vitrine statique (HTML/CSS/JS pur, sans build, sans dépendance externe
sauf les polices Google Fonts) — prêt pour un déploiement GitHub Pages public.

---

## 📁 Où modifier quoi

```
site-amdane/
│
├── index.html                 → structure de la page (rarement à toucher)
│
├── data/                      ★★★ TES 3 FICHIERS DE TRAVAIL ★★★
│   ├── profil.js               → ton nom, photo, email, tél., bio, services
│   ├── articles.js             → tes articles de blog (ajoute ici)
│   └── vitrine-liens-docs.js   → tes outils Excel + ressources gratuites
│
├── css/                        → apparence du site (couleurs, polices...)
│   ├── variables.css            → TOUTES les couleurs et polices du site
│   ├── base.css, nav.css, hero.css, sections.css, articles.css
│
└── js/                          → logique du site (pas besoin d'y toucher)
    ├── securite.js               → fonctions de protection (XSS, validation)
    ├── vitrine-articles.js       → affiche automatiquement tes articles
    ├── vitrine-fichiers.js       → affiche automatiquement tes outils
    └── principal.js              → assemble tout, curseur, formulaire, nav
```

**Règle simple** : 90 % du temps, tu ne touches qu'aux 3 fichiers dans `data/`.

---

## ✏️ Ajouter un article

Ouvre `data/articles.js`, repère le bloc **MODÈLE** tout en bas du fichier,
copie-le juste avant le `];` final, remplis les champs. Sauvegarde → c'est en
ligne. Le fichier `js/vitrine-articles.js` construit la carte et la page
complète automatiquement, tu n'as rien d'autre à faire.

## ✏️ Ajouter un outil Excel ou une ressource

Ouvre `data/vitrine-liens-docs.js` → copie le bloc modèle dans `OUTILS_EXCEL`
(payant sur Chariow) ou `RESSOURCES` (gratuit, hébergé sur ton Drive).

## ✏️ Ajouter ta photo

1. Dépose ton fichier dans `assets/photo/` (crée le dossier s'il n'existe pas)
2. Ouvre `data/profil.js`
3. Remplace `photo: ""` par `photo: "assets/photo/ta-photo.jpg"`

## ✏️ Changer tes infos, ta bio, tes contacts

Tout se passe dans `data/profil.js`.

---

## 🔒 Sécurité — ce qui a été mis en place

Comme ton site sera public sur GitHub avec des liens vers Chariow et Drive,
voici les protections déjà actives :

- **Politique de sécurité stricte (CSP)** dans `index.html` : le navigateur
  refuse d'exécuter tout script qui ne viendrait pas de ton propre site.
- **Aucun `onclick=""` dans le HTML** : tous les clics sont gérés proprement
  en JavaScript (`addEventListener`), ce qui est plus sûr et plus facile à
  auditer.
- **Échappement systématique** de tout texte affiché (`Securite.echapper`)
  pour empêcher qu'un texte ne soit interprété comme du code.
- **Vérification des URLs** avant de les utiliser comme liens
  (`Securite.urlSure`) — bloque les liens `javascript:` malveillants.
- **`rel="noopener noreferrer"`** sur tous les liens externes (Chariow,
  Drive, LinkedIn, WhatsApp) — empêche qu'un site externe puisse manipuler
  ton onglet d'origine (protection anti tab-nabbing).
- **Formulaire de contact protégé** : validation stricte + champ piège
  invisible (honeypot) contre les robots spammeurs.
- **Aucune dépendance JavaScript externe** : zéro librairie tierce, donc
  zéro surface d'attaque liée à un paquet compromis.

**Ce que ça NE protège PAS** : un site 100 % statique ne peut pas empêcher
quelqu'un de lire ton code source (normal, c'est le principe du web).
Aucune donnée sensible (mot de passe, clé API) ne doit jamais être placée
dans ces fichiers — il n'y en a d'ailleurs aucune ici : uniquement des
informations de contact que tu as toi-même choisi de rendre publiques.

---

## 🌐 Déployer sur GitHub Pages (gratuit)

1. Crée un dépôt GitHub **public**, nomme-le par exemple `mon-site`
2. Upload tout le contenu de ce dossier à la racine du dépôt
3. Va dans **Settings → Pages**
4. Source : **Deploy from a branch** → branche `main` → dossier `/ (root)`
5. Ton site sera en ligne à `https://ton-pseudo.github.io/mon-site`

Chaque fois que tu modifies un fichier dans `data/` et que tu le renvoies
sur GitHub (`commit` + `push`), le site se met à jour automatiquement en
1 à 2 minutes.

---

## 📞 Informations configurées

| Contact | Valeur |
|---|---|
| Email | amdanetchakala2@gmail.com |
| WhatsApp | +228 70 18 21 09 |
| LinkedIn | linkedin.com/in/amdane-tchakala |
| Chariow | qbqtcogf.mychariow.shop |
| Drive | drive.google.com/drive/folders/1lsS8ZILAV8plBs4v69DOqnoj2NkOXVwF |

---

## 🎨 Ambiance visuelle

- **Couleurs** : vert profond (`#2E5E44`) + sable doré (`#C9A66B`) sur fond
  blanc chaud / noir profond — sobre, professionnel, en écho aux matériaux
  du BTP (végétal + minéral).
- **Polices** : Fraunces (titres, caractère), Plus Jakarta Sans (texte,
  lisibilité), IBM Plex Mono (labels techniques).
- **Curseur personnalisé** vert vif, visible sur fond clair et sombre.
- **Cube isométrique 3D** discret dans le hero (rotation lente, pas de
  distraction) — clin d'œil au dessin technique/BTP.
- **100 % responsive** : testé pensée mobile-first, du téléphone au grand
  écran.
