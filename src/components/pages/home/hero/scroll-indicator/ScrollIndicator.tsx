import styles from "./ScrollIndicator.module.css";

const ScrollIndicator = () => {
  return (
    <div className={styles.scrollIndicator}>
      <span className={styles.scrollIndicator__title}>SCROLL</span>
      <div className={styles.scrollIndicator__line}></div>
    </div>
  );
};

export default ScrollIndicator;
