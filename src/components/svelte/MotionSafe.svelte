<script lang="ts">
  import type { Snippet } from "svelte";
  import { MediaQuery } from "svelte/reactivity";

  let { children, fallback } = $props<{
    children: Snippet;
    fallback?: Snippet;
  }>();

  const motionSafeMatcher = new MediaQuery(
    "(prefers-reduced-motion: no-preference)",
  );
</script>

{#if motionSafeMatcher.current}
  {@render children()}
{:else}
  {@render fallback()}
{/if}
