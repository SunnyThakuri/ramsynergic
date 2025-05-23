import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'./',
  server: {
    proxy:{
      '/form':{
        target:'https://global-server-kappa.vercel.app',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
