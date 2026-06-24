import { on } from "svelte/events";
import { isServer } from "../../lib/runtime";

export class MatchMedia {
  #matches = $state(false);
  #matcher: MediaQueryList = null!;

  constructor(query: string) {
    if (isServer) {
      return;
    }

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
