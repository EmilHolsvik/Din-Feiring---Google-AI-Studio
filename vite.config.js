import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1]
const productionBase =
  process.env.VITE_PUBLIC_BASE || (process.env.GITHUB_ACTIONS && repoName ? `/${repoName}/` : '/')

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? productionBase : '/',
  plugins: [react()],
  server: {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    hmr: process.env.DISABLE_HMR !== 'true',
    port: 3000,
    host: '0.0.0.0',
  },
}))
