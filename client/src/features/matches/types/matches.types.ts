export type MatchStatusCode =
  | "scheduled"
  | "live"
  | "finished"
  | "postponed"
  | "cancelled";

export type MatchResultStatusCode = "official" | "provisional" | null;

export type MatchTab = "all" | "schedule" | "live" | "results";

export type PublicMatchTabParam = "semua" | "jadwal" | "berlangsung" | "hasil";

export type MatchImageAsset = {
  src: string | null;
  alt: string;
  credit?: string;
};

export type MatchTeam = {
  id: string;
  name: string;
  shortName: string;
  groupId: string;
  logo: MatchImageAsset;
};

export type MatchPhase = {
  id: string;
  name: string;
  type: "group" | "knockout";
  order: number;
};

export type MatchGroup = {
  id: string;
  phaseId: string;
  name: string;
  order: number;
};

export type MatchVenue = {
  id: string;
  name: string;
  district?: string;
  city?: string;
};

export type PenaltyResult = {
  teamAScore: number;
  teamBScore: number;
  winnerTeamId: string;
};

export type MatchRecord = {
  id: string;
  number: number;
  competitionId: string;
  categoryId: string;
  phaseId: string;
  groupId: string | null;
  teamAId: string;
  teamBId: string;
  date: string;
  startTime: string;
  venueId: string;
  status: MatchStatusCode;
  teamAScore: number | null;
  teamBScore: number | null;
  resultStatus: MatchResultStatusCode;
  penaltyResult?: PenaltyResult;
  note?: string;
};

export type CompetitionMetadata = {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  dateRangeLabel: string;
  status: string;
  totalTeams: number;
  totalMatches: number;
  totalGroups: number;
};

export type MatchesPrototypeData = {
  competition: CompetitionMetadata;
  phases: MatchPhase[];
  groups: MatchGroup[];
  venues: MatchVenue[];
  teams: MatchTeam[];
  matches: MatchRecord[];
};

export type MatchFilters = {
  tab: MatchTab;
  phaseId: string | null;
  groupId: string | null;
  teamId: string | null;
  date: string | null;
  search: string;
  page: number;
};

export type MatchGroupedByDate = {
  date: string;
  dateLabel: string;
  matches: MatchRecord[];
};
