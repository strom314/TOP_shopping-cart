import { useState } from "react";
import { useOutletContext } from "react-router";
import styles from "./card.module.css";

export default function Card({ imgSrc, title, rating, price, id }) {
  const [amount, setAmount] = useState(1);
  const { onAddToCart } = useOutletContext();

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

  return (
    <div className={styles.card}>
      <img src={imgSrc} alt={title + " image"} />

      <div className={styles.info}>
        <ul>
          <div>
            <li>{title}</li>
          </div>
          <div className={styles.detailsContainer}>
            <li>rating: {rating}</li>
            <li>${price}</li>
          </div>
        </ul>
        <div className={styles.inputContainer}>
          <button className={styles.button} onClick={handleMinus}>-</button>
          <input type="number" value={amount} onInput={handleInput} />
          <button className={styles.button} onClick={handlePlus}>+</button>
        </div>
        <button
          className={styles.add}
          onClick={() => {
            onAddToCart(id, amount);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
