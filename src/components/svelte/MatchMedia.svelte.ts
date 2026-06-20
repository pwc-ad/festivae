import { on } from "svelte/events";

export class MatchMedia {
  #matches = $state(false);
  #matcher: MediaQueryList;

  constructor(query: string) {
    this.#matcher = matchMedia(query);
    this.#matches = this.#matcher.matches;

    $effect(() => {
      if (typeof window === "undefined") return;
      on(
        this.#matcher,
        "change",
        () => (this.#matches = this.#matcher.matches),
      );
    });
  }

  get current() {
    return this.#matches;
  }
}
