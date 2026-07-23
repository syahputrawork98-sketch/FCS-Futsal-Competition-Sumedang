import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import styles from "./standings-page-header.module.css";

type StandingsPageHeaderProps = {
  statusLabel: string;
};

export function StandingsPageHeader({ statusLabel }: StandingsPageHeaderProps) {
  return (
    <header className={styles.header}>
      <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
        <ol className={styles.breadcrumbList}>
          <li>
            <Link href="/" className={styles.breadcrumbLink}>
              Beranda
            </Link>
          </li>
          <li>
            <ChevronRight size={14} className={styles.separator} aria-hidden="true" />
          </li>
          <li>
            <span className={styles.current} aria-current="page">
              Klasemen
            </span>
          </li>
        </ol>
      </nav>

      <span className={styles.eyebrow}>Klasemen</span>
      <h1 className={styles.title}>Klasemen Grup</h1>
      <p className={styles.description}>
        Lihat posisi akhir seluruh tim pada fase grup FCS Industrial Cup Sumedang 2026.
      </p>
      <div className={styles.meta}>
        <span>2 grup</span>
        <span>•</span>
        <span>{statusLabel}</span>
      </div>
    </header>
  );
}
