import type { StationaryItem } from "./StationaryItem";

export class ExerciseBook implements StationaryItem {

  getName(): string {
    return "Exercise Book";
  }
  
  // Returns the cost of one exercise book

  getCost(): number {
    return 30;
  }

}