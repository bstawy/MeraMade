"use client";

import HeaderLogo from "@/components/layout/header/header-logo/HeaderLogo";

import styles from "./Footer.module.css";
import Reveal from "@/components/Reveal/Reveal";
import { useLanguage } from "@/features/language/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <Reveal>
      <footer id="footer" className={styles.footer}>
        <div className={styles.logo}>
          <HeaderLogo />
          <p className={styles.logo__description}>{t("hero_tagline")}</p>
        </div>
        <div className={styles.guides}>
          <h3 className={styles.title}>{t("nav_guide")}</h3>
          <a className={styles.guides__link} href="sourdoughGuide">
            {t("sourdough_guide")}
          </a>
          <a className={styles.guides__link} href="shipping">
            {t("nav_shipping")}
          </a>
          <a className={styles.guides__link} href="Contact">
            {t("nav_contact")}
          </a>
          <a className={styles.guides__link} href="Wholesale">
            {t("nav_wholesale")}
          </a>
        </div>
        <div className={styles.visit}>
          <h3 className={styles.title}>{t("nav_visit")}</h3>
          <a className={styles.guides__link} href="address">
            {t("location_name")}
            <br />
            {t("address_line")}
            <br />
            {t("city_country")}
          </a>
          <p className={styles.workingHours}>
            {t("operating_days")}
            <br />
            {t("operating_hours")}
          </p>
        </div>
      </footer>
    </Reveal>
  );
};

export default Footer;
