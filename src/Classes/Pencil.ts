import type { StationaryItem } from "./StationaryItem";
// Pencil class implements the StationaryItem interface
export class Pencil implements StationaryItem {
// the item name
  getName(): string {
    return "Pencils";
  }
// Returns the cost of one pencil
  getCost(): number {
    return 10;
  }

}