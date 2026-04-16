import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://factor-ai.ch',
  trailingSlash: 'ignore',
  integrations: [react(), sitemap({
    filter: (page) => !page.includes('/erfolg'),
    i18n: { defaultLocale: 'de', locales: { de: 'de-CH' } },
  })],
});
