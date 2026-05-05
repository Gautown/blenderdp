2026-05-05T13:09:14.284Z	Initializing build environment...
2026-05-05T13:09:18.928Z	Success: Finished initializing build environment
2026-05-05T13:09:19.571Z	Cloning repository...
2026-05-05T13:09:21.536Z	Restoring from dependencies cache
2026-05-05T13:09:21.538Z	Restoring from build output cache
2026-05-05T13:09:21.543Z	Detected the following tools from environment: bun@1.2.15, nodejs@22.16.0
2026-05-05T13:09:21.699Z	Installing project dependencies: bun install --frozen-lockfile
2026-05-05T13:09:21.889Z	bun install v1.2.15 (df017990)
2026-05-05T13:09:27.491Z	
2026-05-05T13:09:27.492Z	+ wrangler@4.21.2
2026-05-05T13:09:27.492Z	+ @astrojs/check@0.9.9
2026-05-05T13:09:27.492Z	+ @astrojs/cloudflare@13.3.1
2026-05-05T13:09:27.493Z	+ @astrojs/mdx@5.0.4
2026-05-05T13:09:27.493Z	+ @astrojs/rss@4.0.18
2026-05-05T13:09:27.493Z	+ @astrojs/sitemap@3.7.2
2026-05-05T13:09:27.493Z	+ astro@6.2.2
2026-05-05T13:09:27.493Z	+ giscus@1.6.0
2026-05-05T13:09:27.494Z	+ typescript@5.9.3
2026-05-05T13:09:27.494Z	
2026-05-05T13:09:27.494Z	468 packages installed [5.64s]
2026-05-05T13:09:28.043Z	Executing user build command: npm run build
2026-05-05T13:09:28.481Z	
2026-05-05T13:09:28.482Z	> blenderdp@1.0.0 build
2026-05-05T13:09:28.482Z	> astro build
2026-05-05T13:09:28.482Z	
2026-05-05T13:09:31.888Z	13:09:31 [@astrojs/cloudflare] Enabling image processing with Cloudflare Images for production with the "IMAGES" Images binding.
2026-05-05T13:09:31.888Z	13:09:31 [@astrojs/cloudflare] Enabling sessions with Cloudflare KV with the "MY_SESSION_KV" KV binding.
2026-05-05T13:09:31.987Z	13:09:31 [vite] Re-optimizing dependencies because vite config has changed
2026-05-05T13:09:35.871Z	13:09:35 [vite] Forced re-optimization of dependencies
2026-05-05T13:09:35.876Z	13:09:35 [vite] Re-optimizing dependencies because vite config has changed
2026-05-05T13:09:37.004Z	13:09:37 [content] Syncing content
2026-05-05T13:09:37.544Z	13:09:37 [content] Synced content
2026-05-05T13:09:37.562Z	13:09:37 [types] Generated 5.64s
2026-05-05T13:09:37.562Z	13:09:37 [build] output: "server"
2026-05-05T13:09:37.563Z	13:09:37 [build] mode: "server"
2026-05-05T13:09:37.563Z	13:09:37 [build] directory: /opt/buildhome/repo/dist/
2026-05-05T13:09:37.563Z	13:09:37 [build] adapter: @astrojs/cloudflare
2026-05-05T13:09:37.563Z	13:09:37 [build] Collecting build info...
2026-05-05T13:09:37.563Z	13:09:37 [build] ✓ Completed in 5.68s.
2026-05-05T13:09:37.564Z	13:09:37 [build] Building server entrypoints...
2026-05-05T13:09:39.805Z	13:09:39 [vite] ✓ built in 2.15s
2026-05-05T13:09:41.252Z	13:09:41 [WARN] [router] getStaticPaths() ignored in dynamic page /src/pages/models/[...slug].astro. Add `export const prerender = true;` to prerender the page as static HTML during the build process.
2026-05-05T13:09:41.253Z	13:09:41 [WARN] [router] getStaticPaths() ignored in dynamic page /src/pages/about/[...slug].astro. Add `export const prerender = true;` to prerender the page as static HTML during the build process.
2026-05-05T13:09:41.253Z	13:09:41 [WARN] [router] getStaticPaths() ignored in dynamic page /src/pages/asset-library/[...slug].astro. Add `export const prerender = true;` to prerender the page as static HTML during the build process.
2026-05-05T13:09:41.305Z	13:09:41 [WARN] [router] getStaticPaths() ignored in dynamic page /src/pages/study-materials/[...slug].astro. Add `export const prerender = true;` to prerender the page as static HTML during the build process.
2026-05-05T13:09:41.305Z	13:09:41 [WARN] [router] getStaticPaths() ignored in dynamic page /src/pages/tools/[...slug].astro. Add `export const prerender = true;` to prerender the page as static HTML during the build process.
2026-05-05T13:09:42.831Z	13:09:42 [vite] ✓ built in 3.02s
2026-05-05T13:09:42.860Z	13:09:42 [WARN] [vite] Generated an empty chunk: "index.astro_astro_type_script_index_0_lang".
2026-05-05T13:09:42.866Z	13:09:42 [vite] ✓ built in 39ms
2026-05-05T13:09:42.878Z	13:09:42 [build] Rearranging server assets...
2026-05-05T13:09:42.879Z	13:09:42 [build] ✓ Completed in 5.32s.
2026-05-05T13:09:42.891Z	13:09:42 [@astrojs/sitemap] `sitemap-index.xml` created at `dist/client`
2026-05-05T13:09:42.891Z	13:09:42 [build] Server built in 11.01s
2026-05-05T13:09:42.892Z	13:09:42 [build] Complete!
2026-05-05T13:09:42.977Z	Success: Build command completed
2026-05-05T13:09:43.322Z	Executing user deploy command: npx wrangler deploy
2026-05-05T13:09:45.152Z	
2026-05-05T13:09:45.152Z	 ⛅️ wrangler 4.21.2 (update available 4.87.0)
2026-05-05T13:09:45.152Z	─────────────────────────────────────────────
2026-05-05T13:09:45.157Z	Using redirected Wrangler configuration.
2026-05-05T13:09:45.157Z	 - Configuration being used: "dist/server/wrangler.json"
2026-05-05T13:09:45.158Z	 - Original user's configuration: "wrangler.toml"
2026-05-05T13:09:45.158Z	 - Deploy configuration file: ".wrangler/deploy/config.json"
2026-05-05T13:09:45.231Z	▲ [WARNING] Processing dist/server/wrangler.json configuration:
2026-05-05T13:09:45.231Z	
2026-05-05T13:09:45.231Z	    - Unexpected fields found in dev field: "generate_types"
2026-05-05T13:09:45.231Z	    - Unexpected fields found in top-level field: "definedEnvironments","ai_search_namespaces","ai_search","artifacts","flagship","worker_loaders","ratelimits","vpc_services","vpc_networks","python_modules","previews"
2026-05-05T13:09:45.231Z	
2026-05-05T13:09:45.231Z	
2026-05-05T13:09:45.231Z	
2026-05-05T13:09:45.233Z	✘ [ERROR] Processing dist/server/wrangler.json configuration:
2026-05-05T13:09:45.235Z	
2026-05-05T13:09:45.235Z	    - "kv_namespaces[0]" bindings should have a string "id" field but got {"binding":"MY_SESSION_KV"}.
2026-05-05T13:09:45.235Z	    - The name 'ASSETS' is reserved in Pages projects. Please use a different name for your Assets binding.
2026-05-05T13:09:45.235Z	
2026-05-05T13:09:45.235Z	
2026-05-05T13:09:45.235Z	
2026-05-05T13:09:45.235Z	Cloudflare collects anonymous telemetry about your usage of Wrangler. Learn more at https://github.com/cloudflare/workers-sdk/tree/main/packages/wrangler/telemetry.md
2026-05-05T13:09:45.245Z	🪵  Logs were written to "/opt/buildhome/.config/.wrangler/logs/wrangler-2026-05-05_13-09-44_478.log"
2026-05-05T13:09:45.404Z	Failed: error occurred while running deploy command