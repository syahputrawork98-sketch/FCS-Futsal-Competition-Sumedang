import { TeamLogoFallback } from "./team-logo-fallback";
import styles from "./desktop-bracket.module.css";
import type { HomeBracketData, HomeMatch } from "../types/home.types";

type DesktopBracketProps = {
  data: HomeBracketData;
};

export function DesktopBracket({ data }: DesktopBracketProps) {
  const renderMatch = (match: HomeMatch, title: string) => (
    <div className={styles.matchNode}>
      <h4 className={styles.matchTitle}>{title}</h4>
      <div className={styles.matchCard}>
        <div className={`${styles.teamRow} ${match.homeScore > match.awayScore ? styles.winner : ""}`}>
          <div className={styles.teamInfo}>
            {match.homeTeam.logo.src ? (
              <img src={match.homeTeam.logo.src} alt={match.homeTeam.logo.alt} className={styles.logo} />
            ) : (
              <TeamLogoFallback name={match.homeTeam.name} size="small" />
            )}
            <span className={styles.teamName}>{match.homeTeam.name}</span>
          </div>
          <span className={styles.score}>{match.homeScore}</span>
        </div>
        <div className={`${styles.teamRow} ${match.awayScore > match.homeScore ? styles.winner : ""}`}>
          <div className={styles.teamInfo}>
            {match.awayTeam.logo.src ? (
              <img src={match.awayTeam.logo.src} alt={match.awayTeam.logo.alt} className={styles.logo} />
            ) : (
              <TeamLogoFallback name={match.awayTeam.name} size="small" />
            )}
            <span className={styles.teamName}>{match.awayTeam.name}</span>
          </div>
          <span className={styles.score}>{match.awayScore}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.round}>
        {data.semifinals.map((match, i) => (
          <div key={match.id} className={styles.semifinalWrapper}>
            {renderMatch(match, `Semifinal ${i + 1}`)}
            <div className={styles.connectorRight} aria-hidden="true" />
          </div>
        ))}
      </div>
      
      <div className={styles.roundCenter}>
        <div className={styles.finalWrapper}>
          <div className={styles.connectorLeft} aria-hidden="true" />
          {renderMatch(data.final, "Final")}
          <div className={styles.connectorRight} aria-hidden="true" />
        </div>
        
        {data.thirdPlace && (
          <div className={styles.thirdPlaceWrapper}>
            {renderMatch(data.thirdPlace, "Perebutan Tempat Ke-3")}
          </div>
        )}
      </div>
      
      <div className={styles.round}>
        <div className={styles.championWrapper}>
          <div className={styles.connectorLeft} aria-hidden="true" />
          <div className={styles.championNode}>
            <h4 className={styles.championTitle}>Juara</h4>
            <div className={styles.championCard}>
              {data.champion.logo.src ? (
                <img src={data.champion.logo.src} alt={data.champion.logo.alt} className={styles.championLogo} />
              ) : (
                <TeamLogoFallback name={data.champion.name} size="large" />
              )}
              <span className={styles.championName}>{data.champion.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
