import type { ReactNode, ComponentPropsWithoutRef } from "react";

/*  ─── Constants ───  */
export const BUTTON_VARIANTS = {
  PRIMARY: "primary",
  GHOST: "ghost",
  TEXT: "text",
} as const;

export const BUTTON_SIZES = {
  SMALL: "sm",
  MEDIUM: "md",
  LARGE: "lg",
} as const;

export const ICON_POSITIONS = {
  LEFT: "left",
  RIGHT: "right",
} as const;

/*  ─── Types ───  */
export type ButtonVariant =
  (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
export type ButtonSize = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];
export type IconPosition = (typeof ICON_POSITIONS)[keyof typeof ICON_POSITIONS];

/*  ─── Interface ───  */
export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  label: string;
  icon?: ReactNode;
  iconPosition?: IconPosition;
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconColor?: string;
}
