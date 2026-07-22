import { PageContainer } from "@/components/layout/page-container/page-container";
import { SectionHeading } from "@/components/ui/section-heading/section-heading";
import { MatchResultCard } from "./match-result-card";
import { HomeSectionSkeleton } from "./home-section-skeleton";
import { HomeEmptyState } from "./home-empty-state";
import { HomeErrorState } from "./home-error-state";
import styles from "./latest-results-section.module.css";
import type { HomeSectionState, HomeMatch } from "../types/home.types";

type LatestResultsSectionProps = {
  results: HomeSectionState<HomeMatch[]>;
};

export function LatestResultsSection({ results }: LatestResultsSectionProps) {
  return (
    <section className={styles.section}>
      <PageContainer>
        <SectionHeading
          title="Hasil Pertandingan Terbaru"
          actionLabel="Lihat Semua Pertandingan"
          actionHref="/pertandingan"
        />

        <div className={styles.content}>
          {results.status === "loading" && <HomeSectionSkeleton lines={4} />}
          
          {results.status === "error" && (
            <HomeErrorState title="Hasil pertandingan belum dapat ditampilkan" description={results.message} />
          )}

          {results.status === "empty" && (
            <HomeEmptyState title="Belum ada hasil pertandingan resmi" />
          )}

          {results.status === "ready" && results.data.length > 0 && (
            <div className={styles.grid}>
              {results.data.map((match) => (
                <MatchResultCard key={match.id} match={match} />
              ))}
            </div>
          )}
        </div>
      </PageContainer>
    </section>
  );
}
