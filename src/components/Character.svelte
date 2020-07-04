<script>
import { _ } from 'svelte-i18n';
import { selectedCard } from '../store';

</script>

<div id="character">
  <img
    src="assets/WhatsApp_Image_2020-06-10_at_20-removebg-preview.png"
    alt="" />
  <div class="details">
    <div class="blue-border" />
    <h1>{$_($selectedCard.name)}</h1>
    <div class="description">
      {$_($selectedCard.description)}
    </div>
  </div>
</div>

<style lang="scss">
  #character {
    position: relative;
    grid-area: character;
    width: 100%;
    background: rgb(2, 2, 2, 0.2);
    background: linear-gradient(
      180deg,
      rgba(2, 2, 2, 0.6418942577030813) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    display: flex;

    justify-content: flex-end;
    align-items: flex-end;
  }

  #character .details {
    position: absolute;
    background: rgb(2, 2, 2, 0.2);
    background: linear-gradient(
      90deg,
      rgba(2, 2, 2, 0.6418942577030813) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    bottom: 50px;

    padding: 20px;
    font-size: 1.25rem;
    width: 90%;
    max-height: 200px;

    transition: max-height .2s ease-in-out;
  }

  #character .details h1 {
    display: inline-block;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 10px;
    font-size: 3rem;
    width: 50%;
  }

  #character .details .description {
    width: 40%;
  }

  #character .details:before {
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    display: block;
    content: "";
    background-color: transparent;
    border-left: 10px solid #0a9af1;
    border-right: none;
    border-radius: 2px;
  }

  #character .details:after {
    position: absolute;
    top: 3px;
    left: 3px;
    right: 3px;
    bottom: 3px;
    display: block;
    content: "";
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-right: none;
    border-radius: 2px;
  }
</style>