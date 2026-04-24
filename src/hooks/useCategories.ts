"use client";

import { useEffect, useState } from "react";
import { categoryService } from "@/services/category.service";
import { Category } from "@/types/category";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    // TODO: fetch categories from backend
    // categoryService.getAll().then(setCategories);
    const categories: Category[] = categoryService.getAll();
    setCategories(categories);
  }, []);

  const categoryMap = Object.fromEntries(categories.map((c) => [c.id, c]));

  return { categories, categoryMap };
}
