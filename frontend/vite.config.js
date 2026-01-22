import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
=======
  base: process.env.VITE_BASE_PATH|| "/streemar"
>>>>>>> ba5fd9732361078b647e3d34e49d58ba3adba2a4
})
