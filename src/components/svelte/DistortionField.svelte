<script lang="ts">
    import { Shader, Liquify, Grid } from "shaders/svelte";
    import { MatchMedia } from "./MatchMedia.svelte";
    import MotionSafe from "./MotionSafe.svelte";

    const supportsHover = new MatchMedia("(hover: hover)");

    const color = getComputedStyle(document.body).getPropertyValue(
        "--color-neutral-950",
    );
</script>

<MotionSafe>
    <Shader class="size-full fixed inset-0 z-0" disableTelemetry>
        <Liquify
            intensity={supportsHover.current ? 2 : 4}
            radius={supportsHover.current ? 2 : 3}
            damping={0.5}
            stiffness={30}
        >
            <Grid {color} rotation={45} />
        </Liquify>
    </Shader>
</MotionSafe>
