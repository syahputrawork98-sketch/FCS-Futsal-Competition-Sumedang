import React from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export function StandingsEmptyState() {
  return (
    <div
      style={{
        background: "rgba(15, 23, 42, 0.4)",
        border: "1px dashed rgba(255, 255, 255, 0.15)",
        borderRadius: "12px",
        padding: "2.5rem 1.5rem",
        textAlign: "center",
        margin: "1.5rem 0",
      }}
    >
      <AlertCircle size={32} color="#94a3b8" style={{ marginBottom: "0.75rem" }} />
      <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#ffffff", margin: "0 0 0.5rem 0" }}>
        Klasemen Belum Tersedia
      </h3>
      <p style={{ fontSize: "0.875rem", color: "#94a3b8", margin: "0 0 1.25rem 0" }}>
        Hasil fase grup belum cukup untuk menyusun tabel klasemen resmi.
      </p>
      <Link
        href="/pertandingan"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.625rem 1.25rem",
          background: "#38bdf8",
          color: "#0f172a",
          fontWeight: 700,
          borderRadius: "8px",
          textDecoration: "none",
          fontSize: "0.875rem",
        }}
      >
        Lihat Jadwal & Hasil Pertandingan
      </Link>
    </div>
  );
}

export function StandingsPartialState() {
  return (
    <div
      style={{
        background: "rgba(245, 158, 11, 0.1)",
        border: "1px solid rgba(245, 158, 11, 0.3)",
        borderRadius: "8px",
        padding: "1rem 1.25rem",
        marginBottom: "1.5rem",
        fontSize: "0.875rem",
        color: "#fbbf24",
      }}
    >
      <strong>Data Klasemen Belum Lengkap:</strong> Sebagian data pertandingan fase grup belum dapat dihitung atau memerlukan verifikasi resmi.
    </div>
  );
}

export function StandingsErrorState({ reset }: { reset?: () => void }) {
  return (
    <div
      style={{
        background: "rgba(239, 68, 68, 0.1)",
        border: "1px solid rgba(239, 68, 68, 0.3)",
        borderRadius: "12px",
        padding: "2rem 1.5rem",
        textAlign: "center",
        margin: "2rem 0",
      }}
    >
      <AlertCircle size={32} color="#f87171" style={{ marginBottom: "0.75rem" }} />
      <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#ffffff", margin: "0 0 0.5rem 0" }}>
        Klasemen Gagal Dimuat
      </h3>
      <p style={{ fontSize: "0.875rem", color: "#f87171", margin: "0 0 1.25rem 0" }}>
        Terjadi kendala saat menghitung data klasemen. Silakan coba lagi.
      </p>
      {reset && (
        <button
          type="button"
          onClick={reset}
          style={{
            padding: "0.5rem 1rem",
            background: "#ef4444",
            color: "#ffffff",
            fontWeight: 700,
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            fontSize: "0.875rem",
          }}
        >
          Coba Lagi
        </button>
      )}
    </div>
  );
}
