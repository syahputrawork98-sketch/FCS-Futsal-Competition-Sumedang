import type { MatchFilters, MatchTab, PublicMatchTabParam } from "../types/matches.types";

const TAB_INTERNAL_TO_PUBLIC: Record<MatchTab, PublicMatchTabParam> = {
  all: "semua",
  schedule: "jadwal",
  live: "berlangsung",
  results: "hasil",
};

const TAB_PUBLIC_TO_INTERNAL: Record<PublicMatchTabParam, MatchTab> = {
  semua: "all",
  jadwal: "schedule",
  berlangsung: "live",
  hasil: "results",
};

export const DEFAULT_MATCH_FILTERS: MatchFilters = {
  tab: "results",
  phaseId: null,
  groupId: null,
  teamId: null,
  date: null,
  search: "",
  page: 1,
};

export function publicParamToInternalTab(paramValue: string | null): MatchTab {
  if (!paramValue) return DEFAULT_MATCH_FILTERS.tab;
  const normalized = paramValue.toLowerCase() as PublicMatchTabParam;
  return TAB_PUBLIC_TO_INTERNAL[normalized] || DEFAULT_MATCH_FILTERS.tab;
}

export function internalTabToPublicParam(tab: MatchTab): PublicMatchTabParam {
  return TAB_INTERNAL_TO_PUBLIC[tab] || "hasil";
}

export function parseMatchSearchParams(searchParams: {
  [key: string]: string | string[] | undefined;
}): MatchFilters {
  const getSingle = (key: string): string | undefined => {
    const val = searchParams[key];
    if (Array.isArray(val)) return val[0];
    return val;
  };

  const rawStatus = getSingle("status");
  const tab = publicParamToInternalTab(rawStatus || null);

  const phaseId = getSingle("fase") || null;
  let groupId = getSingle("grup") || null;

  // Clear group filter if a knockout phase is selected
  const knockoutPhaseIds = ["FAS02", "FAS03", "FAS04"];
  if (phaseId && knockoutPhaseIds.includes(phaseId)) {
    groupId = null;
  }

  const teamId = getSingle("tim") || null;
  const date = getSingle("tanggal") || null;
  const rawQ = getSingle("q") || "";
  const search = rawQ.trim();

  const rawPage = getSingle("page");
  let page = 1;
  if (rawPage) {
    const parsed = parseInt(rawPage, 10);
    if (!isNaN(parsed) && parsed > 0) {
      page = parsed;
    }
  }

  return {
    tab,
    phaseId,
    groupId,
    teamId,
    date,
    search,
    page,
  };
}

export function serializeMatchFiltersToSearchParams(
  filters: MatchFilters
): URLSearchParams {
  const params = new URLSearchParams();

  if (filters.tab !== DEFAULT_MATCH_FILTERS.tab) {
    params.set("status", internalTabToPublicParam(filters.tab));
  }

  if (filters.phaseId) {
    params.set("fase", filters.phaseId);
  }

  if (filters.groupId && (!filters.phaseId || filters.phaseId === "FAS01")) {
    params.set("grup", filters.groupId);
  }

  if (filters.teamId) {
    params.set("tim", filters.teamId);
  }

  if (filters.date) {
    params.set("tanggal", filters.date);
  }

  if (filters.search.trim()) {
    params.set("q", filters.search.trim());
  }

  if (filters.page > 1) {
    params.set("page", filters.page.toString());
  }

  return params;
}

export function isFiltersDefault(filters: MatchFilters): boolean {
  return (
    filters.tab === DEFAULT_MATCH_FILTERS.tab &&
    !filters.phaseId &&
    !filters.groupId &&
    !filters.teamId &&
    !filters.date &&
    !filters.search.trim() &&
    filters.page === 1
  );
}
