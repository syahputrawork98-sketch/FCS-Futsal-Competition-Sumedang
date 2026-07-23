import React from "react";
import { Calendar, Clock, MapPin, Trophy, Shield } from "lucide-react";
import type { MatchGroup, MatchPhase, MatchRecord, MatchVenue } from "../../types/matches.types";
import { formatFullIndonesianDate, formatMatchTime } from "../../lib/match-formatters";
import styles from "./match-metadata-grid.module.css";

type MatchMetadataGridProps = {
  match: MatchRecord;
  phase: MatchPhase;
  group?: MatchGroup | null;
  venue?: MatchVenue | null;
};

export function MatchMetadataGrid({
  match,
  phase,
  group,
  venue,
}: MatchMetadataGridProps) {
  return (
    <section className={styles.grid} aria-label="Metadata Pertandingan">
      {/* Date */}
      <div className={styles.item}>
        <div className={styles.iconBox}>
          <Calendar size={18} aria-hidden="true" />
        </div>
        <div className={styles.details}>
          <span className={styles.label}>Tanggal</span>
          <span className={styles.value}>{formatFullIndonesianDate(match.date)}</span>
        </div>
      </div>

      {/* Time */}
      <div className={styles.item}>
        <div className={styles.iconBox}>
          <Clock size={18} aria-hidden="true" />
        </div>
        <div className={styles.details}>
          <span className={styles.label}>Waktu Kickoff</span>
          <span className={styles.value}>{formatMatchTime(match.startTime)} WIB</span>
        </div>
      </div>

      {/* Venue */}
      {venue && (
        <div className={styles.item}>
          <div className={styles.iconBox}>
            <MapPin size={18} aria-hidden="true" />
          </div>
          <div className={styles.details}>
            <span className={styles.label}>Venue</span>
            <span className={styles.value}>{venue.name}</span>
          </div>
        </div>
      )}

      {/* Phase */}
      <div className={styles.item}>
        <div className={styles.iconBox}>
          <Trophy size={18} aria-hidden="true" />
        </div>
        <div className={styles.details}>
          <span className={styles.label}>Fase Competisi</span>
          <span className={styles.value}>{phase.name}</span>
        </div>
      </div>

      {/* Group if present */}
      {group && (
        <div className={styles.item}>
          <div className={styles.iconBox}>
            <Shield size={18} aria-hidden="true" />
          </div>
          <div className={styles.details}>
            <span className={styles.label}>Grup</span>
            <span className={styles.value}>{group.name}</span>
          </div>
        </div>
      )}
    </section>
  );
}
