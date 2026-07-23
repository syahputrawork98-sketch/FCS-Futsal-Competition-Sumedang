import React from "react";
import { Award, Lock } from "lucide-react";
import styles from "./qualification-explanation.module.css";

export function QualificationExplanation() {
  return (
    <section className={styles.card} aria-label="Aturan Kelolosan ke Semifinal">
      <h3 className={styles.title}>
        <Award size={18} color="var(--color-accent-blue, #38bdf8)" aria-hidden="true" />
        <span>Ketentuan Kelolosan Fase Gugur</span>
      </h3>
      <p className={styles.text}>
        Dua tim teratas (posisi 1 dan 2) dari masing-masing grup berhak melaju ke babak semifinal.
      </p>

      <div className={styles.pairings}>
        <div className={styles.pairBox}>
          🥇 Juara Grup A vs 🥈 Runner-up Grup B
        </div>
        <div className={styles.pairBox}>
          🥇 Juara Grup B vs 🥈 Runner-up Grup A
        </div>
      </div>

      <div className={styles.bracketNotice}>
        <Lock size={14} aria-hidden="true" />
        <span>Bagan Fase Gugur (Bracket) segera tersedia pada Plan 07</span>
      </div>
    </section>
  );
}
