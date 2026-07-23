import type { StandingsConfig } from "../types/standings.types";

export const DEFAULT_STANDINGS_CONFIG: StandingsConfig = {
  groupPhaseId: "FAS01",
  points: {
    win: 3,
    draw: 1,
    loss: 0,
  },
  qualifiedTeamsPerGroup: 2,
  tieBreakOrder: ["goalDifference", "goalsFor"],
};
