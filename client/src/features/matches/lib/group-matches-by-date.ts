import type { MatchGroupedByDate, MatchRecord } from "../types/matches.types";
import { formatFullIndonesianDate } from "./match-formatters";

export function groupMatchesByDate(matches: MatchRecord[]): MatchGroupedByDate[] {
  const groupsMap = new Map<string, MatchRecord[]>();

  for (const match of matches) {
    const dateKey = match.date;
    if (!groupsMap.has(dateKey)) {
      groupsMap.set(dateKey, []);
    }
    groupsMap.get(dateKey)!.push(match);
  }

  const result: MatchGroupedByDate[] = [];
  for (const [date, matchGroup] of groupsMap.entries()) {
    result.push({
      date,
      dateLabel: formatFullIndonesianDate(date),
      matches: matchGroup,
    });
  }

  return result;
}
