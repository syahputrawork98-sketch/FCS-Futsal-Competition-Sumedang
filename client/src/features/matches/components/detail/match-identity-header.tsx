import React from "react";
import type { CompetitionMetadata, MatchGroup, MatchPhase, MatchRecord, MatchTeam } from "../../types/matches.types";
import { getMatchStatusLabel, getResultStatusLabel } from "../../lib/match-formatters";
import styles from "./match-identity-header.module.css";

type MatchIdentityHeaderProps = {
  match: MatchRecord;
  phase: MatchPhase;
  group?: MatchGroup | null;
  teamA: MatchTeam;
  teamB: MatchTeam;
  competition: CompetitionMetadata;
};

export function MatchIdentityHeader({
  match,
  phase,
  group,
  teamA,
  teamB,
  competition,
}: MatchIdentityHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.eyebrow}>
        <span className={styles.matchNum}>Pertandingan {match.number}</span>
        <span className={styles.phase}>
          {phase.name} {group ? `• ${group.name}` : ""}
        </span>
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            padding: "0.125rem 0.5rem",
            borderRadius: "9999px",
            background: "rgba(16, 185, 129, 0.15)",
            color: "#34d399",
            border: "1px solid rgba(52, 211, 153, 0.3)",
            textTransform: "uppercase",
          }}
        >
          {getMatchStatusLabel(match.status)}
        </span>
        {match.resultStatus && match.status === "finished" && (
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              padding: "0.125rem 0.5rem",
              borderRadius: "9999px",
              background: "rgba(59, 130, 246, 0.15)",
              color: "#60a5fa",
              border: "1px solid rgba(96, 165, 250, 0.3)",
              textTransform: "uppercase",
            }}
          >
            {getResultStatusLabel(match.resultStatus)}
          </span>
        )}
      </div>

      <h1 className={styles.title}>
        {teamA.name} vs {teamB.name}
      </h1>

      <p className={styles.subtitle}>{competition.name}</p>
    </header>
  );
}
