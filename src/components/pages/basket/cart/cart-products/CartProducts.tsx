"use client";

import { useCart } from "@/features/cart";
import CartProductItem from "./CartProductItem";
import styles from "./CartProducts.module.css";

const CartProducts = () => {
  const { items, removeFromCart, updateQuantity } = useCart();

  if (items.length === 0) {
    return (
      <div className={`${styles.productsList} ${styles.emptyList}`}>
        <p>Your cart is empty</p>
      </div>
    );
  }
  return (
    <div className={styles.productsList}>
      {items.map((item) => (
        <CartProductItem
          key={item.id}
          item={item}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
        />
      ))}
    </div>
  );
};

export default CartProducts;
