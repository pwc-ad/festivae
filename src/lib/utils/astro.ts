export function astroImageWidthsToMatchingSizes(widths: Array<number>) {
  return `${widths
    .slice(0, -1)
    .map((width) => `(max-width: ${width}px) ${width}px`)
    .join(",")}, ${widths.slice(-1)[0]}px`;
}
