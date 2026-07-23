import React, { useEffect, useRef, useState } from "react";
import { X, RotateCcw } from "lucide-react";
import type { MatchFilters, MatchesPrototypeData } from "../types/matches.types";
import { formatConciseIndonesianDate } from "../lib/match-formatters";
import styles from "./mobile-filter-sheet.module.css";

type MobileFilterSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  filters: MatchFilters;
  prototypeData: MatchesPrototypeData;
  onApplyFilters: (newFilters: Partial<MatchFilters>) => void;
  onResetFilters: () => void;
};

export function MobileFilterSheet({
  isOpen,
  onClose,
  filters,
  prototypeData,
  onApplyFilters,
  onResetFilters,
}: MobileFilterSheetProps) {
  const [draftFilters, setDraftFilters] = useState<MatchFilters>(filters);
  const [prevFilters, setPrevFilters] = useState<MatchFilters>(filters);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  if (filters !== prevFilters) {
    setPrevFilters(filters);
    setDraftFilters(filters);
  }

  // Lock body scroll & handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isKnockoutPhase =
    draftFilters.phaseId && ["FAS02", "FAS03", "FAS04"].includes(draftFilters.phaseId);

  const dateOptions = Array.from(
    new Set(prototypeData.matches.map((m) => m.date))
  ).sort();

  const handleApply = () => {
    onApplyFilters(draftFilters);
    onClose();
  };

  const handleReset = () => {
    onResetFilters();
    onClose();
  };

  return (
    <div
      className={styles.overlay}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={styles.sheet}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-filter-title"
      >
        <div className={styles.header}>
          <h2 id="mobile-filter-title" className={styles.title}>
            Filter Pertandingan
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Tutup filter"
          >
            <X size={20} />
          </button>
        </div>

        <div className={styles.body}>
          {/* Phase */}
          <div className={styles.group}>
            <label htmlFor="mobile-filter-phase" className={styles.label}>
              Fase
            </label>
            <select
              id="mobile-filter-phase"
              className={styles.select}
              value={draftFilters.phaseId || ""}
              onChange={(e) => {
                const val = e.target.value || null;
                setDraftFilters((prev) => ({
                  ...prev,
                  phaseId: val,
                  groupId: val && ["FAS02", "FAS03", "FAS04"].includes(val) ? null : prev.groupId,
                }));
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

          {/* Group */}
          <div className={styles.group}>
            <label htmlFor="mobile-filter-group" className={styles.label}>
              Grup
            </label>
            <select
              id="mobile-filter-group"
              className={styles.select}
              value={draftFilters.groupId || ""}
              disabled={Boolean(isKnockoutPhase)}
              onChange={(e) =>
                setDraftFilters((prev) => ({
                  ...prev,
                  groupId: e.target.value || null,
                }))
              }
            >
              <option value="">Semua Grup</option>
              {prototypeData.groups.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.name}
                </option>
              ))}
            </select>
          </div>

          {/* Team */}
          <div className={styles.group}>
            <label htmlFor="mobile-filter-team" className={styles.label}>
              Tim
            </label>
            <select
              id="mobile-filter-team"
              className={styles.select}
              value={draftFilters.teamId || ""}
              onChange={(e) =>
                setDraftFilters((prev) => ({
                  ...prev,
                  teamId: e.target.value || null,
                }))
              }
            >
              <option value="">Semua Tim</option>
              {prototypeData.teams.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          {/* Date */}
          <div className={styles.group}>
            <label htmlFor="mobile-filter-date" className={styles.label}>
              Tanggal
            </label>
            <select
              id="mobile-filter-date"
              className={styles.select}
              value={draftFilters.date || ""}
              onChange={(e) =>
                setDraftFilters((prev) => ({
                  ...prev,
                  date: e.target.value || null,
                }))
              }
            >
              <option value="">Semua Tanggal</option>
              {dateOptions.map((d) => (
                <option key={d} value={d}>
                  {formatConciseIndonesianDate(d)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={styles.footer}>
          <button
            type="button"
            className={styles.resetButton}
            onClick={handleReset}
          >
            <RotateCcw size={16} style={{ display: "inline", marginRight: "4px" }} />
            Reset
          </button>

          <button
            type="button"
            className={styles.applyButton}
            onClick={handleApply}
          >
            Terapkan Filter
          </button>
        </div>
      </div>
    </div>
  );
}
