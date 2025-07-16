export const DATE_UTC = new Date(Date.UTC(2025, 6, 19, 17));
export const DATE_DISPLAY = DATE_UTC.toLocaleDateString("es-AR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "utc",
});
