/* ═══════════════════════════════════════════════════════════════
   js/securite.js
   ─────────────────────────────────────────────────────────────
   Fonctions utilitaires de sécurité utilisées par tous les
   autres scripts. Ne rien modifier ici sauf si tu sais ce que
   tu fais — ce fichier protège ton site contre les injections
   de code (XSS) et les erreurs de saisie.
   ═══════════════════════════════════════════════════════════════ */

const Securite = {

  /**
   * Échappe les caractères HTML dangereux avant de les insérer
   * dans la page. Empêche qu'un texte contenant du code HTML/JS
   * ne soit exécuté par le navigateur (protection XSS).
   */
  echapper(texte) {
    if (texte === null || texte === undefined) return '';
    const div = document.createElement('div');
    div.textContent = String(texte);
    return div.innerHTML;
  },

  /**
   * Nettoie une entrée utilisateur (formulaire) : retire les
   * balises HTML et les espaces superflus.
   */
  nettoyer(texte) {
    return String(texte || '').replace(/<[^>]*>/g, '').trim();
  },

  /** Vérifie qu'une adresse email a un format valide. */
  emailValide(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  },

  /**
   * Vérifie qu'une URL est bien en http/https avant de l'utiliser
   * comme lien — empêche l'injection de liens javascript: malveillants.
   */
  urlSure(url) {
    if (!url) return false;
    try {
      const u = new URL(url, window.location.href);
      return u.protocol === 'https:' || u.protocol === 'http:';
    } catch {
      return false;
    }
  },

  /** Construit un lien WhatsApp à partir d'un numéro et d'un message. */
  construireLienWhatsApp(numero, message) {
    const chiffres = String(numero).replace(/\D/g, '');
    return `https://wa.me/${chiffres}?text=${encodeURIComponent(message)}`;
  },

  /** Formate un numéro de téléphone international pour l'affichage. */
  formaterTelephone(numero) {
    return String(numero).replace(/(\+\d{3})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
  },

  /**
   * Rend un chemin de fichier local (photo, image de couverture...)
   * absolu depuis la racine du site, quelle que soit la page où l'on
   * se trouve (accueil, ou /article/xxx). Sans ça, une photo mise en
   * "assets/photo/moi.jpg" s'afficherait sur l'accueil mais casserait
   * sur la page d'un article, car son adresse serait mal recalculée.
   * Ne touche pas aux URLs déjà absolues (http/https/data:).
   */
  cheminAbsolu(chemin) {
    if (!chemin) return chemin;
    const c = String(chemin).trim();
    if (/^(https?:)?\/\//.test(c) || c.startsWith('/') || c.startsWith('data:')) return c;
    return '/' + c.replace(/^\.?\/+/, '');
  }
};

/* Empêche toute modification accidentelle de ces fonctions
   par un autre script chargé sur la page. */
Object.freeze(Securite);
