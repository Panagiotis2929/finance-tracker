import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // Αυτό είναι το πιο σημαντικό για να βρει τα αρχεία το GitHub
  plugins: [react()]
})