// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

import path from 'path';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve('./src'), // Esto le dice a Vite que @ = carpeta src
      },
    },
  },
  integrations: [react(), sitemap(), mdx()],
  site: 'https://VelyonSoft.vercel.app',
  markdown: {
    shikiConfig: {
      wrap: true,
    },
  }
});