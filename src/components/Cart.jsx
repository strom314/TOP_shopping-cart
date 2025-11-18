import { useOutletContext } from "react-router";
import CartCard from "./CartCard";
import styles from "./cart.module.css";

export default function Cart() {
  const { cart, setCart } = useOutletContext();
  const { products } = useOutletContext();

  function onDelete(id) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  }

  if (!cart || !products) {
    return <div>loading...</div>;
  }

  return (
    <>
      <h1>Cart</h1>
      <div className={styles.cartContainer}>
        {cart.map((cartItem) => {
          const product = products.find((item) => item.id === cartItem.id);
          return (
            <CartCard
              key={cartItem.id}
              imgSrc={product.image}
              title={product.title}
              rating={product.rating.rate}
              price={product.price}
              currentAmount={cartItem.amount}
              onDelete={onDelete}
              id={cartItem.id}
            />
          );
        })}
      </div>
    </>
  );
}
