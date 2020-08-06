import { createInventory } from ".";

export const travelInventory = createInventory([
  {
    id: 1,
    name: "taxiName",
    description: `taxiDesc`,
    short: 'taxiShort',
    form: 'taxiForm',
    img: "assets/taxi.svg",
    info: 1,
    selected: false,
    hovered: false,
  },
  {
    id: 3,
    name: "carName",
    description: `carDesc`,
    short: 'carShort',
    form: 'carForm',
    img: "assets/car.svg",
    info: "2",
    selected: false,
    hovered: false,
  }
]);
