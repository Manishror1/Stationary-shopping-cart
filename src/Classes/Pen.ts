import type { StationaryItem } from "./StationaryItem";

export class Pen implements StationaryItem {

  getName(): string {
    return "Pens";
  }

  getCost(): number {
    return 12;
  }

}