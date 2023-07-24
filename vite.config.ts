import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "build");

console.log("root", root);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      input: {
        layout: resolve(root, "server/views/layouts/main-layout.html"),
        scripts: resolve(root, "server/views/partials/commonScripts.html"),
        styles: resolve(root, "server/views/partials/commonStyles.html"),
        home: resolve(root, "server/views/home.html"),

        dummyHome: resolve(root, "index.html"), // this is just a dummy file to make vite happy
      },
    },
  },
});
