"use client";

import { useState } from "react";
import { StandingsTable } from "./standings-table";
import styles from "./standings-tabs.module.css";
import type { HomeStanding } from "../../types/home.types";

type StandingsTabsProps = {
  groupA: HomeStanding[];
  groupB: HomeStanding[];
};

export function StandingsTabs({ groupA, groupB }: StandingsTabsProps) {
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");

  return (
    <div className={styles.container}>
      <div className={styles.tabs} role="tablist" aria-label="Grup Klasemen">
        <button
          role="tab"
          aria-selected={activeTab === "A"}
          aria-controls="panel-a"
          id="tab-a"
          className={`${styles.tab} ${activeTab === "A" ? styles.active : ""}`}
          onClick={() => setActiveTab("A")}
        >
          Grup A
        </button>
        <button
          role="tab"
          aria-selected={activeTab === "B"}
          aria-controls="panel-b"
          id="tab-b"
          className={`${styles.tab} ${activeTab === "B" ? styles.active : ""}`}
          onClick={() => setActiveTab("B")}
        >
          Grup B
        </button>
      </div>

      <div
        id="panel-a"
        role="tabpanel"
        aria-labelledby="tab-a"
        hidden={activeTab !== "A"}
      >
        <StandingsTable caption="Klasemen Grup A" standings={groupA} />
      </div>

      <div
        id="panel-b"
        role="tabpanel"
        aria-labelledby="tab-b"
        hidden={activeTab !== "B"}
      >
        <StandingsTable caption="Klasemen Grup B" standings={groupB} />
      </div>
    </div>
  );
}
