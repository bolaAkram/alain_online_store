import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open:true,  
    proxy: {
      "/Authentication": {
        target: "http://api.al-ain.co/api/",
        changeOrigin: true,
        secure: false, // Disable SSL verification (not recommended for production)
        rewrite: (path) => path.replace(/^\/api/, "")
      },
      "/Home": {
        target: "http://api.al-ain.co/api/",
        changeOrigin: true,
        secure: false, // Disable SSL verification (not recommended for production)
        rewrite: (path) => path.replace(/^\/api/, "")
      },
      "/Brand": {
        target: "http://api.al-ain.co/api/",
        changeOrigin: true,
        secure: false, // Disable SSL verification (not recommended for production)
        rewrite: (path) => path.replace(/^\/api/, "")
      },
      "/Cart": {
        target: "http://api.al-ain.co/api/",
        changeOrigin: true,
        secure: false, // Disable SSL verification (not recommended for production)
        rewrite: (path) => path.replace(/^\/api/, "")
      },
      "/Product": {
        target: "http://api.al-ain.co/api/",
        changeOrigin: true,
        secure: false, // Disable SSL verification (not recommended for production)
        rewrite: (path) => path.replace(/^\/api/, "")
      },
    },
  },
})
