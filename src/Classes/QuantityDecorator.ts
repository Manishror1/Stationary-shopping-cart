import type { StationaryItem } from "./StationaryItem";

export class QuantityDecorator implements StationaryItem {

  // Stores the selected stationary item
  private item: StationaryItem;
  // Stores the quantity of the selected item
  private quantity: number;

    // Constructor receives item object and quantity
  constructor(item: StationaryItem, quantity: number) {

    this.item = item;
    this.quantity = quantity;

  }

  getName(): string {

    return this.item.getName();

  }

    // Dynamically calculates total cost according to quantity
  getCost(): number {

    return this.item.getCost() * this.quantity;

  }

}