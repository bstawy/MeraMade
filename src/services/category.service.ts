// /services/category.service.ts

import { categories } from "@/data/categories";
import type { Category } from "@/types/category";

// const BASE_URL = "http://localhost:3001";

class CategoryService {
  // TODO: fetch categories from backend
  // async getAll(): Promise<Category[]> {
  //   const res = await fetch(`${BASE_URL}/categories`);

  //   if (!res.ok) {
  //     throw new Error("Failed to fetch categories");
  //   }

  //   return res.json();
  // }
  getAll(): Category[] {
    return categories;
  }
}

export const categoryService = new CategoryService();
