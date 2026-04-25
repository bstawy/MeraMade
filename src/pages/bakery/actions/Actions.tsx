import Filter from "./filter/Filter";
import Sort from "./sort/Sort";

import styles from "./Actions.module.css";
import { SortOption } from "@/types/sortOption";

interface ActionsProps {
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: SortOption) => void;
}

const Actions = ({ onFilterChange, onSortChange }: ActionsProps) => {
  return (
    <section>
      <div className={styles.actions}>
        <Filter onSelect={onFilterChange} />
        <Sort onSortChange={onSortChange} />
      </div>
    </section>
  );
};

export default Actions;
