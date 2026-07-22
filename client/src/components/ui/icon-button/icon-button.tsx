import React, { forwardRef } from "react";
import styles from "./icon-button.module.css";

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  children: React.ReactNode;
  inverse?: boolean;
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ label, children, inverse = false, className = "", ...props }, ref) => {
    const classNames = [
      styles.button,
      inverse ? styles.inverse : "",
      className
    ].filter(Boolean).join(" ");

    return (
      <button
        ref={ref}
        type="button"
        className={classNames}
        aria-label={label}
        {...props}
      >
        {children}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";
