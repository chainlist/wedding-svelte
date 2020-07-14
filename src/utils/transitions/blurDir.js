import { cubicInOut } from 'svelte/easing';

export function blurDir(node, { delay = 0, duration = 200, easing = cubicInOut,amount = 5, opacity = 0, dir = 'left'}) {
  const style = getComputedStyle(node);
  const target_opacity = +style.opacity;
  const f = style.filter === 'none' ? '' : style.filter;

  const od = target_opacity * (1 - opacity);

  return {
    delay,
    duration,
    easing,
    css: (t, u) => 
      `opacity: ${target_opacity - (od * u)};` +
      `filter: ${f} blur(${u * amount}px);` +
      `transform: translateX(${dir === 'left' ? '-':''}${u * 60}%);`
  };
}