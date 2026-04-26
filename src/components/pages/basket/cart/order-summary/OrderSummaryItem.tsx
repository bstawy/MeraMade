import styles from "./OrderSummary.module.css";

const OrderSummaryItem = ({
  label,
  amount,
}: {
  label: string;
  amount: string;
}) => {
  return (
    <div className={styles.item}>
      <h5 className={styles.itemLabel}>{label}</h5>
      <h4 className={styles.itemAmount}>${amount}</h4>
    </div>
  );
};

export default OrderSummaryItem;
