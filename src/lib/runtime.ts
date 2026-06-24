import { getGPUTier, type TierResult } from "@pmndrs/detect-gpu";

export const isServer = typeof window === "undefined";
export const isFirefox = isServer
  ? false
  : /Firefox|FxiOS/i.test(navigator.userAgent);

declare global {
  interface Window {
    ___performance: {
      gpuData: TierResult;
      maybeConnectedToWiFi: boolean;
      supportsWebm: boolean;
    };
  }
}

function windowPerformance() {
  if (isServer) {
    return {} as Window["___performance"];
  }
  return (window.___performance ??= {} as Window["___performance"]);
}

export async function getGpuData() {
  if (windowPerformance().gpuData) {
    return windowPerformance().gpuData;
  }
  return (windowPerformance().gpuData = await getGPUTier());
}

export function getSupportsWebm() {
  if (isServer || isFirefox) {
    return false;
  }

  if (windowPerformance().supportsWebm) {
    return true;
  }

  return (windowPerformance().supportsWebm =
    document.createElement("video").canPlayType("video/webm") !== "");
}

const OPTIMAL_INTERNET_SPEED_LIMIT = 500; // 500ms

/** We assume that the connection is Wi-Fi if the connection is better than slow 4G */
export async function isProbablyWiFi() {
  if (windowPerformance().maybeConnectedToWiFi) {
    return true;
  }

  const smallFileUrl = "/smallfile.txt";
  const startTime = performance.now();

  try {
    const response = await fetch(smallFileUrl, { cache: "no-store" });
    if (response.ok) {
      const duration = performance.now() - startTime;
      console.log(`Time taken to fetch: ${duration.toFixed(2)}ms`);

      if (duration < OPTIMAL_INTERNET_SPEED_LIMIT) {
        console.log("Connection is fast!");
        return (windowPerformance().maybeConnectedToWiFi = true);
      } else {
        console.log("Connection might be slow.");
      }
    }
  } catch {
    console.log("No internet connection or request failed.");
  }

  return false;
}
