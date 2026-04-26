"use client";

import Button from "@/components/Button/Button";
import styles from "./OrderSummary.module.css";
import { BUTTON_VARIANTS } from "@/components/Button/buttonTypes";
import OrderSummaryItem from "./OrderSummaryItem";
import { useCart } from "@/features/cart";
import Link from "next/link";

const OrderSummary = () => {
  const { items } = useCart();

  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const shipping = 5.0;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;

  return (
    <div className={styles.orderSummary}>
      <h2>Order Summary</h2>
      <div className={styles.items}>
        <OrderSummaryItem label="Subtotal" amount={subtotal.toFixed(2)} />
        <OrderSummaryItem label="Shipping" amount={shipping.toFixed(2)} />
        <OrderSummaryItem label="Tax" amount={tax.toFixed(2)} />
      </div>
      <span className={styles.break}></span>
      <div className={styles.total}>
        <h4>Total</h4>
        <h2>${total.toFixed(2)}</h2>
      </div>
      <div className={styles.actions}>
        <Button label="PROCEED TO CHECKOUT" />
        <Link href="/bakery">
          <Button label="CONTINUE SHOPPING" variant={BUTTON_VARIANTS.GHOST} />
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
