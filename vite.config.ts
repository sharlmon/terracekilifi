import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/remixofkilifiterrace/",
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  server: {
    port: 8080,
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
