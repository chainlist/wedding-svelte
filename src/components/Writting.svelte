<script>
  export let text = '';
  export let speed = 4;

  import { onMount, afterUpdate } from 'svelte';

  let element;
  let letters = [];
  let letterElement;
  let i = 0;
  let interval = null;

  function write(txt, reset = false) {
    if (!element) return;
    const letters = element.querySelectorAll('span');
    const letter = letters[i];
  
    if (i < txt.length) {
      letter.classList && letter.classList.remove('visibility');
      i++;
    } else {
      stopWritting();
    }
  }

  $: {
    startWritting(text);
  }

  onMount(() => startWritting(text));

  function startWritting(txt) {
    stopWritting();
    if (!element) return;

    i = 0;
    const letters = element.querySelectorAll('span');
    letters.forEach(l => l.classList.add('visibility'))
    interval = setInterval(() => write(txt), speed);
  }

  function stopWritting() {
   clearInterval(interval);
  }
</script>

<span bind:this={element}>
  {#each text as letter}
    <span class="visibility">{letter}</span> 
  {/each}
</span>
<style lang="scss">
.visibility {
  visibility: hidden;
  color: transparent;
}
</style>