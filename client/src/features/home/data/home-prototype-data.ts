import type {
  HomeTeam,
  HomePlayer,
  HomeMatch,
  HomeAward,
  HomeSectionState,
  HomeStanding,
  HomeBracketData,
  HomeNews,
  HomeGalleryItemWithSource,
  HomeSponsor,
} from "../types/home.types";

const cakraTextile: HomeTeam = {
  id: "TIM002",
  name: "Cakra Textile FC",
  group: "A",
  logo: { src: null, alt: "Logo Cakra Textile FC" },
  achievement: "Juara",
};

const tekmaFutsal: HomeTeam = {
  id: "TIM007",
  name: "Tekma Futsal",
  group: "B",
  logo: { src: null, alt: "Logo Tekma Futsal" },
  achievement: "Runner-up",
};

type HomePrototypeDataType = {
  competition: HomeSectionState<{
    name: string;
    location: string;
    date: string;
    status: string;
  }>;
  champion: HomeSectionState<{
    team: HomeTeam;
  }>;
  featuredFinal: HomeSectionState<HomeMatch>;
  metrics: HomeSectionState<{ label: string; value: string }[]>;
  latestResults: HomeSectionState<HomeMatch[]>;
  standings: HomeSectionState<{ groupA: HomeStanding[]; groupB: HomeStanding[] }>;
  bracket: HomeSectionState<HomeBracketData>;
  awards: HomeSectionState<HomeAward[]>;
  teams: HomeSectionState<HomeTeam[]>;
  players: HomeSectionState<HomePlayer[]>;
  news: HomeSectionState<HomeNews[]>;
  gallery: HomeSectionState<HomeGalleryItemWithSource[]>;
  sponsors: HomeSectionState<HomeSponsor[]>;
};

export const homePrototypeData: HomePrototypeDataType = {
  competition: {
    status: "ready",
    data: {
      name: "FCS Industrial Cup Sumedang 2026",
      location: "Sumedang",
      date: "1–9 Agustus 2026",
      status: "Selesai",
    },
  },
  champion: {
    status: "ready",
    data: {
      team: cakraTextile,
    },
  },
  featuredFinal: {
    status: "ready",
    data: {
      id: "PRT016",
      phase: "Final",
      status: "Selesai",
      verificationStatus: "Resmi",
      homeTeam: cakraTextile,
      awayTeam: tekmaFutsal,
      homeScore: 2,
      awayScore: 1,
    },
  },
  metrics: {
    status: "ready",
    data: [
      { label: "Tim", value: "8" },
      { label: "Pemain", value: "64" },
      { label: "Pertandingan", value: "16" },
      { label: "Grup", value: "2" },
    ],
  },
  latestResults: {
    status: "ready",
    data: [
      {
        id: "PRT016",
        phase: "Final",
        status: "Selesai",
        verificationStatus: "Resmi",
        homeTeam: cakraTextile,
        awayTeam: tekmaFutsal,
        homeScore: 2,
        awayScore: 1,
      },
    ],
  },
  standings: {
    status: "empty",
    message: "Data klasemen grup belum tersedia dalam referensi yang dibaca.",
  },
  bracket: {
    status: "empty",
    message: "Bracket fase gugur belum tersedia.",
  },
  awards: {
    status: "ready",
    data: [
      {
        id: "award-mvp",
        title: "Pemain Terbaik",
        recipientType: "player",
        recipientName: "Tegar Mahendra",
        supportingValue: "5 Gol, 3 MVP",
        image: { src: null, alt: "Foto Tegar Mahendra" },
        variant: "featured",
      },
      {
        id: "award-top-scorer-1",
        title: "Pencetak Gol Terbanyak",
        recipientType: "player",
        recipientName: "Tegar Mahendra",
        supportingValue: "5 Gol",
        image: { src: null, alt: "Foto Tegar Mahendra" },
        variant: "compact",
      },
      {
        id: "award-top-scorer-2",
        title: "Pencetak Gol Terbanyak",
        recipientType: "player",
        recipientName: "Agung Firmansyah",
        supportingValue: "5 Gol",
        image: { src: null, alt: "Foto Agung Firmansyah" },
        variant: "compact",
      },
      {
        id: "award-best-keeper",
        title: "Kiper Terbaik",
        recipientType: "player",
        recipientName: "Aldi Setiawan",
        image: { src: null, alt: "Foto Aldi Setiawan" },
        variant: "compact",
      },
      {
        id: "award-fair-play",
        title: "Tim Fair Play",
        recipientType: "team",
        recipientName: "Cakra Textile FC",
        image: { src: null, alt: "Logo Cakra Textile FC" },
        variant: "compact",
      },
    ],
  },
  teams: {
    status: "empty",
    message: "Data seluruh tim peserta belum lengkap (baru tersedia 2 dari 8 tim referensi resmi).",
  },
  players: {
    status: "ready",
    data: [
      {
        id: "player-tegar",
        name: "Tegar Mahendra",
        photo: { src: null, alt: "Foto Tegar Mahendra" },
        statistics: { goals: 5, mvp: 3 },
        award: "Pemain Terbaik & Top Scorer",
      },
      {
        id: "player-agung",
        name: "Agung Firmansyah",
        photo: { src: null, alt: "Foto Agung Firmansyah" },
        statistics: { goals: 5 },
        award: "Top Scorer",
      },
      {
        id: "player-aldi",
        name: "Aldi Setiawan",
        position: "Kiper",
        photo: { src: null, alt: "Foto Aldi Setiawan" },
        award: "Kiper Terbaik",
      },
    ],
  },
  news: {
    status: "empty",
    message: "Belum ada berita terbaru.",
  },
  gallery: {
    status: "empty",
    message: "Galeri kompetisi belum tersedia.",
  },
  sponsors: {
    status: "empty",
    message: "Sponsor belum tersedia.",
  },
};
