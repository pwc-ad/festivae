/**
 * Get normalized `class + class:list` inside of props to be able to set `class` and spread props without issues.
 * @param props `Astro.props`
 * @returns props without `class`
 */
export function cleanAstroClasslist<
  Props extends astroHTML.JSX.HTMLAttributes,
>({ class: className, "class:list": classList, ...props }: Props) {
  return { "class:list": [className, classList], ...props };
}

export function astroImageWidthsToMatchingSizes(widths: Array<number>) {
  return `${widths
    .slice(0, -1)
    .map(
      (width, index) =>
        `(max-width: ${index ? widths[index + 1] : Math.round(width * (6 / 5))}px) ${width}px`,
    )
    .join(",")}, ${widths.at(-1)}px`;
}
