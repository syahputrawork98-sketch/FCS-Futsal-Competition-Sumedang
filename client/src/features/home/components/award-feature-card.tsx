import { Trophy } from "lucide-react";
import { PlayerAvatarFallback } from "./player-avatar-fallback";
import { TeamLogoFallback } from "./team-logo-fallback";
import styles from "./award-feature-card.module.css";
import type { HomeAward } from "../types/home.types";

type AwardFeatureCardProps = {
  award: HomeAward;
};

export function AwardFeatureCard({ award }: AwardFeatureCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <Trophy className={styles.icon} size={24} />
        <h3 className={styles.title}>{award.title}</h3>
      </div>
      
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          {award.image.src ? (
            <img src={award.image.src} alt={award.image.alt} className={styles.image} />
          ) : award.recipientType === "player" ? (
            <PlayerAvatarFallback name={award.recipientName} size="large" />
          ) : (
            <TeamLogoFallback name={award.recipientName} size="large" />
          )}
        </div>
        
        <div className={styles.details}>
          <p className={styles.recipientName}>{award.recipientName}</p>
          {award.teamName && <p className={styles.teamName}>{award.teamName}</p>}
          {award.supportingValue && <p className={styles.supportingValue}>{award.supportingValue}</p>}
        </div>
      </div>
    </div>
  );
}
