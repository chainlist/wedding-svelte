import { writable, derived } from "svelte/store";
import { push } from 'svelte-spa-router';
import { guestInventory } from './inventory/guests';
import { travelInventory } from './inventory/travel';

export const submenu = writable([
  { name: 'guest', img: 'assets/user.png', selected: true, hidden: false },
  { name: 'travel', img: 'assets/plane.png', selected: false, hidden: false },
  { name: 'form', img: 'assets/form.svg', selected: false, hidden: false }
]);

export function selectSubMenu(selectedMenu) {
  let audio = new Audio('assets/submenu.mp3');
  audio.volume = 0.5;
  audio.play().then(() => audio = null);
  submenu.update(menu => {
    menu.forEach(menu => menu.selected = selectedMenu.name === menu.name);

    push(`/${selectedMenu.name}`);
    return menu;
  });
}

export const selectedSubmenu = derived(submenu, menu => menu.find(m => m.selected));
export const submenuDisplay = derived([submenu, guestInventory.selectedCard, travelInventory.selectedCard], ([menu, guestCard, travelCard]) => {
  if (guestCard && guestCard.id === 4) {
    return menu.filter(m => m.name !== 'travel');
  }

  if (guestCard && travelCard) {
    return menu;
  }
 
  return menu.filter(m => m.name !== 'form');
});