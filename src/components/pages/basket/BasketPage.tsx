import Heading from "./heading/Heading";
import Cart from "./cart/Cart";

import styles from "./BasketPage.module.css";
import Reveal from "@/components/Reveal/Reveal";

const BasketPage = () => {
  return (
    <div className={styles.container}>
      <Reveal>
        <Heading />
        <Cart />
      </Reveal>
    </div>
  );
};

export default BasketPage;
