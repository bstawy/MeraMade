"use client";

import CartIcon from "@/assets/cart_icon.svg";
import LangIcon from "@/assets/lang_icon.svg";
import ThemeIcon from "@/assets/theme_icon.svg";

// import { useTheme } from "../../../../theme/useTheme";

import HeaderActionButton from "./HeaderActionButton";

import styles from "./HeaderActions.module.css";

interface HeaderActionsProps {
  isMenuOpen: boolean;
}

const HeaderActions = ({ isMenuOpen }: HeaderActionsProps) => {
  // const { _, toggleTheme } = useTheme();

  return (
    <div
      className={`${styles.actions} ${isMenuOpen ? styles.mobileVisible : ""}`}
    >
      <HeaderActionButton icon={<LangIcon />} />
      <HeaderActionButton icon={<ThemeIcon />} onTap={() => {}} />
      <HeaderActionButton icon={<CartIcon />} />
    </div>
  );
};

export default HeaderActions;
