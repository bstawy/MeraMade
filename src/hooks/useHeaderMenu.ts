import { useCallback, useRef } from "react";
import { useToggle } from "./useToggle";
import { useClickOutside } from "./useClickOutside";
import { usePressEsc } from "./usePressEsc";

export const useHeaderMenu = () => {
  const [isMenuOpen, toggleMenu] = useToggle(false);
  const headerRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => {
    if (isMenuOpen) toggleMenu();
  }, [isMenuOpen, toggleMenu]);

  useClickOutside({ ref: headerRef, callback: closeMenu, isMenuOpen });
  usePressEsc({ callback: closeMenu, isMenuOpen });

  return {
    isMenuOpen,
    toggleMenu,
    headerRef,
    closeMenu,
  };
};
