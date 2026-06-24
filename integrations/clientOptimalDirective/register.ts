import type { AstroIntegration } from "astro";

const clientOptimalDirective: () => AstroIntegration = () => ({
  name: "client:optimal",
  hooks: {
    "astro:config:setup": ({ addClientDirective }) => {
      addClientDirective({
        name: "optimal",
        entrypoint: "./integrations/clientOptimalDirective/directive.ts",
      });
    },
  },
});

export default clientOptimalDirective;
