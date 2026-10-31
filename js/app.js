/* ═══════════════════════════════════════════════════════════════
   js/app.js — le "moteur" du site (rien à modifier ici)
   1. Onglets avec vraies adresses (/services, /parcours...)
   2. Vue 3D isométrique du tracé routier (page d'accueil)
   3. Affichage des réalisations / parcours (data/portfolio.js)
   ═══════════════════════════════════════════════════════════════ */
document.documentElement.classList.add('js');
const $ = (s, r = document) => r.querySelector(s);
const E = t => Securite.echapper(t);

const App = {
  routes: ['', 'services', 'realisations', 'parcours', 'boutique', 'recherche', 'contact'],

  /* ── 1. ONGLETS ── */
  vueDepuisURL() {
    const p = location.pathname.replace(/^\/|\/$/g, '');
    if (p.startsWith('article/')) return 'recherche';
    return this.routes.includes(p) ? p : '';
  },
  afficher(nom) {
    document.querySelectorAll('.vue').forEach(v => v.classList.toggle('active', v.id === 'v-' + (nom || 'accueil')));
    document.querySelectorAll('.onglets a').forEach(a => a.classList.toggle('actif', a.getAttribute('href').replace(/^\//, '') === nom));
    document.body.classList.toggle('fond-sombre', ['', 'boutique', 'contact'].includes(nom));
    window.scrollTo(0, 0);
  },
  aller(chemin) {
    VitrineArticles.fermerArticle({ depuisURL: true });
    const trait = $('#wipe');
    trait.classList.add('on');                        // fin trait jaune sous la barre
    setTimeout(() => {
      history.pushState(null, '', chemin);
      this.afficher(this.vueDepuisURL());
      trait.classList.remove('on');
    }, 260);
  },
  initOnglets() {
    document.addEventListener('click', e => {
      const a = e.target.closest('a[data-r]');
      if (!a || e.metaKey || e.ctrlKey) return;
      e.preventDefault();
      if (a.getAttribute('href') !== location.pathname) this.aller(a.getAttribute('href'));
    });
    window.addEventListener('popstate', () => this.afficher(this.vueDepuisURL()));
    this.afficher(this.vueDepuisURL());
  },

  /* ── 2. TRACÉ 3D ISOMÉTRIQUE ──
     Terrain en maillage, route en surface blanche, axe rouge au sol,
     profil en long vert (rideau vertical), stations tous les 200 m. */
  dessinerRoute() {
    const g = $('#route'); if (!g) return;
    const S = 33, OX = 360, OY = 70;
    const iso = (x, y, z) => [(OX + (x - y) * .866 * S).toFixed(1), (OY + (x + y) * .5 * S - z * S).toFixed(1)];
    const sol = (x, y) => .55 * Math.sin(x * .55) * Math.cos(y * .5) + .3 * Math.sin(x * .3 + y * .45);
    const ligne = pts => pts.map((p, i) => (i ? 'L' : 'M') + p.join(' ')).join('');
    let h = '';
    for (let i = 1; i <= 13; i++) {                           // maillage du terrain
      const a = [], b = [];
      for (let k = 1; k <= 13; k++) { a.push(iso(k, i, sol(k, i) - 1)); b.push(iso(i, k, sol(i, k) - 1)); }
      h += `<path d="${ligne(a)}" pathLength="1" class="tr mesh"/><path d="${ligne(b)}" pathLength="1" class="tr mesh"/>`;
    }
    const P = t => { const x = 1.5 + 11 * t, y = 7 + 2.6 * Math.sin(t * 5.2); return [x, y, sol(x, y) * .6 + .2]; };
    const bords = s => Array.from({ length: 49 }, (_, i) => {
      const t = i / 48, [x, y, z] = P(t), [x2, y2] = P(t + .004), L = Math.hypot(x2 - x, y2 - y);
      return iso(x - (y2 - y) / L * .5 * s, y + (x2 - x) / L * .5 * s, z);
    });
    const g1 = bords(1), g2 = bords(-1);
    h += `<path d="${ligne(g1)}L${g2.slice().reverse().map(p => p.join(' ')).join('L')}Z" class="chaussee"/>`;
    h += `<path d="${ligne(g1)}" pathLength="1" class="tr bl d2"/><path d="${ligne(g2)}" pathLength="1" class="tr bl d2"/>`;
    const au_sol = [], profil = [];
    for (let i = 0; i <= 48; i++) {
      const [x, y, z] = P(i / 48); au_sol.push(iso(x, y, -1)); profil.push(iso(x, y, z));
      if (i % 4 === 0) h += `<path d="M${iso(x, y, -1).join(' ')}L${iso(x, y, z).join(' ')}" class="rideau"/>`;
    }
    h += `<path d="${ligne(au_sol)}" pathLength="1" class="tr rg d3"/><path d="${ligne(profil)}" pathLength="1" class="tr vt d4"/>`;
    for (let k = 0; k <= 4; k++) {                                 // stations
      const [x, y] = P(k / 4), [px, py] = iso(x, y, -1);
      h += `<text x="${px}" y="${+py + 16}" class="pk">PK 0+${k * 200}</text>`;
    }
    h += `<circle r="4" class="engin"><animateMotion dur="10s" repeatCount="indefinite" path="${ligne(profil)}"/></circle>`;
    g.innerHTML = h;
  },
  /* Dévers interactif (onglet Services) */
  interactions() {
    const inp = $('#e-in');
    inp?.addEventListener('input', () => {
      $('#e-val').textContent = Number(inp.value).toFixed(1).replace('.', ',');
      $('#coupe').setAttribute('transform', `rotate(${(Math.atan(inp.value / 100) * 180 / Math.PI * 1.5).toFixed(2)} 150 84)`);
    });
    $('#sl')?.addEventListener('click', e => {
      const b = e.target.closest('button'); if (!b) return;
      document.querySelectorAll('#sl button, .pan').forEach(x => x.classList.toggle('on', x.dataset.s === b.dataset.s));
    });
    $('#sw')?.addEventListener('click', e => {          // Boutique : Excel / ressources gratuites
      const b = e.target.closest('button'); if (!b) return;
      document.querySelectorAll('#sw button').forEach(x => x.classList.toggle('on', x === b));
      $('#v-boutique').classList.toggle('vr', b.dataset.p === 'r');
    });
    const a = $('#affiche');
    if (a && !matchMedia('(pointer:coarse)').matches) {
      a.addEventListener('mousemove', e => {
        const r = a.getBoundingClientRect();
        a.style.setProperty('--ry', ((e.clientX - r.left) / r.width - .5) * 4 + 'deg');
        a.style.setProperty('--rx', ((e.clientY - r.top) / r.height - .5) * -4 + 'deg');
      });
      a.addEventListener('mouseleave', () => { a.style.setProperty('--rx', '0deg'); a.style.setProperty('--ry', '0deg'); });
    }
  },

  /* ── 3. DONNÉES ── */
  tags: t => (t || []).map(x => `<span>${E(x)}</span>`).join(''),
  rendreRealisations() {
    $('#grille-real').innerHTML = REALISATIONS.map((r, i) => `
      <article class="carte"><div class="vignette">${r.image ? `<img src="${E(Securite.cheminAbsolu(r.image))}" alt="${E(r.titre)}" loading="lazy">` : ''}</div>
      <div class="ligne"><span>${String(i + 1).padStart(2, '0')}</span><em>${E(r.cat)}</em></div>
      <h3>${E(r.titre)}</h3><p>${E(r.texte)}</p><div class="tags">${this.tags(r.tags)}</div></article>`).join('');
  },
  rendreParcours() {
    $('#p-nom').textContent = `${PROFIL.prenom} ${PROFIL.nom}`;
    $('#p-titre').textContent = PROFIL.titre;
    $('#p-comp').innerHTML = this.tags(COMPETENCES);
    if (PROFIL.photo) $('#photo').innerHTML = `<img src="${E(Securite.cheminAbsolu(PROFIL.photo))}" alt="${E(PROFIL.prenom)}">`;
    $('#frise').innerHTML = PARCOURS.map(p => `
      <div class="etape"><small>${E(p.quand)}</small><h3>${E(p.titre)}</h3><p>${E(p.texte)}</p></div>`).join('');
  },
  contacts() {
    const wa = 'https://wa.me/' + PROFIL.whatsappNumero.replace(/\D/g, '') + '?text=' + encodeURIComponent(PROFIL.whatsappMessage);
    $('#c-mail').href = 'mailto:' + PROFIL.email;   $('#c-mail span').textContent = PROFIL.email;
    $('#c-wa').href = wa;                           $('#c-wa span').textContent = Securite.formaterTelephone(PROFIL.whatsappNumero);
    $('#c-in').href = PROFIL.linkedin;              $('#c-in span').textContent = 'Amdane Tchakala';
    document.querySelectorAll('[data-lien-chariow]').forEach(a => { a.href = PROFIL.chariow; });
  },

  init() {
    Icones.injecterStatiques();
    this.dessinerRoute(); this.interactions();
    this.rendreRealisations(); this.rendreParcours(); this.contacts();
    VitrineFichiers.init(); VitrineArticles.init();
    this.initOnglets();
    document.addEventListener('keydown', e => { if (e.key === 'Escape') VitrineArticles.fermerArticle(); });
  }
};
document.addEventListener('DOMContentLoaded', () => App.init());
