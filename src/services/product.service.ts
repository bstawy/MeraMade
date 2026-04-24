// /services/product.service.ts

import type { Product } from "@/types/product";
import { SORT_OPTIONS, SortOption } from "@/types/sortOption";

export interface GetProductsParams {
  categoryId?: string;
  sortBy?: SortOption;
}

const BASE_URL = "http://localhost:3001";

class ProductService {
  async getProducts(params?: GetProductsParams): Promise<Product[]> {
    const res = await fetch(`${BASE_URL}/products`);

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    let data: Product[] = await res.json();

    // ✅ filter (frontend for now)
    if (params?.categoryId && params.categoryId !== "0") {
      data = data.filter((p) => p.categoryId === params.categoryId?.toString());
    }

    // ✅ sort
    if (params?.sortBy) {
      switch (params.sortBy.value) {
        case SORT_OPTIONS.PRICE_LOW_TO_HIGH:
          data.sort((a, b) => a.price - b.price);
          break;

        case SORT_OPTIONS.PRICE_HIGH_TO_LOW:
          data.sort((a, b) => b.price - a.price);
          break;

        case SORT_OPTIONS.NEWEST:
          data.sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          );
          break;

        case SORT_OPTIONS.RATING:
          data.sort((a, b) => b.rating - a.rating);
          break;
      }
    }

    return data;
  }
}

export const productService = new ProductService();
