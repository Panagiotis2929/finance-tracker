import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/finance-tracker/', // ΠΡΟΣΟΧΗ: Βάλε το όνομα του repo σου εδώ
  plugins: [react()]
})