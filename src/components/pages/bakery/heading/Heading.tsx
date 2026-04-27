"use client";

import Reveal from "@/components/Reveal/Reveal";
import styles from "./Heading.module.css";
import { useLanguage } from "@/features/language/useLanguage";

const Heading = () => {
  const { t } = useLanguage();

  return (
    <section>
      <Reveal>
        <div className={styles.mainText}>
          <div className={styles.title}>
            <h1>{t("brand_name")}</h1>
            <span>{t("collection_title")}</span>
          </div>
          <p className={styles.subtitle}>{t("brand_story")}</p>
        </div>
      </Reveal>
    </section>
  );
};

export default Heading;
