"use client";

import Button from "@/components/Button/Button";
import styles from "./CartProducts.module.css";
import { BUTTON_VARIANTS } from "@/components/Button/buttonTypes";
import { CartItem } from "@/features/cart/cartTypes";

interface CartProductItemProps {
  item: CartItem;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
}

const CartProductItem = ({
  item,
  removeFromCart,
  updateQuantity,
}: CartProductItemProps) => {
  const handleDecrease = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const handleIncrease = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  return (
    <div className={styles.product}>
      <div className={styles.heading}>
        <div className={styles.title}>
          <h3>{item.name.en}</h3>
          <p>48-hour fermented, wild yaset</p>
        </div>
        <h3 className={styles.price}>${item.price}</h3>
      </div>
      <div className={styles.quantity}>
        <div className={styles.counter}>
          <button className={styles.decrease} onClick={handleDecrease}>
            -
          </button>
          <span className={styles.count}>{item.quantity}</span>
          <button className={styles.increase} onClick={handleIncrease}>
            +
          </button>
        </div>
        <Button
          label="REMOVE"
          variant={BUTTON_VARIANTS.TEXT}
          size="sm"
          onClick={() => {
            removeFromCart(item.id);
          }}
        />
      </div>
    </div>
  );
};

export default CartProductItem;
