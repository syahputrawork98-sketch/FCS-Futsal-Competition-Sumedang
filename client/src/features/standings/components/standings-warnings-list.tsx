import React from "react";
import { AlertTriangle } from "lucide-react";
import type { StandingsDataWarning } from "../types/standings.types";

type StandingsWarningsListProps = {
  warnings: StandingsDataWarning[];
};

export function StandingsWarningsList({ warnings }: StandingsWarningsListProps) {
  if (warnings.length === 0) return null;

  return (
    <div
      style={{
        background: "rgba(245, 158, 11, 0.1)",
        border: "1px solid rgba(245, 158, 11, 0.3)",
        borderRadius: "8px",
        padding: "1rem 1.25rem",
        marginBottom: "1.5rem",
        fontSize: "0.875rem",
        color: "#fbbf24",
      }}
      aria-label="Peringatan Integritas Data Klasemen"
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 700, marginBottom: "0.5rem" }}>
        <AlertTriangle size={16} />
        <span>Peringatan Data Klasemen ({warnings.length}):</span>
      </div>
      <ul style={{ margin: 0, paddingLeft: "1.25rem" }}>
        {warnings.map((w, idx) => (
          <li key={idx} style={{ marginBottom: "0.25rem" }}>
            {w.message}
          </li>
        ))}
      </ul>
    </div>
  );
}
