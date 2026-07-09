import { objectKeys } from "./utils/objects";

const redirectsInverseMap = {
  "/codigo-de-convivencia": ["/convivencia"],
} as const satisfies {
  [Key in `/${string}`]: Array<`/${string}`>;
};

type Redirects = typeof redirectsInverseMap;

const redirectsDestinations = objectKeys(redirectsInverseMap);

export const redirects = redirectsDestinations.reduce(
  (redirectsMap, destination) => {
    redirectsInverseMap[destination].forEach((source) => {
      redirectsMap[source] = destination;
    });

    return redirectsMap;
  },
  {} as {
    -readonly [Key in keyof Redirects as Redirects[Key][number]]: Key;
  },
);
