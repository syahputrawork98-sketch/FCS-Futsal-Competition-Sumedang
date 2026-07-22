import { PageContainer } from "@/components/layout/page-container/page-container";
import { SectionHeading } from "@/components/ui/section-heading/section-heading";
import { HomeSectionSkeleton } from "./home-section-skeleton";
import { HomeEmptyState } from "./home-empty-state";
import { HomeErrorState } from "./home-error-state";
import styles from "./sponsors-section.module.css";
import type { HomeSectionState, HomeSponsor } from "../../types/home.types";

type SponsorsSectionProps = {
  sponsors: HomeSectionState<HomeSponsor[]>;
};

export function SponsorsSection({ sponsors }: SponsorsSectionProps) {
  // According to Plan: If no active sponsor, section may be hidden or show empty state.
  // We'll show empty state for completeness based on Prototype data.

  return (
    <section className={styles.section}>
      <PageContainer>
        <SectionHeading
          title="Sponsor dan Mitra"
          actionLabel="Lihat Sponsor dan Mitra"
          actionHref="/sponsor"
        />

        <div className={styles.content}>
          {sponsors.status === "loading" && <HomeSectionSkeleton lines={3} />}
          
          {sponsors.status === "error" && (
            <HomeErrorState title="Gagal Memuat Sponsor" description={sponsors.message} />
          )}

          {sponsors.status === "empty" && (
            <HomeEmptyState title="Belum Ada Sponsor" description={sponsors.message} />
          )}

          {sponsors.status === "ready" && sponsors.data.length > 0 && (
            <div className={styles.grid}>
              <p>Daftar Sponsor (Placeholder)</p>
            </div>
          )}
        </div>
      </PageContainer>
    </section>
  );
}
