import styles from "./status-badge.module.css";

export type StatusBadgeVariant =
  | "neutral"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "live"
  | "champion";

type StatusBadgeProps = {
  children: React.ReactNode;
  variant?: StatusBadgeVariant;
  ariaLabel?: string;
};

export function StatusBadge({
  children,
  variant = "neutral",
  ariaLabel,
}: StatusBadgeProps) {
  const classNames = [styles.badge, styles[variant]].filter(Boolean).join(" ");

  return (
    <span className={classNames} aria-label={ariaLabel}>
      {children}
    </span>
  );
}
