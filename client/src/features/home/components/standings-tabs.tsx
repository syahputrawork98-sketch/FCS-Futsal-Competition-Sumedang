import { useState, useRef } from "react";
import { StandingsTable } from "./standings-table";
import styles from "./standings-tabs.module.css";
import type { HomeStanding } from "../types/home.types";

type StandingsTabsProps = {
  groupA: HomeStanding[];
  groupB: HomeStanding[];
};

export function StandingsTabs({ groupA, groupB }: StandingsTabsProps) {
  const [activeTab, setActiveTab] = useState<"A" | "B">("A");
  
  const tabARef = useRef<HTMLButtonElement>(null);
  const tabBRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    let nextTab = activeTab;

    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      nextTab = activeTab === "A" ? "B" : "A";
    } else if (e.key === "Home") {
      nextTab = "A";
    } else if (e.key === "End") {
      nextTab = "B";
    }

    if (nextTab !== activeTab) {
      e.preventDefault();
      setActiveTab(nextTab);
      if (nextTab === "A") {
        tabARef.current?.focus();
      } else {
        tabBRef.current?.focus();
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.tabList} role="tablist" aria-label="Klasemen Grup">
        <button
          ref={tabARef}
          role="tab"
          aria-selected={activeTab === "A"}
          aria-controls="panel-a"
          id="tab-a"
          tabIndex={activeTab === "A" ? 0 : -1}
          className={`${styles.tab} ${activeTab === "A" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("A")}
          onKeyDown={handleKeyDown}
        >
          Grup A
        </button>
        <button
          ref={tabBRef}
          role="tab"
          aria-selected={activeTab === "B"}
          aria-controls="panel-b"
          id="tab-b"
          tabIndex={activeTab === "B" ? 0 : -1}
          className={`${styles.tab} ${activeTab === "B" ? styles.activeTab : ""}`}
          onClick={() => setActiveTab("B")}
          onKeyDown={handleKeyDown}
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
        {activeTab === "A" && <StandingsTable standings={groupA} />}
      </div>
      
      <div
        id="panel-b"
        role="tabpanel"
        aria-labelledby="tab-b"
        hidden={activeTab !== "B"}
      >
        {activeTab === "B" && <StandingsTable standings={groupB} />}
      </div>
    </div>
  );
}
