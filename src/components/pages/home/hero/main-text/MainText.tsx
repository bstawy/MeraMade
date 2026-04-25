import styles from "./MainText.module.css";

const MainText = () => {
  return (
    <>
      <h1 className={styles.mainText}>
        <span>
          The Art of
          <br />
        </span>
        <span>Slow Baking</span>
      </h1>
      <p className={styles.description}>
        Honoring the patience of heritage. Every loaf tells a story written in
        flour, water, and time.
      </p>
    </>
  );
};

export default MainText;
