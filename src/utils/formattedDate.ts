import { DATE_UTC } from "../lib/constants";

// export const formattedDate = ({ withTime }: { withTime?: boolean } = {}) => {
//   const date = DATE_UTC.toLocaleDateString("es-AR", {
//     day: "numeric",
//     month: "long",
//     year: "numeric",
//     timeZone: "utc",
//     hour: withTime ? "numeric" : undefined,
//     minute: withTime ? "numeric" : undefined,
//     hour12: false,
//   });

//   return withTime ? `${date} hs.` : date;
// };

export const DATE_SHORT = DATE_UTC.toLocaleDateString("es-AR", {
  weekday: "short",
  day: "numeric",
  month: "short",
  timeZone: "utc",
});

export const FULL_DATE_WITH_TIME_ACCESSIBLE = `${DATE_UTC.toLocaleDateString(
  "es-AR",
  {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "utc",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  },
)} horas.`;

console.log(FULL_DATE_WITH_TIME_ACCESSIBLE);

export const TIME_ABBR = `${DATE_UTC.toLocaleTimeString("es-AR", {
  hour: "numeric",
  minute: "numeric",
  hour12: false,
  timeZone: "utc",
})} hs`;
