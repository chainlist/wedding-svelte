<script>
import Router from 'svelte-spa-router';
import InventoryMenu from './InventoryMenu.svelte';
import Items from './Items.svelte';

import { routes } from '../routes';
</script>


<div id="items-container">
  <InventoryMenu />
  <div id="view">
    <Router {routes}/>
  </div>
</div>

<style lang="scss">
#items-container {
    overflow: hidden;
    grid-area: items;
    width: 100%;
    background: rgb(2,2,2, .2);
    background: linear-gradient(180deg, rgba(2,2,2,0.6418942577030813) 0%, rgba(255,255,255,0) 100%);
    display: grid;
    grid-template-rows: 8.8vw 4fr;
    padding-left: 5vw;
    padding-left: 9.4vw;

    #view {
      position: relative;
    }
}

@media only screen and (max-width: 768px) {
  #items-container {
    grid-template-rows: 8.8vh 4fr;
    padding-left: 1.5vh;
  }
}
</style>