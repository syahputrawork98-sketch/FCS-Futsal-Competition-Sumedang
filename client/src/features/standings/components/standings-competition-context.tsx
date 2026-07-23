import React from "react";
import Link from "next/link";
import { Trophy, Calendar, Users, CheckCircle2, ArrowRight, Lock } from "lucide-react";
import type { CompetitionMetadata } from "@/features/matches/types/matches.types";
import styles from "./standings-competition-context.module.css";

type StandingsCompetitionContextProps = {
  competition: CompetitionMetadata;
};

export function StandingsCompetitionContext({ competition }: StandingsCompetitionContextProps) {
  return (
    <section className={styles.card} aria-label="Informasi Kompetisi FCS">
      <div className={styles.details}>
        <div className={styles.badge}>
          <Trophy size={14} aria-hidden="true" color="var(--color-accent-amber, #f59e0b)" />
          <span>{competition.name}</span>
        </div>

        <div className={styles.badge}>
          <Users size={14} aria-hidden="true" />
          <span>{competition.categoryName} • 8 tim • 2 grup</span>
        </div>

        <div className={styles.badge}>
          <Calendar size={14} aria-hidden="true" />
          <span>{competition.dateRangeLabel}</span>
        </div>

        <div className={`${styles.badge} ${styles.statusFinished}`}>
          <CheckCircle2 size={14} aria-hidden="true" />
          <span>Status: {competition.status}</span>
        </div>
      </div>

      <div className={styles.actions}>
        <Link href="/pertandingan" className={styles.activeLink}>
          <span>Semua Pertandingan</span>
          <ArrowRight size={14} aria-hidden="true" />
        </Link>

        <div className={styles.disabledLink} title="Bagan Fase Gugur akan segera hadir pada Plan 07">
          <Lock size={12} aria-hidden="true" />
          <span>Bracket</span>
          <span className={styles.upcomingTag}>Segera</span>
        </div>
      </div>
    </section>
  );
}
