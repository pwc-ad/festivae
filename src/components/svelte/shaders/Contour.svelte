<script lang="ts">
  import { ContourLines, Exposure, Grayscale, Posterize } from "shaders/svelte";
  import type { Snippet } from "svelte";

  import { neutral100 } from "../../../lib/colors";

  const { children } = $props<{
    children: Snippet;
  }>();
</script>

<ContourLines
  colorMode="custom"
  gamma={0.625}
  lineColor={neutral100}
  opacity={0.9}
>
  <Grayscale>
    <Posterize intensity={20}>
      <Exposure exposure={3}>
        {@render children()}
      </Exposure>
    </Posterize>
  </Grayscale>
</ContourLines>
