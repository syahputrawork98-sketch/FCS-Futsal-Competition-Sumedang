"use client";

import React, { useState } from "react";
import { Share2, Check } from "lucide-react";
import styles from "./match-primary-actions.module.css";

export function ShareMatchButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // Fallback if clipboard API fails
      setCopied(false);
    }
  };

  return (
    <div className={styles.shareWrapper}>
      <button
        type="button"
        className={styles.shareButton}
        onClick={handleShare}
        aria-label="Salin tautan pertandingan ini"
      >
        {copied ? (
          <>
            <Check size={16} aria-hidden="true" color="#34d399" />
            <span>Tautan Disalin!</span>
          </>
        ) : (
          <>
            <Share2 size={16} aria-hidden="true" />
            <span>Salin Tautan</span>
          </>
        )}
      </button>

      <span className="sr-only" aria-live="polite">
        {copied ? "Tautan pertandingan telah berhasil disalin ke clipboard." : ""}
      </span>
    </div>
  );
}
