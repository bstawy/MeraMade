import Eyebrow from "@/components/Eyebrow";
import MainText from "./main-text/MainText";
import Actions from "./actions/Actions";
import ScrollIndicator from "./scroll-indicator/ScrollIndicator";

import styles from "./HomeHero.module.css";
import Reveal from "@/components/Reveal/Reveal";

const HomeHero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`section-container {styles.heroContent}`}>
        <Reveal>
          <Eyebrow text="ARTISANAL EXCELLENCE" />
          <MainText />
          <Actions />
          <ScrollIndicator />
        </Reveal>
      </div>
    </section>
  );
};

export default HomeHero;
