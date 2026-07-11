<script lang="ts">
  import { ImageTexture, Liquify, Shader, VideoTexture } from "shaders/svelte";
  import { MediaQuery } from "svelte/reactivity";

  import {
    getGpuData,
    // getSupportsWebm
  } from "../../../lib/runtime";
  import MotionSafe from "../MotionSafe.svelte";

  import Contour from "./Contour.svelte";
  import Net from "./Net.svelte";

  interface Props {
    fallbackImageSrc: string;
  }

  const { fallbackImageSrc }: Props = $props();

  const supportsHover = new MediaQuery("(hover: hover)");

  let videoSrc = $state("");

  $effect(() => {
    async function loadSrcAsync() {
      const gpuData = await getGpuData();

      // if (getSupportsWebm()) {
      //   videoSrc = (
      //     gpuData.isMobile
      //       ? await import("../../../assets/sillas.mobile.webm")
      //       : await import("../../../assets/sillas.webm")
      //   ).default;
      //   return;
      // }

      videoSrc = (
        gpuData.isMobile
          ? await import("../../../assets/sillas.black.mobile.mp4")
          : await import("../../../assets/sillas.mp4")
      ).default;
    }

    void loadSrcAsync();
  });

  // function downloadCanvas(target: HTMLDivElement) {
  // console.log(target);
  // setTimeout(() => {
  //   const canvas = target.querySelector("canvas");
  //   if (canvas) {
  //     const url = canvas.toDataURL("image/png");
  //     const a = document.createElement("a");
  //     a.href = url;
  //     a.download = "image.png";
  //     document.body.appendChild(a);
  //     a.click();
  //     // document.body.removeChild(a);
  //   }
  // }, 1000);
  // }
</script>

<Shader class="size-full h-screen fixed inset-0 z-0" disableTelemetry>
  <MotionSafe>
    {#if videoSrc}
      <Contour>
        <VideoTexture url={videoSrc} objectFit="cover" loop={false} />
      </Contour>
      <Liquify
        intensity={supportsHover.current ? 2 : 4}
        radius={supportsHover.current ? 2 : 3}
        damping={0.5}
        stiffness={30}
      >
        <Net />
      </Liquify>
    {/if}
    {#snippet fallback()}
      <ImageTexture url={fallbackImageSrc} objectFit="cover" />
      <Net />
    {/snippet}
  </MotionSafe>
</Shader>
