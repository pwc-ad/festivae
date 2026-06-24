import type { ClientDirective } from "astro";

import { getGpuData, isProbablyWiFi, isServer } from "../../src/lib/runtime";

const clientOptimalDirective: ClientDirective = async (load) => {
  if (isServer) return;
  window.addEventListener(
    "load",
    async () => {
      const [maybeWiFi, gpuData] = await Promise.all([
        isProbablyWiFi(),
        getGpuData(),
      ]);

      if (maybeWiFi && gpuData.tier > 0) {
        const hydrate = await load();
        await hydrate();
      }
    },
    { once: true },
  );
};

export default clientOptimalDirective;
