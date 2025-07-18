<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
	children: Snippet;
    class?: string
    copy: string
  }

  const { children, class: className, copy }: Props = $props()

  let hasCopied = $state(false)
  let timeout: ReturnType<typeof setTimeout>

  async function onclick() {
    await navigator.clipboard.writeText(copy)
    hasCopied = true

    clearTimeout(timeout)

    timeout = setTimeout(() => {
      hasCopied = false
    }, 3000)
  }
</script>

<button class={["cursor-pointer", className]} {onclick} type="button">
    {#if hasCopied}
        Se copió el texto al portapapeles
    {:else}
        {@render children()}
    {/if}
</button>
