export const objectKeys = Object.keys as <T extends object>(
  object: T,
) => Array<keyof T>;
