import React from "react";
import { Info } from "lucide-react";
import styles from "./match-section-unavailable.module.css";

type MatchSectionUnavailableProps = {
  id?: string;
  title: string;
  description: string;
};

export function MatchSectionUnavailable({
  id,
  title,
  description,
}: MatchSectionUnavailableProps) {
  return (
    <section id={id} className={styles.card} aria-label={title}>
      <div className={styles.iconBox}>
        <Info size={20} aria-hidden="true" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
}
