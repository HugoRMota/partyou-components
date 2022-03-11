const path = require("path");
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    server: {
      port: process.env.VITE_PORT,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@scss": path.resolve(__dirname, "./src/**/*.scss"),
      },
    },

    build: {
      lib: {
        entry: path.resolve(__dirname, "src/components/index.js"),
        name: "PyComponents",
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
};
