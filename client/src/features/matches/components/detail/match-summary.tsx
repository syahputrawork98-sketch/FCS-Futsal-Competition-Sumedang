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
  winnerTeamId: string | null;
};

export function MatchSummary({
  match,
  teamA,
  teamB,
  scorers,
  winnerTeamId,
}: MatchSummaryProps) {
  const teamAScorers = scorers.filter((s) => s.teamId === teamA.id);
  const teamBScorers = scorers.filter((s) => s.teamId === teamB.id);

  const winnerTeam = winnerTeamId
    ? winnerTeamId === teamA.id
      ? teamA
      : teamB
    : null;

  return (
    <section id="ringkasan" className={styles.card} aria-label="Ringkasan Pertandingan">
      <h3 className={styles.title}>
        <FileText size={18} aria-hidden="true" color="var(--color-accent-blue, #38bdf8)" />
        <span>Ringkasan Hasil & Pencetak Gol</span>
      </h3>

      {/* Final result & Winner banner */}
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
        {match.teamAScore !== null && match.teamBScore !== null && (
          <span style={{ fontSize: "1rem", fontWeight: 800, color: "#ffffff" }}>
            Skor Akhir: {match.teamAScore} – {match.teamBScore}
          </span>
        )}
        {winnerTeam && (
          <span style={{ fontSize: "0.875rem", fontWeight: 700, color: "#f59e0b" }}>
            🏆 Pemenang: {winnerTeam.name}
          </span>
        )}
      </div>

      {/* Scorers Grid */}
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

      {/* Penalty note if present (Rule 1 & Point 6) */}
      {match.penaltyResult && (
        <div className={styles.noteBox}>
          <strong>Hasil Adu Penalti:</strong> {winnerTeam?.name} menang adu penalti {match.penaltyResult.teamAScore}–{match.penaltyResult.teamBScore}
        </div>
      )}

      {/* Match note if present */}
      {match.note && <div className={styles.noteBox}>Catatan: {match.note}</div>}
    </section>
  );
}
