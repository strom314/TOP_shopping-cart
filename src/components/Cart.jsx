import { useOutletContext } from "react-router";
import CartCard from "./CartCard";

export default function Cart() {
  const { cart } = useOutletContext();
  const { products } = useOutletContext();

  if (!cart || !products) {
    return <div>loading...</div>;
  }

  return (
    <>
      <h1>Cart</h1>
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
          />
        );
      })}
    </>
  );
}
