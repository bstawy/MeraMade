// /services/product.service.ts

import { products } from "@/data/products";
import { categories } from "@/data/categories";
import type { Product } from "@/types/product";
import { SORT_OPTIONS, SortOption } from "@/types/sortOption";

export interface GetProductsParams {
  categoryId?: number;
  sortBy?: SortOption;
}

class ProductService {
  // 🔹 get all products
  async getAll(): Promise<Product[]> {
    const data = await fetch("http://localhost:3001/products");

    if (!data.ok) {
      throw new Error("Failed to fetch products");
    }

    const jsonData = await data.json();

    const products = jsonData.map((item: any) => ({
      id: item.id,
      name: {
        en: item.name.en,
        ar: item.name.ar,
      },
      categoryId: item.categoryId,
      price: item.price,
      createdAt: item.createdAt,
      rating: item.rating,
    }));

    return products;
  }

  // 🔹 get by id
  getById(id: number): Product | undefined {
    return products.find((p) => p.id === id);
  }

  // 🔹 filter + sort (IMPORTANT)
  getProducts(params?: GetProductsParams): Product[] {
    let result = [...products];

    // ✅ filter
    if (params?.categoryId) {
      result = result.filter((p) => p.categoryId === params.categoryId);
    }

    // ✅ sort
    if (params?.sortBy) {
      switch (params.sortBy.value) {
        case SORT_OPTIONS.PRICE_LOW_TO_HIGH:
          result.sort((a, b) => a.price - b.price);
          break;

        case SORT_OPTIONS.PRICE_HIGH_TO_LOW:
          result.sort((a, b) => b.price - a.price);
          break;

        case SORT_OPTIONS.NEWEST:
          result.sort(
            (a, b) =>
              new Date(b.createdAt ?? 0).getTime() -
              new Date(a.createdAt ?? 0).getTime(),
          );
          break;

        case SORT_OPTIONS.RATING:
          result.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
          break;
      }
    }

    return result;
  }

  // 🔹 get category of product
  getCategory(product: Product) {
    return categories.find((c) => c.id === product.categoryId);
  }
}

export const productService = new ProductService();
