import React from "react";
import { MapPin } from "lucide-react";
import type { MatchVenue } from "../../types/matches.types";
import styles from "./match-venue-card.module.css";

type MatchVenueCardProps = {
  venue: MatchVenue;
};

export function MatchVenueCard({ venue }: MatchVenueCardProps) {
  return (
    <section id="venue" className={styles.card} aria-label="Informasi Venue">
      <h3 className={styles.title}>
        <MapPin size={18} aria-hidden="true" color="var(--color-accent-blue, #38bdf8)" />
        <span>Venue Pertandingan</span>
      </h3>

      <h4 className={styles.venueName}>{venue.name}</h4>

      {(venue.district || venue.city) && (
        <p className={styles.location}>
          {[venue.district, venue.city].filter(Boolean).join(", ")}
        </p>
      )}

      <div className={styles.notice}>
        Lokasi venue simulasi untuk prototype FCS Industrial Cup Sumedang 2026.
      </div>
    </section>
  );
}
