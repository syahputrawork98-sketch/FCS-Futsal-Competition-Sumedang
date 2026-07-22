export type HomeImageAsset = {
  src: string | null;
  alt: string;
  credit?: string;
};

export type HomeTeam = {
  id: string;
  name: string;
  shortName?: string;
  organization?: string;
  group?: "A" | "B";
  logo: HomeImageAsset;
  achievement?: string;
};

export type HomePlayer = {
  id: string;
  name: string;
  teamId?: string;
  teamName?: string;
  position?: string;
  photo: HomeImageAsset;
  statistics?: {
    goals?: number;
    assists?: number;
    appearances?: number;
    mvp?: number;
    cleanSheets?: number;
  };
  award?: string;
};

export type HomeMatch = {
  id: string;
  phase: string;
  status: "Selesai";
  verificationStatus?: "Resmi";
  date?: string;
  venue?: string;
  homeTeam: HomeTeam;
  awayTeam: HomeTeam;
  homeScore: number;
  awayScore: number;
  note?: string;
};

export type HomeBracketData = {
  semifinals: HomeMatch[];
  thirdPlace?: HomeMatch;
  final: HomeMatch;
  champion: HomeTeam;
};

export type HomeStanding = {
  position: number;
  team: HomeTeam;
  played: number;
  goalDifference: number;
  points: number;
  qualificationStatus?: "Lolos" | "Gugur";
};

export type HomeAward = {
  id: string;
  title: string;
  recipientType: "player" | "team";
  recipientName: string;
  teamName?: string;
  supportingValue?: string;
  image: HomeImageAsset;
  variant?: "featured" | "compact";
};

export type HomeNews = {
  id: string;
  title: string;
  summary: string;
  publishedAt: string;
  category?: string;
  image: HomeImageAsset;
  href: string;
};

export type HomeGalleryItem = {
  id: string;
  title: string;
  image: HomeImageAsset;
};

export type HomeSponsor = {
  id: string;
  name: string;
  level: string;
  logo: HomeImageAsset;
  href?: string;
};

export type HomeSectionState<T> =
  | {
      status: "ready";
      data: T;
    }
  | {
      status: "loading";
    }
  | {
      status: "empty";
      message: string;
    }
  | {
      status: "error";
      message: string;
    };
