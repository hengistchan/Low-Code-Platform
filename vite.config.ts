import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { dependencies } = require("./package.json");
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Unocss from "unocss/vite";
import Icons from "unplugin-icons/vite";
import IconsResolver from "unplugin-icons/resolver";
import styleImport, { VantResolve } from "vite-plugin-style-import";

const chunks = Object.entries(dependencies as { [key: string]: string }).map(
  ([key]) => key,
);

export default defineConfig({
  base: "/",
  server: {
    hmr: true,
  },
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
    }),
    AutoImport({
      imports: [
        "vue",
        {
          classnames: [["default", "classnames"]],
        },
        {
          nanoid: ["nanoid"],
        },
      ],
      dts: "./types/auto-imports.d.ts",
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      dts: "./types/components.d.ts",
      resolvers: [ElementPlusResolver(), IconsResolver()],
    }),
    Unocss(),
    Icons(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  build: {
    // cssCodeSplit: true,
    target: "modules",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
      },
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            for (let i = 0; i < chunks.length; i++) {
              if (id.includes(chunks[i])) {
                return chunks[i];
              }
            }
          }
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
