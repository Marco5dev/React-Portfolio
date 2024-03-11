import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemapPlugin from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sitemapPlugin({
    
    pages: [  
      { url: '/', lastmod: new Date().toISOString() },
    ],
    baseUrl: 'https://marco5dev.site',
    output: 'public/sitemap.xml',
    
  }),],
  server: {
    host: '0.0.0.0',
    port: '8001'
  }
})
