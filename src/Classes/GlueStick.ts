import type { StationaryItem } from "./StationaryItem";

export class GlueStick implements StationaryItem {

  getName(): string {
    return "Glue Sticks";
  }

  getCost(): number {
    return 25;
  }

}