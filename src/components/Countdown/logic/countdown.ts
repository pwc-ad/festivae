import { pluralize } from "./pluralize";

const target = new Date(Date.UTC(2024, 10, 30, 18) + 3 * 60 * 60 * 1000);

export function getCountdown() {
  const now = Date.now();
  const difference = target.valueOf() - now;

  if (difference > 0) {
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    return { days, hours, minutes, seconds };
  }
}

export function getCountdownStatus(time?: ReturnType<typeof getCountdown>) {
  if (time) {
    return `Faltan ${time.days} ${pluralize("día", time.days !== 1)},\n${time.hours % 24} ${pluralize("hora", time.hours !== 1)},\n${time.minutes % 60} ${pluralize("minuto", time.minutes !== 1)}\ny ${time.seconds % 60} ${pluralize("segundo", time.seconds !== 1)}`;
  }
  return "¡Arrancó el festival!";
}
