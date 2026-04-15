// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

import path from 'path';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'es',
    locales: ['es', "en"],
    routing: {
      prefixDefaultLocale: true,
      fallbackType: 'redirect'
    }
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'),
      },
    },
  },
  integrations: [react(), sitemap(), mdx()],
  site: 'https://www.velyonsoft.com',
  markdown: {
    shikiConfig: {
      wrap: true,
    },
  }
});