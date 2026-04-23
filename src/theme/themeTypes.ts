export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
} as const;

export type Theme = (typeof THEMES)[keyof typeof THEMES];

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}
