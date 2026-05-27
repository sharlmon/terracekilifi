import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  // Add this line to tell Vite to treat .HEIC files as static assets
  assetsInclude: ['**/*.HEIC'],
  server: {
    port: 8080,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks for better caching
          "react-vendor": ["react", "react-dom"],
          "router-vendor": ["react-router-dom"],
          "icons-vendor": ["lucide-react"],
        },
      },
    },
    // Inline small CSS to reduce critical path
    cssCodeSplit: true,
  },
});