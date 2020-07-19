<script>
	import MenuTop from './components/MenuTop.svelte';
  import Inventory from './components/inventory/Inventory.svelte';
  import Map from './components/Map.svelte';
	import Character from './components/Character.svelte';
  import MenuBottom from './components/MenuBottom.svelte';
</script>

<div id="background"></div>
<main id="app">
	<MenuTop/>
  <Inventory />
  <Character /> 
  <MenuBottom />
</main>

<style lang="scss">
#background{
    position: absolute;
    z-index: -1;
    // background-image: url("../assets/bg.jpg");
    // background-image: url("../assets/WhatsApp\ Image\ 2020-06-01\ at\ 01.46.54.jpeg");
    background-image: url("../assets/background.png");
    background-size: cover;
    width: 100%;
    height: 100%;
    filter: blur(15px);
}


#app {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-areas: "top top"
                         "items character"
                         "bottom bottom";

    grid-template-rows: 15% 1fr 10%;
    grid-template-columns: 1fr 1fr;
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
}
</style>