import React from "react";
import { Table, GitMerge, Shield } from "lucide-react";
import styles from "./related-navigation.module.css";

export function RelatedNavigation() {
  const items = [
    {
      title: "Klasemen Grup",
      icon: Table,
      note: "Segera tersedia",
    },
    {
      title: "Bracket Fase Gugur",
      icon: GitMerge,
      note: "Segera tersedia",
    },
    {
      title: "Daftar Tim Peserta",
      icon: Shield,
      note: "Segera tersedia",
    },
  ];

  return (
    <section className={styles.container} aria-label="Navigasi Terkait">
      <h3 className={styles.title}>Lihat Juga</h3>
      <div className={styles.grid}>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={styles.cardDisabled}
              title={`${item.title} akan segera hadir pada plan berikutnya`}
            >
              <div className={styles.cardInfo}>
                <Icon size={18} className={styles.icon} aria-hidden="true" />
                <span className={styles.label}>{item.title}</span>
              </div>
              <span className={styles.upcomingBadge}>{item.note}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
