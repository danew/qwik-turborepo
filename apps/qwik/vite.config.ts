import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
    server: {
      watch: {
        usePolling: true,
      },
    },
    resolve: {
      alias: [
        {
          find: "~",
          replacement: path.resolve(__dirname, "src"),
        },
      ],
    },
    build: {
      emptyOutDir: false,
    },
  };
});
