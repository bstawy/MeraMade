"use client";
import styles from "./Products.module.css";

import { Product } from "@/types/product";
import { Category } from "@/types/category";

interface ProductCardProps {
  product: Product;
  category?: Category;
  index?: number;
  locale?: "en" | "ar";
}

const ProductCard = ({
  product,
  category,
  index,
  locale = "en",
}: ProductCardProps) => {
  const name = locale === "ar" ? product.name.ar : product.name.en;

  const categoryName = category
    ? locale === "ar"
      ? category.name.ar
      : category.name.en
    : "";

  return (
    <div className={styles.card}>
      <div className={styles.heading}>
        <p className={styles.category}>{categoryName}</p>

        <h3 className={styles.name}>{name}</h3>
      </div>

      <div className={styles.footer}>
        <h4 className={styles.price}>EGP {product.price}</h4>

        <button className={styles.cartButton}>+</button>

        <span className={styles.index}>
          {String(index ?? product.id).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
