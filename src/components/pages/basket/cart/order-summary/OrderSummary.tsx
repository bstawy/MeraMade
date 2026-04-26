import Button from "@/components/Button/Button";
import styles from "./OrderSummary.module.css";
import { BUTTON_VARIANTS } from "@/components/Button/buttonTypes";
import OrderSummaryItem from "./OrderSummaryItem";

const OrderSummary = () => {
  return (
    <div className={styles.orderSummary}>
      <h2>Order Summary</h2>
      <div className={styles.items}>
        <OrderSummaryItem label="Subtotal" amount="44.00" />
        <OrderSummaryItem label="Shipping" amount="5.00" />
        <OrderSummaryItem label="Tax" amount="3.00" />
      </div>
      <span className={styles.break}></span>
      <div className={styles.total}>
        <h4>Total</h4>
        <h2>$44.00</h2>
      </div>
      <div className={styles.actions}>
        <Button label="PROCEED TO CHECKOUT" />
        <Button label="CONTINUE SHOPPING" variant={BUTTON_VARIANTS.GHOST} />
      </div>
    </div>
  );
};

export default OrderSummary;
