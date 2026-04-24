import Filter from "./filter/Filter";
import Sort from "./sort/Sort";

import styles from "./CategoriesActions.module.css";
import { SortOption } from "@/types/sortOption";

interface CategoriesActionsProps {
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: SortOption) => void;
}

const CategoriesActions = ({
  onFilterChange,
  onSortChange,
}: CategoriesActionsProps) => {
  return (
    <div className={styles.actions}>
      <Filter onSelect={onFilterChange} />
      <Sort onSortChange={onSortChange} />
    </div>
  );
};

export default CategoriesActions;
