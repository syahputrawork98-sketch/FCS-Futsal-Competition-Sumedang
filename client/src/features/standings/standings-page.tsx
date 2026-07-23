import React from "react";
import type { StandingsPageData } from "./types/standings.types";
import { StandingsPageHeader } from "./components/standings-page-header";
import { StandingsSummary } from "./components/standings-summary";
import { GroupNavigation } from "./components/group-navigation";
import { GroupStandingsSection } from "./components/group-standings-section";
import { QualificationExplanation } from "./components/qualification-explanation";
import { TiebreakerRules } from "./components/tiebreaker-rules";
import { StandingsLegend } from "./components/standings-legend";
import { StandingsRelatedNavigation } from "./components/standings-related-navigation";
import { StandingsEmptyState, StandingsPartialState } from "./components/standings-states";
import styles from "./standings-page.module.css";

type StandingsPageProps = {
  data: StandingsPageData;
  activeGroupId: string | null;
};

export function StandingsPage({ data, activeGroupId }: StandingsPageProps) {
  if (data.status === "unavailable" || data.groups.length === 0) {
    return (
      <div className={styles.container}>
        <StandingsPageHeader statusLabel="Belum Tersedia" />
        <StandingsEmptyState />
      </div>
    );
  }

  const visibleGroups = activeGroupId
    ? data.groups.filter((g) => g.group.id === activeGroupId)
    : data.groups;

  const statusLabel =
    data.status === "final"
      ? "Klasemen Final"
      : data.status === "provisional"
      ? "Klasemen Sementara"
      : "Belum Dimulai";

  return (
    <div className={styles.container}>
      <StandingsPageHeader statusLabel={statusLabel} />

      <StandingsSummary
        status={data.status}
        completedMatches={data.completedOfficialGroupMatches}
        totalMatches={data.totalGroupMatches}
        qualifiedTeamCount={data.qualifiedTeamCount}
      />

      {data.status === "partial" && <StandingsPartialState />}

      <GroupNavigation activeGroupId={activeGroupId} />

      {visibleGroups.map((groupStandings) => (
        <GroupStandingsSection
          key={groupStandings.group.id}
          groupStandings={groupStandings}
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
