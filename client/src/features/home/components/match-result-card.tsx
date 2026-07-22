import { ActionLink } from "@/components/ui/action-link/action-link";
import { TeamLogoFallback } from "./team-logo-fallback";
import styles from "./match-result-card.module.css";
import type { HomeMatch } from "../../types/home.types";

type MatchResultCardProps = {
  match: HomeMatch;
};

export function MatchResultCard({ match }: MatchResultCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.meta}>
        <span className={styles.phase}>{match.phase}</span>
        {match.date && <span className={styles.date}>{match.date}</span>}
      </div>

      <div className={styles.teams}>
        <div className={styles.teamRow}>
          <div className={styles.teamInfo}>
            {match.homeTeam.logo.src ? (
              <img src={match.homeTeam.logo.src} alt={match.homeTeam.logo.alt} className={styles.logo} />
            ) : (
              <TeamLogoFallback name={match.homeTeam.name} size="small" />
            )}
            <span className={styles.teamName}>{match.homeTeam.name}</span>
          </div>
          <span className={styles.score}>{match.homeScore}</span>
        </div>

        <div className={styles.teamRow}>
          <div className={styles.teamInfo}>
            {match.awayTeam.logo.src ? (
              <img src={match.awayTeam.logo.src} alt={match.awayTeam.logo.alt} className={styles.logo} />
            ) : (
              <TeamLogoFallback name={match.awayTeam.name} size="small" />
            )}
            <span className={styles.teamName}>{match.awayTeam.name}</span>
          </div>
          <span className={styles.score}>{match.awayScore}</span>
        </div>
      </div>

      <div className={styles.footer}>
        <ActionLink href={`/pertandingan/${match.id}`} variant="secondary" size="small">
          Detail
        </ActionLink>
        <span className={styles.status}>{match.status}</span>
      </div>
    </div>
  );
}
