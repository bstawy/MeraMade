"use client";

import { useMemo, useState } from "react";
import { productService } from "@/services/product.service";
import { SortOption } from "@/types/sortOption";

export function useProducts() {
  const [categoryId, setCategoryId] = useState<number | undefined>();
  const [sortBy, setSortBy] = useState<SortOption | undefined>();

  const products = useMemo(() => {
    return productService.getProducts({ categoryId, sortBy });
  }, [categoryId, sortBy]);

  return {
    products,
    categoryId,
    setCategoryId,
    sortBy,
    setSortBy,
  };
}
