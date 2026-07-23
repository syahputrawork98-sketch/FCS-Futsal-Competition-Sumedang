import React from "react";
import Link from "next/link";
import { SearchX, ArrowLeft } from "lucide-react";
import styles from "./match-detail-not-found.module.css";

type MatchDetailNotFoundProps = {
  matchId?: string;
};

export function MatchDetailNotFound({ matchId }: MatchDetailNotFoundProps) {
  return (
    <div className={styles.container} role="status">
      <div className={styles.iconBox}>
        <SearchX size={32} aria-hidden="true" />
      </div>

      <h2 className={styles.title}>Pertandingan Tidak Ditemukan</h2>

      <p className={styles.description}>
        {matchId ? (
          <>
            Data pertandingan dengan ID <span className={styles.idBadge}>{matchId}</span> tidak ditemukan dalam sistem prototype FCS Industrial Cup Sumedang 2026.
          </>
        ) : (
          "Halaman pertandingan yang Anda cari tidak tersedia."
        )}
      </p>

      <Link href="/pertandingan" className={styles.backButton}>
        <ArrowLeft size={16} aria-hidden="true" />
        <span>Kembali ke Jadwal & Hasil Pertandingan</span>
      </Link>
    </div>
  );
}
