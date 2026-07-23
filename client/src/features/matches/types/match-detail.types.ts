import type {
  CompetitionMetadata,
  MatchGroup,
  MatchImageAsset,
  MatchPhase,
  MatchRecord,
  MatchTeam,
  MatchVenue,
} from "./matches.types";

export type MatchEventType =
  | "goal"
  | "yellow_card"
  | "red_card"
  | "own_goal"
  | "substitution"
  | "other";

export type MatchEventRecord = {
  id: string;
  matchId: string;
  type: MatchEventType;
  teamId: string;
  playerId: string | null;
  relatedPlayerId: string | null;
  minute: number;
  period: "first_half" | "second_half" | "extra_time" | "penalties" | "unknown";
  note: string | null;
  verificationStatus: "verified" | "unverified";
};

export type MatchPlayerSummary = {
  id: string;
  displayName: string;
  position: string;
  image: MatchImageAsset;
};

export type RegisteredRosterIdentity = {
  teamId: string;
  playerId: string;
  shirtNumber: number;
  position: string;
  isCaptain: boolean;
  isGoalkeeper: boolean;
};

export type TeamOfficialSummary = {
  id: string;
  teamId: string;
  name: string;
  role: string;
  image: MatchImageAsset;
};

export type MatchOfficialSummary = {
  id: string;
  name: string;
  competency: string;
  image: MatchImageAsset;
};

export type MatchOfficialAssignment = {
  id: string;
  matchId: string;
  officialId: string;
  role:
    | "Wasit 1"
    | "Wasit 2"
    | "Timekeeper"
    | "Pengawas Pertandingan"
    | "Petugas Meja";
  status: "verified";
};

export type ResolvedMatchTimelineItem = MatchEventRecord & {
  team: MatchTeam;
  player: MatchPlayerSummary | null;
  relatedPlayer: MatchPlayerSummary | null;
  scoreAfterEvent: { teamAScore: number; teamBScore: number } | null;
};

export type MatchScorerSummary = {
  player: MatchPlayerSummary;
  teamId: string;
  minutes: number[];
};

export type MatchDetailPageData = {
  competition: CompetitionMetadata;
  match: MatchRecord;
  phase: MatchPhase;
  group: MatchGroup | null;
  venue: MatchVenue | null;
  teamA: MatchTeam;
  teamB: MatchTeam;
  winnerTeamId: string | null;
  timeline: ResolvedMatchTimelineItem[];
  scorers: MatchScorerSummary[];
  teamAOfficials: TeamOfficialSummary[];
  teamBOfficials: TeamOfficialSummary[];
  matchOfficials: Array<
    MatchOfficialAssignment & { official: MatchOfficialSummary }
  >;
  previousMatch: MatchRecord | null;
  nextMatch: MatchRecord | null;
  statistics: null;
  lineups: null;
};
