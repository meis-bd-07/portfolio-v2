import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@components': resolve(dirname(fileURLToPath(import.meta.url)), 'src/components'),
      '@constants': resolve(dirname(fileURLToPath(import.meta.url)), './src/constants'),
      '@hooks': resolve(dirname(fileURLToPath(import.meta.url)), './src/hooks'),
      '@stores': resolve(dirname(fileURLToPath(import.meta.url)), './src/stores'),
      '@helpers': resolve(dirname(fileURLToPath(import.meta.url)), './src/helpers'),
      '@hocs': resolve(dirname(fileURLToPath(import.meta.url)), './src/hocs'),
    }
  }
})
