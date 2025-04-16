import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "./lib/ninja.js"),
      name: "Ninja",
      fileName: (format) => `ninja.${format}.js`,
      formats: ["es", "umd"]
    },
    rollupOptions: {
      // Puedes excluir dependencias externas aquí si las hubiera
      external: [], 
    }
  },
});