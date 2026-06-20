<script lang="ts">
    import { Shader, Liquify, Grid } from "shaders/svelte";

    const supportsHoverMatcher = matchMedia("(hover: hover)");

    let supportsHover = $state(supportsHoverMatcher.matches);

    supportsHoverMatcher.addEventListener(
        "change",
        (event) => (supportsHover = event.matches),
    );

    const color = getComputedStyle(document.body).getPropertyValue(
        "--color-neutral-950",
    );
</script>

<Shader class="size-full fixed inset-0 z-0" disableTelemetry>
    <Liquify
        intensity={supportsHover ? 2 : 4}
        radius={supportsHover ? 2 : 3}
        damping={0.5}
        stiffness={30}
    >
        <Grid {color} rotation={45} />
    </Liquify>
</Shader>
