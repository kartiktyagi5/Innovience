import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This allows you to use 'intience' as an alias for '/src'
      'intience': '/src',
    },
  },
});
