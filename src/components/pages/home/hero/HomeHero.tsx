"use client";

import Eyebrow from "@/components/Eyebrow";
import MainText from "./main-text/MainText";
import Actions from "./actions/Actions";
import ScrollIndicator from "./scroll-indicator/ScrollIndicator";

import styles from "./HomeHero.module.css";
import Reveal from "@/components/Reveal/Reveal";
import { useLanguage } from "@/features/language/useLanguage";

const HomeHero = () => {
  const { t } = useLanguage();

  return (
    <section id="hero" className={styles.hero}>
      <div className={`section-container {styles.heroContent}`}>
        <Reveal>
          <Eyebrow text={t("artisanalExcellence")} />
          <MainText />
          <Actions />
          <ScrollIndicator />
        </Reveal>
      </div>
    </section>
  );
};

export default HomeHero;
