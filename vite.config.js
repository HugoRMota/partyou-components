const path = require("path");
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@scss": path.resolve(__dirname, "./src/**/*.scss"),
    },
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.js"),
      name: "PartyouComponents",
      fileName: (format) => `py-lib.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // Add external deps here
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  plugins: [vue()],
});
