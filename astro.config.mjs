import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://pwc-ad.github.io/festivae",
  integrations: [tailwind(), icon()],
});
