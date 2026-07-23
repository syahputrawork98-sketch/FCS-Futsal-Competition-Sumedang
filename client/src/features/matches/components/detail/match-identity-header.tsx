import React from "react";
import type { CompetitionMetadata, MatchGroup, MatchPhase, MatchRecord, MatchTeam } from "../../types/matches.types";
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
      </div>

      <h1 className={styles.title}>
        {teamA.name} vs {teamB.name}
      </h1>

      <p className={styles.subtitle}>{competition.name}</p>
    </header>
  );
}
