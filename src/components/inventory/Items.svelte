<script>
  export let items = null;
  export let empty = 10;

  import { onMount, onDestroy } from 'svelte';
  import { inventory } from '../../store/inventory';
  import { blurDir } from '../../utils/transitions/blurDir';
  import { playAudio } from '../../utils/playAudio';
  import mobile from 'is-mobile';

  import Card from '../Card.svelte';
  import ItemSelector from './ItemSelector.svelte';
  import Popup from '../Popup.svelte';

  const n = new Array(empty);

  let transitionOut = 'left';
  let transitionIn = 'right';
  $: hoveredItem = $inventory.hoveredItem;

  let popup;

  function selectItem(item) {
    items.selectCard(item);
    popup.close();
  }

  function hoverItem(item) {
    items.hoverCard(item);

    if (mobile()) {
      items.selectCard(item);
    }
  }

  function openPopup(item) {
    if (mobile()) {
      selectItem(item);
    } else {
      playAudio('open');
      popup.open();
    }
  }
</script>

<div id="items" out:blurDir={{ dir: 'left' }} in:blurDir={{dir: 'right'}}>
  {#each $items as item}
    <Card selected={item.selected} hovered={item.hovered} on:click={() => openPopup(item)} on:mouseover={() => hoverItem(item)} details selector hover pointer>
      <img src={item.img} alt="">
      <span slot="details">{item.info}</span>
    </Card>
  {/each}

  {#each n as item }
    <Card empty/>
  {/each}

  <ItemSelector />
  <Popup bind:this={popup} cursor>
    <div slot="controls" class="controls">
      <button on:click={() => selectItem($hoveredItem.item)}>Equip</button>
      <button on:click={() => popup.close()}>Cancel</button>
    </div>
  </Popup>
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

  .controls {
    display: flex;
    width: 100%;
    flex-direction: column;
    width: 15vw;

    button:not(:last-child) {
      margin-bottom: 1vw;
    }
  }
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