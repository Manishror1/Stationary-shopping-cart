import type { StationaryItem } from "./StationaryItem";

export class ExerciseBook implements StationaryItem {

  getName(): string {
    return "Exercise Book";
  }

  getCost(): number {
    return 30;
  }

}