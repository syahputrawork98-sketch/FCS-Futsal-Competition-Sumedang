import React from "react";
import styles from "./match-detail-skeleton.module.css";

export function MatchDetailSkeleton() {
  return (
    <div className={styles.skeletonContainer} aria-busy="true" aria-label="Memuat detail pertandingan">
      <div className={`${styles.box} ${styles.headerSkeleton}`} />
      <div className={`${styles.box} ${styles.scoreboardSkeleton}`} />
      <div className={`${styles.box} ${styles.metadataSkeleton}`} />
      <div className={`${styles.box} ${styles.contentSkeleton}`} />
    </div>
  );
}
