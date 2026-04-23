import { useContext } from "react";
import { SnackContext } from "./SnackBarContext";

export const useSnack = () => {
  const context = useContext(SnackContext);
  if (!context) throw new Error("useSnack must be used within a SnackProvider");
  return context;
};
