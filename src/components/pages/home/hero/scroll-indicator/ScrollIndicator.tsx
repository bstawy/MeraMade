"use client";

import { useLanguage } from "@/features/language/useLanguage";
import styles from "./ScrollIndicator.module.css";

const ScrollIndicator = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.scrollIndicator}>
      <span className={styles.scrollIndicator__title}>{t("scroll")}</span>
      <div className={styles.scrollIndicator__line}></div>
    </div>
  );
};

export default ScrollIndicator;
