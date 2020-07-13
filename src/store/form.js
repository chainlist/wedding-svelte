import { writable, derived } from "svelte/store";

function createForm(formData) {
  const { subscribe, update, set } = writable(formData);

  function setForm(formName, card) {
    update(f => {
      f[formName] = card;

      return f;
    });
  }
  
  return { subscribe, update, set, setForm };
}

export const form = createForm({
  lastname: '',
  firstname: '',
  email: '',
  arrivalDate: null,
  guest: null,
  travel: null,
  housing: null
});
