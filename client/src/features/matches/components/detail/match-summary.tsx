import React from "react";
import { FileText } from "lucide-react";
import type { MatchScorerSummary } from "../../types/match-detail.types";
import type { MatchRecord, MatchTeam } from "../../types/matches.types";
import styles from "./match-summary.module.css";

type MatchSummaryProps = {
  match: MatchRecord;
  teamA: MatchTeam;
  teamB: MatchTeam;
  scorers: MatchScorerSummary[];
};

export function MatchSummary({
  match,
  teamA,
  teamB,
  scorers,
}: MatchSummaryProps) {
  const teamAScorers = scorers.filter((s) => s.teamId === teamA.id);
  const teamBScorers = scorers.filter((s) => s.teamId === teamB.id);

  return (
    <section id="ringkasan" className={styles.card} aria-label="Ringkasan Pertandingan">
      <h3 className={styles.title}>
        <FileText size={18} aria-hidden="true" color="var(--color-accent-blue, #38bdf8)" />
        <span>Ringkasan Pertandingan</span>
      </h3>

      <div className={styles.grid}>
        {/* Team A Scorers */}
        <div className={styles.teamScorers}>
          <span className={styles.teamHeader}>{teamA.name}</span>
          {teamAScorers.length > 0 ? (
            <ul className={styles.scorersList}>
              {teamAScorers.map((item) => (
                <li key={item.player.id} className={styles.scorerItem}>
                  <span>⚽ {item.player.displayName}</span>
                  <span className={styles.minutes}>
                    ({item.minutes.map((m) => `${m}'`).join(", ")})
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <span className={styles.emptyScorers}>Tidak ada gol</span>
          )}
        </div>

        {/* Team B Scorers */}
        <div className={styles.teamScorers}>
          <span className={styles.teamHeader}>{teamB.name}</span>
          {teamBScorers.length > 0 ? (
            <ul className={styles.scorersList}>
              {teamBScorers.map((item) => (
                <li key={item.player.id} className={styles.scorerItem}>
                  <span>⚽ {item.player.displayName}</span>
                  <span className={styles.minutes}>
                    ({item.minutes.map((m) => `${m}'`).join(", ")})
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <span className={styles.emptyScorers}>Tidak ada gol</span>
          )}
        </div>
      </div>

      {/* Match note or penalty note if present */}
      {match.note && <div className={styles.noteBox}>Catatan: {match.note}</div>}
    </section>
  );
}
