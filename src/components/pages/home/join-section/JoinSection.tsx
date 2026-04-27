"use client";

import Reveal from "@/components/Reveal/Reveal";
import JoinForm from "./JoinForm";

import styles from "./JoinSection.module.css";
import { useLanguage } from "@/features/language/useLanguage";

const JoinSection = () => {
  const { t } = useLanguage();

  return (
    <section id="joinForm">
      <div className={`section-container `}>
        <Reveal>
          <div className={styles.container}>
            <h2 className={styles.title}>{t("joinCircle")}</h2>
            <p className={styles.description}>{t("newsletterText")}</p>
            <JoinForm />
            <p className={styles.terms}>{t("privacyNote")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default JoinSection;
