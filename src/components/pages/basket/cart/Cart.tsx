import CartProducts from "./cart-products/CartProducts";
import OrderSummary from "./order-summary/OrderSummary";

import styles from "./Cart.module.css";

const Cart = () => {
  return (
    <section>
      <div className={styles.cart}>
        <CartProducts />
        <OrderSummary />
      </div>
    </section>
  );
};

export default Cart;
