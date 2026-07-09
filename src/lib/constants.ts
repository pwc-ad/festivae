export const DATE_UTC = new Date(Date.UTC(2026, 6, 18, 17));
export const DATE_DISPLAY = DATE_UTC.toLocaleDateString("es-AR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "utc",
});

export const auto = "auto";
export type Auto = typeof auto;
