"use client";

import sortOptionsList from "@/data/sortOptions";
import { SortOption } from "@/types/sortOption";
import DropdownMenu, {
  type DropdownOption,
} from "@/components/DropdownMenu/DropdownMenu";

interface SortProps {
  /**
   * Optional callback when a sorting option is selected.
   */
  onSortChange?: (option: SortOption) => void;
  /**
   * Optional controlled/default value for the selected sorting option.
   */
  selectedOption?: SortOption | null;
}

const Sort = ({ onSortChange }: SortProps) => {
  const options: DropdownOption[] = sortOptionsList.map((option) => ({
    id: option.id,
    value: option.value,
    name: option.name,
  }));

  const handleSortChange = (option: DropdownOption) => {
    const selectedSortOption = sortOptionsList.find(
      (opt) => opt.value === option.value,
    );

    if (selectedSortOption) {
      onSortChange?.(selectedSortOption);
    } else {
      console.warn(
        `Selected sort option with value "${option.value}" not found in sortOptionsList.`,
      );
    }
  };

  return (
    <div>
      <DropdownMenu
        label="Sort By"
        options={options}
        onSelect={handleSortChange}
      />
    </div>
  );
};

export default Sort;
