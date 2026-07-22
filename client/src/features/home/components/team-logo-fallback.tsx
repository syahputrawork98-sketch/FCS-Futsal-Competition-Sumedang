import { Shield } from "lucide-react";
import styles from "./team-logo-fallback.module.css";

type TeamLogoFallbackProps = {
  name: string;
  size?: "small" | "medium" | "large";
};

export function TeamLogoFallback({ name, size = "medium" }: TeamLogoFallbackProps) {
  const initial = name ? name.charAt(0).toUpperCase() : "?";
  
  return (
    <div className={`${styles.container} ${styles[size]}`} aria-hidden="true">
      <Shield className={styles.icon} />
      <span className={styles.initial}>{initial}</span>
    </div>
  );
}
