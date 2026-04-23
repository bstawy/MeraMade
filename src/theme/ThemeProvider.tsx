"use client";

import { useState, useEffect, type ReactNode } from "react";
import { THEMES, type Theme } from "./themeTypes";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(THEMES.LIGHT); // Default to light
  const [mounted, setMounted] = useState(false);

  // Run once on client mount to load preferences
  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    const initialTheme = saved || (prefersDark ? THEMES.DARK : THEMES.LIGHT);

    setTheme(initialTheme);
    setMounted(true);
  }, []);

  // Update DOM and Storage when theme changes
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme, mounted]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT));

  // Avoid rendering children until mounted to prevent hydration flash
  // Or simply render children and accept the default light theme first
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <div style={{ visibility: mounted ? "visible" : "hidden" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
