import { useLanguage } from "@/features/language/useLanguage";
import styles from "./MainText.module.css";

const MainText = () => {
  const { t } = useLanguage();

  return (
    <>
      <h1 className={styles.mainText}>
        <span>
          {t("theArtOf")}
          <br />
        </span>
        <span>{t("slowBaking")}</span>
      </h1>
      <p className={styles.description}>{t("heritageDescription")}</p>
    </>
  );
};

export default MainText;
