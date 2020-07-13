import Guests from './views/Guests.svelte';
import Travel from './views/Travel.svelte';
import Housing from './views/Housing.svelte';

export const routes= {
  '/': Guests,
  '/guest': Guests,
  '/travel': Travel,
  '/housing': Housing
};