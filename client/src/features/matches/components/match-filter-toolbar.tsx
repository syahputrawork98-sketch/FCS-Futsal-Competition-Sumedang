import React from "react";
import { Search, X, RotateCcw, SlidersHorizontal } from "lucide-react";
import type { MatchFilters, MatchesPrototypeData } from "../types/matches.types";
import { formatConciseIndonesianDate } from "../lib/match-formatters";
import styles from "./match-filter-toolbar.module.css";

type MatchFilterToolbarProps = {
  filters: MatchFilters;
  prototypeData: MatchesPrototypeData;
  onFilterChange: (updates: Partial<MatchFilters>) => void;
  onResetFilters: () => void;
  isFiltered: boolean;
  activeFilterCount: number;
  onOpenMobileSheet: () => void;
};

export function MatchFilterToolbar({
  filters,
  prototypeData,
  onFilterChange,
  onResetFilters,
  isFiltered,
  activeFilterCount,
  onOpenMobileSheet,
}: MatchFilterToolbarProps) {
  const isKnockoutPhase =
    filters.phaseId && ["FAS02", "FAS03", "FAS04"].includes(filters.phaseId);

  // Available dates in dataset
  const dateOptions = Array.from(
    new Set(prototypeData.matches.map((m) => m.date))
  ).sort();

  return (
    <div className={styles.toolbar} aria-label="Toolbar Filter dan Pencarian">
      <div className={styles.searchRow}>
        <div className={styles.searchField}>
          <Search size={16} className={styles.searchIcon} aria-hidden="true" />
          <label htmlFor="search-input" className="sr-only">
            Cari pertandingan atau tim
          </label>
          <input
            id="search-input"
            type="text"
            className={styles.searchInput}
            placeholder="Cari nomor pertandingan, ID, nama tim, venue..."
            value={filters.search}
            onChange={(e) => onFilterChange({ search: e.target.value })}
          />
          {filters.search && (
            <button
              type="button"
              className={styles.clearSearch}
              onClick={() => onFilterChange({ search: "" })}
              aria-label="Hapus pencarian"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <button
          type="button"
          className={styles.mobileFilterTrigger}
          onClick={onOpenMobileSheet}
        >
          <SlidersHorizontal size={16} aria-hidden="true" />
          <span>Filter {activeFilterCount > 0 ? `(${activeFilterCount})` : ""}</span>
        </button>
      </div>

      {/* Desktop Filters */}
      <div className={styles.filtersGrid}>
        {/* Phase filter */}
        <div className={styles.filterGroup}>
          <label htmlFor="filter-phase" className={styles.label}>
            Fase
          </label>
          <select
            id="filter-phase"
            className={styles.select}
            value={filters.phaseId || ""}
            onChange={(e) => {
              const val = e.target.value || null;
              const updates: Partial<MatchFilters> = { phaseId: val };
              if (val && ["FAS02", "FAS03", "FAS04"].includes(val)) {
                updates.groupId = null;
              }
              onFilterChange(updates);
            }}
          >
            <option value="">Semua Fase</option>
            {prototypeData.phases.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>

        {/* Group filter */}
        <div className={styles.filterGroup}>
          <label htmlFor="filter-group" className={styles.label}>
            Grup
          </label>
          <select
            id="filter-group"
            className={styles.select}
            value={filters.groupId || ""}
            disabled={Boolean(isKnockoutPhase)}
            onChange={(e) => onFilterChange({ groupId: e.target.value || null })}
          >
            <option value="">Semua Grup</option>
            {prototypeData.groups.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </div>

        {/* Team filter */}
        <div className={styles.filterGroup}>
          <label htmlFor="filter-team" className={styles.label}>
            Tim
          </label>
          <select
            id="filter-team"
            className={styles.select}
            value={filters.teamId || ""}
            onChange={(e) => onFilterChange({ teamId: e.target.value || null })}
          >
            <option value="">Semua Tim</option>
            {prototypeData.teams.map((t) => (
              <option key={t.id} value={t.id}>
                {t.name}
              </option>
            ))}
          </select>
        </div>

        {/* Date filter */}
        <div className={styles.filterGroup}>
          <label htmlFor="filter-date" className={styles.label}>
            Tanggal
          </label>
          <select
            id="filter-date"
            className={styles.select}
            value={filters.date || ""}
            onChange={(e) => onFilterChange({ date: e.target.value || null })}
          >
            <option value="">Semua Tanggal</option>
            {dateOptions.map((d) => (
              <option key={d} value={d}>
                {formatConciseIndonesianDate(d)}
              </option>
            ))}
          </select>
        </div>

        {/* Reset button */}
        {isFiltered && (
          <button
            type="button"
            className={styles.resetButton}
            onClick={onResetFilters}
          >
            <RotateCcw size={14} aria-hidden="true" />
            <span>Reset Filter</span>
          </button>
        )}
      </div>
    </div>
  );
}
