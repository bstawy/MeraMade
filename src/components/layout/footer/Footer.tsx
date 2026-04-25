import HeaderLogo from "@/components/layout/header/header-logo/HeaderLogo";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.logo}>
        <HeaderLogo />
        <p className={styles.logo__description}>
          Elevating the daily ritual of bread into an artisanal experience.
        </p>
      </div>
      <div className={styles.guides}>
        <h3 className={styles.title}>GUIDE</h3>
        <a className={styles.guides__link} href="sourdoughGuide">
          Sourdough Guide
        </a>
        <a className={styles.guides__link} href="shipping">
          Shipping
        </a>
        <a className={styles.guides__link} href="Contact">
          Contact
        </a>
        <a className={styles.guides__link} href="Wholesale">
          Wholesale
        </a>
      </div>
      <div className={styles.visit}>
        <h3 className={styles.title}>VISIT</h3>
        <a className={styles.guides__link} href="address">
          Downtown Atelier
          <br />
          124 Artisan Row
          <br />
          Dubai, UAE
        </a>
        <p className={styles.workingHours}>
          Tue - Sun
          <br />
          06:00 - 14:00
        </p>
      </div>
    </footer>
  );
};

export default Footer;
