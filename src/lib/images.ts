import { getImage } from "astro:assets";
import sillas from "../assets/sillas.png";

export const SILLAS_WIDTHS = Array.from(
  { length: 5 },
  (_, i) => sillas.width / (i + 1),
).reverse();

export async function getSillas() {
  return getImage({
    src: sillas,
    format: "png",
    widths: SILLAS_WIDTHS,
  });
}
