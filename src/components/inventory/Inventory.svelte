<script>
  import Router from 'svelte-spa-router';
  import InventoryMenu from './InventoryMenu.svelte';
  import Items from './Items.svelte';
  import { push, location } from 'svelte-spa-router';
  import { routes } from '../../routes';
  import { submenu, selectSubMenu } from '../../store';
  import { fade } from 'svelte/transition';
import { playAudio } from '../../utils/playAudio';

  let isFirst;
  let isLast;
  let previous;
  let next;

  $: {
    isFirst = $submenu.findIndex(m => `/${m.name}` === $location) === 0;
    isLast = $submenu.findIndex(m => `/${m.name}` === $location) === $submenu.length -1;

    const current = $submenu.findIndex(m => `/${m.name}` === $location);
    previous = function() {
      selectSubMenu($submenu[current - 1]);
    }
    next = function() {
      selectSubMenu($submenu[current + 1]);
    }
  }
</script>


<div id="items-container">
  <InventoryMenu />
  <div id="view">
    <Router {routes}/>
    
    {#if !isFirst}
      <img class="arrow arrow-left" src="assets/arrow-left.svg" alt="" on:click={previous} transition:fade={{ duration: 150 }}>
    {/if}
    {#if !isLast}
      <img class="arrow arrow-right" src="assets/arrow-right.svg" alt="" on:click={next} transition:fade={{ duration: 150 }}>
    {/if}
  </div>
</div>

<style lang="scss">
#items-container {
  position: relative;
  grid-area: items;
  width: 100%;
  background: rgb(2,2,2, .2);
  background: linear-gradient(180deg, rgba(2,2,2,0.6418942577030813) 0%, rgba(255,255,255,0) 100%);
  display: grid;
  grid-template-rows: 8.8vw 4fr;
  padding-left: 5vw;
  padding-left: 9.4vw;

  #view {
    position: relative;
    
    .arrow {
      position: absolute;
      top: 30%;
      width: 2vw;
      height: 5vw;
      opacity: .9;
      cursor: pointer;
      z-index: 5;

      &.arrow-left {
        left: -3vw;
        animation: arrow-left .5s alternate infinite ease;
      }

      &.arrow-right {
        right: 0;
        animation: arrow-right .5s alternate infinite;
      }
    }
  }
}

@keyframes arrow-left {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-5px);
  }
}

@keyframes arrow-right {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(5px);
  }
}

@media only screen and (max-width: 768px) {
  #items-container {
    grid-template-rows: 8.8vh 4fr;
    padding-left: 1.5vh;

    #view {
      .arrow {
        width: 2vh;
        height: 5vh;

        &.arrow-left {
          left: -1vw;
          animation: arrow-left .5s alternate infinite;
        }

        &.arrow-right {
          right: 1vw;
          animation: arrow-right .5s alternate infinite;
        }
      }
    }
  }
}
</style>