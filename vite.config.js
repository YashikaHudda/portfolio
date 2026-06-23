import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/portfolio/",
  build: {
    outDir: "docs",
    rollupOptions: {
      input: {
        index: resolve("index.html"),
      },
      output: {
        entryFileNames: "assets/index.js",
        chunkFileNames: "assets/[name].js",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css" || assetInfo.name?.endsWith(".css")) {
            return "assets/index.css";
          }

          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
  plugins: [react()],
});
