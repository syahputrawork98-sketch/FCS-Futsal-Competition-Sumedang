import React from "react";
import { Calendar } from "lucide-react";
import type { MatchGroupedByDate, MatchesPrototypeData } from "../types/matches.types";
import { MatchCard } from "./match-card";
import styles from "./date-group.module.css";

type DateGroupProps = {
  group: MatchGroupedByDate;
  prototypeData: MatchesPrototypeData;
};

export function DateGroup({ group, prototypeData }: DateGroupProps) {
  const teamMap = new Map(prototypeData.teams.map((t) => [t.id, t]));
  const phaseMap = new Map(prototypeData.phases.map((p) => [p.id, p]));
  const groupMap = new Map(prototypeData.groups.map((g) => [g.id, g]));
  const venueMap = new Map(prototypeData.venues.map((v) => [v.id, v]));

  return (
    <section className={styles.groupContainer} aria-labelledby={`date-heading-${group.date}`}>
      <div className={styles.dateHeader}>
        <h3 id={`date-heading-${group.date}`} className={styles.dateTitle}>
          <Calendar size={18} aria-hidden="true" color="var(--color-accent-blue, #38bdf8)" />
          <span>{group.dateLabel}</span>
        </h3>
        <div className={styles.dateLine} aria-hidden="true" />
      </div>

      <div className={styles.cardsGrid}>
        {group.matches.map((match) => {
          const teamA = teamMap.get(match.teamAId);
          const teamB = teamMap.get(match.teamBId);
          const phase = phaseMap.get(match.phaseId);
          const groupItem = match.groupId ? groupMap.get(match.groupId) : null;
          const venue = venueMap.get(match.venueId);

          if (!teamA || !teamB || !phase) return null;

          return (
            <MatchCard
              key={match.id}
              match={match}
              teamA={teamA}
              teamB={teamB}
              phase={phase}
              group={groupItem}
              venue={venue}
            />
          );
        })}
      </div>
    </section>
  );
}
