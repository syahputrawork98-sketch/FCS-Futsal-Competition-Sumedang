import Link from "next/link";
import { TeamLogoFallback } from "./team-logo-fallback";
import styles from "./team-card.module.css";
import type { HomeTeam } from "../types/home.types";

type TeamCardProps = {
  team: HomeTeam;
};

export function TeamCard({ team }: TeamCardProps) {
  return (
    <Link href={`/tim/${team.id}`} className={styles.card} aria-label={`Detail tim ${team.name}`}>
      <div className={styles.imageContainer}>
        {team.logo.src ? (
          <img src={team.logo.src} alt={team.logo.alt} className={styles.logo} />
        ) : (
          <TeamLogoFallback name={team.name} size="large" />
        )}
      </div>
      
      <div className={styles.details}>
        <h3 className={styles.name}>{team.name}</h3>
        
        <div className={styles.meta}>
          {team.organization && <span>{team.organization}</span>}
          {team.group && <span>Grup {team.group}</span>}
        </div>
        
        {team.achievement && (
          <span className={styles.achievement}>{team.achievement}</span>
        )}
      </div>
    </Link>
  );
}
