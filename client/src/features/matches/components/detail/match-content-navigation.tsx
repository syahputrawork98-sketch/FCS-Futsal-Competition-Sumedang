import React from "react";
import styles from "./match-content-navigation.module.css";

type MatchContentNavigationProps = {
  hasVenue?: boolean;
};

export function MatchContentNavigation({
  hasVenue = true,
}: MatchContentNavigationProps) {
  const items = [
    { label: "Ringkasan", href: "#ringkasan" },
    { label: "Timeline", href: "#timeline" },
    { label: "Statistik", href: "#statistik" },
    { label: "Tim & Official", href: "#tim" },
    { label: "Perangkat", href: "#perangkat" },
  ];

  if (hasVenue) {
    items.push({ label: "Venue", href: "#venue" });
  }

  return (
    <nav className={styles.navContainer} aria-label="Navigasi Konten Detail">
      {items.map((item) => (
        <a key={item.href} href={item.href} className={styles.navLink}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
