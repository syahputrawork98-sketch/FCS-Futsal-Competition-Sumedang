import React from "react";
import type { MatchRecord, MatchTeam } from "../../types/matches.types";
import { formatMatchTime, getMatchStatusLabel, getResultStatusLabel } from "../../lib/match-formatters";
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
  const isFinished = match.status === "finished";
  const isLive = match.status === "live";
  const isScheduled = match.status === "scheduled";
  const isPostponed = match.status === "postponed";
  const isCancelled = match.status === "cancelled";

  const hasScore = (isFinished || isLive) && match.teamAScore !== null && match.teamBScore !== null;

  const isTeamAWinner = isFinished && winnerTeamId === teamA.id;
  const isTeamBWinner = isFinished && winnerTeamId === teamB.id;

  // Safe aria-label
  let scoreAriaLabel = `Pertandingan ${teamA.name} vs ${teamB.name}`;
  if (hasScore) {
    scoreAriaLabel = `Skor ${match.teamAScore} - ${match.teamBScore}`;
  } else if (isScheduled) {
    scoreAriaLabel = `Pertandingan terjadwal kickoff ${formatMatchTime(match.startTime)} WIB`;
  } else if (isPostponed) {
    scoreAriaLabel = "Pertandingan ditunda";
  } else if (isCancelled) {
    scoreAriaLabel = "Pertandingan dibatalkan";
  }

  return (
    <section className={styles.scoreboardCard} aria-label="Scoreboard Utama">
      <div className={styles.statusRow}>
        <div className={styles.badges}>
          <span className={styles.statusBadge}>
            {getMatchStatusLabel(match.status)}
          </span>
          {match.resultStatus && isFinished && (
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
        <div className={styles.scoreBox} aria-label={scoreAriaLabel}>
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
          ) : isScheduled ? (
            <span style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-accent-amber)" }}>
              {formatMatchTime(match.startTime)} WIB
            </span>
          ) : isPostponed ? (
            <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--color-text-muted)" }}>
              Ditunda
            </span>
          ) : isCancelled ? (
            <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "#ef4444" }}>
              Dibatalkan
            </span>
          ) : null}
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

      {/* Penalty Shootout Banner for PRT013 */}
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
