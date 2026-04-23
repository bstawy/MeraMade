"use client";

import React, { useState, useRef, useCallback } from "react";
import type { Snack, SnackType } from "./snackBarTypes";
import { SnackContext } from "./SnackBarContext";

export const SnackProvider = ({ children }: { children: React.ReactNode }) => {
  const [snack, setSnack] = useState<Snack | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hideSnack = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setSnack((prev) => (prev ? { ...prev, visible: false } : null));
  }, []);

  const showSnack = useCallback(
    (type: SnackType, title: string, body: string) => {
      if (timerRef.current) clearTimeout(timerRef.current);

      setSnack({ type, title, body, visible: true });

      timerRef.current = setTimeout(() => {
        hideSnack();
      }, 5000);
    },
    [hideSnack],
  );

  return (
    <SnackContext.Provider value={{ snack, showSnack, hideSnack }}>
      {children}
    </SnackContext.Provider>
  );
};
