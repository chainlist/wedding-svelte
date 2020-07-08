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

  function hoverCard(card) {
    update(cards => {
      cards.forEach(c => c.hovered = c.id === card.id);
      return cards;
    });
  }
  return { update, set, subscribe, selectCard, hoverCard };
} 

export const cards = createCardsStore([
  { id: 1, name: 'loneWarriorName', description: `loneWarriorDesc`, img: 'assets/BotW_Ancient_Short_Sword_Icon.png', info: 1, selected: true, hovered: false },
  { id: 2, name: 'plusOneName', description: 'plusOneDesc', img: 'assets/BotW_Master_Sword_Icon.png', info: 2, selected: false, hovered: false },
  { id: 3, name: 'familyName', description: `familyDesc`, img: 'assets/BotW_Eightfold_Blade_Icon.png', info: '2+', selected: false, hovered: false },
]);

export const selectedCard = derived(cards, cards => cards.find(c => c.selected));
export const hoveredCard = derived(cards, cards => cards.find(c => c.hovered));