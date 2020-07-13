import { useCards } from "./cards";

const { cards, hoveredCard, hoveredItem, selectedCard } = useCards([
  {
    id: 1,
    name: "loneWarriorName",
    description: `loneWarriorDesc`,
    img: "assets/BotW_Ancient_Short_Sword_Icon.png",
    info: 1,
    selected: true,
    hovered: false,
    form: 'come back to my home'
  },
  {
    id: 4,
    name: "shieldName",
    description: `shieldDesc`,
    img: "assets/shield.png",
    info: "0",
    selected: false,
    hovered: false,
    form: 'come back to my hotel'
  }
]);

export { cards, hoveredCard, hoveredItem, selectedCard };
