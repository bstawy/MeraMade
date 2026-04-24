// /services/category.service.ts

import type { Category } from "@/types/category";

const BASE_URL = "http://localhost:3001";

class CategoryService {
  async getAll(): Promise<Category[]> {
    const res = await fetch(`${BASE_URL}/categories`);

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }

    return res.json();
  }
}

export const categoryService = new CategoryService();
