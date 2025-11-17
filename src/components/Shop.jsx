import Card from "./Card";
import { useEffect, useState } from "react";

export default function Shop() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);

  return (
    <>
      <h1>Shop</h1>
      {products &&
        products.map((product) => {
          return (
            <Card
              imgSrc={product.image}
              title={product.title}
              rating={product.rating.rate}
              price={product.price}
            />
          );
        })}
    </>
  );
}
