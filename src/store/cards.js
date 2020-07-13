
import { writable, derived } from 'svelte/store';


function createCardsStore(value = []) {
  const { update, set, subscribe } = writable(value);

  function selectCard(card) {
    update(cards => {
      cards.forEach(c => c.selected = c.id === card.id);
      return cards;
    });

    selectedCard.set(card);
  }

  function hoverCard(card, element) {
    update(cards => {
      cards.forEach(c => c.hovered = c.id === card.id);
      return cards;
    });

    hoveredItem.set({ card, element });
  }
  return { update, set, subscribe, selectCard, hoverCard };
} 

export const selectedCard = writable(null);
export const hoveredItem = writable({ card: null, element: null });
export const hoveredCard = derived(hoveredItem, hi => hi.card);

export function useCards(items = []) {
  const c = createCardsStore(items);
  
  return { cards: c, hoveredItem, hoveredCard };
}