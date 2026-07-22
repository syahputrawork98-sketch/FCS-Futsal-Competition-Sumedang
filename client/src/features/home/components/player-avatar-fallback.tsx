import { User } from "lucide-react";
import styles from "./player-avatar-fallback.module.css";

type PlayerAvatarFallbackProps = {
  name: string;
  size?: "small" | "medium" | "large" | "full";
};

export function PlayerAvatarFallback({ name, size = "medium" }: PlayerAvatarFallbackProps) {
  return (
    <div className={`${styles.container} ${styles[size]}`} aria-label={`Avatar fallback untuk ${name}`}>
      <User className={styles.icon} />
    </div>
  );
}
