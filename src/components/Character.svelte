<script>
import { _ } from 'svelte-i18n';
import { hoveredItem, hoveredCard, form } from '../store';
import { fade } from 'svelte/transition';
import Writting from './Writting.svelte';
import { typewriter } from '../utils/transitions/typewriter';

let transitionTrigger = false;

hoveredItem.subscribe(() => {
  transitionTrigger = false;
  setTimeout(() => {
    transitionTrigger = true;
  }, 100);
});


let name = '';
$: if ($hoveredCard) {
  name = $_($hoveredCard.name);
};

let descr = '';
$: if ($hoveredCard) {
  descr = $_($hoveredCard.description);
};

</script>

<div id="character">
  <h2>
    I'm going to the wedding <span class="formText" use:active={{ path: /^\/(guest)?$/, className: 'selected' }}>{$form && $form.guest ? $form.guest.form : '_______'}</span>,
    <span class="formText" use:active={{ path: `/${menu.name}`, className: 'selected' }}>{$form && $form.travel ? $form.travel.form : '_______' }</span>
    and I plan to <span class="formText" use:active={{ path: `/${menu.name}`, className: 'selected' }}>{$form && $form.housing ? $form.housing.form : '_______'}</span> after the wedding
  </h2>
  <img src="assets/WhatsApp_Image_2020-06-10_at_20-removebg-preview.png"alt="" />
  {#if $hoveredCard}
    <div class="details">
      <div class="blue-border" />
          <h1>{name}</h1>
          <div class="description">
            <Writting text={descr} />
          </div>
    </div>
  {/if}
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

    display: grid;

    font-style: italic;

    h2 {
      margin-top: 2vw;
      margin-left: 2vw;
      font-size: 2rem;
      font-weight: 400;
    }

    .formText {
      color: #0a9af1;
      font-weight: bold;
    }

    img {
      max-width: 50%;
      height: auto;
      justify-self: flex-end;
      align-self: flex-end;
    }
  }

  #character .details {
    position: absolute;
    background: rgb(2, 2, 2, 0.2);
    background: linear-gradient(
      90deg,
      rgba(2, 2, 2, 0.6418942577030813) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    bottom: 40px;

    padding: 20px;
    font-size: 1.25rem;
    width: 95%;
    height: 13vw;

    transition: max-height .2s ease-in-out;
    padding-left: 30px;
  }

  #character .details h1 {
    display: inline-block;
    border-bottom: 2px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 10px;
    font-size: 2.5rem;
    width: 50%;
  }

  #character .details .description {
    font-size: 1.7rem;
    width: 55%;
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

@media only screen and (max-width: 768px) {
  #character {
    background: linear-gradient(
      0deg,
      rgba(2, 2, 2, 0.6418942577030813) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }

  #character .details {
    position: absolute;
    background: rgb(2, 2, 2, 0.2);
    background: linear-gradient(
      90deg,
      rgba(2, 2, 2, 0.6418942577030813) 0%,
      rgba(255, 255, 255, 0) 100%
    );

    bottom: 40px;

    padding: 20px;
    font-size: 1.25rem;
    width: 95%;
    height: 20vh;

    transition: max-height .2s ease-in-out;
    padding-left: 30px;
  }
}
</style>