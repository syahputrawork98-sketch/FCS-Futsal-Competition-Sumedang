"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { primaryNavigation, headerAction } from "@/config/navigation";
import { SiteBrand } from "@/components/layout/site-brand/site-brand";
import { IconButton } from "@/components/ui/icon-button/icon-button";
import { ActionLink } from "@/components/ui/action-link/action-link";
import styles from "./mobile-navigation.module.css";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("navigation-open");
      dialogRef.current?.showModal();
      wasOpen.current = true;
    } else {
      document.body.classList.remove("navigation-open");
      dialogRef.current?.close();
      if (wasOpen.current) {
        toggleRef.current?.focus();
        wasOpen.current = false;
      }
    }
    return () => {
      document.body.classList.remove("navigation-open");
    };
  }, [isOpen]);

  // Close menu when pathname changes
  const prevPathnameRef = useRef(pathname);
  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;
      setIsOpen(false);
    }
  }, [pathname]);

  const isActive = (href?: string, matchPaths?: string[]) => {
    if (!pathname) return false;
    if (href === "/" && pathname === "/") return true;
    if (href !== "/" && href && pathname.startsWith(href)) return true;
    if (matchPaths?.some(path => pathname.startsWith(path))) return true;
    return false;
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      setIsOpen(false);
    }
  };

  return (
    <div className={styles.container}>
      <IconButton
        ref={toggleRef}
        label={isOpen ? "Tutup menu" : "Buka menu"}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu-dialog"
        inverse
      >
        <Menu size={24} aria-hidden="true" />
      </IconButton>

      <dialog
        id="mobile-menu-dialog"
        ref={dialogRef}
        className={styles.dialog}
        onClick={handleDialogClick}
        aria-label="Menu Utama"
        onClose={() => setIsOpen(false)}
      >
        <div className={styles.drawer}>
          <div className={styles.header}>
            <SiteBrand compact inverse />
            <IconButton label="Tutup menu" onClick={handleCloseClick} inverse>
              <X size={24} aria-hidden="true" />
            </IconButton>
          </div>

          <nav className={styles.nav}>
            <ul className={styles.list}>
              {primaryNavigation.map((item) => {
                const isItemActive = isActive(item.href, item.matchPaths);
                const hasChildren = item.children && item.children.length > 0;

                return (
                  <li key={item.label} className={styles.item}>
                    {hasChildren ? (
                      <div className={styles.itemGroup}>
                        <span className={`${styles.groupLabel} ${isItemActive ? styles.active : ""}`}>
                          {item.label}
                        </span>
                        <ul className={styles.subList}>
                          {item.children!.map((child) => {
                            const isChildActive = isActive(child.href);
                            return (
                              <li key={child.label}>
                                <Link 
                                  href={child.href} 
                                  className={`${styles.link} ${isChildActive ? styles.active : ""}`} 
                                  onClick={handleCloseClick}
                                  aria-current={isChildActive ? "page" : undefined}
                                >
                                  {child.label}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        href={item.href!}
                        className={`${styles.link} ${isItemActive ? styles.active : ""}`}
                        aria-current={isItemActive ? "page" : undefined}
                        onClick={handleCloseClick}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.footer}>
            <ActionLink href={headerAction.href} className={styles.cta} onClick={handleCloseClick}>
              {headerAction.label}
            </ActionLink>
          </div>
        </div>
      </dialog>
    </div>
  );
}
