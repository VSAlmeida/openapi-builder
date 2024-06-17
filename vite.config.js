import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  base: '/openapi-builder/',
  resolve: {
    alias: {
      '@pages': '/src/pages',
      '@hooks': '/src/hooks',
      '@assets': '/src/assets',
      '@themes': '/src/themes',
      '@context': '/src/context',
      '@components': '/src/components',
    },
  },
});
