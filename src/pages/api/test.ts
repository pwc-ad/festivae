export function GET({ params, request }) {
  return new Response(
    JSON.stringify({
      name: "Astro",
      url: "https://astro.build/",
      random: Math.random(),
    }),
  );
}
