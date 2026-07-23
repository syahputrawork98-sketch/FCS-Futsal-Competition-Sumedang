import React from "react";
import type { StandingsStatus, StandingsTeamRow } from "../types/standings.types";
import styles from "./mobile-standings-row-details.module.css";

type MobileStandingsRowDetailsProps = {
  row: StandingsTeamRow;
  id: string;
  groupStatus?: StandingsStatus;
};

export function MobileStandingsRowDetails({ row, id, groupStatus }: MobileStandingsRowDetailsProps) {
  const getQualificationBadge = () => {
    if (row.qualificationStatus === "qualified") {
      return <span className={styles.statusQualified}>Lolos Ke Semifinal</span>;
    }
    if (row.qualificationStatus === "eliminated") {
      return <span className={styles.statusEliminated}>Gugur</span>;
    }
    if (row.rankingResolution === "unresolved_tie") {
      return <span className={styles.statusPending}>Menunggu Keputusan</span>;
    }
    if (groupStatus === "provisional") {
      return <span className={styles.statusPending}>Menunggu Hasil</span>;
    }
    return <span className={styles.statusPending}>Belum Ditentukan</span>;
  };

  const isNotStarted = groupStatus === "not_started";
  const formatVal = (v: number) => (isNotStarted ? "—" : `${v}`);

  return (
    <div id={id} className={styles.detailsContainer}>
      <div>
        <span className={styles.itemLabel}>Menang: </span>
        <strong className={styles.itemValue}>{formatVal(row.won)}</strong>
      </div>
      <div>
        <span className={styles.itemLabel}>Gol Memasukkan (GM): </span>
        <strong className={styles.itemValue}>{formatVal(row.goalsFor)}</strong>
      </div>
      <div>
        <span className={styles.itemLabel}>Seri: </span>
        <strong className={styles.itemValue}>{formatVal(row.drawn)}</strong>
      </div>
      <div>
        <span className={styles.itemLabel}>Gol Kebobolan (GK): </span>
        <strong className={styles.itemValue}>{formatVal(row.goalsAgainst)}</strong>
      </div>
      <div>
        <span className={styles.itemLabel}>Kalah: </span>
        <strong className={styles.itemValue}>{formatVal(row.lost)}</strong>
      </div>
      <div>
        <span className={styles.itemLabel}>Status: </span>
        {getQualificationBadge()}
      </div>
    </div>
  );
}
