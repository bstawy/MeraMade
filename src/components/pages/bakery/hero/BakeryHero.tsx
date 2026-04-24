import styles from "./BakeryHero.module.css";
import Categories from "./categories/Categories";
import MainText from "./main-text/MainText";
import Products from "./products/Products";

const BakeryHero = () => {
  return (
    <section className={styles.container}>
      <MainText />
      <Categories />
      <Products />
    </section>
  );
};

export default BakeryHero;
