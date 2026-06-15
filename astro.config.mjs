// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Roboto Condensed",
      cssVariable: "--font-roboto-condensed",
    },
    {
      provider: fontProviders.google(),
      name: "Turret Road",
      cssVariable: "--font-turret-road",
    },
  ],
  integrations: [icon(), svelte()],
});
