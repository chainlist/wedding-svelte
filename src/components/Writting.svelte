<script>
  export let text = '';
  export let speed = 4;

  import { onMount, afterUpdate } from 'svelte';

  let element;
  let i = 0;

  function write(txt, reset = false) {
    if (!element) return;

    if (reset) {
      element.innerHTML = '';
      i = 0;
    }

    if (i < txt.length) {
      element.innerHTML += txt.charAt(i);
      i++;
      setTimeout(() => write(txt), speed);
    }
  }

  onMount(() => write(text));

  $: write(text, true);
</script>

<span bind:this={element}></span>