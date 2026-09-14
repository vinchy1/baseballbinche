# CLAUDE.md — Site vitrine Guardians Binche

Site vitrine du Baseball Club Binche Guardians (baseball, softball, slowpitch, Baseball 5).
Objectif : donner envie à de nouveaux joueurs de s'inscrire. Contenu repris de baseballbinche.be (Kalisport),
mise en scène inspirée de lingers.it (grandes photos, sections alternées, cartes, citation, galerie).
Langue du site et des échanges : **français** (tutoiement dans les accroches joueurs, vouvoiement pour Documents/Contact).

## Stack & commandes

- Astro 7 (site statique), TypeScript strict, pas de framework UI. Node ≥ 22.12.
- `npm run dev` (http://localhost:4321) · `npm run build` · `npm run preview` · `npx astro check` (doit rester à 0 erreur).
- Dépendances : `astro-icon` + `@iconify-json/lucide` (icônes `lucide:*`), `@astrojs/sitemap`, polices `@fontsource/*`.

## Structure

- `src/data/` — **tout le contenu éditable** : `site.ts` (menu, liens Kalisport, réseaux, e-mail, IBAN, PDF),
  `practical.ts` (saison, tarifs, horaires été/hiver, terrains, étapes d'inscription), `teams.ts` (7 équipes),
  `people.ts` (comité, coaches, personnes de confiance), `club.ts` (histoire, valeurs, presse), `credits.ts` (IDs photos Unsplash).
- `src/pages/` — `index`, `club`, `equipes`, `rejoindre`, `saison`, `documents`, `contact`, `404`.
- `src/components/` — `Header`, `Footer`, `Hero` (diaporama accueil), `PageHero`, `Quote`, `Gallery` (+ lightbox),
  `TrialForm`, `ContactForm`, `Schedule`, `Venues`.
- `src/scripts/` — `reveal.ts` (apparition au scroll + compteurs), `forms.ts` (envoi Formspree ou repli mailto).
- `src/utils/url.ts` — helper `url()` pour les liens internes (voir Déploiement).
- `src/styles/global.css` — tokens, typo, boutons, formulaires, utilitaires. Styles spécifiques en `<style>` scopé dans chaque fichier.
- `src/assets/images/` — photos provisoires Unsplash (optimisées par `astro:assets`), `src/assets/logo-guardians.png`.

## Conventions à respecter

- **Liens internes : toujours `href={url('/page#ancre')}`**, jamais `href="/page"` en dur (sinon cassé sur GitHub Pages).
  Les `href` des données (`nav`, cartes) passent aussi par `url()` au rendu. Liens externes : `target="_blank" rel="noopener"`.
- **Couleurs** : uniquement les tokens (`--red` #ED1B24 = rouge du logo, `--red-deep` pour texte rouge sur fond clair, `--black`, `--paper`, `--sand`, `--line`, `--muted`).
- **Polices** : `--font-display` Titan One (titres, gros chiffres, prix, citations ; poids 400, pas de faux gras),
  `--font-accent` Bangers (menu, boutons, eyebrows, étiquettes, en-têtes de tableau),
  `--font-script` Handlee (mot manuscrit dans les titres via `<span class="script">`), `--font-body` Source Sans 3.
  L'utilisateur a rejeté Cinzel (trop « hôtel ») : rester dans un registre sportif US.
- **Motif de titre** : `<p class="eyebrow">…</p><h2>Texte <span class="script">suite</span></h2>`.
- Classes utilitaires : `section`, `section--sand|dark|red`, `container`, `container--narrow`, `section-head`, `btn`, `btn--ghost|light|white`, `link-arrow`, `frame` (image recadrée avec zoom au survol).
- Animations : `data-reveal` (+ `data-reveal="fade"`, `data-reveal-delay="120"`), compteurs `data-count`. Toujours compatibles `prefers-reduced-motion`.
  Animer `transform`/`opacity`, jamais `width/height/padding` (hook impeccable).
- Éviter les bordures latérales épaisses colorées sur les cartes (« side-tab », signalé par le hook impeccable).
- Images : composant `<Image>` d'`astro:assets` avec `widths` + `sizes` et un `alt` descriptif en français.
- Mobile ≥ 360 px, pas de débordement horizontal (vérifier `scrollWidth` à 375 px).

## Décisions validées avec l'utilisateur

- Menus : Club, Équipes, Rejoindre (= Infos pratiques), Saison, Documents, Contact + lien Connexion (Kalisport). **Pas de Boutique.**
- Kalisport reste la source pour le calendrier, la pré-inscription et l'espace membre : le site **renvoie** vers baseballbinche.be, pas de double saisie.
- Fiches équipes **sans listes nominatives de joueurs** (mineurs).
- Formulaire « séance d'essai » propre au site (Formspree), repli `mailto:` vers inscription@baseballbinche.be si pas d'ID.
- Ne pas inventer de faits (prix, conditions, citations attribuées à des personnes réelles) : reprendre le site du club ou rester générique.

## Déploiement

- Repo public : https://github.com/vinchy1/baseballbinche (branche `main`).
- GitHub Pages via `.github/workflows/deploy.yml` (withastro/action) à chaque push sur `main` → https://vinchy1.github.io/baseballbinche/
- Le workflow définit `ASTRO_SITE`, `ASTRO_BASE=/baseballbinche` et `PUBLIC_NOINDEX=true` (balise noindex sur cette préprod).
  En local, sans ces variables : site `https://baseballbinche.be`, base `/`.
- Formspree : variables d'environnement `PUBLIC_FORMSPREE_TRIAL` / `PUBLIC_FORMSPREE_CONTACT` (`.env` en local, Variables Actions sur GitHub). Pas encore configurées.
- Git : identité locale au repo (noreply GitHub). Ne pas committer/pusher sans demande explicite.

## Vérification

- `npx astro build` + `npx astro check` sans erreur.
- Aperçu : `.claude/launch.json` (config `astro-dev`) pour le panneau Browser.
- Captures pleine page : Edge headless avec `--force-prefers-reduced-motion` (sinon éléments `data-reveal` invisibles)
  et une hauteur de fenêtre fixe ; en dessous de ~500 px de large, Edge headless tronque → vérifier le mobile dans le Browser (preset mobile).

## À faire / en suspens

- Remplacer les photos Unsplash par de vraies photos du club (même nom de fichier dans `src/assets/images/`) ; certaines montrent des équipes US (« La Cañada », « Giants »).
- Faire valider par le club : texte B5 Cup réécrit, description du logo, textes Baseball 5 / Slowpitch.
- Créer les formulaires Formspree du club.
- Nom de domaine définitif → retirer `PUBLIC_NOINDEX` et ajuster `ASTRO_SITE`/`ASTRO_BASE`.
- `@fontsource/yellowtail` est encore importé dans `global.css` mais n'est plus utilisé (remplacé par Handlee, chargé depuis Google Fonts) : import et dépendance à retirer, ou Handlee à passer en `@fontsource/handlee` pour tout auto-héberger.
