import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const BASE_PORT = 3000
const BASE_URL = "http://localhost:8080"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
      "@": "/src",
      "public": "/public",
    },
  },
  base: "./",
  build: {
    target: "esnext",
    chunkSizeWarningLimit: 3000,
  },
  server: {
    port: BASE_PORT,
    proxy: {
      "/api": {
        target: BASE_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
