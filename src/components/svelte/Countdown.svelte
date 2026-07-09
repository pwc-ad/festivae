<script lang="ts">
  import { onMount, type Snippet } from "svelte";
  import { SvelteDate } from "svelte/reactivity";

  import { DATE_UTC } from "../../lib/constants";

  interface Props {
    children?: Snippet;
    class?: string;
  }

  const { children, class: className }: Props = $props();

  const msInSecond = 1000;
  const msInMinute = msInSecond * 60;
  const msInHour = msInMinute * 60;
  const msInDay = msInHour * 24;

  let date = new SvelteDate(
    Date.now() - new Date().getTimezoneOffset() * msInMinute,
  );

  let animated = $state(false);

  onMount(() => {
    const interval = setInterval(() => {
      animated = true;
      date.setTime(Date.now() - date.getTimezoneOffset() * msInMinute);
    }, 1000);

    return () => {
      animated = false;
      clearInterval(interval);
    };
  });

  const target = DATE_UTC.getTime();

  const orderedTimeNames = ["día", "hora", "minuto", "segundo"] as const;

  const countdown = $derived.by(() => {
    const difference = target - date.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
    }

    const days = Math.floor(difference / msInDay);
    const hours = Math.floor((difference % msInDay) / msInHour);
    const minutes = Math.floor((difference % msInHour) / msInMinute);
    const seconds = Math.floor((difference % msInMinute) / msInSecond);

    return { days, hours, minutes, seconds, expired: false };
  });

  const message = $derived.by(() => {
    const { expired, days, hours, minutes, seconds } = countdown;
    if (expired) {
      return "¡Arrancó el festival!";
    }

    const formattedTimes = [days, hours, minutes, seconds].reduce(
      (times, time, index) => {
        const formattedTime = `${time} ${orderedTimeNames[index]}${time !== 1 ? "s" : ""}`;

        if (time) {
          times.push(formattedTime);
        }

        return times;
      },
      [] as Array<string>,
    );

    return `Faltan ${formattedTimes.length === 1 ? formattedTimes[0] : `${formattedTimes.slice(0, -1).join(",&nbsp")}&nbspy ${formattedTimes.slice(-1)}`}`;
  });
</script>

<div
  class={[
    "flex motion-safe:font-body-alt w-full items-center justify-center transition delay-1000 duration-1000 max-lg:flex-col-reverse md:justify-between starting:opacity-0 motion-reduce:animate-none",
    countdown.expired
      ? "text-4xl max-w-sm md:text-5xl md:max-w-lg"
      : "sm:text-2xl md:motion-reduce:text-3xl",
    animated &&
      (countdown.expired
        ? "animate-bounce"
        : "animate-pop animate-delay-500 animate-duration-1000 animate-iteration-count-infinite"),
    "motion-reduce:animate-none",
  ]}
>
  <p>{@html message}</p>
  {#if children}
    {@render children()}
  {/if}
</div>
