"use client";

import React, { useState, useEffect, useRef } from "react";
import { Share2, Check, AlertCircle } from "lucide-react";
import styles from "./match-primary-actions.module.css";

type CopyState = "idle" | "success" | "error";

export function ShareMatchButton() {
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, []);

  const handleShare = async () => {
    clearTimer();

    try {
      if (typeof window !== "undefined" && navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setCopyState("success");
        timeoutRef.current = setTimeout(() => {
          setCopyState("idle");
        }, 3000);
      } else {
        setCopyState("error");
        timeoutRef.current = setTimeout(() => {
          setCopyState("idle");
        }, 4000);
      }
    } catch {
      setCopyState("error");
      timeoutRef.current = setTimeout(() => {
        setCopyState("idle");
      }, 4000);
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
        {copyState === "success" ? (
          <>
            <Check size={16} aria-hidden="true" color="#34d399" />
            <span>Tautan disalin</span>
          </>
        ) : copyState === "error" ? (
          <>
            <AlertCircle size={16} aria-hidden="true" color="#f87171" />
            <span>Gagal menyalin</span>
          </>
        ) : (
          <>
            <Share2 size={16} aria-hidden="true" />
            <span>Salin Tautan</span>
          </>
        )}
      </button>

      <span className="sr-only" aria-live="polite">
        {copyState === "success"
          ? "Tautan pertandingan telah berhasil disalin."
          : copyState === "error"
          ? "Tautan gagal disalin. Silakan salin alamat dari browser."
          : ""}
      </span>
    </div>
  );
}
