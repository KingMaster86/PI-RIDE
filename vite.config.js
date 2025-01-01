// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Menentukan port untuk server dev
    open: true, // Membuka browser secara otomatis saat dimulai
  },
  build: {
    outDir: 'dist', // Menentukan folder build output
    sourcemap: true, // Menyertakan sourcemaps dalam build untuk debugging
  },
  resolve: {
    alias: {
      '@': '/src', // Menambahkan alias untuk folder src
    },
  },
});
