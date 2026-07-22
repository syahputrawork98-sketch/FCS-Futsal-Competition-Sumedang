import { PageContainer } from "@/components/layout/page-container/page-container";
import { SectionHeading } from "@/components/ui/section-heading/section-heading";
import { StandingsTable } from "./standings-table";
import { StandingsTabs } from "./standings-tabs";
import { HomeSectionSkeleton } from "./home-section-skeleton";
import { HomeEmptyState } from "./home-empty-state";
import { HomeErrorState } from "./home-error-state";
import styles from "./standings-preview-section.module.css";
import type { HomeSectionState, HomeStanding } from "../types/home.types";

type StandingsPreviewSectionProps = {
  standings: HomeSectionState<{ groupA: HomeStanding[]; groupB: HomeStanding[] }>;
};

export function StandingsPreviewSection({ standings }: StandingsPreviewSectionProps) {
  return (
    <section className={styles.section}>
      <PageContainer>
        <SectionHeading
          title="Klasemen Akhir Fase Grup"
          actionLabel="Lihat Klasemen Lengkap"
          actionHref="/klasemen"
        />

        <div className={styles.content}>
          {standings.status === "loading" && <HomeSectionSkeleton lines={6} />}
          
          {standings.status === "error" && (
            <HomeErrorState title="Gagal Memuat Klasemen" description={standings.message} />
          )}

          {standings.status === "empty" && (
            <HomeEmptyState title="Klasemen Belum Tersedia" description={standings.message} />
          )}

          {standings.status === "ready" && (
            <>
              {/* Desktop View */}
              <div className={styles.desktopView}>
                <StandingsTable caption="Grup A" standings={standings.data.groupA} />
                <StandingsTable caption="Grup B" standings={standings.data.groupB} />
              </div>

              {/* Mobile View */}
              <div className={styles.mobileView}>
                <StandingsTabs groupA={standings.data.groupA} groupB={standings.data.groupB} />
              </div>
            </>
          )}
        </div>
      </PageContainer>
    </section>
  );
}
