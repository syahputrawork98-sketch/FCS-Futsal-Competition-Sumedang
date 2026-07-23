import React from "react";
import type { StandingsTeamRow } from "../types/standings.types";
import styles from "./mobile-standings-row-details.module.css";

type MobileStandingsRowDetailsProps = {
  row: StandingsTeamRow;
  id: string;
};

export function MobileStandingsRowDetails({ row, id }: MobileStandingsRowDetailsProps) {
  const getQualificationBadge = () => {
    switch (row.qualificationStatus) {
      case "qualified":
        return <span className={styles.statusQualified}>Lolos Ke Semifinal</span>;
      case "eliminated":
        return <span className={styles.statusEliminated}>Gugur</span>;
      case "pending":
      default:
        return <span className={styles.statusPending}>Menunggu Keputusan</span>;
    }
  };

  return (
    <div id={id} className={styles.detailsContainer}>
      <div>
        <span className={styles.itemLabel}>Menang: </span>
        <strong className={styles.itemValue}>{row.won}</strong>
      </div>
      <div>
        <span className={styles.itemLabel}>Gol Memasukkan (GM): </span>
        <strong className={styles.itemValue}>{row.goalsFor}</strong>
      </div>
      <div>
        <span className={styles.itemLabel}>Seri: </span>
        <strong className={styles.itemValue}>{row.drawn}</strong>
      </div>
      <div>
        <span className={styles.itemLabel}>Gol Kebobolan (GK): </span>
        <strong className={styles.itemValue}>{row.goalsAgainst}</strong>
      </div>
      <div>
        <span className={styles.itemLabel}>Kalah: </span>
        <strong className={styles.itemValue}>{row.lost}</strong>
      </div>
      <div>
        <span className={styles.itemLabel}>Status: </span>
        {getQualificationBadge()}
      </div>
    </div>
  );
}
