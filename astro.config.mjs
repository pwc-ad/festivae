import { defineConfig } from "astro/config";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // site: "https://festivae.com.ar/",
  integrations: [icon()],

  vite: {
    plugins: [tailwindcss()],
  },

  output: "server",
  adapter: cloudflare({
    platformProxy: true,
  }),
});
