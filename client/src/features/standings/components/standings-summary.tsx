import React from "react";
import { CheckCircle2, Info } from "lucide-react";
import type { StandingsStatus } from "../types/standings.types";
import styles from "./standings-summary.module.css";

type StandingsSummaryProps = {
  status: StandingsStatus;
  completedMatches: number;
  totalMatches: number;
  qualifiedTeamCount: number | null;
};

export function StandingsSummary({
  status,
  completedMatches,
  totalMatches,
  qualifiedTeamCount,
}: StandingsSummaryProps) {
  let badgeText = "Klasemen Final";
  let badgeStyle = styles.badgeFinal;

  switch (status) {
    case "provisional":
      badgeText = "Klasemen Sementara";
      badgeStyle = styles.badgeProvisional;
      break;
    case "partial":
      badgeText = "Klasemen Partial";
      badgeStyle = styles.badgePartial;
      break;
    case "not_started":
      badgeText = "Belum Dimulai";
      badgeStyle = styles.badgeNotStarted;
      break;
    case "unavailable":
      badgeText = "Belum Tersedia";
      badgeStyle = styles.badgeUnavailable;
      break;
    case "final":
    default:
      badgeText = "Klasemen Final";
      badgeStyle = styles.badgeFinal;
      break;
  }

  return (
    <div className={styles.card} aria-label="Ringkasan Status Klasemen">
      <div className={styles.leftGroup}>
        <span className={`${styles.badge} ${badgeStyle}`}>{badgeText}</span>
        <span className={styles.summaryText}>
          {completedMatches} dari {totalMatches} pertandingan fase grup selesai
          {qualifiedTeamCount ? ` • ${qualifiedTeamCount} tim lolos ke semifinal` : ""}
        </span>
      </div>

      <div className={styles.rightGroup}>
        <span className={styles.sourceLabel}>
          <CheckCircle2 size={14} color="#34d399" aria-hidden="true" />
          <span>Sumber: Hasil pertandingan resmi</span>
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
          <Info size={14} aria-hidden="true" />
          <span>Prototype FCS</span>
        </span>
      </div>
    </div>
  );
}
