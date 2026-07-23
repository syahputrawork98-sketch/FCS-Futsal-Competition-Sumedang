import type {
  GroupStandings,
  QualificationStatus,
  StandingsConfig,
  StandingsStatus,
  StandingsTeamRow,
} from "../types/standings.types";
import type { MatchGroup, MatchRecord, MatchTeam } from "@/features/matches/types/matches.types";

export function deriveGroupStandings(
  group: MatchGroup,
  groupTeams: MatchTeam[],
  allMatches: MatchRecord[],
  config: StandingsConfig
): GroupStandings {
  // Filter matches belonging to this group and group stage phase
  const groupMatches = allMatches.filter(
    (m) => m.phaseId === config.groupPhaseId && m.groupId === group.id
  );

  const completedOfficialMatches = groupMatches.filter(
    (m) =>
      m.status === "finished" &&
      m.resultStatus === "official" &&
      m.teamAScore !== null &&
      m.teamBScore !== null
  );

  // Initialize row data for each team in group
  const rowMap = new Map<string, StandingsTeamRow>();
  for (const team of groupTeams) {
    rowMap.set(team.id, {
      team,
      groupId: group.id,
      position: null,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      goalsFor: 0,
      goalsAgainst: 0,
      goalDifference: 0,
      points: 0,
      qualificationStatus: "pending",
      rankingResolution: "resolved",
    });
  }

  // Accumulate scores from completed official matches
  for (const match of completedOfficialMatches) {
    const rowA = rowMap.get(match.teamAId);
    const rowB = rowMap.get(match.teamBId);

    if (!rowA || !rowB) continue;

    const scoreA = match.teamAScore!;
    const scoreB = match.teamBScore!;

    rowA.played += 1;
    rowB.played += 1;

    rowA.goalsFor += scoreA;
    rowA.goalsAgainst += scoreB;

    rowB.goalsFor += scoreB;
    rowB.goalsAgainst += scoreA;

    if (scoreA > scoreB) {
      rowA.won += 1;
      rowA.points += config.points.win;
      rowB.lost += 1;
      rowB.points += config.points.loss;
    } else if (scoreB > scoreA) {
      rowB.won += 1;
      rowB.points += config.points.win;
      rowA.lost += 1;
      rowA.points += config.points.loss;
    } else {
      rowA.drawn += 1;
      rowA.points += config.points.draw;
      rowB.drawn += 1;
      rowB.points += config.points.draw;
    }
  }

  // Compute goalDifference
  for (const row of rowMap.values()) {
    row.goalDifference = row.goalsFor - row.goalsAgainst;
  }

  const rows = Array.from(rowMap.values());

  // Sort rows based on points DESC, goalDifference DESC, goalsFor DESC
  rows.sort((a, b) => {
    if (a.points !== b.points) return b.points - a.points;
    if (a.goalDifference !== b.goalDifference)
      return b.goalDifference - a.goalDifference;
    if (a.goalsFor !== b.goalsFor) return b.goalsFor - a.goalsFor;
    return 0; // Stable render order preserved for unresolved ties
  });

  // Detect unresolved ties
  let hasUnresolvedTie = false;
  for (let i = 0; i < rows.length - 1; i++) {
    const current = rows[i];
    const next = rows[i + 1];

    if (
      current.points === next.points &&
      current.goalDifference === next.goalDifference &&
      current.goalsFor === next.goalsFor
    ) {
      current.rankingResolution = "unresolved_tie";
      next.rankingResolution = "unresolved_tie";
      hasUnresolvedTie = true;
    }
  }

  // Determine group status
  let status: StandingsStatus = "final";
  if (completedOfficialMatches.length === 0) {
    status = "not_started";
  } else if (completedOfficialMatches.length < groupMatches.length) {
    status = "provisional";
  }

  // Determine positions and qualification status
  rows.forEach((row, index) => {
    const pos = index + 1;

    if (row.rankingResolution === "unresolved_tie") {
      // Check if tie crosses boundary (e.g. pos 2 vs 3)
      const isTieCrossingBoundary = index === config.qualifiedTeamsPerGroup - 1 || index === config.qualifiedTeamsPerGroup;
      if (isTieCrossingBoundary) {
        row.position = null;
        row.qualificationStatus = "pending";
      } else {
        row.position = pos;
        row.qualificationStatus =
          status === "final"
            ? pos <= config.qualifiedTeamsPerGroup
              ? "qualified"
              : "eliminated"
            : "pending";
      }
    } else {
      row.position = pos;
      let qualStatus: QualificationStatus = "pending";
      if (status === "final") {
        qualStatus = pos <= config.qualifiedTeamsPerGroup ? "qualified" : "eliminated";
      } else if (status === "provisional") {
        qualStatus = "pending";
      } else {
        qualStatus = "pending";
      }
      row.qualificationStatus = qualStatus;
    }
  });

  return {
    group,
    rows,
    status,
    totalMatches: groupMatches.length,
    completedOfficialMatches: completedOfficialMatches.length,
    hasUnresolvedTie,
  };
}
