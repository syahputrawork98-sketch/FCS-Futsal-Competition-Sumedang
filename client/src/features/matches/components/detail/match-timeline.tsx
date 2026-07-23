import React from "react";
import { History } from "lucide-react";
import type { ResolvedMatchTimelineItem } from "../../types/match-detail.types";
import { getMatchEventTypeLabel, getPeriodLabel } from "../../lib/match-detail-formatters";
import styles from "./match-timeline.module.css";

type MatchTimelineProps = {
  timeline: ResolvedMatchTimelineItem[];
};

export function MatchTimeline({ timeline }: MatchTimelineProps) {
  if (timeline.length === 0) {
    return (
      <section id="timeline" className={styles.container} aria-label="Timeline Pertandingan">
        <h3 className={styles.title}>
          <History size={18} aria-hidden="true" color="var(--color-accent-blue, #38bdf8)" />
          <span>Timeline Pertandingan</span>
        </h3>
        <p style={{ color: "var(--color-text-muted)", fontSize: "0.875rem" }}>
          Belum ada kejadian pertandingan terverifikasi yang dicatat.
        </p>
      </section>
    );
  }

  return (
    <section id="timeline" className={styles.container} aria-label="Timeline Pertandingan">
      <h3 className={styles.title}>
        <History size={18} aria-hidden="true" color="var(--color-accent-blue, #38bdf8)" />
        <span>Timeline Kejadian Laga</span>
      </h3>

      <ol className={styles.timelineList}>
        {timeline.map((item) => {
          const isGoal = item.type === "goal" || item.type === "own_goal";
          const isYellow = item.type === "yellow_card";
          const periodText = getPeriodLabel(item.period);

          return (
            <li key={item.id} className={styles.item}>
              <div className={styles.minuteBadge}>
                {item.minute}&apos;
              </div>

              <div className={styles.contentCard}>
                <div className={styles.eventDetails}>
                  <div className={styles.eventHeader}>
                    <span>
                      {isGoal ? "⚽" : isYellow ? "🟨" : "🔹"}
                    </span>
                    <span
                      className={
                        isGoal
                          ? styles.eventTypeGoal
                          : isYellow
                          ? styles.eventTypeYellow
                          : ""
                      }
                    >
                      {getMatchEventTypeLabel(item.type)}
                    </span>
                    {periodText && (
                      <span style={{ fontSize: "0.75rem", color: "var(--color-accent-amber)" }}>
                        • {periodText}
                      </span>
                    )}
                    <span className={styles.teamLabel}>• {item.team.name}</span>
                  </div>

                  {item.player && (
                    <span className={styles.playerName}>
                      {item.player.displayName}
                    </span>
                  )}

                  {item.relatedPlayer && (
                    <span className={styles.assistText}>
                      Assist: {item.relatedPlayer.displayName}
                    </span>
                  )}
                </div>

                {item.scoreAfterEvent && (
                  <div
                    className={styles.scoreRunning}
                    aria-label={`Skor saat ini ${item.scoreAfterEvent.teamAScore} - ${item.scoreAfterEvent.teamBScore}`}
                  >
                    {item.scoreAfterEvent.teamAScore} – {item.scoreAfterEvent.teamBScore}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
