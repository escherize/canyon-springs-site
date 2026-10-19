import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

// GitHub Pages serves this repo at escherize.com/canyon-springs-site/.
// Set BASE_PATH=/ to build for a root domain (Cloudflare Pages, Netlify, the real domain).
const base = process.env.BASE_PATH ?? "/canyon-springs-site/";

export default defineConfig({
  base,
  plugins: [
    tanstackStart({
      router: { basepath: base.replace(/\/$/, "") || "/" },
      // Every route is written out as static HTML, so the host needs no server.
      prerender: { enabled: true, crawlLinks: true, autoSubfolderIndex: true },
      pages: [{ path: "/" }],
    }),
    viteReact(),
  ],
});
