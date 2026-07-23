import React from "react";
import { MatchSectionUnavailable } from "./match-section-unavailable";

export function MatchStatisticsSection() {
  return (
    <MatchSectionUnavailable
      id="statistik"
      title="Statistik Pertandingan Belum Tersedia"
      description="Data statistik teknis per pertandingan (seperti tembakan, penguasaan bola, atau kartu) belum dicatat dalam database prototype ini."
    />
  );
}
