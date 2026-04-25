import { forwardRef, useId, useState } from "react";
import { Eye, EyeOff } from "lucide-react"; // Or use your own SVG icons
import { INPUT_VARIANTS, INPUT_SIZES } from "./inputTypes";
import type { InputProps } from "./inputTypes";

import styles from "./Input.module.css";

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      icon,
      iconPosition = "left",
      variant = INPUT_VARIANTS.OUTLINED,
      inputSize = INPUT_SIZES.LARGE,
      fullWidth = false,
      type,
      id,
      ...rest
    },
    ref,
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const generatedId = useId();
    const inputId = id || generatedId;

    const isPasswordType = type === "password";
    // If it's a password, toggle between "text" and "password"
    const currentType = isPasswordType
      ? isPasswordVisible
        ? "text"
        : "password"
      : type;

    const togglePassword = () => setIsPasswordVisible(!isPasswordVisible);

    const inputWrapperCls = [
      styles.inputWrapper,
      styles[variant],
      styles[inputSize],
      error && styles.errorState,
      rest.disabled && styles.disabled,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div
        className={`${styles.container} ${fullWidth ? styles.fullWidth : ""}`}
      >
        {label && (
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
        )}

        <div className={inputWrapperCls}>
          {icon && iconPosition === "left" && (
            <span className={styles.icon}>{icon}</span>
          )}

          <input
            ref={ref}
            id={inputId}
            className={styles.input}
            type={currentType}
            {...rest}
          />

          {/* If it's a password type, show the toggle button */}
          {isPasswordType && !rest.disabled && (
            <button
              type="button"
              className={styles.passwordToggle}
              onClick={togglePassword}
              tabIndex={-1} // Prevent tabbing into the icon
              aria-label={isPasswordVisible ? "Hide password" : "Show password"}
            >
              {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          )}

          {icon && iconPosition === "right" && !isPasswordType && (
            <span className={styles.icon}>{icon}</span>
          )}
        </div>

        {error && <span className={styles.errorMessage}>{error}</span>}
      </div>
    );
  },
);

Input.displayName = "Input";

export default Input;
