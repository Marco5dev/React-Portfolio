import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemapPlugin from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemapPlugin({
      pages: [
        { url: '/', lastmod: new Date().toISOString() },
      ],
      baseUrl: 'https://marco5dev.site',
    }),
  ],
  server: {
    host: '0.0.0.0',
    port: '8001'
  }
});
