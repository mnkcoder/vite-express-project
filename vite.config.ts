import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

const root = resolve(__dirname, "src");

// directory to build dist files will be compiled to
const outDir = resolve(__dirname, "build");

export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: true,
    sourcemap: true,
    outDir,
    // generate manifest.json in outDir
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});

// vite.config.js
// export default defineConfig({
//   plugins: [react()],
//   build: {
//     // generate manifest.json in outDir
//     manifest: true,
//     rollupOptions: {
//       // overwrite default .html entry
//       //input: resolve(root, "/client/main.js"),
//     },
//   },
// });
