"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { StandingsTeamRow } from "../types/standings.types";
import { MobileStandingsRowDetails } from "./mobile-standings-row-details";
import styles from "./standings-table.module.css";

type StandingsTableProps = {
  groupName: string;
  rows: StandingsTeamRow[];
};

export function StandingsTable({ groupName, rows }: StandingsTableProps) {
  const [expandedTeamIds, setExpandedTeamIds] = useState<Set<string>>(new Set());

  const toggleRow = (teamId: string) => {
    setExpandedTeamIds((prev) => {
      const next = new Set(prev);
      if (next.has(teamId)) {
        next.delete(teamId);
      } else {
        next.add(teamId);
      }
      return next;
    });
  };

  const formatGd = (gd: number) => {
    if (gd > 0) return `+${gd}`;
    return `${gd}`;
  };

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <caption className={styles.caption}>Klasemen {groupName}</caption>
        <thead>
          <tr>
            <th scope="col" className={`${styles.th} ${styles.posCol}`}>
              Pos
            </th>
            <th scope="col" className={`${styles.th} ${styles.teamCol}`}>
              Tim
            </th>
            <th scope="col" className={`${styles.th} ${styles.numCol}`}>
              M
            </th>
            <th scope="col" className={`${styles.th} ${styles.numCol} ${styles.desktopOnly}`}>
              Mng
            </th>
            <th scope="col" className={`${styles.th} ${styles.numCol} ${styles.desktopOnly}`}>
              S
            </th>
            <th scope="col" className={`${styles.th} ${styles.numCol} ${styles.desktopOnly}`}>
              K
            </th>
            <th scope="col" className={`${styles.th} ${styles.numCol} ${styles.desktopOnly}`}>
              GM
            </th>
            <th scope="col" className={`${styles.th} ${styles.numCol} ${styles.desktopOnly}`}>
              GK
            </th>
            <th scope="col" className={`${styles.th} ${styles.numCol}`}>
              SG
            </th>
            <th scope="col" className={`${styles.th} ${styles.pointsCol}`}>
              Poin
            </th>
            <th scope="col" className={`${styles.th} ${styles.statusCol} ${styles.desktopOnly}`}>
              Status
            </th>
            <th scope="col" className={`${styles.th} ${styles.mobileOnly}`} style={{ width: "40px" }}>
              <span className="sr-only">Detail</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const isExpanded = expandedTeamIds.has(row.team.id);
            const isQualified = row.qualificationStatus === "qualified";
            const rowClass = isQualified ? styles.trQualified : styles.trEliminated;
            const detailId = `mobile-detail-${row.team.id}`;

            return (
              <React.Fragment key={row.team.id}>
                <tr className={`${styles.tr} ${rowClass}`}>
                  <td className={`${styles.td} ${styles.posCol}`}>
                    {row.position !== null ? row.position : "—"}
                  </td>
                  <th scope="row" className={`${styles.td} ${styles.teamCol}`}>
                    <div className={styles.teamCell}>
                      <div className={styles.teamLogo} aria-hidden="true">
                        {row.team.shortName.slice(0, 3)}
                      </div>
                      <span className={styles.teamName}>{row.team.name}</span>
                    </div>
                  </th>
                  <td className={`${styles.td} ${styles.numCol}`}>{row.played}</td>
                  <td className={`${styles.td} ${styles.numCol} ${styles.desktopOnly}`}>
                    {row.won}
                  </td>
                  <td className={`${styles.td} ${styles.numCol} ${styles.desktopOnly}`}>
                    {row.drawn}
                  </td>
                  <td className={`${styles.td} ${styles.numCol} ${styles.desktopOnly}`}>
                    {row.lost}
                  </td>
                  <td className={`${styles.td} ${styles.numCol} ${styles.desktopOnly}`}>
                    {row.goalsFor}
                  </td>
                  <td className={`${styles.td} ${styles.numCol} ${styles.desktopOnly}`}>
                    {row.goalsAgainst}
                  </td>
                  <td className={`${styles.td} ${styles.numCol}`}>
                    {formatGd(row.goalDifference)}
                  </td>
                  <td className={`${styles.td} ${styles.pointsCol}`}>{row.points}</td>
                  <td className={`${styles.td} ${styles.statusCol} ${styles.desktopOnly}`}>
                    {row.qualificationStatus === "qualified" ? (
                      <span className={styles.badgeQualified}>Lolos</span>
                    ) : row.qualificationStatus === "eliminated" ? (
                      <span className={styles.badgeEliminated}>Gugur</span>
                    ) : (
                      <span className={styles.badgePending}>Pending</span>
                    )}
                  </td>
                  <td className={`${styles.td} ${styles.mobileOnly}`}>
                    <button
                      type="button"
                      className={styles.toggleBtn}
                      onClick={() => toggleRow(row.team.id)}
                      aria-expanded={isExpanded}
                      aria-controls={detailId}
                      aria-label={`Lihat detail statistik ${row.team.name}`}
                    >
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </td>
                </tr>
                {isExpanded && (
                  <tr className={styles.mobileOnly}>
                    <td colSpan={6} style={{ padding: 0 }}>
                      <MobileStandingsRowDetails row={row} id={detailId} />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
