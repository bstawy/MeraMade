"use client";

import { useSnack } from "@/snackbar/useSnack";

import styles from "./SnackBar.module.css";

const ICONS = {
  success: (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  ),
  error: (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  ),
};

export const Snackbar = () => {
  const { snack, hideSnack } = useSnack();

  if (!snack) return null;

  return (
    <div
      className={`${styles.snackbar} ${snack.visible ? styles.snackbarShow : styles.snackbarHide}`}
    >
      <div className={`${styles.snackbarInner} ${styles[snack.type]}`}>
        <div className={styles.snackbarIcon}>{ICONS[snack.type]}</div>
        <div className={styles.snackbarText}>
          <strong>{snack.title}</strong>
          <span>{snack.body}</span>
        </div>
        <button
          type="button"
          className={styles.snackbarClose}
          onClick={hideSnack}
          aria-label="Dismiss"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
};
