"use client";

import Button from "@/components/Button/Button";
import styles from "./CartProducts.module.css";
import { BUTTON_VARIANTS } from "@/components/Button/buttonTypes";
import { CartItem } from "@/features/cart/cartTypes";
import { useLanguage } from "@/features/language/useLanguage";

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
  const { t, locale } = useLanguage();
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
          <h3>{locale === "en" ? item.name.en : item.name.ar}</h3>
          <p>{t("product_description")}</p>
        </div>
        <h3 className={styles.price}>
          {t("currency")} {item.price}
        </h3>
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
          label={t("remove")}
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
