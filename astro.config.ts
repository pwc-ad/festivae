// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";

import clientOptimalDirective from "./integrations/clientOptimalDirective/register";
import { redirects } from "./src/lib/redirects";

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
      name: "Stack Sans Notch",
      cssVariable: "--font-stack-sans-notch",
    },
    {
      provider: fontProviders.google(),
      name: "Turret Road",
      cssVariable: "--font-turret-road",
    },
  ],
  integrations: [clientOptimalDirective(), icon(), svelte()],
  redirects,
});
