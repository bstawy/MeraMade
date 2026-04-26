"use client";

import Button from "@/components/Button/Button";
import styles from "./CartProducts.module.css";
import { BUTTON_VARIANTS } from "@/components/Button/buttonTypes";

const CartProductItem = () => {
  return (
    <div className={styles.product}>
      <div className={styles.heading}>
        <div className={styles.title}>
          <h3>Signature Sourdough</h3>
          <p>48-hour fermented, wild yaset</p>
        </div>
        <h3 className={styles.price}>$12.00</h3>
      </div>
      <div className={styles.quantity}>
        <div className={styles.counter}>
          <button className={styles.decrease} onClick={() => {}}>
            -
          </button>
          <span className={styles.count}>1</span>
          <button className={styles.increase} onClick={() => {}}>
            +
          </button>
        </div>
        <Button label="REMOVE" variant={BUTTON_VARIANTS.TEXT} size="sm" />
      </div>
    </div>
  );
};

export default CartProductItem;
