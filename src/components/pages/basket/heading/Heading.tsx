import Reveal from "@/components/Reveal/Reveal";
import styles from "./Heading.module.css";

const Heading = () => {
  return (
    <section>
      <div className={styles.heading}>
        <Reveal>
          <div className={styles.mainText}>
            <h1 className={styles.title}>Your Basket</h1>
            <span className={styles.subtitle}>ARTISANAL SELECTION</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Heading;
