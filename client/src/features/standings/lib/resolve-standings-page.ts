import { matchesPrototypeData } from "@/features/matches/data/matches-prototype-data";
import { DEFAULT_STANDINGS_CONFIG } from "../data/standings-config";
import { deriveGroupStandings } from "./derive-group-standings";
import { validateStandingsPrototypeData } from "./validate-standings-prototype-data";
import type {
  GroupStandings,
  StandingsDataWarning,
  StandingsPageData,
  StandingsStatus,
} from "../types/standings.types";

export function resolveStandingsPageData(): StandingsPageData {
  validateStandingsPrototypeData();

  const config = DEFAULT_STANDINGS_CONFIG;
  const competition = matchesPrototypeData.competition;

  const groups = matchesPrototypeData.groups
    .filter((g) => g.phaseId === config.groupPhaseId)
    .sort((a, b) => a.order - b.order);

  const warnings: StandingsDataWarning[] = [];
  const derivedGroups: GroupStandings[] = [];

  let totalGroupMatches = 0;
  let completedOfficialGroupMatches = 0;

  for (const group of groups) {
    const groupTeams = matchesPrototypeData.teams
      .filter((t) => t.groupId === group.id)
      .sort((a, b) => a.name.localeCompare(b.name));

    const groupResult = deriveGroupStandings(
      group,
      groupTeams,
      matchesPrototypeData.matches,
      config
    );

    derivedGroups.push(groupResult);
    totalGroupMatches += groupResult.totalMatches;
    completedOfficialGroupMatches += groupResult.completedOfficialMatches;

    if (groupResult.hasUnresolvedTie) {
      warnings.push({
        code: "UNRESOLVED_TIE",
        message: `Posisi beberapa tim di ${group.name} belum dapat diputuskan dengan aturan tie-break aktif.`,
        groupId: group.id,
      });
    }
  }

  // Determine overall page status
  let pageStatus: StandingsStatus = "final";
  const allFinal = derivedGroups.every((g) => g.status === "final");
  const allNotStarted = derivedGroups.every((g) => g.status === "not_started");

  if (allFinal) {
    pageStatus = "final";
  } else if (allNotStarted) {
    pageStatus = "not_started";
  } else {
    pageStatus = "provisional";
  }

  const qualifiedTeamCount = pageStatus === "final" ? derivedGroups.length * config.qualifiedTeamsPerGroup : null;

  return {
    competition,
    status: pageStatus,
    groups: derivedGroups,
    totalGroupMatches,
    completedOfficialGroupMatches,
    qualifiedTeamCount,
    config,
    warnings,
  };
}
