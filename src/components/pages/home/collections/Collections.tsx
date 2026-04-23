import Eyebrow from "@/components/Eyebrow";
import CollectionsGrid from "./collections-grid/CollectionsGrid";

import styles from "./Collections.module.css";

const Collections = () => {
  return (
    <section id="collections" className={styles.collectionsSection}>
      <Eyebrow text="CURATED SELECTIONS" letterSpacing="0.1rem" />
      <h2 className={styles.title}>Selected Collections</h2>
      <CollectionsGrid />
    </section>
  );
};

export default Collections;
