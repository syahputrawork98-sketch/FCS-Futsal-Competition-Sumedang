"use client";

import { useState, useRef } from "react";
import { StandingsTable } from "./standings-table";
import styles from "./standings-tabs.module.css";
import type { HomeStanding } from "../types/home.types";

type StandingsTabsProps = {
  standings: Record<string, HomeStanding[]>;
};

export function StandingsTabs({ standings }: StandingsTabsProps) {
  const groups = Object.keys(standings);
  const [activeGroup, setActiveGroup] = useState(groups[0]);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  if (groups.length === 0) return null;

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;

    if (e.key === "ArrowRight") {
      nextIndex = (index + 1) % groups.length;
    } else if (e.key === "ArrowLeft") {
      nextIndex = (index - 1 + groups.length) % groups.length;
    } else if (e.key === "Home") {
      nextIndex = 0;
    } else if (e.key === "End") {
      nextIndex = groups.length - 1;
    }

    if (nextIndex !== index) {
      e.preventDefault();
      setActiveGroup(groups[nextIndex]);
      tabsRef.current[nextIndex]?.focus();
    }
  };

  return (
    <div className={styles.container}>
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
