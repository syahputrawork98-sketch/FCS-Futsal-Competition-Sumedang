const INDONESIAN_DAYS = [
  "Minggu",
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
  "Jumat",
  "Sabtu",
];

const INDONESIAN_MONTHS = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

/**
  * Formats ISO date string "YYYY-MM-DD" to full Indonesian date label:
  * e.g. "2026-08-09" -> "Minggu, 9 Agustus 2026"
  */
export function formatFullIndonesianDate(isoDateStr: string): string {
  if (!isoDateStr) return "";
  const parts = isoDateStr.split("-");
  if (parts.length !== 3) return isoDateStr;

  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);

  const d = new Date(year, month, day);
  const dayName = INDONESIAN_DAYS[d.getDay()];
  const monthName = INDONESIAN_MONTHS[month];

  return `${dayName}, ${day} ${monthName} ${year}`;
}

/**
  * Formats ISO date string "YYYY-MM-DD" to concise Indonesian date label:
  * e.g. "2026-08-09" -> "9 Agustus 2026"
  */
export function formatConciseIndonesianDate(isoDateStr: string): string {
  if (!isoDateStr) return "";
  const parts = isoDateStr.split("-");
  if (parts.length !== 3) return isoDateStr;

  const year = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);

  const monthName = INDONESIAN_MONTHS[month];
  return `${day} ${monthName} ${year}`;
}

/**
  * Formats 24h time "13:00" to "13.00"
  */
export function formatMatchTime(timeStr: string): string {
  if (!timeStr) return "";
  return timeStr.replace(":", ".");
}

/**
  * Returns display status label for MatchStatusCode
  */
export function getMatchStatusLabel(status: string): string {
  switch (status) {
    case "scheduled":
      return "Terjadwal";
    case "live":
      return "Berlangsung";
    case "finished":
      return "Selesai";
    case "postponed":
      return "Ditunda";
    case "cancelled":
      return "Dibatalkan";
    default:
      return status;
  }
}

/**
  * Returns display result status label for MatchResultStatusCode
  */
export function getResultStatusLabel(resultStatus: string | null): string | null {
  if (!resultStatus) return null;
  switch (resultStatus) {
    case "official":
      return "Resmi";
    case "provisional":
      return "Sementara";
    default:
      return resultStatus;
  }
}
