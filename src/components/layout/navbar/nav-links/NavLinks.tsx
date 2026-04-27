"use client";

import { useLanguage } from "@/features/language/useLanguage";
import NavLinkItem from "./NavLinkItem";

import styles from "./NavLinks.module.css";

interface NavLinksProps {
  isMenuOpen: boolean;
  onTap: () => void;
  isLinkHovered: boolean;
  setIsLinkHovered: (hovered: boolean) => void;
}

const NavLinks = ({
  isMenuOpen,
  onTap,
  isLinkHovered,
  setIsLinkHovered,
}: NavLinksProps) => {
  const { t } = useLanguage();

  return (
    <nav
      className={`${styles.navbar} ${isMenuOpen ? styles.mobileVisible : ""}`}
    >
      <ul className={styles.navList}>
        <NavLinkItem
          title={t("ourStory")}
          path="/"
          isLinkHovered={isLinkHovered}
          setIsHovered={setIsLinkHovered}
          onTap={onTap}
        />
        <NavLinkItem
          title={t("bakery")}
          path="/bakery"
          isLinkHovered={isLinkHovered}
          setIsHovered={setIsLinkHovered}
          onTap={onTap}
        />
        <NavLinkItem
          title={t("basket")}
          path="/basket"
          isLinkHovered={isLinkHovered}
          setIsHovered={setIsLinkHovered}
          onTap={onTap}
        />
      </ul>
    </nav>
  );
};

export default NavLinks;
