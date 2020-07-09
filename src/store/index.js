import { writable, derived } from 'svelte/store';
const audio = new Audio('/assets/item.mp3');

function createCardsStore(value = []) {
  const { update, set, subscribe } = writable(value);

  function selectCard(card) {
    update(cards => {
      cards.forEach(c => c.selected = c.id === card.id);
      return cards;
    });
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

export const cards = createCardsStore([
  { id: 1, name: 'loneWarriorName', description: `loneWarriorDesc`, img: 'assets/BotW_Ancient_Short_Sword_Icon.png', info: 1, selected: true, hovered: true },
  { id: 2, name: 'plusOneName', description: 'plusOneDesc', img: 'assets/BotW_Master_Sword_Icon.png', info: 2, selected: false, hovered: false },
  { id: 3, name: 'familyName', description: `familyDesc`, img: 'assets/BotW_Eightfold_Blade_Icon.png', info: '2+', selected: false, hovered: false },
  { id: 4, name: 'shieldName', description: `shieldDesc`, img: 'assets/shield.png', info: '0', selected: false, hovered: false }
]);

export const selectedCard = derived(cards, cards => cards.find(c => c.selected));
export const hoveredItem = writable({ card: null, element: null });
export const hoveredCard = derived(cards, cards => cards.find(c => c.hovered));