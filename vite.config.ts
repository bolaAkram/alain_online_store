import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open:true,  
    proxy: {
      "/api/Authentication": {
        target: "http://al-ain.co/",
        changeOrigin: true,
        secure: false, // Disable SSL verification (not recommended for production)
        // rewrite: (path) => path.replace(/^\/api/, "")
      },
      "/api/Home": {
        target: "http://al-ain.co/",
        changeOrigin: true,
        secure: false, // Disable SSL verification (not recommended for production)
        // rewrite: (path) => path.replace(/^\/api/, "")
      },
      "/api/Brand": {
        target: "http://al-ain.co/",
        changeOrigin: true,
        secure: false, // Disable SSL verification (not recommended for production)
        // rewrite: (path) => path.replace(/^\/api/, "")
      },
      "/api/Cart": {
        target: "http://al-ain.co/",
        changeOrigin: true,
        secure: false, // Disable SSL verification (not recommended for production)
        // rewrite: (path) => path.replace(/^\/api/, "")
      },
      "/api/Product": {
        target: "http://al-ain.co/",
        changeOrigin: true,
        secure: false, // Disable SSL verification (not recommended for production)
        // rewrite: (path) => path.replace(/^\/api/, "")
      },
      "/api/WishList": {
        target: "http://al-ain.co/",
        changeOrigin: true,
        secure: false, // Disable SSL verification (not recommended for production)
        // rewrite: (path) => path.replace(/^\/api/, "")
      },
    },
  },
})
