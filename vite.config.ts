import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ✅ FINAL DEPLOYMENT-SAFE CONFIG
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'], // fine to keep
  },
  server: {
    hmr: {
      overlay: false, // stops blocking red overlay errors
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true,
  },
  base: './',
});
