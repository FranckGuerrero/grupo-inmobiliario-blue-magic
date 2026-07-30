import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://grupo-inmobiliario-blue-magic.netlify.app',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
});
