import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   base: process.env.NODE_ENV === 'production'
    ? '/dev-stack-build-website/'
    : '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})