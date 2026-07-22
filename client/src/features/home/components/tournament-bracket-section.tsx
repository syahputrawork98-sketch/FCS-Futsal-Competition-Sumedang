import { PageContainer } from "@/components/layout/page-container/page-container";
import { SectionHeading } from "@/components/ui/section-heading/section-heading";
import { DesktopBracket } from "./desktop-bracket";
import { MobileBracketTimeline } from "./mobile-bracket-timeline";
import { HomeSectionSkeleton } from "./home-section-skeleton";
import { HomeEmptyState } from "./home-empty-state";
import { HomeErrorState } from "./home-error-state";
import styles from "./tournament-bracket-section.module.css";
import type { HomeSectionState } from "../../types/home.types";

// In a real application, the generic type would be the bracket data structure
type TournamentBracketSectionProps = {
  bracket: HomeSectionState<any>;
};

export function TournamentBracketSection({ bracket }: TournamentBracketSectionProps) {
  return (
    <section className={styles.section}>
      <PageContainer>
        <SectionHeading
          title="Perjalanan Fase Gugur"
          actionLabel="Lihat Bracket Lengkap"
          actionHref="/bracket"
        />

        <div className={styles.content}>
          {bracket.status === "loading" && <HomeSectionSkeleton lines={8} />}
          
          {bracket.status === "error" && (
            <HomeErrorState title="Gagal Memuat Bracket" description={bracket.message} />
          )}

          {bracket.status === "empty" && (
            <HomeEmptyState title="Bracket Belum Tersedia" description={bracket.message} />
          )}

          {bracket.status === "ready" && (
            <>
              <div className={styles.desktopView}>
                <DesktopBracket />
              </div>
              <div className={styles.mobileView}>
                <MobileBracketTimeline />
              </div>
            </>
          )}
        </div>
      </PageContainer>
    </section>
  );
}
