import { PageContainer } from "@/components/layout/page-container/page-container";
import { SectionHeading } from "@/components/ui/section-heading/section-heading";
import { NewsFeatureCard } from "./news-feature-card";
import { NewsCompactCard } from "./news-compact-card";
import { HomeSectionSkeleton } from "./home-section-skeleton";
import { HomeEmptyState } from "./home-empty-state";
import { HomeErrorState } from "./home-error-state";
import styles from "./latest-news-section.module.css";
import type { HomeSectionState, HomeNews } from "../../types/home.types";

type LatestNewsSectionProps = {
  news: HomeSectionState<HomeNews[]>;
};

export function LatestNewsSection({ news }: LatestNewsSectionProps) {
  return (
    <section className={styles.section}>
      <PageContainer>
        <SectionHeading
          title="Berita Terbaru"
          actionLabel="Lihat Semua Berita"
          actionHref="/berita"
        />

        <div className={styles.content}>
          {news.status === "loading" && <HomeSectionSkeleton lines={5} />}
          
          {news.status === "error" && (
            <HomeErrorState title="Gagal Memuat Berita" description={news.message} />
          )}

          {news.status === "empty" && (
            <HomeEmptyState title="Belum Ada Berita Terbaru" description={news.message} />
          )}

          {news.status === "ready" && news.data.length > 0 && (() => {
            const featuredNews = news.data[0];
            const compactNews = news.data.slice(1, 3);

            return (
              <div className={styles.grid}>
                {featuredNews && (
                  <div className={styles.featuredCol}>
                    <NewsFeatureCard news={featuredNews} />
                  </div>
                )}
                
                {compactNews.length > 0 && (
                  <div className={styles.compactCol}>
                    {compactNews.map(item => (
                      <NewsCompactCard key={item.id} news={item} />
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
