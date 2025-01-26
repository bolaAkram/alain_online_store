import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// http://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open:true,  
    proxy: {
      "/Authentication": {
        target: "http://app.al-ain.co/",
        changeOrigin: true,
          secure: false,
          
      },
      "/Home": {
        target: "http://app.al-ain.co/",
        changeOrigin: true,
          secure: false,
          
      },
      "/Brand": {
        target: "http://app.al-ain.co/",
        changeOrigin: true,
          secure: false,
          
      },
      "/Cart": {
        target: "http://app.al-ain.co/",
        changeOrigin: true,
          secure: false,
          
      },
      "/Product": {
        target: "http://app.al-ain.co/",
        changeOrigin: true,
          secure: false,
          
      },
      "/WishList": {
        target: "http://app.al-ain.co/",
        changeOrigin: true,
          secure: false,
          
      },
    },
  },
})
