import { useState } from "react";
import "./App.css";

import { ExerciseBook } from "./Classes/ExerciseBook";
import { Pen } from "./Classes/Pen";
import { Pencil } from "./Classes/Pencil";
import { Sharpener } from "./Classes/Sharpener";
import { GlueStick } from "./Classes/GlueStick";
import { QuantityDecorator } from "./Classes/QuantityDecorator";

function App() {
  const items = [
    { id: "book", item: new ExerciseBook() },
    { id: "pen", item: new Pen() },
    { id: "pencil", item: new Pencil() },
    { id: "sharpener", item: new Sharpener() },
    { id: "glue", item: new GlueStick() },
  ];

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [showCost, setShowCost] = useState(false);

  const [quantities, setQuantities] = useState({
    book: 1,
    pen: 1,
    pencil: 1,
    sharpener: 1,
    glue: 1,
  });

  const handleCheckboxChange = (id: string) => {
    setShowCost(false);

    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    setShowCost(false);

    setQuantities({
      ...quantities,
      [id]: quantity,
    });
  };

  const calculateTotalCost = () => {
    let total = 0;

    items.forEach((cartItem) => {
      if (selectedItems.includes(cartItem.id)) {
        const itemWithQuantity = new QuantityDecorator(
          cartItem.item,
          quantities[cartItem.id as keyof typeof quantities]
        );

        total = total + itemWithQuantity.getCost();
      }
    });

    return total;
  };

  return (
    <div className="main-container">
      <div className="cart-box">
        <h1>Shopping Cart</h1>

        <div className="items-section">
          {items.map((cartItem) => (
            <div className="item-row" key={cartItem.id}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(cartItem.id)}
                  onChange={() => handleCheckboxChange(cartItem.id)}
                />
                {cartItem.item.getName()} - ${cartItem.item.getCost()}
              </label>

              <select
                value={quantities[cartItem.id as keyof typeof quantities]}
                onChange={(e) =>
                  handleQuantityChange(cartItem.id, Number(e.target.value))
                }
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
            </div>
          ))}
        </div>

        <div className="selected-section">
          <h2>Selected Items:</h2>

          {selectedItems.length === 0 ? (
            <p>No items selected</p>
          ) : (
            items.map((cartItem) => {
              if (selectedItems.includes(cartItem.id)) {
                return (
                  <p key={cartItem.id}>
                    {cartItem.item.getName()} - Quantity:{" "}
                    {quantities[cartItem.id as keyof typeof quantities]}
                  </p>
                );
              }

              return null;
            })
          )}
        </div>

        <button className="total-button" onClick={() => setShowCost(true)}>
          Display Total Cost
        </button>

        {showCost && (
          <h3 className="total-cost">Total Cost is : ${calculateTotalCost()}</h3>
        )}
      </div>
    </div>
  );
}

export default App;