import { isServer } from "./runtime";

const bodyComputedStyle = isServer
  ? undefined
  : getComputedStyle(document.body);

export const neutral100 = bodyComputedStyle?.getPropertyValue(
  "--color-neutral-100",
);
export const neutral600 = bodyComputedStyle?.getPropertyValue(
  "--color-neutral-600",
);
export const neutral900 = bodyComputedStyle?.getPropertyValue(
  "--color-neutral-900",
);
export const faePurple =
  bodyComputedStyle?.getPropertyValue("--color-fae-purple");
export const faeBlue = bodyComputedStyle?.getPropertyValue("--color-fae-blue");
export const faeGreen =
  bodyComputedStyle?.getPropertyValue("--color-fae-green");
export const faeOrange =
  bodyComputedStyle?.getPropertyValue("--color-fae-orange");
