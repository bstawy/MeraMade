"use client";

import { createContext } from "react";
import { SnackContextType } from "./snackBarTypes";

export const SnackContext = createContext<SnackContextType | undefined>(
  undefined,
);
