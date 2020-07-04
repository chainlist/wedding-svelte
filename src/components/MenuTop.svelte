<script>
import { _ } from 'svelte-i18n';

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
      padding-top: 5%;
      padding-right: 3%;
    }

    #hearts ul {
      list-style: none;
      li {
        display: inline-block;
      }
    }
    #controls {
      padding-top: 6.5%;
      font-size: 2.75rem;
      text-align: center;
      font-style: italic;
      font-weight: bold;
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
    }
  }
</style>

<div id="top">
  <div id="hearts">
    <ul>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
      <li>❤</li>
    </ul>
  </div>
  <div id="controls">{$_('wedding')}</div>
  <div id="rubies">
    <img src="assets/64px-BotW_Heart_Container_Icon.png" alt="" />
    05/05/2020
  </div>
</div>
