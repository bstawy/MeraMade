"use client";

import Link from "next/link";

import styles from "./NavLinks.module.css";
import { usePathname } from "next/navigation";

interface NavLinkItemProps {
  title: string;
  path: string;
  isLinkHovered: boolean;
  setIsHovered: (isHovered: boolean) => void;
  onTap?: () => void;
}

const NavLinkItem = ({
  title,
  path,
  isLinkHovered,
  setIsHovered,
  onTap,
}: NavLinkItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <li
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={path}
        className={`${styles.navLink}  ${isActive && !isLinkHovered ? styles.active : ""}`}
        onClick={onTap}
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLinkItem;
