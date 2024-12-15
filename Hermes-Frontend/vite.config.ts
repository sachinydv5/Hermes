import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import path from "path"

const PORT = parseInt(process.env.PORT) ?? 4173;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    open: true,
    port: PORT
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
 
})
