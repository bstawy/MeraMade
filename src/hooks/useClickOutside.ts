import { useEffect } from "react";

interface UseClickOutsideProps {
  ref: React.RefObject<HTMLElement | null>;
  callback: () => void;
  isMenuOpen: boolean;
}

export const useClickOutside = ({
  ref,
  callback,
  isMenuOpen,
}: UseClickOutsideProps) => {
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleMouseClick = (e: MouseEvent) => {
      // e.button === 0 ensures we only trigger on left-click
      if (
        e.button === 0 &&
        ref.current &&
        !ref.current.contains(e.target as Node)
      ) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleMouseClick);

    return () => {
      document.removeEventListener("mousedown", handleMouseClick);
    };
  }, [ref, callback, isMenuOpen]);
};
