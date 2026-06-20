<script lang="ts">
    import { MatchMedia } from "./MatchMedia.svelte";

    let { children } = $props();

    const motionSafeMatcher = new MatchMedia(
        "(prefers-reduced-motion: no-preference)",
    );
</script>

{#if motionSafeMatcher.current}
    {@render children()}
{/if}
