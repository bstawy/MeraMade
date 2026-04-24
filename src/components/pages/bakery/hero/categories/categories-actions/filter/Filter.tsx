"use client";

import { useState } from "react";
import FilterItem from "./FilterItem";

import { categories } from "@/data/categories";

import styles from "./Filter.module.css";

interface FilterProps {
  defultValue?: string;
  onSelect?: (selectedCategoryId: string) => void;
}

const Filter = ({ defultValue, onSelect }: FilterProps) => {
  const [activeFilter, setActiveFilter] = useState<string>(defultValue || "0");

  const userClickHandler = (id: string) => {
    setActiveFilter(id);
    onSelect?.(id);
  };

  return (
    <div className={styles.filters}>
      <span className={styles.title}>FILTER BY</span>
      <FilterItem
        key={0}
        name={{ en: "All", ar: "الكل" }}
        isActive={activeFilter === "0"}
        onClick={() => userClickHandler("0")}
      />
      {categories.map((item) => (
        <FilterItem
          key={item.id}
          name={item.name}
          isActive={activeFilter === item.id}
          onClick={() => userClickHandler(item.id)}
        />
      ))}
    </div>
  );
};

export default Filter;
