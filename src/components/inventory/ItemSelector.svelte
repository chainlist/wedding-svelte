
<script>
  import { selectorElement } from '../../store';
  import { inventory } from '../../store/inventory';
  import { onMount, onDestroy, setContext } from 'svelte';
  import { playAudio } from '../../utils/playAudio';
  import debounce from 'lodash.debounce';

  let selector = null;

  onMount(() => {
    selectorElement.set(selector);
  });
  

  // Added debouncing to avoid transition stuttering
  const addTransition = debounce((el) => el.classList.remove('notransition'), 50);
</script>

<!-- <svelte:window on:resize={handleResize} on:scroll={handleResize}/> -->
<div class="item-selector " bind:this={selector} >
  <div class="arrow-top-left" />
  <div class="arrow-top-right" />
  <div class="arrow-bottom-right" />
  <div class="arrow-bottom-left" />
</div>

<style lang="scss">
.item-selector {
    position: absolute;
    background-color: transparent;
    width: 6.7vw;
    height: 6.7vw;
    border: 1px solid #E3E6CF;
    transition: top .150s ease, left .150s ease;
    cursor: pointer;
    pointer-events: none;
    z-index: 5;
}

.item-selector .arrow-top-left {
    display: inline-block;
    position: absolute;
    top: 0px;
    left: 0px;
    border-style: solid;
    border-width: 0.8vw 0.8vw 0 0;
    border-color: #E3E6CF transparent transparent transparent;
    animation: arrow-top-left .3s alternate infinite ease-in-out;
}

.item-selector .arrow-top-right {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    border-style: solid;
    border-width: 0 0.8vw 0.8vw 0;
    border-color: transparent #E3E6CF transparent transparent;
    animation: arrow-top-right .3s alternate infinite ease-in-out;
}

.item-selector .arrow-bottom-right {
    display: inline-block;
    position: absolute;
    bottom: 0;
    right: 0;
    border-style: solid;
    border-width: 0 0 0.8vw 0.8vw;
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
    border-width: 0.8vw 0 0 0.8vw;
    border-color: transparent transparent transparent #E3E6CF;
    animation: arrow-bottom-left .3s alternate infinite ease-in-out;
}

:global(.notransition) {
  transition: none;
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

@media only screen and (max-width: 768px) {
  .item-selector {
      position: absolute;
      background-color: transparent;
      width: 7.7vh;
      height: 7.7vh;
      border: 1px solid #E3E6CF;
      transition: top .150s ease, left .150s ease;
      cursor: pointer;
  }

  
  .item-selector .arrow-top-left {
      border-width: 0.8vh 0.8vh 0 0;
  }

  .item-selector .arrow-top-right {
      border-width: 0 0.8vh 0.8vh 0;
  }

  .item-selector .arrow-bottom-right {
      border-width: 0 0 0.8vh 0.8vh;
  }


  .item-selector .arrow-bottom-left {
      border-width: 0.8vh 0 0 0.8vh;
  }
}
</style>