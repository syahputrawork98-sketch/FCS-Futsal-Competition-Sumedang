import React from "react";
import { Clock, MapPin } from "lucide-react";
import type { MatchRecord, MatchTeam, MatchPhase, MatchGroup, MatchVenue } from "../types/matches.types";
import { formatMatchTime, getMatchStatusLabel, getResultStatusLabel } from "../lib/match-formatters";
import { TeamIdentity } from "./team-identity";
import styles from "./match-card.module.css";

type MatchCardProps = {
  match: MatchRecord;
  teamA: MatchTeam;
  teamB: MatchTeam;
  phase: MatchPhase;
  group?: MatchGroup | null;
  venue?: MatchVenue | null;
};

export function MatchCard({
  match,
  teamA,
  teamB,
  phase,
  group,
  venue,
}: MatchCardProps) {
  const hasScore = match.teamAScore !== null && match.teamBScore !== null;
  const isTeamAWinner =
    hasScore &&
    (match.teamAScore! > match.teamBScore! ||
      match.penaltyResult?.winnerTeamId === match.teamAId);
  const isTeamBWinner =
    hasScore &&
    (match.teamBScore! > match.teamAScore! ||
      match.penaltyResult?.winnerTeamId === match.teamBId);

  return (
    <article className={styles.card} aria-label={`Pertandingan ${match.number}: ${teamA.name} vs ${teamB.name}`}>
      {/* Header Info */}
      <div className={styles.cardHeader}>
        <div className={styles.metaGroup}>
          <span className={styles.matchNumber}>No. {match.number}</span>
          <span className={styles.phaseBadge}>
            {phase.name}
            {group ? ` • ${group.name}` : ""}
          </span>
        </div>

        <div className={styles.badgeGroup}>
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

      {/* Teams & Score Layout */}
      <div className={styles.teamsLayout}>
        <div className={`${styles.teamSide} ${styles.teamSideLeft}`}>
          <TeamIdentity team={teamA} reversed />
        </div>

        <div className={styles.scoreContainer}>
          {hasScore ? (
            <>
              <span
                className={`${styles.score} ${
                  isTeamAWinner ? styles.winnerScore : ""
                }`}
              >
                {match.teamAScore}
              </span>
              <span className={styles.scoreDivider}>–</span>
              <span
                className={`${styles.score} ${
                  isTeamBWinner ? styles.winnerScore : ""
                }`}
              >
                {match.teamBScore}
              </span>
            </>
          ) : (
            <span className={styles.score}>VS</span>
          )}
        </div>

        <div className={`${styles.teamSide} ${styles.teamSideRight}`}>
          <TeamIdentity team={teamB} />
        </div>
      </div>

      {/* Penalty shootout notice if present */}
      {match.penaltyResult && (
        <div className={styles.penaltyBox}>
          <span>⚽ Adu Penalti:</span>
          <strong>
            {match.penaltyResult.winnerTeamId === teamA.id ? teamA.name : teamB.name}{" "}
            menang {match.penaltyResult.teamAScore}–{match.penaltyResult.teamBScore}
          </strong>
        </div>
      )}

      {/* Footer Info */}
      <div className={styles.cardFooter}>
        <div className={styles.infoDetails}>
          <div className={styles.infoItem}>
            <Clock size={14} aria-hidden="true" />
            <span>{formatMatchTime(match.startTime)} WIB</span>
          </div>

          {venue && (
            <div className={styles.infoItem}>
              <MapPin size={14} aria-hidden="true" />
              <span>{venue.name}</span>
            </div>
          )}
        </div>

        {/* Directive 4: Non-interactive disabled badge for route detail */}
        <span className={styles.detailUnavailableBadge}>
          Detail segera tersedia
        </span>
      </div>
    </article>
  );
}
