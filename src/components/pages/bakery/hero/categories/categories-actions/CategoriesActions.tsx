import Filter from "./filter/Filter";
import Sort from "./sort/Sort";

import styles from "./CategoriesActions.module.css";

const CategoriesActions = () => {
  return (
    <div className={styles.actions}>
      <Filter />
      <Sort />
    </div>
  );
};

export default CategoriesActions;
