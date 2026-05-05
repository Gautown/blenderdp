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
    platformProxy: {
      enabled: true,
    },
   
  }),
  // 启用服务器端渲染以支持API路由
  output: 'server',
  // 忽略损坏的目录
  vite: {
    cacheDir: './.vite-cache', // 使用自定义缓存目录
    server: {
      watch: {
        ignored: ['**/api-backup/**', '**/pages-old/**', '**/node_modules/.vite/**']
      },
      fs: {
        strict: false, // 禁用严格文件系统检查
        allow: ['..'] // 允许访问父目录
      }
    },
    // 添加构建时的忽略规则
    build: {
      rollupOptions: {
        external: ['**/pages-old/**']
      }
    },
    optimizeDeps: {
      force: true // 强制重新优化依赖
    }
  }
});
