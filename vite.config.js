import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Define environment variables here
    define: {
      'import.meta.env.VITE_APP_TMDB_API_KEY': process.env.VITE_APP_TMDB_API_KEY,
    },
  },

})


