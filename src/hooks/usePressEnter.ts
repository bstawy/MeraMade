import { useEffect } from "react";

interface UsePressEnterProps {
  callback: () => void;
  isMenuOpen: boolean;
}

export const usePressEnter = ({ callback, isMenuOpen }: UsePressEnterProps) => {
  useEffect(() => {
    if (!isMenuOpen) return;

    const handle = (e: KeyboardEvent) => {
      if (e.key === "Enter") callback();
    };

    document.addEventListener("keydown", handle);
    return () => document.removeEventListener("keydown", handle);
  }, [callback, isMenuOpen]);
};
