import Link from "next/link";
import styles from "./action-link.module.css";

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "inverse";
  size?: "small" | "medium" | "large";
  className?: string;
  ariaLabel?: string;
};

export function ActionLink({
  href,
  children,
  variant = "primary",
  size = "medium",
  className = "",
  ariaLabel,
}: ActionLinkProps) {
  const classNames = [
    styles.link,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean).join(" ");

  return (
    <Link href={href} className={classNames} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
