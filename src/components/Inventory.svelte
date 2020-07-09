<script>
import { locale } from 'svelte-i18n';
import { onMount } from 'svelte';
import { cards, selectedCard, hoveredItem } from '../store';

import InventoryMenu from './InventoryMenu.svelte';
import ItemSlot from './ItemSlot.svelte';
import ItemSelector from './ItemSelector.svelte';


const n = new Array(10);
</script>


<div id="items-container">
  <InventoryMenu />
  <div id="items">
    {#each $cards as card}
      <ItemSlot {card} />
    {/each}

    {#each n as item }
      <ItemSlot />
    {/each}

    <ItemSelector />
  </div>
</div>

<style lang="scss">
#items-container {
    grid-area: items;
    width: 100%;
    background: rgb(2,2,2, .2);
    background: linear-gradient(180deg, rgba(2,2,2,0.6418942577030813) 0%, rgba(255,255,255,0) 100%);
    display: grid;
    grid-template-rows: 8.8vw 4fr;
    padding-left: 5vw;
    padding-left: 9.4vw;
}

#items {
    display: grid;
    grid-gap: 0.95vw;
    grid-template-columns: 6.7vw 6.7vw 6.7vw 6.7vw 6.7vw;
    grid-template-rows: 6.7vw 6.7vw 6.7vw;
    grid-auto-rows: 6.7vw;
    grid-auto-columns: 6.7vw;
    grid-auto-flow: row;
}
</style>