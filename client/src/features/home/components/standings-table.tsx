import { TeamLogoFallback } from "./team-logo-fallback";
import styles from "./standings-table.module.css";
import type { HomeStanding } from "../types/home.types";

type StandingsTableProps = {
  caption: string;
  standings: HomeStanding[];
};

export function StandingsTable({ caption, standings }: StandingsTableProps) {
  const formatGd = (gd: number) => {
    if (gd > 0) return `+${gd}`;
    return `${gd}`;
  };

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <caption className={styles.caption}>{caption}</caption>
        <thead>
          <tr>
            <th className={styles.posCol}>Pos</th>
            <th className={styles.teamCol}>Tim</th>
            <th className={styles.numCol}>M</th>
            <th className={`${styles.numCol} ${styles.hideMobile}`}>SG</th>
            <th className={styles.ptsCol}>Poin</th>
            <th className={styles.statusCol}>Status</th>
          </tr>
        </thead>
        <tbody>
          {standings.map((row) => (
            <tr key={row.team.id} className={styles.row}>
              <td className={styles.posCol}>{row.position !== null ? row.position : "—"}</td>
              <td className={styles.teamCol}>
                <div className={styles.teamInfo}>
                  {row.team.logo.src ? (
                    <img src={row.team.logo.src} alt={row.team.logo.alt} className={styles.logo} />
                  ) : (
                    <TeamLogoFallback name={row.team.name} size="small" />
                  )}
                  <span className={styles.teamName}>{row.team.name}</span>
                </div>
              </td>
              <td className={styles.numCol}>{row.played}</td>
              <td className={`${styles.numCol} ${styles.hideMobile}`}>{formatGd(row.goalDifference)}</td>
              <td className={styles.ptsCol}>{row.points}</td>
              <td className={styles.statusCol}>
                {row.qualificationStatus && (
                  <span
                    className={`${styles.status} ${
                      row.qualificationStatus === "Lolos"
                        ? styles.success
                        : row.qualificationStatus === "Gugur"
                        ? styles.danger
                        : styles.pending || ""
                    }`}
                  >
                    {row.qualificationStatus}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
