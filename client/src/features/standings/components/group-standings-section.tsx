import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { GroupStandings } from "../types/standings.types";
import { StandingsTable } from "./standings-table";
import styles from "./group-standings-section.module.css";

type GroupStandingsSectionProps = {
  groupStandings: GroupStandings;
  panelId?: string;
  tabId?: string;
  hidden?: boolean;
};

export function GroupStandingsSection({
  groupStandings,
  panelId,
  tabId,
  hidden,
}: GroupStandingsSectionProps) {
  const { group, rows, completedOfficialMatches, totalMatches, status } = groupStandings;

  const statusBadgeLabel =
    status === "final"
      ? "Final"
      : status === "provisional"
      ? "Sementara"
      : status === "partial"
      ? "Partial"
      : "Belum Dimulai";

  return (
    <section
      id={panelId}
      role="tabpanel"
      aria-labelledby={tabId}
      hidden={hidden}
      className={styles.section}
      aria-label={`Klasemen ${group.name}`}
    >
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>{group.name}</h2>
          <span className={styles.subtitle}>
            {rows.length} tim • {completedOfficialMatches}/{totalMatches} laga selesai • Status: {statusBadgeLabel}
          </span>
        </div>
        <Link
          href={`/pertandingan?fase=FAS01&grup=${group.id}`}
          className={styles.groupMatchesLink}
        >
          <span>Lihat Laga {group.name}</span>
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>

      <StandingsTable groupName={group.name} rows={rows} status={status} />
    </section>
  );
}
