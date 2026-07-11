<script lang="ts">
  import CopyText from "./CopyText.svelte";

  interface Props {
    class: string;
  }

  const { class: className }: Props = $props();
</script>

<CopyText copy="festivae.mp" class={className}>
  {#snippet header()}
    ¡Hacenos tu aporte!
  {/snippet}
  {#snippet content()}
    <p>Se copió nuestro alias (festivae.mp) al portapapeles.</p>
  {/snippet}
  Aportar
</CopyText>
