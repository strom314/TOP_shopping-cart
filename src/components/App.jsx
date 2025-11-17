import { Link, Outlet } from "react-router";
import { useState, useEffect } from "react";

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
    <>
      <div>
        <Link to={"/home"}>home</Link>
        <Link to={"/shop"}>shop</Link>
      </div>
      <Link to={"/cart"}>cart</Link>
      <Outlet context={{ products, onAddToCart, cart, setCart }} />
    </>
  );
}

export default App;
