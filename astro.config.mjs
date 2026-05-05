// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
   devToolbar: {
      enabled: false
    },
  site: "https://gautown.top",
  integrations: [mdx(), sitemap()],
  adapter: cloudflare({
    sessionKVBindingName: "MY_SESSION_KV",
    assets: {
      bindingName: "MY_ASSETS",
    },
    platformProxy: {
      enabled: true,
    },
  }),
  output: 'server',
  vite: {
    cacheDir: './.vite-cache',
    server: {
      watch: {
        ignored: ['**/api-backup/**', '**/pages-old/**', '**/node_modules/.vite/**']
      },
      fs: {
        strict: false,
        allow: ['..']
      }
    },
    build: {
      rollupOptions: {
        external: ['**/pages-old/**']
      }
    },
    optimizeDeps: {
      force: true
    }
  }
});
