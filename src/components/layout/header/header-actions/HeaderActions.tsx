"use client";

import CartIcon from "@/assets/icons/cart_icon.svg";
import LangIcon from "@/assets/icons/lang_icon.svg";
import ThemeIcon from "@/assets/icons/theme_icon.svg";

import { useTheme } from "@/theme/useTheme";

import HeaderActionButton from "./HeaderActionButton";

import styles from "./HeaderActions.module.css";

interface HeaderActionsProps {
  isMenuOpen: boolean;
}

const HeaderActions = ({ isMenuOpen }: HeaderActionsProps) => {
  const { toggleTheme } = useTheme();

  return (
    <div
      className={`${styles.actions} ${isMenuOpen ? styles.mobileVisible : ""}`}
    >
      <HeaderActionButton icon={<LangIcon />} />
      <HeaderActionButton icon={<ThemeIcon />} onTap={toggleTheme} />
      {/*<HeaderActionButton icon={<CartIcon />} />*/}
    </div>
  );
};

export default HeaderActions;
