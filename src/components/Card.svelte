<script>
  import { onMount, getContext } from "svelte";
  import { selectorElement } from '../store';
  import { playAudio } from '../utils/playAudio';

  export let selected = false;
  export let empty = false;
  export let hovered = false;
  export let details = false;
  export let selector = false;
  export let hover = false;
  export let pointer = false;
  export let dark = false;

  let element;

  function moveSelector() {
    if (!selector) return;

    const selectorElement = $selectorElement;

    playAudio('item');
    selectorElement.style.top = `${element.offsetTop + window.scrollY}px`;
    selectorElement.style.left = `${element.offsetLeft + window.scrollX}px`;
  }
</script>

<div bind:this={element} class="card"
  class:selected={selected}
  class:pointer={pointer}
  class:empty={empty}
  class:hovered={hover && hovered}
  class:dark={dark}
  on:click on:mouseenter={moveSelector}
  on:mouseover>
  <fieldset>
    <slot/>
    {#if details}
      <div class="details">
        <fieldset>
          <slot name="details"></slot>
        </fieldset>
      </div>
    {/if}
  </fieldset>
</div>

<style lang="scss">
:global(img) {
  width: auto;
  height: 100%;
}

.card {
  position: relative;

  background-color: rgba(2, 2, 2, .6);
  border-radius: 5px;
  transition: background-color 0.1s ease-in-out, box-shadow 0.10s ease-in-out;
  padding: 3px;
  height: 100%;

  &.pointer {
    cursor: pointer;
  }

  &.dark {
    background-color: rgba(2, 2, 2, .9);
  }

  & fieldset {
    display: block;
    border-width: 1px;
    border-color: #E3E6CF;
    height: 100%;
    width: 100%;
    border-radius: 2px;
  }


  &.selected > fieldset {
    box-shadow: 0 0 17px 3px white inset;
    background-color: #0AABC3;
    animation: pulseSelected infinite alternate .75s;
  }

  &:not(.empty).hovered {
    box-shadow: 0px 0px 10px 2px #E3E6CF;
    animation: pulseHovered infinite alternate .75s;
  }

  &.empty {
    cursor: inherit;
    background-color: rgba(2, 2, 2, .1);
    & > fieldset {
      border: 1px solid rgba(255, 255, 255, .3);
    }
  }

  .details {
      position: absolute;
      background-color: #020202;
      height: 1.7vw;
      width: 2.8vw;
      bottom: -3px;
      right: -3px;
      font-weight: bold;
      font-size: 1.5rem;
      border-radius: 5px;
      z-index: 5;
      cursor: pointer;
      padding: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
  }
}
@keyframes pulseSelected {
  from {
    box-shadow: 0 0 17px 3px rgba(#E3E6CF, 1) inset;
  }

  to {
    box-shadow: 0 0 30px 5px rgba(#E3E6CF, 0.8) inset;
  }
}
@keyframes pulseHovered {
  from {
    box-shadow: 0px 0px 10px 2px rgba(#E3E6CF, 1);
  }

  to {
    box-shadow: 0px 0px 10px 2px rgba(#E3E6CF, 0.2);
  }
}


@media only screen and (max-width: 768px) {
  .card .details {
    height: 1.9vh;
    width: 2.8vh;
    bottom: -3px;
    font-size: 1.25rem;
  }
}
</style>