import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA, type ManifestOptions } from 'vite-plugin-pwa';
import tailwindcss from '@tailwindcss/vite';

const manifest: Partial<ManifestOptions> | false = {
  theme_color: '#6538a8',
  background_color: '#81cde9',
  icons: [
    {
      purpose: 'maskable',
      sizes: '512x512',
      src: 'icon512_maskable.png',
      type: 'image/png',
    },
    {
      purpose: 'any',
      sizes: '512x512',
      src: 'icon512_rounded.png',
      type: 'image/png',
    },
  ],
  orientation: 'any',
  display: 'standalone',
  lang: 'ru-RU',
  name: 'my-cat-pwa',
  short_name: 'Cat PWA',
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: { globPatterns: ['**/*.{js,css,html,ico,png,svg}'] },
      manifest: manifest,
      injectRegister: 'auto',
    }),
    tailwindcss(),
  ],
});
