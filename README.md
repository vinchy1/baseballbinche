# Guardians Binche — site vitrine

Site statique (Astro) du Baseball Club Binche Guardians, conçu pour donner envie de rejoindre le club.
Kalisport (baseballbinche.be) reste l'outil de gestion : calendrier, pré-inscription, espace membre.

## Démarrer

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # génère le site dans dist/
npm run preview   # prévisualise dist/
```

## Mettre à jour le contenu

Tout le contenu qui change d'une saison à l'autre est dans `src/data/` :

| Fichier | Contenu |
|---|---|
| `site.ts` | liens Kalisport, réseaux sociaux, e-mail, IBAN, PDF (licence, sponsoring), menu |
| `practical.ts` | saison, tarifs, horaires été/hiver, terrains, étapes d'inscription |
| `teams.ts` | les 7 fiches équipes (âge, horaires, coach, cotisation, photo) |
| `people.ts` | comité, coaches, personnes de confiance, destinataires du formulaire |
| `club.ts` | historique, valeurs, revue de presse |

## Formulaires (essai gratuit et contact)

1. Créer un compte gratuit sur [formspree.io](https://formspree.io) avec l'adresse du club et deux formulaires.
2. Copier `.env.example` en `.env` et renseigner les identifiants (`PUBLIC_FORMSPREE_TRIAL`, `PUBLIC_FORMSPREE_CONTACT`).
3. Relancer `npm run build`.

Sans identifiant, les formulaires ouvrent la messagerie du visiteur avec un e-mail pré-rempli vers inscription@baseballbinche.be.

## Photos

Les photos actuelles sont des illustrations provisoires issues d'Unsplash (licence libre, liste dans `src/data/credits.ts`).
Pour les remplacer, déposer les vraies photos du club dans `src/assets/images/` en gardant le même nom de fichier : Astro les optimise automatiquement.

## Déploiement

Le dossier `dist/` est un site 100 % statique : Netlify, Vercel, GitHub Pages, Cloudflare Pages ou n'importe quel hébergement mutualisé.
