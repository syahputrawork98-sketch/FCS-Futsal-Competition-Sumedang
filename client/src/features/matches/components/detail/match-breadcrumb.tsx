import React from "react";
import Link from "next/link";
import { ChevronRight, ArrowLeft } from "lucide-react";
import styles from "./match-breadcrumb.module.css";

type MatchBreadcrumbProps = {
  matchTitle: string;
};

export function MatchBreadcrumb({ matchTitle }: MatchBreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={styles.breadcrumbNav}>
      <Link href="/pertandingan" className={styles.mobileBackLink}>
        <ArrowLeft size={16} aria-hidden="true" />
        <span>Kembali ke Pertandingan</span>
      </Link>

      <div className={styles.desktopBreadcrumb}>
        <Link href="/" className={styles.link}>
          Beranda
        </Link>
        <ChevronRight size={14} aria-hidden="true" className={styles.separator} />
        <Link href="/pertandingan" className={styles.link}>
          Pertandingan
        </Link>
        <ChevronRight size={14} aria-hidden="true" className={styles.separator} />
        <span className={styles.current} aria-current="page">
          {matchTitle}
        </span>
      </div>
    </nav>
  );
}
