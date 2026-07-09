import type { ClientDirective } from "astro";

import { isOptimal, isServer } from "../../src/lib/runtime";

const clientOptimalDirective: ClientDirective = async (load) => {
  if (isServer) return;
  if (await isOptimal()) {
    const hydrate = await load();
    await hydrate();
  }
};

export default clientOptimalDirective;
