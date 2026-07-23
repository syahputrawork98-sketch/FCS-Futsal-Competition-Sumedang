import { resolveStandingsPageData } from "./resolve-standings-page";
import type { HomeSectionState, HomeStanding } from "@/features/home/types/home.types";

export function getHomeStandingsPreviewData(): HomeSectionState<{
  groupA: HomeStanding[];
  groupB: HomeStanding[];
}> {
  try {
    const pageData = resolveStandingsPageData();
    const groupAData = pageData.groups.find((g) => g.group.id === "GRPA");
    const groupBData = pageData.groups.find((g) => g.group.id === "GRPB");

    if (!groupAData || !groupBData) {
      return {
        status: "empty",
        message: "Klasemen fase grup belum tersedia.",
      };
    }

    const mapRows = (rows: typeof groupAData.rows): HomeStanding[] =>
      rows.map((row) => ({
        position: row.position ?? 0,
        team: {
          id: row.team.id,
          name: row.team.name,
          shortName: row.team.shortName,
          logo: { src: null, alt: row.team.name },
        },
        played: row.played,
        goalDifference: row.goalDifference,
        points: row.points,
        qualificationStatus:
          row.qualificationStatus === "qualified"
            ? "Lolos"
            : row.qualificationStatus === "eliminated"
            ? "Gugur"
            : undefined,
      }));

    return {
      status: "ready",
      data: {
        groupA: mapRows(groupAData.rows),
        groupB: mapRows(groupBData.rows),
      },
    };
  } catch {
    return {
      status: "error",
      message: "Terjadi kesalahan saat memuat data klasemen.",
    };
  }
}
