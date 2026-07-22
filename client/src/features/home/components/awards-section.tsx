import { PageContainer } from "@/components/layout/page-container/page-container";
import { SectionHeading } from "@/components/ui/section-heading/section-heading";
import { AwardFeatureCard } from "./award-feature-card";
import { AwardCompactCard } from "./award-compact-card";
import { HomeSectionSkeleton } from "./home-section-skeleton";
import { HomeEmptyState } from "./home-empty-state";
import { HomeErrorState } from "./home-error-state";
import styles from "./awards-section.module.css";
import type { HomeSectionState, HomeAward } from "../../types/home.types";

type AwardsSectionProps = {
  awards: HomeSectionState<HomeAward[]>;
};

export function AwardsSection({ awards }: AwardsSectionProps) {
  return (
    <section className={styles.section}>
      <PageContainer>
        <SectionHeading
          title="Penghargaan Turnamen"
          actionLabel="Lihat Semua Penghargaan"
          actionHref="/penghargaan"
        />

        <div className={styles.content}>
          {awards.status === "loading" && <HomeSectionSkeleton lines={5} />}
          
          {awards.status === "error" && (
            <HomeErrorState title="Gagal Memuat Penghargaan" description={awards.message} />
          )}

          {awards.status === "empty" && (
            <HomeEmptyState title="Penghargaan Belum Tersedia" description={awards.message} />
          )}

          {awards.status === "ready" && awards.data.length > 0 && (() => {
            const featuredAward = awards.data.find(a => a.variant === "featured");
            const compactAwards = awards.data.filter(a => a.variant !== "featured");

            return (
              <div className={styles.grid}>
                {featuredAward && (
                  <div className={styles.featuredCol}>
                    <AwardFeatureCard award={featuredAward} />
                  </div>
                )}
                
                {compactAwards.length > 0 && (
                  <div className={styles.compactCol}>
                    {compactAwards.map(award => (
                      <AwardCompactCard key={award.id} award={award} />
                    ))}
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      </PageContainer>
    </section>
  );
}
