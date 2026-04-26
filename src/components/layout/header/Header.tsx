"use client";

import HeaderLogo from "@/components/layout/header/header-logo/HeaderLogo";
import Navbar from "@/components/layout/navbar/Navbar";
import HeaderActions from "@/components/layout/header/header-actions/HeaderActions";

import { useHeaderMenu } from "@/hooks/useHeaderMenu";

import styles from "./Header.module.css";
import Reveal from "@/components/Reveal/Reveal";
import { REVEAL_VARIANTS } from "@/components/Reveal/revealTypes";

const Header = () => {
  const { isMenuOpen, toggleMenu, headerRef } = useHeaderMenu();

  return (
    <Reveal variant={REVEAL_VARIANTS.FADE_IN}>
      <div className={styles.header} ref={headerRef}>
        <HeaderLogo />
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        <HeaderActions isMenuOpen={isMenuOpen} />
      </div>
    </Reveal>
  );
};

export default Header;
