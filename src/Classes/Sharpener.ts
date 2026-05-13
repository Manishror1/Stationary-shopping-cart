import type { StationaryItem } from "./StationaryItem";

export class Sharpener implements StationaryItem {

  getName(): string {
    return "Sharpener";
  }

  getCost(): number {
    return 18;
  }

}