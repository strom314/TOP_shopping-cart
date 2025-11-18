import Card from "./Card";
// import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import styles from "./Shop.module.css";

export default function Shop() {
  const { products } = useOutletContext();

  return (
    <>
      <h1>Shop</h1>
      <div className={styles.cardsContainer}>
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
      </div>
    </>
  );
}
