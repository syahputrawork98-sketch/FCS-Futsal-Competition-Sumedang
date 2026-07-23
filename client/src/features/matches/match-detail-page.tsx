import React from "react";
import type { MatchDetailPageData } from "./types/match-detail.types";
import { MatchBreadcrumb } from "./components/detail/match-breadcrumb";
import { MatchIdentityHeader } from "./components/detail/match-identity-header";
import { MatchScoreboard } from "./components/detail/match-scoreboard";
import { MatchMetadataGrid } from "./components/detail/match-metadata-grid";
import { MatchPrimaryActions } from "./components/detail/match-primary-actions";
import { MatchContentNavigation } from "./components/detail/match-content-navigation";
import { MatchSummary } from "./components/detail/match-summary";
import { MatchTimeline } from "./components/detail/match-timeline";
import { MatchStatisticsSection } from "./components/detail/match-statistics-section";
import { MatchTeamSection } from "./components/detail/match-team-section";
import { MatchOfficialsSection } from "./components/detail/match-officials-section";
import { MatchVenueCard } from "./components/detail/match-venue-card";
import { MatchNavigation } from "./components/detail/match-navigation";
import styles from "./match-detail-page.module.css";

type MatchDetailPageProps = {
  data: MatchDetailPageData;
};

export function MatchDetailPage({ data }: MatchDetailPageProps) {
  const matchTitle = `${data.teamA.name} vs ${data.teamB.name}`;

  return (
    <div className={styles.container}>
      <MatchBreadcrumb matchTitle={matchTitle} />

      <MatchIdentityHeader
        match={data.match}
        phase={data.phase}
        group={data.group}
        teamA={data.teamA}
        teamB={data.teamB}
        competition={data.competition}
      />

      <MatchScoreboard
        match={data.match}
        teamA={data.teamA}
        teamB={data.teamB}
        winnerTeamId={data.winnerTeamId}
      />

      <MatchMetadataGrid
        match={data.match}
        phase={data.phase}
        group={data.group}
        venue={data.venue}
      />

      <MatchPrimaryActions />

      <MatchContentNavigation hasVenue={Boolean(data.venue)} />

      <div className={styles.contentBody}>
        <MatchSummary
          match={data.match}
          teamA={data.teamA}
          teamB={data.teamB}
          scorers={data.scorers}
          winnerTeamId={data.winnerTeamId}
        />

        <MatchTimeline timeline={data.timeline} />

        <MatchStatisticsSection statistics={data.statistics} />

        <MatchTeamSection
          teamA={data.teamA}
          teamB={data.teamB}
          teamAOfficials={data.teamAOfficials}
          teamBOfficials={data.teamBOfficials}
          lineups={data.lineups}
        />

        <MatchOfficialsSection officials={data.matchOfficials} />

        {data.venue && <MatchVenueCard venue={data.venue} />}

        <MatchNavigation
          previousMatch={data.previousMatch}
          nextMatch={data.nextMatch}
        />
      </div>
    </div>
  );
}
