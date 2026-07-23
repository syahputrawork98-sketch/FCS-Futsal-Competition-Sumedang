import React from "react";
import styles from "./match-list-skeleton.module.css";

export function MatchListSkeleton() {
  return (
    <div className={styles.container} aria-hidden="true">
      <div className={styles.headerSkeleton} />
      <div className={styles.toolbarSkeleton} />
      <div className={styles.groupSkeleton}>
        <div className={styles.dateSkeleton} />
        <div className={styles.cardSkeleton} />
        <div className={styles.cardSkeleton} />
      </div>
      <div className={styles.groupSkeleton}>
        <div className={styles.dateSkeleton} />
        <div className={styles.cardSkeleton} />
      </div>
    </div>
  );
}
