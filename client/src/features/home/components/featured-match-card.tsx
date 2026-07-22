import { ActionLink } from "@/components/ui/action-link/action-link";
import { TeamLogoFallback } from "./team-logo-fallback";
import styles from "./featured-match-card.module.css";
import type { HomeMatch } from "../../types/home.types";

type FeaturedMatchCardProps = {
  match: HomeMatch;
};

export function FeaturedMatchCard({ match }: FeaturedMatchCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.phase}>{match.phase}</span>
        <span className={styles.status}>{match.status}</span>
      </div>

      <div className={styles.teams}>
        <div className={styles.team}>
          {match.homeTeam.logo.src ? (
            <img src={match.homeTeam.logo.src} alt={match.homeTeam.logo.alt} className={styles.logo} />
          ) : (
            <TeamLogoFallback name={match.homeTeam.name} size="large" />
          )}
          <span className={styles.teamName}>{match.homeTeam.name}</span>
        </div>

        <div className={styles.scoreContainer}>
          <span className={styles.score}>{match.homeScore}</span>
          <span className={styles.divider}>-</span>
          <span className={styles.score}>{match.awayScore}</span>
        </div>

        <div className={styles.team}>
          {match.awayTeam.logo.src ? (
            <img src={match.awayTeam.logo.src} alt={match.awayTeam.logo.alt} className={styles.logo} />
          ) : (
            <TeamLogoFallback name={match.awayTeam.name} size="large" />
          )}
          <span className={styles.teamName}>{match.awayTeam.name}</span>
        </div>
      </div>

      <div className={styles.footer}>
        <ActionLink href={`/pertandingan/${match.id}`} variant="secondary">
          Detail Pertandingan
        </ActionLink>
      </div>
    </div>
  );
}
