<script>
import { _ } from 'svelte-i18n';
import mobile from 'is-mobile';

const n = new Array(mobile() ? 8 : 10);
</script>

<style lang="scss">
  #top {
    grid-area: top;
    background-color: rgba(2, 2, 2, 0.6);

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);

    #hearts {
      font-size: 1.75rem;
      color: red;
      padding-left: 13%;
      padding-right: 3%;
      display: flex;
      height: 100%;
      align-items: center;
    }

    #hearts ul {
      list-style: none;
      li {
        display: inline-block;
        margin-right: 0.5vw;
      }
    }
    #controls {
      font-size: 2.75rem;
      text-align: center;
      font-style: italic;
      font-weight: bold;
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    }

    #rubies {
      text-align: right;
      font-size: 2.1rem;
      padding-right: 10%;
      font-style: italic;
      font-weight: bold;

      display: flex;
      height: 100%;
      align-items: center;
      justify-content: flex-end;

      img {
        width: 3.6vw;
        height: 3.6vw;
      }
    }
  }

@media only screen and (max-width: 768px) {
   #top {
    #rubies {
      img {
        width: 3.6vh;
        height: 3.6vh;
      }
    }
   }
}
</style>

<div id="top">
  <div id="hearts">
    <ul>
      {#each n as heart}
      <li>❤</li>
      {/each}
    </ul>
  </div>
  <div id="controls">{$_('wedding')}</div>
  <div id="rubies">
    <img src="assets/64px-BotW_Heart_Container_Icon.png" alt="" />
    24/04/2021
  </div>
</div>
