// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // 🔥 이게 없으면 자바스크립트 못 불러올 수 있음
})
