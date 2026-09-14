// Préfixe les liens internes avec le chemin de base du site
// (ex. /baseballbinche sur GitHub Pages, vide sur un domaine propre).
export const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const url = (path: string) => (path.startsWith('/') ? `${base}${path}` : path);
