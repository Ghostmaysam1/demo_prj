import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@fonts': path.resolve(__dirname, 'src', 'assets', 'fonts'),
      '@pics': path.resolve(__dirname, 'src', 'assets', 'pictures'),
      '@modules': path.resolve(__dirname, 'src', 'modules'),
      '@views': path.resolve(__dirname, 'src', 'views'),
      // '@store': path.resolve(__dirname, 'src', 'store'),
      '@router': path.resolve(__dirname, 'src', 'router')
    }
  }
})
