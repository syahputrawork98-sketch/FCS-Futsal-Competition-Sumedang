import React from "react";
import { UserCheck } from "lucide-react";
import type {
  MatchOfficialAssignment,
  MatchOfficialSummary,
} from "../../types/match-detail.types";
import styles from "./match-officials-section.module.css";

type MatchOfficialsSectionProps = {
  officials: Array<
    MatchOfficialAssignment & { official: MatchOfficialSummary }
  >;
};

export function MatchOfficialsSection({
  officials,
}: MatchOfficialsSectionProps) {
  if (officials.length === 0) return null;

  return (
    <section id="perangkat" className={styles.card} aria-label="Perangkat Pertandingan">
      <h3 className={styles.title}>
        <UserCheck size={18} aria-hidden="true" color="var(--color-accent-blue, #38bdf8)" />
        <span>Perangkat Pertandingan Bertugas</span>
      </h3>

      <div className={styles.grid}>
        {officials.map((item) => (
          <div key={item.id} className={styles.officialCard}>
            <div className={styles.avatar} aria-hidden="true">
              {item.official.name.slice(0, 2).toUpperCase()}
            </div>
            <div className={styles.info}>
              <span className={styles.role}>{item.role}</span>
              <span className={styles.name}>{item.official.name}</span>
              <span className={styles.competency}>{item.official.competency}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
