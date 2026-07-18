<script lang="ts">
  import type { Snippet } from "svelte";
  import CopyText from "./CopyText.svelte";

  interface Props {
    class: string;
    children: Snippet;
    interestfor: string
  }

  const { class: className, children, ...rest }: Props = $props();
</script>

<CopyText copy="festivae.mp" class={className} {...rest}>
  {#snippet header()}
    ¡Hacenos tu aporte!
  {/snippet}
  {#snippet content()}
    <p>Se copió nuestro alias (festivae.mp) al portapapeles.</p>
  {/snippet}
  {@render children()}
</CopyText>
