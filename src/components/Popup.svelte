<script>
  import ItemSelector from './inventory/ItemSelector.svelte';
  import Card from './Card.svelte';
  import { onMount } from 'svelte';
import { playAudio } from '../utils/playAudio';

  let element;
  let isOpened = false;

  export function open() {
    playAudio('open');
    isOpened = true;
  }

  export function close() {
    playAudio('close')
    isOpened = false;
  }
</script>

{#if isOpened}
<div id="popup" bind:this={element}>
  <div id="popup-layer" style={{width: '100vw'}}>
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
    z-index: 10;
    width: 100vw;
    // height: 45vh;

    #popup-layer {
      position: absolute;
      top: 20vw;
      left: 20vw;
      width: 15vw;
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

    #popup-layer {
      position: absolute;
      top: 30vh;
      left: 10vh;
      width: 20vh;
    }
  }
}
</style>