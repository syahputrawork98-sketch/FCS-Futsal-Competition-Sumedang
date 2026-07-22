import { AlertCircle } from "lucide-react";
import styles from "./home-empty-state.module.css";

type HomeEmptyStateProps = {
  title: string;
  description?: string;
};

export function HomeEmptyState({ title, description }: HomeEmptyStateProps) {
  return (
    <div className={styles.container}>
      <AlertCircle className={styles.icon} size={32} aria-hidden="true" />
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
