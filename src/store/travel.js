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
    form: 'by plane'
  },
  {
    id: 4,
    name: "shieldName",
    description: `shieldDesc`,
    img: "assets/shield.png",
    info: "0",
    selected: false,
    hovered: false,
    form: 'by car'
  },
  {
    id: 2,
    name: "shieldName",
    description: `shieldDesc`,
    img: "assets/BotW_Master_Sword_Icon.png",
    info: "0",
    selected: false,
    hovered: false,
    form: 'by walk'
  }
]);

export { cards, hoveredCard, hoveredItem, selectedCard };
