import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'/OSS-CN_DT_AI_HomePage/',
  plugins: [react()],
})
