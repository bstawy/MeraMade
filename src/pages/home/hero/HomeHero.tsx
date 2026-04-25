import Eyebrow from "@/components/Eyebrow";
import MainText from "./main-text/MainText";
import Actions from "./actions/Actions";
import ScrollIndicator from "./scroll-indicator/ScrollIndicator";

import styles from "./HomeHero.module.css";

const HomeHero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`section-container {styles.heroContent}`}>
        <Eyebrow text="ARTISANAL EXCELLENCE" />
        <MainText />
        <Actions />
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default HomeHero;
