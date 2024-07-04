export function astroImageWidthsToMatchingSizes(widths: Array<number>) {
  return `${widths
    .slice(0, -1)
    .map(
      (width, index) =>
        `(max-width: ${index ? widths[index + 1] : Math.round(width * (6 / 5))}px) ${width}px`,
    )
    .join(",")}, ${widths.slice(-1)[0]}px`;
}
