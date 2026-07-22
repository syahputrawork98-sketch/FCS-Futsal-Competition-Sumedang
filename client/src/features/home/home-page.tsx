import { homePrototypeData } from "./data/home-prototype-data";
import { ChampionHeroSection } from "./components/champion-hero-section";
import { FeaturedFinalSection } from "./components/featured-final-section";
import { LatestResultsSection } from "./components/latest-results-section";
import { StandingsPreviewSection } from "./components/standings-preview-section";
import { TournamentBracketSection } from "./components/tournament-bracket-section";
import { AwardsSection } from "./components/awards-section";
import { FeaturedTeamsSection } from "./components/featured-teams-section";
import { FeaturedPlayersSection } from "./components/featured-players-section";
import { LatestNewsSection } from "./components/latest-news-section";
import { GalleryPreviewSection } from "./components/gallery-preview-section";
import { SponsorsSection } from "./components/sponsors-section";
import { DataSimulationNotice } from "./components/data-simulation-notice";
import styles from "./home-page.module.css";

export function HomePage() {
  const {
    competition,
    champion,
    featuredFinal,
    metrics,
    latestResults,
    standings,
    bracket,
    awards,
    teams,
    players,
    news,
    gallery,
    sponsors,
  } = homePrototypeData;

  return (
    <div className={styles.container}>
      {/* 1. Hero Pasca-turnamen */}
      {competition.status === "ready" && champion.status === "ready" && (
        <ChampionHeroSection
          competitionName={competition.data.name}
          champion={champion.data.team}
          date={competition.data.date}
          location={competition.data.location}
        />
      )}

      {/* 2. Rangkuman Kompetisi (Final dan Metrik) */}
      <FeaturedFinalSection featuredFinal={featuredFinal} metrics={metrics} />

      {/* 3. Hasil Pertandingan Terbaru */}
      <LatestResultsSection results={latestResults} />

      {/* 4. Klasemen Akhir */}
      <StandingsPreviewSection standings={standings} />

      {/* 5. Bracket Fase Gugur */}
      <TournamentBracketSection bracket={bracket} />

      {/* 6. Penghargaan */}
      <AwardsSection awards={awards} />

      {/* 7. Tim Peserta */}
      <FeaturedTeamsSection teams={teams} />

      {/* 8. Pemain Sorotan */}
      <FeaturedPlayersSection players={players} />

      {/* 9. Berita Terbaru */}
      <LatestNewsSection news={news} />

      {/* 10. Galeri Kompetisi */}
      <GalleryPreviewSection gallery={gallery} />

      {/* 11. Sponsor dan Mitra */}
      <SponsorsSection sponsors={sponsors} />

      {/* 12. Notice Data Simulasi */}
      <DataSimulationNotice />
    </div>
  );
}
