"use client";

import React from "react";
import Link from "next/link";
import styles from "./group-navigation.module.css";

type GroupNavigationProps = {
  activeGroupId: string | null;
};

export function GroupNavigation({ activeGroupId }: GroupNavigationProps) {
  return (
    <nav className={styles.nav} aria-label="Filter Grup Klasemen">
      <div className={styles.tabList} role="tablist">
        <Link
          href="/klasemen"
          className={`${styles.tabItem} ${activeGroupId === null ? styles.active : ""}`}
          role="tab"
          aria-selected={activeGroupId === null}
          scroll={false}
        >
          Semua Grup
        </Link>
        <Link
          href="/klasemen?grup=GRPA"
          className={`${styles.tabItem} ${activeGroupId === "GRPA" ? styles.active : ""}`}
          role="tab"
          aria-selected={activeGroupId === "GRPA"}
          scroll={false}
        >
          Grup A
        </Link>
        <Link
          href="/klasemen?grup=GRPB"
          className={`${styles.tabItem} ${activeGroupId === "GRPB" ? styles.active : ""}`}
          role="tab"
          aria-selected={activeGroupId === "GRPB"}
          scroll={false}
        >
          Grup B
        </Link>
      </div>
    </nav>
  );
}
