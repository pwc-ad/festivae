<script lang="ts">
    import {
        BrightnessContrast,
        Grid,
        ImageTexture,
        Liquify,
        Shader,
        StudioBackground,
        VideoTexture,
        Vignette,
    } from "shaders/svelte";

    import {
        faeBlue,
        faeGreen,
        faePurple,
        neutral100,
        neutral600,
        neutral950,
    } from "../../lib/colors";
    import { getGpuData, getSupportsWebm, isFirefox } from "../../lib/runtime";

    import { MatchMedia } from "./MatchMedia.svelte";
    import MotionSafe from "./MotionSafe.svelte";

    const { fallbackImageSrc } = $props<{ fallbackImageSrc: string }>();

    const supportsHover = new MatchMedia("(hover: hover)");

    let videoSrc = $state("");

    $effect(() => {
        async function loadSrcAsync() {
            const gpuData = await getGpuData();

            if (getSupportsWebm()) {
                videoSrc = (
                    gpuData.isMobile
                        ? await import("../../assets/sillas.mobile.webm")
                        : await import("../../assets/sillas.webm")
                ).default;
                return;
            }

            videoSrc = (
                gpuData.isMobile
                    ? await import("../../assets/sillas.mobile.mp4")
                    : await import("../../assets/sillas.mp4")
            ).default;
        }

        void loadSrcAsync();
    });

    $inspect(videoSrc);
</script>

<Shader class="size-full fixed inset-0 z-0" disableTelemetry>
    {#if getSupportsWebm()}
        <StudioBackground
            backColor={faeGreen}
            color={faePurple}
            fillColor={faeBlue}
            keyColor={neutral100}
        />
    {/if}
    <MotionSafe>
        {#if videoSrc}
            {#if getSupportsWebm()}
                <VideoTexture url={videoSrc} objectFit="cover" loop={false} />
            {:else}
                <Vignette falloff={1.5} radius={-0.5}>
                    <VideoTexture
                        url={videoSrc}
                        objectFit="cover"
                        loop={false}
                    />
                </Vignette>
            {/if}
            <Liquify
                intensity={supportsHover.current ? 2 : 4}
                radius={supportsHover.current ? 2 : 3}
                damping={0.5}
                stiffness={30}
            >
                <Grid color={neutral600} rotation={45} thickness={3} />
                <Grid color={neutral950} rotation={45} thickness={1.5} />
            </Liquify>
        {/if}
        {#snippet fallback()}
            <ImageTexture url={fallbackImageSrc} objectFit="cover" />
            <Grid color={neutral600} rotation={45} thickness={3} />
            <Grid color={neutral950} rotation={45} thickness={1.5} />
        {/snippet}
    </MotionSafe>
</Shader>
