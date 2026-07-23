import React from "react";
import Link from "next/link";
import { Trophy, Calendar, Users, CheckCircle2 } from "lucide-react";
import type { CompetitionMetadata } from "../types/matches.types";
import styles from "./competition-context.module.css";

type CompetitionContextProps = {
  competition: CompetitionMetadata;
};

export function CompetitionContext({ competition }: CompetitionContextProps) {
  return (
    <section className={styles.contextBar} aria-label="Informasi Kompetisi">
      <div className={styles.details}>
        <div className={styles.badge}>
          <Trophy size={14} aria-hidden="true" color="var(--color-accent-amber, #f59e0b)" />
          <span>{competition.name}</span>
        </div>

        <div className={styles.badge}>
          <Users size={14} aria-hidden="true" />
          <span>{competition.categoryName}</span>
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
        <Link href="/klasemen" className={styles.activeLinkPill}>
          <span>Klasemen</span>
        </Link>

        <div className={styles.disabledLinkPill} title="Halaman Bracket akan segera hadir pada tahap berikutnya">
          <span>Bracket</span>
          <span className={styles.upcomingTag}>Segera</span>
        </div>
      </div>
    </section>
  );
}
