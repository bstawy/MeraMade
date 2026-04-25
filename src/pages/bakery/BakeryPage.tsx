"use client";

import { useCategories } from "@/hooks/useCategories";
import { useProducts } from "@/hooks/useProduct";
import { SortOption } from "@/types/sortOption";

import Heading from "./heading/Heading";
import Products from "./products/Products";
import Actions from "@/pages/bakery/actions/Actions";

import styles from "./BakeryPage.module.css";

const BakeryPage = () => {
  const { products, setCategoryId, setSortBy } = useProducts();
  const { categoryMap } = useCategories();

  const handleFilterChange = (categoryId: string) => {
    setCategoryId(categoryId);
  };

  const handleSortChange = (sortBy: SortOption) => {
    setSortBy(sortBy);
  };

  return (
    <div className={styles.container}>
      <Heading />
      <Actions
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
      <Products products={products} categoryMap={categoryMap} />
    </div>
  );
};

export default BakeryPage;
