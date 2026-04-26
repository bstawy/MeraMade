import Filter from "./filter/Filter";
import Sort from "./sort/Sort";

import styles from "./Actions.module.css";
import { SortOption } from "@/types/sortOption";
import Reveal from "@/components/Reveal/Reveal";

interface ActionsProps {
  onFilterChange: (filter: string) => void;
  onSortChange: (sort: SortOption) => void;
}

const Actions = ({ onFilterChange, onSortChange }: ActionsProps) => {
  return (
    <section>
      {/*<Reveal delay={0.2}>*/}
      <div className={styles.actions}>
        <Filter onSelect={onFilterChange} />
        <Sort onSortChange={onSortChange} />
      </div>
      {/*</Reveal>*/}
    </section>
  );
};

export default Actions;
