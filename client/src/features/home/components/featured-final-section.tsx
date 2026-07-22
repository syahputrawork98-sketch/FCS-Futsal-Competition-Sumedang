import { PageContainer } from "@/components/layout/page-container/page-container";
import { FeaturedMatchCard } from "./featured-match-card";
import { CompetitionMetricCard } from "./competition-metric-card";
import { HomeSectionSkeleton } from "./home-section-skeleton";
import { HomeErrorState } from "./home-error-state";
import styles from "./featured-final-section.module.css";
import type { HomeSectionState, HomeMatch } from "../types/home.types";

type FeaturedFinalSectionProps = {
  featuredFinal: HomeSectionState<HomeMatch>;
  metrics: HomeSectionState<{ label: string; value: string }[]>;
};

export function FeaturedFinalSection({ featuredFinal, metrics }: FeaturedFinalSectionProps) {
  return (
    <section className={styles.section} aria-label="Rangkuman Kompetisi">
      <PageContainer>
        <div className={styles.grid}>
          <div className={styles.finalColumn}>
            {featuredFinal.status === "loading" && <HomeSectionSkeleton lines={5} />}
            {featuredFinal.status === "error" && (
              <HomeErrorState title="Gagal Memuat Hasil Final" description={featuredFinal.message} />
            )}
            {featuredFinal.status === "empty" && null}
            {featuredFinal.status === "ready" && (
              <FeaturedMatchCard match={featuredFinal.data} />
            )}
          </div>

          <div className={styles.metricsColumn}>
            {metrics.status === "loading" && <HomeSectionSkeleton lines={4} />}
            {metrics.status === "error" && (
              <HomeErrorState title="Gagal Memuat Metrik" description={metrics.message} />
            )}
            {metrics.status === "ready" && (
              <div className={styles.metricsGrid}>
                {metrics.data.map((metric, idx) => (
                  <CompetitionMetricCard key={idx} label={metric.label} value={metric.value} />
                ))}
              </div>
            )}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
