import { useEffect } from "react";

interface UsePressEscProps {
  callback: () => void;
  isMenuOpen: boolean;
}

export const usePressEsc = ({ callback, isMenuOpen }: UsePressEscProps) => {
  useEffect(() => {
    if (!isMenuOpen) return;

    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") callback();
    };

    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [callback, isMenuOpen]);
};
