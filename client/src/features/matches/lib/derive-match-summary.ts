import type {
  MatchPlayerSummary,
  MatchScorerSummary,
  ResolvedMatchTimelineItem,
} from "../types/match-detail.types";

export function deriveMatchScorers(
  timeline: ResolvedMatchTimelineItem[]
): MatchScorerSummary[] {
  const goalEvents = timeline.filter((item) => item.type === "goal" && item.player);

  const scorerMap = new Map<string, { player: MatchPlayerSummary; teamId: string; minutes: number[] }>();

  for (const evt of goalEvents) {
    if (!evt.player) continue;
    const key = `${evt.teamId}_${evt.player.id}`;
    if (!scorerMap.has(key)) {
      scorerMap.set(key, {
        player: evt.player,
        teamId: evt.teamId,
        minutes: [],
      });
    }
    scorerMap.get(key)!.minutes.push(evt.minute);
  }

  return Array.from(scorerMap.values());
}
