"use client";

import { useState } from "react";
import FilterItem from "./FilterItem";

import { categories } from "@/data/categories";

import styles from "./Filter.module.css";
import DropdownMenu from "@/components/DropdownMenu/DropdownMenu";
import { useLanguage } from "@/features/language/useLanguage";

interface FilterProps {
  defultValue?: string;
  onSelect?: (selectedCategoryId: string) => void;
}

const Filter = ({ defultValue, onSelect }: FilterProps) => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>(defultValue || "0");

  const userClickHandler = (id: string) => {
    setActiveFilter(id);
    onSelect?.(id);
  };

  return (
    <>
      <div className={styles.filters}>
        <span className={styles.title}>{t("filter_by")}</span>
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
      {/*-------------------  Mobile Filters  -------------------*/}
      <div className={styles.mobileFilters}>
        <DropdownMenu
          label={t("filter_by")}
          options={[
            { id: "0", value: "0", name: { en: "All", ar: "الكل" } },
            ...categories.map((item) => ({
              id: item.id,
              value: item.id,
              name: item.name,
            })),
          ]}
          onSelect={(opt) => userClickHandler(opt.value)}
        />
      </div>
    </>
  );
};

export default Filter;
