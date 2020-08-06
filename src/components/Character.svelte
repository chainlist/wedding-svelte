<script>
import { onDestroy, onMount } from 'svelte';

import { _ } from 'svelte-i18n';
import { fade } from 'svelte/transition';
import Writting from './Writting.svelte';
import { typewriter } from '../utils/transitions/typewriter';
import active from 'svelte-spa-router/active';
import { inventory } from '../store/inventory';
import Popup from './Popup.svelte';

import { guestInventory } from '../store/inventory/guests';
import { travelInventory } from '../store/inventory/travel';

let popup;
$: hoveredItem = $inventory && $inventory.hoveredItem;
$: item = $hoveredItem && $hoveredItem.item;
let subscription = null;
const guestSelected = guestInventory.selectedCard;
const travelSelected = travelInventory.selectedCard;

</script>

<div id="character">
  <div class="selectedItems">
    {#if $guestSelected }
      <div class="selected-item">
        <img src={$guestSelected.img} alt="">
        <h2><Writting text={$_($guestSelected.short)} speed={10} /></h2>
      </div>
    {/if}
    {#if ($guestSelected && $guestSelected.id !== 4 && $travelSelected) || (!$guestSelected && $travelSelected)}
      <div class="selected-item" transition:fade={{ duration: 150 }}>
        <img src={$travelSelected.img} alt="">
        <h2><Writting text={$_($travelSelected.short)} speed={10} /></h2>
      </div>
    {/if}
  </div>
  {#if item}
    <div class="details">
      <div class="blue-border">
        <h1>{$_(item.name)}</h1>
        <div class="description">
          <Writting text={$_(item.description)} />
        </div>
      </div>
    </div>
  {/if}

  <img src="assets/00100sPORTRAIT_00100_BURST20200531170931686.png"alt=""/>
</div>

<style lang="scss">
  :global(.highlighted) {
    text-shadow:#E3E6CF 0 0 10px;
    animation: pulse infinite alternate .75s;

    @keyframes pulse {
      from {
        text-shadow: #E3E6CF 0 0 10px;
      }

      to {
        text-shadow: rgba(#E3E6CF, .2) 0 0 10px;
      }
    }
  }

  #character {
    position: relative;
    grid-area: character;
    width: 100%;
    background: rgb(2, 2, 2, 0.2);
    background: linear-gradient(
      180deg,
      rgba(2, 2, 2, 0.6418942577030813) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    display: grid;

    font-style: italic;

    h2 {
      margin-top: 2vw;
      margin-left: 2vw;
      font-size: 2rem;
      font-weight: 400;
      transition: text-shadow .150s ease-in-out;
      padding-right: 1vw;
    }

    & > img {
      position: absolute;
      max-width: 50%;
      height: auto;
      justify-self: flex-end;
      align-self: flex-end;
    }
  }

  #character .details {
    position: absolute;
    background: rgb(2, 2, 2, 0.2);
    background: linear-gradient(
      90deg,
      rgba(2, 2, 2, 0.6418942577030813) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    bottom: 40px;

    padding: 20px;
    font-size: 1.25rem;
    width: 95%;
    height: 13vw;

    transition: max-height .2s ease-in-out;
    padding-left: 30px;
  }

  #character .details h1 {
    display: inline-block;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 10px;
    font-size: 2.5rem;
    width: 50%;
  }

  #character .details .description {
    font-size: 1.7rem;
    width: 55%;
  }

  #character .details:before {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    display: block;
    content: "";
    background-color: transparent;
    border-left: 10px solid #0a9af1;
    border-right: none;
    border-radius: 2px;
  }

  #character .details:after {
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    display: block;
    content: "";
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-right: none;
    border-radius: 2px;
  }

  #character .selectedItems {
    position: relative;
    top: 3vw;
    display: flex;
    flex-direction: column;
    
    .selected-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 1vw;

      h2 {
        margin: 0;
        margin-left: 2vw;
        text-shadow: rgba(3, 3, 3, .8) 0px 0px 5px;
      }

      img {
        width: 55px;
        height: auto;
      }
    }
  }
@media only screen and (max-width: 768px) {
  #character {
    background: linear-gradient(
      0deg,
      rgba(2, 2, 2, 0.6418942577030813) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    .answer {
      margin-top: 1vw;
      max-width: 25vh;
      font-size: 2rem;
    }
    
    .controls {
      display: flex;
      width: 100%;
      flex-direction: column;

      button:first-child {
        margin-top: 2vh;
      }
      button:not(:last-child) {
        margin-bottom: 1vh;
      }
    }
  }

  #character .details {
    position: absolute;
    background: rgb(2, 2, 2, 0.2);
    background: linear-gradient(
      90deg,
      rgba(2, 2, 2, 0.6418942577030813) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    bottom: 40px;

    padding: 20px;
    font-size: 1.25rem;
    width: 95%;
    height: 20vh;

    transition: max-height .2s ease-in-out;
    padding-left: 30px;
  }

  #character .selectedItems {
    position: relative;
    top: 1vh;
    left: 1vh;
    display: flex;
    flex-direction: column;
    
    .selected-item {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: .25vh;

      h2 {
        margin: 0;
        margin-left: 1vh;
        text-shadow: rgba(3, 3, 3, .8) 0px 0px 5px;
      }

      img {
        width: 45px;
        height: auto;
      }
    }
  }
}
</style>