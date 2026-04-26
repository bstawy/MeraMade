"use client";

import { useReveal } from "@/components/Reveal/useReveal";
import {
  REVEAL_VARIANTS,
  REVEAL_PRESETS,
  REVEAL_PRESET_CONFIG,
  type RevealProps,
} from "./revealTypes";

import styles from "./Reveal.module.css";

export default function Reveal({
  children,
  as: Tag = "div",
  variant = REVEAL_VARIANTS.FADE_UP,
  preset = REVEAL_PRESETS.SLOW,
  delay,
  duration,
  triggerOnce = true,
  className,
  ...rest
}: RevealProps) {
  const presetConfig = REVEAL_PRESET_CONFIG[preset];

  const finalDelay = delay ?? presetConfig.delay;
  const finalDuration = duration ?? presetConfig.duration;

  const { ref, isVisible, style } = useReveal({
    delay: finalDelay,
    duration: finalDuration,
    triggerOnce,
  });

  const cls = [
    styles.reveal,
    styles[variant],
    isVisible && styles.visible,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag ref={ref} style={style} className={cls} {...rest}>
      {children}
    </Tag>
  );
}
