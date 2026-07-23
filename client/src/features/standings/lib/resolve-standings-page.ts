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
  const config = DEFAULT_STANDINGS_CONFIG;
  const competition = matchesPrototypeData.competition;
  const warnings: StandingsDataWarning[] = [];

  // Run initial data validations (Requirement 5 & 1)
  try {
    const validationWarnings = validateStandingsPrototypeData();
    warnings.push(...validationWarnings);
  } catch (err) {
    warnings.push({
      code: "VALIDATION_ERROR",
      message: err instanceof Error ? err.message : "Kesalahan integritas data.",
    });
  }

  const groups = matchesPrototypeData.groups
    .filter((g) => g.phaseId === config.groupPhaseId)
    .sort((a, b) => a.order - b.order);

  const derivedGroups: GroupStandings[] = [];
  let totalGroupMatches = 0;
  let completedOfficialGroupMatches = 0;

  // Requirement 1: Process each group in its own try/catch block for error isolation
  for (const group of groups) {
    try {
      // Requirement 5: Do NOT sort teams alphabetically. Retain original team dataset order.
      const groupTeams = matchesPrototypeData.teams.filter((t) => t.groupId === group.id);

      const groupResult = deriveGroupStandings(
        group,
        groupTeams,
        matchesPrototypeData.matches,
        config
      );

      // Validate derived row formulas
      let totalGF = 0;
      let totalGA = 0;

      for (const row of groupResult.rows) {
        totalGF += row.goalsFor;
        totalGA += row.goalsAgainst;

        if (row.played !== row.won + row.drawn + row.lost) {
          warnings.push({
            code: "FORMULA_PLAYED_MISMATCH",
            message: `Tim '${row.team.name}' played (${row.played}) != won+drawn+lost (${row.won + row.drawn + row.lost}).`,
            groupId: group.id,
          });
        }

        if (row.goalDifference !== row.goalsFor - row.goalsAgainst) {
          warnings.push({
            code: "FORMULA_GD_MISMATCH",
            message: `Tim '${row.team.name}' goalDifference (${row.goalDifference}) != GF-GA (${row.goalsFor - row.goalsAgainst}).`,
            groupId: group.id,
          });
        }

        if (
          row.points !==
          row.won * config.points.win + row.drawn * config.points.draw + row.lost * config.points.loss
        ) {
          warnings.push({
            code: "FORMULA_PTS_MISMATCH",
            message: `Tim '${row.team.name}' points (${row.points}) calculation error.`,
            groupId: group.id,
          });
        }
      }

      if (totalGF !== totalGA) {
        warnings.push({
          code: "GROUP_GOALS_MISMATCH",
          message: `Total Gol Memasukkan (${totalGF}) != Total Gol Kebobolan (${totalGA}) di ${group.name}.`,
          groupId: group.id,
        });
      }

      if (groupResult.hasUnresolvedTie) {
        warnings.push({
          code: "UNRESOLVED_TIE",
          message: `Posisi beberapa tim di ${group.name} belum dapat diputuskan dengan aturan tie-break aktif.`,
          groupId: group.id,
        });
      }

      derivedGroups.push(groupResult);
      totalGroupMatches += groupResult.totalMatches;
      completedOfficialGroupMatches += groupResult.completedOfficialMatches;
    } catch (err) {
      // Group isolation: catch group processing failure without failing the entire page
      warnings.push({
        code: "GROUP_PROCESSING_ERROR",
        message: `Gagal memproses data klasemen ${group.name}: ${err instanceof Error ? err.message : String(err)}`,
        groupId: group.id,
      });
    }
  }

  // Requirement 2: Real unavailable status when zero groups could be derived
  if (derivedGroups.length === 0) {
    return {
      competition,
      status: "unavailable",
      groups: [],
      totalGroupMatches: 0,
      completedOfficialGroupMatches: 0,
      qualifiedTeamCount: null,
      config,
      warnings,
    };
  }

  // Requirement 1 & 4: Determine page status
  const hasPartialWarning = warnings.some(
    (w) => w.code.includes("MISMATCH") || w.code.includes("NULL_SCORE") || w.code === "GROUP_PROCESSING_ERROR"
  );
  const groupProcessingFailed = derivedGroups.length < groups.length;

  const allFinal = derivedGroups.every((g) => g.status === "final");
  const allNotStarted = derivedGroups.every((g) => g.status === "not_started");

  let pageStatus: StandingsStatus = "final";

  if (groupProcessingFailed || hasPartialWarning) {
    pageStatus = "partial";
  } else if (allNotStarted) {
    pageStatus = "not_started";
  } else if (allFinal) {
    const hasPendingQualification = derivedGroups.some((g) =>
      g.rows.some((r) => r.qualificationStatus === "pending")
    );
    pageStatus = hasPendingQualification ? "provisional" : "final";
  } else {
    pageStatus = "provisional";
  }

  // Count actual qualified rows
  let actualQualifiedCount = 0;
  let hasPending = false;

  for (const g of derivedGroups) {
    for (const r of g.rows) {
      if (r.qualificationStatus === "qualified") {
        actualQualifiedCount++;
      } else if (r.qualificationStatus === "pending") {
        hasPending = true;
      }
    }
  }

  const qualifiedTeamCount = pageStatus === "final" && !hasPending ? actualQualifiedCount : null;

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
