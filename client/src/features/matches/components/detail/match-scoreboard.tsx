import React from "react";
import type { MatchRecord, MatchTeam } from "../../types/matches.types";
import { getMatchStatusLabel, getResultStatusLabel } from "../../lib/match-formatters";
import styles from "./match-scoreboard.module.css";

type MatchScoreboardProps = {
  match: MatchRecord;
  teamA: MatchTeam;
  teamB: MatchTeam;
  winnerTeamId: string | null;
};

export function MatchScoreboard({
  match,
  teamA,
  teamB,
  winnerTeamId,
}: MatchScoreboardProps) {
  const hasScore = match.teamAScore !== null && match.teamBScore !== null;
  const isTeamAWinner = winnerTeamId === teamA.id;
  const isTeamBWinner = winnerTeamId === teamB.id;

  return (
    <section className={styles.scoreboardCard} aria-label="Scoreboard Utama">
      <div className={styles.statusRow}>
        <div className={styles.badges}>
          <span className={styles.statusBadge}>
            {getMatchStatusLabel(match.status)}
          </span>
          {match.resultStatus && (
            <span className={styles.officialBadge}>
              {getResultStatusLabel(match.resultStatus)}
            </span>
          )}
        </div>
      </div>

      <div className={styles.teamsGrid}>
        {/* Team A */}
        <div className={styles.teamColumn}>
          <div className={styles.logoWrapper}>
            {teamA.logo.src ? (
              <img
                src={teamA.logo.src}
                alt={teamA.logo.alt}
                className={styles.logoImg}
              />
            ) : (
              <span className={styles.logoFallback}>
                {teamA.shortName || teamA.name.slice(0, 3).toUpperCase()}
              </span>
            )}
          </div>
          <h2 className={styles.teamName}>{teamA.name}</h2>
          {isTeamAWinner && <span className={styles.winnerTag}>🏆 Pemenang</span>}
        </div>

        {/* Score Box */}
        <div className={styles.scoreBox} aria-label={`Skor ${match.teamAScore} - ${match.teamBScore}`}>
          {hasScore ? (
            <>
              <span
                className={`${styles.scoreDigit} ${
                  isTeamAWinner ? styles.winnerScore : ""
                }`}
              >
                {match.teamAScore}
              </span>
              <span className={styles.scoreDivider}>–</span>
              <span
                className={`${styles.scoreDigit} ${
                  isTeamBWinner ? styles.winnerScore : ""
                }`}
              >
                {match.teamBScore}
              </span>
            </>
          ) : (
            <span className={styles.scoreDigit}>VS</span>
          )}
        </div>

        {/* Team B */}
        <div className={styles.teamColumn}>
          <div className={styles.logoWrapper}>
            {teamB.logo.src ? (
              <img
                src={teamB.logo.src}
                alt={teamB.logo.alt}
                className={styles.logoImg}
              />
            ) : (
              <span className={styles.logoFallback}>
                {teamB.shortName || teamB.name.slice(0, 3).toUpperCase()}
              </span>
            )}
          </div>
          <h2 className={styles.teamName}>{teamB.name}</h2>
          {isTeamBWinner && <span className={styles.winnerTag}>🏆 Pemenang</span>}
        </div>
      </div>

      {/* Rule 1: Penalty Shootout Banner for PRT013 (display penaltyResult properties only) */}
      {match.penaltyResult && (
        <div className={styles.penaltyBanner}>
          <span>⚽ Adu Penalti</span>
          <strong>
            {match.penaltyResult.winnerTeamId === teamA.id ? teamA.name : teamB.name}{" "}
            menang adu penalti {match.penaltyResult.teamAScore}–{match.penaltyResult.teamBScore}
          </strong>
        </div>
      )}
    </section>
  );
}
