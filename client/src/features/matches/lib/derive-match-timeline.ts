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

  // Filter only verified events
  const verifiedEvents = events.filter((e) => e.verificationStatus === "verified");

  // Sort by minute ASC, then id ASC
  const sortedEvents = [...verifiedEvents].sort((a, b) => {
    if (a.minute !== b.minute) return a.minute - b.minute;
    return a.id.localeCompare(b.id);
  });

  let teamAScoreCounter = 0;
  let teamBScoreCounter = 0;

  const result: ResolvedMatchTimelineItem[] = [];

  for (const evt of sortedEvents) {
    // Validate team ID strictly
    if (evt.teamId !== teamA.id && evt.teamId !== teamB.id) {
      throw new Error(
        `[Timeline Integrity Error] Event ${evt.id} has invalid teamId '${evt.teamId}'. Expected '${teamA.id}' or '${teamB.id}'.`
      );
    }

    const team = evt.teamId === teamA.id ? teamA : teamB;

    let player: MatchPlayerSummary | null = null;
    if (evt.playerId) {
      player = playerMap.get(evt.playerId) || null;
      if (!player) {
        throw new Error(
          `[Timeline Integrity Error] Event ${evt.id} references non-existent playerId '${evt.playerId}'.`
        );
      }
    }

    let relatedPlayer: MatchPlayerSummary | null = null;
    if (evt.relatedPlayerId) {
      relatedPlayer = playerMap.get(evt.relatedPlayerId) || null;
      if (!relatedPlayer) {
        throw new Error(
          `[Timeline Integrity Error] Event ${evt.id} references non-existent relatedPlayerId '${evt.relatedPlayerId}'.`
        );
      }
    }

    let scoreAfterEvent: { teamAScore: number; teamBScore: number } | null = null;

    if (evt.type === "goal") {
      if (evt.teamId === teamA.id) {
        teamAScoreCounter += 1;
      } else {
        teamBScoreCounter += 1;
      }
      scoreAfterEvent = {
        teamAScore: teamAScoreCounter,
        teamBScore: teamBScoreCounter,
      };
    } else if (evt.type === "own_goal") {
      if (evt.teamId === teamA.id) {
        teamBScoreCounter += 1;
      } else {
        teamAScoreCounter += 1;
      }
      scoreAfterEvent = {
        teamAScore: teamAScoreCounter,
        teamBScore: teamBScoreCounter,
      };
    }

    result.push({
      ...evt,
      team,
      player,
      relatedPlayer,
      scoreAfterEvent,
    });
  }

  return result;
}
