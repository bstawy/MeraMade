"use client";

import WheatGrainIcon from "@/assets/icons/grain_wheat_icon.svg";

import Eyebrow from "@/components/Eyebrow";

import styles from "./Manifesto.module.css";
import Reveal from "@/components/Reveal/Reveal";
import { useLanguage } from "@/features/language/useLanguage";

const Manifesto = () => {
  const { t } = useLanguage();

  return (
    <section id="manifesto">
      <Reveal>
        <div className={`section-container ${styles.manifesto}`}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <WheatGrainIcon />
            </div>
            <div className={styles.wheatCard}>
              <span className={styles.wheatCard__percent}>100%</span>
              <span className={styles.wheatCard__title}>
                {t("organicFlour")}
              </span>
            </div>
          </div>
          <div className={styles.content}>
            <Eyebrow text={t("manifestoTitle")} />
            <h2 className={styles.title}>{t("craftedFor")}</h2>
            <p className={styles.description}>{t("manifestoText")}</p>
            <div className={styles.journey}>
              <div className={styles.journeyTitle}>
                <Eyebrow text={t("journeyTitle")} />
              </div>
              <div className={styles.journeyDescription}>
                <i>&quot;{t("journeyText")}&quot;</i>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default Manifesto;
