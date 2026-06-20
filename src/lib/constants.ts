export const DATE_UTC = new Date(Date.UTC(2025, 11, 6, 17));
export const DATE_DISPLAY = DATE_UTC.toLocaleDateString("es-AR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "utc",
});
