import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // для github pages, для докера убрать
  base: '/Lamart_Lending/',
  resolve: {
    alias: {
      '@': '../../../public'
    }
  }
})
