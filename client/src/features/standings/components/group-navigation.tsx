"use client";

import React, { useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./group-navigation.module.css";

type GroupNavigationProps = {
  activeGroupId: string | null;
  onSelectGroup?: (groupId: string | null) => void;
};

export function GroupNavigation({ activeGroupId, onSelectGroup }: GroupNavigationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const tabListRef = useRef<HTMLDivElement>(null);

  const tabs = [
    { id: null, label: "Semua Grup", desktopOnly: true },
    { id: "GRPA", label: "Grup A", desktopOnly: false },
    { id: "GRPB", label: "Grup B", desktopOnly: false },
  ];

  const handleTabClick = (groupId: string | null) => {
    if (onSelectGroup) {
      onSelectGroup(groupId);
    }

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
    const visibleTabs = tabs.filter((t) => !t.desktopOnly || (typeof window !== "undefined" && window.innerWidth >= 768));
    let nextIndex = currentIndex;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextIndex = (currentIndex + 1) % visibleTabs.length;
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      nextIndex = (currentIndex - 1 + visibleTabs.length) % visibleTabs.length;
    }

    if (nextIndex !== currentIndex) {
      const nextTab = visibleTabs[nextIndex];
      handleTabClick(nextTab.id);
      const tabElements = tabListRef.current?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
      if (tabElements && tabElements[nextIndex]) {
        tabElements[nextIndex].focus();
      }
    }
  };

  return (
    <nav className={styles.nav} aria-label="Filter Grup Klasemen">
      <div ref={tabListRef} className={styles.tabList} role="tablist" aria-label="Pilihan Grup Klasemen">
        {tabs.map((tab, idx) => {
          const isSelected =
            tab.id === null ? activeGroupId === null : activeGroupId === tab.id;
          const tabId = tab.id ? `tab-${tab.id}` : "tab-all";
          const panelId = tab.id ? `panel-${tab.id}` : "panel-all";

          return (
            <button
              key={tab.label}
              id={tabId}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={panelId}
              tabIndex={isSelected ? 0 : -1}
              className={`${styles.tabItem} ${isSelected ? styles.active : ""} ${
                tab.desktopOnly ? styles.desktopOnly : ""
              }`}
              onClick={() => handleTabClick(tab.id)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
