import { Trophy } from "lucide-react";
import { ActionLink } from "@/components/ui/action-link/action-link";
import { StatusBadge } from "@/components/ui/status-badge/status-badge";
import styles from "./champion-hero-section.module.css";
import type { HomeTeam } from "../../types/home.types";

type ChampionHeroSectionProps = {
  competitionName: string;
  champion: HomeTeam;
  date: string;
  location: string;
};

export function ChampionHeroSection({
  competitionName,
  champion,
  date,
  location,
}: ChampionHeroSectionProps) {
  return (
    <section className={styles.section} aria-labelledby="hero-heading">
      <div className={styles.container}>
        <div className={styles.content}>
          <StatusBadge variant="success">Selesai</StatusBadge>
          <h1 id="hero-heading" className={styles.title}>
            {competitionName}
          </h1>
          
          <div className={styles.championContainer}>
            <Trophy className={styles.trophyIcon} size={48} aria-hidden="true" />
            <p className={styles.championLabel}>Juara Turnamen</p>
            <p className={styles.championName}>{champion.name}</p>
          </div>

          <div className={styles.meta}>
            <span>{date}</span>
            <span className={styles.metaDivider}>•</span>
            <span>{location}</span>
          </div>

          <p className={styles.description}>
            Kompetisi telah selesai diselenggarakan dengan sukses. Selamat kepada juara dan seluruh tim partisipan yang telah menunjukkan semangat sportivitas tinggi.
          </p>

          <div className={styles.actions}>
            <ActionLink href="/pertandingan" variant="primary" size="large">
              Lihat Hasil Pertandingan
            </ActionLink>
            <ActionLink href="/penghargaan" variant="secondary" size="large">
              Lihat Penghargaan
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
