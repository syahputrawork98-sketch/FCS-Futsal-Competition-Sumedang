import React from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import styles from "./matches-error-state.module.css";

type MatchesErrorStateProps = {
  message?: string;
  onReset?: () => void;
};

export function MatchesErrorState({ message, onReset }: MatchesErrorStateProps) {
  return (
    <div className={styles.container} role="alert">
      <div className={styles.iconBox}>
        <AlertTriangle size={28} />
      </div>
      <h3 className={styles.title}>Gagal Memuat Pertandingan</h3>
      <p className={styles.message}>
        {message || "Pertandingan belum dapat ditampilkan. Silakan muat ulang halaman atau coba lagi setelah beberapa saat."}
      </p>
      {onReset && (
        <button type="button" className={styles.retryButton} onClick={onReset}>
          <RefreshCw size={16} />
          Coba Lagi
        </button>
      )}
    </div>
  );
}
