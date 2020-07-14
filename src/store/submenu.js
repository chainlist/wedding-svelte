import { writable, derived } from "svelte/store";
import { push } from 'svelte-spa-router';

export const submenu = writable([
  { name: 'guest', img: 'assets/user.png', selected: true },
  { name: 'travel', img: 'assets/plane.png', selected: false },
  // { name: 'housing', img: 'assets/house.png', selected: false }
]);

export function selectSubMenu(selectedMenu) {
  let audio = new Audio('assets/submenu.mp3');
  audio.volume = 0.5;
  audio.play().then(() => audio = null);
  submenu.update(menu => {
    menu.forEach(menu => menu.selected = selectedMenu === menu);

    push(`/${selectedMenu.name}`);
    return menu;
  });
}

export const selectedSubmenu = derived(submenu, menu => menu.find(m => m.selected));