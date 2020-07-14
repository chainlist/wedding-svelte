<script>

  export let items = null;
  export let empty = 10;

  import { onMount, onDestroy } from 'svelte';
  import { inventory } from '../../store/inventory';
  import { blurDir } from '../../utils/transitions/blurDir';

  import ItemSlot from './ItemSlot.svelte';
  import ItemSelector from './ItemSelector.svelte';

  const n = new Array(empty);

  let transitionOut = 'left';
  let transitionIn = 'right';

  inventory
</script>

<div id="items" out:blurDir={{ dir: 'left' }} in:blurDir={{dir: 'right'}}>
  {#each $items as item}
    <ItemSlot {item}/>
  {/each}

  {#each n as item }
    <ItemSlot />
  {/each}

  <ItemSelector {items} />
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