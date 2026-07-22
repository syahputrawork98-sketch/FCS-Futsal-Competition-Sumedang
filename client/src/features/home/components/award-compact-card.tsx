import { PlayerAvatarFallback } from "./player-avatar-fallback";
import { TeamLogoFallback } from "./team-logo-fallback";
import styles from "./award-compact-card.module.css";
import type { HomeAward } from "../../types/home.types";

type AwardCompactCardProps = {
  award: HomeAward;
};

export function AwardCompactCard({ award }: AwardCompactCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {award.image.src ? (
          <img src={award.image.src} alt={award.image.alt} className={styles.image} />
        ) : award.recipientType === "player" ? (
          <PlayerAvatarFallback name={award.recipientName} size="small" />
        ) : (
          <TeamLogoFallback name={award.recipientName} size="small" />
        )}
      </div>
      
      <div className={styles.details}>
        <h4 className={styles.title}>{award.title}</h4>
        <p className={styles.recipientName}>{award.recipientName}</p>
        {(award.teamName || award.supportingValue) && (
          <p className={styles.meta}>
            {award.teamName && <span>{award.teamName}</span>}
            {award.teamName && award.supportingValue && <span> • </span>}
            {award.supportingValue && <span>{award.supportingValue}</span>}
          </p>
        )}
      </div>
    </div>
  );
}
