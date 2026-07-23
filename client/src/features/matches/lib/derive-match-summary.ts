import type {
  MatchGoalDetail,
  MatchPlayerSummary,
  ResolvedMatchTimelineItem,
} from "../types/match-detail.types";

export function deriveMatchGoals(
  timeline: ResolvedMatchTimelineItem[]
): MatchGoalDetail[] {
  return timeline
    .filter(
      (item): item is ResolvedMatchTimelineItem & { player: MatchPlayerSummary } =>
        (item.type === "goal" || item.type === "own_goal") && item.player !== null
    )
    .map((item) => ({
      eventId: item.id,
      minute: item.minute,
      player: item.player,
      relatedPlayer: item.relatedPlayer,
      teamId: item.teamId,
    }));
}
