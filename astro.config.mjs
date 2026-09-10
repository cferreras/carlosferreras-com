// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://carlosferreras.com',
  integrations: [sitemap()],
  // URL antigua de la primera entrada, que cambió de título.
  redirects: {
    '/blog/esto-ya-no-es-un-portfolio': '/blog/lo-que-estoy-construyendo/',
  },
  markdown: {
    shikiConfig: { theme: 'github-dark-dimmed', wrap: true },
  },
});
