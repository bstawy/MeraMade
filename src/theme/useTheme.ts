"use client"; // 👈 Required for hooks

import { useContext } from "react";
import type { ThemeContextType } from "./themeTypes";
import { ThemeContext } from "./ThemeContext";

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
