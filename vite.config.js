// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace with your GitHub repo name
export default defineConfig({
  plugins: [react()],
  base: '/react-law-application/', // ← VERY IMPORTANT
});
