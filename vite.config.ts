import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// http://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open:true,  
    proxy: {
      "/api/Authentication": {
        target: "http://al-ain.co/",
        changeOrigin: true,
          secure: false,
          
      },
      "/api/Home": {
        target: "http://al-ain.co/",
        changeOrigin: true,
          secure: false,
          
      },
      "/api/Brand": {
        target: "http://al-ain.co/",
        changeOrigin: true,
          secure: false,
          
      },
      "/api/Cart": {
        target: "http://al-ain.co/",
        changeOrigin: true,
          secure: false,
          
      },
      "/api/Product": {
        target: "http://al-ain.co/",
        changeOrigin: true,
          secure: false,
          
      },
      "/api/WishList": {
        target: "http://al-ain.co/",
        changeOrigin: true,
          secure: false,
          
      },
    },
  },
})
