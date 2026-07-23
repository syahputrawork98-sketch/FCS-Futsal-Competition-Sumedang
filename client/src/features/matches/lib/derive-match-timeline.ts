import type {
  MatchEventRecord,
  MatchPlayerSummary,
  ResolvedMatchTimelineItem,
} from "../types/match-detail.types";
import type { MatchTeam } from "../types/matches.types";
import { matchPlayersPrototypeData } from "../data/match-participants-prototype-data";

export function deriveMatchTimeline(
  events: MatchEventRecord[],
  teamA: MatchTeam,
  teamB: MatchTeam
): ResolvedMatchTimelineItem[] {
  const playerMap = new Map<string, MatchPlayerSummary>(
    matchPlayersPrototypeData.map((p) => [p.id, p])
  );

  // Filter only verified events for the target match
  const verifiedEvents = events.filter((e) => e.verificationStatus === "verified");

  // Sort events by minute ASC, then by id ASC
  const sortedEvents = [...verifiedEvents].sort((a, b) => {
    if (a.minute !== b.minute) return a.minute - b.minute;
    return a.id.localeCompare(b.id);
  });

  let teamAScoreCounter = 0;
  let teamBScoreCounter = 0;

  return sortedEvents.map((evt) => {
    const team = evt.teamId === teamA.id ? teamA : teamB;
    const player = evt.playerId ? playerMap.get(evt.playerId) || null : null;
    const relatedPlayer = evt.relatedPlayerId
      ? playerMap.get(evt.relatedPlayerId) || null
      : null;

    let scoreAfterEvent: { teamAScore: number; teamBScore: number } | null = null;

    if (evt.type === "goal") {
      if (evt.teamId === teamA.id) {
        teamAScoreCounter += 1;
      } else if (evt.teamId === teamB.id) {
        teamBScoreCounter += 1;
      }
      scoreAfterEvent = {
        teamAScore: teamAScoreCounter,
        teamBScore: teamBScoreCounter,
      };
    } else if (evt.type === "own_goal") {
      // Own goal adds score to opposing team
      if (evt.teamId === teamA.id) {
        teamBScoreCounter += 1;
      } else if (evt.teamId === teamB.id) {
        teamAScoreCounter += 1;
      }
      scoreAfterEvent = {
        teamAScore: teamAScoreCounter,
        teamBScore: teamBScoreCounter,
      };
    }

    return {
      ...evt,
      team,
      player,
      relatedPlayer,
      scoreAfterEvent,
    };
  });
}
