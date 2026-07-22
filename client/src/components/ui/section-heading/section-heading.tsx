import { ActionLink } from "@/components/ui/action-link/action-link";
import styles from "./section-heading.module.css";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
  alignment?: "start" | "center";
  theme?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  actionLabel,
  actionHref,
  alignment = "start",
  theme = "light",
}: SectionHeadingProps) {
  const isStart = alignment === "start";
  const hasAction = actionLabel && actionHref;

  return (
    <div className={`${styles.container} ${styles[alignment]} ${styles[theme]}`}>
      <div className={hasAction && isStart ? styles.headerWithAction : ""}>
        <div className={styles.textContent}>
          {eyebrow && <div className={styles.eyebrow}>{eyebrow}</div>}
          <h2 className={styles.title}>{title}</h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>
        
        {hasAction && (
          <div className={styles.action}>
            <ActionLink
              href={actionHref}
              variant={theme === "light" ? "secondary" : "inverse"}
            >
              {actionLabel}
            </ActionLink>
          </div>
        )}
      </div>
    </div>
  );
}
