"use client";

import React from "react";
import Link from "next/link";
import { AlertTriangle, RotateCcw, ArrowLeft } from "lucide-react";
import styles from "./match-detail-error-state.module.css";

type MatchDetailErrorStateProps = {
  reset?: () => void;
};

export function MatchDetailErrorState({ reset }: MatchDetailErrorStateProps) {
  return (
    <div className={styles.container} role="alert">
      <div className={styles.iconBox}>
        <AlertTriangle size={28} aria-hidden="true" />
      </div>

      <h2 className={styles.title}>Terjadi Kesalahan</h2>

      <p className={styles.description}>
        Gagal memuat detail pertandingan. Silakan coba muat ulang atau kembali ke daftar pertandingan.
      </p>

      <div className={styles.actionRow}>
        {reset && (
          <button type="button" onClick={reset} className={styles.resetButton}>
            <RotateCcw size={16} aria-hidden="true" />
            <span>Coba Lagi</span>
          </button>
        )}
        <Link href="/pertandingan" className={styles.backLink}>
          <ArrowLeft size={16} aria-hidden="true" />
          <span>Ke Pertandingan</span>
        </Link>
      </div>
    </div>
  );
}
