import CartProductItem from "./CartProductItem";
import styles from "./CartProducts.module.css";

const CartProducts = () => {
  return (
    <div className={styles.productsList}>
      <CartProductItem />
      <CartProductItem />
      <CartProductItem />
      <CartProductItem />
    </div>
  );
};

export default CartProducts;
