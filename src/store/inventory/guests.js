import { createInventory } from ".";

export const guestInventory = createInventory([
  {
    id: 1,
    name: "loneWarriorName",
    description: `loneWarriorDesc`,
    img: "assets/BotW_Ancient_Short_Sword_Icon.png",
    info: 1,
    selected: true,
    hovered: false,
    form: 'unaccompanied'
  },
  {
    id: 2,
    name: "plusOneName",
    description: "plusOneDesc",
    img: "assets/BotW_Master_Sword_Icon.png",
    info: 2,
    selected: false,
    hovered: false,
    form: 'with a plus one'
  },
  {
    id: 3,
    name: "familyName",
    description: `familyDesc`,
    img: "assets/BotW_Eightfold_Blade_Icon.png",
    info: "2+",
    selected: false,
    hovered: false,
    form: 'with my family'
  },
  {
    id: 4,
    name: "shieldName",
    description: `shieldDesc`,
    img: "assets/shield.png",
    info: "0",
    selected: false,
    hovered: false,
    form: 'at home'
  },
]);