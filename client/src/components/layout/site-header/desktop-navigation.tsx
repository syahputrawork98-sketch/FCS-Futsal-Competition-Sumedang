"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { primaryNavigation } from "@/config/navigation";
import styles from "./desktop-navigation.module.css";

export function DesktopNavigation() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDropdown((prev) => {
          if (prev !== null) {
            const toggle = document.getElementById(`dropdown-toggle-${prev}`);
            toggle?.focus();
          }
          return null;
        });
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const isActive = (href?: string, matchPaths?: string[]) => {
    if (!pathname) return false;
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && href && pathname.startsWith(href)) return true;
    if (matchPaths?.some(path => pathname.startsWith(path))) return true;
    return false;
  };

  return (
    <nav className={styles.nav} aria-label="Navigasi Utama">
      <ul className={styles.list} ref={navRef}>
        {primaryNavigation.map((item, index) => {
          const isItemActive = isActive(item.href, item.matchPaths);
          const hasChildren = item.children && item.children.length > 0;
          const isOpen = openDropdown === index;

          if (hasChildren) {
            return (
              <li key={item.label} className={styles.item}>
                <button
                  id={`dropdown-toggle-${index}`}
                  type="button"
                  className={`${styles.dropdownToggle} ${isItemActive ? styles.active : ""}`}
                  onClick={() => setOpenDropdown(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`dropdown-${index}`}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown size={16} aria-hidden="true" />
                </button>
                {isOpen && (
                  <div id={`dropdown-${index}`} className={styles.dropdownMenu} role="menu" aria-labelledby={`dropdown-toggle-${index}`}>
                    {item.children!.map((child) => {
                      const isChildActive = isActive(child.href);
                      return (
                        <Link
                          key={child.label}
                          href={child.href}
                          className={`${styles.dropdownLink} ${isChildActive ? styles.activeChild : ""}`}
                          aria-current={isChildActive ? "page" : undefined}
                          role="menuitem"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </li>
            );
          }

          return (
            <li key={item.label} className={styles.item}>
              <Link
                href={item.href!}
                className={`${styles.link} ${isItemActive ? styles.active : ""}`}
                aria-current={isItemActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
