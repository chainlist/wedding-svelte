import { createInventory } from ".";

export const travelInventory = createInventory([
  {
    id: 1,
    name: "taxiName",
    description: `taxiDesc`,
    short: 'taxiShort',
    img: "assets/taxi.svg",
    info: 1,
    selected: false,
    hovered: false,
    form: 'by plane'
  },
  {
    id: 3,
    name: "carName",
    description: `carDesc`,
    short: 'carShort',
    img: "assets/car.svg",
    info: "2",
    selected: false,
    hovered: false,
    form: 'by car'
  }
]);
