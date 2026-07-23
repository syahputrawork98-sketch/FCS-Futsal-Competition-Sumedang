"use client";

import React from "react";
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

  if (data.status === "unavailable" || data.groups.length === 0) {
    return (
      <div className={styles.container}>
        <StandingsPageHeader statusLabel="Belum Tersedia" />
        <StandingsCompetitionContext competition={data.competition} />
        <StandingsEmptyState />
      </div>
    );
  }

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

      <GroupNavigation activeGroupId={activeGroupId} />

      {data.groups.map((groupStandings) => {
        const isExplicitHide = activeGroupId !== null && activeGroupId !== groupStandings.group.id;
        const isDefaultMobileHide = activeGroupId === null && groupStandings.group.id === "GRPB";

        return (
          <GroupStandingsSection
            key={groupStandings.group.id}
            groupStandings={groupStandings}
            panelId={`panel-${groupStandings.group.id}`}
            tabId={`tab-mobile-${groupStandings.group.id}`}
            hidden={isExplicitHide}
            isDefaultHideOnMobile={isDefaultMobileHide}
          />
        );
      })}

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
