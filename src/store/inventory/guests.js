import { createInventory } from ".";

export const guestInventory = createInventory([
  {
    id: 1,
    name: "loneWarriorName",
    description: `loneWarriorDesc`,
    short: `loneWarriorShort`,
    form: 'loneWarriorForm',
    img: "assets/BotW_Ancient_Short_Sword_Icon.png",
    info: 1,
    selected: false,
    hovered: false,
  },
  {
    id: 2,
    name: "plusOneName",
    description: "plusOneDesc",
    short: "plusOneShort",
    form: 'plusOneForm',
    img: "assets/BotW_Master_Sword_Icon.png",
    info: 2,
    selected: false,
    hovered: false,
  },
  {
    id: 4,
    name: "shieldName",
    description: `shieldDesc`,
    short: "shieldShort",
    img: "assets/shield.png",
    info: "0",
    selected: false,
    hovered: false,
    form: 'at home'
  },
]);

// {
//   id: 3,
//   name: "familyName",
//   description: `familyDesc`,
//   short: "familyShort",
//   form: "familyForm",
//   img: "assets/BotW_Eightfold_Blade_Icon.png",
//   info: "2+",
//   selected: false,
//   hovered: false,
// },