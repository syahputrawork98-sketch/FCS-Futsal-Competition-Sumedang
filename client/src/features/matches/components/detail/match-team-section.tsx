import React from "react";
import { Users } from "lucide-react";
import type { TeamOfficialSummary } from "../../types/match-detail.types";
import type { MatchTeam } from "../../types/matches.types";
import { MatchSectionUnavailable } from "./match-section-unavailable";
import styles from "./match-team-section.module.css";

type MatchTeamSectionProps = {
  teamA: MatchTeam;
  teamB: MatchTeam;
  teamAOfficials: TeamOfficialSummary[];
  teamBOfficials: TeamOfficialSummary[];
};

export function MatchTeamSection({
  teamA,
  teamB,
  teamAOfficials,
  teamBOfficials,
}: MatchTeamSectionProps) {
  return (
    <div id="tim" className={styles.container}>
      {/* Rule 5 & 6: Lineups unavailable state */}
      <MatchSectionUnavailable
        title="Susunan Pemain Pertandingan Belum Tersedia"
        description="Data daftar susunan pemain (lineup) starter dan cadangan per pertandingan belum dicatat dalam database prototype ini."
      />

      {/* Team Officials Card */}
      <section className={styles.officialsCard} aria-label="Official Tim">
        <h3 className={styles.title}>
          <Users size={18} aria-hidden="true" color="var(--color-accent-blue, #38bdf8)" />
          <span>Official Terdaftar Kedua Tim</span>
        </h3>

        <div className={styles.grid}>
          {/* Team A Officials */}
          <div className={styles.teamColumn}>
            <h4 className={styles.teamName}>{teamA.name}</h4>
            <div className={styles.officialList}>
              {teamAOfficials.map((official) => (
                <div key={official.id} className={styles.officialItem}>
                  <div className={styles.avatar} aria-hidden="true">
                    {official.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className={styles.officialDetails}>
                    <span className={styles.name}>{official.name}</span>
                    <span className={styles.role}>{official.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team B Officials */}
          <div className={styles.teamColumn}>
            <h4 className={styles.teamName}>{teamB.name}</h4>
            <div className={styles.officialList}>
              {teamBOfficials.map((official) => (
                <div key={official.id} className={styles.officialItem}>
                  <div className={styles.avatar} aria-hidden="true">
                    {official.name.slice(0, 2).toUpperCase()}
                  </div>
                  <div className={styles.officialDetails}>
                    <span className={styles.name}>{official.name}</span>
                    <span className={styles.role}>{official.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
