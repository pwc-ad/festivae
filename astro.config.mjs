// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Roboto Condensed",
        cssVariable: "--font-roboto-condensed"
      },
      {
        provider: fontProviders.google(),
        name: "Turret Road",
        cssVariable: "--font-turret-road"
      }
    ],
  },
  integrations: [icon()]
});