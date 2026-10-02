// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://oxdabit.com',
  trailingSlash: 'never',
  // Genera /blog.html en vez de /blog/index.html: GitHub Pages sirve /blog sin
  // redirigir a /blog/, coherente con trailingSlash: 'never'.
  build: { format: 'file' },

  markdown: {
    shikiConfig: { theme: 'github-dark-default' },
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES' }
      }
    }),
    mdx()
  ]
});
