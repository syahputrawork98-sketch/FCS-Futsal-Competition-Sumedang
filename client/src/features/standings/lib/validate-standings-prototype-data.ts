import { matchesPrototypeData } from "@/features/matches/data/matches-prototype-data";

export function validateStandingsPrototypeData(): void {
  const phase = matchesPrototypeData.phases.find((p) => p.id === "FAS01");
  if (!phase) {
    throw new Error("[Standings Data Integrity Error] Group phase 'FAS01' not found.");
  }
  if (phase.type !== "group") {
    throw new Error(
      `[Standings Data Integrity Error] Phase 'FAS01' type must be 'group', found '${phase.type}'.`
    );
  }

  const groups = matchesPrototypeData.groups.filter((g) => g.phaseId === "FAS01");
  if (groups.length !== 2) {
    throw new Error(
      `[Standings Data Integrity Error] Expected 2 group stage groups, found ${groups.length}.`
    );
  }

  const teamMap = new Map(matchesPrototypeData.teams.map((t) => [t.id, t]));
  if (teamMap.size !== 8) {
    throw new Error(
      `[Standings Data Integrity Error] Expected 8 teams, found ${teamMap.size}.`
    );
  }

  for (const team of matchesPrototypeData.teams) {
    if (team.groupId !== "GRPA" && team.groupId !== "GRPB") {
      throw new Error(
        `[Standings Data Integrity Error] Team ${team.id} has invalid groupId '${team.groupId}'.`
      );
    }
  }

  const groupMatches = matchesPrototypeData.matches.filter(
    (m) => m.phaseId === "FAS01" && m.groupId !== null
  );

  if (groupMatches.length !== 12) {
    throw new Error(
      `[Standings Data Integrity Error] Expected 12 group stage matches, found ${groupMatches.length}.`
    );
  }

  for (const m of groupMatches) {
    const matchId = m.id;
    const teamA = teamMap.get(m.teamAId);
    const teamB = teamMap.get(m.teamBId);

    if (!teamA || !teamB) {
      throw new Error(
        `[Standings Data Integrity Error] Match ${matchId} references invalid teamA '${m.teamAId}' or teamB '${m.teamBId}'.`
      );
    }

    if (teamA.groupId !== m.groupId || teamB.groupId !== m.groupId) {
      throw new Error(
        `[Standings Data Integrity Error] Match ${matchId} groupId '${m.groupId}' does not match teamA group '${teamA.groupId}' or teamB group '${teamB.groupId}'.`
      );
    }

    if (m.penaltyResult !== null && m.penaltyResult !== undefined) {
      throw new Error(
        `[Standings Data Integrity Error] Group stage match ${matchId} cannot have penaltyResult.`
      );
    }
  }
}
