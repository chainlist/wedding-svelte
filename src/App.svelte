<script>
	import MenuTop from './components/MenuTop.svelte';
	import Inventory from './components/Inventory.svelte';
	import Character from './components/Character.svelte';
	import MenuBottom from './components/MenuBottom.svelte';
</script>

<div id="background"></div>
<main id="app">
	<MenuTop />
  <Inventory />
  <Character />
  <MenuBottom />
</main>

<style lang="scss">
#background{
    position: absolute;
    z-index: -1;
    background-image: url("../assets/WhatsApp\ Image\ 2020-06-01\ at\ 01.46.54.jpeg");
    background-size: cover;
    background-position-y: -200px;
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

    grid-template-rows: 15% 2fr 12%;
    grid-template-columns: 1fr 1fr;
}
</style>