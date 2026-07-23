"use client";

import React, { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PageContainer } from "@/components/layout/page-container/page-container";
import { Info } from "lucide-react";
import type { MatchFilters, MatchTab } from "./types/matches.types";
import { matchesPrototypeData } from "./data/matches-prototype-data";
import { filterAndSortMatches } from "./lib/filter-matches";
import { groupMatchesByDate } from "./lib/group-matches-by-date";
import {
  DEFAULT_MATCH_FILTERS,
  isFiltersDefault,
  parseMatchSearchParams,
  serializeMatchFiltersToSearchParams,
} from "./lib/match-search-params";

import { MatchPageHeader } from "./components/match-page-header";
import { CompetitionContext } from "./components/competition-context";
import { MatchStatusTabs } from "./components/match-status-tabs";
import { MatchFilterToolbar } from "./components/match-filter-toolbar";
import { ActiveFilterSummary } from "./components/active-filter-summary";
import { MatchList } from "./components/match-list";
import { MatchesEmptyState } from "./components/matches-empty-state";
import { MobileFilterSheet } from "./components/mobile-filter-sheet";
import { RelatedNavigation } from "./components/related-navigation";

import styles from "./matches-page.module.css";

export function MatchesPage() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);

  // Parse current URL params into filters state
  const filters = useMemo(() => {
    const rawObj: Record<string, string | string[]> = {};
    searchParams.forEach((value, key) => {
      rawObj[key] = value;
    });
    return parseMatchSearchParams(rawObj);
  }, [searchParams]);

  // Update URL helper
  const updateFiltersInUrl = (newFilters: MatchFilters) => {
    const newParams = serializeMatchFiltersToSearchParams(newFilters);
    const queryString = newParams.toString();
    const targetUrl = queryString ? `${pathname}?${queryString}` : pathname;
    router.replace(targetUrl, { scroll: false });
  };

  const handleFilterChange = (updates: Partial<MatchFilters>) => {
    const updated: MatchFilters = {
      ...filters,
      ...updates,
      page: 1, // Reset page on filter change
    };
    updateFiltersInUrl(updated);
  };

  const handleResetFilters = () => {
    updateFiltersInUrl(DEFAULT_MATCH_FILTERS);
  };

  const handleRemoveFilterKey = (key: keyof MatchFilters) => {
    const updated = { ...filters, page: 1 };
    if (key === "tab") {
      updated.tab = DEFAULT_MATCH_FILTERS.tab;
    } else if (key === "phaseId") {
      updated.phaseId = null;
      updated.groupId = null;
    } else if (key === "groupId") {
      updated.groupId = null;
    } else if (key === "teamId") {
      updated.teamId = null;
    } else if (key === "date") {
      updated.date = null;
    } else if (key === "search") {
      updated.search = "";
    }
    updateFiltersInUrl(updated);
  };

  // Filter & sort matches
  const filteredMatches = useMemo(() => {
    return filterAndSortMatches(matchesPrototypeData, filters);
  }, [filters]);

  // Group filtered matches by date
  const groupedMatches = useMemo(() => {
    return groupMatchesByDate(filteredMatches);
  }, [filteredMatches]);

  // Compute counts for status tabs based on current non-tab filters
  const tabCounts = useMemo(() => {
    const baseFilters = { ...filters };
    const tabs: MatchTab[] = ["all", "schedule", "live", "results"];
    const counts: Record<MatchTab, number> = {
      all: 0,
      schedule: 0,
      live: 0,
      results: 0,
    };

    for (const t of tabs) {
      const res = filterAndSortMatches(matchesPrototypeData, {
        ...baseFilters,
        tab: t,
      });
      counts[t] = res.length;
    }

    return counts;
  }, [filters]);

  const isFiltered = !isFiltersDefault(filters);

  // Count active non-default filter items
  const activeFilterCount = useMemo(() => {
    let count = 0;
    if (filters.tab !== DEFAULT_MATCH_FILTERS.tab) count++;
    if (filters.phaseId) count++;
    if (filters.groupId) count++;
    if (filters.teamId) count++;
    if (filters.date) count++;
    if (filters.search.trim()) count++;
    return count;
  }, [filters]);

  return (
    <main className={styles.main}>
      <PageContainer>
        {/* Header */}
        <MatchPageHeader
          totalResultsCount={filteredMatches.length}
          isFiltered={isFiltered}
        />

        {/* Competition Context Bar */}
        <CompetitionContext competition={matchesPrototypeData.competition} />

        {/* Status Tabs */}
        <MatchStatusTabs
          activeTab={filters.tab}
          tabCounts={tabCounts}
          onTabChange={(tab) => handleFilterChange({ tab })}
        />

        {/* Filter Toolbar (Desktop & Mobile trigger) */}
        <MatchFilterToolbar
          filters={filters}
          prototypeData={matchesPrototypeData}
          onFilterChange={handleFilterChange}
          onResetFilters={handleResetFilters}
          isFiltered={isFiltered}
          activeFilterCount={activeFilterCount}
          onOpenMobileSheet={() => setIsMobileSheetOpen(true)}
        />

        {/* Active Filter Chips Summary */}
        <ActiveFilterSummary
          filters={filters}
          prototypeData={matchesPrototypeData}
          onRemoveFilter={handleRemoveFilterKey}
          onResetFilters={handleResetFilters}
        />

        {/* Match List or Contextual Empty State */}
        <div id="match-list-panel" tabIndex={-1} style={{ outline: "none" }}>
          {filteredMatches.length > 0 ? (
            <MatchList
              groupedMatches={groupedMatches}
              prototypeData={matchesPrototypeData}
            />
          ) : (
            <MatchesEmptyState
              tab={filters.tab}
              isFiltered={isFiltered}
              onResetFilters={handleResetFilters}
              onSwitchToResultsTab={() => handleFilterChange({ tab: "results" })}
            />
          )}
        </div>

        {/* Related Navigation */}
        <RelatedNavigation />

        {/* Data Simulation Notice */}
        <aside className={styles.noticeBanner} aria-label="Catatan Prototype Data">
          <Info size={16} aria-hidden="true" color="var(--color-accent-amber, #f59e0b)" />
          <span>
            <strong>Simulasi Prototype FCS:</strong> Seluruh jadwal, hasil, dan skor pada halaman ini merupakan data simulasi untuk keperluan evaluasi prototype website FCS Industrial Cup Sumedang 2026.
          </span>
        </aside>
      </PageContainer>

      {/* Mobile Filter Bottom Sheet */}
      <MobileFilterSheet
        isOpen={isMobileSheetOpen}
        onClose={() => setIsMobileSheetOpen(false)}
        filters={filters}
        prototypeData={matchesPrototypeData}
        onApplyFilters={handleFilterChange}
        onResetFilters={handleResetFilters}
      />
    </main>
  );
}
