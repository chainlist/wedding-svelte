<script>
import { locale } from 'svelte-i18n';
import { onMount } from 'svelte';
import { cards, selectedCard } from '../store';
import { playAudio } from '../utils/playAudio';
import debounce from 'lodash.debounce';

const selectAudio = new Audio('/assets/select.mp3');

let selector = null;
let selectorCoord = null;
let lastHovered = null;

onMount(() => {
  selectorCoord = selector.getBoundingClientRect();
});

function mouseEnter($e, card) {
  const cardElement = $e.target;
  const coord = cardElement.getBoundingClientRect();
  selector.style.display = 'inline-block';
  selector.style.top = `${coord.top + window.scrollY}px`;
  selector.style.left = `${coord.left + window.scrollX}px`;


  if (lastHovered) {
    lastHovered.element.classList.remove('hovered');
  }

  playAudio('item');
  lastHovered = { element: cardElement, card };
  cardElement.classList.add('hovered');
}

function selectCard() {
  if (lastHovered.card !== $selectedCard) {
    selectAudio.play();
  }
  cards.selectCard(lastHovered.card);
}

// Added debouncing to avoid transition stuttering
const addTransition = debounce((el) => el.classList.remove('notransition'), 50);

function handleResize($event) {
  if (!lastHovered) return;
  const el = lastHovered.element;

  // delete transition to avoid "laging" effect
  selector.classList.add('notransition');

  const coord = el.getBoundingClientRect();
  selector.style.left = `${coord.left + window.scrollX}px`;
  selector.style.top = `${coord.top + window.scrollY}px`;

  addTransition(selector);
}
</script>

<!-- svelte-ignore css-unused-selector -->
<svelte:window on:resize={handleResize} on:scroll={handleResize}/>
<div id="items-container">
  <div id="items-menu" />
  <div id="items">
    {#each $cards as card}
      <div class="item card" on:mouseenter={($e) => mouseEnter($e, card)} class:selected={card.selected}>
        <img src={card.img} alt="" />
        <div class="details" on:click={selectCard}>{card.info}</div>
      </div>
    {/each}


    <div class="item card empty" />
    <div class="item card empty" />
    <div class="item card empty" />
    <div class="item card empty" />
    <div class="item card empty" />
    <div class="item card empty" />
    <div class="item card empty" />
    <div class="item card empty" />
    <div class="item card empty" />
    <div class="item card empty" />
    <div class="item-selector " bind:this={selector}  on:click={selectCard} >
      <div class="arrow-top-left" />
      <div class="arrow-top-right" />
      <div class="arrow-bottom-right" />
      <div class="arrow-bottom-left" />
    </div>
  </div>
</div>

<style lang="scss">
#items-container {
    grid-area: items;
    width: 100%;
    background: rgb(2,2,2, .2);
    background: linear-gradient(180deg, rgba(2,2,2,0.6418942577030813) 0%, rgba(255,255,255,0) 100%);
    display: grid;
    grid-template-rows: 1fr 4fr;
    padding-top: .7%;
    padding-left: 19%;
}

#items-menu {
    display: grid;
}

#items {
    display: grid;
    grid-gap: 19px;
    grid-template-columns: 110px 110px 110px 110px 110px;
    grid-template-rows: 110px 110px 110px;
}

.item-selector {
    position: absolute;
    background-color: transparent;
    width: 110px;
    height: 110px;
    border: 1px solid #E3E6CF;
    transition: top .150s ease, left .150s ease;
    cursor: pointer;
}

.notransition {
  transition: none;
}

.item-selector .arrow-top-left {
    display: inline-block;
    position: absolute;
    top: 0px;
    left: 0px;
    border-style: solid;
    border-width: 13px 13px 0 0;
    border-color: #E3E6CF transparent transparent transparent;
    animation: arrow-top-left .3s alternate infinite ease-in-out;
}

.item-selector .arrow-top-right {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    border-style: solid;
    border-width: 0 13px 13px 0;
    border-color: transparent #E3E6CF transparent transparent;
    animation: arrow-top-right .3s alternate infinite ease-in-out;
}

.item-selector .arrow-bottom-right {
    display: inline-block;
    position: absolute;
    bottom: 0;
    right: 0;
    border-style: solid;
    border-width: 0 0 13px 13px;
    border-color: transparent transparent #E3E6CF transparent;
    z-index: 6;
    animation: arrow-bottom-right .3s alternate infinite ease-in-out;
}


.item-selector .arrow-bottom-left {
    display: inline-block;
    position: absolute;
    bottom: 0;
    left: 0;
    border-style: solid;
    border-width: 13px 0 0 13px;
    border-color: transparent transparent transparent #E3E6CF;
    animation: arrow-bottom-left .3s alternate infinite ease-in-out;
}

.card {
    background-color: rgba(2, 2, 2, .3);
    position: relative;
    border-radius: 5px;
    transition: background-color 0.1s ease-in-out, box-shadow 0.20s ease-in-out;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 110px;
    height: 110px;
}

.card.empty {
    background-color: rgba(2, 2, 2, .1);
}

.card.empty:after {
    border: 1px solid rgba(255, 255, 255, .3);
}

:global(.hovered) {
  box-shadow: 0px 0px 20px 2px #E3E6CF;
}

.card:after {
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

.card.selected {
    background-color: #0AABC3;
}

.card.selected:before {
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

.card.selected:hover:after {
    border-color: rgba(0, 0, 0, .5);
}

.card .details {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #020202;
    height: 26%;
    width: 50px;
    bottom: -3px;
    right: -3px;
    font-weight: bold;
    font-size: 1.5rem;
    border-radius: 5px;
    z-index: 5;
}

.card .details:after {
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

@keyframes arrow-top-left {
  from {
    top: 0px;
    left: 0px;
  }

  to {
    top: -5px;
    left: -5px;
  }
}


@keyframes arrow-top-right {
  from {
    top: 0px;
    right: 0px;
  }

  to {
    top: -5px;
    right: -5px;
  }
}


@keyframes arrow-bottom-right {
  from {
    bottom: 0px;
    right: 0px;
  }

  to {
    bottom: -5px;
    right: -5px;
  }
}

@keyframes arrow-bottom-left {
  from {
    bottom: 0px;
    left: 0px;
  }

  to {
    bottom: -5px;
    left: -5px;
  }
}
</style>