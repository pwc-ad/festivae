<script lang="ts">
    import type { Snippet } from "svelte";

    import { MatchMedia } from "./MatchMedia.svelte";

    let { children, fallback } = $props<{
        children: Snippet;
        fallback?: Snippet;
    }>();

    const motionSafeMatcher = new MatchMedia(
        "(prefers-reduced-motion: no-preference)",
    );
</script>

{#if motionSafeMatcher.current}
    {@render children()}
{:else}
    {@render fallback()}
{/if}
