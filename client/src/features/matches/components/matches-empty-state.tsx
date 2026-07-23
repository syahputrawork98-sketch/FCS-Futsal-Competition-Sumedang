import React from "react";
import { SearchX, CalendarX2, Radio, RotateCcw } from "lucide-react";
import type { MatchTab } from "../types/matches.types";
import styles from "./matches-empty-state.module.css";

type MatchesEmptyStateProps = {
  tab: MatchTab;
  isFiltered: boolean;
  onResetFilters?: () => void;
  onSwitchToResultsTab?: () => void;
};

export function MatchesEmptyState({
  tab,
  isFiltered,
  onResetFilters,
  onSwitchToResultsTab,
}: MatchesEmptyStateProps) {
  if (tab === "schedule") {
    return (
      <div className={styles.emptyContainer}>
        <div className={styles.iconBox}>
          <CalendarX2 size={28} />
        </div>
        <h3 className={styles.title}>Belum Ada Pertandingan Terjadwal</h3>
        <p className={styles.description}>
          Kompetisi ini telah selesai dan seluruh pertandingan telah dilaksanakan. Seluruh hasil resmi dapat dilihat pada tab Hasil.
        </p>
        {onSwitchToResultsTab && (
          <button
            type="button"
            className={styles.actionButton}
            onClick={onSwitchToResultsTab}
          >
            Lihat Tab Hasil
          </button>
        )}
      </div>
    );
  }

  if (tab === "live") {
    return (
      <div className={styles.emptyContainer}>
        <div className={styles.iconBox}>
          <Radio size={28} />
        </div>
        <h3 className={styles.title}>Tidak Ada Pertandingan Berlangsung</h3>
        <p className={styles.description}>
          Saat ini tidak ada pertandingan futsal yang sedang berlangsung secara langsung.
        </p>
        {onSwitchToResultsTab && (
          <button
            type="button"
            className={styles.actionButton}
            onClick={onSwitchToResultsTab}
          >
            Lihat Hasil Pertandingan
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={styles.emptyContainer}>
      <div className={styles.iconBox}>
        <SearchX size={28} />
      </div>
      <h3 className={styles.title}>Pertandingan Tidak Ditemukan</h3>
      <p className={styles.description}>
        Tidak ada pertandingan yang cocok dengan kata kunci atau kriteria filter yang Anda pilih. Ubah atau reset filter untuk menampilkan pertandingan lainnya.
      </p>
      {isFiltered && onResetFilters && (
        <button
          type="button"
          className={styles.actionButton}
          onClick={onResetFilters}
        >
          <RotateCcw size={16} />
          Reset Semua Filter
        </button>
      )}
    </div>
  );
}
