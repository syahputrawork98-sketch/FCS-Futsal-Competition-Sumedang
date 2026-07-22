import { PageContainer } from "@/components/layout/page-container/page-container";
import { SectionHeading } from "@/components/ui/section-heading/section-heading";
import { PlayerCard } from "./player-card";
import { HomeSectionSkeleton } from "./home-section-skeleton";
import { HomeEmptyState } from "./home-empty-state";
import { HomeErrorState } from "./home-error-state";
import styles from "./featured-players-section.module.css";
import type { HomeSectionState, HomePlayer } from "../../types/home.types";

type FeaturedPlayersSectionProps = {
  players: HomeSectionState<HomePlayer[]>;
};

export function FeaturedPlayersSection({ players }: FeaturedPlayersSectionProps) {
  return (
    <section className={styles.section}>
      <PageContainer>
        <SectionHeading
          title="Pemain Sorotan"
          actionLabel="Lihat Statistik Pemain"
          actionHref="/statistik"
        />

        <div className={styles.content}>
          {players.status === "loading" && <HomeSectionSkeleton lines={4} />}
          
          {players.status === "error" && (
            <HomeErrorState title="Gagal Memuat Pemain" description={players.message} />
          )}

          {players.status === "empty" && (
            <HomeEmptyState title="Belum Ada Pemain" description={players.message} />
          )}

          {players.status === "ready" && players.data.length > 0 && (
            <div className={styles.grid}>
              {players.data.map((player) => (
                <PlayerCard key={player.id} player={player} />
              ))}
            </div>
          )}
        </div>
      </PageContainer>
    </section>
  );
}
