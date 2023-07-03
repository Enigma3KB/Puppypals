import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]', 
      },
    },
  },
  resolve: {
    alias: {
            'pix': '/src/images',
    },
  },
  optimizeDeps: {
    include: ['pix/scoob.gif'], 
  },
})
