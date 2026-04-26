"use client";

import { useEffect, useRef } from "react";
import {
  computePosition,
  offset,
  flip,
  shift,
  autoUpdate,
} from "@floating-ui/dom";

type Options = {
  isOpen: boolean;
  placement?: "bottom-start" | "bottom-end" | "top-start" | "top-end";
};

export function useFloatingDropdown<T extends HTMLElement>({
  isOpen,
  placement = "bottom-start",
}: Options) {
  const referenceRef = useRef<T | null>(null);
  const floatingRef = useRef<T | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    const reference = referenceRef.current;
    const floating = floatingRef.current;

    if (!reference || !floating) return;

    const updatePosition = async () => {
      const { x, y } = await computePosition(reference, floating, {
        placement,
        middleware: [offset(8), flip(), shift({ padding: 8 })],
      });

      Object.assign(floating.style, {
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
      });
    };

    const cleanup = autoUpdate(reference, floating, updatePosition);

    updatePosition();

    return cleanup;
  }, [isOpen, placement]);

  return {
    referenceRef,
    floatingRef,
  };
}
