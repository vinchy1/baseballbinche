// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// ASTRO_SITE / ASTRO_BASE sont définis par le workflow GitHub Pages
// (https://vinchy1.github.io + /baseballbinche). En local : domaine du club, racine.
export default defineConfig({
  site: process.env.ASTRO_SITE ?? 'https://baseballbinche.be',
  base: process.env.ASTRO_BASE ?? '/',
  integrations: [sitemap(), icon()],
});
