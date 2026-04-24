import { SortOption } from "@/types/sortOption";
import CategoriesActions from "./categories-actions/CategoriesActions";

interface CategoriesProps {
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: SortOption) => void;
}

const Categories = ({ onFilterChange, onSortChange }: CategoriesProps) => {
  return (
    <CategoriesActions
      onFilterChange={onFilterChange}
      onSortChange={onSortChange}
    />
  );
};

export default Categories;
