import React from "react";
import type { MatchTeam } from "../types/matches.types";
import styles from "./team-identity.module.css";

type TeamIdentityProps = {
  team: MatchTeam;
  reversed?: boolean;
};

export function TeamIdentity({ team, reversed = false }: TeamIdentityProps) {
  const logoContent = team.logo.src ? (
    <img
      src={team.logo.src}
      alt={team.logo.alt || `Logo ${team.name}`}
      className={styles.logo}
    />
  ) : (
    <div className={styles.fallback} aria-hidden="true">
      {team.shortName || team.name.slice(0, 3).toUpperCase()}
    </div>
  );

  return (
    <div
      className={styles.container}
      style={{ flexDirection: reversed ? "row-reverse" : "row" }}
    >
      {logoContent}
      <span className={styles.name} title={team.name}>
        {team.name}
      </span>
    </div>
  );
}
