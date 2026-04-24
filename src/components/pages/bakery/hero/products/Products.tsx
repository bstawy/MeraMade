import ProductCard from "./ProductCard";

import styles from "./Products.module.css";

import { Product } from "@/types/product";
import { Category } from "@/types/category";

interface ProductsProps {
  products: Product[];
  categoryMap: Record<string, Category>;
  locale?: "en" | "ar";
}

const Products = ({ products, categoryMap, locale = "en" }: ProductsProps) => {
  return (
    <div className={styles.products}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          category={categoryMap[product.categoryId]}
          index={products.indexOf(product) + 1}
          locale={locale}
        />
      ))}
    </div>
  );
};
export default Products;
