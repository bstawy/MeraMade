"use client";

import { useState } from "react";

import NavbarHamburgerMenu from "./hamburger-menu/NavbarHamburgerMenu";
import NavLinks from "./nav-links/NavLinks";

interface NavbarProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Navbar = ({ isMenuOpen, toggleMenu }: NavbarProps) => {
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  return (
    <>
      <NavLinks
        isMenuOpen={isMenuOpen}
        onTap={toggleMenu}
        isLinkHovered={isLinkHovered}
        setIsLinkHovered={setIsLinkHovered}
      />
      <NavbarHamburgerMenu isOpen={isMenuOpen} toggleOpen={toggleMenu} />
    </>
  );
};

export default Navbar;
