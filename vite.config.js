import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        thanksPage: path.resolve(__dirname, "thank-you-page.html"),
      },
    },
  },
});
