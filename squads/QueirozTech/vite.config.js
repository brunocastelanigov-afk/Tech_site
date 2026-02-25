import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isWpBuild = process.env.WP_BUILD === 'true'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  appType: 'spa',
  base: isWpBuild ? '/wp-content/themes/queiroztech/assets/' : '/',
  build: {
    outDir: isWpBuild ? 'wp-theme/queiroztech/assets' : 'dist',
    manifest: isWpBuild,
    rollupOptions: isWpBuild
      ? {
          input: 'index.html',
        }
      : {},
  },
  server: {
    historyApiFallback: true,
  },
  preview: {
    historyApiFallback: true,
  },
})
