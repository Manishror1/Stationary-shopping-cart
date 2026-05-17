import type { StationaryItem } from "./StationaryItem";

export class GlueStick implements StationaryItem {
  // the item name

  getName(): string {
    return "Glue Sticks";
  }
  // Returns the cost of one glue stick

  getCost(): number {
    return 25;
  }

}