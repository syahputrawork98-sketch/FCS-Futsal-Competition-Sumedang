import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { MatchRecord, MatchTeam } from "../../types/matches.types";
import { formatConciseIndonesianDate } from "../../lib/match-formatters";
import { matchesPrototypeData } from "../../data/matches-prototype-data";
import styles from "./match-navigation.module.css";

type MatchNavigationProps = {
  previousMatch: MatchRecord | null;
  nextMatch: MatchRecord | null;
};

export function MatchNavigation({
  previousMatch,
  nextMatch,
}: MatchNavigationProps) {
  const teamMap = new Map<string, MatchTeam>(
    matchesPrototypeData.teams.map((t) => [t.id, t])
  );

  const getTeamsText = (m: MatchRecord) => {
    const tA = teamMap.get(m.teamAId)?.name || m.teamAId;
    const tB = teamMap.get(m.teamBId)?.name || m.teamBId;
    return `${tA} vs ${tB}`;
  };

  const getScoreText = (m: MatchRecord) => {
    if (m.teamAScore !== null && m.teamBScore !== null) {
      return `Skor: ${m.teamAScore}–${m.teamBScore}`;
    }
    return "Belum Dimulai";
  };

  return (
    <nav className={styles.container} aria-label="Navigasi Laga">
      {/* Previous Match */}
      {previousMatch ? (
        <Link
          href={`/pertandingan/${previousMatch.id}`}
          className={styles.card}
          aria-label={`Laga Sebelumnya: ${getTeamsText(previousMatch)}`}
        >
          <div className={styles.labelRow}>
            <ArrowLeft size={14} aria-hidden="true" />
            <span>Laga Sebelumnya (No. {previousMatch.number})</span>
          </div>
          <span className={styles.teams}>{getTeamsText(previousMatch)}</span>
          <span className={styles.details}>
            {getScoreText(previousMatch)} • {formatConciseIndonesianDate(previousMatch.date)}
          </span>
        </Link>
      ) : (
        <div className={styles.emptyCard} aria-hidden="true" />
      )}

      {/* Next Match */}
      {nextMatch ? (
        <Link
          href={`/pertandingan/${nextMatch.id}`}
          className={styles.card}
          aria-label={`Laga Berikutnya: ${getTeamsText(nextMatch)}`}
          style={{ textAlign: "right" }}
        >
          <div className={`${styles.labelRow} ${styles.labelRowRight}`}>
            <span>Laga Berikutnya (No. {nextMatch.number})</span>
            <ArrowRight size={14} aria-hidden="true" />
          </div>
          <span className={styles.teams}>{getTeamsText(nextMatch)}</span>
          <span className={styles.details}>
            {getScoreText(nextMatch)} • {formatConciseIndonesianDate(nextMatch.date)}
          </span>
        </Link>
      ) : (
        <div className={styles.emptyCard} aria-hidden="true" />
      )}
    </nav>
  );
}
