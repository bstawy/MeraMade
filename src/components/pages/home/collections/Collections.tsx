"use client";

import Eyebrow from "@/components/Eyebrow";
import CollectionsGrid from "./collections-grid/CollectionsGrid";

import styles from "./Collections.module.css";
import Reveal from "@/components/Reveal/Reveal";
import { useLanguage } from "@/features/language/useLanguage";

const Collections = () => {
  const { t } = useLanguage();

  return (
    <section id="collections">
      <div className={`section-container ${styles.collections}`}>
        <Reveal>
          <Eyebrow text={t("curatedSelections")} letterSpacing="0.1rem" />
          <h2 className={styles.title}>{t("selectedCollections")}</h2>
          <CollectionsGrid />
        </Reveal>
      </div>
    </section>
  );
};

export default Collections;
