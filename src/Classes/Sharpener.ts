import type { StationaryItem } from "./StationaryItem";

export class Sharpener implements StationaryItem {

  // the item name
  getName(): string {
    return "Sharpener";
  }

    // Returns the cost of one sharpener
  getCost(): number {
    return 18;
  }

}