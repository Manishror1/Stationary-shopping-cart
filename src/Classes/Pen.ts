import type { StationaryItem } from "./StationaryItem";
// Pen class implements the StationaryItem interface
export class Pen implements StationaryItem {
// the item name
  getName(): string {
    return "Pens";
  }
  // Returns the cost of one pen

  getCost(): number {
    return 12;
  }

}