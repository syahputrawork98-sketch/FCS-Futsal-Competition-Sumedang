import React from "react";
import { MatchSectionUnavailable } from "./match-section-unavailable";

type MatchStatisticsSectionProps = {
  statistics?: unknown | null;
};

export function MatchStatisticsSection({
  statistics = null,
}: MatchStatisticsSectionProps) {
  if (statistics === null) {
    return (
      <MatchSectionUnavailable
        id="statistik"
        title="Statistik Pertandingan Belum Tersedia"
        description="Data statistik teknis per pertandingan (seperti tembakan, penguasaan bola, atau kartu) belum dicatat dalam database prototype ini."
      />
    );
  }

  return (
    <div id="statistik">
      {/* Reserved for future statistics integration */}
    </div>
  );
}
