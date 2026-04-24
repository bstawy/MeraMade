"use client";

import { useRef, useState } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { usePressEsc } from "@/hooks/usePressEsc";

import { BUTTON_VARIANTS, BUTTON_SIZES } from "../Button/buttonTypes";
import Button from "../Button/Button";

import styles from "./DropdownMenu.module.css";

export interface DropdownOption {
  id: string | number;
  value: string;
  name: {
    en: string;
    ar: string;
  };
}

interface DropdownMenuProps {
  options: DropdownOption[];
  label: string;
  /**
   * Optional callback when an option is selected.
   */
  onSelect?: (opt: DropdownOption) => void;
  /**
   * Optional controlled/default value.
   */
  value?: DropdownOption | null;
}

const DropdownMenu = ({
  options,
  label,
  onSelect,
  value,
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [, setSelected] = useState<DropdownOption | undefined>(
    value ?? undefined,
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setIsOpen(false);

  useClickOutside({
    ref: dropdownRef,
    isMenuOpen: isOpen,
    callback: closeMenu,
  });

  usePressEsc({ isMenuOpen: isOpen, callback: closeMenu });

  const handleSelection = (opt: DropdownOption) => {
    setSelected(opt);
    onSelect?.(opt);
    setIsOpen(false);
  };

  return (
    <div
      ref={dropdownRef}
      style={{ position: "relative", display: "inline-block" }}
    >
      <Button
        label={label}
        variant={BUTTON_VARIANTS.TEXT}
        size={BUTTON_SIZES.MEDIUM}
        onClick={() => setIsOpen(!isOpen)}
        icon={
          <span className={`${styles.chevron} ${isOpen ? "open" : ""}`}>⌵</span>
        }
      />
      {isOpen && (
        <ul className={styles.options}>
          {options.map((opt, index) => (
            <li key={index}>
              <div
                onClick={() => handleSelection(opt)}
                style={{ padding: "8px 12px", cursor: "pointer" }}
              >
                {opt.name.en || String(opt)}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
