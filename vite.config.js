import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";
import { writeFileSync } from "fs";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/velzewu1-s_portfolio/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  // Создаёт .nojekyll после билда
  buildEnd: () => {
    writeFileSync(resolve(__dirname, "dist/.nojekyll"), "");
  },
});
