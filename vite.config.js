import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the build works whether it's served from a root domain
// (e.g. a custom domain) or from a GitHub Pages project path
// (e.g. username.github.io/repo-name/).
export default defineConfig({
  plugins: [react()],
  base: './',
})
