"use client";

import { useEffect, useState } from "react";
import { productService } from "@/services/product.service";
import { SortOption } from "@/types/sortOption";
import { Product } from "@/types/product";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryId, setCategoryId] = useState<string>("0");
  const [sortBy, setSortBy] = useState<SortOption | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);

      try {
        const data = await productService.getProducts({
          categoryId,
          sortBy: sortBy ?? undefined,
        });

        setProducts(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [categoryId, sortBy]);

  return {
    products,
    loading,
    categoryId,
    setCategoryId,
    sortBy,
    setSortBy,
  };
}
