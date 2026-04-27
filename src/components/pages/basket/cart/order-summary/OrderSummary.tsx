"use client";

import Button from "@/components/Button/Button";
import styles from "./OrderSummary.module.css";
import { BUTTON_VARIANTS } from "@/components/Button/buttonTypes";
import OrderSummaryItem from "./OrderSummaryItem";
import { useCart } from "@/features/cart";
import Link from "next/link";
import { useLanguage } from "@/features/language/useLanguage";

const OrderSummary = () => {
  const { t } = useLanguage();
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
      <h2>{t("order_summary")}</h2>
      <div className={styles.items}>
        <OrderSummaryItem label={t("subtotal")} amount={subtotal.toFixed(2)} />
        <OrderSummaryItem label={t("shipping")} amount={shipping.toFixed(2)} />
        <OrderSummaryItem label={t("tax")} amount={tax.toFixed(2)} />
      </div>
      <span className={styles.break}></span>
      <div className={styles.total}>
        <h4>{t("total")}</h4>
        <h2>
          {t("currency")} {total.toFixed(2)}
        </h2>
      </div>
      <div className={styles.actions}>
        <Button label={t("checkout_btn")} />
        <Link href="/bakery" style={{ width: "100%" }}>
          <Button
            label={t("continue_shopping")}
            variant={BUTTON_VARIANTS.GHOST}
          />
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
