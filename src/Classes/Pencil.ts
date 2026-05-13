import type { StationaryItem } from "./StationaryItem";

export class Pencil implements StationaryItem {

  getName(): string {
    return "Pencils";
  }

  getCost(): number {
    return 10;
  }

}