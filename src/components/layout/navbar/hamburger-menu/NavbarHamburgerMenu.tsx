"use client";

import styles from "./NavbarHamburgerMenu.module.css";

interface NavbarHamburgerMenuProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const NavbarHamburgerMenu = ({
  isOpen,
  toggleOpen,
}: NavbarHamburgerMenuProps) => {
  return (
    <button
      type="button"
      className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
      onClick={toggleOpen}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default NavbarHamburgerMenu;
