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
  const tabListRef = useRef<HTMLDivElement>(null);

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
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
      const tabElements = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
      if (tabElements && tabElements[nextIndex]) {
        tabElements[nextIndex].focus();
      }
    }
  };

  // Determine active tab for mobile when activeGroupId === null: default is GRPA
  const mobileActiveTabId = activeGroupId === null ? "GRPA" : activeGroupId;

  return (
    <nav className={styles.nav} aria-label="Filter Grup Klasemen">
      <div className={styles.tabList}>
        {/* Desktop Filter All Button - Regular Button (not part of ARIA tablist) */}
        <button
          type="button"
          className={`${styles.desktopFilterAll} ${activeGroupId === null ? styles.active : ""}`}
          onClick={() => handleGroupSelect(null)}
        >
          Semua Grup
        </button>

        {/* Mobile / Shared ARIA Tablist containing ONLY Grup A and Grup B */}
        <div ref={tabListRef} role="tablist" aria-label="Tab Grup Klasemen" style={{ display: "inline-flex", gap: "0.5rem" }}>
          {groupTabs.map((tab, idx) => {
            const isSelected = mobileActiveTabId === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={isSelected}
                aria-controls={tab.panelId}
                tabIndex={isSelected ? 0 : -1}
                className={`${styles.tabItem} ${isSelected ? styles.active : ""}`}
                onClick={() => handleGroupSelect(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
