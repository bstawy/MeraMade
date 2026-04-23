import { useCallback, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useToggle } from "./useToggle";
import { useClickOutside } from "./useClickOutside";
import { usePressEsc } from "./usePressEsc";

export const useHeaderMenu = () => {
  const [isMenuOpen, toggleMenu] = useToggle(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const closeMenu = useCallback(() => {
    if (isMenuOpen) toggleMenu();
  }, [isMenuOpen, toggleMenu]);

  // Close menu when the URL changes
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  useClickOutside({ ref: headerRef, callback: closeMenu, isMenuOpen });
  usePressEsc({ callback: closeMenu, isMenuOpen });

  return {
    isMenuOpen,
    toggleMenu,
    headerRef,
    closeMenu,
  };
};
