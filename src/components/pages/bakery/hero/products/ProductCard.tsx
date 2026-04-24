// import { Product } from "@/types/product";
import styles from "./Products.module.css";

// const ProductCard = ({ product }: { product: Product }) => {
const ProductCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.heading}>
        <p className={styles.category}>SOURDOUGH</p>
        <h3 className={styles.name}>Sourdough Bread</h3>
      </div>
      <div className={styles.footer}>
        <h4 className={styles.price}>EGP 5.99</h4>
        <button className={styles.cartButton}>+</button>
        <span className={styles.index}>01</span>
      </div>
    </div>
  );
};

export default ProductCard;
