import { PageContainer } from "@/components/layout/page-container/page-container";
import { SectionHeading } from "@/components/ui/section-heading/section-heading";
import { TeamCard } from "./team-card";
import { HomeSectionSkeleton } from "./home-section-skeleton";
import { HomeEmptyState } from "./home-empty-state";
import { HomeErrorState } from "./home-error-state";
import styles from "./featured-teams-section.module.css";
import type { HomeSectionState, HomeTeam } from "../../types/home.types";

type FeaturedTeamsSectionProps = {
  teams: HomeSectionState<HomeTeam[]>;
};

export function FeaturedTeamsSection({ teams }: FeaturedTeamsSectionProps) {
  return (
    <section className={styles.section}>
      <PageContainer>
        <SectionHeading
          title="Tim Peserta"
          actionLabel="Lihat Semua Tim"
          actionHref="/tim"
        />

        <div className={styles.content}>
          {teams.status === "loading" && <HomeSectionSkeleton lines={4} />}
          
          {teams.status === "error" && (
            <HomeErrorState title="Gagal Memuat Tim" description={teams.message} />
          )}

          {teams.status === "empty" && (
            <HomeEmptyState title="Belum Ada Tim" description={teams.message} />
          )}

          {teams.status === "ready" && teams.data.length > 0 && (
            <div className={styles.grid}>
              {teams.data.map((team) => (
                <TeamCard key={team.id} team={team} />
              ))}
            </div>
          )}
        </div>
      </PageContainer>
    </section>
  );
}
