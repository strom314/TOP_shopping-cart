import { useState } from "react";

export default function CartCard({
  imgSrc,
  title,
  rating,
  price,
  currentAmount,
}) {
  const [amount, setAmount] = useState(currentAmount);

  function handleInput(e) {
    setAmount(Number(e.target.value));
  }
  function handlePlus() {
    setAmount(Number(amount) + 1);
  }
  function handleMinus() {
    if (amount > 0) {
      setAmount(Number(amount) - 1);
    }
  }

  console.log(rating);

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
    </div>
  );
}
