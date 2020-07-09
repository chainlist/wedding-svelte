<script>
  export let text = '';
  export let speed = 4;

  import { onMount, afterUpdate } from 'svelte';

  let element;
  let i = 0;
  let interval = null;

  function write(txt, reset = false) {
    if (!element) return;
  
    if (i < txt.length) {
      element.innerHTML += txt.charAt(i);
      i++;
    } else {
      stopWritting();
    }
  }

  $: startWritting(text);

  onMount(() => startWritting(text));

  function startWritting(txt) {
    stopWritting();
    if (!element) return;

    i = 0;
    element.innerHTML = '';
    interval = setInterval(() => write(txt), speed);
  }

  function stopWritting() {
   clearInterval(interval);
  }
</script>

<span bind:this={element}></span>