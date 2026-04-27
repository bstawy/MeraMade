"use client";

import Reveal from "@/components/Reveal/Reveal";
import styles from "./Heading.module.css";
import { useLanguage } from "@/features/language/useLanguage";

const Heading = () => {
  const { t } = useLanguage();

  return (
    <section>
      <div className={styles.heading}>
        <Reveal>
          <div className={styles.mainText}>
            <h1 className={styles.title}>{t("basket_title")}</h1>
            <span className={styles.subtitle}>{t("artisanal_selection")}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Heading;
