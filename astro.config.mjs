// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://codeleccz.github.io',
  base: '/',
  i18n: {
    defaultLocale: 'cs',
    locales: ['cs', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  redirects: {
    '/uvod': '/',
    '/reference': '/references/',
    '/kontakt': '/contact/',
    '/me-prispevky/uvod-do-diagnostiky-can': '/publication/',
    '/me-prispevky/diagnostika-can-1': '/publication/',
    '/me-prispevky/diagnostika-can-2': '/publication/',
    '/me-prispevky/zpracovani-obrazu-1': '/publication/',
    '/me-prispevky/zpracovani-obrazu-2': '/publication/',
    '/me-prispevky/sklad-pohoda': '/publication/',
    '/me-prispevky/softing-hsx': '/publication/',
    '/me-prispevky': '/publication/',
  },
  integrations: [
    mdx(),
    sitemap({
      customPages: ['https://codeleccz.github.io/hoerbiger-reports/'],
      i18n: {
        defaultLocale: 'cs',
        locales: {
          cs: 'cs-CZ',
          en: 'en',
        },
      },
    }),
  ],

  fonts: [
      {
          provider: fontProviders.local(),
          name: 'Atkinson',
          cssVariable: '--font-atkinson',
          fallbacks: ['sans-serif'],
          options: {
              variants: [
                  {
                      src: ['./src/assets/fonts/atkinson-regular.woff'],
                      weight: 400,
                      style: 'normal',
                      display: 'swap',
                  },
                  {
                      src: ['./src/assets/fonts/atkinson-bold.woff'],
                      weight: 700,
                      style: 'normal',
                      display: 'swap',
                  },
              ],
          },
      },
	],

  vite: {
    plugins: [tailwindcss()],
  },
});