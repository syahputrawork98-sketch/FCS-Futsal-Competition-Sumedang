import type { MatchEventType } from "../types/match-detail.types";

export function getMatchEventTypeLabel(type: MatchEventType): string {
  switch (type) {
    case "goal":
      return "Gol";
    case "yellow_card":
      return "Kartu Kuning";
    case "red_card":
      return "Kartu Merah";
    case "own_goal":
      return "Gol Bunuh Diri";
    case "substitution":
      return "Pergantian Pemain";
    default:
      return "Kejadian";
  }
}

export function getPeriodLabel(
  period: "first_half" | "second_half" | "extra_time" | "penalties" | "unknown"
): string {
  switch (period) {
    case "first_half":
      return "Babak 1";
    case "second_half":
      return "Babak 2";
    case "extra_time":
      return "Babak Tambahan";
    case "penalties":
      return "Adu Penalti";
    default:
      return "";
  }
}
