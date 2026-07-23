import type {
  MatchOfficialAssignment,
  MatchOfficialSummary,
} from "../types/match-detail.types";

export const matchOfficialsPrototypeData: MatchOfficialSummary[] = [
  { id: "PDK001", name: "Haris Setyawan", competency: "Wasit/Timekeeper", image: { src: null, alt: "Foto Haris Setyawan" } },
  { id: "PDK002", name: "Rendra Purnama", competency: "Wasit/Timekeeper", image: { src: null, alt: "Foto Rendra Purnama" } },
  { id: "PDK003", name: "Asep Saepudin", competency: "Wasit/Timekeeper", image: { src: null, alt: "Foto Asep Saepudin" } },
  { id: "PDK004", name: "Doni Mulyana", competency: "Wasit/Timekeeper", image: { src: null, alt: "Foto Doni Mulyana" } },
  { id: "PDK005", name: "Yayan Suherman", competency: "Pengawas Pertandingan", image: { src: null, alt: "Foto Yayan Suherman" } },
  { id: "PDK006", name: "Rudi Hartanto", competency: "Pengawas Pertandingan", image: { src: null, alt: "Foto Rudi Hartanto" } },
  { id: "PDK007", name: "Maya Lestari", competency: "Petugas Meja", image: { src: null, alt: "Foto Maya Lestari" } },
  { id: "PDK008", name: "Siti Nurhayati", competency: "Petugas Meja", image: { src: null, alt: "Foto Siti Nurhayati" } },
];

export const matchAssignmentsPrototypeData: MatchOfficialAssignment[] = [
  { id: "TGS001", matchId: "PRT001", officialId: "PDK001", role: "Wasit 1", status: "verified" },
  { id: "TGS002", matchId: "PRT001", officialId: "PDK002", role: "Wasit 2", status: "verified" },
  { id: "TGS003", matchId: "PRT001", officialId: "PDK003", role: "Timekeeper", status: "verified" },
  { id: "TGS004", matchId: "PRT001", officialId: "PDK005", role: "Pengawas Pertandingan", status: "verified" },
  { id: "TGS005", matchId: "PRT001", officialId: "PDK007", role: "Petugas Meja", status: "verified" },

  { id: "TGS006", matchId: "PRT002", officialId: "PDK002", role: "Wasit 1", status: "verified" },
  { id: "TGS007", matchId: "PRT002", officialId: "PDK003", role: "Wasit 2", status: "verified" },
  { id: "TGS008", matchId: "PRT002", officialId: "PDK004", role: "Timekeeper", status: "verified" },
  { id: "TGS009", matchId: "PRT002", officialId: "PDK006", role: "Pengawas Pertandingan", status: "verified" },
  { id: "TGS010", matchId: "PRT002", officialId: "PDK008", role: "Petugas Meja", status: "verified" },

  { id: "TGS011", matchId: "PRT003", officialId: "PDK003", role: "Wasit 1", status: "verified" },
  { id: "TGS012", matchId: "PRT003", officialId: "PDK004", role: "Wasit 2", status: "verified" },
  { id: "TGS013", matchId: "PRT003", officialId: "PDK001", role: "Timekeeper", status: "verified" },
  { id: "TGS014", matchId: "PRT003", officialId: "PDK005", role: "Pengawas Pertandingan", status: "verified" },
  { id: "TGS015", matchId: "PRT003", officialId: "PDK007", role: "Petugas Meja", status: "verified" },

  { id: "TGS016", matchId: "PRT004", officialId: "PDK004", role: "Wasit 1", status: "verified" },
  { id: "TGS017", matchId: "PRT004", officialId: "PDK001", role: "Wasit 2", status: "verified" },
  { id: "TGS018", matchId: "PRT004", officialId: "PDK002", role: "Timekeeper", status: "verified" },
  { id: "TGS019", matchId: "PRT004", officialId: "PDK006", role: "Pengawas Pertandingan", status: "verified" },
  { id: "TGS020", matchId: "PRT004", officialId: "PDK008", role: "Petugas Meja", status: "verified" },

  { id: "TGS021", matchId: "PRT005", officialId: "PDK001", role: "Wasit 1", status: "verified" },
  { id: "TGS022", matchId: "PRT005", officialId: "PDK002", role: "Wasit 2", status: "verified" },
  { id: "TGS023", matchId: "PRT005", officialId: "PDK003", role: "Timekeeper", status: "verified" },
  { id: "TGS024", matchId: "PRT005", officialId: "PDK005", role: "Pengawas Pertandingan", status: "verified" },
  { id: "TGS025", matchId: "PRT005", officialId: "PDK007", role: "Petugas Meja", status: "verified" },

  { id: "TGS026", matchId: "PRT006", officialId: "PDK002", role: "Wasit 1", status: "verified" },
  { id: "TGS027", matchId: "PRT006", officialId: "PDK003", role: "Wasit 2", status: "verified" },
  { id: "TGS028", matchId: "PRT006", officialId: "PDK004", role: "Timekeeper", status: "verified" },
  { id: "TGS029", matchId: "PRT006", officialId: "PDK006", role: "Pengawas Pertandingan", status: "verified" },
  { id: "TGS030", matchId: "PRT006", officialId: "PDK008", role: "Petugas Meja", status: "verified" },

  { id: "TGS031", matchId: "PRT007", officialId: "PDK003", role: "Wasit 1", status: "verified" },
  { id: "TGS032", matchId: "PRT007", officialId: "PDK004", role: "Wasit 2", status: "verified" },
  { id: "TGS033", matchId: "PRT007", officialId: "PDK001", role: "Timekeeper", status: "verified" },
  { id: "TGS034", matchId: "PRT007", officialId: "PDK005", role: "Pengawas Pertandingan", status: "verified" },
  { id: "TGS035", matchId: "PRT007", officialId: "PDK007", role: "Petugas Meja", status: "verified" },

  { id: "TGS036", matchId: "PRT008", officialId: "PDK004", role: "Wasit 1", status: "verified" },
  { id: "TGS037", matchId: "PRT008", officialId: "PDK001", role: "Wasit 2", status: "verified" },
  { id: "TGS038", matchId: "PRT008", officialId: "PDK002", role: "Timekeeper", status: "verified" },
  { id: "TGS039", matchId: "PRT008", officialId: "PDK006", role: "Pengawas Pertandingan", status: "verified" },
  { id: "TGS040", matchId: "PRT008", officialId: "PDK008", role: "Petugas Meja", status: "verified" },

  { id: "TGS041", matchId: "PRT009", officialId: "PDK001", role: "Wasit 1", status: "verified" },
  { id: "TGS042", matchId: "PRT009", officialId: "PDK002", role: "Wasit 2", status: "verified" },
  { id: "TGS043", matchId: "PRT009", officialId: "PDK003", role: "Timekeeper", status: "verified" },
  { id: "TGS044", matchId: "PRT009", officialId: "PDK005", role: "Pengawas Pertandingan", status: "verified" },
  { id: "TGS045", matchId: "PRT009", officialId: "PDK007", role: "Petugas Meja", status: "verified" },

  { id: "TGS046", matchId: "PRT010", officialId: "PDK002", role: "Wasit 1", status: "verified" },
  { id: "TGS047", matchId: "PRT010", officialId: "PDK003", role: "Wasit 2", status: "verified" },
  { id: "TGS048", matchId: "PRT010", officialId: "PDK004", role: "Timekeeper", status: "verified" },
  { id: "TGS049", matchId: "PRT010", officialId: "PDK006", role: "Pengawas Pertandingan", status: "verified" },
  { id: "TGS050", matchId: "PRT010", officialId: "PDK008", role: "Petugas Meja", status: "verified" },

  { id: "TGS051", matchId: "PRT011", officialId: "PDK003", role: "Wasit 1", status: "verified" },
  { id: "TGS052", matchId: "PRT011", officialId: "PDK004", role: "Wasit 2", status: "verified" },
  { id: "TGS053", matchId: "PRT011", officialId: "PDK001", role: "Timekeeper", status: "verified" },
  { id: "TGS054", matchId: "PRT011", officialId: "PDK005", role: "Pengawas Pertandingan", status: "verified" },
  { id: "TGS055", matchId: "PRT011", officialId: "PDK007", role: "Petugas Meja", status: "verified" },

  { id: "TGS056", matchId: "PRT012", officialId: "PDK004", role: "Wasit 1", status: "verified" },
  { id: "TGS057", matchId: "PRT012", officialId: "PDK001", role: "Wasit 2", status: "verified" },
  { id: "TGS058", matchId: "PRT012", officialId: "PDK002", role: "Timekeeper", status: "verified" },
  { id: "TGS059", matchId: "PRT012", officialId: "PDK006", role: "Pengawas Pertandingan", status: "verified" },
  { id: "TGS060", matchId: "PRT012", officialId: "PDK008", role: "Petugas Meja", status: "verified" },

  { id: "TGS061", matchId: "PRT013", officialId: "PDK001", role: "Wasit 1", status: "verified" },
  { id: "TGS062", matchId: "PRT013", officialId: "PDK002", role: "Wasit 2", status: "verified" },
  { id: "TGS063", matchId: "PRT013", officialId: "PDK003", role: "Timekeeper", status: "verified" },
  { id: "TGS064", matchId: "PRT013", officialId: "PDK005", role: "Pengawas Pertandingan", status: "verified" },
  { id: "TGS065", matchId: "PRT013", officialId: "PDK007", role: "Petugas Meja", status: "verified" },

  { id: "TGS066", matchId: "PRT014", officialId: "PDK002", role: "Wasit 1", status: "verified" },
  { id: "TGS067", matchId: "PRT014", officialId: "PDK003", role: "Wasit 2", status: "verified" },
  { id: "TGS068", matchId: "PRT014", officialId: "PDK004", role: "Timekeeper", status: "verified" },
  { id: "TGS069", matchId: "PRT014", officialId: "PDK006", role: "Pengawas Pertandingan", status: "verified" },
  { id: "TGS070", matchId: "PRT014", officialId: "PDK008", role: "Petugas Meja", status: "verified" },

  { id: "TGS071", matchId: "PRT015", officialId: "PDK003", role: "Wasit 1", status: "verified" },
  { id: "TGS072", matchId: "PRT015", officialId: "PDK004", role: "Wasit 2", status: "verified" },
  { id: "TGS073", matchId: "PRT015", officialId: "PDK001", role: "Timekeeper", status: "verified" },
  { id: "TGS074", matchId: "PRT015", officialId: "PDK005", role: "Pengawas Pertandingan", status: "verified" },
  { id: "TGS075", matchId: "PRT015", officialId: "PDK007", role: "Petugas Meja", status: "verified" },

  { id: "TGS076", matchId: "PRT016", officialId: "PDK004", role: "Wasit 1", status: "verified" },
  { id: "TGS077", matchId: "PRT016", officialId: "PDK001", role: "Wasit 2", status: "verified" },
  { id: "TGS078", matchId: "PRT016", officialId: "PDK002", role: "Timekeeper", status: "verified" },
  { id: "TGS079", matchId: "PRT016", officialId: "PDK006", role: "Pengawas Pertandingan", status: "verified" },
  { id: "TGS080", matchId: "PRT016", officialId: "PDK008", role: "Petugas Meja", status: "verified" },
];
