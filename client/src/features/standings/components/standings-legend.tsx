import React from "react";
import styles from "./standings-legend.module.css";

const LEGEND_ITEMS = [
  { abbr: "Pos", label: "Posisi" },
  { abbr: "M", label: "Main" },
  { abbr: "Mng", label: "Menang" },
  { abbr: "S", label: "Seri" },
  { abbr: "K", label: "Kalah" },
  { abbr: "GM", label: "Gol Memasukkan" },
  { abbr: "GK", label: "Gol Kebobolan" },
  { abbr: "SG", label: "Selisih Gol" },
  { abbr: "Poin", label: "Total Poin" },
];

export function StandingsLegend() {
  return (
    <aside className={styles.card} aria-label="Legenda Singkatan Tabel Klasemen">
      <h4 className={styles.title}>Legenda Singkatan</h4>
      <div className={styles.grid}>
        {LEGEND_ITEMS.map((item) => (
          <div key={item.abbr} className={styles.item}>
            <span className={styles.abbr}>{item.abbr}:</span>
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
