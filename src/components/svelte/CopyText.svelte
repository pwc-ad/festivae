<script lang="ts">
  import { type Snippet } from "svelte";
  import type { ClassValue } from "svelte/elements";
  import { MediaQuery } from "svelte/reactivity";

  interface Props {
    children: Snippet;
    class?: ClassValue;
    copy: string;
    content: Snippet;
    header: Snippet;
  }

  const {
    children,
    class: className,
    copy,
    content,
    header,
    ...rest
  }: Props = $props();

  const id = $props.id();

  let open = $state(false);
  const motionSafeMatcher = new MediaQuery(
    "(prefers-reduced-motion: no-preference)",
  );

  let trigger: HTMLButtonElement;
  function attachTrigger(element: HTMLButtonElement) {
    trigger = element;
  }

  let dialog: HTMLDialogElement;
  function attachDialog(element: HTMLDialogElement) {
    dialog = element;
  }



  function onclose() {
    open = false;
  }

  async function onclick() {
    await navigator.clipboard.writeText(copy);
    open = true;
  }

  $effect(() => {
    const supportsInvokerCommands =
      "commandForElement" in trigger;
    if (!supportsInvokerCommands) {
      if (open) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }
  });
</script>

<button
  class={["cursor-pointer", className]}
  command="show-modal"
  commandfor={id}
  {onclick}
  type="button"
  {...rest}
  {@attach attachTrigger}
>
  {@render children()}
</button>

<dialog
  {id}
  class="rounded-xl p-0 shadow-2xl w-full max-w-lg m-auto fixed inset-0 z-50 transition bg-neutral-900 normal-case inset-shadow-sm inset-shadow-neutral-50/50 border-neutral-50 border animate-dialog motion-reduce:animate-dialog-duration-0"
  style:--tw-anim-dialog-backdrop-background={"color-mix(in oklab, var(--color-neutral-900) 50%, transparent);"}
  style:--tw-anim-dialog-backdrop-filter={`blur(${motionSafeMatcher.current ? "var(--blur-xs)" : "0px"})`}
  {@attach attachDialog}
  {onclose}
>
  <div class="p-6">
    {#snippet renderHeader()}
      <div
        class="flex items-center justify-between border-b border-b-neutral-50 pb-3 mb-4"
      >
        <h3 class="text-xl font-semibold text-neutral-200">
          {@render header()}
        </h3>
      </div>
    {/snippet}
    {@render renderHeader()}

    {#snippet renderBody()}
      <div class="text-neutral-100 mb-6 flex flex-col gap-2">
        {@render content()}
        <noscript>
          <p>
            No está habilitado ejecutar scripts con tu navegador, ofrecemos la
            alternative de copiar manualmente: <code>{copy}</code>
          </p>
        </noscript>
      </div>
      <div class="flex w-full justify-end">
        <!-- svelte-ignore a11y_autofocus -->
        <button
          autofocus
          class="bg-neutral-200 text-neutral-950 hover:bg-neutral-50 font-bold leading-none uppercase py-2 px-5 rounded-md active:scale-95 transition"
          command="close"
          commandfor={id}
          onclick={onclose}
        >
          Entendido
        </button>
      </div>
    {/snippet}
    {@render renderBody()}
  </div>
</dialog>
