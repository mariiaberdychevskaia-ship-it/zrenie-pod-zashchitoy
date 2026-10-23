// Конфиг для статической публикации на GitHub Pages.
// nitro: false — отключает сборку под Cloudflare; prerender — создаёт готовый index.html.
// VITE_BASE задаётся в .github/workflows/deploy.yml ("/zrenie-pod-zashchitoy/" для адреса вида
// user.github.io/repo/; "/" — для своего домена).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,
  vite: {
    base: process.env.VITE_BASE ?? "/",
  },
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      autoSubfolderIndex: true,
      crawlLinks: false,
      failOnError: true,
    },
  },
});
