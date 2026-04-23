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
  return (
    <nav
      className={`${styles.navbar} ${isMenuOpen ? styles.mobileVisible : ""}`}
    >
      <ul className={styles.navList}>
        <NavLinkItem
          title="Our Story"
          path="/"
          isLinkHovered={isLinkHovered}
          setIsHovered={setIsLinkHovered}
          onTap={onTap}
        />
        <NavLinkItem
          title="The Bakery"
          path="/bakery"
          isLinkHovered={isLinkHovered}
          setIsHovered={setIsLinkHovered}
          onTap={onTap}
        />
        <NavLinkItem
          title="Events"
          path="/events"
          isLinkHovered={isLinkHovered}
          setIsHovered={setIsLinkHovered}
          onTap={onTap}
        />
      </ul>
    </nav>
  );
};

export default NavLinks;
