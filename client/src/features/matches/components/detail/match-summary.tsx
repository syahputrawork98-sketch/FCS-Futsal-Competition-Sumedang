import React from "react";
import { FileText } from "lucide-react";
import type { MatchGoalDetail } from "../../types/match-detail.types";
import type { MatchRecord, MatchTeam } from "../../types/matches.types";
import styles from "./match-summary.module.css";

type MatchSummaryProps = {
  match: MatchRecord;
  teamA: MatchTeam;
  teamB: MatchTeam;
  goals: MatchGoalDetail[];
  winnerTeamId: string | null;
};

export function MatchSummary({
  match,
  teamA,
  teamB,
  goals,
  winnerTeamId,
}: MatchSummaryProps) {
  const teamAGoals = goals.filter((g) => g.teamId === teamA.id);
  const teamBGoals = goals.filter((g) => g.teamId === teamB.id);

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

      {/* Scorers Grid with Assists */}
      <div className={styles.grid}>
        {/* Team A Goals */}
        <div className={styles.teamScorers}>
          <span className={styles.teamHeader}>{teamA.name}</span>
          {teamAGoals.length > 0 ? (
            <ul className={styles.scorersList}>
              {teamAGoals.map((g) => (
                <li key={g.eventId} className={styles.scorerItem}>
                  <span>⚽ {g.player.displayName} ({g.minute}&apos;)</span>
                  {g.relatedPlayer && (
                    <span className={styles.minutes}>
                      — Assist: {g.relatedPlayer.displayName}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <span className={styles.emptyScorers}>Tidak ada gol</span>
          )}
        </div>

        {/* Team B Goals */}
        <div className={styles.teamScorers}>
          <span className={styles.teamHeader}>{teamB.name}</span>
          {teamBGoals.length > 0 ? (
            <ul className={styles.scorersList}>
              {teamBGoals.map((g) => (
                <li key={g.eventId} className={styles.scorerItem}>
                  <span>⚽ {g.player.displayName} ({g.minute}&apos;)</span>
                  {g.relatedPlayer && (
                    <span className={styles.minutes}>
                      — Assist: {g.relatedPlayer.displayName}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <span className={styles.emptyScorers}>Tidak ada gol</span>
          )}
        </div>
      </div>

      {/* Penalty note if present (Rule 1 & Requirement 1) */}
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
