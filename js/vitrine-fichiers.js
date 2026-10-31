/* ═══════════════════════════════════════════════════════════════
   js/vitrine-fichiers.js
   ─────────────────────────────────────────────────────────────
   Lit data/vitrine-liens-docs.js et construit automatiquement :
     1. La grille des outils Excel (payants + gratuits)
     2. La grille des ressources gratuites (PDF/Excel/Word)

   Tu n'as jamais besoin de modifier ce fichier : ajoute tes
   outils dans data/vitrine-liens-docs.js.
   ═══════════════════════════════════════════════════════════════ */

const VitrineFichiers = {

  afficherOutils() {
    const grille = document.getElementById('grille-outils');
    if (!grille) return;

    grille.innerHTML = OUTILS_EXCEL.map(outil => {
      const estPremium = outil.type === 'premium';
      const lienSur = Securite.urlSure(outil.lien) ? outil.lien : '#';

      const badge = estPremium
        ? `<span class="badge-type badge-premium">${Icones.etoile(11)} Premium</span>`
        : `<span class="badge-type badge-gratuit">${Icones.flecheBas(11)} Gratuit</span>`;

      const prix = estPremium
        ? `<span class="prix prix--payant">${Securite.echapper(outil.prix)}</span>`
        : `<span class="prix prix--gratuit">Téléchargement gratuit</span>`;

      const action = estPremium
        ? `<a href="${lienSur}" target="_blank" rel="noopener noreferrer" class="lien-achat">Acheter → Chariow</a>`
        : `<a href="${lienSur}" target="_blank" rel="noopener noreferrer" class="btn--telecharger">${Icones.flecheBas(11)} Télécharger</a>`;

      return `
        <article class="carte-outil" role="listitem">
          ${badge}
          <h3 class="carte-outil-titre">${Securite.echapper(outil.titre)}</h3>
          <p class="carte-outil-desc">${Securite.echapper(outil.description)}</p>
          <div class="carte-outil-pied">
            ${prix}
            ${action}
          </div>
        </article>
      `;
    }).join('');
  },

  afficherRessources() {
    const grille = document.getElementById('grille-ressources');
    if (!grille) return;

    const classesIcone = { pdf: 'icone-pdf', excel: 'icone-excel', word: 'icone-doc' };
    const labels = { pdf: 'PDF', excel: 'Excel · .xlsx', word: 'Word · .docx' };

    grille.innerHTML = RESSOURCES.map(res => {
      const lienSur = Securite.urlSure(res.lien) ? res.lien : '#';
      return `
        <div class="carte-ressource" role="listitem">
          <div class="ressource-icone ${classesIcone[res.format] || 'icone-excel'}" aria-hidden="true">
            ${Icones.fichier(19)}
          </div>
          <h3 class="ressource-titre">${Securite.echapper(res.titre)}</h3>
          <p class="ressource-sstitre">${Securite.echapper(res.description)}</p>
          <div class="ressource-pied">
            <span class="ressource-format">${labels[res.format] || Securite.echapper(res.format)}</span>
            <a href="${lienSur}" target="_blank" rel="noopener noreferrer"
               class="btn--telecharger" aria-label="Télécharger : ${Securite.echapper(res.titre)}">
              ${Icones.flecheBas(11)} Télécharger
            </a>
          </div>
        </div>
      `;
    }).join('');
  },

  init() {
    this.afficherOutils();
    this.afficherRessources();
  }
};
