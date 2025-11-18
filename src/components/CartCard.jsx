import { useState } from "react";
import styles from "./cartCard.module.css";
import trash from "../assets/trash.png";

export default function CartCard({
  imgSrc,
  title,
  price,
  currentAmount,
  onDelete,
  id,
}) {
  const [amount, setAmount] = useState(currentAmount);

  function handleInput(e) {
    const value = e.target.value;
    if (value >= 0) {
      setAmount(Number(value));
    }
  }
  function handlePlus() {
    setAmount(Number(amount) + 1);
  }
  function handleMinus() {
    if (amount > 1) {
      setAmount(Number(amount) - 1);
    } else {
      onDelete(id);
    }
  }

  return (
    <div className={styles.card}>
      <img src={imgSrc} alt={title + " image"} />

      <li className={styles.title}> {title}</li>
      <li className={styles.price}>${price}</li>

      <div className={styles.inputContainer}>
        <button className={styles.button} onClick={handleMinus}>
          -
        </button>
        <input type="number" value={amount} onInput={handleInput} />
        <button className={styles.button} onClick={handlePlus}>
          +
        </button>
      </div>
      <button
        className={styles.delete}
        onClick={() => {
          onDelete(id);
        }}
      >
        <img src={trash} alt="delete" />
      </button>
    </div>
  );
}
