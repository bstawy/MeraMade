import styles from "./MainText.module.css";

const MainText = () => {
  return (
    <div className={styles.mainText}>
      <div className={styles.title}>
        <h1>The Atelier.</h1>
        <span>BAKERY COLLECTION</span>
      </div>
      <p className={styles.subtitle}>
        Hand-sculpted textures, wild ferments, and the patient art of the slow
        rise. Each loaf is a testament to the nocturnal craft of our master
        bakers.
      </p>
    </div>
  );
};

export default MainText;
