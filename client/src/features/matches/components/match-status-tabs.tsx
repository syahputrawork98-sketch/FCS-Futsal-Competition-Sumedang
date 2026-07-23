import React from "react";
import type { MatchTab } from "../types/matches.types";
import styles from "./match-status-tabs.module.css";

type TabOption = {
  id: MatchTab;
  label: string;
  count: number;
};

type MatchStatusTabsProps = {
  activeTab: MatchTab;
  tabCounts: Record<MatchTab, number>;
  onTabChange: (tab: MatchTab) => void;
};

export function MatchStatusTabs({
  activeTab,
  tabCounts,
  onTabChange,
}: MatchStatusTabsProps) {
  // Directive 2: Order MUST be Semua -> Jadwal -> Berlangsung -> Hasil
  const tabs: TabOption[] = [
    { id: "all", label: "Semua", count: tabCounts.all },
    { id: "schedule", label: "Jadwal", count: tabCounts.schedule },
    { id: "live", label: "Berlangsung", count: tabCounts.live },
    { id: "results", label: "Hasil", count: tabCounts.results },
  ];

  return (
    <div
      role="tablist"
      aria-label="Filter Status Pertandingan"
      className={styles.tabContainer}
    >
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            role="tab"
            type="button"
            aria-selected={isActive}
            aria-controls="match-list-panel"
            tabIndex={isActive ? 0 : -1}
            className={`${styles.tabButton} ${isActive ? styles.activeTab : ""}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span>{tab.label}</span>
            <span className={styles.tabCount}>{tab.count}</span>
          </button>
        );
      })}
    </div>
  );
}
