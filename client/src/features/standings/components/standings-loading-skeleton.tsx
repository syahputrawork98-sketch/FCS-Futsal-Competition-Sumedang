import React from "react";
import styles from "./standings-loading-skeleton.module.css";

export function StandingsLoadingSkeleton() {
  return (
    <div className={styles.container} aria-label="Memuat Klasemen...">
      <div className={styles.skeletonHeader} />
      <div className={styles.skeletonCard} />
      <div className={styles.skeletonCard} />
    </div>
  );
}
