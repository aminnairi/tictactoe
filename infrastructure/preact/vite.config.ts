import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import autoprefixer from "autoprefixer";

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [
        autoprefixer
      ]
    }
  },
  plugins: [preact()],
})
