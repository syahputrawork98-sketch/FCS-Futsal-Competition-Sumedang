import Link from "next/link";
import styles from "./action-link.module.css";

type ActionLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "inverse";
  size?: "small" | "medium" | "large";
  className?: string;
  ariaLabel?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export function ActionLink({
  href,
  children,
  variant = "primary",
  size = "medium",
  className = "",
  ariaLabel,
  onClick,
}: ActionLinkProps) {
  const classNames = [
    styles.link,
    styles[variant],
    styles[size],
    className,
  ].filter(Boolean).join(" ");

  return (
    <Link href={href} className={classNames} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </Link>
  );
}
