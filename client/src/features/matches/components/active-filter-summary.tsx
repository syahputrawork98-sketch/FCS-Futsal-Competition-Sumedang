import React from "react";
import { X } from "lucide-react";
import type { MatchFilters, MatchesPrototypeData } from "../types/matches.types";
import { formatConciseIndonesianDate } from "../lib/match-formatters";
import { DEFAULT_MATCH_FILTERS } from "../lib/match-search-params";
import styles from "./active-filter-summary.module.css";

type ActiveFilterSummaryProps = {
  filters: MatchFilters;
  prototypeData: MatchesPrototypeData;
  onRemoveFilter: (key: keyof MatchFilters) => void;
  onResetFilters: () => void;
};

type ChipItem = {
  key: keyof MatchFilters;
  categoryLabel: string;
  valueLabel: string;
};

export function ActiveFilterSummary({
  filters,
  prototypeData,
  onRemoveFilter,
  onResetFilters,
}: ActiveFilterSummaryProps) {
  const chips: ChipItem[] = [];

  // Tab (if non-default)
  if (filters.tab !== DEFAULT_MATCH_FILTERS.tab) {
    const tabLabels: Record<string, string> = {
      all: "Semua",
      schedule: "Jadwal",
      live: "Berlangsung",
      results: "Hasil",
    };
    chips.push({
      key: "tab",
      categoryLabel: "Status",
      valueLabel: tabLabels[filters.tab] || filters.tab,
    });
  }

  // Phase
  if (filters.phaseId) {
    const phase = prototypeData.phases.find((p) => p.id === filters.phaseId);
    if (phase) {
      chips.push({
        key: "phaseId",
        categoryLabel: "Fase",
        valueLabel: phase.name,
      });
    }
  }

  // Group
  if (filters.groupId) {
    const group = prototypeData.groups.find((g) => g.id === filters.groupId);
    if (group) {
      chips.push({
        key: "groupId",
        categoryLabel: "Grup",
        valueLabel: group.name,
      });
    }
  }

  // Team
  if (filters.teamId) {
    const team = prototypeData.teams.find((t) => t.id === filters.teamId);
    if (team) {
      chips.push({
        key: "teamId",
        categoryLabel: "Tim",
        valueLabel: team.name,
      });
    }
  }

  // Date
  if (filters.date) {
    chips.push({
      key: "date",
      categoryLabel: "Tanggal",
      valueLabel: formatConciseIndonesianDate(filters.date),
    });
  }

  // Search
  if (filters.search.trim()) {
    chips.push({
      key: "search",
      categoryLabel: "Cari",
      valueLabel: `"${filters.search.trim()}"`,
    });
  }

  if (chips.length === 0) return null;

  return (
    <div className={styles.container} aria-label="Filter Aktif">
      <span className={styles.label}>Filter Aktif:</span>
      <div className={styles.chips}>
        {chips.map((chip) => (
          <div key={chip.key} className={styles.chip}>
            <span className={styles.chipCategory}>{chip.categoryLabel}:</span>
            <span>{chip.valueLabel}</span>
            <button
              type="button"
              className={styles.removeButton}
              onClick={() => onRemoveFilter(chip.key)}
              aria-label={`Hapus filter ${chip.categoryLabel} ${chip.valueLabel}`}
            >
              <X size={14} />
            </button>
          </div>
        ))}

        <button
          type="button"
          className={styles.clearAllButton}
          onClick={onResetFilters}
        >
          Hapus Semua
        </button>
      </div>
    </div>
  );
}
