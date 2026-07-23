"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import type { StandingsStatus, StandingsTeamRow } from "../types/standings.types";
import { MobileStandingsRowDetails } from "./mobile-standings-row-details";
import styles from "./standings-table.module.css";

type StandingsTableProps = {
  groupName: string;
  rows: StandingsTeamRow[];
  status?: StandingsStatus;
};

export function StandingsTable({ groupName, rows, status }: StandingsTableProps) {
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

  const isNotStarted = status === "not_started";

  const formatValue = (val: number) => {
    if (isNotStarted) return "—";
    return `${val}`;
  };

  const formatGd = (gd: number) => {
    if (isNotStarted) return "—";
    if (gd > 0) return `+${gd}`;
    return `${gd}`;
  };

  const renderStatusBadge = (rowStatus: StandingsTeamRow["qualificationStatus"]) => {
    if (rowStatus === "qualified") {
      return <span className={styles.badgeQualified}>Lolos</span>;
    }
    if (rowStatus === "eliminated") {
      return <span className={styles.badgeEliminated}>Gugur</span>;
    }
    return <span className={styles.badgePending}>Menunggu keputusan</span>;
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
            <th scope="col" className={`${styles.th} ${styles.statusCol}`}>
              Status
            </th>
            <th scope="col" className={`${styles.th} ${styles.mobileOnly}`} style={{ width: "36px" }}>
              <span className="sr-only">Detail</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            const isExpanded = expandedTeamIds.has(row.team.id);
            const rowClass =
              row.qualificationStatus === "qualified"
                ? styles.trQualified
                : row.qualificationStatus === "eliminated"
                ? styles.trEliminated
                : styles.trPending;
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
                  <td className={`${styles.td} ${styles.numCol}`}>{formatValue(row.played)}</td>
                  <td className={`${styles.td} ${styles.numCol} ${styles.desktopOnly}`}>
                    {formatValue(row.won)}
                  </td>
                  <td className={`${styles.td} ${styles.numCol} ${styles.desktopOnly}`}>
                    {formatValue(row.drawn)}
                  </td>
                  <td className={`${styles.td} ${styles.numCol} ${styles.desktopOnly}`}>
                    {formatValue(row.lost)}
                  </td>
                  <td className={`${styles.td} ${styles.numCol} ${styles.desktopOnly}`}>
                    {formatValue(row.goalsFor)}
                  </td>
                  <td className={`${styles.td} ${styles.numCol} ${styles.desktopOnly}`}>
                    {formatValue(row.goalsAgainst)}
                  </td>
                  <td className={`${styles.td} ${styles.numCol}`}>
                    {formatGd(row.goalDifference)}
                  </td>
                  <td className={`${styles.td} ${styles.pointsCol}`}>{formatValue(row.points)}</td>
                  <td className={`${styles.td} ${styles.statusCol}`}>
                    {renderStatusBadge(row.qualificationStatus)}
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
                  <tr id={detailId} className={`${styles.mobileOnly} ${styles.mobileDetailRow}`}>
                    <td colSpan={7} style={{ padding: 0 }}>
                      <MobileStandingsRowDetails row={row} id={`${detailId}-content`} />
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
