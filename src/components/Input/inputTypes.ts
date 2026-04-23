import type { ReactNode, ComponentPropsWithoutRef } from "react";

export const INPUT_VARIANTS = {
  OUTLINED: "outlined",
  FILLED: "filled",
  GHOST: "ghost",
} as const;

export const INPUT_SIZES = {
  SMALL: "sm",
  MEDIUM: "md",
  LARGE: "lg",
} as const;

export type InputVariant = (typeof INPUT_VARIANTS)[keyof typeof INPUT_VARIANTS];
export type InputSize = (typeof INPUT_SIZES)[keyof typeof INPUT_SIZES];

export interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  variant?: InputVariant;
  inputSize?: InputSize; // Named 'inputSize' to avoid conflict with HTML 'size'
  fullWidth?: boolean;
}
