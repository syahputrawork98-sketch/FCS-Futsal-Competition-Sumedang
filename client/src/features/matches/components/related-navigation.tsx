import React from "react";
import Link from "next/link";
import { Table, GitMerge, Shield, ArrowRight } from "lucide-react";
import styles from "./related-navigation.module.css";

export function RelatedNavigation() {
  return (
    <section className={styles.container} aria-label="Navigasi Terkait">
      <h3 className={styles.title}>Lihat Juga</h3>
      <div className={styles.grid}>
        <Link href="/klasemen" className={styles.cardActive}>
          <div className={styles.cardInfo}>
            <Table size={18} className={styles.iconActive} aria-hidden="true" />
            <span className={styles.labelActive}>Klasemen Grup</span>
          </div>
          <ArrowRight size={16} color="var(--color-accent-blue, #38bdf8)" aria-hidden="true" />
        </Link>

        <div
          className={styles.cardDisabled}
          title="Bracket Fase Gugur akan segera hadir pada tahap berikutnya"
        >
          <div className={styles.cardInfo}>
            <GitMerge size={18} className={styles.icon} aria-hidden="true" />
            <span className={styles.label}>Bracket Fase Gugur</span>
          </div>
          <span className={styles.upcomingBadge}>Segera</span>
        </div>

        <div
          className={styles.cardDisabled}
          title="Daftar Tim Peserta akan segera hadir pada tahap berikutnya"
        >
          <div className={styles.cardInfo}>
            <Shield size={18} className={styles.icon} aria-hidden="true" />
            <span className={styles.label}>Daftar Tim Peserta</span>
          </div>
          <span className={styles.upcomingBadge}>Segera</span>
        </div>
      </div>
    </section>
  );
}
