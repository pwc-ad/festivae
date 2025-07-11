<script lang="ts">
  interface Props {
    copy: string
  }

  const {copy}: Props = $props()

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

<button class="cursor-pointer" {onclick} type="button">
  {hasCopied ? "Se copió el texto al portapapeles" : copy}
</button>
