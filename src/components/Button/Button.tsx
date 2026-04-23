import { forwardRef, memo } from "react";
import { BUTTON_VARIANTS, BUTTON_SIZES, ICON_POSITIONS } from "./buttonTypes";
import type { ButtonProps, ButtonVariant } from "./buttonTypes";

import styles from "./Button.module.css";

const iconColorDefaults: Record<ButtonVariant, string> = {
  [BUTTON_VARIANTS.PRIMARY]: "var(--color-text-on-primary)",
  [BUTTON_VARIANTS.GHOST]: "var(--color-primary)",
  [BUTTON_VARIANTS.TEXT]: "var(--color-primary)",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      label,
      icon,
      iconPosition = ICON_POSITIONS.RIGHT,
      variant = BUTTON_VARIANTS.PRIMARY,
      size = BUTTON_SIZES.LARGE,
      iconColor,
      className,
      disabled,
      ...rest
    },
    ref,
  ) => {
    const resolvedIconColor =
      iconColor ?? iconColorDefaults[variant] ?? "currentColor";

    const cls = [
      styles.btn,
      styles[variant],
      styles[size],
      icon && styles.hasIcon,
      className,
    ]
      .filter(Boolean)
      .join(" ");

    const renderIcon = () => (
      <span
        style={{ color: resolvedIconColor }}
        className={styles.iconWrapper}
        aria-hidden="true"
      >
        {icon}
      </span>
    );

    return (
      <button
        ref={ref}
        type="button"
        className={cls}
        disabled={disabled}
        {...rest}
      >
        {icon && iconPosition === ICON_POSITIONS.LEFT && renderIcon()}

        <span className={styles.label}>{label}</span>

        {icon && iconPosition === ICON_POSITIONS.RIGHT && renderIcon()}
      </button>
    );
  },
);

Button.displayName = "Button";

export default memo(Button);
