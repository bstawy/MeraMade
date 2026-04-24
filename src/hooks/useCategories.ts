"use client";

import { useEffect, useState } from "react";
import { categoryService } from "@/services/category.service";
import { Category } from "@/types/category";

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    categoryService.getAll().then(setCategories);
  }, []);

  const categoryMap = Object.fromEntries(categories.map((c) => [c.id, c]));

  return { categories, categoryMap };
}
