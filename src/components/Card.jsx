import { useState } from "react";

export default function Card({ imgSrc, title, rating, price }) {
  const [amount, setAmount] = useState(1);

  function handleInput(e) {
    setAmount(e.target.value);
  }
  function handlePlus() {
    setAmount(Number(amount) + 1);
  }
  function handleMinus() {
    if (amount > 0) {
      setAmount(Number(amount) - 1);
    }
  }

  return (
    <div>
      <img src={imgSrc} alt={title + " image"} />
      <ul>
        <li>{title}</li>
        <li>{rating}</li>
        <li>{price}</li>
      </ul>

      <button onClick={handleMinus}>-</button>
      <input type="number" value={amount} onInput={handleInput} />
      <button onClick={handlePlus}>+</button>
      <button>add to cart</button>
    </div>
  );
}
