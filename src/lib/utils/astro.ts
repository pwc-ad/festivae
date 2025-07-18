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
