import "astro";
declare module "astro" {
  interface AstroClientDirectives {
    "client:optimal"?: true;
  }
}
