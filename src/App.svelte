<script>
  import { fade } from 'svelte/transition';
	import MenuTop from './components/MenuTop.svelte';
  import Inventory from './components/inventory/Inventory.svelte';
  import Map from './components/Map.svelte';
	import Character from './components/Character.svelte';
  import MenuBottom from './components/MenuBottom.svelte';
  import Writting from './components/Writting.svelte';

  import { submittedForm } from './store';
  import { _ } from 'svelte-i18n';
  import { push, location } from 'svelte-spa-router';


  if ($location === '/') {
    push('/guest');
  }
</script>

<div id="background" class:submitted={$submittedForm}></div>

{#if !$submittedForm}
  <main id="app" transition:fade={{ duration: 1000}}>
    <MenuTop/>
    <Inventory />
    <Character /> 
    <MenuBottom />
  </main>
{:else}
  <div id="thankyou">
    <h2><Writting text={$_('thankyou')} speed={100} /></h2>
    <h4><Writting text={$_('keepposted')} speed={50} /></h4>
  </div>
{/if}

<style lang="scss">
#background{
    position: absolute;
    z-index: -1;
    background-image: url("../assets/background.png");
    background-size: cover;
    width: 100%;
    height: 100%;
    filter: blur(15px);
    transition: filter .250s ease-in-out;

    &.submitted {
      filter: none;
    }
}


#app {
    position: absolute;
    top: 0;
    left: 0;
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-areas: "top top"
                         "items character"
                         "bottom bottom";

    grid-template-rows: 15% 1fr 10%;
    grid-template-columns: 1fr 1fr;
}
#thankyou {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-shadow: black 0 0 10px;
  height: 100%;

  h2 {
    font-size: 10rem;
  }

  h4 {
    font-size: 4rem;
  }
}

:global(button) {
  padding: 0.5vw;
  border: 1px solid #E3E6CF;
  outline: none;
  color: #E3E6CF;
  font-weight: bold;
  font-style: italic;
  font-size: 1.5rem;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 0.1s ease-in-out, box-shadow 0.10s ease-in-out;
  background-color: transparent;

  &:hover {
    box-shadow: 0px 0px 10px 2px #E3E6CF, 0px 0px 5px 2px #E3E6CF inset;
  }
}

@media only screen and (max-width: 768px) {
  #app {
    grid-template-areas: "top"
                         "items"
                         "character"
                         "bottom";
    grid-template-rows: 10% 1fr 1fr 10%;
    grid-template-columns: 1fr;
  }

  
  :global(button) {
    padding: 1vh;
  }
}
</style>