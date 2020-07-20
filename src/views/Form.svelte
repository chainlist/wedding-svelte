<script>
  import Card from '../components/Card.svelte';
  import Writting from '../components/Writting.svelte';

  import { _ } from 'svelte-i18n';
  import { guestInventory } from '../store/inventory/guests';
  import { travelInventory } from '../store/inventory/travel';

  const guestSelected = guestInventory.selectedCard;
  const travelSelected = travelInventory.selectedCard;
</script>


<Card dark>
  <div id="form">
    <h2><Writting text="Please, tell us who you are" speed={10} /></h2>
    <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLScTPvFlNKo4WVjSZCmKyHWL6msoWGZgZ9MwbwiRrQ80TPCY0w/formResponse">

      <label for="firstname">
        <input id="firstname" type="text" name="entry.1444245155" placeholder="Firstname">
      </label>

      <label for="lastname">
        <input id="lastname" type="text" name="entry.654916785" placeholder="Lastname">
      </label>

      <label for="comments">
        <textarea name="entry." id="" cols="30" rows="10"></textarea>
      </label>

      <input type="hidden" name="entry.770915170" id="guest" value={$_($guestSelected.short)}>

      <input type="hidden" name="entry.2064836967" id="travel" value={$_($travelSelected.short)}>
      <button>Preview</button>
    </form>
  </div>
</Card>

<style lang="scss">
#form {
  position: relative;
  padding: 2vw;
  height: 100%;

  h2 {
    font-size: 2rem;
  }

  fieldset {
    display: block;
    border-width: 1px;
    border-color: #E3E6CF;
    height: 100%;
    width: 100%;
    border-radius: 2px;
    border-style: solid;
    
    legend {
      font-size: 2rem;
      font-style: italic;
    }
  }

  form {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    top: 6vw;
    
    input, textarea {
      background: none;
      border: none;
      outline: none;
      border-bottom: 1px #E3E6CF solid;
      padding: .7vw 0;
      font-size: 1.6rem;
      color: #E3E6CF;
      font-style: italic;
      font-weight: 100;

      &:first-child {
        margin-bottom: 2vw;
      }
    }
  }

}
</style>