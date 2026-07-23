"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import type { StandingsPageData } from "./types/standings.types";
import { parseGroupQuery } from "./lib/standings-search-params";
import { StandingsPageHeader } from "./components/standings-page-header";
import { StandingsCompetitionContext } from "./components/standings-competition-context";
import { StandingsSummary } from "./components/standings-summary";
import { GroupNavigation } from "./components/group-navigation";
import { GroupStandingsSection } from "./components/group-standings-section";
import { QualificationExplanation } from "./components/qualification-explanation";
import { TiebreakerRules } from "./components/tiebreaker-rules";
import { StandingsLegend } from "./components/standings-legend";
import { StandingsRelatedNavigation } from "./components/standings-related-navigation";
import { StandingsEmptyState, StandingsPartialState } from "./components/standings-states";
import { StandingsWarningsList } from "./components/standings-warnings-list";
import styles from "./standings-page.module.css";

type ClientStandingsContainerProps = {
  data: StandingsPageData;
};

export function ClientStandingsContainer({ data }: ClientStandingsContainerProps) {
  const searchParams = useSearchParams();
  const activeGroupId = parseGroupQuery(searchParams.get("grup") ?? undefined);

  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (data.status === "unavailable" || data.groups.length === 0) {
    return (
      <div className={styles.container}>
        <StandingsPageHeader statusLabel="Belum Tersedia" />
        <StandingsCompetitionContext competition={data.competition} />
        <StandingsEmptyState />
      </div>
    );
  }

  // Requirement 6: On mobile without query, GRPA active and only Group A is visible
  const effectiveActiveGroup = isMobile && activeGroupId === null ? "GRPA" : activeGroupId;

  const visibleGroups = effectiveActiveGroup
    ? data.groups.filter((g) => g.group.id === effectiveActiveGroup)
    : data.groups;

  const statusLabel =
    data.status === "final"
      ? "Klasemen Final"
      : data.status === "provisional"
      ? "Klasemen Sementara"
      : data.status === "partial"
      ? "Klasemen Partial"
      : "Belum Dimulai";

  return (
    <div className={styles.container}>
      <StandingsPageHeader statusLabel={statusLabel} />

      <StandingsCompetitionContext competition={data.competition} />

      <StandingsSummary
        status={data.status}
        completedMatches={data.completedOfficialGroupMatches}
        totalMatches={data.totalGroupMatches}
        qualifiedTeamCount={data.qualifiedTeamCount}
      />

      {data.warnings.length > 0 && <StandingsWarningsList warnings={data.warnings} />}

      {data.status === "partial" && <StandingsPartialState />}

      <GroupNavigation activeGroupId={effectiveActiveGroup} />

      {visibleGroups.map((groupStandings) => (
        <GroupStandingsSection
          key={groupStandings.group.id}
          groupStandings={groupStandings}
          panelId={`panel-${groupStandings.group.id}`}
          tabId={`tab-${groupStandings.group.id}`}
        />
      ))}

      <QualificationExplanation />

      <TiebreakerRules />

      <StandingsLegend />

      <StandingsRelatedNavigation />

      <div className={styles.notice}>
        <strong>Simulasi Prototype FCS:</strong> Seluruh klasemen, hasil, dan status kelolosan pada halaman ini berasal dari data simulasi terverifikasi untuk keperluan evaluasi prototype FCS Industrial Cup Sumedang 2026.
      </div>
    </div>
  );
}
