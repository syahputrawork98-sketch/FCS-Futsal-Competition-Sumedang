import type { MatchFilters, MatchRecord, MatchesPrototypeData } from "../types/matches.types";

export function filterAndSortMatches(
  data: MatchesPrototypeData,
  filters: MatchFilters
): MatchRecord[] {
  const teamMap = new Map(data.teams.map((t) => [t.id, t]));
  const venueMap = new Map(data.venues.map((v) => [v.id, v]));

  const filtered = data.matches.filter((match) => {
    // 1. Tab status filter
    if (filters.tab === "results") {
      if (match.status !== "finished" || match.teamAScore === null || match.teamBScore === null) {
        return false;
      }
    } else if (filters.tab === "schedule") {
      if (match.status !== "scheduled" && match.status !== "postponed") {
        return false;
      }
    } else if (filters.tab === "live") {
      if (match.status !== "live") {
        return false;
      }
    }

    // 2. Phase filter
    if (filters.phaseId && match.phaseId !== filters.phaseId) {
      return false;
    }

    // 3. Group filter
    if (filters.groupId && match.groupId !== filters.groupId) {
      return false;
    }

    // 4. Team filter
    if (filters.teamId) {
      if (match.teamAId !== filters.teamId && match.teamBId !== filters.teamId) {
        return false;
      }
    }

    // 5. Date filter
    if (filters.date && match.date !== filters.date) {
      return false;
    }

    // 6. Search query
    if (filters.search.trim()) {
      const q = filters.search.trim().toLowerCase();
      const teamA = teamMap.get(match.teamAId);
      const teamB = teamMap.get(match.teamBId);
      const venue = venueMap.get(match.venueId);

      const matchIdMatch = match.id.toLowerCase().includes(q);
      const matchNumMatch =
        match.number.toString() === q ||
        `pertandingan ${match.number}`.includes(q) ||
        `laga ${match.number}`.includes(q);

      const teamAMatch =
        !!teamA &&
        (teamA.name.toLowerCase().includes(q) || teamA.shortName.toLowerCase().includes(q));

      const teamBMatch =
        !!teamB &&
        (teamB.name.toLowerCase().includes(q) || teamB.shortName.toLowerCase().includes(q));

      const venueMatch = !!venue && venue.name.toLowerCase().includes(q);

      if (!matchIdMatch && !matchNumMatch && !teamAMatch && !teamBMatch && !venueMatch) {
        return false;
      }
    }

    return true;
  });

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    if (filters.tab === "schedule" || filters.tab === "live") {
      // Sort ASC for schedule
      if (a.date !== b.date) return a.date.localeCompare(b.date);
      if (a.startTime !== b.startTime) return a.startTime.localeCompare(b.startTime);
      return a.number - b.number;
    } else {
      // Sort DESC for results and all (post-tournament)
      if (a.date !== b.date) return b.date.localeCompare(a.date);
      if (a.startTime !== b.startTime) return b.startTime.localeCompare(a.startTime);
      return b.number - a.number;
    }
  });

  return sorted;
}
