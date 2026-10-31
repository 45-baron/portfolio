/* ═══════════════════════════════════════════════════════════════
   js/icones.js
   ─────────────────────────────────────────────────────────────
   Petite bibliothèque d'icônes SVG (trait fin, style cohérent)
   utilisée à la place des émojis dans tout le site.

   Pourquoi du SVG en dur plutôt qu'une police d'icônes ?
   → Zéro requête externe (compatible avec la CSP stricte du site)
   → Rendu identique sur tous les appareils, contrairement aux
     émojis qui changent d'apparence selon l'OS.

   Chaque fonction retourne une chaîne <svg>. "currentColor" reprend
   la couleur du texte parent — pas besoin de la redéfinir partout.
   ═══════════════════════════════════════════════════════════════ */

const Icones = {

  _svg(chemin, taille = 16, rondeurs = true) {
    return `<svg width="${taille}" height="${taille}" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" stroke-width="1.7"
      stroke-linecap="${rondeurs ? 'round' : 'butt'}" stroke-linejoin="round"
      aria-hidden="true" focusable="false">${chemin}</svg>`;
  },

  calendrier(taille = 14) {
    return this._svg(`
      <rect x="3.5" y="5" width="17" height="15" rx="2"/>
      <path d="M3.5 9.5h17"/>
      <path d="M8 3v4M16 3v4"/>
      <path d="M7.5 13.2h2M11 13.2h2M14.5 13.2h2M7.5 16.4h2M11 16.4h2"/>
    `, taille);
  },

  horloge(taille = 14) {
    return this._svg(`
      <circle cx="12" cy="12" r="8.5"/>
      <path d="M12 7.5v5l3.3 2"/>
    `, taille);
  },

  plume(taille = 14) {
    return this._svg(`
      <path d="M20 4.2c-4.8.6-9.6 3-13 6.4C4.8 12.8 3.6 15.4 3 18c2.6-.6 5.2-1.8 7.4-4 3.4-3.4 5.8-8.2 6.4-13Z"/>
      <path d="M13.5 10.5 16 13"/>
    `, taille);
  },

  etoile(taille = 12) {
    return this._svg(`
      <path d="M12 3.2 14.4 9l6.3.5-4.8 4.1 1.5 6.2L12 16.8l-5.4 2.9 1.5-6.1L3.3 9.5 9.6 9Z"
        fill="currentColor" stroke="none"/>
    `, taille);
  },

  flecheBas(taille = 12) {
    return this._svg(`
      <path d="M12 4.5v13.5"/>
      <path d="M6.5 12.5 12 18l5.5-5.5"/>
    `, taille);
  },

  panier(taille = 14) {
    return this._svg(`
      <path d="M3.5 6h2.2l1.1 10.2a2 2 0 0 0 2 1.8h7.8a2 2 0 0 0 2-1.7L20 9H6.4"/>
      <circle cx="10" cy="20.5" r="1.1" fill="currentColor" stroke="none"/>
      <circle cx="16.5" cy="20.5" r="1.1" fill="currentColor" stroke="none"/>
    `, taille);
  },

  fichier(taille = 18) {
    return this._svg(`
      <path d="M7 3h7l4.5 4.5V21H7Z"/>
      <path d="M14 3v4.5h4.5"/>
      <path d="M9.3 13h5.4M9.3 16h5.4"/>
    `, taille);
  },

  personne(taille = 26) {
    return this._svg(`
      <circle cx="12" cy="8.3" r="3.7"/>
      <path d="M4.8 19.5c1.2-3.6 4-5.4 7.2-5.4s6 1.8 7.2 5.4"/>
    `, taille);
  },

  etincelle(taille = 20) {
    return this._svg(`
      <path d="M12 3.5c.5 3 2 5.5 5 6.5-3 1-4.5 3.5-5 6.5-.5-3-2-5.5-5-6.5 3-1 4.5-3.5 5-6.5Z"
        fill="currentColor" stroke="none"/>
      <path d="M19 3.5c.25 1.3.9 2.3 2.2 2.7-1.3.4-1.95 1.4-2.2 2.7-.25-1.3-.9-2.3-2.2-2.7 1.3-.4 1.95-1.4 2.2-2.7Z"
        fill="currentColor" stroke="none" opacity=".55"/>
    `, taille);
  },

  /* ── Injection automatique dans les emplacements statiques du HTML ──
     Appelée une seule fois au chargement (voir principal.js). Les
     emplacements dynamiques (générés à partir des données) utilisent
     directement les fonctions ci-dessus dans leurs propres fichiers. */
  injecterStatiques() {
    const cibles = {
      '.ph-icone':            this.personne(28),
      '.meta-icone--date':    this.calendrier(13),
      '.meta-icone--temps':   this.horloge(13),
      '.meta-icone--auteur':  this.plume(13),
      '.meta-icone--panier':  this.panier(13),
    };
    Object.entries(cibles).forEach(([selecteur, svg]) => {
      document.querySelectorAll(selecteur).forEach(el => { el.innerHTML = svg; });
    });
  }
};
