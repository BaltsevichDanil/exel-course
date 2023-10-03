import { defineConfig } from 'vite'
import {default as eslint} from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [eslint()],
  resolve: {
    alias: {
      '@': './src'
    }
  }
})
