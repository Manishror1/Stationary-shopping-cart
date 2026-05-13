import type { StationaryItem } from "./StationaryItem";

export class QuantityDecorator implements StationaryItem {

  private item: StationaryItem;
  private quantity: number;

  constructor(item: StationaryItem, quantity: number) {

    this.item = item;
    this.quantity = quantity;

  }

  getName(): string {

    return this.item.getName();

  }

  getCost(): number {

    return this.item.getCost() * this.quantity;

  }

}