<script>
  export let items = null;
  export let empty = 10;
  export let hoveredItem = null;
  export let selectedCard = null;

  import { onMount, onDestroy } from 'svelte';
  import { blur, fly, fade } from 'svelte/transition'
  import { cubicInOut } from 'svelte/easing';

  import ItemSlot from './ItemSlot.svelte';
  import ItemSelector from './ItemSelector.svelte';

  const n = new Array(empty);

  function blurDir(node, { delay = 0, duration = 200, easing = cubicInOut,amount = 5, opacity = 0, dir = 'left'}) {
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
</script>

<div id="items" out:blurDir in:blurDir={{dir: 'right'}}>
  {#each $items as card}
    <ItemSlot {card} cards={items}/>
  {/each}

  {#each n as item }
    <ItemSlot />
  {/each}

  <ItemSelector cards={items} {hoveredItem} {selectedCard} />
</div>

<style lang="scss">
#items {
  position: absolute;
  top: 0;
  display: grid;
  grid-gap: 0.95vw;
  grid-template-columns: 6.7vw 6.7vw 6.7vw 6.7vw 6.7vw;
  grid-template-rows: 6.7vw 6.7vw 6.7vw;
  grid-auto-rows: 6.7vw;
  grid-auto-columns: 6.7vw;
  grid-auto-flow: row;
}

@media only screen and (max-width: 768px) {
  #items {
    grid-gap: 0.95vh;
    grid-template-columns: 7.7vh 7.7vh 7.7vh 7.7vh 7.7vh;
    grid-template-rows: 7.7vh 7.7vh 7.7vh;
    grid-auto-rows: 7.7vh;
    grid-auto-columns: 7.7vh;
  }
}
</style>