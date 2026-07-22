import Link from "next/link";
import { PlayerAvatarFallback } from "./player-avatar-fallback";
import styles from "./player-card.module.css";
import type { HomePlayer } from "../types/home.types";

type PlayerCardProps = {
  player: HomePlayer;
};

export function PlayerCard({ player }: PlayerCardProps) {
  return (
    <Link href={`/statistik/${player.id}`} className={styles.card} aria-label={`Statistik pemain ${player.name}`}>
      <div className={styles.imageContainer}>
        {player.photo.src ? (
          <img src={player.photo.src} alt={player.photo.alt} className={styles.image} />
        ) : (
          <PlayerAvatarFallback name={player.name} size="full" />
        )}
      </div>
      
      <div className={styles.details}>
        <h3 className={styles.name}>{player.name}</h3>
        {player.teamName && (
          <p className={styles.team}>{player.teamName}</p>
        )}
        
        {player.position && (
          <span className={styles.position}>{player.position}</span>
        )}
        
        {player.award && (
          <div className={styles.awardBadge}>
            {player.award}
          </div>
        )}
        
        {player.statistics && (
          <div className={styles.stats}>
            {player.statistics.goals !== undefined && (
              <div className={styles.stat}>
                <span className={styles.statValue}>{player.statistics.goals}</span>
                <span className={styles.statLabel}>Gol</span>
              </div>
            )}
            {player.statistics.mvp !== undefined && (
              <div className={styles.stat}>
                <span className={styles.statValue}>{player.statistics.mvp}</span>
                <span className={styles.statLabel}>MVP</span>
              </div>
            )}
          </div>
        )}
      </div>
    </Link>
  );
}
