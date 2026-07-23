import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { GroupStandings } from "../types/standings.types";
import { StandingsTable } from "./standings-table";
import styles from "./group-standings-section.module.css";

type GroupStandingsSectionProps = {
  groupStandings: GroupStandings;
};

export function GroupStandingsSection({ groupStandings }: GroupStandingsSectionProps) {
  const { group, rows, completedOfficialMatches, totalMatches } = groupStandings;

  return (
    <section className={styles.section} aria-label={`Klasemen ${group.name}`}>
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <h2 className={styles.title}>{group.name}</h2>
          <span className={styles.subtitle}>
            {rows.length} tim • {completedOfficialMatches}/{totalMatches} laga selesai
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

      <StandingsTable groupName={group.name} rows={rows} />
    </section>
  );
}
