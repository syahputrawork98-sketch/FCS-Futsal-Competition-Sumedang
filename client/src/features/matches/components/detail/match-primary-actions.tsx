import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ShareMatchButton } from "./share-match-button";
import styles from "./match-primary-actions.module.css";

export function MatchPrimaryActions() {
  return (
    <div className={styles.container}>
      <Link href="/pertandingan" className={styles.backButton}>
        <ArrowLeft size={16} aria-hidden="true" />
        <span>Kembali ke Daftar Pertandingan</span>
      </Link>

      <ShareMatchButton />
    </div>
  );
}
