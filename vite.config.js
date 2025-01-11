import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Lamart_Lending/',
  server: {
    proxy: {
      '/api': {
        target: 'http://51.250.75.40:8000',
        changeOrigin: true,
        secure: false, // Не проверять SSL
      },
    },
  },
})
