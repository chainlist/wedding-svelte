import { writable, derived } from 'svelte/store';

function createCardsStore(value = []) {
  const { update, set, subscribe } = writable(value);

  function selectCard(card) {
    update(cards => {
      cards.forEach(c => c.selected = c.id === card.id);
      return cards;
    });
  }

  return { update, set, subscribe, selectCard };
} 

export const cards = createCardsStore([
  { id: 1, name: 'plusOneName', description: 'plusOneDesc', img: 'assets/BotW_Master_Sword_Icon.png', info: 32, selected: true },
  { id: 2, name: 'loneWarriorName', description: `loneWarriorDesc`, img: 'assets/BotW_Ancient_Short_Sword_Icon.png', info: 32, selected: false },
  { id: 3, name: 'familyName', description: `familyDesc`, img: 'assets/BotW_Eightfold_Blade_Icon.png', info: 42, selected: false },
]);

export const selectedCard = derived(cards, (cards => cards.find(c => c.selected)));