<script lang="ts">
  import type { Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";

  interface Props {
    afterCopy: string;
    children: Snippet;
    class?: ClassValue;
    copy: string;
  }

  const { afterCopy, children, class: className, copy }: Props = $props();

  async function onclick() {
    await navigator.clipboard.writeText(copy);
    alert(afterCopy);
  }
</script>

<button class={["cursor-pointer", className]} {onclick} type="button">
  {@render children()}
</button>
