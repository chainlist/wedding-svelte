import { writable } from "svelte/store";

function createPopupStore() {
  const { subscribe, update, set } = writable({ open: false });

  function open() {
    update(popup => {
      popup.open = true;
      return popup;
    })
  }

  function close() {
    update(popup => {
      popup.open = false;
      return popup;
    });
  }

  return { subscribe, update, set, open, close };
}

export const popup = createPopupStore();