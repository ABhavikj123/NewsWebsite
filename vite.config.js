import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh';
import envCompatible from 'vite-plugin-env-compatible';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    reactRefresh(),
    envCompatible({
      // Path to your .env.local file
      filePath: 
      path.resolve(__dirname, '.env.local')
    })],
})


