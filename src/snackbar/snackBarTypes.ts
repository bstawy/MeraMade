export type SnackType = "success" | "error";

export interface Snack {
  type: SnackType;
  title: string;
  body: string;
  visible: boolean;
}

export interface SnackContextType {
  showSnack: (type: SnackType, title: string, body: string) => void;
  hideSnack: () => void;
  snack: Snack | null;
}
