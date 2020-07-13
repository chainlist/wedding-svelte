<script>
  import { onMount } from "svelte";
  import { hoveredItem } from '../store/cards';
  import { playAudio } from '../utils/playAudio';
  import mobile from 'is-mobile';

  export let card = null;
  export let cards = null;


  let element = null;

  function hover($event) {
    if (card) {
      const sound = mobile() ? 'select' : 'item';
      
      playAudio(sound);
      cards.hoverCard(card, $event.target);

      // When on mobile, it's easier to hover and select (one tap)
      // than double tap (for hovering) and another one for selecting
      if (mobile()) {
        cards.selectCard(card);
      }
    }
  }

  onMount(() => {
    if (card && card.selected) {
      hoveredItem.set({ card, element });
    }
  });
</script>

<div bind:this={element} class="item-slot" data-id={card && card.id}  on:mouseenter={($event) => hover($event)} class:selected={card && card.selected} class:hovered={card && card.hovered} class:empty={!card}>
  {#if card}
    <img src={card.img} alt="">
    <div class="details" on:click>{card.info}</div>
  {/if}
</div>

<style lang="scss">
.item-slot {
    background-color: rgba(2, 2, 2, .3);
    position: relative;
    border-radius: 5px;
    transition: background-color 0.1s ease-in-out, box-shadow 0.10s ease-in-out;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 6.7vw;
    height: 6.7vw;

    img {
      width: auto;
      max-height: 100%;
    }
}

.item-slot.empty {
    background-color: rgba(2, 2, 2, .1);
}

.item-slot.empty:after {
    border: 1px solid rgba(255, 255, 255, .3);
}

:global(.hovered) {
  box-shadow: 0px 0px 10px 2px #E3E6CF;
  animation: pulse infinite alternate .75s;

  @keyframes pulse {
    from {
      box-shadow: 0px 0px 10px 2px rgba(#E3E6CF, 1);
    }

    to {
      box-shadow: 0px 0px 10px 2px rgba(#E3E6CF, 0.2);
    }
  }
}

.item-slot:after {
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    display: block;
    content: "";
    background-color: transparent;
    border: 1px solid #E3E6CF;
    border-radius: 2px;
}

.item-slot.selected {
  background-color: #0AABC3;
}

.item-slot.selected:before {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  content: "";
  background-color: transparent;
  border: 3px solid rgba(0, 0, 0, .5);
  border-radius: 5px;
  box-shadow: 0 0 17px 3px white inset;
}

.item-slot.selected:hover:after {
  border-color: rgba(0, 0, 0, .5);
}

.item-slot .details {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #020202;
    height: 1.9vw;
    width: 2.8vw;
    bottom: -3px;
    right: -3px;
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 5px;
    z-index: 5;
    cursor: pointer;
}

.item-slot .details:after {
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    display: block;
    content: "";
    background-color: transparent;
    border: 1px solid #E3E6CF;
    border-radius: 2px;
    z-index: 5;
}

.item-slot.hovered {
  box-shadow: 0px 0px 20px 2px #E3E6CF;
}

@media only screen and (max-width: 768px) {
  .item-slot {
    width: 7.7vh;
    height: 7.7vh;
  }

  .item-slot .details {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #020202;
    height: 1.9vh;
    width: 2.8vh;
    bottom: -3px;
    right: -3px;
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 5px;
    z-index: 5;
    cursor: pointer;
  }
}
</style>