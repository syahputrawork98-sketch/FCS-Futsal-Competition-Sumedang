import React from "react";
import type { StandingsTeamRow } from "../types/standings.types";

type MobileStandingsRowDetailsProps = {
  row: StandingsTeamRow;
  id: string;
};

export function MobileStandingsRowDetails({ row, id }: MobileStandingsRowDetailsProps) {
  const getQualificationBadge = () => {
    switch (row.qualificationStatus) {
      case "qualified":
        return <span style={{ color: "#34d399", fontWeight: 700 }}>Lolos Ke Semifinal</span>;
      case "eliminated":
        return <span style={{ color: "#f87171", fontWeight: 700 }}>Gugur</span>;
      case "pending":
      default:
        return <span style={{ color: "#fbbf24", fontWeight: 700 }}>Belum Ditentukan</span>;
    }
  };

  return (
    <div
      id={id}
      style={{
        padding: "0.75rem 1rem",
        background: "rgba(15, 23, 42, 0.4)",
        borderTop: "1px border rgba(255, 255, 255, 0.05)",
        fontSize: "0.8125rem",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "0.5rem 1rem",
      }}
    >
      <div>
        <span style={{ color: "#94a3b8" }}>Menang: </span>
        <strong style={{ color: "#ffffff" }}>{row.won}</strong>
      </div>
      <div>
        <span style={{ color: "#94a3b8" }}>Gol Memasukkan (GM): </span>
        <strong style={{ color: "#ffffff" }}>{row.goalsFor}</strong>
      </div>
      <div>
        <span style={{ color: "#94a3b8" }}>Seri: </span>
        <strong style={{ color: "#ffffff" }}>{row.drawn}</strong>
      </div>
      <div>
        <span style={{ color: "#94a3b8" }}>Gol Kebobolan (GK): </span>
        <strong style={{ color: "#ffffff" }}>{row.goalsAgainst}</strong>
      </div>
      <div>
        <span style={{ color: "#94a3b8" }}>Kalah: </span>
        <strong style={{ color: "#ffffff" }}>{row.lost}</strong>
      </div>
      <div>
        <span style={{ color: "#94a3b8" }}>Status: </span>
        {getQualificationBadge()}
      </div>
    </div>
  );
}
