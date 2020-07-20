import Guests from './views/Guests.svelte';
import Travel from './views/Travel.svelte';
import Form from './views/Form.svelte';

export const routes= {
  '/': Guests,
  '/guest': Guests,
  '/travel': Travel,
  '/form': Form
};