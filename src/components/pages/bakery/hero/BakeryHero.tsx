"use client";

import { useCategories } from "@/hooks/useCategories";
import styles from "./BakeryHero.module.css";
import Categories from "./categories/Categories";
import MainText from "./main-text/MainText";
import Products from "./products/Products";
import { useProducts } from "@/hooks/useProduct";
import { SortOption } from "@/types/sortOption";

const BakeryHero = () => {
  const { products, setCategoryId, setSortBy } = useProducts();
  const { categoryMap } = useCategories();

  const handleFilterChange = (categoryId: string) => {
    setCategoryId(categoryId);
  };

  const handleSortChange = (sortBy: SortOption) => {
    setSortBy(sortBy);
  };

  return (
    <section className={styles.container}>
      <MainText />

      <Categories
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />

      <Products products={products} categoryMap={categoryMap} />
    </section>
  );
};

export default BakeryHero;
