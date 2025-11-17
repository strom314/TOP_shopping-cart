import { Link, Outlet } from "react-router";
import { useState, useEffect } from "react";
import styles from "./app.module.css";
import "../font.css";
import cartImg from "../assets/shopping-cart.png";
import sproutImg from "../assets/sprout.png";

function App() {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  function onAddToCart(id, amount) {
    const cartItem = cart.find((item) => item.id == id);
    if (cartItem !== undefined) {
      const cartCopy = cart;
      cart.find((item) => item.id == id).amount += amount;
      setCart(cartCopy);
      return;
    }
    setCart([...cart, { id: id, amount: amount }]);
    console.log(cart);
  }
  return (
    <div>
      <div className={styles.navBar}>
        <div>
          <img className={styles.cartImg} src={sproutImg} alt="sprout" />
        </div>
        <div className={styles.navButtonContainer}>
          <Link className={styles.navButton} to={"/home"}>
            Home
          </Link>
          <Link className={styles.navButton} to={"/shop"}>
            Shop
          </Link>
        </div>
        <div className={styles.cartContainer}>
          <Link to={"/cart"}>
            <img className={styles.cartImg} src={cartImg} alt="cart" />
          </Link>
        </div>
      </div>
      <div className={styles.outletContainer}>
        <Outlet context={{ products, onAddToCart, cart, setCart }} />
      </div>
    </div>
  );
}

export default App;
