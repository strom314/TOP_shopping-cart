import Card from "./Card";
// import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

export default function Shop() {
  const {products} = useOutletContext();

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
              id={product.id}
              key={product.id}
            />
          );
        })}
    </>
  );
}
