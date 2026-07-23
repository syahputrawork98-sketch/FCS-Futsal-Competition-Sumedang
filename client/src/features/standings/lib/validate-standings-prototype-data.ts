import { matchesPrototypeData } from "@/features/matches/data/matches-prototype-data";
import { validateMatchPrototypeData } from "@/features/matches/lib/validate-match-prototype-data";
import type { StandingsDataWarning } from "../types/standings.types";

export function validateStandingsPrototypeData(): StandingsDataWarning[] {
  // 1. Call existing match prototype validator (Requirement 5)
  validateMatchPrototypeData();

  const warnings: StandingsDataWarning[] = [];

  // 2. Validate phase FAS01
  const phase = matchesPrototypeData.phases.find((p) => p.id === "FAS01");
  if (!phase) {
    throw new Error("[Standings Data Integrity Error] Group phase 'FAS01' not found.");
  }
  if (phase.type !== "group") {
    throw new Error(
      `[Standings Data Integrity Error] Phase 'FAS01' type must be 'group', found '${phase.type}'.`
    );
  }

  // 3. Validate groups (IDs and unique orders)
  const groups = matchesPrototypeData.groups.filter((g) => g.phaseId === "FAS01");
  if (groups.length !== 2) {
    throw new Error(
      `[Standings Data Integrity Error] Expected 2 group stage groups, found ${groups.length}.`
    );
  }

  const groupOrders = new Set<number>();
  for (const g of groups) {
    if (groupOrders.has(g.order)) {
      throw new Error(`[Standings Data Integrity Error] Duplicate group order: ${g.order}.`);
    }
    groupOrders.add(g.order);
  }

  // 4. Validate teams (4 per group)
  const teamMap = new Map(matchesPrototypeData.teams.map((t) => [t.id, t]));
  if (teamMap.size !== 8) {
    throw new Error(
      `[Standings Data Integrity Error] Expected 8 teams, found ${teamMap.size}.`
    );
  }

  for (const group of groups) {
    const teamsInGroup = matchesPrototypeData.teams.filter((t) => t.groupId === group.id);
    if (teamsInGroup.length !== 4) {
      throw new Error(
        `[Standings Data Integrity Error] Group '${group.id}' expected 4 teams, found ${teamsInGroup.length}.`
      );
    }
  }

  // 5. Validate group matches (6 per group, 12 total)
  const groupMatches = matchesPrototypeData.matches.filter(
    (m) => m.phaseId === "FAS01" && m.groupId !== null
  );

  if (groupMatches.length !== 12) {
    throw new Error(
      `[Standings Data Integrity Error] Expected 12 group stage matches, found ${groupMatches.length}.`
    );
  }

  for (const group of groups) {
    const matchesInGroup = groupMatches.filter((m) => m.groupId === group.id);
    if (matchesInGroup.length !== 6) {
      throw new Error(
        `[Standings Data Integrity Error] Group '${group.id}' expected 6 matches, found ${matchesInGroup.length}.`
      );
    }

    // Validate no repeated team pairs in group stage
    const pairSet = new Set<string>();
    for (const m of matchesInGroup) {
      const pairKey = [m.teamAId, m.teamBId].sort().join("-");
      if (pairSet.has(pairKey)) {
        throw new Error(
          `[Standings Data Integrity Error] Duplicate match pair '${pairKey}' in group '${group.id}'.`
        );
      }
      pairSet.add(pairKey);
    }
  }

  // 6. Validate matches & team games count (each team plays 3 matches in final dataset)
  const teamMatchCount = new Map<string, number>();
  for (const m of groupMatches) {
    const matchId = m.id;
    if (m.teamAId === m.teamBId) {
      throw new Error(
        `[Standings Data Integrity Error] Match ${matchId} teamAId and teamBId cannot be identical.`
      );
    }

    const teamA = teamMap.get(m.teamAId);
    const teamB = teamMap.get(m.teamBId);

    if (!teamA || !teamB) {
      throw new Error(
        `[Standings Data Integrity Error] Match ${matchId} references invalid teamA '${m.teamAId}' or teamB '${m.teamBId}'.`
      );
    }

    if (teamA.groupId !== m.groupId || teamB.groupId !== m.groupId) {
      throw new Error(
        `[Standings Data Integrity Error] Match ${matchId} groupId '${m.groupId}' mismatch with teams.`
      );
    }

    teamMatchCount.set(m.teamAId, (teamMatchCount.get(m.teamAId) || 0) + 1);
    teamMatchCount.set(m.teamBId, (teamMatchCount.get(m.teamBId) || 0) + 1);

    if (m.status === "finished" && m.resultStatus === "official") {
      if (m.teamAScore === null || m.teamBScore === null) {
        warnings.push({
          code: "NULL_SCORE_IN_OFFICIAL_FINISHED",
          message: `Pertandingan ${matchId} berstatus official-finished tetapi memiliki skor null.`,
          groupId: m.groupId || undefined,
        });
      }
    }
  }

  for (const team of matchesPrototypeData.teams) {
    const count = teamMatchCount.get(team.id) || 0;
    if (count !== 3) {
      warnings.push({
        code: "TEAM_MATCH_COUNT_MISMATCH",
        message: `Tim '${team.name}' bertanding ${count} kali dari 3 laga yang dijadwalkan.`,
        groupId: team.groupId || undefined,
      });
    }
  }

  return warnings;
}
