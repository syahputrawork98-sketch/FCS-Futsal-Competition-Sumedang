import type {
  MatchDetailPageData,
  MatchOfficialSummary,
} from "../types/match-detail.types";
import { matchesPrototypeData } from "../data/matches-prototype-data";
import { matchEventsPrototypeData } from "../data/match-events-prototype-data";
import { matchTeamOfficialsPrototypeData } from "../data/match-participants-prototype-data";
import {
  matchAssignmentsPrototypeData,
  matchOfficialsPrototypeData,
} from "../data/match-officials-prototype-data";
import { deriveMatchTimeline } from "./derive-match-timeline";
import { deriveMatchScorers } from "./derive-match-summary";

export function resolveMatchDetail(matchId: string): MatchDetailPageData | null {
  if (!matchId) return null;

  const match = matchesPrototypeData.matches.find(
    (m) => m.id.toUpperCase() === matchId.toUpperCase()
  );

  if (!match) return null;

  const teamMap = new Map(matchesPrototypeData.teams.map((t) => [t.id, t]));
  const phaseMap = new Map(matchesPrototypeData.phases.map((p) => [p.id, p]));
  const groupMap = new Map(matchesPrototypeData.groups.map((g) => [g.id, g]));
  const venueMap = new Map(matchesPrototypeData.venues.map((v) => [v.id, v]));

  const teamA = teamMap.get(match.teamAId);
  const teamB = teamMap.get(match.teamBId);
  const phase = phaseMap.get(match.phaseId);
  const group = match.groupId ? groupMap.get(match.groupId) || null : null;
  const venue = venueMap.get(match.venueId) || null;

  if (!teamA || !teamB || !phase) return null;

  // Resolve Winner ID
  let winnerTeamId: string | null = null;
  if (match.penaltyResult) {
    winnerTeamId = match.penaltyResult.winnerTeamId;
  } else if (
    match.teamAScore !== null &&
    match.teamBScore !== null &&
    match.teamAScore !== match.teamBScore
  ) {
    winnerTeamId = match.teamAScore > match.teamBScore ? match.teamAId : match.teamBId;
  }

  // Events & Timeline
  const matchEvents = matchEventsPrototypeData.filter((e) => e.matchId === match.id);
  const timeline = deriveMatchTimeline(matchEvents, teamA, teamB);
  const scorers = deriveMatchScorers(timeline);

  // Team Officials
  const teamAOfficials = matchTeamOfficialsPrototypeData.filter(
    (o) => o.teamId === teamA.id
  );
  const teamBOfficials = matchTeamOfficialsPrototypeData.filter(
    (o) => o.teamId === teamB.id
  );

  // Match Officials
  const officialMap = new Map<string, MatchOfficialSummary>(
    matchOfficialsPrototypeData.map((o) => [o.id, o])
  );
  const assignments = matchAssignmentsPrototypeData.filter(
    (a) => a.matchId === match.id
  );
  const matchOfficials = assignments
    .map((a) => {
      const official = officialMap.get(a.officialId);
      if (!official) return null;
      return {
        ...a,
        official,
      };
    })
    .filter(
      (item): item is NonNullable<typeof item> => item !== null
    );

  // Sort assignments by role order: Wasit 1, Wasit 2, Timekeeper, Pengawas Pertandingan, Petugas Meja
  const roleOrder: Record<string, number> = {
    "Wasit 1": 1,
    "Wasit 2": 2,
    Timekeeper: 3,
    "Pengawas Pertandingan": 4,
    "Petugas Meja": 5,
  };
  matchOfficials.sort(
    (a, b) => (roleOrder[a.role] || 99) - (roleOrder[b.role] || 99)
  );

  // Previous & Next match by match.number
  const previousMatch =
    matchesPrototypeData.matches.find((m) => m.number === match.number - 1) || null;
  const nextMatch =
    matchesPrototypeData.matches.find((m) => m.number === match.number + 1) || null;

  return {
    competition: matchesPrototypeData.competition,
    match,
    phase,
    group,
    venue,
    teamA,
    teamB,
    winnerTeamId,
    timeline,
    scorers,
    teamAOfficials,
    teamBOfficials,
    matchOfficials,
    previousMatch,
    nextMatch,
    statistics: null,
    lineups: null,
  };
}
