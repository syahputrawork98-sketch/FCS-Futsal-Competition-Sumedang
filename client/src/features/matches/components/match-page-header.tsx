import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import styles from "./match-page-header.module.css";

type MatchPageHeaderProps = {
  totalResultsCount: number;
  isFiltered: boolean;
};

export function MatchPageHeader({ totalResultsCount, isFiltered }: MatchPageHeaderProps) {
  return (
    <header className={styles.header}>
      {/* Breadcrumb nav */}
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <Link href="/" className={styles.breadcrumbLink}>
          Beranda
        </Link>
        <ChevronRight size={14} aria-hidden="true" />
        <span className={styles.breadcrumbCurrent} aria-current="page">
          Pertandingan
        </span>
      </nav>

      <span className={styles.eyebrow}>Pertandingan</span>
      <h1 className={styles.title}>Jadwal dan Hasil</h1>

      <div className={styles.descriptionRow}>
        <p className={styles.description}>
          Temukan seluruh pertandingan FCS Industrial Cup Sumedang 2026.
        </p>

        <div className={styles.resultSummary} aria-live="polite">
          {isFiltered
            ? `${totalResultsCount} pertandingan ditemukan`
            : `${totalResultsCount} pertandingan • Kompetisi selesai`}
        </div>
      </div>
    </header>
  );
}
