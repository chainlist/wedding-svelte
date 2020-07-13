
<script>
  import { _ } from 'svelte-i18n';
  import active from 'svelte-spa-router/active';
  import { submenu, selectSubMenu, selectedSubmenu } from '../store'

</script>

<div id="inventory-menu">
  <h2>{$_($selectedSubmenu.name)}</h2>
  <ul id="submenu">
    {#each $submenu as menu}
      <li use:active={{ path: `/${menu.name}`, className: 'selected' }} on:click={() => selectSubMenu(menu)}>
        <img src={menu.img} alt="">
      </li>
    {/each}
  </ul>
</div>


<style lang="scss">
  #inventory-menu {
    width: 100%;
    padding-top: 1.5vw;
    padding-left: 2.8vw;
    padding-right: 6.2vw;

    h2 {
      font-size: 1.4rem;
      font-style: italic;
      margin-bottom: 0.6vw;
    }

    ul {
      list-style: none;
      height: auto;
      padding-bottom: 0.71vw;
      border-bottom: 0.2vw solid rgba(#efefef, .4);
      outline: none;

      li {
        display: inline-flex;
        position: relative;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: opacity .1s ease-in-out;
        outline: none;

        width: 2.8vw;
        height: 2.8vw;
        opacity: 0.4;

        &:first-child {
          margin-left: 1vw;
        }

        &:not(:last-child) {
          margin-right: 1.7vw;
        }

        &:after {
          position: absolute;
          content: "";
          display: block;
          width: 162%;
          border-bottom: 0.15vw solid #efefef;
          bottom: -1.05vw;
          left: -1vw;
          z-index: 1000000;
          opacity: 0;
        }

        img {
          max-width: auto;
          height: 2.84vw;
        }
      }
    }
  }

  :global(.selected) {
    opacity: 1 !important;
    &:after {
      opacity: 1 !important;
    }
  }

@media only screen and (max-width: 768px) {
  #inventory-menu {
    padding-top: 0.5vh;
    padding-left: 2.8vh;
    padding-right: 6.2vh;
    h2 {
      margin-bottom: 0.6vh;
    }

    ul {
      padding-bottom: 0.71vh;
      border-bottom: 0.2vh solid rgba(#efefef, .4);

      li {
        width: 3.8vh;
        height: 3.8vh;

        &:first-child {
          margin-left: 1vh;
        }

        &:not(:last-child) {
          margin-right: 1.7vh;
        }

        &:after {
          border-bottom: 0.15vh solid #efefef;
          bottom: -1.1vh;
          left: -1vh;
        }

        img {
          height: 3.84vh;
        }

        
      }
    }
  }
}
</style>

<!-- 
    img {
          max-width: auto;
          height: 2.84vw;
        } -->