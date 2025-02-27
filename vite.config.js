import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
<<<<<<< HEAD
  plugins: [
    react(),
  ],
  base: "/velzewu1-s_portfolio"
=======
  plugins: [ react() ],
  define: {
    global: 'window'
  }
>>>>>>> ed0fd1ef525220f7430872aa4a81397d1a18bd22
})
