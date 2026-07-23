import type { CompetitionMetadata, MatchGroup, MatchTeam } from "@/features/matches/types/matches.types";

export type StandingsStatus =
  | "not_started"
  | "provisional"
  | "final"
  | "partial"
  | "unavailable";

export type RankingResolution =
  | "resolved"
  | "unresolved_tie";

export type QualificationStatus =
  | "qualified"
  | "eliminated"
  | "pending"
  | "unknown";

export type StandingsPointsConfig = {
  win: number;
  draw: number;
  loss: number;
};

export type StandingsTieBreakKey =
  | "goalDifference"
  | "goalsFor";

export type StandingsConfig = {
  groupPhaseId: string;
  points: StandingsPointsConfig;
  qualifiedTeamsPerGroup: number;
  tieBreakOrder: StandingsTieBreakKey[];
};

export type StandingsTeamRow = {
  team: MatchTeam;
  groupId: string;
  position: number | null;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  qualificationStatus: QualificationStatus;
  rankingResolution: RankingResolution;
};

export type GroupStandings = {
  group: MatchGroup;
  rows: StandingsTeamRow[];
  status: StandingsStatus;
  totalMatches: number;
  completedOfficialMatches: number;
  hasUnresolvedTie: boolean;
};

export type StandingsDataWarning = {
  code: string;
  message: string;
  groupId?: string;
};

export type StandingsPageData = {
  competition: CompetitionMetadata;
  status: StandingsStatus;
  groups: GroupStandings[];
  totalGroupMatches: number;
  completedOfficialGroupMatches: number;
  qualifiedTeamCount: number | null;
  config: StandingsConfig;
  warnings: StandingsDataWarning[];
};

export type HomeStandingsPreviewRow = {
  position: number | null;
  team: MatchTeam;
  played: number;
  goalDifference: number;
  points: number;
  qualificationStatus: QualificationStatus;
};

export type HomeGroupStandingsPreview = {
  group: MatchGroup;
  rows: HomeStandingsPreviewRow[];
  status: StandingsStatus;
};

export type HomeStandingsPreviewData = {
  groups: HomeGroupStandingsPreview[];
  status: StandingsStatus;
};
