"use client";

import HeaderLogo from "@/components/layout/header/header-logo/HeaderLogo";
import Navbar from "@/components/layout/navbar/Navbar";
import HeaderActions from "@/components/layout/header/header-actions/HeaderActions";

import { useHeaderMenu } from "@/hooks/useHeaderMenu";

import styles from "./Header.module.css";

const Header = () => {
  const { isMenuOpen, toggleMenu, headerRef } = useHeaderMenu();

  return (
    <div className={styles.header} ref={headerRef}>
      <HeaderLogo />
      <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <HeaderActions isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Header;
