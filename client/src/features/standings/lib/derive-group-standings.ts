import type {
  GroupStandings,
  StandingsConfig,
  StandingsStatus,
  StandingsTeamRow,
  StandingsTieBreakKey,
} from "../types/standings.types";
import type { MatchGroup, MatchRecord, MatchTeam } from "@/features/matches/types/matches.types";

export function deriveGroupStandings(
  group: MatchGroup,
  groupTeams: MatchTeam[],
  allMatches: MatchRecord[],
  config: StandingsConfig
): GroupStandings {
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

  // Initialize team rows
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

  // Accumulate scores
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

  for (const row of rowMap.values()) {
    row.goalDifference = row.goalsFor - row.goalsAgainst;
  }

  const rows = Array.from(rowMap.values());

  // Dynamic comparator driven by config.tieBreakOrder (Requirement 3)
  const getMetricValue = (row: StandingsTeamRow, key: StandingsTieBreakKey): number => {
    switch (key) {
      case "goalDifference":
        return row.goalDifference;
      case "goalsFor":
        return row.goalsFor;
      default:
        return 0;
    }
  };

  rows.sort((a, b) => {
    if (a.points !== b.points) {
      return b.points - a.points;
    }
    for (const key of config.tieBreakOrder) {
      const valA = getMetricValue(a, key);
      const valB = getMetricValue(b, key);
      if (valA !== valB) {
        return valB - valA;
      }
    }
    return 0; // Deterministic order maintained by dataset initial order
  });

  // Determine group status (Requirement 4)
  let status: StandingsStatus = "final";
  if (completedOfficialMatches.length === 0) {
    status = "not_started";
  } else if (completedOfficialMatches.length < groupMatches.length) {
    status = "provisional";
  }

  // Partition sorted rows into Equivalence Classes (Requirement 2)
  const isEquivalent = (a: StandingsTeamRow, b: StandingsTeamRow): boolean => {
    if (a.points !== b.points) return false;
    for (const key of config.tieBreakOrder) {
      if (getMetricValue(a, key) !== getMetricValue(b, key)) {
        return false;
      }
    }
    return true;
  };

  const equivalenceClasses: Array<{ startIndex: number; endIndex: number; rows: StandingsTeamRow[] }> = [];
  let currentClass: StandingsTeamRow[] = [];
  let currentStart = 0;

  rows.forEach((row, idx) => {
    if (currentClass.length === 0) {
      currentClass.push(row);
      currentStart = idx;
    } else {
      if (isEquivalent(currentClass[0], row)) {
        currentClass.push(row);
      } else {
        equivalenceClasses.push({
          startIndex: currentStart,
          endIndex: idx - 1,
          rows: currentClass,
        });
        currentClass = [row];
        currentStart = idx;
      }
    }
  });

  if (currentClass.length > 0) {
    equivalenceClasses.push({
      startIndex: currentStart,
      endIndex: rows.length - 1,
      rows: currentClass,
    });
  }

  let hasUnresolvedTie = false;

  equivalenceClasses.forEach((eqClass) => {
    const isUnresolved = eqClass.rows.length > 1;

    if (isUnresolved) {
      hasUnresolvedTie = true;
      const straddlesBoundary =
        eqClass.startIndex < config.qualifiedTeamsPerGroup &&
        eqClass.endIndex >= config.qualifiedTeamsPerGroup;

      const entireAboveBoundary = eqClass.endIndex < config.qualifiedTeamsPerGroup;
      const entireBelowBoundary = eqClass.startIndex >= config.qualifiedTeamsPerGroup;

      eqClass.rows.forEach((row) => {
        row.position = null;
        row.rankingResolution = "unresolved_tie";

        if (status === "not_started") {
          row.qualificationStatus = "pending";
        } else if (straddlesBoundary) {
          row.qualificationStatus = "pending";
        } else if (entireAboveBoundary) {
          row.qualificationStatus = status === "final" ? "qualified" : "pending";
        } else if (entireBelowBoundary) {
          row.qualificationStatus = status === "final" ? "eliminated" : "pending";
        } else {
          row.qualificationStatus = "pending";
        }
      });
    } else {
      const row = eqClass.rows[0];
      const pos = eqClass.startIndex + 1;
      row.position = pos;
      row.rankingResolution = "resolved";

      if (status === "final") {
        row.qualificationStatus = pos <= config.qualifiedTeamsPerGroup ? "qualified" : "eliminated";
      } else {
        row.qualificationStatus = "pending";
      }
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
