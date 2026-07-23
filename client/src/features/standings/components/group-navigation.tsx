"use client";

import React, { useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./group-navigation.module.css";

type GroupNavigationProps = {
  activeGroupId: string | null;
};

export function GroupNavigation({ activeGroupId }: GroupNavigationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const mobileTabListRef = useRef<HTMLDivElement>(null);

  const groupTabs = [
    { id: "GRPA", label: "Grup A", panelId: "panel-GRPA" },
    { id: "GRPB", label: "Grup B", panelId: "panel-GRPB" },
  ];

  const handleGroupSelect = (groupId: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (groupId) {
      params.set("grup", groupId);
    } else {
      params.delete("grup");
    }

    const newQueryString = params.toString();
    const newUrl = newQueryString ? `${pathname}?${newQueryString}` : pathname;
    router.replace(newUrl, { scroll: false });
  };

  const handleMobileKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    let nextIndex = currentIndex;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % groupTabs.length;
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + groupTabs.length) % groupTabs.length;
    }

    if (nextIndex !== currentIndex) {
      const nextTab = groupTabs[nextIndex];
      handleGroupSelect(nextTab.id);
      const tabElements = mobileTabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
      if (tabElements && tabElements[nextIndex]) {
        tabElements[nextIndex].focus();
      }
    }
  };

  // Mobile active tab logic: default is GRPA when activeGroupId is null
  const mobileActiveTabId = activeGroupId === null ? "GRPA" : activeGroupId;

  return (
    <nav className={styles.nav} aria-label="Filter Grup Klasemen">
      {/* 1. Desktop Filter Navigation (Regular buttons, NO role="tablist", NO role="tab") */}
      <div className={styles.desktopFilterWrapper}>
        <button
          type="button"
          className={`${styles.desktopBtn} ${activeGroupId === null ? styles.desktopActive : ""}`}
          onClick={() => handleGroupSelect(null)}
        >
          Semua Grup
        </button>
        <button
          type="button"
          className={`${styles.desktopBtn} ${activeGroupId === "GRPA" ? styles.desktopActive : ""}`}
          onClick={() => handleGroupSelect("GRPA")}
        >
          Grup A
        </button>
        <button
          type="button"
          className={`${styles.desktopBtn} ${activeGroupId === "GRPB" ? styles.desktopActive : ""}`}
          onClick={() => handleGroupSelect("GRPB")}
        >
          Grup B
        </button>
      </div>

      {/* 2. Mobile Tab Navigation (Strict ARIA Tablist pattern for Mobile, ONLY Grup A & Grup B) */}
      <div
        ref={mobileTabListRef}
        role="tablist"
        aria-label="Tab Klasemen Mobile"
        className={styles.mobileTabList}
      >
        {groupTabs.map((tab, idx) => {
          const isSelected = mobileActiveTabId === tab.id;
          return (
            <button
              key={tab.id}
              id={`tab-mobile-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={tab.panelId}
              tabIndex={isSelected ? 0 : -1}
              className={`${styles.mobileTab} ${isSelected ? styles.mobileActive : ""}`}
              onClick={() => handleGroupSelect(tab.id)}
              onKeyDown={(e) => handleMobileKeyDown(e, idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
