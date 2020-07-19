
import { writable, derived } from 'svelte/store';


function createInventoryStore(value = [], hoveredItem) {
  const { update, set, subscribe } = writable(value);

  function select(item) {
    update(cards => {
      cards.forEach(c => c.selected = c.id === item.id);
      return cards;
    });
  }

  function hover(item, element) {
    update(items => {
      items.forEach(c => c.hovered = c.id === item.id);
      return items;
    });

    hoveredItem.set({ item: item, element });
  }

  return { update, set, subscribe, selectCard: select, hoverCard: hover };
}

export const inventory = writable(null);

export function createInventory(items = []) {
  const hoveredItem = writable({ item: null, element: null });
  const c = createInventoryStore(items, hoveredItem);

  const hoveredCard = derived(hoveredItem, hi => hi.item);
  const selectedCard = derived(c, c => c.find(i => i.selected));
  
  return { items: c, selectedCard, hoveredItem, hoveredCard };
}