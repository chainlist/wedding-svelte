<script>
  import Card from '../components/Card.svelte';
  import Writting from '../components/Writting.svelte';
  import Popup from '../components/Popup.svelte';

  import { _ } from 'svelte-i18n';
  import { guestInventory } from '../store/inventory/guests';
  import { travelInventory } from '../store/inventory/travel';
  import { submittedForm } from '../store';

  const guestSelected = guestInventory.selectedCard;
  const travelSelected = travelInventory.selectedCard;
  let popup;
  let form;

  let lastname = '';
  let firstname = '';
  let comment = '';

  function getResponse() {
    if ($guestSelected && $guestSelected.id === 4) {
      return $_('responseNotComming');
    }
    
    return $_('responseComming')
      .replace('_FIRSTNAME_', firstname)
      .replace('_LASTNAME_', lastname)
      .replace('_GUEST_', $_($guestSelected.form))
      .replace('_TRAVEL_', $_($travelSelected.form))
      .replace('_COMMENT_', comment);
  }

  function submitForm() {
    form.submit();
    popup.close();
    submittedForm.set(true);
  }
</script>


<div id="form-view">
  <Card empty>
    <div class="form">
      <h2><Writting text="Please, tell us who you are" speed={10} /></h2>
      <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScTPvFlNKo4WVjSZCmKyHWL6msoWGZgZ9MwbwiRrQ80TPCY0w/formResponse" target="hidden_iframe" bind:this={form}>

        <label for="firstname">
          <input id="firstname" type="text" name="entry.1444245155" placeholder="Firstname" bind:value={firstname}>
        </label>

        <label for="lastname">
          <input id="lastname" type="text" name="entry.654916785" placeholder="Lastname" bind:value={lastname}>
        </label>

        <label for="comments">
          <textarea name="entry.1402951395" id="" cols="30" rows="10" placeholder="Any comments?" bind:value={comment}></textarea>
        </label>

        <input type="hidden" name="entry.770915170" id="guest" value={$_($guestSelected.short)}>

        <input type="hidden" name="entry.2064836967" id="travel" value={$_($travelSelected.short)}>
        <button on:click|preventDefault={popup.open}>Preview</button>
      </form>

      <iframe name="hidden_iframe" id="hidden_frame" style="display: none;" frameborder="0" title="Posting form"></iframe>
    </div>
  </Card>

  <Popup bind:this={popup}>
    <h1>Your reponse</h1>
    <div class="answer">
      <Writting text={getResponse()}/>
      <pre><Writting text={comment} speed={20}/></pre>
    </div>
    <div slot="controls" class="controls">
      <button on:click={submitForm}>Send answer</button>
      <button on:click={popup.close}>Cancel</button>
    </div>
  </Popup>
</div>

<style lang="scss">
#form-view {
  position: relative;
  padding: 0 3vw 0 0;
  height: 100%;
  overflow: hidden;

  h2 {
    font-size: 2rem;
  }

  .form {
    padding: 1vw;
  }

  form {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    top: 3vw;
    
    input, textarea {
      background: none;
      border: none;
      outline: none;
      border-bottom: 1px #E3E6CF solid;
      padding: .7vw 0;
      font-size: 1.4rem;
      color: #E3E6CF;
      font-style: italic;
      font-weight: 300;


      &::placeholder {
        color: #E3E6CF;
        font-weight: 100;
      }
    }

    textarea {
      height: 6vw;
      margin-top: 1vw;
    }

    button {
      margin-top: 1vw;
    }
  }
 
  .answer {
    margin-top: 1vw;
    max-width: 25vw;
    font-size: 1.6rem;
    font-weight: 400;
    font-style: italic;
    color: #E3E6CF;
    font-family: monospace, Times, serif;
  }

  .controls {
    display: flex;
    width: 100%;
    flex-direction: column;

    button:first-child {
      margin-top: 2vw;
    }
    button:not(:last-child) {
      margin-bottom: 1vw;
    }
  }
}
</style>