import React from "react";
import Link from "next/link";
import { ArrowRight, Lock } from "lucide-react";
import styles from "./standings-related-navigation.module.css";

export function StandingsRelatedNavigation() {
  return (
    <nav className={styles.card} aria-label="Navigasi Halaman Terkait">
      <h3 className={styles.title}>Navigasi Terkait</h3>
      <div className={styles.grid}>
        <Link href="/pertandingan" className={`${styles.navCard} ${styles.activeCard}`}>
          <div className={styles.cardTitle}>
            <span>Semua Pertandingan</span>
            <ArrowRight size={16} color="var(--color-accent-blue, #38bdf8)" aria-hidden="true" />
          </div>
          <span className={styles.cardDesc}>Lihat hasil lengkap dan jadwal 16 laga</span>
        </Link>

        <div className={`${styles.navCard} ${styles.disabledCard}`}>
          <div className={styles.cardTitle}>
            <span>Bagan Fase Gugur</span>
            <Lock size={14} aria-hidden="true" />
          </div>
          <span className={styles.cardDesc}>Segera tersedia pada Plan 07</span>
        </div>

        <div className={`${styles.navCard} ${styles.disabledCard}`}>
          <div className={styles.cardTitle}>
            <span>Daftar Tim</span>
            <Lock size={14} aria-hidden="true" />
          </div>
          <span className={styles.cardDesc}>Fitur detail tim segera tersedia</span>
        </div>
      </div>
    </nav>
  );
}
