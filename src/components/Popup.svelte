<script context="module">
  let mX, mY;

  const handleMouseMove = (e) => {
    mX = e.clientX;
    mY = e.clientY;
  };

  document.addEventListener('mousemove', handleMouseMove);
</script>

<script>
  import ItemSelector from './inventory/ItemSelector.svelte';
  import Card from './Card.svelte';
  import { playAudio } from '../utils/playAudio';
  import { onMount } from 'svelte';

  export let cursor = false;

  let element;
  let isOpened = false;

  // onMount(() => {
  //   attachEvent();

  //   return () => detachEvent();
  // })

  export function open() {
    playAudio('open');
    isOpened = true;
  }

  export function close() {
    playAudio('close')
    isOpened = false;
  }

  function getPosition() {
    if (cursor) {
      return `
        top: ${mY}px;
        left: ${mX}px;
      `;
    }
    
    return `
      top: 20vh;
      left: auto;
    `;
  }
</script>

{#if isOpened}
<div id="popup" bind:this={element}>
  <div id="popup-layer" style={getPosition()}>
    <Card dark>
      <div class="popup-content">
        <slot />
        <div class="controls">
          <slot name="controls"/>
        </div>
      </div>
    </Card>
  </div>
</div>
{/if}

<style lang="scss">
  #popup {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000001;
    width: 100vw;

    display: flex;

    justify-content: center;
    align-items: center;

    #popup-layer {
      position: absolute;
    }
    
    .popup-content {
      display: grid;
      grid-template-rows: 1fr;
      padding: 1vw 1.3vw;

      .controls {
        display: flex;
        flex-direction: column;
        
        button:not(:last-child) {
          margin-bottom: 1vw;
        }
      }
    }
  }

@media only screen and (max-width: 768px) {
  #popup {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    width: 100vw;
  }
}
</style>