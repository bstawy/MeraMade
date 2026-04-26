/* ─── Variants ─── */
export const REVEAL_VARIANTS = {
  FADE_UP: "fadeUp",
  FADE_IN: "fadeIn",
  SCALE: "scale",
  SLIDE_LEFT: "slideLeft",
  SLIDE_RIGHT: "slideRight",
  ZOOM_UP: "zoomUp",
} as const;

export type RevealVariant =
  (typeof REVEAL_VARIANTS)[keyof typeof REVEAL_VARIANTS];

/* ─── Presets ─── */
export const REVEAL_PRESETS = {
  FAST: "fast",
  SMOOTH: "smooth",
  SLOW: "slow",
} as const;

export type RevealPreset = (typeof REVEAL_PRESETS)[keyof typeof REVEAL_PRESETS];

/* ─── Config map (the important part) ─── */
export const REVEAL_PRESET_CONFIG: Record<
  RevealPreset,
  { duration: number; delay: number }
> = {
  [REVEAL_PRESETS.FAST]: {
    duration: 400,
    delay: 0,
  },
  [REVEAL_PRESETS.SMOOTH]: {
    duration: 700,
    delay: 0,
  },
  [REVEAL_PRESETS.SLOW]: {
    duration: 1000,
    delay: 0,
  },
};

/* ─── Props ─── */
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export interface RevealProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  as?: React.ElementType;
  variant?: RevealVariant;
  preset?: RevealPreset; // 👈 NEW
  delay?: number; // optional override
  duration?: number; // optional override
  triggerOnce?: boolean;
}
