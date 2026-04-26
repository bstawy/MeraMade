"use client";

import Eyebrow from "@/components/Eyebrow";
import CollectionsGrid from "./collections-grid/CollectionsGrid";

import styles from "./Collections.module.css";
import Reveal from "@/components/Reveal/Reveal";

const Collections = () => {
  return (
    <section id="collections">
      <div className={`section-container ${styles.collections}`}>
        <Reveal>
          <Eyebrow text="CURATED SELECTIONS" letterSpacing="0.1rem" />
          <h2 className={styles.title}>Selected Collections</h2>
          <CollectionsGrid />
        </Reveal>
      </div>
    </section>
  );
};

export default Collections;
