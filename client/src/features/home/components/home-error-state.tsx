import { AlertTriangle } from "lucide-react";
import styles from "./home-error-state.module.css";

type HomeErrorStateProps = {
  title: string;
  description?: string;
};

export function HomeErrorState({ title, description }: HomeErrorStateProps) {
  return (
    <div className={styles.container}>
      <AlertTriangle className={styles.icon} size={32} aria-hidden="true" />
      <h3 className={styles.title}>{title}</h3>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
